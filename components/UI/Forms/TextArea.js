// Css
import Forms from "@styles/components/Forms.module.css";

const Textarea = ({
  typeTextarea,
  id,
  type,
  label,
  name,
  className,
  size,
  rows,
  maxLength,
  placeholder,
  defaultValue,
  textLabel,
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

  const addTextLabel =
    textLabel === "uppercase"
      ? "uppercase"
      : textLabel === "capitalize"
      ? "capitalize"
      : textLabel === "lowercase"
      ? "lowercase"
      : "";

  return (
    <>
      {/* Textarea (Default) */}
      {typeTextarea === "default" && (
        <textarea
          id={id ? id : ""}
          className={`${Forms.form} ${addSize} ${addClassName}`}
          type={type ? type : ""}
          name={name ? name : ""}
          maxLength={maxLength ? maxLength : ""}
          placeholder={placeholder ? placeholder : ""}
          defaultValue={defaultValue ? defaultValue : ""}
          required
        ></textarea>
      )}

      {/* Textarea (With Label) */}
      {typeTextarea === "with-label" && (
        <div className="flex flex-col relative">
          <label
            className={`${Forms.formLabel} ${addTextLabel} mb-2`}
            htmlFor={id}
          >
            {label}
          </label>
          <textarea
            id={id ? id : ""}
            className={`${Forms.form} ${addSize} ${addClassName}`}
            type={type ? type : ""}
            name={name ? name : ""}
            rows={rows ? rows : ""}
            maxLength={maxLength ? maxLength : ""}
            placeholder={placeholder ? placeholder : ""}
            defaultValue={defaultValue ? defaultValue : ""}
            required
          ></textarea>
        </div>
      )}
    </>
  );
};

export default Textarea;
