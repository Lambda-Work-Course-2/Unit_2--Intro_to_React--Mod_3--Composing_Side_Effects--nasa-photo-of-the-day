import styled from 'styled-components'


const StyledH1 = styled.h1`
     font-size: 24px;
     position: relative;
     top: 35px;
     color: black;
     background: white; 
     padding: 15px;
     border:white 1px solid;
     border-radius: 20px 20px 0px 0px;
     
`
const AppWrap = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     height: 100vh;
     width: 100vw;
     margin: 0;
     overflow: hidden;
     background-image: url('https://i.imgur.com/cI4ZRnK.jpg');
     background-repeat: no-repeat;
     background-size: cover;
`    
const StyledImg = styled.img`
     max-height: 90vh;
     max-width:75vw;
     overflow: hidden;
     border:white 1px solid;
     border-radius: 15px;
`

const InfoWrap = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     height: 50vh;
     width: 25vw;
     margin: 30px;
     overflow: hidden;
     font-size: 19px;
     background: white;
     padding: 15px;
     border-radius: 15px;
`
export {StyledH1, AppWrap, StyledImg, InfoWrap}