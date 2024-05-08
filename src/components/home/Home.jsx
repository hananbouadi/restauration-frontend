import React, { useEffect, useState } from 'react'
import './home.css'
import { useDispatch, useSelector } from 'react-redux'
import { recipies } from '../../store/actions'


export default function Home() {
  const food = useSelector(state => state.Food.food);
  const [ratings, setRatings] = useState({}); // State to hold ratings for each recipe
  const [hover, setHover] = useState({}); // State to hold hover state for each recipe
  const totalStars = 5;
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recipies());
  }, [dispatch]);

  // Function to handle rating change for a specific recipe
  const handleRatingChange = (itemId, rating) => {
    setRatings(prevRatings => ({
      ...prevRatings,
      [itemId]: rating // Set rating for the specific recipe
    }));
  };

  return (
    <div className='homecontainer scrollbar'>
      {food.map((item) => {
        const itemRating = ratings[item.id] || 0; // Get the rating for this recipe, defaulting to 0 if not rated yet
        return (
          <div className='itemcontainer' key={item.id}>
            <p>{item.name}</p>
            <img src={item.image} alt=''/>
            {/* Star rating */}
            {[...Array(totalStars)].map((_, index) => {
              const currentRating = index + 1;

              return (
                <label key={index}>
                  <input
                    type="radio"
                    name={`rating-${item.id}`} // Unique name for each item
                    value={currentRating}
                    checked={itemRating === currentRating} // Check if the current rating matches this star
                    onChange={() => handleRatingChange(item.id, currentRating)}
                  />
                  <span
                    className="star"
                    style={{
                      color: currentRating <= (hover[item.id] || itemRating) ? "#ffc107" : "#e4e5e9"
                    }}
                    onMouseEnter={() => setHover(prevHover => ({
                      ...prevHover,
                      [item.id]: currentRating // Set hover state for this recipe
                    }))}
                    onMouseLeave={() => setHover(prevHover => ({
                      ...prevHover,
                      [item.id]: null // Remove hover state for this recipe
                    }))}
                  >
                    &#9733;
                  </span>
                </label>
              );
            })}
            <hr/>
          </div>
        );
      })}
    </div>
  );
}
