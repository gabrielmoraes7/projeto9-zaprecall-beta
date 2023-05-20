import styled from 'styled-components';
import { useState } from 'react';

export default function MontaCards(props){
  const [color, setColor] = useState('#FFFFFF');
  const [borderColor, setBorderColor] = useState('transparent');
  const [textColor, setTextColor] = useState('black');
  const [cardSize, setCardSize] = useState('65px');
  const [flexDirection, setFlexDirection] = useState('row');
  const [showText, setShowText] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [iconName, setIconName] = useState(null);
  const {texto} = props.card;
  const {cardIndex, selected, setSelected} = props;
  
  function handleClick(){
  setColor('#FFFFD5');
  setCardSize('300px');
  setFlexDirection('column');

  setShowText(true);
  setShowButtons(false);
  setShowAnswer(false);
  }
 
  function handleReloadClick() {
  setShowAnswer(true);
  setShowButtons(true);
  }
 
  function handleWrongClick() {
    setColor('#FFFFFF');
    
    setCardSize('65px');
    setFlexDirection('row');
    setBorderColor('red');
    setTextColor('red');
    setIconName('close-circle');
    setSelected([...selected, {iconName: 'close-circle', iconColor: 'red'}]);
    
  setShowButtons(false);
    }
   
    function handleRightClick() {
    setColor('#FFFFFF');
    setCardSize('65px');
    setFlexDirection('row');
    setBorderColor('yellow');
    setTextColor('yellow');
    setIconName('alert-circle');
    setSelected([...selected, {iconName: 'alert-circle', iconColor: 'yellow'}]);
    
  setShowButtons(false);
    }
   
    function handleZapClick() {
    setColor('#FFFFFF');
    setCardSize('65px');
    setFlexDirection('row');
    setBorderColor('green');
    setTextColor('green');
    setIconName('checkmark-circle');
    setSelected([...selected, {iconName: 'checkmark-circle', iconColor: 'green'}]);
    
  setShowButtons(false);
    }
  
  return(
  <>
  <Cartao color={color} borderColor={borderColor} cardSize={cardSize} flexDirection={flexDirection}> 
  {showText ? (
  <>
  <UpperDiv>
  <CardText textColor={textColor}>{showAnswer ? `Pergunta ${cardIndex + 1}` : texto}</CardText>
  </UpperDiv>
  <LowerDiv>
  {showButtons && (
  <ButtonsContainer>
  <WrongButton onClick={handleWrongClick}><p>Não Lembrei</p></WrongButton>
  <RightButton onClick={handleRightClick}><p>Quase Errei</p></RightButton>
  <ZapButton onClick={handleZapClick}><p>ZAP!</p></ZapButton>
  </ButtonsContainer>
  )}
  {!showAnswer && (
  <Botao onClick={handleReloadClick}>
  <ion-icon name="reload-outline"></ion-icon>
  </Botao> 
  )}
  {iconName && (
  <Botao>
  <ion-icon name={iconName} style={{color: borderColor}}></ion-icon>
  </Botao> 
  )}
  </LowerDiv>
  </>
  ) : (
  <>
  <InicialText>Pergunta {cardIndex + 1}</InicialText>
  <Botao onClick={handleClick}>
  <ion-icon name="play-outline"></ion-icon>
  </Botao> 
  </>
  )}
  </Cartao>
  </>
  );
 }
 

 const InicialText = styled.p`
 font-family: 'Recursive';
 font-style: normal;
 font-weight: 700;
 font-size: 16px;
 line-height: 19px;
 
 `;
 const Cartao = styled.div`
  width: 300px;
  height: ${props => props.cardSize};
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${props => props.borderColor};
 
  background-color: ${props => props.color};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  margin-bottom: 25px;
 `;
 
 const CardText = styled.p`
  color: ${props => props.textColor};
  text-decoration: ${props => props.textColor !== 'black' ? 'line-through' : 'none'};
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #333333;
  `;
 
 const UpperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
 `;
 
 const LowerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
 `;
 
 const Botao = styled.button`
  width: 20px;
  height: 23px;
  background-color: transparent;
  border: none;
 `;
 
 const ButtonsContainer = styled.div`
  display:flex;
  justify-content:center;
 
  button{
  margin-right:15px;
 
  &:last-child{
  margin-right:none
  }
  }
 `;

 const WrongButton = styled.button`
  width: 85.17px;
  height: 37.17px;
  
  background: #FF3030;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;

  }
  `
  ;

  const RightButton = styled.button`
  width: 85.17px;
  height: 37.17px;
  
  background: #FF922E;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;

  }
  `
  ;

  const ZapButton = styled.button`
  width: 85.17px;
  height: 37.17px;
  
  background: #2FBE34;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;

  }
  `
  ;
