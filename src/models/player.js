import { Record, List, fromJS } from 'immutable'
import PLAYERS from '../data/players'

const Bet = Record({
  game: 0,
  team_a_score: 0,
  team_b_score: 0,
  answers: List(),
})

class Player extends Record({
  id: 0,
  name: null,
  champion: null,
  scorer: null,
  bets: List(),
}) {
  gameScore(game) {
    let score = 0

    const bet = this.bets.get(game.id)
    const is_game_draw = game.team_a_score === game.team_b_score
    const is_team_a_winner = game.team_a_score > game.team_b_score
    const is_team_b_winner = game.team_a_score < game.team_b_score

    const is_bet_draw = bet.team_a_score === bet.team_b_score

    const toto_points =
      (is_game_draw && is_bet_draw) ||
      (is_team_a_winner && bet.team_a_score > bet.team_b_score) ||
      (is_team_b_winner && bet.team_b_score > bet.team_a_score)
        ? 2
        : 0

    if (toto_points) {
      const goals_points =
        game.team_a_score === bet.team_a_score && game.team_b_score === bet.team_b_score ? 1 : 0

      const factor = is_game_draw
        ? game.draw_factor
        : is_team_a_winner ? game.team_a_factor : is_team_b_winner ? game.team_b_factor : 1

      score = (toto_points + goals_points) * factor
    }

    game.questions.forEach((q, i) => {
      if (game.answers.get(i) === bet.answers.get(i)) {
        score += 1
      }
    })

    return score
  }

  score(games = List()) {
    return games.reduce((result, game) => result + this.gameScore(game), 0)
  }
}

export const initPlayers = () => {
  return fromJS(
    PLAYERS.map((player, i) => {
      return new Player({
        ...player,
        bets: fromJS(
          player.bets.map((bet, gameIndex) => {
            return new Bet({
              ...bet,
              team_a_score: Number(bet.team_a_score),
              team_b_score: Number(bet.team_b_score),
              answers: fromJS(bet.answers || []),
              game: gameIndex,
            })
          }),
        ),
      })
    }),
  )
}
