import style from "./Card.css";

const Card = ({
  cardTitle,
  src,
  alt,
  didascalia = "URCO!!! Hai dimenticato la didascalia!!",
}) => {
  return (
    <div className="card" style={style.card}>
      <h2>{cardTitle}</h2>
      <img src={src} alt={alt}></img>
      <p>{didascalia}</p>
    </div>
  );
};

export default Card;
