import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainCard: {
        margin: 'auto',
        maxWidth: 300,

        [theme.breakpoints.only('xs')]: {
            maxWidth: 'unset',
            textAlign: 'center',
        },
    },
    media: {
        width: 100,
        height: 100
    },
    actions: {
        background: 'lightgray'
    }
}));
