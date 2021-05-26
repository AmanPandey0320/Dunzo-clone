import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root:{
        marginBottom:'2%',
        marginTop:'4%'
    },
    innerRoot:{
        width:'70%',
        [theme.breakpoints.down('sm')]:{
            
        },
        [theme.breakpoints.down('xs')]:{
            width:'100%'
        }
    },
    containerGrid:{

    },
    itemGrid:{
        fontSize:'medium',
        color:'grey',
        margin:"1%",
        cursor:'pointer'
    },
    p:{
        fontWeight:'600',
        fontFamily:'Nunito',
        fontSize:'x-large'
    }
}));

export default useStyles;