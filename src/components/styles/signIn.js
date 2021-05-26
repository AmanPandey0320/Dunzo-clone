import { createMuiTheme, makeStyles } from "@material-ui/core";
import { Theme } from "../../assets/data/theme";

const useStyles = makeStyles(theme => ({
    header:{
        fontSize:'x-large',
        fontFamily:'Nunito',
        fontWeight:'500',
        color:Theme.main.text
    },
    textField:{
        width:'100%'
    },
    root:{

    },
    form:{
        width:'100%'
    },
    btntxt:{
        color:Theme.main.text,
        fontSize:'small',
        fontFamily:'Nunito',
        fontWeight:'500',
    }
}));

export const theme = createMuiTheme({
    palette:{
        primary:{
            main:Theme.main.body
        },
        secondary:{
            main:Theme.main.icon
        }
    }
});

export default useStyles;