import dynamic from "next/dynamic";

// Icons (Heroicons : https://unpkg.com/browse/@heroicons/react@2.0.13/24/outline/)
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

// Ui - Components
const Forms = dynamic(() => import("@components/UI/Forms"));
const Input = dynamic(() => import("@components/UI/Forms/Input"));
const Buttons = dynamic(() => import("@components/UI/Buttons"));

const CardSubscribe = dynamic(() => import("@components/UI/Card/Subscribe"));

const SecSubscribe = () => {
  return (
    <>
      <CardSubscribe
        id="bnnerSubscribe"
        description="<b>Coinvestasi Update</b> mendapatkan berita terbaru tentang kripto, blockchain langsung ke dalam inbox anda."
      >
        <Forms
          id="formSubscribe"
          className="flex flex-col"
          method="POST"
          action={"/"}
        >
          <div className="flex flex-row items-center">
            <Input
              typeInput="default"
              className="h-full w-full max-w-full"
              id="inptEmailSubscribe"
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
              <ArrowUpRightIcon className="stroke-current stroke-[3.5] ml-1 h-3 w-3" />
            </Buttons>
          </div>
        </Forms>
      </CardSubscribe>
    </>
  );
};
export default SecSubscribe;
