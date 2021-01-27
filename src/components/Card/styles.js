import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    mainCard: {
        maxWidth: 300,
        margin: 'auto',
        minHeight: '500px',
        position: 'relative'
    },
    extraContent: {
        bottom: 5,
        position: 'absolute'
    },
    actions: {
        background: 'lightgray'
    }
}));
