import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    artistsMain: {
        width: '100%',
        height: '100%',
    },
    artistsSearch: {
        display: 'flex',
        padding: '10px 0',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    artistsSearchBody: {
        height: 'calc(100% - 70px)'
    },
}));
