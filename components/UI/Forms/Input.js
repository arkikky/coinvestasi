// Css
import Forms from "@styles/components/Forms.module.css";

const Input = ({
  typeInput,
  id,
  type,
  label,
  name,
  className,
  size,
  maxLength,
  placeholder,
  defaultValue,
  text,
}) => {
  const addClassName = className ? className : "";

  const addSize =
    size === "base"
      ? ""
      : size === "sm"
      ? `${Forms.formSmall}`
      : size === "lg"
      ? `${Forms.formLarge}`
      : size
      ? size
      : "";

  const addText =
    text === "uppercase"
      ? "uppercase"
      : text === "capitalize"
      ? "capitalize"
      : text === "lowercase"
      ? "lowercase"
      : "";

  return (
    <>
      {/* Input (Default) */}
      {typeInput === "default" && (
        <input
          id={id ? id : ""}
          className={`${Forms.form} ${addSize} ${addClassName}`}
          type={type ? type : ""}
          name={name ? name : ""}
          maxLength={maxLength ? maxLength : ""}
          placeholder={placeholder ? placeholder : ""}
          defaultValue={defaultValue ? defaultValue : ""}
          required
        />
      )}

      {/* Input (With Label) */}
      {typeInput === "with-label" && (
        <div className="flex flex-col relative">
          <label className={`${Forms.formLabel} ${addText} mb-2`} htmlFor={id}>
            {label}
          </label>
          <input
            id={id ? id : ""}
            className={`${Forms.form} ${addSize} ${addClassName}`}
            type={type ? type : ""}
            name={name ? name : ""}
            maxLength={maxLength ? maxLength : ""}
            placeholder={placeholder ? placeholder : ""}
            defaultValue={defaultValue ? defaultValue : ""}
            required
          />
        </div>
      )}
    </>
  );
};

export default Input;
