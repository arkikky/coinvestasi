const Container = ({ className, children }) => {
  const addClassName = className ? `container ${className}` : `container`;

  return (
    <>
      <div className={`${addClassName}`}>{children}</div>
    </>
  );
};

export default Container;
