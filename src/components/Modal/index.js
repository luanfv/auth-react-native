import React from 'react';
import ModalContainer from 'react-native-modal';

import { Container, ContainerButtons, Button } from './style';
import TxtBold from './../../styles/TxtBold'; 
import TwoColumn from './../../styles/TwoColumn';

const Modal = ({ open, text, yes, no }) => {
    return (
        <ModalContainer isVisible={open}>
            <Container>
                <TxtBold style={{ textAlign: 'center' }}>
                    { text }
                </TxtBold>
                <ContainerButtons>
                    <TwoColumn>
                        <Button 
                            width="50%"
                            background="#fba91a" 
                            onPress={yes}
                        >
                            <TxtBold size="18px">
                                SIM
                            </TxtBold>
                        </Button>
                        <Button 
                            width="50%"
                            onPress={no}
                        >
                            <TxtBold size="18px">
                                NÃO
                            </TxtBold>
                        </Button>
                    </TwoColumn>
                </ContainerButtons>
            </Container>
        </ModalContainer>
    );
}

export default Modal;