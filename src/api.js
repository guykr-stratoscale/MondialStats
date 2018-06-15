const API = {
  getGames: () => {
    return fetch('https://api.football-data.org/v1/competitions/467/fixtures', {
      headers: {
        'x-auth-token': 'd889d405df01445dba932fe3d61d16b9',
      },
    })
      .then(response => response.json())
      .catch(error => {
        console.error('error fetching', error)
      })
  },
}

export default API
