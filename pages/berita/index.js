import { useState } from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import dynamic from "next/dynamic";

// Controller
import { getDynamicFetch, getFeaturedImgs } from "@controller/init";

// Icons (Heroicons : https://unpkg.com/browse/@heroicons/react@2.0.13/24/outline/)
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

// Css
import "@splidejs/react-splide/css";

// Ui - Components
const Head = dynamic(() => import("@components/Head"));
const Container = dynamic(() => import("@components/Container"));
const Main = dynamic(() => import("@components/Main"));
const Article = dynamic(() => import("@components/UI/Article/Article"));
const ListArticlePopular = dynamic(() =>
  import("@components/UI/Article/ListArticlePopular")
);
const SmallArticle = dynamic(() =>
  import("@components/UI/Article/SmallArticle")
);
const Post = dynamic(() => import("@components/UI/Post/Post"));
const Breadcrumbs = dynamic(() => import("@components/UI/Breadcrumbs"));
const CardArticlePopular = dynamic(() =>
  import("@components/UI/Card/PopularArticle")
);

// Components
const SubHeading = dynamic(() =>
  import("@components/UI/Sub-Heading/SubHeading")
);

// Section
const MoreArticle = dynamic(() => import("@components/UI/Card/MoreArticle"));
const SecSubscribe = dynamic(() => import("@section/Subscribe"));

// Json
import mockLstArticle from "@utils/json/article/list-article.json";

export default function Berita(props) {
  const [intPrpsRslt, stPrpsRslt] = useState(props.result);
  const [intLstArticle, stLstArticle] = useState(mockLstArticle);

  return (
    <>
      {/* Head (Berita) */}
      <Head
        siteTitle="Berita | Coinvestasi"
        title="Berita | Coinvestasi"
        siteDescription="Coinvestasi adalah platform Indonesia terkemuka untuk acara dan informasi terkait mata uang kripto, aset digital, dan teknologi blockchain."
        description="Aset Masa Kini, Kaya Masa Depan"
      />

      {/* Main (Berita) */}
      <Main>
        {/* Header (Main - Berita) */}
        <header>
          <Container>
            <section className="flex flex-col border-b border-solid border-gray-200 pb-8">
              <div>
                <Breadcrumbs
                  className="text-gray-300"
                  typeBreadcrumbs={"carret"}
                >
                  <Post typePost="link" url={"/"} title="Home" />
                  <Post typePost="link" title="Berita" />
                </Breadcrumbs>
              </div>
              <div className="mt-5">
                <h1 className="text-black-100">Berita Terbaru</h1>
                <div className="mt-4">
                  <Breadcrumbs
                    className="text-black-100"
                    typeBreadcrumbs={"tags"}
                  >
                    <Post
                      className="snap-start"
                      typePost="link"
                      url={"/tags/berita-analisis/"}
                      title="Analisis"
                    />
                    <Post
                      className="snap-start"
                      typePost="link"
                      url={"/tags/berita-bitcoin/"}
                      title="Bisnis"
                    />
                    <Post
                      className="snap-start"
                      typePost="link"
                      url={"/tags/berita-blockchain/"}
                      title="Bisnis"
                    />
                    <Post
                      className="snap-start"
                      typePost="link"
                      url={"/tags/berita-teknologi/"}
                      title="Teknologi"
                    />
                    <Post
                      className="snap-start"
                      typePost="link"
                      url={"/tags/berita-industri/"}
                      title="Industri"
                    />
                    <Post
                      className="snap-start"
                      typePost="link"
                      url={"/tags/berita-regulasi/"}
                      title="Regulasi"
                    />
                    <Post
                      className="snap-start"
                      typePost="link"
                      url={"/tags/berita-asetkripto/"}
                      title="Aset Kripto"
                    />
                    <Post
                      className="snap-start"
                      typePost="link"
                      url={"/tags/berita-riset/"}
                      title="Riset"
                    />
                    <Post
                      className="snap-start"
                      typePost="link"
                      url={"/tags/berita-siaranpers/"}
                      title="Siaran Pers"
                    />
                  </Breadcrumbs>
                </div>
              </div>
            </section>
          </Container>
        </header>

        <Container>
          <section className="supports-grid:grid grid-cols-8 sm:grid-cols-24 gap-y-6 gap-x-6 mt-14">
            <div className="col-span-full lg:col-span-16">
              <div>
                {intPrpsRslt &&
                  intPrpsRslt.map((stDataGrop, index) => {
                    return (
                      <section key={index + 1} className="mt-16 first:mt-0">
                        <>
                          <SubHeading
                            typeSubHeading="link"
                            title={`Berita ${stDataGrop.title}`}
                          >
                            <ArrowUpRightIcon className="stroke-current text-secondary stroke-[3.5] ml-2.5 sm:ml-4 h-5 sm:h-6 w-5 sm:w-6" />
                          </SubHeading>
                          {intPrpsRslt[index].data && (
                            <div
                              id={`nwsArtcle${stDataGrop.title}`}
                              className="artcleGrdGrop mt-6"
                            >
                              {intPrpsRslt[index].data?.map((stDataRslt, i) => {
                                const kyIndx = i;

                                if (kyIndx < 5) {
                                  const stFeatredMdia =
                                    intPrpsRslt[index].images[stDataRslt.id];
                                  const stUrl = stDataRslt.slug;

                                  return (
                                    <Article
                                      key={kyIndx + 1}
                                      url={`/berita/${stUrl}`}
                                      data={stDataRslt}
                                      featuredMedia={stFeatredMdia}
                                    />
                                  );
                                }
                              })}
                            </div>
                          )}
                          <div className="mt-6">
                            {intPrpsRslt[index].data && (
                              <MoreArticle
                                title={`Semua Berita ${stDataGrop.title}`}
                              >
                                <Splide
                                  tag="section"
                                  options={{
                                    type: "slide",
                                    updateOnMove: true,
                                    perMove: 1,
                                    arrows: false,
                                    pagination: false,
                                    rewind: true,
                                    trimSpace: "move",
                                    gap: "24px",
                                    fixedWidth: "247px",
                                    breakpoints: {
                                      640: {
                                        gap: "8px",
                                      },
                                    },
                                  }}
                                  hasTrack={false}
                                  aria-label="More (Featured Article)"
                                >
                                  <SplideTrack>
                                    {intPrpsRslt[index].data.map(
                                      (stDataRslt, i) => {
                                        const kyIndx = i;

                                        if (kyIndx >= 5) {
                                          const stFeatredMdia =
                                            intPrpsRslt[index].images[
                                              stDataRslt.id
                                            ];
                                          const stUrl = stDataRslt.slug;

                                          return (
                                            <SplideSlide key={kyIndx + 1}>
                                              <>
                                                <SmallArticle
                                                  url={`/berita/${stUrl}`}
                                                  data={stDataRslt}
                                                  featuredMedia={stFeatredMdia}
                                                />
                                              </>
                                            </SplideSlide>
                                          );
                                        }
                                      }
                                    )}
                                  </SplideTrack>
                                </Splide>
                              </MoreArticle>
                            )}
                          </div>
                        </>
                      </section>
                    );
                  })}
              </div>
            </div>
            <div className="col-span-full lg:col-span-8 relative">
              <div className="sticky top-24">
                <CardArticlePopular title="Terpopular">
                  {intLstArticle.map((dtLstArticle, index) => (
                    <ListArticlePopular key={index + 1} {...dtLstArticle} />
                  ))}
                </CardArticlePopular>

                <div className="flex flex-col pt-6 pb-0"></div>

                {/* Banner (Subscribe) */}
                <SecSubscribe />
              </div>
            </div>
          </section>
        </Container>
      </Main>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    // End Point's
    const endPntBtcoin = "/berita?tags=11";
    const endPntAltcoin = "/berita?tags=81";

    // Berita Bitcoin
    const nwsBtcoin = await getDynamicFetch(endPntBtcoin);

    let imgsBtcoin = {};

    if (nwsBtcoin) {
      for (const stResData of nwsBtcoin) {
        const gtResData = stResData._links["wp:featuredmedia"];

        for (const stMedia of gtResData) {
          const stImgs = await getFeaturedImgs(stMedia.href);

          imgsBtcoin[stResData.id] = stImgs;
        }
      }
    }

    // Berita Bitcoin
    const nwsAltcoin = await getDynamicFetch(endPntAltcoin);

    let imgsAltcoin = {};

    if (nwsAltcoin) {
      for (const stResData of nwsAltcoin) {
        const gtResData = stResData._links["wp:featuredmedia"];

        for (const stMedia of gtResData) {
          const stImgs = await getFeaturedImgs(stMedia.href);

          imgsAltcoin[stResData.id] = stImgs;
        }
      }
    }

    return {
      props: {
        result: [
          {
            id: 1,
            title: "Bitcoin",
            data: nwsBtcoin,
            images: imgsBtcoin,
          },
          {
            id: 2,
            title: "Altcoin",
            data: nwsAltcoin,
            images: imgsAltcoin,
          },
        ],
      },
      revalidate: 6, // In seconds
    };
  } catch (e) {
    return {
      props: {
        result: [],
        revalidate: 1,
      },
    };
  }
};
