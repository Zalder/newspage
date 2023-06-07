import classes from "./App.module.scss";
import logo from "./assets/logo.svg";
import articleImage from "./assets/image-web-3-desktop.jpg";
import { NewArticlesBox } from "./components/NewArticlesBox";
import { TopArticlesBar } from "./components/TopArticlesBar";
import articles from "../data.json";

function App() {
  let menuButtons = ["Home", "New", "Popular", "Trending", "Categories"].map(
    (elem, idx) => (
      <div className={classes.menuButton} key={idx}>
        <a href="#">{elem}</a>
      </div>
    )
  );

  let topArticles = articles.topArticles;

  return (
    <>
      <div className={classes.container}>
        <div className={classes.menuBar}>
          <img src={logo} alt="logo" />
          {menuButtons}
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
        <TopArticlesBar topArticles={topArticles} />
      </div>
    </>
  );
}

export default App;
