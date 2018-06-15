import moment from 'moment'
import { TEAMS } from './teams'

const FACTORS = [
  {
    team_b: 13,
    team_a: 1.35,
    draw: 4,
  },
  {
    team_b: 1.8,
    team_a: 4.5,
    draw: 3.65,
  },
  {
    team_b: 2.6,
    team_a: 1.4,
    draw: 2.15,
  },
  {
    team_b: 1.95,
    team_a: 3.6,
    draw: 2.65,
  },
  {
    team_b: 19,
    team_a: 1.25,
    draw: 6.8,
  },
  {
    team_b: 13,
    team_a: 1.4,
    draw: 4.85,
  },
  {
    team_b: 2.15,
    team_a: 3.9,
    draw: 3.55,
  },
  {
    team_b: 4.95,
    team_a: 1.9,
    draw: 3.55,
  },
  {
    team_b: 2.15,
    team_a: 4.35,
    draw: 3.55,
  },
  {
    team_b: 8.5,
    team_a: 1.5,
    draw: 4.65,
  },
  {
    team_b: 10,
    team_a: 1.4,
    draw: 5.05,
  },
  {
    team_b: 4.35,
    team_a: 2.15,
    draw: 3.35,
  },
  {
    team_b: 31,
    team_a: 1.15,
    draw: 8.2,
  },
  {
    team_b: 1.35,
    team_a: 11,
    draw: 5.5,
  },
  {
    team_b: 3.6,
    team_a: 2.3,
    draw: 3.3,
  },
  {
    team_b: 5.6,
    team_a: 1.85,
    draw: 3.7,
  },
  {
    team_b: 4.6,
    team_a: 2.05,
    draw: 3.55,
  },
  {
    team_b: 7.5,
    team_a: 1.6,
    draw: 4.1,
  },
  {
    team_b: 17,
    team_a: 1.3,
    draw: 6.05,
  },
  {
    team_b: 1.2,
    team_a: 21,
    draw: 7.3,
  },
  {
    team_b: 11,
    team_a: 1.8,
    draw: 5.2,
  },
  {
    team_b: 5.65,
    team_a: 1.4,
    draw: 3.75,
  },
  {
    team_b: 4.75,
    team_a: 1.95,
    draw: 3.65,
  },
  {
    team_b: 17,
    team_a: 1.25,
    draw: 6.7,
  },
  {
    team_b: 2.85,
    team_a: 2.85,
    draw: 3.3,
  },
  {
    team_b: 2.65,
    team_a: 2.95,
    draw: 3.35,
  },
  {
    team_b: 14,
    team_a: 1.3,
    draw: 5.8,
  },
  {
    team_b: 7.5,
    team_a: 1.55,
    draw: 4.4,
  },
  {
    team_b: 2.05,
    team_a: 4.55,
    draw: 3.4,
  },
  {
    team_b: 21,
    team_a: 1.2,
    draw: 7.1,
  },
  {
    team_b: 2.6,
    team_a: 2.3,
    draw: 2.3,
  },
  {
    team_b: 2.6,
    team_a: 3.2,
    draw: 2.3,
  },
  {
    team_b: 1.7,
    team_a: 6,
    draw: 3.75,
  },
  {
    team_b: 3.05,
    team_a: 2.5,
    draw: 3.25,
  },
  {
    team_b: 1.4,
    team_a: 10.5,
    draw: 5,
  },
  {
    team_b: 10.5,
    team_a: 1.4,
    draw: 5,
  },
  {
    team_b: 2.35,
    team_a: 3.6,
    draw: 3.5,
  },
  {
    team_b: 1.75,
    team_a: 6,
    draw: 3.8,
  },
  {
    team_b: 1.9,
    team_a: 5,
    draw: 3.65,
  },
  {
    team_b: 1.5,
    team_a: 8,
    draw: 4.5,
  },
  {
    team_b: 3.2,
    team_a: 2.5,
    draw: 3.3,
  },
  {
    team_b: 1.3,
    team_a: 13,
    draw: 5.85,
  },
  {
    team_b: 1.45,
    team_a: 9.5,
    draw: 5,
  },
  {
    team_b: 4.8,
    team_a: 1.9,
    draw: 3.65,
  },
  {
    team_b: 1.95,
    team_a: 4.5,
    draw: 3.6,
  },
  {
    team_b: 2,
    team_a: 4.5,
    draw: 3.4,
  },
  {
    team_b: 2.6,
    team_a: 3,
    draw: 3.4,
  },
  {
    team_b: 2.35,
    team_a: 3.55,
    draw: 3.35,
  },
]

export const GAMES = [
  {
    time: '15.06.2018 01:00',
    team_a: 'Russia',
    team_b: 'Saudi Arabia',
    team_a_score: 5,
    team_b_score: 0,
    // questions: ['am i pretty?'],
    // answers: ['yes'],
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
].map((game, i) => {
  return {
    ...game,
    team_a: TEAMS.find(team => team.name === game.team_a).id,
    team_b: TEAMS.find(team => team.name === game.team_b).id,
    date: moment(game.time, 'DD.MM.YYYY HH:mm').subtract(7, 'hours'),
    team_a_factor: FACTORS[i].team_a,
    team_b_factor: FACTORS[i].team_b,
    draw_factor: FACTORS[i].draw,
  }
})
