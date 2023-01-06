import dynamic from "next/dynamic";

// Icons (Heroicons : https://unpkg.com/browse/@heroicons/react@2.0.13/24/outline/)
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

// Css
import Article from "@styles/components/Article.module.css";

// Ui - Components
const Buttons = dynamic(() => import("@components/UI/Buttons"));
const ImagesFill = dynamic(() => import("@components/UI/ImagesFill"));

const StudyCrypto = ({ url, src, title, description }) => {
  const addUrl = url ? url : "/";
  const addTitle = title ? title : `${process.env.NEXT_PUBLIC_TITLE_LOREM}`;
  const addDesc = description
    ? description
    : `${process.env.NEXT_PUBLIC_DESC_LOREM}`;

  return (
    <>
      <article className={`${Article.studyBsaCrypto}`}>
        <ImagesFill
          className="h-[196px] min-h-[196px] sm:h-[236px] sm:min-h-[236px] w-full"
          src={src}
          alt="Coinvestasi (#SemuaBisaCrypto)"
        />
        <div className={`bg-white ${Article.studyBsaCryptoMain}`}>
          <div>
            {addTitle && <h3 className="text-black-100 h4">{addTitle}</h3>}
            {addDesc && <p className="text-black-50 mt-2">{addDesc}</p>}
          </div>
          <div className="mt-6">
            <Buttons
              typeBtn="btn-link-icons"
              className="btn-block px-6"
              type="button"
              label="Lihat semua materi"
              variants="btn-outline-white"
              rounded="square"
              url={addUrl}
              icons="right"
            >
              <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3.5 w-3.5" />
            </Buttons>
          </div>
        </div>
      </article>
    </>
  );
};

export default StudyCrypto;
