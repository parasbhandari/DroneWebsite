import { Rating } from "@mui/material";
function Review({ name, rating=0, description }) {
  return (
    <div>
      <h2 className="font-[600] text-xl">{name}</h2>
      <Rating name="read-only" value={Number(rating)} readOnly precision={0.5} />
      <p
        className="text-[#7B7B7B] font-[500] leading-6 text-justify"
      >
        {description}
      </p>
    </div>
  );
}

export default Review;
