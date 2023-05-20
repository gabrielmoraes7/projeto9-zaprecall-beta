import MontaCards from './Cards';
import styled from 'styled-components';

export default function Deck(props){
    console.log(props);
    const {cartoes, selected, setSelected} = props;
    return(
        <DeckWrapper>

            {cartoes.map((cartao, index) => (
                            
                            <MontaCards 
                                key={index}
                                card={cartao}
                                selected={selected}
                                setSelected={setSelected}
                                index={index}
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
`;
