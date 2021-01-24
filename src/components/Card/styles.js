import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    mainCard: {
        maxWidth: 275,

        [theme.breakpoints.only('xs')]: {
            maxWidth: 'unset',
            textAlign: 'center',
        },
    },
    media: {
        width: 100,
        height: 100
    },
}));
