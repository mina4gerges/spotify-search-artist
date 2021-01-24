import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

import useStyles from './styles';

/**
 * Get card body
 * @param img
 * @param imgTitle
 * @param classes
 * @param title
 * @param description
 * @returns {JSX.Element}
 */
const getCardBody = ({img, imgTitle, classes, title, description}) => {
    return (
        <>
            <CardMedia
                image={img}
                alt={imgTitle}
                title={imgTitle}
                className={classes.media}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
        </>
    )
}

/**
 * Create custom card component
 * @param id
 * @param title
 * @param description
 * @param img
 * @param imgTitle
 * @param onCardClick
 * @param extraContent
 * @param actions
 * @returns {JSX.Element}
 * @constructor
 */
const CardComponent = ({id, title, description, img, imgTitle, onCardClick, extraContent, actions}) => {

    const classes = useStyles();

    return (
        <Card className={classes.mainCard}>
            {
                onCardClick
                    ? <CardActionArea onClick={onCardClick(id)}>
                        {getCardBody({img, imgTitle, classes, title, description})}
                    </CardActionArea>
                    : getCardBody({img, imgTitle, classes, title, description})
            }

            {
                extraContent &&
                <CardContent>
                    {extraContent}
                </CardContent>
            }

            {
                actions &&
                <CardActions className={classes.actions}>
                    {actions}
                </CardActions>
            }
        </Card>
    );
}

export default CardComponent;
