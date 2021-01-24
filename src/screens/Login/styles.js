import {makeStyles} from '@material-ui/core/styles';

export default makeStyles({
    button: {
        width: '200px',
        textTransform: 'unset',

        paddingRight: 56,
        position: "relative",
        "& .MuiButton-endIcon": {
            position: "absolute",
            right: 16
        }
    },
});

