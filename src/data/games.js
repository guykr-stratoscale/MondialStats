import moment from 'moment'

export const GAMES = [
  {
    time: '15.06.2018 01:00',
    team_a: 'Russia',
    team_b: 'Saudi Arabia',
  },
  {
    time: '15.06.2018 22:00',
    team_a: 'Egypt',
    team_b: 'Uruguay',
  },
  {
    time: '16.06.2018 01:00',
    team_a: 'Morocco',
    team_b: 'Iran',
  },
  {
    time: '16.06.2018 04:00',
    team_a: 'Portugal',
    team_b: 'Spain',
  },
  {
    time: '16.06.2018 20:00',
    team_a: 'France',
    team_b: 'Australia',
  },
  {
    time: '16.06.2018 23:00',
    team_a: 'Argentina',
    team_b: 'Iceland',
  },
  {
    time: '17.06.2018 02:00',
    team_a: 'Peru',
    team_b: 'Denmark',
  },
  {
    time: '17.06.2018 05:00',
    team_a: 'Croatia',
    team_b: 'Nigeria',
  },
  {
    time: '17.06.2018 22:00',
    team_a: 'Costa Rica',
    team_b: 'Serbia',
  },
  {
    time: '18.06.2018 01:00',
    team_a: 'Germany',
    team_b: 'Mexico',
  },
  {
    time: '18.06.2018 04:00',
    team_a: 'Brazil',
    team_b: 'Switzerland',
  },
  {
    time: '18.06.2018 22:00',
    team_a: 'Sweden',
    team_b: 'South Korea',
  },
  {
    time: '19.06.2018 01:00',
    team_a: 'Belgium',
    team_b: 'Panama',
  },
  {
    time: '19.06.2018 04:00',
    team_a: 'Tunisia',
    team_b: 'England',
  },
  {
    time: '19.06.2018 22:00',
    team_a: 'Colombia',
    team_b: 'Japan',
  },
  {
    time: '20.06.2018 01:00',
    team_a: 'Poland',
    team_b: 'Senegal',
  },
  {
    time: '20.06.2018 04:00',
    team_a: 'Russia',
    team_b: 'Egypt',
  },
  {
    time: '20.06.2018 22:00',
    team_a: 'Portugal',
    team_b: 'Morocco',
  },
  {
    time: '21.06.2018 01:00',
    team_a: 'Uruguay',
    team_b: 'Saudi Arabia',
  },
  {
    time: '21.06.2018 04:00',
    team_a: 'Iran',
    team_b: 'Spain',
  },
  {
    time: '21.06.2018 22:00',
    team_a: 'Denmark',
    team_b: 'Australia',
  },
  {
    time: '22.06.2018 01:00',
    team_a: 'France',
    team_b: 'Peru',
  },
  {
    time: '22.06.2018 04:00',
    team_a: 'Argentina',
    team_b: 'Croatia',
  },
  {
    time: '22.06.2018 22:00',
    team_a: 'Brazil',
    team_b: 'Costa Rica',
  },
  {
    time: '23.06.2018 01:00',
    team_a: 'Nigeria',
    team_b: 'Iceland',
  },
  {
    time: '23.06.2018 04:00',
    team_a: 'Serbia',
    team_b: 'Switzerland',
  },
  {
    time: '23.06.2018 22:00',
    team_a: 'Belgium',
    team_b: 'Tunisia',
  },
  {
    time: '24.06.2018 01:00',
    team_a: 'South Korea',
    team_b: 'Mexico',
  },
  {
    time: '24.06.2018 04:00',
    team_a: 'Germany',
    team_b: 'Sweden',
  },
  {
    time: '24.06.2018 22:00',
    team_a: 'England',
    team_b: 'Panama',
  },
  {
    time: '25.06.2018 01:00',
    team_a: 'Japan',
    team_b: 'Senegal',
  },
  {
    time: '25.06.2018 04:00',
    team_a: 'Poland',
    team_b: 'Colombia',
  },
  {
    time: '26.06.2018 00:00',
    team_a: 'Saudi Arabia',
    team_b: 'Egypt',
  },
  {
    time: '26.06.2018 00:00',
    team_a: 'Uruguay',
    team_b: 'Russia',
  },
  {
    time: '26.06.2018 04:00',
    team_a: 'Iran',
    team_b: 'Portugal',
  },
  {
    time: '26.06.2018 04:00',
    team_a: 'Spain',
    team_b: 'Morocco',
  },
  {
    time: '27.06.2018 00:00',
    team_a: 'Australia',
    team_b: 'Peru',
  },
  {
    time: '27.06.2018 00:00',
    team_a: 'Denmark',
    team_b: 'France',
  },
  {
    time: '27.06.2018 04:00',
    team_a: 'Iceland',
    team_b: 'Croatia',
  },
  {
    time: '27.06.2018 04:00',
    team_a: 'Nigeria',
    team_b: 'Argentina',
  },
  {
    time: '28.06.2018 00:00',
    team_a: 'Mexico',
    team_b: 'Sweden',
  },
  {
    time: '28.06.2018 00:00',
    team_a: 'South Korea',
    team_b: 'Germany',
  },
  {
    time: '28.06.2018 04:00',
    team_a: 'Serbia',
    team_b: 'Brazil',
  },
  {
    time: '28.06.2018 04:00',
    team_a: 'Switzerland',
    team_b: 'Costa Rica',
  },
  {
    time: '29.06.2018 00:00',
    team_a: 'Japan',
    team_b: 'Poland',
  },
  {
    time: '29.06.2018 00:00',
    team_a: 'Senegal',
    team_b: 'Colombia',
  },
  {
    time: '29.06.2018 04:00',
    team_a: 'England',
    team_b: 'Belgium',
  },
  {
    time: '29.06.2018 04:00',
    team_a: 'Panama',
    team_b: 'Tunisia',
  },
].map(game => {
  return {
    ...game,
    date: moment(game.time, 'DD.MM.YYYY HH:mm'),
  }
})
