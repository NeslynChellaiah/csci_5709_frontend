import RestaurantReviewCard from './restaurantReviewCard'

const RestaurantReviews = ({reviews}) => {


    if (!reviews || reviews.length === 0) {
        return <p className="text-center text-gray-500">No reviews available.</p>;
    }

    return (
        <div className='max-w-5xl mx-auto p-6'>
            <h2 className="text-2xl font-bold mt-6 mb-4">Latest Reviews</h2>
            <div className="flex flex-wrap gap-12 max-w-5xl mx-auto p-6">
            {reviews.map((r, index) => (
                <RestaurantReviewCard
                key={index}
                name={r.name}
                review={r.review}
                date={r.date}
                avatar={r.avatar}
                rating={r.rating}
                />
            ))}
            </div>
        </div>
    )
}

export default RestaurantReviews;