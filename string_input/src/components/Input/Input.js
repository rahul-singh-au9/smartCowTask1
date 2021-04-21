import {useState} from 'react';
import Cards from '../Cards/Cards';
import TextField from "@material-ui/core/TextField";
import useStyles from "./styles";

const InputVal = () => {

  const [val, setVal] = useState('');
  const cards = val.split('');
  const classes = useStyles();

  const handleChange = (e) => {
      setVal(e.target.value);
  }

  return (
    <>
      <div className={classes.root}>
        <TextField
          id="outlined-basic"
          label="Enter the value"
          variant="outlined"
          onChange={handleChange}
        />
      </div>
      <Cards cards={cards} />
    </>
  );

}

export default InputVal;
