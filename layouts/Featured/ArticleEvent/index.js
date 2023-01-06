import dynamic from "next/dynamic";

// Icons (Heroicons : https://unpkg.com/browse/@heroicons/react@2.0.13/24/outline/)
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

// Ui - Components
const Buttons = dynamic(() => import("@components/UI/Buttons"));
const Post = dynamic(() => import("@components/UI/Post/Post"));
const ImagesFill = dynamic(() => import("@components/UI/ImagesFill"));

const FeaturedArticleEvent = dynamic(() =>
  import("@components/UI/Card/EventArticle")
);

// Components
const SubHeading = dynamic(() =>
  import("@components/UI/Sub-Heading/SubHeading")
);

const LyFeaturedArticleEvent = ({ id, className }) => {
  const addClassName = className ? `mt-12 ${className}` : "mt-12";

  return (
    <>
      <section id={id ? id : "featredEvnt"} className={`${addClassName}`}>
        <SubHeading title="Acara Cryptocurrency dan Blockchain">
          <Buttons
            typeBtn="btn-link"
            label="Lihat semua acara"
            variants="btn-white"
            size="lg"
            url={""}
            withIcons={true}
            positionIcons="right"
          >
            <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3.5 w-3.5" />
          </Buttons>
        </SubHeading>

        {/* Content (Banner - Featued Event) */}
        <div className="mt-6">
          <ImagesFill
            className={"h-[214px] sm:h-[458px] w-full -z-px"}
            src={"/assets/images/banner/events/banner-events-home.jpg"}
            alt={"Coinvestasi (Banner - Featued Event)"}
          />

          {/* Featured Event Button */}
          <FeaturedArticleEvent
            className={"mt-2 sm:-mt-[54px] mx-0 sm:mx-3"}
            url={""}
            featredTitle="Bitcoin 2022"
            description="Bitcoin 2021 adalah acara Bitcoin terbesar dalam sejarah dengan 12.000 peserta di seluruh Miami. Pada tahun 2022, acara ini akan menyatukan lebih dari 35.000 Bitcoiner dari seluruh dunia. Dengan pembicara seperti Jack Dorsey, Nick Szabo, Michael Saylor, Cynthia Lummis, dan Tony Hawk, Bitcoin 2021 menyiapkan ragam acara yang menarik."
          >
            <Post typePost="base" title="Miami" />
            <Post typePost="base" title="6 April, 2022" />
            <Post typePost="base" title="Cryptocurrency" />
          </FeaturedArticleEvent>
        </div>

        <div className="flex sm:hidden mt-6 sm:mt-0">
          <Buttons
            typeBtn="btn-link-icons"
            className="btn-block"
            type="button"
            label="Lihat semua acara"
            variants="btn-white"
            size="lg"
            rounded="square"
            url=""
            icons="right"
          >
            <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
          </Buttons>
        </div>
      </section>
    </>
  );
};

export default LyFeaturedArticleEvent;
