import styled, {css} from 'styled-components';
import { useState } from 'react';

export default function MontaCards(props){
  const [color, setColor] = useState('#FFFFFF');                    //setta o estado que é usado para definir o background do card
  const [borderColor, setBorderColor] = useState('transparent');    //setta a borda do card
  const [textColor, setTextColor] = useState('black');              //setta a cor do texto
  const [cardSize, setCardSize] = useState('65px');                 //muda o tamanho do card
  const [flexDirection, setFlexDirection] = useState('row');        //altera a direção em que o card é disposto 
  const [showText, setShowText] = useState(false);                  //exibição do texto da pergunta
  const [showButtons, setShowButtons] = useState(false);            //mostra os botões de resposta
  const [showAnswer, setShowAnswer] = useState(false);              //mostra a resposta
  const [iconName, setIconName] = useState(null);                   //passa o nome do icone usado dependendo da resposta dada
  const [showTurnCard, setShowTurnCard] = useState(false);
  const {texto} = props.card;
  const [currentText, setCurrentText] = useState(texto);
  const { cartoes, 
          cardIndex, 
          selected, 
          setSelected, 
          setResultHeight, 
          setShowResp, 
          setResultText,
          setResultResp,
          setResultEmoji} = props;
  
  function verificaIcone(selected) {
    return selected.some(item => item.iconName === 'close-circle');
  }
  
  // Chame a função aqui para verificar se algum item do array selected contém o atributo iconName com o valor 'close-circle'
  const temCloseCircle = verificaIcone(selected);
  
  function nameResult(){
    if(temCloseCircle == true){
      setResultText('Ainda faltam alguns... Mas não desanime!');
      setResultResp('Putz...');
      setResultEmoji('../assets/sad.png');
    }

    if(temCloseCircle != true){
      setResultText('Você não esqueceu de nenhum flashcard');
      setResultResp('Parabéns!');
      setResultEmoji('../assets/party.png');
    }
  }
  //console.log(cartoes);
  //console.log(selected);

  function finishQuest(){
    console.log(selected.length);
    console.log(cartoes.length);
    if(cartoes.length === (selected.length +1)){
      setResultHeight('170px');
      setShowResp(true);
      nameResult();
    }
  }

  //função do click ao se selecionar um card
  function handleClick(){
    setColor('#FFFFD5');
    setCardSize('300px');
    setFlexDirection('column');

    setShowText(true);
    setShowButtons(false);
    setShowAnswer(false);
  }
 
  //função que mostra a resposta e os botões ao virar a flashcard
  function handleReloadClick() {
    setShowTurnCard(true);          //resposta
    setShowButtons(true);         //botão
    setCurrentText(props.card.resposta);
  }
 
  //Aqui temos as 3 funções responsaveis pelas 3 respostas possiveis ao flashcard, que cada uma altera a configuração inicial do card depedendo de qual foi escolhida 
  //Aqui o erro
  function handleWrongClick() {
    setColor('#FFFFFF');
    
    setCardSize('65px');
    setFlexDirection('row');
    setBorderColor('red');
    setTextColor('red');
    setIconName('close-circle');
    const newSelected = [...selected, {iconName: 'close-circle', iconColor: 'red'}];
    setSelected(newSelected);
    finishQuest(newSelected)
    setShowButtons(false);
    console.log(newSelected);
    setShowAnswer(true);
    }
   //Aqui um acerto 
    function handleRightClick() {
    setColor('#FFFFFF');
    setCardSize('65px');
    setFlexDirection('row');
    setBorderColor('yellow');
    setTextColor('yellow');
    setIconName('alert-circle');
    const newSelected = [...selected, {iconName: 'alert-circle', iconColor: 'yellow'}];
    setSelected(newSelected);
    finishQuest(newSelected); 
    setShowAnswer(true);
    setShowButtons(false);
    console.log(newSelected);
    }
   //aqui o Zap
    function handleZapClick() {
    setColor('#FFFFFF');
    setCardSize('65px');
    setFlexDirection('row');
    setBorderColor('green');
    setTextColor('green');
    setIconName('checkmark-circle');
    const newSelected = [...selected, {iconName: 'checkmark-circle', iconColor: 'green'}];
    setSelected(newSelected);
    finishQuest(newSelected);
    setShowAnswer(true);
    setShowButtons(false);
    console.log(newSelected);
    }

    //testando pq do :hover nn estar acionando quando o mouse passa por ele, apararentemente algo está impedindo o reconhecimento do evento do mouse
    function handleMouseEnter() {
      console.log('Mouse entered Cartao');
    }
  
  //return com a estrutura individual do card para ser exibida no Map do Deck 
  //o ternario alí presente muda após o click inicial de mostrar o flashcard dá estrutura inicial para as de pergunta e resposta dependendo do estado de showText que é alterado pelos buttons 
  return(
  <Cartao handleMouseEnter={handleMouseEnter} hoverEnabled={!showText} color={color} borderColor={borderColor} cardSize={cardSize} flexDirection={flexDirection}> 
    {showText ? (
      <>
        <UpperDiv>
          <CardText textColor={textColor} >{showAnswer ? `Pergunta ${cardIndex + 1}` : currentText}</CardText>
        </UpperDiv>
        
        <LowerDiv>
          {showButtons && (
          <ButtonsContainer>
          <WrongButton onClick={handleWrongClick}><p>Não Lembrei</p></WrongButton>
          <RightButton onClick={handleRightClick}><p>Quase Errei</p></RightButton>
          <ZapButton onClick={handleZapClick}><p>ZAP!</p></ZapButton>
          </ButtonsContainer>
          )}
          {!showTurnCard && (
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

  ${props => props.hoverEnabled && css`
    &:hover {
      border: 2px solid purple;
    }
  `}
 `;
 
 const CardText = styled.p`
  color: ${props => props.textColor};
  text-decoration: ${props => props.textColor !== 'black' ? 'line-through' : 'none'};
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
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
