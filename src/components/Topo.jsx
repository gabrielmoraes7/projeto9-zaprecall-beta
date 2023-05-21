import logo from'../assets/logo.png';
import styled from 'styled-components';

export default function Topo(){
    return(
        <Container>
            <Logo src={logo}alt="Logo" />
            <Title>ZapRecall</Title>
        </Container>
    );
}

const Container = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content:center;
 height:200px
`;

const Logo = styled.img`
 width: 50px;
 height: 50px;
 margin:10 px
`;

const Title = styled.h1`
    width: 203.17px;
    height: 44px;

    margin-top: 50px;
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;
    color: #FFFFFF;
    margin:10px
`;