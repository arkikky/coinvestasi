// Css
import Card from "@styles/components/Card.module.css";

const PopularArticle = ({ id, title, children }) => {
  const addID = id ? id : "ppplarArtcle";
  const addTitle = title ? title : "Terpopular";

  return (
    <>
      <section
        id={addID}
        className={`${Card.ArtclePoplar} bg-primary border-2 border-solid border-black-100`}
      >
        <div>
          <h2 className="text-black-100 h3 sm:h2">{addTitle}</h2>
        </div>
        {children && (
          <div className={`${Card.ArtclePoplarContnt} mt-6`}>{children}</div>
        )}
      </section>
    </>
  );
};

export default PopularArticle;
