import dynamic from "next/dynamic";

// Icons (Heroicons : https://unpkg.com/browse/@heroicons/react@2.0.13/24/outline/)
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

// Ui - Components
const Buttons = dynamic(() => import("@components/UI/Buttons"));

// Components
const SubHeadingComponents = dynamic(() =>
  import("@components/UI/Sub-Heading/SubHeadingComponents")
);

const IconsButtons = () => {
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
                    variants="btn-primary"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    variants="btn-secondary"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    variants="btn-success"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    variants="btn-danger"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    variants="btn-subtle"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    variants="btn-white"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
                  </Buttons>
                </div>
              </div>
              <div className="col-span-full">
                <div className="inline-flex flex-wrap gap-y-2.5 gap-x-2.5">
                  <Buttons
                    typeBtn="btn-icon"
                    variants="btn-primary"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    variants="btn-secondary"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    variants="btn-success"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    variants="btn-danger"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    variants="btn-subtle"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    variants="btn-white"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
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
                    variants="btn-outline-primary"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    variants="btn-outline-secondary"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    variants="btn-outline-success"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    variants="btn-outline-danger"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    variants="btn-outline-subtle"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    variants="btn-outline-white"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
                  </Buttons>
                </div>
              </div>
              <div className="col-span-full">
                <div className="inline-flex flex-wrap gap-y-2.5 gap-x-2.5">
                  <Buttons
                    typeBtn="btn-icon"
                    variants="btn-outline-primary"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    variants="btn-outline-secondary"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    variants="btn-outline-success"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    variants="btn-outline-danger"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    variants="btn-outline-subtle"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
                  </Buttons>
                  <Buttons
                    typeBtn="btn-icon"
                    variants="btn-outline-white"
                    rounded="pill"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[3.5] h-3 w-3" />
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

export default IconsButtons;
