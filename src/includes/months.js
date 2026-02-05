// numbers to months: 

export function monthNumberToText(monthNum) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  return months[monthNum - 1];
}
