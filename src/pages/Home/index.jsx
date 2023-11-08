import { NavLink } from "react-router-dom";
import { getUserDataMain } from '../../services/dataMocked'
import styled from 'styled-components'



const Dashboard = styled.div`
  position: absolute;
  width: 50%;
  height: 780px;
  left: 20%;
  bottom: 0%;
  @media (max-width: 1030px) {
    bottom : -10%;
    left: 25%;
  }
`
const TitreH1 = styled.h1`
margin-bottom: 20px;
margin-top: 100px;
font-size: 1.8em;
`
const ListUser = styled.li`
color: #FF0101;
font-size: 1.3em;
padding: 0px 0px 0px 40px;
width:50%;
border-radius: 5px;
cursor: pointer;
&:hover {
    cursor: pointer;color:black;
    box-shadow: 2px 2px 10px #ff010123;
    color:black;
}
`


function Home(){
    const UserDatas = getUserDataMain()
    return(
        <Dashboard>
          <TitreH1>Veuillez choisir un utilisateur🏋️‍♀️</TitreH1>
        {UserDatas.map(UserData => 
            <NavLink  to={`/user/${UserData.id}`} key={UserData.id} >
                <ListUser>
                   {UserData.userInfos.firstName +' '+ UserData.userInfos.lastName}
                </ListUser>
            </NavLink>
        )}
        </Dashboard>
    )
}

export default Home