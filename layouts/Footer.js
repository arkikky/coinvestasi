import { useState } from "react";

import dynamic from "next/dynamic";
import Image from "next/legacy/image";
import Link from "next/link";

// Css
import Footr from "@styles/layouts/Footer.module.css";

// Ui - Components
const Container = dynamic(() => import("@components/Container"));
const Post = dynamic(() => import("@components/UI/Post/Post"));

// Components
const FooterSubscribe = dynamic(() =>
  import("@components/section/Banner/FooterSubscribe")
);

// Json
import mockSocMediaFootr from "@utils/json/social-media/footer.json";

const Footer = () => {
  const [intSocMedia, stSocMedia] = useState(mockSocMediaFootr);

  const gToday = new Date();
  const gYears = gToday.getFullYear();

  return (
    <>
      {/* Banner (Subscribe) */}
      <FooterSubscribe id={"footrBnnerSubscribe"} />

      {/* Footer */}
      <footer id="footer" className={Footr.footr}>
        <Container>
          <div className="supports-grid:grid grid-cols-12 gap-x-6 pt-8 pb-6">
            <div className="col-span-full xl:col-span-3">
              <section className="w-full max-w-full sm:max-w-[530px] xl:max-w-full">
                <div className="flex flex-col">
                  <div className="flex relative">
                    <Image
                      alt="Coinvestasi (LOGO)"
                      src="/assets/images/coinvestasi.svg"
                      height={28}
                      width={178}
                    />
                  </div>
                  <p className="text-gray-400 text-sm font-normal leading-relaxed mt-4 pr-6">
                    {`Coinvestasi adalah media Indonesia terkemuka untuk berita
                    dan informasi terkait aset kripto, aset digital, teknologi
                    blockchain, dan web3.`}
                  </p>
                </div>
                <div className="relative mt-4">
                  <h3 className="text-white text-body-caption sm:text-body-sm font-medium">
                    {`Terdaftar di`}
                  </h3>
                  <ul className="inline-flex items-center flex-wrap gap-y-3 gap-x-6 xl:gap-x-3 2xl:gap-x-6 list-none xl:mx-0 mt-2 w-full">
                    <li className="relative flex items-center">
                      <Image
                        src="/assets/images/presents/kominfo.png"
                        alt="Coinvestasi (Footer - Presents)"
                        layout="fill"
                        objectFit="contain"
                      />
                    </li>
                    <li className="relative flex items-center">
                      <Image
                        src="/assets/images/presents/direktorat-jendral-kekayaan-intelektual.png"
                        alt="Coinvestasi (Footer - Presents)"
                        height={32}
                        width={168}
                      />
                    </li>
                  </ul>
                </div>
                <div className="relative mt-4">
                  <h3 className="text-white text-body-caption sm:text-body-sm font-medium">
                    {`Anggota dari`}
                  </h3>
                  <ul className="inline-flex items-center flex-wrap gap-y-3 gap-x-6 xl:gap-x-3 2xl:gap-x-6 list-none xl:mx-0 mt-2 w-full">
                    <li className="relative flex items-center">
                      <Image
                        src="/assets/images/presents/member/asosiasi-blockchain-indonesia.png"
                        alt="Coinvestasi (Footer - Presents)"
                        height={33}
                        width={100}
                      />
                    </li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="col-span-full xl:col-span-9 mt-8 xl:mt-0 pl-0 xl:pl-4">
              <div className="columns-2 sm:supports-grid:grid sm:grid-cols-4 lg:grid-cols-7 2xl:grid-cols-6 gap-y-6 sm:gap-y-8 lg:gap-y-0 xl:gap-x-24 2xl:gap-x-4 lg:gap-x-10">
                <div
                  id="berita"
                  className={`${Footr.footrGroupMnu} w-full min-w-max`}
                >
                  <h3 className="ftoor-heading text-white text-base font-semibold tracking-tight">
                    {`Berita`}
                  </h3>
                  <ul className="menu mt-2">
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Analisis"
                    />
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Bitcoin"
                    />
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Altcoins"
                    />
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Teknologi"
                    />
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Industri"
                    />
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Regulasi"
                    />
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Siaran Pers"
                    />
                  </ul>
                </div>
                <div
                  id="belajar"
                  className={`${Footr.footrGroupMnu} w-full min-w-max`}
                >
                  <h3 className="ftoor-heading text-white text-base font-semibold tracking-tight">
                    {`Belajar`}
                  </h3>
                  <ul className="menu mt-2">
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Pemula"
                    />
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Menengah"
                    />
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Ahli"
                    />
                  </ul>
                </div>
                <div
                  id="aplikasi"
                  className={`${Footr.footrGroupMnu} break-inside-avoid-column w-full min-w-max`}
                >
                  <h3 className="ftoor-heading text-white text-base font-semibold tracking-tight">
                    {`Aplikasi`}
                  </h3>
                  <ul className="menu mt-2">
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Exchange"
                    />
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="DeFi"
                    />
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Gaming"
                    />
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Komparasi"
                    />
                  </ul>
                </div>
                <div
                  id="harga"
                  className={`${Footr.footrGroupMnu} w-full min-w-max`}
                >
                  <h3 className="ftoor-heading text-white text-base font-semibold tracking-tight">
                    {`Harga`}
                  </h3>
                  <ul className="menu mt-2">
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Harga Bitcoin"
                    />
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Harga Ethereum"
                    />
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Harga Shiba Inu"
                    />
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Harga BNB"
                    />
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Semua Harga"
                    />
                  </ul>
                </div>
                <div
                  id="resources"
                  className={`${Footr.footrGroupMnu} w-full min-w-max`}
                >
                  <h3 className="ftoor-heading text-white text-base font-semibold tracking-tight">
                    {`Resources`}
                  </h3>
                  <ul className="menu mt-2">
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Acara"
                    />
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Kosakata"
                    />
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Riset"
                    />
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Bitcoin Gratis"
                    />
                  </ul>
                </div>
                <div
                  id="company"
                  className={`${Footr.footrGroupMnu} w-full min-w-max`}
                >
                  <h3 className="ftoor-heading text-white text-base font-semibold tracking-tight">
                    {`Company`}
                  </h3>
                  <ul className="menu mt-2">
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Tentang Kami"
                    />
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Karir"
                    />
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Menjadi Kontributor"
                    />
                    <Post
                      typePost="link"
                      className={"menu-item"}
                      url="/"
                      title="Advertise"
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={Footr.footrEnd}>
            <ul className="flex flex-wrap gap-4 list-none mx-0 w-max">
              {intSocMedia.map((dtScMedia) => (
                <li key={dtScMedia.id} className=" leading-[0] relative">
                  <Link
                    href={dtScMedia.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={dtScMedia.icons}
                      alt="Coinvestasi (Social Media)"
                      height={24}
                      width={24}
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-blue-300 text-sm text-left lg:text-center mt-4 lg:mt-0">
              {`© ${gYears} Coinvestasi. All rights reserved.`}
            </p>
            <ul
              className={
                Footr.footrLbelLink + " text-white text-sm mt-4 lg:mt-0"
              }
            >
              <Post
                typePost="blank-link"
                className={"relative"}
                url="/"
                title="Terms"
              />
              <Post
                typePost="blank-link"
                className={"relative"}
                url="/"
                title="Privacy"
              />
              <Post
                typePost="blank-link"
                className={"relative"}
                url="/"
                title="Panduan Media Siber"
              />
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
