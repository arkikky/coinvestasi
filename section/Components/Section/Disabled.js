import dynamic from "next/dynamic";

// Ui - Components
const Buttons = dynamic(() => import("@components/UI/Buttons"));

// Components
const SubHeadingComponents = dynamic(() =>
  import("@components/UI/Sub-Heading/SubHeadingComponents")
);

const DisabledButtons = () => {
  return (
    <>
      <article className="mt-20">
        <SubHeadingComponents
          title="Disable Button"
          desc="Gunakan gaya berikut untuk menunjukkan tombol yang dinonaktifkan."
        ></SubHeadingComponents>
        <section className="supports-grid:grid grid-cols-12 gap-y-12 gap-x-6">
          {/* Disabled (Solid Button) */}
          <div className="col-span-full lg:col-span-6">
            <div className="grid grid-cols-12 gap-y-6 gap-x-6">
              <div className="col-span-full">
                <div className="inline-flex flex-wrap gap-y-2.5 gap-x-2.5">
                  <Buttons
                    typeBtn="btn-disabled"
                    label="Primary"
                    variants="btn-primary"
                    size="sm"
                    text="capitalize"
                  />
                  <Buttons
                    typeBtn="btn-disabled"
                    label="Secondary"
                    variants="btn-secondary"
                    size="sm"
                    text="capitalize"
                  />
                  <Buttons
                    typeBtn="btn-disabled"
                    label="Success"
                    variants="btn-success"
                    size="sm"
                    text="capitalize"
                  />
                  <Buttons
                    typeBtn="btn-disabled"
                    label="Danger"
                    variants="btn-danger"
                    size="sm"
                    text="capitalize"
                  />
                  <Buttons
                    typeBtn="btn-disabled"
                    label="Subtle"
                    variants="btn-subtle"
                    size="sm"
                    text="capitalize"
                  />
                  <Buttons
                    typeBtn="btn-disabled"
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
                    typeBtn="btn-disabled"
                    label="Primary"
                    variants="btn-primary"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                  />
                  <Buttons
                    typeBtn="btn-disabled"
                    label="Secondary"
                    variants="btn-secondary"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                  />
                  <Buttons
                    typeBtn="btn-disabled"
                    label="Success"
                    variants="btn-success"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                  />
                  <Buttons
                    typeBtn="btn-disabled"
                    label="Danger"
                    variants="btn-danger"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                  />
                  <Buttons
                    typeBtn="btn-disabled"
                    label="Subtle"
                    variants="btn-subtle"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                  />
                  <Buttons
                    typeBtn="btn-disabled"
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

          {/* Disabled (Outline Button) */}
          <div className="col-span-full lg:col-span-6">
            <div className="grid grid-cols-12 gap-y-6 gap-x-6">
              <div className="col-span-full">
                <div className="inline-flex flex-wrap gap-y-2.5 gap-x-2.5">
                  <Buttons
                    typeBtn="btn-disabled"
                    label="Primary"
                    variants="btn-outline-primary"
                    size="sm"
                    text="capitalize"
                  />
                  <Buttons
                    typeBtn="btn-disabled"
                    label="Secondary"
                    variants="btn-outline-secondary"
                    size="sm"
                    text="capitalize"
                  />
                  <Buttons
                    typeBtn="btn-disabled"
                    label="Success"
                    variants="btn-outline-success"
                    size="sm"
                    text="capitalize"
                  />
                  <Buttons
                    typeBtn="btn-disabled"
                    label="Danger"
                    variants="btn-outline-danger"
                    size="sm"
                    text="capitalize"
                  />
                  <Buttons
                    typeBtn="btn-disabled"
                    label="Subtle"
                    variants="btn-outline-subtle"
                    size="sm"
                    text="capitalize"
                  />
                  <Buttons
                    typeBtn="btn-disabled"
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
                    typeBtn="btn-disabled"
                    label="Primary"
                    variants="btn-outline-primary"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                  />
                  <Buttons
                    typeBtn="btn-disabled"
                    label="Secondary"
                    variants="btn-outline-secondary"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                  />
                  <Buttons
                    typeBtn="btn-disabled"
                    label="Success"
                    variants="btn-outline-success"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                  />
                  <Buttons
                    typeBtn="btn-disabled"
                    label="Danger"
                    variants="btn-outline-danger"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                  />
                  <Buttons
                    typeBtn="btn-disabled"
                    label="Subtle"
                    variants="btn-outline-subtle"
                    size="sm"
                    rounded="pill"
                    text="capitalize"
                  />
                  <Buttons
                    typeBtn="btn-disabled"
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

export default DisabledButtons;
