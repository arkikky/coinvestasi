import "moment/locale/id"; //https://www.npmjs.com/package/react-moment#locale
import Moment from "react-moment"; // https://momentjs.com/
import DOMPurify from "isomorphic-dompurify"; //https://github.com/kkomelin/isomorphic-dompurify
import dynamic from "next/dynamic";
import Link from "next/link";

// Ui - Components
const ImagesFill = dynamic(() => import("@components/UI/ImagesFill"));

const Article = ({
  key,
  data,
  featuredMedia = null,
  url,
  src,
  title,
  date,
  description,
  alt,
}) => {
  // Static - Images Thumbnail
  const Thumbnail = `${process.env.NEXT_PUBLIC_THUMBNAIL_SIZE_380x216}`;

  const addUrl = url == "" ? "" : url ? url : "/";
  const addTitle = data
    ? data.title.rendered
    : title
    ? title
    : `${process.env.NEXT_PUBLIC_TITLE_LOREM}`;
  const addDesc = description
    ? description
    : data != null
    ? data.content.rendered.toString()
    : // ? `First &middot; Seconds <div>This is the dangerouslySetInnerHTML data</div>`
      `${process.env.NEXT_PUBLIC_DESC_LOREM}`; // data.content.rendered or for test `First &middot; Seconds <div>This is the dangerouslySetInnerHTML data</div>`
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
    : "Coinvestasi (Article)";

  const createMarkup = () => {
    return { __html: DOMPurify.sanitize(addDesc) };
  };

  return (
    <>
      <Link
        key={key}
        className="artcle"
        href={addUrl}
        prefetch={false}
        passHref
      >
        <article className="artcleMain">
          <div className="flex-1 my-auto sm:my-0 mr-4">
            {addTitle && (
              <h3 className="artcleTitle text-black-100">{addTitle}</h3>
            )}
            <div className="flex flex-col pr-0 sm:pr-4">
              {addDesc && (
                <div
                  className="artcleDesc text-black-50"
                  dangerouslySetInnerHTML={createMarkup()}
                ></div>
              )}
              {addDate && (
                <span className="artcleDate text-gray-500">
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
          </div>
          {addImags && (
            <ImagesFill
              className="artcleImags"
              src={addImags}
              alt={addImagsAlt}
              priority={true}
            />
          )}
        </article>
      </Link>
    </>
  );
};

export default Article;
