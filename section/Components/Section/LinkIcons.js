import dynamic from "next/dynamic";

// Icons (Heroicons : https://unpkg.com/browse/@heroicons/react@2.0.13/24/outline/)
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

// Ui - Components
const Buttons = dynamic(() => import("@components/UI/Buttons"));

// Components
const SubHeadingComponents = dynamic(() =>
  import("@components/UI/Sub-Heading/SubHeadingComponents")
);

const LinkIconsButtons = () => {
  return (
    <>
      <article className="mt-20">
        <section className="supports-grid:grid grid-cols-12 gap-y-12 gap-x-6">
          {/* Link (Solid Button) */}
          <div className="col-span-full lg:col-span-6">
            <SubHeadingComponents
              title="Link Solid Button"
              desc="Gunakan gaya tombol default ini dengan beberapa warna untuk menunjukkan tindakan atau tautan."
            />
            <div className="inline-flex flex-wrap gap-y-2.5 gap-x-2.5">
              <Buttons
                typeBtn="btn-blank-link"
                label="Primary"
                variants="btn-primary"
                size="sm"
                text="capitalize"
                withIcons={true}
                positionIcons="right"
              >
                <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1.5 h-3 w-3" />
              </Buttons>
              <Buttons
                typeBtn="btn-link"
                label="Secondary"
                variants="btn-secondary"
                size="sm"
                text="capitalize"
                withIcons={true}
                positionIcons="right"
              >
                <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1.5 h-3 w-3" />
              </Buttons>
              <Buttons
                typeBtn="btn-link"
                label="Success"
                variants="btn-success"
                size="sm"
                text="capitalize"
                withIcons={true}
                positionIcons="right"
              >
                <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1.5 h-3 w-3" />
              </Buttons>
              <Buttons
                typeBtn="btn-link"
                label="Danger"
                variants="btn-danger"
                size="sm"
                text="capitalize"
                withIcons={true}
                positionIcons="right"
              >
                <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1.5 h-3 w-3" />
              </Buttons>
              <Buttons
                typeBtn="btn-link"
                label="Subtle"
                variants="btn-subtle"
                size="sm"
                text="capitalize"
                withIcons={true}
                positionIcons="right"
              >
                <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1.5 h-3 w-3" />
              </Buttons>
              <Buttons
                typeBtn="btn-link"
                label="White"
                variants="btn-white"
                size="sm"
                text="capitalize"
                withIcons={true}
                positionIcons="right"
              >
                <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1.5 h-3 w-3" />
              </Buttons>
            </div>
          </div>

          {/* Link (Outline Button) */}
          <div className="col-span-full lg:col-span-6">
            <SubHeadingComponents
              title="Link Outline Button"
              desc="Gunakan gaya tombol default ini dengan beberapa warna untuk menunjukkan tindakan atau tautan."
            />
            <div className="inline-flex flex-wrap gap-y-2.5 gap-x-2.5">
              <Buttons
                typeBtn="btn-link"
                label="Primary"
                variants="btn-outline-primary"
                size="sm"
                text="capitalize"
                withIcons={true}
                positionIcons="right"
              >
                <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1.5 h-3 w-3" />
              </Buttons>
              <Buttons
                typeBtn="btn-link"
                label="Secondary"
                variants="btn-outline-secondary"
                size="sm"
                text="capitalize"
                withIcons={true}
                positionIcons="right"
              >
                <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1.5 h-3 w-3" />
              </Buttons>
              <Buttons
                typeBtn="btn-link"
                label="Success"
                variants="btn-outline-success"
                size="sm"
                text="capitalize"
                withIcons={true}
                positionIcons="right"
              >
                <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1.5 h-3 w-3" />
              </Buttons>
              <Buttons
                typeBtn="btn-link"
                label="Danger"
                variants="btn-outline-danger"
                size="sm"
                text="capitalize"
                withIcons={true}
                positionIcons="right"
              >
                <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1.5 h-3 w-3" />
              </Buttons>
              <Buttons
                typeBtn="btn-link"
                label="Subtle"
                variants="btn-outline-subtle"
                size="sm"
                text="capitalize"
                withIcons={true}
                positionIcons="right"
              >
                <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1.5 h-3 w-3" />
              </Buttons>
              <Buttons
                typeBtn="btn-link"
                label="White"
                variants="btn-outline-white"
                size="sm"
                text="capitalize"
                withIcons={true}
                positionIcons="right"
              >
                <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1.5 h-3 w-3" />
              </Buttons>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default LinkIconsButtons;
