import axios from "axios";

const RestaurantsGallery = () => {
  const getRestaurantsData = () => {
    axios
      .get(
        `https://random-data-api.com/api/restaurant/random_restaurant?size=6`
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <div>Search For Restaurants</div>
      <button onClick={getRestaurantsData}>Search</button>
    </div>
  );
};

export default RestaurantsGallery;
