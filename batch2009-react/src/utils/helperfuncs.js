function ConcatLeadingZeroes(val) {
  if (val < 10) {
    return `0${val}`;
  }
  return val;
}

export default function convDate(dt) {
  const cdt = new Date(dt);
  const date = ConcatLeadingZeroes(cdt.getUTCDate());
  const month = ConcatLeadingZeroes(cdt.getUTCMonth());
  const year = cdt.getUTCFullYear();
  const hour = ConcatLeadingZeroes(cdt.getUTCHours());
  const minutes = ConcatLeadingZeroes(cdt.getUTCMinutes());
  return `${date} - ${month} - ${year}, ${hour} : ${minutes}`;
}
