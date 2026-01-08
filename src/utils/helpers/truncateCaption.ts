export function truncateCaption(text: string, maxLength = 120) {
  if (text.length <= maxLength) return text;

  const trimmedText = text.slice(0, 120);

  return `${trimmedText}...`;
}
