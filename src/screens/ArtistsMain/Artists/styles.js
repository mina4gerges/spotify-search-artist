import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    mainArtists: {
        flexGrow: 1,
        width: '100%',
        height: '100%',
        // overflowX: 'hidden',
    },
    artistsSearch: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: '10px 0 40px 0',
    }
}));
