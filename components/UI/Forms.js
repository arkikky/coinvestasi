const Forms = ({ id, className, method, action, children }) => {
  const addClassName = className ? className : "";
  const addMethod = method ? method : "POST";
  const addAction = action ? action : "/";

  return (
    <>
      <form
        id={id}
        className={`${addClassName}`}
        method={addMethod}
        action={addAction}
      >
        {children}
      </form>
    </>
  );
};

export default Forms;
