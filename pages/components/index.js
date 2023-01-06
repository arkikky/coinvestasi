import dynamic from "next/dynamic";

// Icons (Heroicons : https://unpkg.com/browse/@heroicons/react@2.0.13/24/outline/)
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

// Ui - Components
const Head = dynamic(() => import("@components/Head"));
const Container = dynamic(() => import("@components/Container"));
const PostLink = dynamic(() => import("@components/UI/Post/PostLink"));

// Components
const SubHeadingComponents = dynamic(() =>
  import("@components/UI/Sub-Heading/SubHeadingComponents")
);

// Section
const Typography = dynamic(() => import("@section/Components/Typography"), {
  ssr: false,
});
const Link = dynamic(() => import("@section/Components/Link"), { ssr: false });
const Buttons = dynamic(() => import("@section/Components/Buttons"), {
  ssr: false,
});
const Forms = dynamic(() => import("@section/Components/Forms"), {
  ssr: false,
});
const Bredcrumbs = dynamic(() => import("@section/Components/Bredcrumbs"), {
  ssr: false,
});
const Article = dynamic(() => import("@section/Components/Article"));

const Components = () => {
  return (
    <>
      {/* Head (Components) */}
      <Head
        siteTitle="Components | Coinvestasi"
        title="Components | Coinvestasi"
        siteDescription="Coinvestasi adalah platform Indonesia terkemuka untuk acara dan informasi terkait mata uang kripto, aset digital, dan teknologi blockchain."
        description="Aset Masa Kini, Kaya Masa Depan"
      />

      {/* Main */}
      <main className="mt-[108px] pb-[104px]">
        <Container>
          {/* Typography */}
          <Typography />

          {/* Link */}
          <Link />

          {/* Button */}
          <Buttons />

          {/* Forms */}
          <Forms />

          {/* Bredcrumbs */}
          <Bredcrumbs />

          {/* Article */}
          <Article />
        </Container>
      </main>
    </>
  );
};

export default Components;
