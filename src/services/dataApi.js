// Définition de la base de l'URL du serveur
const server = 'http://localhost:3000/' // base de l'url

/**
 * Fonction asynchrone qui récupère les données utilisateur à partir de l'API en fonction de l'URI fournie
 * @param {string} uri - L'URI pour récupérer les données utilisateur.
 * @returns {Promise} Une promesse qui se résout avec les données utilisateur.
 * @throws {Error} S'il y a une erreur API ou un problème réseau.
 */

async function fetchAPIUserData(uri) {
  // Envoi de la requête à l'API avec l'URL complète
  const response = await fetch(server + uri)
  // Extraction et conversion des données JSON
  const response_1 = await response.json()
  // Renvoi des données utilisateur
  return response_1.data
}

/**
 * Fonction qui récupère les données principales de l'utilisateur.
 * @param {string} userId - L'ID de l'utilisateur.
 * @returns {Promise} Une promesse qui se résout avec les données principales de l'utilisateur.
 */

function getUserDataMain(userId) {
  // Appel à la fonction fetchAPIUserData avec l'URI spécifique pour les données principales de l'utilisateur
  return fetchAPIUserData('user/' + userId)
}

/**
 *  Fonction qui récupère les données d'activité de l'utilisateur.
 *
 * @param {string} userId - L'ID de l'utilisateur.
 * @returns {Promise} Une promesse qui se résout avec les données d'activité de l'utilisateur.
 */

function getUserActivity(userId) {
  // Appel à la fonction fetchAPIUserData avec l'URI spécifique pour les données d'activité de l'utilisateur
  return fetchAPIUserData('user/' + userId + '/activity')
}

/**
 * Fonction qui récupère les données de sessions moyennes de l'utilisateur.
 *
 * @param {string} userId - L'ID de l'utilisateur.
 * @returns {Promise} Une promesse qui se résout avec les données de sessions moyennes de l'utilisateur.
 */
function getUserAverageSessions(userId) {
  // Appel à la fonction fetchAPIUserData avec l'URI spécifique pour les données de sessions moyennes de l'utilisateur
  return fetchAPIUserData('user/' + userId + '/average-sessions')
}

/**
 * Fonction qui récupère les données de performance de l'utilisateur.
 *
 * @param {string} userId - L'ID de l'utilisateur.
 * @returns {Promise} Une promesse qui se résout avec les données de performance de l'utilisateur.
 */

function getUserPerformance(userId) {
  // Appel à la fonction fetchAPIUserData avec l'URI spécifique pour les données de performance de l'utilisateur
  return fetchAPIUserData('user/' + userId + '/performance')
}

export {
  getUserDataMain,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
}
