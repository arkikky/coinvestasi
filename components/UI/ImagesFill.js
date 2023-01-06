import React from "react";
import Image from "next/legacy/image";

const ImagesFill = ({ className, src, alt, priority = false }) => {
  const lazyRoot = React.useRef(null);

  const defltClass = `relative`;
  const addClassName = className
    ? `${defltClass} ${className}`
    : `${defltClass}`;

  const addImags = src;
  const addImagsAlt = alt ? alt : "Coinvestasi (Images - Alt)";

  return (
    <>
      {priority === false && (
        <div ref={lazyRoot} className={`${addClassName}`}>
          <Image
            lazyRoot={lazyRoot}
            alt={addImagsAlt}
            src={addImags}
            layout={"fill"}
            objectFit={"cover"}
            objectPosition={"center"}
            quality="70"
            sizes="(max-width: 768px) 90vw,
              (max-width: 1200px) 70vw,
              90vw"
          />
        </div>
      )}

      {priority === true && (
        <div ref={lazyRoot} className={`${addClassName}`}>
          <Image
            lazyRoot={lazyRoot}
            alt={addImagsAlt}
            src={addImags}
            layout={"fill"}
            objectFit={"cover"}
            objectPosition={"center"}
            quality="70"
            sizes="(max-width: 768px) 90vw,
              (max-width: 1200px) 70vw,
              90vw"
            priority
          />
        </div>
      )}
    </>
  );
};

export default ImagesFill;
