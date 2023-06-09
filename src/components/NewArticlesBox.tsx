import { Article } from "../models/Articles";
import styles from "./NewArticlesBox.module.scss";

type Props = {
  newArticles: Article[];
};

export const NewArticlesBox = (props: Props) => {
  let newArticles = props.newArticles.map((elem, idx) => (
    <li key={idx}>
      <h3>
        <a href="#">{elem.title}</a>
      </h3>
      <p>{elem.summary}</p>
      <hr />
    </li>
  ));

  return (
    <div className={styles.container}>
      <h2>New</h2>
      <ul>{newArticles}</ul>
    </div>
  );
};
