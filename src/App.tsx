import "./App.scss";
import logo from "./assets/logo.svg";
import articleImage from "./assets/image-web-3-desktop.jpg";
import retroPcImg from "./assets/image-retro-pcs.jpg";
import topLaptopImg from "./assets/image-top-laptops.jpg";
import gamingGrowthImg from "./assets/image-gaming-growth.jpg";

function App() {
  return (
    <>
      <div className="container">
        <div className="menuBar">
          <img src={logo} alt="logo" />
          <div className="menuButton">
            <a href="#">Home</a>
          </div>
          <div className="menuButton">
            <a href="#">New</a>
          </div>
          <div className="menuButton">
            <a href="#">Popular</a>
          </div>
          <div className="menuButton">
            <a href="#">Trending</a>
          </div>
          <div className="menuButton">
            <a href="#">Categories</a>
          </div>
        </div>
        <div className="mainContent">
          <div className="mainArticle">
            <img src={articleImage} alt="" />
            <div className="articleDescBox">
              <h1>The Bright Future of Web 3.0?</h1>
              <div className="articleSummary">
                <p>
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button>READ MORE</button>
              </div>
            </div>
          </div>
          <div className="newArticlesBox">
            <h2>New</h2>
            <ul>
              <li>
                <h3>
                  <a href="#">Hydrogen VS Electric Cars</a>
                </h3>
                <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
                <hr />
              </li>
              <li>
                <h3>
                  <a href="#">The Downsides of AI Artistry</a>
                </h3>
                <p>
                  What are the possible adverse effects of on-demand AI image
                  generation?
                </p>
              </li>
              <hr />
              <li>
                <h3>
                  <a href="#">Is VC Funding Drying Up?</a>
                </h3>
                <p>
                  Private funding by VC firms is down 50% YOY. We take a look at
                  what that means.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="topArticlesBar">
          <ol>
            <li>
              <img src={retroPcImg} alt="" />
              <div>
                <h3>
                  <a href="#">Reviving Retro PCs</a>
                </h3>
                <p>What happens when old PCs are given modern upgrades?</p>
              </div>
            </li>
            <li>
              <img src={topLaptopImg} alt="" />
              <div>
                <h3>
                  <a href="#">Top 10 Laptops of 2022</a>
                </h3>
                <p>Our best picks for various needs and budgets.</p>
              </div>
            </li>
            <li>
              <img src={gamingGrowthImg} alt="" />
              <div>
                <h3>
                  <a href="#">The Growth of Gaming</a>
                </h3>
                <p>How the pandemic has sparked fresh opportunities.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
