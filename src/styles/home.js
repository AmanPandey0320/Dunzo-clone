import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import  { Theme } from '../assets/data/theme'

export const HomeWrapper = styled.div`
    margin:0px;
`;

const useStyles = makeStyles(theme => ({
    header1:{
        color:Theme.main.text,
        fontFamily:'Nunito',
        fontSize:'xx-large',
        fontWeight:'600'
    },
    breadLink:{
        textDecoration:'none',
        color:Theme.main.icon,
        fontFamily:'Nunito',
        fontSize:'small',
        fontWeight:'600'
    },
    para:{
        color:'grey',
    }
}));

export default useStyles;