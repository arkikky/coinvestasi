import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";

// Css
import "@splidejs/react-splide/css";
import Slider from "@styles/components/Slider.module.css";

const LyPublicationPartner = () => {
  return (
    <>
      <div className=" supports-grid:grid grid-cols-8 sm:grid-cols-24 gap-x-6 mt-8">
        <div className="col-start-1 sm:col-start-3 col-span-full sm:col-span-20 mx-0 sm:-mx-6">
          <Splide
            className={`${Slider.inlneBrandLogo} grayscleBrndLgo backdrpShadwBrndLgo`}
            tag="section"
            options={{
              type: "loop",
              updateOnMove: true,
              perPage: 5,
              perMove: 1,
              arrows: false,
              pagination: false,
              rewind: true,
              focus: "center",
              autoplay: true,
              lazyLoad: "sequential",
              gap: "48px",
              breakpoints: {
                1024: {
                  gap: "36px",
                },
                768: {
                  gap: "24px",
                },
                640: {
                  perPage: 3,
                  gap: "14px",
                },
              },
            }}
            hasTrack={false}
            aria-label="Publication Partner"
          >
            <SplideTrack>
              <SplideSlide>
                <img
                  data-splide-lazy="/assets/images/partner/publication/suara.png"
                  alt="Image 1"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  data-splide-lazy="/assets/images/partner/publication/detik.png"
                  alt="Image 2"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  data-splide-lazy="/assets/images/partner/publication/berita-satu.png"
                  alt="Image 3"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  data-splide-lazy="/assets/images/partner/publication/detik.png"
                  alt="Image 4"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  data-splide-lazy="/assets/images/partner/publication/detik.png"
                  alt="Image 5"
                />
              </SplideSlide>
              <SplideSlide>
                <img
                  data-splide-lazy="/assets/images/partner/publication/detik.png"
                  alt="Image 6"
                />
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </div>
      </div>
    </>
  );
};

export default LyPublicationPartner;
