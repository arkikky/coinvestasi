// Css
import SubHeading from "@styles/components/SubHeading.module.css";

const SubHeadingWithBorder = ({ title, variants }) => {
  const addVariants =
    variants === "bottom" ? SubHeading.subHdingBorderBottom : "";

  return (
    <>
      <section
        className={`${addVariants} flex flex-col mb-4 pr-8 xl:pr-16 pb-4 w-full`}
      >
        <h2 className="text-black-100 text-xl sm:h3">{title}</h2>
      </section>
    </>
  );
};

export default SubHeadingWithBorder;
