import "moment/locale/id"; //https://www.npmjs.com/package/react-moment#locale
import Moment from "react-moment"; // https://momentjs.com/
import dynamic from "next/dynamic";
import Link from "next/link";

// Css
import Article from "@styles/components/Article.module.css";

// Ui - Components
const ImagesFill = dynamic(() => import("@components/UI/ImagesFill"));

const ListArticle = ({
  data,
  featuredMedia = null,
  url,
  src,
  title,
  date,
  alt,
}) => {
  // Static - Images Thumbnail
  const Thumbnail = `${process.env.NEXT_PUBLIC_THUMBNAIL_SIZE_380x216}`;

  const addUrl = data
    ? `/berita/${data.slug}`
    : url == ""
    ? ""
    : url
    ? url
    : "/";
  const addTitle = data
    ? data.title.rendered
    : title
    ? title
    : `${process.env.NEXT_PUBLIC_TITLE_LOREM}`;
  const addDate = data
    ? data.modified
    : date
    ? date
    : `${process.env.NEXT_PUBLIC_DATE}`;
  const addImags =
    featuredMedia && featuredMedia.media_details.sizes.large != null
      ? featuredMedia.media_details.sizes.large["source_url"]
      : featuredMedia && featuredMedia.media_details.sizes.medium != null
      ? featuredMedia.media_details.sizes.medium["source_url"]
      : src
      ? src
      : Thumbnail;
  const addImagsAlt = featuredMedia
    ? featuredMedia["alt_text"]
    : alt
    ? alt
    : "Coinvestasi (List Article)";

  return (
    <>
      <Link
        className={Article.listArticle}
        href={addUrl}
        prefetch={false}
        passHref
      >
        <article className={`flex flex-row items-start`}>
          <div className="flex-1 flex flex-col my-auto lg:my-0 mr-4">
            {addTitle && (
              <h3 className="text-black-100 text-sm sm:text-base line-clamp-2">
                {addTitle}
              </h3>
            )}
            {addDate && (
              <span className="text-gray-500 text-body-caption sm:text-body-sm font-semibold sm:font-semibold mt-0 sm:mt-1">
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
          {addImags && (
            <ImagesFill
              className={
                "flex-1 my-auto h-[72px] max-h-[72px] w-[123px] max-w-[123px]"
              }
              src={addImags}
              alt={addImagsAlt}
            />
          )}
        </article>
      </Link>
    </>
  );
};

export default ListArticle;
