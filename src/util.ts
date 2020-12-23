export function linkify(markdown: string) {
  const linkRegex = /\[(.*?)\]\((.*?)\)/g;
  return markdown.replace(
    linkRegex,
    (str, text, href) => `<a href="${href}">${text}</a>`
  );
}
