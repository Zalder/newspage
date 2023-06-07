import classes from "./TopArticlesBar.module.scss";
import { Article } from "../models/Articles";

type Props = {
  topArticles: Article[];
};

export const TopArticlesBar = (props: Props) => {
  let articleList = props.topArticles.map((elem, idx) => (
    <li key={idx}>
      <img src={elem.img} alt="" />
      <div>
        <h3>
          <a href="#">{elem.title}</a>
        </h3>
        <p>{elem.summary}</p>
      </div>
    </li>
  ));

  return (
    <div className={classes.topArticlesBar}>
      <ol>{articleList}</ol>
    </div>
  );
};
