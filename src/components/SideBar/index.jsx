import Yoga from '../../assets/yoga.png'
import Bike from '../../assets/bike.png'
import Swim from '../../assets/swim.png'
import BodyBuild from '../../assets/bodybuild.png'
import styled from 'styled-components'

const LeftBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 91vh;
  background-color: #020203;
  box-shadow: 4px 4px 4px 0px #00000040;

`
const LeftNav = styled.nav`
  width: 64px;
  height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto auto 360px auto;
`
const ImgSquare = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 6px;
`

const Copyright = styled.div`
  color: white;
  font-size: 13px;
  padding: 20px 20px 20px 20px;
  background-color: #020203;
  width: auto;
  transform: rotate(-90deg);
  position: absolute;
  bottom: 120px;
  left: -50px;
`

function SideBar() {
  return (
    <LeftBar>
      <LeftNav>
        <ImgSquare src={Yoga} alt="Yogi" />
        <ImgSquare src={Swim} alt="Swimmer" />
        <ImgSquare src={Bike} alt="Biker" />
        <ImgSquare src={BodyBuild} alt="Dumbbel" />
      </LeftNav>
      <Copyright>Copyright, SportSee 2020</Copyright>
    </LeftBar>
  )
}

export default SideBar
