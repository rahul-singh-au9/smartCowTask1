import { Grid } from '@material-ui/core';
import Card from './Card/CardLetter';
import useStyles from './styles';

const Cards = ({cards}) => {
    const classes = useStyles();

    return (
        <Grid
        className={classes.container}
        container
        spacing={3}
        >
        {cards?.map((card, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={6}>
                <Card card={card} idx={idx}/>
            </Grid>
        ))}
        </Grid>
    );
};

export default Cards;
