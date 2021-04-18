interface DataStops {
  mglt: string;
  consumables: string;
  distance: string;
}

export default function calculateTripStops({
  mglt,
  consumables,
  distance,
}: DataStops): string {
  if (
    !mglt ||
    !consumables ||
    !distance ||
    mglt === 'unknown' ||
    consumables === 'unknown'
  ) {
    return 'unknown';
  }

  const distanceInNumber = Number(distance);
  const mgtlInNumber = Number(mglt);
  const totalPeriod = Number(consumables.split(' ')[0]);
  const typePeriod = consumables.split(' ')[1];
  let hours = 1;

  switch (typePeriod) {
    case 'day':
      hours = 24;
      break;
    case 'days':
      hours = 24;
      break;
    case 'week':
      hours = 24 * 7;
      break;
    case 'weeks':
      hours = 24 * 7;
      break;
    case 'month':
      hours = 24 * 30;
      break;
    case 'months':
      hours = 24 * 30;
      break;
    case 'year':
      hours = 24 * 30 * 12;
      break;
    case 'years':
      hours = 24 * 30 * 12;
      break;
    default:
      hours = 1;
      break;
  }

  return Math.floor(
    distanceInNumber / mgtlInNumber / (hours * totalPeriod),
  ).toString();
}
