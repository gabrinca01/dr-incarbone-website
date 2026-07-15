const HTML_TAG_REGEX = /<[^>]*>/g;
const CONTROL_CHAR_REGEX = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

export function sanitizeContactField(value: string, maxLength: number): string {
  return value
    .replace(HTML_TAG_REGEX, "")
    .replace(CONTROL_CHAR_REGEX, "")
    .trim()
    .slice(0, maxLength);
}

export function sanitizeContactPayload<T extends Record<string, string>>(data: T, limits: Record<keyof T, number>): T {
  const sanitized = {} as T;

  for (const key of Object.keys(data) as Array<keyof T>) {
    sanitized[key] = sanitizeContactField(data[key], limits[key]) as T[keyof T];
  }

  return sanitized;
}
