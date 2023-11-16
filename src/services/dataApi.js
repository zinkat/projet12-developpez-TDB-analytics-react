const server = 'http://localhost:3000/' // base de l'url

async function fetchAPIUserData(uri) {

  // const response = await fetch(server + uri)
  // const response_1 = await response.json()
  // return response_1.data
  try {
    const response = await fetch(server + uri);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const response_1 = await response.json();
    return response_1.data;
  } catch (error) {
    console.error('API Call Error:', error);
    throw error; // Rejette l'erreur pour que le composant User puisse la gérer
  }
}

function getUserDataMain(userId) {
  return fetchAPIUserData('user/' + userId)
}

function getUserActivity(userId) {
  return fetchAPIUserData('user/' + userId + '/activity')
}

function getUserAverageSessions(userId) {
  return fetchAPIUserData('user/' + userId + '/average-sessions')
}

function getUserPerformance(userId) {
  return fetchAPIUserData('user/' + userId + '/performance')
}



export {
  getUserDataMain,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
}
