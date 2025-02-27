import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateTimeToISO(
  date: string | undefined,
  time: string | undefined
) {
  if (date && time) {
    return new Date(`${date} ${time}`).toISOString();
  }
  return '';
}

export function formatISODatetoString(date = '2023-12-05T00:36:06.278Z') {
  const parsedDate = new Date(date).toDateString();
  const [, month, day, year] = parsedDate.split(' ');
  return `${month} ${day}, ${year}`;
}

export function formatISODatetoDashSeparatedDateString(
  date = '2023-12-05T00:36:06.278Z'
) {
  const parsedDate = new Date(date);

  return `${parsedDate.getDate()} - ${
    parsedDate.getMonth() + 1
  } - ${parsedDate.getFullYear()}`;
}

export function formatISODateto12HourTimeString(
  date = '2023-12-05T00:36:06.278Z'
) {
  const parsedDate = new Date(date);
  let hours = parsedDate.getHours();
  const minutes = parsedDate.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours %= 12;
  hours = hours || 12; // The hour '0' should be '12'
  const parsedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const strTime = `${hours} : ${parsedMinutes} ${ampm}`;
  return strTime;
}
