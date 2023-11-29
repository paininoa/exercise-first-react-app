import "./App.css";
import Titolo from "./components/Titolo";
import Paragrafo from "./components/Paragrafo";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Titolo />
      <Paragrafo />
      <div className="cardWrapper">
        <Card
          cardTitle="Title 1"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Funusual-view&psig=AOvVaw2xqLgmDttmBfnhBrtcUn5y&ust=1701370226088000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCNjqn5Hw6YIDFQAAAAAdAAAAABAE"
          alt="A lake"
          didascalia="A lake surrounded by mountains"
        />

        <Card
          cardTitle="Title 2"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&psig=AOvVaw2xqLgmDttmBfnhBrtcUn5y&ust=1701370226088000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCNjqn5Hw6YIDFQAAAAAdAAAAABAR"
          alt="A tree"
          didascalia=""
        />
      </div>
    </div>
  );
};

export default App;
