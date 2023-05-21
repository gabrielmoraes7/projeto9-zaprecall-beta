import Deck from './components/Deck';
import styled from 'styled-components';
import Topo from './components/Topo';
import CARTOES from './mock';
import { useState } from 'react';
import ListaIcon from './components/ListaIcon';
import HomePage from './components/HomePage';

function App() {
  const [selected, setSelected] = useState([]);
  const [showResp, setShowResp] = useState(false);
  const [resultHeight, setResultHeight] = useState('80px');
  const [resultText, setResultText] = useState('Issae');
  const [resultResp, setResultResp] = useState('noix');
  const [resultEmoji, setResultEmoji] = useState();
  const [showHome, setShowHome] = useState(true);
 return (
<>
  {showHome ? (
      <HomePage setShowHome={setShowHome}/>
 ) : (

    <AppWrapper>
      <Topo/>
      <Deck cartoes={CARTOES} 
            selected={selected} 
            setSelected={setSelected} 
            resultHeight={resultHeight} 
            setResultHeight={setResultHeight} 
            setShowResp={setShowResp} 
            setResultText={setResultText}
            setResultResp={setResultResp}
            setResultEmoji={setResultEmoji}
            />
      
      <Result resultHeight={resultHeight}>
        {showResp && (
          <>
            <ResultEmoji>
              <img src={resultEmoji} alt="icon"/>
              <strong>{resultResp}</strong>
            </ResultEmoji>
            <ResultResp>
              <p>{resultText}</p>
            </ResultResp>    
          </>
        )}
        <ResultText>
          <p>Resultado {selected.length}/{CARTOES.length}</p>
        </ResultText>

        <ResultIcons>
          <ListaIcon selected={selected} />
        </ResultIcons>
      </Result>
    </AppWrapper>

  )}
  </>
);
}

const ResultEmoji = styled.div`
`;

const ResultResp = styled.div`
p{
  font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: center;

color: #333333;

}
`;
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
  height: ${props => props.resultHeight};

  
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
