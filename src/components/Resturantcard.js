import { cardImage } from '../utils/constants';

const ResturantCard = () => {
    return (
        <div className='res-card'>
            <img className='img' src={cardImage} width={250} height={150} alt="Resturant" />
            <h3>Meghana Foods</h3>
            <h4>Burger, North Indian, Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

export default ResturantCard;  //default export

