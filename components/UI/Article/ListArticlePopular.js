import dynamic from "next/dynamic";
import Link from "next/link";

// Css
import Article from "@styles/components/Article.module.css";

// Ui - Components
const ImagesFill = dynamic(() => import("@components/UI/ImagesFill"));

const ListArticlePopular = ({
  data,
  featuredMedia = null,
  url,
  src,
  title,
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
          <div className="flex-1 flex flex-col my-auto lg:my-0 mr-3">
            {addTitle && (
              <h4 className="text-black-100 h4 lg:h5 line-clamp-2">{addTitle}</h4>
            )}
          </div>
          {addImags && (
            <ImagesFill
              className={
                "flex-1 my-auto h-[52px] max-h-[52px] w-[88px] max-w-[88px]"
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

export default ListArticlePopular;
