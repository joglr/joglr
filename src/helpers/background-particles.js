import debounce from 'lodash.debounce'
import getElPosition from './get-el-position'

const DEBUG = window.location.pathname === 'localhost'

if (DEBUG) console.clear()

let W
let H
let Particles = []
let ctx
let isFirstFrame = true
let pixelAspectRatio = window.devicePixelRatio || 1

let params = {
  // Amount of particles to generate.

  count: 7,

  // Minimum and maximum mass for a particle. The mass determines the size of the particle (fake 3d)

  minSize: 5,
  maxSize: 7,

  // Random initial initialVelocity factor

  initialVelocity: 3,

  // Gravity factor (0 for microgravity)

  gravity: 0.3 * (Math.floor(Math.random() * 2) - 0.5) * 2,

  // Text to draw in particle (optional)

  text: '',

  // Margin to generate particles within (does not affect real boundaries)

  margin: 20,

  mouse: true,
  bouncePenalty: -0.5, // reduce or increase velocity, when bouncing with something.
  fill: true,
  // trace: 0.9,
  trace: Math.min(Math.pow(Math.random(), 2) + 0.1, 0.9),
  // trace: 0,
  freeze: false,

  fillColor: '#ffffff',
  // fillColor: "#692c90",

  useConnectedColor: false,

  particleColor: '#69f0ae',

  rainbow: true,
  hue: 100,
  hueIncrement: 4
}

const _init = (canvas, window, document, options) => {
  params = {
    ...params,
    ...options
  }

  canvas = canvas || document.getElementById('canvas') || 0
  if (canvas === 0) throw Error('canvas missing')

  ctx = canvas.getContext('2d')

  _bindHandlers(canvas)
  _resizeHandler(canvas)()
  _fillCanvas(canvas)
  _generateParticles(canvas)
  requestAnimationFrame(_update(canvas))
}

const _randomBetween = (min, max, ceil) =>
  Math[ceil ? 'ceil' : 'round'](Math.random() * (max - min) + min)

// const _choose = what => what[Math.floor(Math.random() * what.length)]

const _fillCanvas = function(fillColor = params.fillColor) {
  if (typeof fillColor === 'object')
    fillColor = `hsla(${fillColor.h}, ${fillColor.s * 100}%, ${fillColor.l *
      100}%, ${1 - params.trace})`

  ctx.fillStyle = fillColor
  ctx.fillRect(0, 0, W, H)

  return fillColor
}

const _clearCanvas = () => ctx.clearRect(0, 0, W, H)

const _resizeHandler = canvas => () => {
  _clearCanvas()
  _fillCanvas()

  canvas.removeAttribute('width')
  canvas.removeAttribute('height')
  canvas.style.width = 'auto'
  canvas.style.height = '100vh'

  W = canvas.clientWidth
  H = canvas.clientHeight

  canvas.setAttribute('width', W * pixelAspectRatio)
  canvas.setAttribute('height', H * pixelAspectRatio)

  canvas.style.width = `${W}px`
  canvas.style.height = `${H}px`
  ctx.scale(pixelAspectRatio, pixelAspectRatio)
}

const _canvasDownHandler = canvas => e =>
  params.mouse && Particles.length < 30
    ? Particles.push(
        new _Particle(e.pageX, e.pageY - getElPosition(e, canvas)[1])
      )
    : false

const _bindHandlers = canvas => {
  var handlers = [
    [ canvas.parentElement, 'mousedown', _canvasDownHandler(canvas) ],
    [ canvas.parentElement, 'touchstart', _canvasDownHandler(canvas) ],
    [ window, 'resize', debounce(_resizeHandler(canvas), 200) ]
  ]

  handlers.forEach(handler => {
    ;((t, e, h) => {
      t.addEventListener(e, h)
    }).apply(this, handler)
  })
}

const _reset = () => {
  Particles = []

  _fillCanvas()
  _generateParticles()
}

const _generateParticles = () => {
  for (var i = 0; i < params.count; i++)
    Particles[Particles.push(new _Particle()) - 1].randomPosition()
}

const _flipGravity = () => (params.gravity *= -1)

const _update = canvas => () => {
  params.hue += params.hueIncrement
  if (params.hue >= 360) params.hue = 0

  _fillCanvas()

  if (!params.freeze) {
    Particles.forEach(p => {
      p.applyVelocity()
      p.detectCollissions()
      p.paint()
    })
  }

  if (isFirstFrame) {
    isFirstFrame = false
    canvas.style.opacity = 1
  }

  requestAnimationFrame(_update(canvas))
}

const _Particle = function(x, y) {
  if (x) this.x = x
  if (y) this.y = y

  this.color = params.particleColor
  this.mass = _randomBetween(params.minSize, params.maxSize, true)

  // Unique ID

  this.fingerprint = btoa(Math.random())

  // The radius is determined by the randomly generated mass

  this.getRadius = () => (this.mass * 20 / (4 * Math.PI)) ^ (1 / 3)

  this.distanceTo = (p, squared, nextFrame) => {
    var x1, x2, y1, y2

    if (nextFrame) {
      x1 = this.x + this.vx
      x2 = p.x + p.vx
      y1 = this.y + this.vy
      y2 = p.y + p.vy
    } else {
      x1 = this.x
      x2 = p.x
      y1 = this.y
      y2 = p.y
    }

    var square = Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)

    if (squared) return square
    else return Math.sqrt(square)
  }

  this.vx =
    -1 * params.initialVelocity +
    Math.pow(Math.random(), 2) * params.initialVelocity * 2
  this.vy =
    -1 * params.initialVelocity +
    Math.pow(Math.random(), 2) * params.initialVelocity * 2

  this.applyVelocity = () => {
    this.x += this.vx
    this.y += this.vy

    this.vy += params.gravity
  }

  this.reduceVelocity = factor => {
    this.vx *= factor
    this.vy *= factor
  }

  this.detectCollissions = () => {
    var hasBounced = false

    // Invert initialVelocity, if it collides with a side

    if (this.x + this.getRadius() > W || this.x - this.getRadius() < 0) {
      this.vx = this.vx * -1 * (1 - 0.05) + 0.05
      hasBounced = true
    }
    if (this.y + this.getRadius() > H || this.y - this.getRadius() < 0) {
      this.vy = this.vy * -1 * (1 - 0.05) + 0.05
      hasBounced = true
    }

    if (hasBounced && params.bouncePenalty > 0)
      this.reduceVelocity(1 - params.bouncePenalty)

    // Correct particle, if it is moving out of the canvas bounds

    if (this.x + this.getRadius() > W) this.x = W - this.getRadius()
    else if (this.x - this.getRadius() < 0) this.x = this.getRadius()

    if (this.y + this.getRadius() > H) this.y = H - this.getRadius()
    else if (this.y - this.getRadius() < 0) this.y = this.getRadius()

    // Chedk for collissions and apply the appropriate initialVelocity

    var hasCollided = false

    Particles.forEach(p => {
      if (this.fingerprint !== p.fingerprint) {
        var distance = this.distanceTo(p)

        if (distance <= this.getRadius() + p.getRadius()) {
          hasCollided = true

          if (params.useConnectedColor === true)
            p.color = `hsla(${params.hue}, 100%, 50%, .5)`

          // Find normal from other to me

          var normX = this.x - p.x
          var normY = this.y - p.y

          // make into unit vector

          var normXUnit = normX / distance
          var normYUnit = normY / distance

          // Get projection of movement vectors onto normal
          // (Dot prod each with norm)

          var proj1 = this.vx * normXUnit + this.vy * normYUnit,
            proj2 = p.vx * normXUnit + p.vy * normYUnit

          // Now, factor in impulse, derived from
          // Conservation of Energy / Conservation of Momentum

          var impulse = 2 * (proj1 - proj2) / (this.mass + p.mass)

          this.vx = this.vx - impulse * p.mass * normXUnit
          this.vy = this.vy - impulse * p.mass * normYUnit

          p.vx = p.vx + impulse * this.mass * normXUnit
          p.vy = p.vy + impulse * this.mass * normYUnit

          this.reduceVelocity(0.999)
        }
      }
    }) // end of forEach(p2 => ...)

    if (hasCollided !== true) {
      this.color = params.particleColor
    }
  }

  this.randomPosition = () => {
    var attempts = 1

    while (true) {
      if (attempts > 1000) {
        if (DEBUG)
          console.log(
            'Could not find a suitable location in 1000 attemps, using the latest generated one.'
          )
        break
      }

      this.x =
        this.getRadius() +
        params.margin +
        Math.random() * (W - 2 * (params.margin + this.getRadius()))
      this.y =
        this.getRadius() +
        params.margin +
        Math.random() * (H - 2 * (params.margin + this.getRadius()))

      var collides = false

      // For all other particles, check if they are touching at this newly generated location.

      for (var i = 0; i < Particles.length; i++) {
        var p = Particles[i]

        // If it is not the same particle as |this|

        if (this.fingerprint !== p.fingerprint) {
          // .. and the distance squared is less than the sum of the radii squared.

          if (
            this.distanceTo(p, true) <=
            Math.pow(this.getRadius() + p.getRadius(), 2)
          ) {
            collides = true

            if (DEBUG)
              console.log(`#${Particles.indexOf(this)} collides with #${i},
								distance is ${this.distanceTo(p, true)},
								which is smaller than ${this.getRadius() + p.getRadius()}`)

            break
          }
        }
      }

      if (collides === false) {
        if (DEBUG)
          console.log(`Found a suitable location after ${attempts}  attempts.`)
        break
      }

      attempts++
    }
  }

  this.paint = () => {
    var drawMethod = params.fill === true ? 'fill' : 'stroke'

    ctx.beginPath()
    ctx.arc(this.x, this.y, this.getRadius(), 0 * Math.PI, 2 * Math.PI, false)

    var oldStyle = ctx[drawMethod + 'Style']

    ctx[drawMethod + 'Style'] = this.color
    ctx[drawMethod]()
    ctx.lineWidth = 5

    if (typeof params.text === 'string' && params.text.length > 0) {
      ctx.lineWidth = 1
      ctx.font = this.getRadius() / 2 + 'px Arial'
      ctx.textAlign = 'center'

      var fs = ctx.fillStyle

      ctx.fillStyle = 'white'
      ctx.fillText(params.text, this.x, this.y + this.getRadius() / 5)
      ctx.fillStyle = fs
    }

    ctx[drawMethod + 'Style'] = oldStyle
  }
}

export default _init
