import "moment/locale/id"; //https://www.npmjs.com/package/react-moment#locale
import Moment from "react-moment"; // https://momentjs.com/
import DOMPurify from "isomorphic-dompurify"; //https://github.com/kkomelin/isomorphic-dompurify
import dynamic from "next/dynamic";

// Icons (Heroicons : https://unpkg.com/browse/@heroicons/react@2.0.13/24/outline/)
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

// Css
import Card from "@styles/components/Card.module.css";

// Ui - Components
const PostLink = dynamic(() => import("@components/UI/Post/PostLink"));

const Article = ({ className, url, featredTitle, date, description }) => {
  const addClassName = className ? className : "";

  const addUrl = url ? url : "";
  const addTitle = featredTitle
    ? featredTitle
    : "Regulasi Crypto Eropa Ditetapkan, Bitcoin Tidak Dilarang";
  const addDate = date ? date : `${process.env.NEXT_PUBLIC_DATE}`;
  const addDesc = description
    ? description
    : `Bitcoin 2021 adalah acara Bitcoin terbesar dalam sejarah dengan 12.000 peserta di seluruh Miami. Pada tahun 2022, acara ini akan menyatukan lebih dari 35.000 Bitcoiner dari seluruh dunia. Dengan pembicara seperti Jack Dorsey, Nick Szabo, Michael Saylor, Cynthia Lummis, dan Tony Hawk, Bitcoin 2021 menyiapkan ragam acara yang menarik.`;

  const createMarkup = () => {
    return { __html: DOMPurify.sanitize(addDesc) };
  };

  return (
    <>
      <section className={`${Card.featredEvnt} ${addClassName}`}>
        <div className={`${Card.featredEvntCntent} py-6 sm:py-8 px-6 sm:px-8`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between"></div>
          {addTitle && <h1 className="text-black-100 h2 sm:h1">{addTitle}</h1>}
          <div className="flex flex-col mt-2">
            {addDesc && (
              <div
                className="text-black-50 text-body-base font-medium line-clamp-3"
                dangerouslySetInnerHTML={createMarkup()}
              ></div>
            )}
            {addDate && (
              <span className="text-gray-500 text-body-base font-medium mt-2">
                <Moment
                  locale="id"
                  titleFormat="dddd, DD MMMM YYYY"
                  format="dddd, DD MMMM YYYY"
                  withTitle
                >
                  {addDate}
                </Moment>
              </span>
            )}
          </div>
          {addUrl && (
            <div className="mt-4">
              <PostLink
                className="text-secondary"
                url={addUrl}
                title="Baca selengkapnya"
                withIcons={true}
                positionIcons="right"
              >
                <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3.5 w-3.5" />
              </PostLink>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Article;
