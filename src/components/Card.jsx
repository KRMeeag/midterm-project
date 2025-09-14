const Card = () => {
  return (
    <div className="card bg-base-100 w-full shadow-lg relative">
      <figure className="">
        <img
          src="https://ctfassets.imgix.net/vh7r69kgcki3/3Fn7y0SnnHoMHG51sbqaAY/f12c68f62d7752647ab60a0931f6a52c/5P_WINDOW.jpg"
          alt="Image of Co-Working Space"
          className="aspect-16/9 object-cover rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">View More Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
