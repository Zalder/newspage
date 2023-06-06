import classes from "./App.module.scss";
import logo from "./assets/logo.svg";
import articleImage from "./assets/image-web-3-desktop.jpg";
import retroPcImg from "./assets/image-retro-pcs.jpg";
import topLaptopImg from "./assets/image-top-laptops.jpg";
import gamingGrowthImg from "./assets/image-gaming-growth.jpg";
import { NewArticlesBox } from "./components/NewArticlesBox";

function App() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.menuBar}>
          <img src={logo} alt="logo" />
          <div className={classes.menuButton}>
            <a href="#">Home</a>
          </div>
          <div className={classes.menuButton}>
            <a href="#">New</a>
          </div>
          <div className={classes.menuButton}>
            <a href="#">Popular</a>
          </div>
          <div className={classes.menuButton}>
            <a href="#">Trending</a>
          </div>
          <div className={classes.menuButton}>
            <a href="#">Categories</a>
          </div>
        </div>
        <div className={classes.mainContent}>
          <div className={classes.mainArticle}>
            <img src={articleImage} alt="" />
            <div className={classes.articleDescBox}>
              <h1>The Bright Future of Web 3.0?</h1>
              <div className={classes.articleSummary}>
                <p>
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button>READ MORE</button>
              </div>
            </div>
          </div>
          <NewArticlesBox />
        </div>
        <div className={classes.topArticlesBar}>
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
