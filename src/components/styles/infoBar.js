import { makeStyles } from "@material-ui/core";
import { Theme } from "../../assets/data/theme";

const useStyles = makeStyles(theme => ({
    root:{
        backgroundColor:'#f0f2f7',
        marginTop:'3%',
        
    },
    image:{
        width:'20%',
    },
    sideText:{
        position:'absolute',
        bottom:0,
        left:0,
        color:Theme.main.text,
        width:'100%',
        fontSize:'large',
        fontWeight:'500',
        [theme.breakpoints.down('sm')]:{
            fontSize:'small'
        }
    },
    sideDiv:{
        position:'relative',
        width:'40%',
        [theme.breakpoints.down('sm')]:{
            width:'70%'
        }
    },
    storeIcons:{
        [theme.breakpoints.down('sm')]:{
            width:'35%'
        },
        '&:hover':{
            cursor:'pointer'
        }
    },
    innerRoot:{
        width:'70%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        [theme.breakpoints.down('xs')]:{
            width:'100%'
        }
    }
}));

export default useStyles;