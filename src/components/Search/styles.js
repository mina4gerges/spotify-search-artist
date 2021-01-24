import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    inputWidth: {
        width: 350,

        '& label': {
            width: '80%',
            textAlign: 'center',
        },
        '& label.MuiInputLabel-shrink': {
            width: 'initial',
        },

        [theme.breakpoints.only('xs')]: {
            width: 250,
        },
    }
}));
