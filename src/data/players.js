import * as d3 from 'd3'

const PLAYERS = [
  {
    name: 'גיא',
    champion: 'Brazil',
    scorer: 'Neymar',
    bets: [
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '4',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '2',
      },
      {
        team_b_score: '4',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
    ],
  },
  {
    name: 'גלילאו',
    champion: 'France',
    scorer: 'Griezmann',
    bets: [
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '5',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
    ],
  },
  {
    name: 'איטזיג',
    champion: 'Germany',
    scorer: 'Neymar',
    bets: [
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '5',
        team_a_score: '0',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
    ],
  },
  {
    name: 'שריקי',
    champion: 'Germany',
    scorer: 'Griezmann',
    bets: [
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '4',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '4',
      },
      {
        team_b_score: '2',
        team_a_score: '5',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '4',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '4',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
    ],
  },
  {
    name: 'היו״ר',
    champion: 'Germany',
    scorer: 'Timo Werner',
    bets: [
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '4',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
    ],
  },
  {
    name: 'פוגל',
    champion: 'Brazil',
    scorer: 'Revivo',
    bets: [
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '4',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '4',
      },
      {
        team_b_score: '4',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '4',
      },
      {
        team_b_score: '1',
        team_a_score: '5',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '4',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '4',
        team_a_score: '0',
      },
      {
        team_b_score: '5',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
    ],
  },
  {
    name: 'יוני',
    champion: 'Brazil',
    scorer: 'Gabriel Jesus',
    bets: [
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '5',
      },
      {
        team_b_score: '1',
        team_a_score: '4',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '3',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '4',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
    ],
  },
  {
    name: 'ישקה',
    champion: 'Germany',
    scorer: 'Thomas Müller',
    bets: [
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '4',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '5',
      },
      {
        team_b_score: '4',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '6',
      },
      {
        team_b_score: '4',
        team_a_score: '0',
      },
      {
        team_b_score: '3',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '4',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '6',
      },
      {
        team_b_score: '3',
        team_a_score: '2',
      },
      {
        team_b_score: '4',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '4',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '4',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '4',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '4',
        team_a_score: '0',
      },
      {
        team_b_score: '3',
        team_a_score: '2',
      },
      {
        team_b_score: '4',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '3',
        team_a_score: '2',
      },
      {
        team_b_score: '5',
        team_a_score: '2',
      },
      {
        team_b_score: '4',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '4',
      },
      {
        team_b_score: '3',
        team_a_score: '2',
      },
    ],
  },
  {
    name: 'שפיגלית',
    champion: 'Brazil',
    scorer: 'Neymar',
    bets: [
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '5',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '0',
        team_a_score: '5',
      },
      {
        team_b_score: '1',
        team_a_score: '4',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '4',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '4',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
    ],
  },
  {
    name: 'שפיגלון',
    champion: 'Spain',
    scorer: 'Lewandowski',
    bets: [
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
    ],
  },
  {
    name: 'עציץ',
    champion: 'France',
    scorer: 'a German dude',
    bets: [
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
    ],
  },
  {
    name: 'מושון',
    champion: 'Germany',
    scorer: 'Ronaldo',
    bets: [
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '2',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '1',
      },
      {
        team_b_score: '2',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '5',
      },
      {
        team_b_score: '4',
        team_a_score: '0',
      },
      {
        team_b_score: '4',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '0',
        team_a_score: '4',
      },
      {
        team_b_score: '1',
        team_a_score: '4',
      },
      {
        team_b_score: '2',
        team_a_score: '3',
      },
      {
        team_b_score: '2',
        team_a_score: '0',
      },
      {
        team_b_score: '2',
        team_a_score: '4',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '0',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '2',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '3',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '3',
      },
      {
        team_b_score: '3',
        team_a_score: '0',
      },
      {
        team_b_score: '1',
        team_a_score: '1',
      },
      {
        team_b_score: '4',
        team_a_score: '1',
      },
      {
        team_b_score: '4',
        team_a_score: '1',
      },
      {
        team_b_score: '3',
        team_a_score: '1',
      },
      {
        team_b_score: '1',
        team_a_score: '0',
      },
      {
        team_b_score: '3',
        team_a_score: '2',
      },
      {
        team_b_score: '1',
        team_a_score: '4',
      },
      {
        team_b_score: '0',
        team_a_score: '1',
      },
    ],
  },
]

export default PLAYERS

export const playerColor = d3.scaleSequential(d3.interpolateSinebow).domain([0, PLAYERS.length])
