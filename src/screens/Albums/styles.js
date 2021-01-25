import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    albumsMain: {
        width: '100%',
        height: '100%',
    },
    albumsHeader: {
        padding: '30px 0'
    },
    albumsBody: {
        height: 'calc(100% - 120px)'
    },
    artistName: {
        textTransform: 'capitalize',
    },
}));
