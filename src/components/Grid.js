import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles/grid';
import  { useHistory } from 'react-router-dom';

const UnscrollGrid = ({children,...props}) => {
    const items = props.items;
    const city = props.city;
    const area = props.area;
    const classes = useStyles();
    const itemClass = props.big === true ? classes.bigItem : classes.smallItem;
    const mainKey = props.big ? 'big':'small';
    const history = useHistory();
    // console.log(city);
    return(
        <Grid className={classes.grid} container>
            {
                items.map((item,index) => {
                    // console.log(item.path);
                    const ag = area!==""?`/${area}`:''
                    const path = `/services/${city}${ag}${item.path}`;
                    // console.log(path);
                    return (
                        <Grid key={`${mainKey}${index}`} onClick={e => {if(item.path!=undefined || item.path!=null)history.push(path)}} className={itemClass} item>
                            <img src={item.image} className={classes.image} alt="logo"/>
                        </Grid>
                    );
                })
            }
        </Grid>
    );
}

export const SmallGrid = ({children,...props}) => {
    const items = props.items;
    const classes = useStyles();
    const city = props.city;
    const area = props.area;
    const history = useHistory();
    return(
        <Grid className={classes.smallGrid} container>
            {
                items.map(item => {
                    const ag = area!==""?`/${area}`:''
                    const path = `/services/${city}${ag}${item.path}`;
                    return (
                        <Grid key={item.id} onClick={e => {if(item.path!=undefined || item.path!=null)history.push(path)}} className={classes.smallItem} item>
                            <img src={item.image} className={classes.smallImage} alt="logo"/>
                            <Typography className={classes.smallText}>{item.text}</Typography>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default UnscrollGrid