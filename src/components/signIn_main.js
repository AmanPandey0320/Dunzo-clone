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
    TextField, 
    FormControlLabel,
    Checkbox} from '@material-ui/core';
import React, { useState } from 'react';
import { MdCall } from 'react-icons/md'
import {
    ThemeProvider,
  } from '@material-ui/core/styles';
import useStyles,{ theme } from './styles/signIn';
import signin from '../assets/images/signin.svg';

const Transition = React.forwardRef((props,ref) => <Slide direction="up" ref={ref} {...props} />);

const SignIn = (props) => {
    const { open,uiHandler} = props;
    const classes = useStyles();
    const [check,setCheck] = useState(true);
    return ( 
        <div className={classes.root} >
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                maxWidth="sm"
                fullWidth="sm"
                onClose={uiHandler({type:'TOGGLE_SIGNIN',data:false})}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <img className={classes.image} src={signin} alt="signin logo"/>
                <DialogTitle id="alert-dialog-slide-title">
                    <Typography className={classes.header2} >Sign-In with Dunzo</Typography>
                    <Typography className={classes.subheader2}>Get started with Dunzo</Typography>
                </DialogTitle>
                    <br/>
                <DialogContent>
                    <ThemeProvider theme={theme}>
                        <FormControl className={classes.form} >
                            <TextField 
                                type="text" 
                                className={classes.textField} 
                                id="mobile_txt_field" 
                                label="Mobile number" 
                                defaultValue="+91"
                                InputProps={{
                                    startAdornment:<span><MdCall size="1.3em" color="grey"/></span>
                                }}
                                variant="outlined" />
                        </FormControl>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color="primary"
                                    checked={check}
                                    onChange={e => setCheck(e.target.checked)}
                                />
                            }
                            label="I accept the Terms and Conditions"
                        />
                    </ThemeProvider>
                </DialogContent>
                <DialogActions>
                <ThemeProvider theme={theme}>
                    <Button color="secondary" variant="contained" onClick={uiHandler({type:'TOGGLE_SIGNIN',data:false})} color="primary">
                        <span style={{color:'white'}}>Send OTP</span>
                    </Button>
                </ThemeProvider>
                </DialogActions>

            </Dialog>
        </div>
     );
}
 
export default SignIn;