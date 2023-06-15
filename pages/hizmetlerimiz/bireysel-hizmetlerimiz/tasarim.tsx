import React from "react";
import { Layout, SEO } from "~/components/common";
import TestImage from "@public/kurumsal-page.jpg";
import BireyselTasarimBackgroundImage from "@public/bireysel-tasarim-background.jpg";
import tasarim_image from "@public/3d-tasarim.jpg";
import bireysel_tasarim_image from "@public/bireysel-tasarim.jpg";
import sert_peyzaj_tasarim_image from "@public/sert-peyzaj-tasarim.jpg";
import sulama_sistemi_projelendirme_image from "@public/sulama_sistemi_projelendirme.jpg";
import ic_mekan_payzaj_tasarim_image from "@public/ic-mekan-peyzaj-tasarim.jpg";
import yumusak_peyzaj_tasarim_image from "@public/yumusak-peyzaj-tasarim.jpg";
import Image from "next/image";

const tasarimlar = [
  {
    id: 1,
    name: "Peyzaj Proje Tasarım",
    image: bireysel_tasarim_image.src,
    width: bireysel_tasarim_image.width,
    height: bireysel_tasarim_image.height,
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
    width: TestImage.width,
    height: TestImage.height,
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
];

export default function Tasarim() {
  return (
    <div className="flex flex-col items-center justify-center">
      <SEO
        title="Tasarım - Bireysel Hizmetlerimiz"
        description="Kahyaoğlu Peyzaj Bireysel Hizmetlerimiz Tasarım"
      />

      {/* <div
        className="relative w-full bg-black bg-opacity-40 bg-cover bg-blend-darken"
        style={{
          backgroundImage: `url(${BireyselTasarimBackgroundImage.src})`,
        }}
      >
        <div className="py-52  text-center text-white">
          <h2 className="py-4 text-xl font-semibold">Servislerimiz</h2>
          <h1 className="pb-8 text-3xl font-semibold">Bireysel Tasarım</h1>
        </div>
      </div> */}
      <div
        className="w-full relative aspect-[2.2]
        "
      >

        <div className=" absolute inset-0 py-52   text-center text-white z-20">
          <h2 className="py-4 text-xl font-semibold">Servislerimiz</h2>
          <h1 className="pb-8 text-3xl font-semibold">Kurumsal Uygulamalar</h1>
        </div>
        <div className="absolute inset-0 w-full z-0 aspect-[2.2]">
          <Image
            className=" mix-blend-darken  bg-black brightness-50 object-cover"
            src={BireyselTasarimBackgroundImage.src}
            fill
            alt="Bireysel Tasarım"
            priority
          />
        </div>
      </div>
      <div className=" grid w-full max-w-5xl grid-cols-1 gap-x-10 gap-y-4  py-8 px-8 text-primary md:grid-cols-2 md:py-20">
        <h2 className="text-4xl font-semibold">
          Doğanın güzelliklerini evinize taşımak için sizinle çalışmaya hazırız!
        </h2>
        <div>
          <p className=" text-justify text-black">
            Profesyonel ve deneyimli tasarımcılarımız, müşterilerimizin
            beklentilerini aşan peyzaj tasarımları sunmak için çalışıyor. Size
            özel tasarım seçenekleriyle, kişisel tarzınızı yansıtan ve evinize
            en uygun peyzaj tasarımını hayata geçiriyoruz.
          </p>
          <br></br>
          <p className="text-justify text-black">
            Müşteri memnuniyeti odaklı yaklaşımımızla, size en kaliteli hizmeti
            sunmak için çalışıyoruz. İster bahçenizin tamamen yeniden
            tasarlanmasını isteyin, ister sadece birkaç küçük dokunuşla yeni bir
            görünüm yaratmak isteyin, bizimle çalışarak evinizin dış mekanını en
            iyi şekilde değerlendirebilirsiniz.
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
