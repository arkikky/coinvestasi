import dynamic from "next/dynamic";

// Components
const SubHeadingComponents = dynamic(() =>
  import("@components/UI/Sub-Heading/SubHeadingComponents")
);

const SecTypography = () => {
  return (
    <>
      <article>
        <SubHeadingComponents
          title="Typography"
          desc="Tipografi yang dibuat dengan Tailwind CSS. Gunakan kelas tipografi yang berbeda untuk mengubah bagian depan dan dekorasi teks."
        />
        <section className="supports-grid:grid grid-cols-12 gap-y-12 gap-x-6">
          <div className="col-span-full lg:col-span-6">
            <div className="supports-grid:grid gap-y-4">
              <h1>H1 - Display 1</h1>
              <h2>H2 - Display 2</h2>
              <h3>H3 - Display 3</h3>
              <h4>H4 - Display 4</h4>
              <h5>H5 - Display 5</h5>
              <h6>H6 - Display 6</h6>
            </div>

            <div className="supports-grid:grid gap-y-4 mt-6">
              <span className="text-body-lg">Text Body - Large</span>
              <span className="text-body-base">Text Body - Base</span>
              <span className="text-body-sm">Text Body - Small</span>
              <span className="text-body-caption">Text Body - Caption</span>
            </div>
          </div>
          <div className="col-span-full lg:col-span-6 supports-grid:grid gap-y-4">
            <div className="flex flex-col">
              <label className="text-black-100 text-lg font-semibold">
                Paragraph
              </label>
              <p className="text-gray-300 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                tempor nisl aliquam vulputate vel habitant enim urna, tincidunt.
                Et odio nulla ut egestas est non sagittis sit dui. Elementum
                massa quam cras id. Sed ultricies vestibulum odio convallis
                condimentum proin pellentesque ut dui. Vitae mi et elit ut orci.
                Viverra ut enim at aliquet dictum elementum luctus ut nec. Eget
                laoreet feugiat lectus vulputate. Id placerat elementum leo
                quis. Semper pretium tempus sem metus condimentum. Sed orci est
                sit urna, in hendrerit est sed sed. Sit vitae odio imperdiet...
              </p>
            </div>
            <div className="flex flex-col">
              <label className="text-black-100 font-semibold">Word Break</label>
              <p className="text-gray-300 break-all mt-3">
                mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
              </p>
            </div>
            <div className="flex flex-col">
              <label className="text-black-100 font-semibold">
                Text Transform
              </label>
              <div className="mt-3">
                <p className="text-gray-300 lowercase">Lowercased Text.</p>
                <p className="text-gray-300 uppercase">Uppercased Text</p>
                <p className="text-gray-300 capitalize">capitalized text.</p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default SecTypography;
