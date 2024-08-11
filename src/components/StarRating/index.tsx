import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import './index.scss'

export interface Props {
    rating: number
}

export default function StarRating(props: Props){
    const numStars = Math.round(props.rating / 2);

    const fullStars = [];
    const emptyStars = [];

    for(let i=0; i<5; i++){
        if(i < numStars){ //verifica se i é menor que o numero de numStars, caso positivo insere na variavel fullStars
            fullStars.push(i);
        } else{
            emptyStars.push(i); //senão insere nas emptyStars
        }
    }

    return(
        <div className="movie-rate">
            {fullStars.map(index =>
                <FaStar key={index}/>
            )}
            {emptyStars.map(index =>
                <FaRegStar key={index} />
            )}
        </div>
       
    );

}