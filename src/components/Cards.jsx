import imgHero from '../assets/img/img-test.png'
// import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Cards = ({ cause, id, name, proyecto}) => {
    return (
        <>
            {/* TODO: hacer las cards dinamicas y modificar el carousel */}
            <div className="carousel-cards">
                <Card className="card" sx={{ maxWidth: 345 }} key={id}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={imgHero}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                {name} - {cause}
                            </Typography>
                            <Typography color="text.secondary">
                                {proyecto}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" variant="outlined">
                            <Link to={`/person/${id}`}>ver más</Link>
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </>
    )
}
export default Cards