import {makeStyles} from '@material-ui/core/styles';

// we exporting something ,  this function takes a parameter, which is a callback function
//  with an instant return, we rapped in parenthesis and we return an object.

export default makeStyles(()=>({
    root:{
        maxWidth: '100%',
    },
    media:{
        height: 0,
        paddingTop: '56.25%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent:{
        display:'flex',
        justifyContent: 'space-between',
    },
}));