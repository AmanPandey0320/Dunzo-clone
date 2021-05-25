import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles/grid';

const UnscrollGrid = ({children,...props}) => {
    const items = props.items;
    const classes = useStyles();
    const itemClass = props.big === true ? classes.bigItem : classes.smallItem;
    const mainKey = props.big ? 'big':'small';
    return(
        <Grid className={classes.grid} container>
            {
                items.map((item,index) => {
                    return (
                        <Grid key={`${mainKey}${index}`} className={itemClass} item>
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
    return(
        <Grid className={classes.smallGrid} container>
            {
                items.map(item => {
                    return (
                        <Grid key={item.id} className={classes.smallItem} item>
                            <img src={item.image} className={classes.smallImage} alt="logo"/>
                            <p><Typography className={classes.smallText}>{item.text}</Typography></p>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default UnscrollGrid