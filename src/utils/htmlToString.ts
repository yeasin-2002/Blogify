export function htmlToString(htmlString: string) {
  return htmlString.replace(/<[^>]*>/g, "");
}
