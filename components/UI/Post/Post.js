import Link from "next/link";

const Post = ({ typePost = "base", className, url, title }) => {
  const addClassName = className ? className : "";

  const addUrl = url ? url : "";
  const addTitle = title ? title : "This Post";

  return (
    <>
      {/* Post (Default) */}
      {typePost === "base" && <li className={`${addClassName}`}>{addTitle}</li>}

      {/* Post (With Link) */}
      {typePost === "link" && (
        <li className={`${addClassName}`}>
          <Link href={addUrl} prefetch={false} passHref>
            {addTitle}
          </Link>
        </li>
      )}

      {/* Post (With Blank Link) */}
      {typePost === "blank-link" && (
        <li className={`${addClassName}`}>
          <Link
            href={addUrl}
            target="_blank"
            rel="noopener noreferrer"
            prefetch={false}
            passHref
          >
            {addTitle}
          </Link>
        </li>
      )}
    </>
  );
};

export default Post;
