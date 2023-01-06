const SubHeading = ({
  typeSubHeading = "base",
  title,
  classDesc,
  description,
  children,
}) => {
  const addClassDesc = classDesc ? classDesc : "text-black-50";

  const addTitle = title ? title : `${process.env.NEXT_PUBLIC_TITLE_LOREM}`;
  const addDesc = description ? description : ``;

  return (
    <>
      {/* SubHeading (Default) */}
      {typeSubHeading === "base" && (
        <section
          className={`flex ${
            description ? "items-start" : "items-center"
          } justify-between`}
        >
          <div>
            {addTitle && <h2 className="text-black-100 h2">{addTitle}</h2>}
            {addDesc && (
              <p className={`${addClassDesc} text-body-base mt-2`}>{addDesc}</p>
            )}
          </div>
          {children && <div className="hidden sm:flex">{children}</div>}
        </section>
      )}

      {/* SubHeading With Buttons */}
      {typeSubHeading === "with-button" && (
        <section
          className={`flex ${
            description ? "items-start" : "items-center"
          } justify-between`}
        >
          <div>
            {addTitle && <h2 className="text-black-100 h2">{addTitle}</h2>}
            {addDesc && (
              <p className={`${addClassDesc} text-body-base mt-2`}>{addDesc}</p>
            )}
          </div>
          {children && <div className="hidden sm:flex">{children}</div>}
        </section>
      )}

      {/* SubHeading Link */}
      {typeSubHeading === "link" && (
        <section className={`flex flex-col w-max`}>
          <h2 className="flex flex-row items-center text-black-100 h2">
            {addTitle} {children}
          </h2>
        </section>
      )}
    </>
  );
};

export default SubHeading;
