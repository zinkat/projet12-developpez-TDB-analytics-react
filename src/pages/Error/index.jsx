import styled from "styled-components"

const MainPg = styled.div`
position:absolute;
left: 33%;
bottom:40%
`
const TitrePg =styled.div`
color: #FF0101;
font-size: 200px;
margin: auto;
margin-top: 80px;
text-align: center;
`
const DescriptionError =styled.span`
display: block;
font-size: 25px;
margin-top: 100px;
`

function Error() {
  return (
    <MainPg >
      <TitrePg>404</TitrePg>
      <DescriptionError className="descriptionError">
        Oups! La page que vous demandez n'existe pas.
      </DescriptionError>
    </MainPg>
  )
}

export default Error
