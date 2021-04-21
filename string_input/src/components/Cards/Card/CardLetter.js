import { Card, CardContent, Typography } from "@material-ui/core";
import useStyles from "./styles";

const CardLetter = ({card, idx}) => {
    const classes = useStyles();

    return (
        <Card
            className={(idx+1) % 3 === 0 ? classes.root1 : classes.root}
        >
            <CardContent>
            <Typography variant="h3" component="h1">
                {card[0]}
            </Typography>
            </CardContent>
        </Card>
    );
};

export default CardLetter;
