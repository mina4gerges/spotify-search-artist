import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    albumsMain: {
        width: '100%',
        height: '100%',
    },
    albumsHeader: {
        padding: '30px 0',

        [theme.breakpoints.down('xs')]: {
            textAlign:'center'
        }
    },
    albumsBody: {
        height: 'calc(100% - 120px)'
    },
    artistName: {
        textTransform: 'capitalize',
    },
}));
