import dynamic from "next/dynamic";

// Icons (Heroicons : https://unpkg.com/browse/@heroicons/react@2.0.13/24/outline/)
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

// Ui - Components
const PostLink = dynamic(() => import("@components/UI/Post/PostLink"));

const MoreArticle = ({ id, url, title, children }) => {
  const addID = id ? id : "morFetredArtcle";
  const addUrl = url ? url : "";
  const addTitle = title ? title : `${process.env.NEXT_PUBLIC_TITLE_LOREM}`;

  return (
    <>
      <section
        id={addID}
        className="bg-gray-50 flex flex-col py-4 sm:py-6 px-4 sm:px-6"
      >
        {addTitle && (
          <PostLink className={"w-max"} url={addUrl}>
            <h3 className="flex flex-row items-center text-black-100 h4 sm:h3 w-max">
              {addTitle}{" "}
              <ArrowUpRightIcon className="stroke-current text-secondary stroke-[3.5] ml-2 h-4 sm:h-5 w-4 sm:w-5" />
            </h3>
          </PostLink>
        )}
        {children && (
          <div className="relative mt-4 sm:mt-6">{children}</div>
        )}
      </section>
    </>
  );
};

export default MoreArticle;
