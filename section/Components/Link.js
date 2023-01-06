import dynamic from "next/dynamic";

// Icons (Heroicons : https://unpkg.com/browse/@heroicons/react@2.0.13/24/outline/)
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

// Ui - Components
const PostLink = dynamic(() => import("@components/UI/Post/PostLink"));

// Components
const SubHeadingComponents = dynamic(() =>
  import("@components/UI/Sub-Heading/SubHeadingComponents")
);

const SecLink = () => {
  return (
    <>
      <article className="mt-20">
        <section className="supports-grid:grid grid-cols-12 gap-y-12 gap-x-6">
          {/* Disabled (Solid Button) */}
          <div className="col-span-full lg:col-span-6">
            <SubHeadingComponents
              title="Link"
              desc="Gunakan gaya berikut untuk menunjukkan link tindakan atau tautan."
            ></SubHeadingComponents>
            <div className="grid grid-cols-12 gap-y-6 gap-x-6">
              <div className="col-span-full">
                <div className="inline-flex flex-wrap gap-y-2.5 gap-x-2.5">
                  <PostLink
                    className="hocus:text-secondary"
                    url=""
                    title="Link Default"
                  />
                  <PostLink
                    className="text-primary hocus:text-primary"
                    url=""
                    title="Link Primary"
                  />
                  <PostLink
                    className="text-secondary hocus:text-secondary"
                    url=""
                    title="Link Secondary"
                  />
                  <PostLink
                    className="text-success hocus:text-success"
                    url=""
                    title="Link Success"
                  />
                  <PostLink
                    className="text-danger hocus:text-danger"
                    url=""
                    title="Link Danger"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Disabled (Outline Button) */}
          <div className="col-span-full lg:col-span-6">
            <SubHeadingComponents
              title="Link With Icons"
              desc="Gunakan gaya berikut untuk menunjukkan link tindakan atau tautan."
            ></SubHeadingComponents>
            <div className="grid grid-cols-12 gap-y-6 gap-x-6">
              <div className="col-span-full">
                <div className="inline-flex flex-wrap gap-y-2.5 gap-x-2.5">
                  <div className="inline-flex flex-wrap gap-y-2.5 gap-x-2.5">
                    <PostLink
                      className="hocus:text-secondary"
                      url=""
                      title="Link Default"
                      withIcons={true}
                      positionIcons="right"
                    >
                      <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3.5 w-3.5" />
                    </PostLink>
                    <PostLink
                      className="text-primary hocus:text-primary"
                      url=""
                      title="Link Primary"
                      withIcons={true}
                      positionIcons="right"
                    >
                      <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3.5 w-3.5" />
                    </PostLink>
                    <PostLink
                      className="text-secondary hocus:text-secondary"
                      url=""
                      title="Link Secondary"
                      withIcons={true}
                      positionIcons="right"
                    >
                      <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3.5 w-3.5" />
                    </PostLink>
                    <PostLink
                      className="text-success hocus:text-success"
                      url=""
                      title="Link Success"
                      withIcons={true}
                      positionIcons="right"
                    >
                      <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3.5 w-3.5" />
                    </PostLink>
                    <PostLink
                      className="text-danger hocus:text-danger"
                      url=""
                      title="Link Danger"
                      withIcons={true}
                      positionIcons="right"
                    >
                      <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3.5 w-3.5" />
                    </PostLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default SecLink;
