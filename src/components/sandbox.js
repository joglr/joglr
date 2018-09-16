// syncronous funktion
function getData(url) {
  const result = fetch(url)
    .then(function(data) {
      // dette er ikke længere ude i funktionen, men i en callback function, som først bliver kaldt når Promise resolves
    }
    )
  return result // Promise, ikke data
  // hvad retuneres der

}

async function getDataAsync(url) {
  const result = await fetch(url)
   // await => afvent dette promise og fortsæt når den er færdig
  // vente vente vente......... (koden er pauset)
  return result

}
// Det var alt for i dag, jeg skal sove nu. :D
// OK :D Det er mega nice det her :D
// Ja, vi kan kigge videre i morgen måske
// Ja hvis du har tid :D
// massere, hvad med dig?
// Ja, skal bare lige hjem fra job, så omkring
//16-17 tiden :) hvis jeg er heldig :P
// måske skal jeg lige have en time mere pga.
//jeg skal have fri allerde kl 12 fredag eller hvornår det nu er
// OK, u hit me up // sure, hils dea og kaninus :) // Hvordan har hun det?? Iben?
// Bedre, men hun har stadig tit ikke så god mave :/ .. i send good karma <3
// ty //await  sleep 9ce

async function () {
  await jonas.sleep()
  await jonas.work()
  await rasmus.sleep()
  await rasmus.work()
  if (!dennisDrives(car)) await rasmus.boringBus()
  sleepWell(bothBros)
}