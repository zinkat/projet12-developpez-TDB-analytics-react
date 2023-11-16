import Title from '../../components/BoardTitle'
import styled from 'styled-components'
import { useParams, Navigate } from 'react-router-dom'
//import {getUserDataMain, getUserActivity, getUserAverageSessions, getUserPerformance,} from '../../services/dataMocked'
import {
  getUserDataMain,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from '../../services/dataApi'
import ActivityCharts from '../../components/ActivityChart/index'
import SessionDurationChart from '../../components/SessionDurationChart'
import PerformanceChart from '../../components/PerformanceChart/index'
import ScoreChart from '../../components/RadialChart/index'
import NutritionCard from '../../components/CardFood'
import CaloriesIcon from '../../assets/calories-icon.svg'
import CarbsIcon from '../../assets/carbs-icon.svg'
import FatIcon from '../../assets/fat-icon.svg'
import ProteinIcon from '../../assets/protein-icon.svg'
import { useEffect, useState } from 'react'
import Loading from '../../components/Loading'

const Dashboard = styled.div`
  width: 85%;
  position: absolute;
  left: 11%;
  height: 689px;
  top: 12%;
  // transform: translate(2%,5%);
`
const TitreUser = styled.div`
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
function User() {
  const { id } = useParams()
  const idNumber = parseInt(id, 10)
  console.log('idNumber:', idNumber)

  // const userData = getUserDataMain().find((usersData) => usersData.id === idNumber)
  // const userActivity = getUserActivity().find((UsersActivity) => UsersActivity.userId === idNumber)
  // const userSessionDuration = getUserAverageSessions().find((usersSession) => usersSession.userId === idNumber)
  // const userPerformance = getUserPerformance().find((kind) => kind.userId === idNumber)

  const [userData, setUserData] = useState()
  const [userActivity, setUserActivity] = useState()
  const [userSessionDuration, setAverageSessions] = useState()
  const [userPerformance, setUserPerformance] = useState()

  const [isDataLoading, setIsDataLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        setIsDataLoading(true)

        const userDatas = await getUserDataMain(idNumber)
        setUserData(userDatas)

        const userActivities = await getUserActivity(idNumber)
        setUserActivity(userActivities)

        const userSessionDuration = await getUserAverageSessions(idNumber)
        setAverageSessions(userSessionDuration)

        const userPerformance = await getUserPerformance(idNumber)
        setUserPerformance(userPerformance)

        setIsDataLoading(false)
        setIsError(false)
      } catch (error) {
        console.error('API Call Error:', error)
        // // afficher l'erreur
        // console.log('Error status:', error.response?.status);
        setIsDataLoading(false)
        // if (error.response && error.response.status === 404) {
        //   //rediriger vers la page d'erreur
        //   return <Navigate replace to="/Error404" />
        // }
        // Si l'erreur est une erreur 404 (Not Found) isError sur true
        setIsError(true)
      }
    }

    getData()
  }, [idNumber])

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

  if (isError) {
    return <Navigate replace to="/Error404" />
  }

  return (
    <Dashboard>
      <TitreUser>
        <Title
          id={userData?.id}
          key={userData?.id}
          firstname={userData?.userInfos.firstName}
        />
        <AsideCard>
          <NutritionCard
            icon={CaloriesIcon}
            keyDataValue={[`${userData?.keyData.calorieCount}`, 'kCal']}
            keyDataType="Calories"
            id={userData.id}
          />
          <NutritionCard
            icon={ProteinIcon}
            keyDataValue={[`${userData?.keyData.proteinCount}`, 'g']}
            keyDataType="Proteines"
            id={userData.id}
          />
          <NutritionCard
            icon={CarbsIcon}
            keyDataValue={[`${userData?.keyData.carbohydrateCount}`, 'g']}
            keyDataType="Glucides"
            id={userData.id}
          />
          <NutritionCard
            icon={FatIcon}
            keyDataValue={[`${userData?.keyData.lipidCount}`, 'g']}
            keyDataType="Lipides"
            id={userData.id}
          />
        </AsideCard>
      </TitreUser>

      <ActivityChartDiv>
        <ActivityCharts
          key={userData?.id}
          dataActivity={userActivity?.sessions}
        />
      </ActivityChartDiv>

      <ChartsContainer>
        <SessionDurationDiv>
          <SessionDurationChart
            key={userData?.id}
            dataSessionDuration={userSessionDuration?.sessions}
          />
        </SessionDurationDiv>
        <PerformanceChartDiv>
          <PerformanceChart dataPerformance={userPerformance.data} />
        </PerformanceChartDiv>
        <ScoreChartDiv>
          <ScoreChart dataScore={userData} />
        </ScoreChartDiv>
      </ChartsContainer>
    </Dashboard>
  )
}

export default User
