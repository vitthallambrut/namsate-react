import ResturantCard from './Resturantcard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
    let [ResturantCardList, setResturantCardList] = useState([]);

    // const [filtereddata, setfiltereddata] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        if(json){
            setResturantCardList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            // setfiltereddata(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
    }
    return (
        <div className='body'>
            <div className='filter'>
                <div className='search-bar'>
                    <input type="text" placeholder="Search for restaurants" />
                    <button className='search-btn'>Search</button>
                </div>
                <button className='filter-btn' onClick={() => {
                    const filteredres = ResturantCardList.filter((restaurant) => {
                        return restaurant.info.avgRating > 4;
                    });
                    setResturantCardList(filteredres);
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            {
                ResturantCardList.length === 0 ? (
                    <Shimmer />
                ) : (
                    <div className='res-container'>
                        {
                            ResturantCardList.map((restaurant) => (
                                <ResturantCard key={restaurant.info.id} restaurant={restaurant} />
                            ))
                        }
                    </div>
                )
            }
        </div>
    );
    
}

export default Body;