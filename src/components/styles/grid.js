import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '../../assets/data/theme'

const useStyles = makeStyles(theme => ({
    bigItem:{
        width:'24%'
    },
    smallItem:{
        width:'24%',
        boxShadow:"1px 2px 4px grey",
        borderRadius:'8px',
        padding:'2%',
        paddingBottom:'0px',
        cursor:'pointer'
    },
    grid:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    smallGrid:{
        width:'60%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        [theme.breakpoints.down('sm')]:{
            width:'100%'
        }
    },
    image:{
        width:'100%',
        height:'100%',
        borderRadius:'12px',
        cursor:'pointer'
    },
    smallImage:{
        width:'30%',
        margin:'2px',
        borderRadius:'12px',
        cursor:'pointer'
    },
    smallText:{
        fontSize:'small',
        color:Theme.main.text,
        fontFamily:'Nunito',
        fontWeight:'600'
    }
}));

export default useStyles;