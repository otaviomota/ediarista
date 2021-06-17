import { experimentalStyled as styled } from '@material-ui/core/styles';

export const SafeEnviromentContainer = styled('div')`
    padding: ${ ({theme}) => theme.spacing(2) } 0;
    text-align: right;
    font-size: 12px;

    color: ${({theme}) => theme.palette.text.secondary};
    background-color: ${ ({theme}) => theme.palette.background.default};
`;
