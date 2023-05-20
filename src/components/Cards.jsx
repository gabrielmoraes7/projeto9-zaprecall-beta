import styled from 'styled-components';
import { useState } from 'react';

export default function MontaCards(props){
  const [color, setColor] = useState('#FFFFFF');
  const [text, setText] = useState('');
  const [showButtons, setShowButtons] = useState(false);
  const {texto, resposta} = props.card;

  const {cards} = props.card;
  const {aux} = props.index;
      
    function handleClick(index){
      setColor('#FFFFD5');
      setText(texto);
      setShowButtons(true);
    }
 
  return(
    <>
        <Cartao color={color}>   
            <p>Pergunta {aux}</p>
            <Botao onClick={() => handleClick(aux)}>
              <ion-icon name="play-outline"></ion-icon>
            </Botao>  

            {showButtons && (
              <ButtonsContainer>
                <BottomButton>Errei</BottomButton>
                <BottomButton>Quase Errei</BottomButton>
                <BottomButton>ZAP</BottomButton>
              </ButtonsContainer>
            )}
        </Cartao>
    </>
  );
    
}

const Cartao = styled.div`
  width: 300px;
  height: 65px;
  margin: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.color};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-bottom: 25px;
`;

const Botao = styled.button`
width: 20px;
height: 23px;
background-color: transparent;
  border: none;
`;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const BottomButton = styled.button`
  margin: 0 15px;
`;

