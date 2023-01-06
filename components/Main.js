const Main = ({ className, children }) => {
  const defltClass = `mt-[108px] pb-6 sm:pb-8 lg:pb-12 xl:pb-[86px]`;

  const addClassName = className
    ? `${defltClass} ${className}`
    : `${defltClass}`;

  return (
    <>
      <main className={`${addClassName}`}>{children}</main>
    </>
  );
};

export default Main;
