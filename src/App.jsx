import Deck from './components/Deck';
import styled from 'styled-components';
import Topo from './components/Topo';
import CARTOES from './mock';
import { useState } from 'react';

function App() {
  const [selected, setSelected] = useState([]);

  return (
    <AppWrapper>
        <Topo/>
        <Deck cartoes={CARTOES} selected={selected} setSelected={setSelected}/>
        <Result>
            <p>Resposta aqui</p>
        </Result>
    </AppWrapper>
);
}
const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-itens:center;
  width: 375px;
  
background: #FB6B6B;
border: 1px solid #DBDBDB;
`;

const Result = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  bottom: 0;
  width: 375px;
  height: 70px;

  
box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`;

export default App;
