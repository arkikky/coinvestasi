// Css
import Card from "@styles/components/Card.module.css";

const Subscribe = ({ id, description, children }) => {
  const addID = id ? id : "subscribeFormNewsltter";
  const addDescription = description
    ? description
    : `<b>Coinvestasi Update</b> mendapatkan berita terbaru tentang kripto, blockchain langsung ke dalam inbox anda.`;

  const createMarkup = () => {
    return { __html: addDescription };
  };

  return (
    <>
      <section
        id={addID}
        className={`${Card.subscribe} bg-secondary border-2 border-solid border-black-100`}
      >
        <div
          className="text-white"
          dangerouslySetInnerHTML={createMarkup()}
        ></div>
        {children && <div className="mt-4">{children}</div>}
      </section>
    </>
  );
};
export default Subscribe;
