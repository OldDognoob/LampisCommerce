import {makeStyles} from '@material-ui/core/styles';

// we exporting something ,  this function takes a parameter, which is a callback function
//  with an instant return, we rapped in parenthesis and we return an object.

export default makeStyles(()=>({
    root:{
        maxWidth: '100%'
    }
}))