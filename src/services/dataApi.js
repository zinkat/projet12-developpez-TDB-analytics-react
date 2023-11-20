const server = 'http://localhost:3000/' // base de l'url

/**
 * Récupère les données utilisateur à partir de l'API en fonction de l'URI fournie.
 * @param {string} uri - L'URI pour récupérer les données utilisateur.
 * @returns {Promise} Une promesse qui se résout avec les données utilisateur.
 * @throws {Error} S'il y a une erreur API ou un problème réseau.
 */

async function fetchAPIUserData(uri) {
  const response = await fetch(server + uri)
  const response_1 = await response.json()
  return response_1.data
}

/**
 * Récupère les données principales de l'utilisateur.
 * @param {string} userId - L'ID de l'utilisateur.
 * @returns {Promise} Une promesse qui se résout avec les données principales de l'utilisateur.
 */

function getUserDataMain(userId) {
  return fetchAPIUserData('user/' + userId)
}

/**
 * Récupère les données d'activité de l'utilisateur.
 *
 * @param {string} userId - L'ID de l'utilisateur.
 * @returns {Promise} Une promesse qui se résout avec les données d'activité de l'utilisateur.
 */

function getUserActivity(userId) {
  return fetchAPIUserData('user/' + userId + '/activity')
}

/**
 * Récupère les données de sessions moyennes de l'utilisateur.
 *
 * @param {string} userId - L'ID de l'utilisateur.
 * @returns {Promise} Une promesse qui se résout avec les données de sessions moyennes de l'utilisateur.
 */
function getUserAverageSessions(userId) {
  return fetchAPIUserData('user/' + userId + '/average-sessions')
}

/**
 * Récupère les données de performance de l'utilisateur.
 *
 * @param {string} userId - L'ID de l'utilisateur.
 * @returns {Promise} Une promesse qui se résout avec les données de performance de l'utilisateur.
 */

function getUserPerformance(userId) {
  return fetchAPIUserData('user/' + userId + '/performance')
}

export {
  getUserDataMain,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
}
