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
 * @param title
 * @param description
 * @param classes
 * @returns {JSX.Element}
 */
const getCardBody = ({img, imgTitle, title, description, classes}) => {
    return (
        <>
            <CardMedia
                image={img}
                width='320'
                height='320'
                alt={imgTitle}
                component='img'
                title={imgTitle}
            />
            <CardContent className={classes.cardBody}>
                <Typography gutterBottom variant="h5" component="h2" className={classes.cardTitle}>
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.cardDescription}>
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

    const cardBodyProps = {img, imgTitle, title, description, classes};

    return (
        <Card className={classes.cardMain}>
            {
                onCardClick
                    ? <CardActionArea onClick={onCardClick(id)}>
                        {getCardBody({...cardBodyProps})}
                    </CardActionArea>
                    : getCardBody({...cardBodyProps})
            }

            {
                extraContent &&
                <CardContent className={!actions ? classes.extraContent : null}>
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
