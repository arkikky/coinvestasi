import dynamic from "next/dynamic";
import Link from "next/link";

// Css
import Article from "@styles/components/Article.module.css";

// Ui - Components
const ImagesFill = dynamic(() => import("@components/UI/ImagesFill"));

const SmallArticle = ({
  data,
  featuredMedia = null,
  url,
  src,
  title,
  alt,
  className,
}) => {
  // Static - Images Thumbnail
  const Thumbnail = `${process.env.NEXT_PUBLIC_THUMBNAIL_SIZE_380x216}`;

  const addUrl = url == "" ? "" : url ? url : "";
  const addTitle = data
    ? data.title.rendered
    : title
    ? title
    : `${process.env.NEXT_PUBLIC_TITLE_LOREM}`;
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

  const addClassName = className ? `relative ${className}` : `relative`;

  return (
    <>
      <Link
        className={`${Article.smllArticle} ${addClassName}`}
        href={addUrl}
        prefetch={false}
        passHref
      >
        <article
          className={`flex flex-row items-center sm:items-start max-w-max`}
        >
          <ImagesFill
            className={"flex-1 my-auto h-12 max-h-[48px] w-12 max-w-[48px]"}
            src={addImags}
            alt={addImagsAlt}
          />
          {addTitle && (
            <h3 className="text-black-100 text-sm sm:text-base ml-3 line-clamp-2 w-full max-w-[187px]">
              {addTitle}
            </h3>
          )}
        </article>
      </Link>
    </>
  );
};

export default SmallArticle;
