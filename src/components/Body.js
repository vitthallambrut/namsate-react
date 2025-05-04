import ResturantCard from './Resturantcard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import Nodata from './Nodata';

const Body = () => {
    let [ResturantCardList, setResturantCardList] = useState([]);

    const [filtereddata, setfiltereddata] = useState([]);

    let [searchText, setSearchText] = useState("");


    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        if(json){
            setResturantCardList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setfiltereddata(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
    }
    return (
        <div className='body'>
            <div className='filter'>
                <div className='search-bar'>
                    <input type="text" placeholder="Search for restaurants" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
                    <button className='search-btn' onClick={()=>{
                        let searchdata = ResturantCardList.filter((res)=>{
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        })
                        setfiltereddata(searchdata)
                    }}>Search</button>
                </div>
                <button className='filter-btn' onClick={() => {
                    let filteredres = ResturantCardList.filter((restaurant) => {
                        return restaurant.info.avgRating > 4;
                    });
                    setfiltereddata(filteredres);
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
                            filtereddata.length === 0 ? (
                                <Nodata />
                            ) : (
                                filtereddata.map((restaurant) => (
                                    <ResturantCard key={restaurant.info.id} restaurant={restaurant} />
                                ))
                            )
                        }
                    </div>
                )
            }
        </div>
    );
    
}

export default Body;