import React from 'react';
import {useHistory} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardComponent from '../../../components/Card/CardComp';

import useStyles from './styles';

/**
 * Get more content to be displayed
 * @param releaseDate
 * @param tracks
 * @returns {JSX.Element}
 */
const getExtraContent = (releaseDate, tracks) => {
    return (
        <>
            <Typography variant="body2" color="textSecondary" component="p">
                {releaseDate}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {tracks} tracks
            </Typography>
        </>
    )
}

/**
 * Get bottom actions
 * @param previewUrl
 * @param history
 * @param classes
 * @returns {JSX.Element}
 */
const getActions = (previewUrl, history, classes) => {

    const onClick = () => window.open(previewUrl, "_blank")

    return (
        <Button
            onClick={onClick}
            className={classes.albumAction}
        >
            <Typography variant="body2" color="textSecondary" component="p">
                Preview on Spotify
            </Typography>
        </Button>
    )
}
/**
 * Create album component
 * @param id
 * @param title
 * @param img
 * @param description
 * @param releaseDate
 * @param tracks
 * @param previewUrl
 * @returns {JSX.Element}
 * @constructor
 */
const Album = ({id, name: title, img, artistName: description, releaseDate, tracks, previewUrl}) => {

    const classes = useStyles();

    const history = useHistory();

    return (
        <CardComponent
            id={id}
            img={img}
            title={title}
            imgTitle={title}
            description={description}
            actions={getActions(previewUrl, history, classes)}
            extraContent={getExtraContent(releaseDate, tracks)}
        />
    )
}

export default Album;
