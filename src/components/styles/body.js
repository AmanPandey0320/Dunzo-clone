import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root:{
        width:'70%',
        marginTop:'5%',
        [theme.breakpoints.down('md')]:{
            width:'90%',
            marginTop:'7%'
        },
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            marginTop:'10%'
        },
        [theme.breakpoints.down('xs')]:{
            width:'100%',
            marginTop:'16%'
        }
    },
}));

export default useStyles;