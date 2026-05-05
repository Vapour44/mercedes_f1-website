export type Race = {
  round: number;
  country: string;
  circuit: string;
  date: string;
  title?: string;
};

export const raceData: Race[] = [
  { round: 1, country: 'Australia', circuit: 'Albert Park Circuit', date: '2026-03-08' },
  { round: 2, country: 'China', circuit: 'Shanghai International Circuit', date: '2026-03-15' },
  { round: 3, country: 'Japan', circuit: 'Suzuka International Racing Course', date: '2026-03-29' },
  { round: 4, country: 'Miami', circuit: 'Miami International Autodrome', date: '2026-05-03', title: 'FORMULA 1 CRYPTO.COM MIAMI GRAND PRIX 2026' },
  { round: 5, country: 'Canada', circuit: 'Circuit Gilles-Villeneuve', date: '2026-05-24' },
  { round: 6, country: 'Monaco', circuit: 'Circuit de Monaco', date: '2026-06-07' },
  { round: 7, country: 'Spain', circuit: 'Circuit de Barcelona-Catalunya', date: '2026-06-14' },
  { round: 8, country: 'Austria', circuit: 'Red Bull Ring', date: '2026-06-28' },
  { round: 9, country: 'Great Britain', circuit: 'Silverstone Circuit', date: '2026-07-05' },
  { round: 10, country: 'Belgium', circuit: 'Circuit de Spa-Francorchamps', date: '2026-07-19' },
  { round: 11, country: 'Hungary', circuit: 'Hungaroring', date: '2026-07-26' },
  { round: 12, country: 'Netherlands', circuit: 'Circuit Zandvoort', date: '2026-08-23' },
  { round: 13, country: 'Italy', circuit: 'Autodromo Nazionale Monza', date: '2026-09-06' },
  { round: 14, country: 'Spain', circuit: 'Circuit de Barcelona-Catalunya', date: '2026-09-13' },
  { round: 15, country: 'Azerbaijan', circuit: 'Baku City Circuit', date: '2026-09-26' },
  { round: 16, country: 'Singapore', circuit: 'Marina Bay Street Circuit', date: '2026-10-11' },
  { round: 17, country: 'United States', circuit: 'Circuit of the Americas', date: '2026-10-25' },
  { round: 18, country: 'Mexico', circuit: 'Autódromo Hermanos Rodríguez', date: '2026-11-01' },
  { round: 19, country: 'Brazil', circuit: 'Autódromo José Carlos Pace (Interlagos)', date: '2026-11-08' },
  { round: 20, country: 'Las Vegas', circuit: 'Las Vegas Strip Circuit', date: '2026-11-21' },
  { round: 21, country: 'Qatar', circuit: 'Lusail International Circuit', date: '2026-11-29' },
  { round: 22, country: 'Abu Dhabi', circuit: 'Yas Marina Circuit', date: '2026-12-06' },
];
