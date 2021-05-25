import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root:{
        display:'flex',
        flexDirection:'row',
        marginLeft:'10%',
        [theme.breakpoints.down('md')]:{
            marginLeft:'2%',
        },
        [theme.breakpoints.down('sm')]:{
            marginLeft:'0%',
        },
        cursor:'pointer'
    },
    typography:{
        color:'#000000',
        fontWeight:'600',
        fontSize:'14px',
        fontFamily:'Nunito',
    }
}));

export default useStyles;