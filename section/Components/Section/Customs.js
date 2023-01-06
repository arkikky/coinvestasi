import dynamic from "next/dynamic";

// Ui - Components
const Buttons = dynamic(() => import("@components/UI/Buttons"));

// Components
const SubHeadingComponents = dynamic(() =>
  import("@components/UI/Sub-Heading/SubHeadingComponents")
);

const CustomsButtons = () => {
  return (
    <>
      <article className="mt-20">
        <SubHeadingComponents
          title="Customs Button"
          desc="Tombol pills & square dapat digunakan sebagai gaya alternatif dengan menggunakan tepi dan persegi yang sepenuhnya membulat."
        />
        <section className="supports-grid:grid grid-cols-12 gap-y-12 gap-x-6">
          {/* Customs (Solid Button) */}
          <div className="col-span-full lg:col-span-6">
            <div className="grid grid-cols-12 gap-y-6 gap-x-6">
              <div className="col-span-full">
                <div className="inline-flex flex-wrap gap-y-2.5 gap-x-2.5">
                  <Buttons
                    label="Primary"
                    variants="btn-primary"
                    size="sm"
                    text="capitalize"
                  />
                  <Buttons
                    label="Secondary"
                    variants="btn-secondary"
                    size="sm"
                    text="capitalize"
                  />
                  <Buttons
                    label="Success"
                    variants="btn-success"
                    size="sm"
                    text="capitalize"
                  />
                  <Buttons
                    label="Danger"
                    variants="btn-danger"
                    size="sm"
                    text="capitalize"
                  />
                  <Buttons
                    label="Subtle"
                    variants="btn-subtle"
                    size="sm"
                    text="capitalize"
                  />
                  <Buttons
                    label="White"
                    variants="btn-white"
                    size="sm"
                    text="capitalize"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <div className="inline-flex flex-wrap gap-y-2.5 gap-x-2.5">
                  <Buttons
                    label="Primary"
                    variants="btn-primary"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                  />
                  <Buttons
                    label="Secondary"
                    variants="btn-secondary"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                  />
                  <Buttons
                    label="Success"
                    variants="btn-success"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                  />
                  <Buttons
                    label="Danger"
                    variants="btn-danger"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                  />
                  <Buttons
                    label="Subtle"
                    variants="btn-subtle"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                  />
                  <Buttons
                    label="White"
                    variants="btn-white"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Customs (Outline Button) */}
          <div className="col-span-full lg:col-span-6">
            <div className="grid grid-cols-12 gap-y-6 gap-x-6">
              <div className="col-span-full">
                <div className="inline-flex flex-wrap gap-y-2.5 gap-x-2.5">
                  <Buttons
                    label="Primary"
                    variants="btn-outline-primary"
                    size="sm"
                    text="capitalize"
                  />
                  <Buttons
                    label="Secondary"
                    variants="btn-outline-secondary"
                    size="sm"
                    text="capitalize"
                  />
                  <Buttons
                    label="Success"
                    variants="btn-outline-success"
                    size="sm"
                    text="capitalize"
                  />
                  <Buttons
                    label="Danger"
                    variants="btn-outline-danger"
                    size="sm"
                    text="capitalize"
                  />
                  <Buttons
                    label="Subtle"
                    variants="btn-outline-subtle"
                    size="sm"
                    text="capitalize"
                  />
                  <Buttons
                    label="White"
                    variants="btn-outline-white"
                    size="sm"
                    text="capitalize"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <div className="inline-flex flex-wrap gap-y-2.5 gap-x-2.5">
                  <Buttons
                    label="Primary"
                    variants="btn-outline-primary"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                  />
                  <Buttons
                    label="Secondary"
                    variants="btn-outline-secondary"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                  />
                  <Buttons
                    label="Success"
                    variants="btn-outline-success"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                  />
                  <Buttons
                    label="danger"
                    variants="btn-outline-danger"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                  />
                  <Buttons
                    label="Subtle"
                    variants="btn-outline-subtle"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                  />
                  <Buttons
                    label="White"
                    variants="btn-outline-white"
                    size="sm"
                    rounded="pill"
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

export default CustomsButtons;
