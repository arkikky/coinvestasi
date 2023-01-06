import dynamic from "next/dynamic";

// Ui - Components
const Post = dynamic(() => import("@components/UI/Post/Post"));
const Breadcrumbs = dynamic(() => import("@components/UI/Breadcrumbs"));

// Components
const SubHeadingComponents = dynamic(() =>
  import("@components/UI/Sub-Heading/SubHeadingComponents")
);

const SecBredcrumbs = () => {
  return (
    <>
      <article className="mt-20">
        <SubHeadingComponents
          title="Bredcrumbs"
          desc="Ini adalah contoh komponen breadcrumbs."
        ></SubHeadingComponents>
        <section className="supports-grid:grid grid-cols-12 gap-y-12 gap-x-6">
          <div className="col-span-full">
            <div className="relative">
              <Breadcrumbs className="text-black-100" typeBreadcrumbs={"tags"}>
                <Post typePost="link" title="Analisis" />
                <Post typePost="link" title="Bisnis" />
                <Post typePost="link" title="Bisnis" />
                <Post typePost="link" title="Teknologi" />
                <Post typePost="link" title="Industri" />
                <Post typePost="link" title="Regulasi" />
                <Post typePost="link" title="Aset Kripto" />
                <Post typePost="link" title="Riset" />
                <Post typePost="link" title="Siaran Pers" />
              </Breadcrumbs>
            </div>
          </div>

          <div className="col-span-full lg:col-span-6">
            <div>
              <Breadcrumbs className="text-gray-300">
                <Post typePost="link" title="Miami" />
                <Post typePost="link" title="6 April, 2022" />
                <Post typePost="link" title="News" />
                <Post typePost="link" title="Cryptocurrency" />
              </Breadcrumbs>
            </div>
            <div className="mt-3">
              <Breadcrumbs
                className="text-black-100"
                typeBreadcrumbs={"pointer"}
              >
                <Post typePost="link" title="Miami" />
                <Post typePost="link" title="6 April, 2022" />
                <Post typePost="link" title="News" />
                <Post typePost="link" title="Cryptocurrency" />
              </Breadcrumbs>
            </div>
          </div>

          <div className="col-span-full lg:col-span-6">
            <div>
              <Breadcrumbs className="text-gray-300" typeBreadcrumbs={"carret"}>
                <Post typePost="link" title="Miami" />
                <Post typePost="link" title="6 April, 2022" />
                <Post typePost="link" title="News" />
                <Post typePost="link" title="Cryptocurrency" />
              </Breadcrumbs>
            </div>
            <div className="mt-3">
              <Breadcrumbs
                className="text-gray-300"
                typeBreadcrumbs={"line-rotate"}
              >
                <Post typePost="link" title="Miami" />
                <Post typePost="link" title="6 April, 2022" />
                <Post typePost="link" title="News" />
                <Post typePost="link" title="Cryptocurrency" />
              </Breadcrumbs>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default SecBredcrumbs;
