const server = 'http://localhost:3000/' // base de l'url

async function fetchAPIUserData(uri) {
  const response = await fetch(server + uri)
  const response_1 = await response.json()
  return response_1.data
}

function getUserDataMain(userId) {
  return fetchAPIUserData('user/' + userId)
}

function getUserActivity(userId) {
  return fetchAPIUserData('user/' + userId + '/activity')
}

function getUserAverage(userId) {
  return fetchAPIUserData('user/' + userId + '/average-sessions')
}

function getUserPerformance(userId) {
  return fetchAPIUserData('user/' + userId + '/performance')
}

export {
  getUserDataMain,
  getUserActivity,
  getUserAverage,
  getUserPerformance,
}
