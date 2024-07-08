import { formatDistanceToNow } from "date-fns";

export function dateTimeFormatRelativeToNow(date: Date) {
  return formatDistanceToNow(date, { addSuffix: true });
}
