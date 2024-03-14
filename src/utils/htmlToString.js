export function htmlToString(htmlString) {
  return htmlString.replace(/<[^>]*>/g, "");
}
