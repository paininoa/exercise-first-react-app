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
          src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
          alt="A lake"
          didascalia="A lake surrounded by mountains"
        />

        <Card
          cardTitle="Title 2"
          src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
          alt="A tree"
          didascalia=""
        />
      </div>
    </div>
  );
};

export default App;
