import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styles from "./MainPage.module.css";

const MainPage: FunctionComponent = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.bg}>
        <img
          className={styles.jimmyDeanYn0l7uwbrpwUnsplasIcon}
          alt=""
          src="/jimmydeanyn0l7uwbrpwunsplash-1@2x.png"
        />
        <div className={styles.bgChild} />
      </div>
      <div className={styles.cards}>
        <div className={styles.groupParent}>
          <div className={styles.cardParent}>
            <img className={styles.cardIcon} alt="" src="/card@2x.png" />
            <div className={styles.wrapperEllipse1}>
              <img
                className={styles.wrapperEllipse1Child}
                alt=""
                src="/ellipse-1@2x.png"
              />
            </div>
            <div className={styles.boiledEggsParent}>
              <div className={styles.boiledEggs}>Boiled Eggs</div>
              <div
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. `}</div>
            </div>
            <button className={styles.wrapper}>
              <div className={styles.div}>$10.00</div>
            </button>
          </div>
          <div className={styles.cardParent}>
            <img className={styles.cardIcon} alt="" src="/card@2x.png" />
            <div className={styles.wrapperEllipse1}>
              <img
                className={styles.wrapperEllipse1Child}
                alt=""
                src="/ellipse-1@2x.png"
              />
            </div>
            <div className={styles.boiledEggsParent}>
              <div className={styles.boiledEggs}>RAMEN</div>
              <div
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. `}</div>
            </div>
            <div className={styles.container}>
              <div className={styles.foodyZone}>$25.00</div>
            </div>
          </div>
          <div className={styles.cardParent}>
            <img className={styles.cardIcon} alt="" src="/card@2x.png" />
            <div className={styles.wrapperEllipse1}>
              <img
                className={styles.wrapperEllipse1Child}
                alt=""
                src="/ellipse-1@2x.png"
              />
            </div>
            <div className={styles.boiledEggsParent}>
              <div className={styles.boiledEggs}>GRILLED CHICKEN</div>
              <div
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. `}</div>
            </div>
            <div className={styles.container}>
              <div className={styles.foodyZone}>$45.00</div>
            </div>
          </div>
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.cardParent}>
            <img className={styles.cardIcon} alt="" src="/card@2x.png" />
            <div className={styles.wrapperEllipse1}>
              <img
                className={styles.wrapperEllipse1Child}
                alt=""
                src="/ellipse-1@2x.png"
              />
            </div>
            <div className={styles.cakeParent}>
              <div className={styles.boiledEggs}>CAKE</div>
              <div
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. `}</div>
            </div>
            <div className={styles.container}>
              <div className={styles.foodyZone}>$18.00</div>
            </div>
          </div>
          <div className={styles.cardParent}>
            <img className={styles.cardIcon} alt="" src="/card@2x.png" />
            <div className={styles.wrapperEllipse1}>
              <img
                className={styles.wrapperEllipse1Child}
                alt=""
                src="/ellipse-1@2x.png"
              />
            </div>
            <div className={styles.burgerParent}>
              <div className={styles.boiledEggs}>BURGER</div>
              <div
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. `}</div>
            </div>
            <div className={styles.container}>
              <div className={styles.foodyZone}>$23.00</div>
            </div>
          </div>
          <div className={styles.cardParent}>
            <img className={styles.cardIcon} alt="" src="/card@2x.png" />
            <div className={styles.wrapperEllipse1}>
              <img
                className={styles.wrapperEllipse1Child}
                alt=""
                src="/ellipse-1@2x.png"
              />
            </div>
            <div className={styles.cakeParent}>
              <div className={styles.boiledEggs}>PANCAKE</div>
              <div
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet consectetur. Odio elementum in neque cras eget est. `}</div>
            </div>
            <div className={styles.container}>
              <div className={styles.foodyZone}>$25.00</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.topsection}>
        <div className={styles.top}>
          <b className={styles.foodyZone}>
            <span>F</span>
            <span className={styles.oo}>oo</span>
            <span>dy Z</span>
            <span className={styles.o}>o</span>
            <span>{`ne `}</span>
          </b>
          <div className={styles.searchFoodWrapper}>
            <div className={styles.searchFood}>Search Food....</div>
          </div>
        </div>
        <nav className={styles.frameParent}>
          <Button variant="outline-primary">All</Button>
          <Button variant="outline-primary">Breakfast</Button>
          <Button variant="outline-primary">Lunch</Button>
          <Button variant="outline-primary">Dinner</Button>
        </nav>
      </div>
    </div>
  );
};

export default MainPage;