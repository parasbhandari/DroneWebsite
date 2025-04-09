import Rating from "@mui/material/Rating";
import Review from "./Review";
import ReviewForm from "./ReveiwForm";

function ReviewSection() {
  const Reviews = [
    {
      name: "Ram Sharma",
      rating: 4,
      description:
        "Awesome product! River stingray giant danio horn shark flabby whalefish golden dojo. Black angelfish silver carp electric stargazer Atlantic saury ground shark hammerhead shark yellowtail kingfish cow shark Spanish mackerel.",
    },
    {
      name: "Ram Sharma",
      rating: 3,
      description:
        "Awesome product! River stingray giant danio horn shark flabby whalefish golden dojo. Black angelfish silver carp electric stargazer Atlantic saury ground shark hammerhead shark yellowtail kingfish cow shark Spanish mackerel.",
    },
    {
      name: "Ram Sharma",
      rating: 5,
      description:
        "Awesome product! River stingray giant danio horn shark flabby whalefish golden dojo. Black angelfish silver carp electric stargazer Atlantic saury ground shark hammerhead shark yellowtail kingfish cow shark Spanish mackerel.",
    },
  ];

  return (
    <div className="bg-white text-black px-4">
      <div className="max-w-6xl mx-auto py-10">
        <h2 className="text-2xl md:text-3xl font-bold py-2">Review</h2>
        
        {/* Rating */}
        <div className="flex flex-wrap items-center gap-4">
          <Rating name="read-only" defaultValue={3.5} precision={0.5} readOnly />
          <p className="font-semibold text-lg">(3.5/5)</p>
        </div>

        <hr className="border border-gray-400 w-64 my-4" />

        {/* Reviews and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Reviews List */}
          <div className="flex flex-col gap-6">
            {Reviews.map((review, index) => (
              <Review
                key={index}
                name={review.name}
                rating={review.rating}
                description={review.description}
              />
            ))}
          </div>

          {/* Review Form */}
          <div className="w-full max-w-md mx-auto">
            <ReviewForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
