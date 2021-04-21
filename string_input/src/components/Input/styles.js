import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
      [theme.breakpoints.down('sm')]: {
        marginLeft: '220px',
      },
    },
  },
}));
