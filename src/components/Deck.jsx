import MontaCards from './Cards';
import styled from 'styled-components';

export default function Deck(props){
    console.log(props);
    const { cartoes, 
            selected, 
            setSelected, 
            resultHeight, 
            setResultHeight, 
            setShowResp, 
            setResultText, 
            setResultResp, 
            setResultEmoji} = props;
    return(
        <DeckWrapper resultHeight={resultHeight}>

            {cartoes.map((cartao, index) => (
                            
                            <MontaCards 
                                key={index}
                                card={cartao}
                                cartoes={cartoes}
                                selected={selected}
                                setSelected={setSelected}
                                cardIndex={index}
                                setResultHeight={setResultHeight}
                                setShowResp={setShowResp}
                                setResultText={setResultText}
                                setResultResp={setResultResp}
                                setResultEmoji={setResultEmoji}
                            />
                        )
                    )
            }

        </DeckWrapper>
    );
}

const DeckWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: ${props => props.resultHeight}; 
`;
