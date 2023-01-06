import dynamic from "next/dynamic";

// Icons (Heroicons : https://unpkg.com/browse/@heroicons/react@2.0.13/24/outline/)
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

// Ui
const Buttons = dynamic(() => import("@components/UI/Buttons"));
const Input = dynamic(() => import("@components/UI/Forms/Input"));

const Subscribe = ({ id }) => {
  return (
    <>
      <section id={id} className={`bg-blue-700 py-6 px-0`}>
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-between relative">
            <p className="text-white w-full max-w-full sm:max-w-[381px] lg:max-w-[457px] xl:max-w-[597px]">
              <b>Coinvestasi Update</b> mendapatkan berita terbaru tentang
              kripto, blockchain langsung ke dalam inbox anda.
            </p>
            <div className="flex justify-end mt-4 sm:mt-0 w-full sm:w-max">
              <form
                id="formBannrSubscribe"
                className="flex flex-col w-full sm:w-max"
                method="POST"
                action={"/"}
              >
                <div className="flex flex-row items-center">
                  <Input
                    typeInput="default"
                    className="h-full w-full max-w-full sm:max-w-[246px]"
                    id="inptBnnerEmailSubscribe"
                    type="email"
                    name="email"
                    maxLength="80"
                    placeholder="mail@mail,sdf"
                  />
                  <Buttons
                    typeBtn="btn-icon"
                    className="leading-unset ml-2 px-3 lg:px-3 h-full"
                    type="submit"
                    label="Daftar"
                    variants="btn-outline-white"
                    position="center"
                    text="capitalize"
                    withIcons={true}
                    positionIcons="right"
                  >
                    <ArrowUpRightIcon className="stroke-current stroke-[2.5] ml-1 h-3 w-3" />
                  </Buttons>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Subscribe;
