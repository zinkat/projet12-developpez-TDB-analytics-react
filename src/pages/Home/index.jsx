import { NavLink } from "react-router-dom";
import { getUserDataMain } from '../../services/dataMocked'
import styled from 'styled-components'



const Dashboard = styled.div`
  position: absolute;
  width: 50%;
  height: 780px;
  left: 15%;
  bottom: -5%;
`
const TitreH1 = styled.h1`
margin-bottom: 20px;
margin-top: 100px;
padding-left:20px;
font-size: 1.8em;
`
const ListUser = styled.li`
color:black;
font-size: 1.3em;
padding: 0px 0px 0px 40px;
margin:5px;
width:50%;
border-radius: 5px;
cursor: pointer;
&:hover {
    cursor: pointer;color:black;
    box-shadow: 2px 2px 10px #06060621;
    color:black;
    color: #FF0101;
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