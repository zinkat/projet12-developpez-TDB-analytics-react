import styled, { keyframes } from 'styled-components'

const LoadingSection = styled.section`
  height: 500px;
  line-height: 500px;
  text-align: center;
  font-size: 20px;
  width: 85%;
  position: absolute;
  left: 11%;
  height: 650px;
  top: 12%;
`
const spin = keyframes`
0% { transform: rotate(0deg); -webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); -ms-transform: rotate(0deg); -o-transform: rotate(0deg); }
100% { transform: rotate(360deg); -webkit-transform: rotate(360deg); -moz-transform: rotate(360deg); -ms-transform: rotate(360deg); -o-transform: rotate(360deg); }
`
const LoaderDiv = styled.span`
width: 50px;
    height: 50px;
    display: inline-block;
    vertical-align: middle;
    margin: 10px;
    position: relative;
    border-radius: 50px;
   border: 6px solid rgba(255,0,0,0.4);
   &:after{
        border: 6px solid transparent;
        content:'';
        position: absolute;
        border-top-color: rgba(255,0,0,1);
        border-radius: 50px;
        top: -6px;
        left: -6px;
        right: -6px;
        bottom: -6px;
        animation: ${spin} 2s ease-out infinite;
        -webkit-animation: ${spin} 2s ease-out infinite;
`

function Loading() {
  return (
    <LoadingSection>
      <LoaderDiv></LoaderDiv>
      Loading...
    </LoadingSection>
  )
}

export default Loading
