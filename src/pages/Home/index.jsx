import { NavLink } from 'react-router-dom'
import { getUserDataMain } from '../../services/dataMocked'
//import { getUserDataMain } from "../../services/dataApi";
import styled from 'styled-components'
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";

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
  padding-left: 20px;
  font-size: 1.8em;
`
const ListUser = styled.li`
  color: black;
  font-size: 1.3em;
  padding: 0px 0px 0px 40px;
  margin: 5px;
  width: 50%;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    color: black;
    box-shadow: 2px 2px 10px #06060621;
    color: black;
    color: #ff0101;
  }
`
/**
 * Composant représentant la page d'accueil.
 *
 * @component
 * @returns {JSX.Element} Composant de la page d'accueil.
 */

function Home() {

  //const userDatas = getUserDataMain()  

      const [userDatas, setUserDatas] = useState([]);

   useEffect(() => {

      const fetchData = async () => {
        try {
          const userData = await getUserDataMain();
          console.log('userData:', userData);
          setUserDatas(userData);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchData();

    }, []);

    if (!userDatas) {
      // Affichage d'un indicateur de chargement
      console.log('Loading...')
      return <Loading />
    }

  return (
    <Dashboard>
      <TitreH1>Veuillez choisir un utilisateur🏋️‍♀️</TitreH1>
      {userDatas.map((UserData) => (
        <NavLink to={`/user/${UserData.id}`} key={UserData.id}>
          <ListUser>
            {UserData.userInfos.firstName + ' ' + UserData.userInfos.lastName}
          </ListUser>
        </NavLink>
      ))}
    </Dashboard>
  )
}

export default Home
