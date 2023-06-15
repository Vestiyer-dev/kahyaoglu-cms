import React from "react";
import { Layout, SEO } from "~/components/common";

import KurumsalTasarimBackgroundImage from "@public/kurumsal-tasarim-background.jpg";
import tasarim_image from "@public/3d-tasarim.jpg";
import SiteTasarimImage from "@public/site-tasarim.jpg";
import sert_peyzaj_tasarim_image from "@public/sert-peyzaj-tasarim.jpg";
import sulama_sistemi_projelendirme_image from "@public/sulama_sistemi_projelendirme.jpg";
import ic_mekan_payzaj_tasarim_image from "@public/ic-mekan-peyzaj-tasarim.jpg";
import yumusak_peyzaj_tasarim_image from "@public/yumusak-peyzaj-tasarim.jpg";
import DisMekanAydinlatmaImage from "@public/bahce-aydinlatma.jpg";
import Image from "next/image";

const tasarimlar = [
  {
    id: 1,
    name: "Peyzaj Proje Tasarım",
    image: SiteTasarimImage.src,
    width: SiteTasarimImage.width,
    height: SiteTasarimImage.height,
  },
  {
    id: 2,
    name: "3 Boyutlu Tasarım",
    image: tasarim_image.src,
    width: tasarim_image.width,
    height: tasarim_image.height,
  },
  {
    id: 3,
    name: "İç Mekan Peyzaj Tasarım",
    image: ic_mekan_payzaj_tasarim_image.src,
    width: ic_mekan_payzaj_tasarim_image.width,
    height: ic_mekan_payzaj_tasarim_image.height,
  },
  {
    id: 4,
    name: "Sert Peyzaj Tasarım",
    image: sert_peyzaj_tasarim_image.src,
    width: sert_peyzaj_tasarim_image.width,
    height: sert_peyzaj_tasarim_image.height,
  },
  {
    id: 5,
    name: "Yumuşak Peyzaj Tasarım",
    image: yumusak_peyzaj_tasarim_image.src,
    width: yumusak_peyzaj_tasarim_image.width,
    height: yumusak_peyzaj_tasarim_image.height,
  },
  {
    id: 6,
    name: "Sulama Sistemi Projelendirme",
    image: sulama_sistemi_projelendirme_image.src,
    width: sulama_sistemi_projelendirme_image.width,
    height: sulama_sistemi_projelendirme_image.height,
  },
  {
    id: 7,
    name: "Dış Mekan Aydınlatma Projelendirme",
    image: DisMekanAydinlatmaImage.src,
    width: DisMekanAydinlatmaImage.width,
    height: DisMekanAydinlatmaImage.height,
  },
];

export default function Tasarim() {
  return (
    <div className="flex flex-col items-center justify-center">
      <SEO
        title="Tasarım - Kurumsal Hizmetlerimiz"
        description="Kahyaoğlu Peyzaj Kurumsal Hizmetlerimiz Tasarım"
      />
      {/* <div
        className="relative w-full bg-black bg-opacity-40 bg-cover bg-blend-darken"
        style={{
          backgroundImage: `url(${KurumsalTasarimBackgroundImage.src})`,
        }}
      >
        <div className="py-52  text-center text-white">
          <h2 className="py-4 text-xl font-semibold">Servislerimiz</h2>
          <h1 className="pb-8 text-3xl font-semibold">Kurumsal Tasarım</h1>
        </div>
      </div> */}
      <div
        className="w-full relative aspect-[2.2]
        "
      >

        <div className=" absolute inset-0 py-52   text-center text-white z-20">
          <h2 className="py-4 text-xl font-semibold">Servislerimiz</h2>
          <h1 className="pb-8 text-3xl font-semibold">Kurumsal Tasarım</h1>
        </div>
        <div className="absolute inset-0 w-full z-0 aspect-[2.2]">
          <Image
            className=" mix-blend-darken  bg-black brightness-50 object-cover"
            src={KurumsalTasarimBackgroundImage.src}
            fill
            alt="Kurumsal Tasarım"
            priority
          />
        </div>
      </div>

      <div className="grid w-full max-w-5xl grid-cols-1 gap-x-10  gap-y-4 py-8 px-8 md:grid-cols-2 md:py-20">
        <h2 className="text-4xl font-semibold text-primary">
          Kahyaoğlu Payzaj uzman kadrosu ve yenilikçi çözümleriyle
          hizmetinizdedir.
        </h2>
        <div>
          <p className="text-justify">
            Firmamız, kurumsal peyzaj tasarımı konusunda uzmanlaşmış bir firma
            olarak hizmet vermektedir. Yılların deneyimi ve sektördeki
            tecrübesiyle, müşterilerine yenilikçi, özgün ve estetik açıdan göz
            alıcı peyzaj tasarımları sunmaktadır.
          </p>
          <br></br>
          <p className="text-justify">
            Kurumsal peyzaj tasarımlarımız, müşterilerimizin ihtiyaçlarına uygun
            olarak tasarlanmaktadır. Her proje için özenle hazırlanan peyzaj
            tasarımlarımız, müşterilerimizin kurumsal kimliklerini yansıtmakta
            ve alanlarında özgün bir hava yaratmaktadır.
          </p>
        </div>
      </div>
      <div className=" mt-4  grid w-full max-w-5xl grid-cols-3 gap-4 px-8 md:grid-cols-4">
        {tasarimlar.map((tasarim) => (
          <div className="text-center " key={tasarim.id}>
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
        ))}
      </div>
    </div>
  );
}

Tasarim.Layout = Layout;
