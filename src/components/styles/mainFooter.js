import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root:{
        backgroundColor:'#171e30',
        paddingTop:'4%',
        paddingBottom:'2%'
    },
    innerRoot:{
        width:'70%',
        color:'white',
        [theme.breakpoints.down('sm')]:{
            
        },
        [theme.breakpoints.down('xs')]:{
            width:'100%'
        }
    },
    pBold:{
        fontSize:'large',
        fontWeight:'500'
    },
    pRegg:{
        fontSize:'small',
        fontWeight:'500',
    },
    hr:{
        borderWidth:'0.1px',
        borderColor:'white'
    },
    pBottom:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        [theme.breakpoints.down('sm')]:{

        },
        [theme.breakpoints.down('xs')]:{
            width:'100%',
            flexDirection:'column'
        }
    },
    divLeft:{
        // backgroundColor:'blue',
        width:'8%',
        [theme.breakpoints.down('sm')]:{

        },
        [theme.breakpoints.down('xs')]:{
            width:'20%',
        }
    },
    divCenter:{
        // backgroundColor:'red',
        width:'64%',
        paddingInline:'4%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        [theme.breakpoints.down('sm')]:{

        },
        [theme.breakpoints.down('xs')]:{
            width:'100%',
            flexDirection:'column'
        }
    },
    divRight:{
        // backgroundColor:'green',
        width:'24%',
        [theme.breakpoints.down('sm')]:{

        },
        [theme.breakpoints.down('xs')]:{
            width:'60%',
        }
    },
    image:{
        width:'100%'
    },
    image2:{
        width:'100%'
    },
    dunzo:{
        width:'31%',
        [theme.breakpoints.down('sm')]:{

        },
        [theme.breakpoints.down('xs')]:{
            width:'100%',
        },
    },
    cities:{
        width:'36%',
        [theme.breakpoints.down('sm')]:{

        },
        [theme.breakpoints.down('xs')]:{
            width:'100%',
        },
    },
    getTouch:{
        width:'30%',
        [theme.breakpoints.down('sm')]:{

        },
        [theme.breakpoints.down('xs')]:{
            width:'100%',
        },
    },
    inner:{
        color:'white',
        [theme.breakpoints.down('sm')]:{

        },
        [theme.breakpoints.down('xs')]:{
            width:'100%',
        },
    },
    hb:{
        display:'none',
        [theme.breakpoints.down('sm')]:{
            
        },
        [theme.breakpoints.down('xs')]:{
            display:'block',
            flexDirection:'none'
        }   
    },
    item:{
        cursor:'pointer',
        paddingBottom:'3%',
        paddingTop:'3%',
    }

}));

export default useStyles;