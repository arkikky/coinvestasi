import dynamic from "next/dynamic";
import Link from "next/link";

// Ui - Components
const PostLink = dynamic(() => import("@components/UI/Post/PostLink"));

const Buttons = ({
  typeBtn = "btn",
  className,
  url,
  type = "button",
  label,
  variants,
  size = null,
  rounded = null,
  text,
  position = null,
  withIcons = false,
  positionIcons = "left",
  children,
}) => {
  const addUrl = url ? url : "/";

  const addVariants =
    variants === "btn-primary"
      ? "btn-primary"
      : variants === "btn-secondary"
      ? "btn-secondary"
      : variants === "btn-success"
      ? "btn-success"
      : variants === "btn-danger"
      ? "btn-danger"
      : variants === "btn-subtle"
      ? "btn-subtle"
      : variants === "btn-white"
      ? "btn-white"
      : variants === "btn-outline-primary"
      ? "btn-outline-primary"
      : variants === "btn-outline-secondary"
      ? "btn-outline-secondary"
      : variants === "btn-outline-success"
      ? "btn-outline-success"
      : variants === "btn-outline-danger"
      ? "btn-outline-danger"
      : variants === "btn-outline-subtle"
      ? "btn-outline-subtle"
      : variants === "btn-outline-white"
      ? "btn-outline-white"
      : "btn-white";

  const addSize =
    size === "base"
      ? "btn"
      : size === "sm"
      ? "btn btn-sm"
      : size === "lg"
      ? "btn sm:btn-lg"
      : size
      ? size
      : "btn";

  const addRounded =
    rounded === "base"
      ? "btn-lg"
      : rounded === "pill"
      ? "btn-pill"
      : rounded === "square"
      ? "btn-square"
      : "btn-square";

  const addPosition =
    position === "center"
      ? "mx-auto"
      : position === "left"
      ? "mr-auto"
      : position === "right"
      ? "ml-auto"
      : "m-0";

  const addText =
    text === "uppercase"
      ? "uppercase"
      : text === "capitalize"
      ? "capitalize"
      : text === "lowercase"
      ? "lowercase"
      : "capitalize";

  const addTypeBtn = type ? type : "button";

  const defltClass = `${addSize} ${addVariants} ${addRounded} ${addText} ${addPosition}`;
  const addClassName = className
    ? `${defltClass} ${className}`
    : `${defltClass}`;

  return (
    <>
      {/* Buttons (Default) */}
      {typeBtn === "btn" && withIcons == false && (
        <button className={`${addClassName}`} type={addTypeBtn}>
          {label}
        </button>
      )}

      {/* Buttons (Status Disabled) */}
      {typeBtn === "btn-disabled" && withIcons == false && (
        <button
          className={`${addClassName} disabled`}
          type={addTypeBtn}
          disabled
        >
          {label}
        </button>
      )}

      {/* Buttons With Icons (Position Icons in Left) */}
      {typeBtn === "btn-icon" &&
        withIcons == true &&
        positionIcons == "left" && (
          <button className={`${addClassName}`} type={addTypeBtn}>
            {children}
            {label}
          </button>
        )}

      {/* Buttons With Icons (Position Icons in Right) */}
      {typeBtn === "btn-icon" &&
        withIcons == true &&
        positionIcons == "right" && (
          <button className={`${addClassName}`} type={addTypeBtn}>
            {label}
            {children}
          </button>
        )}

      {/* Buttons (Link) */}
      {typeBtn === "btn-link" && withIcons == false && (
        <PostLink url={addUrl}>
          <button className={`${addClassName}`} type={addTypeBtn}>
            {label}
          </button>
        </PostLink>
      )}

      {/* Buttons Link With Icons (Position Icons in Left) */}
      {typeBtn === "btn-link" &&
        withIcons == true &&
        positionIcons == "left" && (
          <PostLink url={addUrl}>
            <button className={`${addClassName}`} type={addTypeBtn}>
              {children}
              {label}
            </button>
          </PostLink>
        )}

      {/* Buttons Link With Icons (Position Icons in Right) */}
      {typeBtn === "btn-link" &&
        withIcons == true &&
        positionIcons == "right" && (
          <PostLink url={addUrl}>
            <button className={`${addClassName}`} type={addTypeBtn}>
              {label}
              {children}
            </button>
          </PostLink>
        )}

      {/* Buttons Blank Link (Open Link) */}
      {typeBtn === "btn-blank-link" && withIcons == false && (
        <PostLink typePost="blank-link" url={addUrl}>
          <button className={`${addClassName}`} type={addTypeBtn}>
            {label}
          </button>
        </PostLink>
      )}

      {/* Buttons Blank Link With Icons (Position Icons in Left) */}
      {typeBtn === "btn-blank-link" &&
        withIcons == true &&
        positionIcons == "left" && (
          <PostLink typePost="blank-link" url={addUrl}>
            <button className={`${addClassName}`} type={addTypeBtn}>
              {children}
              {label}
            </button>
          </PostLink>
        )}

      {/* Buttons Blank Link With Icons (Position Icons in Right) */}
      {typeBtn === "btn-blank-link" &&
        withIcons == true &&
        positionIcons == "right" && (
          <PostLink typePost="blank-link" url={addUrl}>
            <button className={`${addClassName}`} type={addTypeBtn}>
              {label}
              {children}
            </button>
          </PostLink>
        )}
    </>
  );
};

export default Buttons;
