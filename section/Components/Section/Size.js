import dynamic from "next/dynamic";

// Ui - Components
const Buttons = dynamic(() => import("@components/UI/Buttons"));

// Components
const SubHeadingComponents = dynamic(() =>
  import("@components/UI/Sub-Heading/SubHeadingComponents")
);

const SizeButtons = () => {
  return (
    <>
      <article className="mt-20">
        <SubHeadingComponents
          title="Size Buttons"
          desc="Gunakan gaya tombol default ini dengan beberapa warna untuk menunjukkan tindakan atau tautan."
        />
        <section className="supports-grid:grid grid-cols-12 gap-y-12 gap-x-6">
          {/* Size (Solid Button) */}
          <div className="col-span-full lg:col-span-6">
            <div className="grid grid-cols-12 gap-y-6 gap-x-6">
              <div className="col-span-full">
                <div className="inline-flex flex-wrap items-end gap-y-2.5 gap-x-2.5 pr-0 lg:pr-18 xl:pr-0">
                  <Buttons
                    label="Large"
                    variants="btn-primary"
                    size="lg"
                    text="capitalize"
                  />
                  <Buttons
                    label="Base"
                    variants="btn-primary"
                    size="base"
                    text="capitalize"
                  />
                  <Buttons
                    label="Small"
                    variants="btn-primary"
                    size="sm"
                    text="capitalize"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Size (Outline Button) */}
          <div className="col-span-full lg:col-span-6">
            <div className="grid grid-cols-12 gap-y-6 gap-x-6">
              <div className="col-span-full">
                <div className="inline-flex flex-wrap items-end gap-y-2.5 gap-x-2.5 pr-0 lg:pr-18 xl:pr-0">
                  <Buttons
                    label="Large"
                    variants="btn-outline-primary"
                    size="lg"
                    text="capitalize"
                  />
                  <Buttons
                    label="Base"
                    variants="btn-outline-primary"
                    size="base"
                    text="capitalize"
                  />
                  <Buttons
                    label="Small"
                    variants="btn-outline-primary"
                    size="sm"
                    text="capitalize"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default SizeButtons;
