import { useState } from "react";

import dynamic from "next/dynamic";

import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";

// Ui - Components
const Container = dynamic(() => import("@components/Container"));

const CardLearnCrypto = dynamic(() =>
  import("@components/UI/Card/StudyCrypto")
);

// Css
import "@splidejs/react-splide/css";

// Json
import mockLernBisaCrypto from "@utils/json/article/study-bisacrypto.json";

const LyLearnBisaCrypto = () => {
  const [intStdyBisaCrypto, stStdyBisaCrypto] = useState(mockLernBisaCrypto);
  return (
    <>
      <Container className={"px-0 sm:px-auto"}>
        <div className="supports-grid:grid grid-cols-8 sm:grid-cols-12 gap-y-6 gap-x-6 mt-8">
          <div className="col-span-full">
            <Splide
              tag="section"
              options={{
                updateOnMove: true,
                perPage: 3,
                perMove: 1,
                drag: false,
                arrows: false,
                pagination: false,
                rewind: false,
                gap: "24px",
                breakpoints: {
                  1024: {
                    drag: true,
                    perPage: 1,
                    fixedWidth: "392px",
                  },
                  768: {
                    drag: true,
                    fixedWidth: "378px",
                  },
                  640: {
                    drag: true,
                    perPage: 1,
                    fixedWidth: "326px",
                    gap: "16px",
                    padding: { left: "16px", right: "16px" },
                  },
                },
              }}
              hasTrack={false}
              aria-label="Materi SemuaBisaCrypto"
            >
              <SplideTrack>
                {intStdyBisaCrypto.map((dtStdyBisaCrypto) => (
                  <SplideSlide key={dtStdyBisaCrypto.id}>
                    <CardLearnCrypto {...dtStdyBisaCrypto} />
                  </SplideSlide>
                ))}
              </SplideTrack>
            </Splide>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LyLearnBisaCrypto;
