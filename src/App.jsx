import Deck from './components/Deck';
import styled from 'styled-components';
import Topo from './components/Topo';
import CARTOES from './mock';
import { useState } from 'react';
import ListaIcon from './components/ListaIcon';

function App() {
  const [selected, setSelected] = useState([]);

 return (
  <AppWrapper>
    <Topo/>
    <Deck cartoes={CARTOES} selected={selected} setSelected={setSelected}/>
    
    <Result>
      <ResultText>
        <p>Resultado {selected.length}/{CARTOES.length}</p>
      </ResultText>

      <ResultIcons>
        <ListaIcon selected={selected} />
      </ResultIcons>
    </Result>
  </AppWrapper>
);
}

const ResultText = styled.div`

`;

const ResultIcons = styled.div`

`;

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
  flex-direction: column;
  background: #FFFFFF;
  bottom: 0;
  width: 375px;
  height: 70px;

  
box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

p{
  font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
/* identical to box height */


color: #333333;

}
`;

export default App;
