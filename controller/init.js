const bseURL = `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}`;

export async function getStaticFetch(gtUrl) {
  const stData = await fetch(gtUrl, {
    cache: "force-cache" | "no-store",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch(() => {
      return false;
    });

  return stData;
}

export async function getDynamicFetch(gtUrl) {
  const stData = await fetch(bseURL + gtUrl, {
    cache: "force-cache" | "no-store",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch(() => {
      return false;
    });

  return stData;
}

export async function getFeaturedImgs(gtUrl) {
  const stImgs = await fetch(gtUrl, {
    cache: "force-cache" | "no-store",
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .catch(() => {
      return false;
    });

  return stImgs;
}

export async function getFeed(slug) {
  const gtDtaArr = await getFeeds();
  const stDtaArr = gtDtaArr.filter((feed) => feed.slug == slug);
  const stArr = stDtaArr.length > 0 ? stDtaArr[0] : null;

  return stArr;
}

export async function getSlugs(type) {
  let stElmnts = [];
  switch (type) {
    case "feeds":
      stElmnts = await getFeeds();
      break;
  }
  const stElmntsIds = stElmnts.map((elmnt) => {
    return {
      params: {
        slug: elmnt.slug,
      },
    };
  });

  return stElmntsIds;
}

export async function getStaticFeeds(base) {
  const resFeeds = await fetch(base);
  const stFeeds = await resFeeds.json();

  return stFeeds;
}

export async function getFeeds() {
  const gtBaseRes = await fetch(bseURL + "/berita?_embed");
  const stBase = await gtBaseRes.json();

  return stBase;
}
