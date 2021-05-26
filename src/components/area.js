import { Container, Grid } from '@material-ui/core';
import React from 'react';
import useStyles from './styles/area';
import { cityList } from '../assets/data/cityList'

const DeliverArea = (props) => {
    const areas = cityList[props.city].subList;
    const classes = useStyles()
    return ( 
        <div className={classes.root}>
            <Container className={classes.innerRoot}>
                <p  className={classes.p}>Areas We Deliver to</p>
                <Grid xs={12} container>
                {
                    areas.map(area => {
                        return(
                            <Grid className={classes.itemGrid} xs={4} lg={2} sm={3} item>{area.name}</Grid>
                        )
                    })
                }
                </Grid>
            </Container>
        </div>
     );
}
 
export default DeliverArea;