import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

import useStyles from './styles';

/**
 * Create custom card component
 * @param title
 * @param description
 * @param img
 * @param imgTitle
 * @param extraContent
 * @param actions
 * @returns {JSX.Element}
 * @constructor
 */
const CardComponent = ({title, description, img, imgTitle, extraContent, actions}) => {

    const classes = useStyles();

    return (
        <Card className={classes.mainCard}>
            <CardActionArea>
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
            </CardActionArea>

            {
                extraContent &&
                <CardContent>
                    {extraContent}
                </CardContent>
            }

            {
                actions &&
                <CardActions>
                    {actions}
                </CardActions>
            }
        </Card>
    );
}

export default CardComponent;
