import dynamic from "next/dynamic";

// Ui - Components
const ImagesFill = dynamic(() => import("@components/UI/ImagesFill"));

const FeaturedArticle = dynamic(() => import("@components/UI/Card/Article"));
const SliderArticle = ({
  className,
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

  const addClassName = className ? `relative ${className}` : `relative`;

  const addUrl = url == "" ? "" : url ? url : "";
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
  const addDesc = description
    ? description
    : data
    ? data.content.rendered
    : `Lorem ipsum dolor sit amet clita temporibus facilisis semper donec te corrumpit impedit Ut leo abhorreant iusto aenean dicta et justo. consequat eu vis antiopam antiopam officiis ut eteu ipsum duo leo ius justo cetero penatibus semper abhorreant ne in Ut iusto ullamcorper repudiandae habeo sed elementum his mea uonsetetur mauris cetero audire labore assentior elementum inimicus ullamcorper clita audire justo eu., Lorem ipsum dolor sit amet clita temporibus facilisis semper donec te corrumpit impedit Ut leo abhorreant iusto aenean dicta et justo. consequat eu vis antiopam antiopam officiis ut eteu ipsum duo leo ius justo cetero penatibus semper abhorreant ne in Ut iusto ullamcorper repudiandae habeo sed elementum his mea uonsetetur mauris cetero audire labore assentior elementum inimicus ullamcorper clita audire justo eu.`;

  const addImags =
    featuredMedia && featuredMedia.media_details.sizes.full != null
      ? featuredMedia.media_details.sizes.full["source_url"]
      : featuredMedia && featuredMedia.media_details.sizes.large != null
      ? featuredMedia.media_details.sizes.large["source_url"]
      : src
      ? src
      : Thumbnail;
  const addImagsAlt = featuredMedia
    ? featuredMedia["alt_text"]
    : alt
    ? alt
    : "Coinvestasi (Featured Article - Group)";

  return (
    <>
      <article className={`${addClassName}`}>
        <ImagesFill
          className={
            "h-[210px] sm:h-[435px] lg:h-[397px] xl:h-[480px] w-full -z-px"
          }
          src={addImags}
          alt={addImagsAlt}
        />

        <div className="-mt-6 sm:-mt-20 lg:-mt-18 xl:-mt-[104px] mx-3 sm:mx-6">
          <FeaturedArticle
            featredTitle={addTitle}
            description={addDesc}
            date={addDate}
            url={addUrl}
          />
        </div>
      </article>
    </>
  );
};

export default SliderArticle;
