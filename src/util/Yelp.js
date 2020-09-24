const apiKey = 's7zH-NLf5ZlyqvHGoavEAAtAc8IVRWN5bUYZMsCEKpueibYyp7P0XSm7aSy3xwKrl3awU1_i8jrG-D7GhPSp8P-k0zZxZJXhVHKfUdSGfCaKp2lGAwoBILl7g-boXnYx';

const Yelp = {
    search(term, location){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`, 
        {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then((jsonResponse) => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business => {
                  return {
                      id: business.id,
                      imageSrc: business.image_url,
                      name: business.name,
                      address: business.location.address1,
                      city: business.location.city,
                      state: business.location.state,
                      zipCode: business.location.zip_code,
                      category: business.categories[0].title,
                      rating: business.rating,
                      reviewCout: business.review_count
                  };        
                });
            }
        })
    }
};

export default Yelp;