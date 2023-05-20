import logo from'../assets/logo.png';
import styled from 'styled-components';

export default function Topo(){
    return(
        <Container>
            <Logo src={logo}alt="L" />
            <Title>ZapRecall</Title>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center
`;
const Logo = styled.img`
    margin-top: 50px;
    width: 52px;
    height: 60px;
  
`;

const Title = styled.h1`
    margin-top: 50px;
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;
    color: #FFFFFF;
`;