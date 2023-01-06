import { useState } from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import dynamic from "next/dynamic";
import Link from "next/link";

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
const Buttons = dynamic(() => import("@components/UI/Buttons"));
const Article = dynamic(() => import("@components/UI/Article/Article"));
const ListArticle = dynamic(() => import("@components/UI/Article/ListArticle"));
const FeaturedArticleSlider = dynamic(() =>
  import("@components/UI/Card/SliderArticle")
);

// Components
const SubHeading = dynamic(() =>
  import("@components/UI/Sub-Heading/SubHeading")
);
const SubHeadingBorder = dynamic(() =>
  import("@components/UI/Sub-Heading/SubHeadingBorder")
);

// Section
const SecSubscribe = dynamic(() => import("@section/Subscribe"));

// Layouts
const LyFeatuedArticleEvent = dynamic(() =>
  import("@layouts/Featured/ArticleEvent")
);
const LyPublicationPartner = dynamic(() =>
  import("@layouts/PublicationPartner")
);
const LyLearnBisaCrypto = dynamic(() => import("@layouts/LearnBisaCrypto"));

const Home = (props) => {
  // Featured Article
  const [intFetredArtcle, stFetredArtcle] = useState(props.result[0].data);
  const [imgsFetredArtcle, , stImgsFetredArtcle] = useState(
    props.result[0].images
  );

  // Editor Choice
  const [intEdtrChoce, stEdtrChoce] = useState(props.result[1].data);
  const [imgsEdtrChoce, stImgsEdtrChoce] = useState(props.result[1].images);

  const resEditorChoice = intEdtrChoce?.map((stDataRslt) => {
    const stFeatredMdia = imgsEdtrChoce[stDataRslt.id];
    const stUrl = stDataRslt.slug;

    return (
      <ListArticle
        key={stDataRslt.id}
        url={`/berita/${stUrl}`}
        data={stDataRslt}
        featuredMedia={stFeatredMdia}
      />
    );
  });

  // News
  const [intNews, stNews] = useState(props.result[2].data);

  const resNews = intNews?.map((stDataRslt) => {
    const stFeatredMdia = stDataRslt._embedded["wp:featuredmedia"][0];
    const stUrl = stDataRslt.slug;

    return (
      <Article
        key={stDataRslt.id}
        url={`/berita/${stUrl}`}
        data={stDataRslt}
        featuredMedia={stFeatredMdia}
      />
    );
  });

  return (
    <>
      {/* Head (Home) */}
      <Head
        siteTitle="Coinvestasi | Aset Masa Kini, Kaya Masa Depan"
        title="Coinvestasi"
        siteDescription="Coinvestasi adalah platform Indonesia terkemuka untuk acara dan informasi terkait mata uang kripto, aset digital, dan teknologi blockchain."
        description="Aset Masa Kini, Kaya Masa Depan"
      />

      {/* Main (Home) */}
      <Main>
        <h1 className="">Welcome to Coinvestasi</h1>
        <ul>
          <Link href="/components">Component</Link>
          <Link href="/berita">Berita</Link>
        </ul>

        <Container>
          {/* Header (Main - Home) */}
          <section className="supports-grid:grid grid-cols-8 sm:grid-cols-24 gap-x-6">
            <div className="col-span-full lg:col-span-16 relative">
              <div className="supports-grid:grid grid-cols-8 sm:grid-cols-24 gap-x-0">
                <div className="col-span-full">
                  {intFetredArtcle && (
                    <Splide
                      id="fetredArticleSldr"
                      tag="section"
                      options={{
                        type: "fade",
                        updateOnMove: true,
                        autoplay: true,
                        rewind: true,
                        perPage: 1,
                        perMove: 1,
                        arrows: false,
                        pagination: false,
                        pauseOnHover: true,
                        pauseOnFocus: true,
                        resetProgress: true,
                        easing: "ease",
                        interval: 4000,
                        fixedHeight: "100%",
                      }}
                      hasTrack={false}
                      aria-label="Featured Article (Slider - Home)"
                      onMounted={(splide) => {
                        const stElmntTotal =
                          document.querySelector(".splide-total");

                        if (stElmntTotal) {
                          stElmntTotal.innerHTML = splide.length;
                        }
                      }}
                      onMove={(splide) => {
                        const stElmntIndex =
                          document.querySelector(".splide-index");

                        if (stElmntIndex) {
                          stElmntIndex.innerHTML = splide.index + 1;
                        }
                      }}
                    >
                      <SplideTrack className="pb-2">
                        {intFetredArtcle.map((stDataRslt, index) => {
                          const stFeatredMdia = imgsFetredArtcle[stDataRslt.id];
                          const stUrl = stDataRslt.slug;

                          return (
                            <SplideSlide
                              className="h-auto max-h-max"
                              key={index + 1}
                            >
                              <>
                                <FeaturedArticleSlider
                                  url={`/berita/${stUrl}`}
                                  data={stDataRslt}
                                  featuredMedia={stFeatredMdia}
                                />
                              </>
                            </SplideSlide>
                          );
                        })}
                      </SplideTrack>
                    </Splide>
                  )}

                  <div className="flex flex-row items-center justify-between mt-8 mx-3 sm:mx-6">
                    <div>
                      <span className="splide-index">1</span>
                      <span>—</span>
                      <span className="splide-total">0</span>
                    </div>
                    <span>Left / Right</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-full lg:col-span-8">
              <section>
                <SubHeadingBorder title="Pilihan Editor" variants="bottom" />
                {resEditorChoice && (
                  <div id="featuredEditorChoice" className="flex flex-col">
                    {resEditorChoice}
                  </div>
                )}
              </section>
            </div>
          </section>

          {/* News & Kripto Price, Today  */}
          <section className="supports-grid:grid grid-cols-8 sm:grid-cols-24 gap-y-6 gap-x-6 mt-24">
            <div className="col-span-full lg:col-span-16">
              <SubHeading title="Berita Terbaru">
                <Buttons
                  typeBtn="btn-link"
                  label="Lihat semua berita"
                  variants="btn-white"
                  size="lg"
                  url={"/berita"}
                  withIcons={true}
                  positionIcons="right"
                >
                  <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3.5 w-3.5" />
                </Buttons>
              </SubHeading>

              {/* Content (News) */}
              {resNews && (
                <div className="artcleGrop flex flex-col mt-4 sm:mt-8 lg:mt-10">
                  {resNews}
                </div>
              )}

              <div className="flex flex-col sm:hidden mt-6">
                <Buttons
                  typeBtn="btn-link"
                  className={"btn-block"}
                  label="Lihat semua berita"
                  variants="btn-white"
                  size="lg"
                  withIcons={true}
                  positionIcons="right"
                >
                  <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3.5 w-3.5" />
                </Buttons>
              </div>
            </div>
            <div className="col-span-full lg:col-span-8 relative">
              <div className="sticky top-24">
                {/* Banner (Subscribe) */}
                <SecSubscribe />
              </div>
            </div>
          </section>
        </Container>

        {/* Learn (#SemuaBisaCrypto)  */}
        <section className="bg-blue-50 mt-8 py-10">
          <Container>
            <SubHeading
              typeSubHeading="with-button"
              title="#SemuaBisaCrypto"
              description="Belajar aset crypto dan teknologi blockchain dengan mudah tanpa ribet."
            >
              <Buttons
                typeBtn="btn-link"
                className={"btn-block"}
                label="Lihat semua materi"
                variants="btn-primary"
                size="lg"
                withIcons={true}
                positionIcons="right"
              >
                <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3.5 w-3.5" />
              </Buttons>
            </SubHeading>
          </Container>

          {/* Content (#SemuaBisaCrypto) */}
          <LyLearnBisaCrypto />

          <div className="flex flex-col sm:hidden mt-6">
            <Container>
              <Buttons
                typeBtn="btn-link"
                className={"btn-block"}
                label="Lihat semua materi"
                variants="btn-primary"
                size="lg"
                withIcons={true}
                positionIcons="right"
              >
                <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3.5 w-3.5" />
              </Buttons>
            </Container>
          </div>
        </section>

        {/* Youtube (Reels)  */}
        <section className="pt-11 pb-12">
          <Container>
            <SubHeading
              typeSubHeading="with-button"
              title="Terbaru di Coinvestasi"
              description="Belajar aset crypto dan teknologi blockchain dengan mudah tanpa ribet."
            >
              <Buttons
                typeBtn="btn-link"
                label="Lihat semua video"
                variants="btn-white"
                size="lg"
                withIcons={true}
                positionIcons="right"
              >
                <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3.5 w-3.5" />
              </Buttons>
            </SubHeading>
          </Container>

          {/* Content (Youtube - Reels) */}
          <div className="flex flex-col sm:hidden mt-6">
            <Container>
              <Buttons
                typeBtn="btn-link"
                className={"btn-block"}
                label="Lihat semua video"
                variants="btn-white"
                size="lg"
                withIcons={true}
                positionIcons="right"
              >
                <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3.5 w-3.5" />
              </Buttons>
            </Container>
          </div>
        </section>

        {/* Banner - (Featued Event) */}
        <Container>
          <LyFeatuedArticleEvent id="featredEvntHme" />
        </Container>

        {/* Publication Partner */}
        <Container className={"px-0 sm:px-auto"}>
          <section className="mt-12 py-4 sm:py-10">
            <div className="flex items-center justify-center">
              <h2>{"Publication Partner"}</h2>
            </div>

            {/* Content (Publication Partner) */}
            <LyPublicationPartner />
          </section>
        </Container>
      </Main>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  let imgsFetredArtcle = {};
  let imgsEdtorChoice = {};

  // End Point's
  const ndpointFetredArtcle = "/berita?tags=281";
  const ndpointEdtorChoice = "/berita?tags=282";
  const endpointNews = "/berita?_embed";

  try {
    // Featured Article
    const fetredArtcle = await getDynamicFetch(ndpointFetredArtcle);

    if (fetredArtcle) {
      for (const stResData of fetredArtcle) {
        const gtResData = stResData._links["wp:featuredmedia"];
        for (const stMedia of gtResData) {
          const stImgs = await getFeaturedImgs(stMedia.href);

          imgsFetredArtcle[stResData.id] = stImgs;
        }
      }
    }

    // Editor Choice
    const edtorChoice = await getDynamicFetch(ndpointEdtorChoice);

    if (edtorChoice) {
      for (const stResData of edtorChoice) {
        const gtResData = stResData._links["wp:featuredmedia"];

        for (const stMedia of gtResData) {
          const stImgs = await getFeaturedImgs(stMedia.href);

          imgsEdtorChoice[stResData.id] = stImgs;
        }
      }
    }

    // News Article
    const newsArticle = await getDynamicFetch(endpointNews);

    return {
      props: {
        result: [
          {
            title: "Featured Article",
            data: fetredArtcle,
            images: imgsFetredArtcle,
          },
          {
            title: "Editor Article",
            data: edtorChoice,
            images: imgsEdtorChoice,
          },
          {
            title: "News Article",
            data: newsArticle,
          },
        ],
      },

      revalidate: 10, // In 8 seconds
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/",
        permanent: false, // StatusCode: 301
      },

      notFound: true,
    };
  }
}
