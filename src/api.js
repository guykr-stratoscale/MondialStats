import * as d3 from 'd3'
import _flatMap from 'lodash/flatMap'

const ANSWERS_ROW = 4
const SIGNIFICANT_COLUMN = 2
const GAME_NO_ROW = 1
const POINTS_ROW = 3
const PLAYERS_ANSWERS_START = 5
const PLAYER_ID_COLUMN = 0

const FOOTBALL_DATA_URL = 'https://api.football-data.org/v2/competitions/2000/matches'
// const FOOTBALL_DATA_URL = 'https://api.football-data.org/v1/competitions/467/fixtures'

const SCORES_DATA_URL = 'https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json'

// const BONUS_QUESTION_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRHBG6WOAtQqbfgjm5w_TIxa_LIRsh2mYbj8yqgkk7DKl2VhUZ1ZKbM2AoQ3y1njZ1yNJ4bqBMZDcjB/pub?output=csv' // dev
const BONUS_QUESTION_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSB3qoqyFZRzaDL8v8a24j35IQjWCPYSpE2oJGNc4Q1b6gUNIrvuFio6KUXnXbv8J3vhyJWDMv1Aft8/pub?output=csv'
const API = {
  getGames:   () => {
    return fetch(FOOTBALL_DATA_URL, {
      headers: {
        'x-auth-token': 'd889d405df01445dba932fe3d61d16b9',
      },
    })
      .then(response => response.json())
      .then(data => data.matches)
      .catch(error => {
        console.error('error fetching', error)
      })
  },
  getScores:  () => {
    return fetch(SCORES_DATA_URL)
      .then(response => response.json())
      .then(data => _flatMap(data.rounds, round => round.matches))
      .catch(error => {
        console.error('error fetching', error)
      })
  },
  getAnswers: () => {
    return fetch(`${BONUS_QUESTION_URL}&cb=${Date.now()}`)
      .then(response => response.text())
      .then(text => d3.csvParseRows(text))
      .then(data => {
        return data[ANSWERS_ROW].slice(SIGNIFICANT_COLUMN)
          .map(
            (a, i) => (a ? i + SIGNIFICANT_COLUMN : -1), // get answer columns
          )
          .map(colNum => {
            const game_id = colNum > -1 ? Number(data[GAME_NO_ROW][colNum]) - 1 : -1
            const question_points = colNum > -1 ? Number(data[POINTS_ROW][colNum]) : -1
            const question_answer = colNum > -1 ? data[ANSWERS_ROW][colNum].trim() : -1
            const answers = []
            for (let i = PLAYERS_ANSWERS_START; i < data.length; i++) {
              const player_id = Number(data[i][PLAYER_ID_COLUMN])
              const answer = data[i][colNum]
              answers.push({
                player_id,
                answer,
              })
            }

            return {
              game_id,
              question_points,
              question_answer,
              answers,
            }
          })
      })
      .catch(error => {
        console.error('error fetching', error)
      })
  },
}

export default API
