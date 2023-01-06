import dynamic from "next/dynamic";

// Icons - Static File
const ExternalLink = dynamic(() => import("@svg/ExternalLink.svg"));

// Css
import Card from "@styles/components/Card.module.css";

// Ui - Components
const Buttons = dynamic(() => import("@components/UI/Buttons"));
const Breadcrumbs = dynamic(() => import("@components/UI/Breadcrumbs"));
const Post = dynamic(() => import("@components/UI/Post/Post"));

const EventArticle = ({
  className,
  url,
  featredTitle,
  description,
  children,
}) => {
  const addClassName = className ? className : "";

  return (
    <>
      <section className={`${Card.featredEvnt} ${addClassName}`}>
        <div
          className={`${Card.featredEvntCntent} pt-6 sm:pt-4 pb-6 px-6 sm:px-8`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <h6 className="text-black-100 h2">
              {featredTitle ? featredTitle : "Bitcoin 2022"}
            </h6>
            <div className="hidden sm:flex">
              <Buttons
                typeBtn="btn-link-icons"
                className="btn-block px-6"
                type="button"
                label="Kunjungi Website"
                variants="btn-outline-secondary"
                rounded="square"
                url={url ? url : ""}
                icons="right"
              >
                <ExternalLink className="stroke-current stroke-[3] ml-1 h-4.5 w-4.5" />
              </Buttons>
            </div>
          </div>
          <div className="mt-2 sm:mt-1">
            {/* Breadcrumbs (Pointer) */}
            {children && (
              <Breadcrumbs typeBreadcrumbs={"pointer"}>
                {children ? (
                  children
                ) : (
                  <>
                    <Post typePost="base" title="Miami" />
                    <Post typePost="base" title="6 April, 2022" />
                    <Post typePost="base" title="Cryptocurrency" />
                  </>
                )}
              </Breadcrumbs>
            )}
            <p className="text-black-100 text-body-sm font-medium mt-1">
              {description
                ? description
                : `Bitcoin 2021 adalah acara Bitcoin terbesar dalam sejarah dengan
                12.000 peserta di seluruh Miami. Pada tahun 2022, acara ini akan
                menyatukan lebih dari 35.000 Bitcoiner dari seluruh dunia.
                Dengan pembicara seperti Jack Dorsey, Nick Szabo, Michael
                Saylor, Cynthia Lummis, dan Tony Hawk, Bitcoin 2021 menyiapkan
                ragam acara yang menarik.`}
            </p>
            <div className="flex sm:hidden mt-2 sm:mt-0">
              <Buttons
                typeBtn="btn-link-icons"
                className="btn-block px-6"
                type="button"
                label="Kunjungi Website"
                variants="btn-outline-secondary"
                rounded="square"
                url={url ? url : ""}
                icons="right"
              >
                <ExternalLink className="stroke-current stroke-[3] ml-1 h-4.5 w-4.5" />
              </Buttons>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventArticle;
