import Title from '../../components/BoardTitle'
import styled from 'styled-components'
import { useParams, Navigate } from 'react-router-dom'
//import {getUserDataMain, getUserActivity, getUserAverageSessions, getUserPerformance,} from '../../services/dataMocked'
import ActivityCharts from '../../components/ActivityChart/index'
import SessionDurationChart from '../../components/SessionDurationChart'
import PerformanceChart from '../../components/PerformanceChart/index'
import ScoreChart from '../../components/RadialChart/index'
import NutritionCard from '../../components/CardFood'
import CaloriesIcon from '../../assets/calories-icon.svg'
import CarbsIcon from '../../assets/carbs-icon.svg'
import FatIcon from '../../assets/fat-icon.svg'
import ProteinIcon from '../../assets/protein-icon.svg'
import Loading from '../../components/Loading'
import useUserData from '../../utils/myHook/index'

const Dashboard = styled.div`
  width: 85%;
  position: absolute;
  left: 11%;
  height: 689px;
  top: 12%;
  // transform: translate(2%,5%);
`
const UserInfos = styled.div`
  padding-top: 5px;
`
const ChartsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.5%;
  width: 70%;
`
const AsideCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1% 0% 0% 2%;
  width: 25%;
  position: absolute;
  left: 70%;
  height: 595px;
  justify-content: space-between;
`
const ActivityChartDiv = styled.div`
  background-color: #fbfbfb;
  padding: 15px;
  position: relative;
  width: 70%;
  height: 310px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  box-sizing: border-box;
  margin-top: 12px;
`
const SessionDurationDiv = styled.div`
  background-color: #ff0000;
  border-radius: 5px;
  height: 258px;
  width: 31%;
  position: relative;
  display: flex;
  flex-direction: column;
`
const PerformanceChartDiv = styled.div`
  background-color: #282d30;
  border-radius: 5px;
  width: 31%;
  height: 258px;
`
const ScoreChartDiv = styled.div`
  position: relative;
  background-color: #fbfbfb;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  width: 31%;
  height: 258px;
`

/**
 * Composant pour afficher les détails d'un utilisateur.
 *
 * @component
 * @returns {JSX.Element} Composant pour afficher les détails d'un utilisateur.
 */

function User() {
  const { id } = useParams()
  const userId = parseInt(id, 10)
  console.log('userId:', userId)

  //***********utilisation des objets mock ************** */
  // const userData = getUserDataMain().find((usersData) => usersData.id === userId)
  // const userActivity = getUserActivity().find((UsersActivity) => UsersActivity.userId === userId)
  // const userSessionDuration = getUserAverageSessions().find((usersSession) => usersSession.userId === userId)
  // const userPerformance = getUserPerformance().find((kind) => kind.userId === userId)

  const {
    userData,
    userActivity,
    userPerformance,
    userSessionDuration,
    isDataLoading,
    isError,
  } = useUserData(userId)

  if (isError) {
    return <Navigate replace to="/Error404" />
  }

  if (!userData || !userActivity || !userSessionDuration || !userPerformance) {
    // Affichage d'un indicateur de chargement
    console.log('Loading...')
    return <Loading />
  }
  console.log('Data loaded successfully!')

  if (isDataLoading) {
    console.log('Data is loading...')
    return <Loading />
  }

  return (
    <Dashboard>
      <UserInfos>
        {userData && (
          <Title id={userData?.id} firstname={userData?.userInfos.firstName} />
        )}
        <AsideCard>
          {userData && (
            <NutritionCard
              icon={CaloriesIcon}
              keyDataValue={[`${userData?.keyData.calorieCount}`, 'kCal']}
              keyDataType="Calories"
              id={userData?.id}
            />
          )}
          {userData && (
            <NutritionCard
              icon={ProteinIcon}
              keyDataValue={[`${userData?.keyData.proteinCount}`, 'g']}
              keyDataType="Proteines"
              id={userData?.id}
            />
          )}
          {userData && (
            <NutritionCard
              icon={CarbsIcon}
              keyDataValue={[`${userData?.keyData.carbohydrateCount}`, 'g']}
              keyDataType="Glucides"
              id={userData?.id}
            />
          )}
          {userData && (
            <NutritionCard
              icon={FatIcon}
              keyDataValue={[`${userData?.keyData.lipidCount}`, 'g']}
              keyDataType="Lipides"
              id={userData?.id}
            />
          )}
        </AsideCard>
      </UserInfos>

      <ActivityChartDiv>
        {userActivity && (
          <ActivityCharts
            key={userData?.id}
            dataActivity={userActivity?.sessions}
          />
        )}
      </ActivityChartDiv>
      <ChartsContainer>
        <SessionDurationDiv>
          {userSessionDuration && (
            <SessionDurationChart
              key={userData?.id}
              dataSessionDuration={userSessionDuration?.sessions}
            />
          )}
        </SessionDurationDiv>
        <PerformanceChartDiv>
          {userPerformance && (
            <PerformanceChart dataPerformance={userPerformance.data} />
          )}
        </PerformanceChartDiv>
        <ScoreChartDiv>
          {userData && <ScoreChart dataScore={userData} />}
        </ScoreChartDiv>
      </ChartsContainer>
    </Dashboard>
  )
}

export default User
