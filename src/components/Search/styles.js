import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    inputWidth: {
        width: 350,
        '& label': {
            width: '80%',
            textAlign: 'center',
        },
        '& label.MuiInputLabel-shrink': {
            width: 'initial',
        }
    }
}))
;
