import React from "react";
import { Layout, SEO } from "~/components/common";
import Link from "next/link";
// import TestImage from "@public/kurumsal-page.jpg";
import BireyselHizmetlerimizTasarimImage from "@public/bireysel-hizmetlerimiz-tasarim.jpg";
import BireyselHizmetlerimizUygulamaImage from "@public/bireysel-hizmetlerimiz-uygulama.jpg";
import BireyselHizmetlerimizBackgroundImage from "@public/bireysel-hizmetlerimiz-background.jpg";
import Image from "next/image";

const tasarimlar = [
  {
    id: 1,
    name: "Tasarım",
    image: BireyselHizmetlerimizTasarimImage.src,
    width: BireyselHizmetlerimizTasarimImage.width,
    height: BireyselHizmetlerimizTasarimImage.height,
    href: "/hizmetlerimiz/bireysel-hizmetlerimiz/tasarim",
  },
  {
    id: 2,
    name: "Uygulama",
    image: BireyselHizmetlerimizUygulamaImage.src,
    width: BireyselHizmetlerimizUygulamaImage.width,
    height: BireyselHizmetlerimizUygulamaImage.height,
    href: "/hizmetlerimiz/bireysel-hizmetlerimiz/uygulama",
  },
  //   {
  //     id: 3,
  //     name: "İç Mekan Peyzaj Tasarım",
  //     image: ic_mekan_payzaj_tasarim_image.src,
  //     width: TestImage.width,
  //     height: TestImage.height,
  //   },
  //   {
  //     id: 4,
  //     name: "Sert Peyzaj Tasarım",
  //     image: sert_peyzaj_tasarim_image.src,
  //     width: sert_peyzaj_tasarim_image.width,
  //     height: sert_peyzaj_tasarim_image.height,
  //   },
  //   {
  //     id: 5,
  //     name: "Yumuşak Peyzaj Tasarım",
  //     image: yumusak_peyzaj_tasarim_image.src,
  //     width: yumusak_peyzaj_tasarim_image.width,
  //     height: yumusak_peyzaj_tasarim_image.height,
  //   },
  //   {
  //     id: 6,
  //     name: "Sulama Sistemi Projelendirme",
  //     image: sulama_sistemi_projelendirme_image.src,
  //     width: sulama_sistemi_projelendirme_image.width,
  //     height: sulama_sistemi_projelendirme_image.height,
  //   },
];

export default function Bireysel() {
  return (
    <div className="flex flex-col items-center justify-center">
      <SEO title="Bireysel Hizmetlerimiz" description='Kahyaoğlu Peyzaj Bireysel Hizmetlerimiz' />

      {/* <div
        className="relative w-full bg-black bg-opacity-40 bg-cover bg-bottom bg-blend-darken"
        style={{
          backgroundImage: `url(${BireyselHizmetlerimizBackgroundImage.src})`,
        }}
      >
        <div className="py-52  text-center text-white">

          <h1 className="pb-8 text-3xl font-semibold">
            Bireysel Hizmetlerimiz
          </h1>
        </div>
      </div> */}
      <div
        className="w-full relative aspect-[2.2]
        "
      >

        <div className=" absolute inset-0 py-52 flex items-center justify-center  text-center text-white z-20">

          <h1 className="pb-8 text-3xl font-semibold">
            Bireysel Hizmetlerimiz
          </h1>
        </div>
        <div className="absolute inset-0 w-full z-0 aspect-[2.2]">
          <Image
            className=" mix-blend-darken  bg-black brightness-50 object-cover"
            src={BireyselHizmetlerimizBackgroundImage.src}
            fill
            alt="Kurumsal Tasarım"
            priority
          />
        </div>
      </div>
      <div className="grid w-full max-w-5xl grid-cols-1 gap-x-10  gap-y-4 py-8 px-8 md:grid-cols-2 md:py-20">
        <h2 className="text-4xl font-semibold">
          Doğanın güzelliklerini evinize taşımak için sizinle çalışmaya hazırız!
        </h2>
        <div>
          <p className="text-justify">
            Profesyonel ve deneyimli tasarımcılarımız, müşterilerimizin
            beklentilerini aşan peyzaj tasarımları sunmak için çalışıyor. Size
            özel tasarım seçenekleriyle, kişisel tarzınızı yansıtan ve evinize
            en uygun peyzaj tasarımını hayata geçiriyoruz.
          </p>
        </div>
      </div>
      <div className=" mt-4  grid w-full max-w-5xl grid-cols-2 gap-4 px-8 md:grid-cols-2">
        {tasarimlar.map((tasarim) => (
          <Link
            key={tasarim.id}
            href={tasarim.href}
            className="transition-all hover:scale-105"
          >
            <div className="text-center ">
              <Image
                className="aspect-square rounded-2xl object-cover
                            
                            "
                src={tasarim.image}
                alt={tasarim.name}
                width={tasarim.width}
                height={tasarim.height}
              ></Image>
              <span className="text-lg font-medium">{tasarim.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

Bireysel.Layout = Layout;
