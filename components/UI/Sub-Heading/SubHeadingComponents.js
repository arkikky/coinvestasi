const SubHeadingComponents = ({ title, desc }) => {
  return (
    <>
      <section
        className={`flex flex-col ${
          desc != null ? "mb-8 sm:mb-10" : "mb-8"
        } pr-8 xl:pr-16 w-full`}
      >
        <h1 className="text-blue-600">{title}</h1>
        {desc && (
          <p className="text-gray-200 font-medium mt-2">{desc}</p>
        )}
      </section>
    </>
  );
};

export default SubHeadingComponents;
