import styled, { css } from 'styled-components/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const InputStyle = styled.TextInput`
    border: #979797 solid 1px;
    font-size: 18px;
    padding: 10px;

    ${props => props.error && css`
        border: #FA5858 solid 1px;
    `}
`;

export const Container = styled.View`
    background: #fff;
    flex-direction: row;
    border: #979797 solid 1px;
    border-radius: 3px;
    align-items: center;
    margin-top: 10px;

    ${props => props.error && css`
        border: #FA5858 solid 1px;
    `}
`;

export const InputOfIcon = styled.TextInput`
    font-size: 18px;
    padding: 10px;
    padding-left: 0px;
    flex: 1;
`;

export const Icon = styled(SimpleLineIcons)`
    margin: auto 10px;
    color: #979797;

    ${props => props.error && css`
        color: #FA5858;
    `}
`;

export const ContainerInput = styled.View`
    margin-bottom: 20px;
`;