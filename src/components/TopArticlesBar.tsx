import classes from "./TopArticlesBar.module.scss";
import retroPcImg from "../assets/image-retro-pcs.jpg";
import topLaptopImg from "../assets/image-top-laptops.jpg";
import gamingGrowthImg from "../assets/image-gaming-growth.jpg";

export const TopArticlesBar = () => {
  return (
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
  );
};
