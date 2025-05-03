import { CDN_URL } from '../utils/constants';

const ResturantCard = (props) => {
    const { restaurant } = props;
    return (
        <div className='res-card'>
            <img className='img' src={CDN_URL + restaurant.info.cloudinaryImageId} width={250} height={150} alt="Resturant" /> 
            <h3>{restaurant.info.name}</h3>
            <h4>{restaurant.info.cuisines.join(", ")}</h4>
            <h4 className={Number(restaurant.info.avgRatingString) > 4 ? 'rating green' : 'rating orange'}>
                {restaurant.info.avgRatingString}
            </h4>

        </div>
    )
}

export default ResturantCard;  //default export

