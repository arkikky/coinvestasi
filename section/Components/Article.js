import { useState } from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import dynamic from "next/dynamic";

// Icons (Heroicons : https://unpkg.com/browse/@heroicons/react@2.0.13/24/outline/)
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

// Css
import "@splidejs/react-splide/css";

// Ui - Components
const Forms = dynamic(() => import("@components/UI/Forms"));
const Input = dynamic(() => import("@components/UI/Forms/Input"));
const Buttons = dynamic(() => import("@components/UI/Buttons"));
const Article = dynamic(() => import("@components/UI/Article/Article"));
const ListArticle = dynamic(() => import("@components/UI/Article/ListArticle"));
const ListArticlePopular = dynamic(() =>
  import("@components/UI/Article/ListArticlePopular")
);
const SmallArticle = dynamic(() =>
  import("@components/UI/Article/SmallArticle")
);
const CardArticlePopular = dynamic(() =>
  import("@components/UI/Card/PopularArticle")
);
const CardSubscribe = dynamic(() => import("@components/UI/Card/Subscribe"));

// Components
const SubHeadingComponents = dynamic(() =>
  import("@components/UI/Sub-Heading/SubHeadingComponents")
);

// Sections
const MoreArticle = dynamic(() => import("@components/UI/Card/MoreArticle"));

// Json
import mockArticle from "@utils/json/article/article.json";
import mockLstArticle from "@utils/json/article/list-article.json";

const SecArticle = () => {
  const [intArticle, stArticle] = useState(mockArticle);
  const [intLstArticle, stLstArticle] = useState(mockLstArticle);

  return (
    <>
      <section className="supports-grid:grid grid-cols-8 sm:grid-cols-24 gap-y-12 gap-x-6 mt-20">
        <div className="col-span-full lg:col-span-16">
          <div>
            <SubHeadingComponents title="Article Group" />
            <div id="articleGroupCompnts" className="artcleGrop flex flex-col">
              {intArticle.map((dtArticle) => (
                <Article {...dtArticle} key={dtArticle.id} />
              ))}
            </div>
          </div>
          <div className="mt-14">
            <SubHeadingComponents title="Article Grid Group" />
            <div id="articleGroupCompnts" className="artcleGrdGrop">
              {intArticle.map((dtArticle) => (
                <Article {...dtArticle} key={dtArticle.id} />
              ))}
            </div>
            <div className="mt-6">
              <MoreArticle title={"Semua Berita Altcoin"}>
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
                  aria-label="More Featured Article (Components)"
                >
                  <SplideTrack>
                    {intArticle.map((dtArticle) => (
                      <SplideSlide key={dtArticle.id}>
                        <SmallArticle {...dtArticle} />
                      </SplideSlide>
                    ))}
                  </SplideTrack>
                </Splide>
              </MoreArticle>
            </div>
          </div>
          <div className="mt-14">
            <SubHeadingComponents title="Article" />
            <div id="articleCompnts" className="flex flex-col">
              {intArticle.map((dtArticle) => (
                <Article {...dtArticle} key={dtArticle.id} />
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-full lg:col-span-8 relative">
          <div>
            <SubHeadingComponents title="List Article" />
            <div id="listArticleCompnts" className="flex flex-col">
              {intLstArticle.map((dtLstArticle) => (
                <ListArticle {...dtLstArticle} key={dtLstArticle.id} />
              ))}
            </div>
          </div>
          <div className="sticky top-24">
            <div className="mt-14">
              <SubHeadingComponents title="Article Popular" />
              <CardArticlePopular title="Terpopular">
                {intLstArticle.map((dtLstArticle) => (
                  <ListArticlePopular {...dtLstArticle} key={dtLstArticle.id} />
                ))}
              </CardArticlePopular>
            </div>
            <div className="mt-14">
              <SubHeadingComponents title="Card Subscribe" />
              <CardSubscribe
                id="bnnerComponentSubscribe"
                description="<b>Coinvestasi Update</b> mendapatkan berita terbaru tentang kripto, blockchain langsung ke dalam inbox anda."
              >
                <Forms
                  id="formComponentSubscribe"
                  className="flex flex-col"
                  method="POST"
                  action={"/"}
                >
                  <div className="flex flex-row items-center">
                    <Input
                      typeInput="default"
                      className="h-full w-full max-w-full"
                      id="inptEmailComponentSubscribe"
                      type="email"
                      name="email"
                      maxLength="80"
                      placeholder="mail@mail,sdf"
                    />
                    <Buttons
                      typeBtn="btn-icon"
                      className="leading-unset ml-2 px-3 lg:px-3 h-full"
                      type="submit"
                      label="Daftar"
                      variants="btn-outline-white"
                      position="center"
                      text="capitalize"
                      withIcons={true}
                      positionIcons="right"
                    >
                      <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                    </Buttons>
                  </div>
                </Forms>
              </CardSubscribe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecArticle;
