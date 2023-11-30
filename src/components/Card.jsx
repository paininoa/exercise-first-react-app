import "./Card.css";

const Card = ({
  cardTitle,
  src,
  alt,
  didascalia = "Hai dimenticato la didascalia!!",
}) => {
  return (
    <div className="card">
      <h2>{cardTitle}</h2>
      <img className="img" src={src} alt={alt}></img>
      <p>{didascalia}</p>
    </div>
  );
};

export default Card;
