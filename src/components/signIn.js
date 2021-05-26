import { 
    Dialog, 
    Slide, 
    DialogTitle, 
    DialogContent,
    DialogContentText,
    DialogActions,
    Button, 
    Typography, 
    FormControl, 
    TextField } from '@material-ui/core';
import React from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
import {
    ThemeProvider,
  } from '@material-ui/core/styles';
import useStyles,{ theme } from './styles/signIn';

const Transition = React.forwardRef((props,ref) => <Slide direction="up" ref={ref} {...props} />);

const SigninModal = (props) => {
    const { open,uiHandler} = props;
    const classes = useStyles();
    return ( 
        <div className={classes.root} >
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                maxWidth="sm"
                fullWidth="sm"
                onClose={uiHandler({type:'TOGGLE_LOCATION',data:false})}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title"><Typography className={classes.header} >Add your Location</Typography></DialogTitle>
                    <br/>
                    <DialogContent>
                        <ThemeProvider theme={theme}>
                            <FormControl className={classes.form} >
                                <TextField type="text" className={classes.textField} id="location_txt_field" label="Location" variant="outlined" />
                            </FormControl>
                            <Button color="secondary"><BiCurrentLocation/>&nbsp;<Typography className={classes.btntxt}>Use current location</Typography></Button>
                        </ThemeProvider>
                    </DialogContent>
                    <DialogActions>
                    <ThemeProvider theme={theme}>
                        <Button color="secondary" variant="contained" onClick={uiHandler({type:'TOGGLE_LOCATION',data:false})} color="primary">
                            <span style={{color:'white'}} >Done</span>
                        </Button>
                    </ThemeProvider>
                    </DialogActions>

            </Dialog>
        </div>
     );
}
 
export default SigninModal;