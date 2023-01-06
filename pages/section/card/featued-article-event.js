import dynamic from "next/dynamic";

// Ui - Components
const ImagesFill = dynamic(() => import("@components/UI/ImagesFill"));
const Post = dynamic(() => import("@components/UI/Post/Post"));

const FeaturedArticleEvent = dynamic(() =>
  import("@components/UI/Card/EventArticle")
);

const SecFeatuedArticleEvent = ({ className }) => {
  const addClassName = className ? `mt-6 ${className}` : `mt-6`;

  return (
    <>
      <section className={`${addClassName}`}>
        <ImagesFill
          className={"h-[214px] sm:h-[458px] w-full -z-px"}
          src={"/assets/images/banner/events/banner-events-home.jpg"}
          alt={"Coinvestasi (Banner - Featued Event)"}
        />

        {/* Featured Event Button */}
        <FeaturedArticleEvent
          className={"mt-2 sm:-mt-[54px]"}
          url={""}
          featredTitle="Bitcoin 2022"
          description="Bitcoin 2021 adalah acara Bitcoin terbesar dalam sejarah dengan 12.000 peserta di seluruh Miami. Pada tahun 2022, acara ini akan menyatukan lebih dari 35.000 Bitcoiner dari seluruh dunia. Dengan pembicara seperti Jack Dorsey, Nick Szabo, Michael Saylor, Cynthia Lummis, dan Tony Hawk, Bitcoin 2021 menyiapkan ragam acara yang menarik."
        >
          <Post typePost="base" title="Miami" />
          <Post typePost="base" title="6 April, 2022" />
          <Post typePost="base" title="Cryptocurrency" />
        </FeaturedArticleEvent>
      </section>
    </>
  );
};

export default SecFeatuedArticleEvent;
