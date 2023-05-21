import styled from 'styled-components';
import logo from'../assets/logo.png';
import { useState } from 'react';

export default function HomePage(props){
     const {setShowHome} = props;
    console.log(props);
    function startRecall(){
        setShowHome(false);
    }

    return (
      <Container>
        <HomeMenu>
          <HomeLogo src={logo} alt="logo" />
          <HomeText>ZapRecall</HomeText>
          <HomeButton onClick={startRecall} data-test="start-btn">
            <p>Iniciar Recall!</p>
          </HomeButton>
        </HomeMenu>
      </Container>
    );
}

const Container = styled.div`
  width: 375px;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeMenu = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;

    background: #fb6b6b;
    border: 1px solid #dbdbdb;
`;

const HomeButton = styled.div`
    width: 300px;
    height: 65px;
    margin: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:20px;
    justify-content: center;

    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    
    `;

  const HomeLogo = styled.img`
    width: 136px;
    height: 161px;
    margin:20px;
    `;

  const HomeText = styled.div`
    
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: -0.012em;
    margin:20px;

    color: #FFFFFF;
  `;