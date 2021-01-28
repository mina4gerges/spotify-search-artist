import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    cardMain: {
        maxWidth: 300,
        margin: 'auto',
        minHeight: '500px',
        position: 'relative'
    },
    cardBody: {
        height: '125px',
    },
    cardTitle: {
        overflow: 'hidden',
        display: '-webkit-box',
        textOverflow: 'ellipsis',
        '-webkit-line-clamp': '2',
        '-webkit-box-orient': 'vertical',
    },
    cardDescription: {
        overflow: 'hidden',
        display: '-webkit-box',
        textOverflow: 'ellipsis',
        '-webkit-line-clamp': '2',
        '-webkit-box-orient': 'vertical',
    },
    extraContent: {
        bottom: 5,
        position: 'absolute'
    },
    actions: {
        background: 'lightgray'
    }
}));
