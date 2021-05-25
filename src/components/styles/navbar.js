import { makeStyles } from '@material-ui/core/styles';
import {Theme} from '../../assets/data/theme'

const useStyles = makeStyles(theme => ({
    appbar:{
        backgroundColor:'#ffffff'
    },
    image:{
        width:'32%',
        [theme.breakpoints.down('md')]:{
            width:'34%',
        },
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    },
    root:{
        width:'70%',
        [theme.breakpoints.down('md')]:{
            width:'90%'
        },
        [theme.breakpoints.down('sm')]:{
            width:'100%'
        },
        display:'flex',
        flexDirection:'row',
        // backgroundColor:'cyan',
        justifyContent:'space-between'
    },
    brand:{

    },
    actions:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    link:{
        color:'#000000',
        textDecoration:'none',
        '&:hover':{
            color:Theme.main.body
        },
        fontFamily:'Nunito',
        fontWeight:'600',
        fontSize:'14px',
        marginInline:'6px',
    },
    button:{
        backgroundColor:Theme.main.body,
        color:'#ffffff',
        borderRadius:'24px',
        fontSize:'13px',
        fontWeight:'600',
        '&:hover':{
            backgroundColor:Theme.main.icon
        },
        [theme.breakpoints.down('md')]:{
            width:'100px'
        }
    },
    smHide:{
        [theme.breakpoints.down('md')]:{
            fontSize:'11px'
        },
        [theme.breakpoints.down('sm')]:{
            display:'none'
        },
    },
    mdHide:{
        [theme.breakpoints.up('md')]:{
            display:'none'
        }
    }
}));

export default useStyles;