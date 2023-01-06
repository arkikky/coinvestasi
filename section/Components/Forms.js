import dynamic from "next/dynamic";

// Ui - Components
const Input = dynamic(() => import("@components/UI/Forms/Input"));
const TextArea = dynamic(() => import("@components/UI/Forms/TextArea"));

// Components
const SubHeadingComponents = dynamic(() =>
  import("@components/UI/Sub-Heading/SubHeadingComponents")
);

const SecForms = () => {
  return (
    <>
      <article className="relative mt-20">
        <SubHeadingComponents
          title="Form"
          desc="Ini adalah contoh komponen formulir termasuk text, email, kata sandi, kotak centang, tombol dan dropdown select kirim yang dapat Anda gunakan sebagai titik awal untuk elemen formulir apa pun"
        ></SubHeadingComponents>
        <div className="supports-grid:grid grid-cols-8 sm:grid-cols-12 gap-x-8">
          <div className="col-span-full xl:col-span-8">
            <div className="supports-grid:grid grid-cols-8 sm:grid-cols-12 gap-y-6 gap-x-6">
              {/* Name */}
              <div className="col-span-full">
                <Input
                  typeInput="with-label"
                  label={"Nama"}
                  textLabel={"capitalize"}
                  id={"inptNama"}
                  type={"text"}
                  name={"name"}
                  maxLength={"80"}
                  placeholder={"Masukkan nama lengkap Anda"}
                />
              </div>

              {/* Email */}
              <div className="col-span-full lg:col-span-6">
                <Input
                  typeInput="with-label"
                  label={"Email"}
                  textLabel={"capitalize"}
                  id={"inptEmail"}
                  type={"email"}
                  name={"email"}
                  maxLength={"80"}
                  placeholder={"Masukkan email lengkap Anda"}
                />
              </div>

              {/* No Phone */}
              <div className="col-span-full lg:col-span-6">
                <Input
                  typeInput="with-label"
                  label={"No Phone"}
                  textLabel={"capitalize"}
                  id={"inptNoPhone"}
                  type={"number"}
                  name={"no_phone"}
                  maxLength={"80"}
                  placeholder={"Masukkan no.telp yang masih aktif"}
                />
              </div>

              {/* Password */}
              <div className="col-span-full">
                <Input
                  typeInput="with-label"
                  label={"Password"}
                  textLabel={"capitalize"}
                  id={"inptPassword"}
                  type={"password"}
                  name={"password"}
                  maxLength={"80"}
                  placeholder={"Masukkan password Anda"}
                />
              </div>

              {/* TextArea */}
              <div className="col-span-full">
                <TextArea
                  typeTextarea="with-label"
                  label={"Pesan"}
                  textLabel={"capitalize"}
                  id={"inptPesan"}
                  type={"text"}
                  name={"pesan"}
                  rows="8"
                  maxLength={"255"}
                  placeholder={"Masukkan pesan Anda"}
                />
              </div>

              {/* Jam */}
              <div className="col-span-full lg:col-span-6">
                <Input
                  typeInput="with-label"
                  label={"Jam"}
                  textLabel={"capitalize"}
                  id={"inptJam"}
                  type={"time"}
                  name={"jam"}
                />
              </div>
            </div>
          </div>
          <div className="col-span-full xl:col-span-4"></div>
        </div>
      </article>

      {/* Size (Forms) */}
      <article className="mt-20">
        <section className="supports-grid:grid grid-cols-8 sm:grid-cols-12 gap-y-12 gap-x-6">
          <div className="col-span-full lg:col-span-6">
            <SubHeadingComponents
              title="Size Form"
              desc="Gunakan kelas utilitas berikut untuk membuat tiga opsi ukuran yang berbeda (Besar, Default dan Kecil)
                untuk elemen input pada formulir Anda."
            />
            <div className="supports-grid:grid grid-cols-8 sm:grid-cols-12 gap-y-6 gap-x-6">
              {/* Large */}
              <div className="col-span-full">
                <Input
                  typeInput="with-label"
                  label={"Large"}
                  id={"inptLarge"}
                  type={"text"}
                  name={"large"}
                  size="lg"
                  maxLength={"80"}
                  placeholder={"Masukkan nama lengkap Anda"}
                />
              </div>

              {/* Base */}
              <div className="col-span-full">
                <Input
                  typeInput="with-label"
                  label={"Base"}
                  id={"inptBase"}
                  type={"text"}
                  name={"base"}
                  maxLength={"80"}
                  placeholder={"Masukkan nama lengkap Anda"}
                />
              </div>

              {/* Small */}
              <div className="col-span-full">
                <Input
                  typeInput="with-label"
                  label={"Small"}
                  id={"inptSmall"}
                  type={"text"}
                  name={"small"}
                  size="sm"
                  maxLength={"80"}
                  placeholder={"Masukkan nama lengkap Anda"}
                />
              </div>
            </div>
          </div>

          <div className="col-span-full lg:col-span-6">
            <SubHeadingComponents
              title="Status Form"
              desc="Gunakan kelas utilitas berikut untuk membuat tiga opsi ukuran yang berbeda (Besar, Medium, dan Default)
                untuk elemen input pada formulir Anda."
            />
            <div className="supports-grid:grid grid-cols-8 sm:grid-cols-12 gap-y-6 gap-x-6">
              {/* Success */}
              <div className="col-span-full">
                <Input
                  typeInput="with-label"
                  label={"Success"}
                  id={"inptSuccess"}
                  type={"text"}
                  name={"success"}
                  size="lg"
                  maxLength={"80"}
                  placeholder={"Masukkan nama lengkap Anda"}
                />
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
};

export default SecForms;
