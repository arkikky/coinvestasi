import dynamic from "next/dynamic";

// Icons (Heroicons : https://unpkg.com/browse/@heroicons/react@2.0.13/24/outline/)
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

// Ui - Components
const Buttons = dynamic(() => import("@components/UI/Buttons"));

// Components
const SubHeadingComponents = dynamic(() =>
  import("@components/UI/Sub-Heading/SubHeadingComponents")
);

const LabelIconsButtons = () => {
  return (
    <>
      <article className="mt-20">
        <section className="supports-grid:grid grid-cols-12 gap-y-12 gap-x-6">
          {/* Icons (Solid Button) */}
          <div className="col-span-full lg:col-span-6">
            <SubHeadingComponents
              title="Icons Solid Button"
              desc="Gunakan gaya tombol menggunakan ikon ini dengan beberapa warna untuk menunjukkan tindakan atau tautan."
            ></SubHeadingComponents>
            <div className="grid grid-cols-12 gap-y-6 gap-x-6">
              <div className="col-span-full">
                <div className="inline-flex flex-wrap gap-y-2.5 gap-x-2.5">
                  <Buttons
                    typeBtn="btn-icon"
                    label="Primary"
                    variants="btn-primary"
                    size="sm"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    label="Secondary"
                    variants="btn-secondary"
                    size="sm"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    label="Success"
                    variants="btn-success"
                    size="sm"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    label="Danger"
                    variants="btn-danger"
                    size="sm"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    label="Subtle"
                    variants="btn-subtle"
                    size="sm"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    label="White"
                    variants="btn-white"
                    size="sm"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                </div>
              </div>
              <div className="col-span-full">
                <div className="inline-flex flex-wrap gap-y-2.5 gap-x-2.5">
                  <Buttons
                    typeBtn="btn-icon"
                    label="Primary"
                    variants="btn-primary"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    label="Secondary"
                    variants="btn-secondary"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    label="Success"
                    variants="btn-success"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    label="Danger"
                    variants="btn-danger"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    label="Subtle"
                    variants="btn-subtle"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    label="White"
                    variants="btn-white"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                </div>
              </div>
            </div>
          </div>

          {/* Icons (Outline Button) */}
          <div className="col-span-full lg:col-span-6">
            <SubHeadingComponents
              title="Icons Outline Button"
              desc="Gunakan gaya tombol menggunakan ikon ini dengan beberapa warna untuk menunjukkan tindakan atau tautan."
            ></SubHeadingComponents>
            <div className="grid grid-cols-12 gap-y-6 gap-x-6">
              <div className="col-span-full">
                <div className="inline-flex flex-wrap gap-y-2.5 gap-x-2.5">
                  <Buttons
                    typeBtn="btn-icon"
                    label="Primary"
                    variants="btn-outline-primary"
                    size="sm"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    label="Secondary"
                    variants="btn-outline-secondary"
                    size="sm"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    label="Success"
                    variants="btn-outline-success"
                    size="sm"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    label="Danger"
                    variants="btn-outline-danger"
                    size="sm"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    label="Subtle"
                    variants="btn-outline-subtle"
                    size="sm"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    label="white"
                    variants="btn-outline-white"
                    size="sm"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                </div>
              </div>
              <div className="col-span-full">
                <div className="inline-flex flex-wrap gap-y-2.5 gap-x-2.5">
                  <Buttons
                    typeBtn="btn-icon"
                    label="Primary"
                    variants="btn-outline-primary"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    label="Secondary"
                    variants="btn-outline-secondary"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    label="Success"
                    variants="btn-outline-success"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    label="Danger"
                    variants="btn-outline-danger"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    label="Subtle"
                    variants="btn-outline-subtle"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    label="White"
                    variants="btn-outline-white"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
                  </Buttons>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default LabelIconsButtons;
