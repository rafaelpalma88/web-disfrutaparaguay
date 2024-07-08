import { format } from "date-fns";

export function dateTimeFormatAmericanDate(date: Date) {
  return format(date, "EEEE, MMMM d, yyyy 'at' h:mm:ss a 'GMT'XXX");
}
