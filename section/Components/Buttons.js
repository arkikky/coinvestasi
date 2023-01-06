import dynamic from "next/dynamic";

// Ui - Components
const Buttons = dynamic(() => import("@components/UI/Buttons"));

// Components
const SubHeadingComponents = dynamic(() =>
  import("@components/UI/Sub-Heading/SubHeadingComponents")
);

// Sections
const Customs = dynamic(() => import("@section/Components/Section/Customs"));
const LabelIcons = dynamic(() =>
  import("@section/Components/Section/LabelIcons")
);
const Icons = dynamic(() => import("@section/Components/Section/Icons"));
const Disabled = dynamic(() => import("@section/Components/Section/Disabled"));
const Link = dynamic(() => import("@section/Components/Section/Link"));
const LinkIcons = dynamic(() =>
  import("@section/Components/Section/LinkIcons")
);
const Size = dynamic(() => import("@section/Components/Section/Size"));

const SecButtons = () => {
  return (
    <>
      <article className="mt-20">
        <section className="supports-grid:grid grid-cols-12 gap-y-12 gap-x-6">
          {/* Solid Button */}
          <div className="col-span-full lg:col-span-6">
            <SubHeadingComponents
              title="Solid Button"
              desc="Gunakan gaya tombol default ini dengan beberapa warna untuk menunjukkan tindakan atau tautan."
            />
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

          {/* Outline Button */}
          <div className="col-span-full lg:col-span-6">
            <SubHeadingComponents
              title="Outline Button"
              desc="Gunakan gaya tombol default ini dengan beberapa warna untuk menunjukkan tindakan atau tautan."
            />
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
        </section>
      </article>

      {/* Customs Button */}
      <Customs />

      {/* Label with Icons Button */}
      <LabelIcons />

      {/* Icons Button */}
      <Icons />

      {/* Disable Button */}
      <Disabled />

      {/* Link Button */}
      <Link />

      {/* Link Button */}
      <LinkIcons />

      {/* Size Buttons */}
      <Size />
    </>
  );
};

export default SecButtons;
