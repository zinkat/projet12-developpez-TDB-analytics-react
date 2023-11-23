import {
  getUserDataMain,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from '../../services/dataApi'
import { useEffect, useState } from 'react'

/**
 * Hook personnalisé pour gérer les données de l'utilisateur.
 *
 * @param {number} userId - L'identifiant de l'utilisateur.
 * @returns {Object} - Les données de l'utilisateur, le statut de chargement et les erreurs.
 * @property {Object|null} userData - Les données principales de l'utilisateur.
 * @property {Object|null} userActivity - Les données d'activité de l'utilisateur.
 * @property {Object|null} userSessionDuration - La durée moyenne des sessions de l'utilisateur.
 * @property {Object|null} userPerformance - Les performances de l'utilisateur.
 * @property {boolean} isDataLoading - Indique si les données sont en cours de chargement.
 * @property {boolean} isError - Indique s'il y a eu une erreur lors de la récupération des données.
 */

function useUserData(userId) {
  const [userData, setUserData] = useState(null)
  const [userActivity, setUserActivity] = useState(null)
  const [userSessionDuration, setAverageSessions] = useState(null)
  const [userPerformance, setUserPerformance] = useState(null)

  const [isDataLoading, setIsDataLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    /**
     * Fonction interne pour récupérer les données de l'utilisateur.
     * @async
     * @function
     * @throws {Error} - Lève une erreur si l'utilisateur n'est pas trouvé.
     */
    const getData = async () => {
      try {
        setIsDataLoading(true)
        setIsError(false)
        // Récupérer les données principales de l'utilisateur.
        const userDatas = await getUserDataMain(userId)
        if (!userDatas) {
          //générer une nouvelle erreur lorsque les données principales de l'utilisateur ne sont pas trouvées exécution du bloc catch
          throw new Error('Utilisateur non trouvé')
        }
        setUserData(userDatas)
        // Récupérer les données d'activité de l'utilisateur.
        const userActivities = await getUserActivity(userId)
        setUserActivity(userActivities)
        // Récupérer la durée moyenne des sessions de l'utilisateur.
        const userSessionDuration = await getUserAverageSessions(userId)
        setAverageSessions(userSessionDuration)
        // Récupérer les performances de l'utilisateur.
        const userPerformance = await getUserPerformance(userId)
        setUserPerformance(userPerformance)

        setIsDataLoading(false)
      } catch (error) {
        console.error('API Call Error:', error)
        // Si l'erreur est une erreur 404 (Not Found) isError sur true
        setIsError(true)
      }
    }

    getData()
  }, [userId])

  return {
    userData,
    userActivity,
    userPerformance,
    userSessionDuration,
    isDataLoading,
    isError,
  }
}
export default useUserData
