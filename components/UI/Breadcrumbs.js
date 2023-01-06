// Css
import Bredcrumbs from "@styles/components/Breadcrumbs.module.css";

const Breadcrumbs = ({ typeBreadcrumbs = "base", className, children }) => {
  const addClassName = className ? `${className}` : `${className}`;

  return (
    <>
      {/* Breadcrumbs (Default) */}
      {typeBreadcrumbs == "base" && children && (
        <nav className="scrllBrX flex flex-wrap overflow-x-auto scrollbar-hide relative pb-0 w-full">
          <ul
            className={`${Bredcrumbs.bredcrumbs} font-inter text-body-sm font-medium ${addClassName}`}
          >
            {children}
          </ul>
        </nav>
      )}

      {/* Breadcrumbs (Line Rotate) */}
      {typeBreadcrumbs == "line-rotate" && children && (
        <nav className="scrllBrX flex flex-wrap overflow-x-auto scrollbar-hide relative pb-0 w-full">
          <ul
            className={`${Bredcrumbs.bredcrumbs} ${Bredcrumbs.bredcrumbsRotate} font-inter text-body-sm font-medium ${addClassName}`}
          >
            {children}
          </ul>
        </nav>
      )}

      {/* Breadcrumbs (Pointer) */}
      {typeBreadcrumbs == "pointer" && children && (
        <nav className="scrllBrX flex flex-wrap overflow-x-auto scrollbar-hide relative pb-0 w-full">
          <ul
            className={`${Bredcrumbs.bredcrumbs} ${Bredcrumbs.bredcrumbsPointer} font-inter text-body-sm font-medium ${addClassName}`}
          >
            {children}
          </ul>
        </nav>
      )}

      {/* Breadcrumbs (Carret) */}
      {typeBreadcrumbs == "carret" && children && (
        <nav className="scrllBrX flex flex-wrap overflow-x-auto scrollbar-hide relative pb-0 w-full">
          <ul
            className={`${Bredcrumbs.bredcrumbs} ${Bredcrumbs.bredcrumbsCarret} font-inter text-body-sm font-medium ${addClassName}`}
          >
            {children}
          </ul>
        </nav>
      )}

      {/* Breadcrumbs (Tags) */}
      {typeBreadcrumbs == "tags" && children && (
        <nav className="scrllBrX flex flex-wrap overflow-x-auto scrollbar-hide relative pb-0 w-full snap-x">
          <ul
            className={`${Bredcrumbs.bredcrumbs} ${Bredcrumbs.bredcrumbsTags} font-inter text-body-sm sm:text-body-base font-medium sm:font-medium ${addClassName}`}
          >
            {children}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Breadcrumbs;
