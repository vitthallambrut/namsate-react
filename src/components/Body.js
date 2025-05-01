import ResturantCard from './Resturantcard';

const Body = () => {
    return (
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn' onClick={()=>{
                    console.log("Button Clicked");
                }}>Top Rated Resturant</button>
                </div>
            <div className='res-container'>
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
                <ResturantCard />
            </div>
        </div>

    )
}

export default Body;