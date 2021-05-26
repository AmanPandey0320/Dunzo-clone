import { makeStyles } from "@material-ui/core";
import { Theme } from "../../assets/data/theme";

const useStyles = makeStyles(theme => ({
    root:{
        marginBottom:'2%',
        marginTop:'4%'
    },
    innerRoot:{
        width:'70%',
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