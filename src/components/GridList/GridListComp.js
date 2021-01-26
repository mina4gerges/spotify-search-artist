import React from 'react';
import Error from '../Error/Error';
import Grid from '@material-ui/core/Grid';
import {DATA_NOT_FOUND} from "../../constant/messages";

export const GridListComp = ({data = [], RenderItemComp, errorMsg = DATA_NOT_FOUND}) => {

    if (data.length === 0)
        return <Error errorMsg={errorMsg}/>

    return (
        <Grid container spacing={3}>
            {
                data.map(item => {
                    return (
                        <Grid key={`item-id-${item.id}`} xs={12} sm={6} md={4} lg={3} item>
                            <RenderItemComp {...item}/>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default GridListComp;
