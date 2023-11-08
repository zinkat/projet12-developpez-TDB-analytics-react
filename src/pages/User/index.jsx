import Title from '../../components/BoardTitle'
import styled from 'styled-components'
import {useParams, Navigate } from 'react-router-dom'
import { getUserDataMain, getUserActivity, getUserAverageSessions, getUserPerformance} from '../../services/dataMocked'
//import{getUserPerformance} from '../../services/dataApi'
import ActivityCharts from '../../components/ActivityChart/index'
import SessionDurationChart from '../../components/SessionDurationChart'

const Dashboard = styled.div`
position: absolute;
width: 80%;
height: 690px;
left: 10%;
bottom : 8%;
@media (max-width: 1030px) {
  bottom : -1%;
  left: 12%;
}
`
const TitreUser= styled.div`

`
const ChartsContainer = styled.div`
display : flex;
flex-direction: row;
margin-top : 10px;
width : 70%
`

function User() {

  const {id} = useParams();
  const idNumber = parseInt(id);
  const userData = getUserDataMain().find((user) => user.id === idNumber)
  const userActivity = getUserActivity().find((activity) => activity.userId === idNumber)
  const userSessionDuration = getUserAverageSessions().find((session) => session.userId === idNumber )
  const userPerformance = getUserPerformance().find((kind) => kind.userId === idNumber)
  console.log(userPerformance);

  if (!userData) {
    return <Navigate replace to="/Error404"/>
  }
  return (
    <Dashboard>
      <TitreUser>
        <Title id={userData?.id} key={userData?.id} firstname={userData?.userInfos.firstName} />
      </TitreUser>
      <div className="activityChart">
        <ActivityCharts key={userData?.id} dataActivity={userActivity?.sessions} />
      </div>
      <ChartsContainer>
      <div className='sessionDurationChart'>
       <SessionDurationChart key={userData?.id} dataSessionDuration = {userSessionDuration?.sessions} />
      </div>
      <div>

      </div>
      </ChartsContainer>
    </Dashboard>
  )
}

export default User
