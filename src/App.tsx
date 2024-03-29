import classes from "./App.module.scss";
import logo from "./assets/logo.svg";
import articleImage from "./assets/image-web-3-desktop.jpg";
import articleImageMobile from "./assets/image-web-3-mobile.jpg";
import { NewArticlesBox } from "./components/NewArticlesBox";
import { TopArticlesBar } from "./components/TopArticlesBar";
import articles from "../data.json";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as MenuIcon } from "./assets/icon-menu.svg";
import { MobileMenu } from "./components/MobileMenu";
import { useState } from "react";

function App() {
  let menuStrings = ["Home", "New", "Popular", "Trending", "Categories"];
  let menuButtons = menuStrings.map((elem, idx) => (
    <div className={classes.menuButton} key={idx}>
      <a href="#">{elem}</a>
    </div>
  ));

  let topArticles = articles.topArticles;
  let newArticles = articles.newArticles;
  let isMobile = useMediaQuery({ query: "(max-width: 700px)" });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {isMenuOpen && <div className={classes.transparentBg}></div>}
      {isMobile && isMenuOpen && (
        <MobileMenu
          menuStrings={menuStrings}
          onClose={() => setIsMenuOpen(false)}
        />
      )}
      <div className={classes.container}>
        <div className={classes.menuBar}>
          <img src={logo} alt="logo" />
          {isMobile
            ? !isMenuOpen && <MenuIcon onClick={() => setIsMenuOpen(true)} />
            : menuButtons}
        </div>
        <div className={classes.mainContent}>
          <div className={classes.mainArticle}>
            <img src={isMobile ? articleImageMobile : articleImage} alt="" />
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
          <NewArticlesBox newArticles={newArticles} />
        </div>
        <TopArticlesBar topArticles={topArticles} />
      </div>
    </>
  );
}

export default App;
