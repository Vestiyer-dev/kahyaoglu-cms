import React from "react";
import { Layout, SEO } from "~/components/common";

import BireyselUygulamaBackgroundImage from "@public/bireysel-uygulama-background.jpg";
import SertPeyzajImage from "@public/sert-peyzaj.jpg";
import YumusakPeyzajImage from "@public/yumusak-peyzaj.jpg";
import CimSerimiImage from "@public/cim-serimi.jpg";
import AdimTasiImage from "@public/adim-tasi.jpg";
import DogalTasImage from "@public/dogal-tas.jpg";
import DrenajImage from "@public/drenaj.jpg";
import SulamaSistemiImage from "@public/sulama-sistemi.jpg";
import BetonImage from "@public/beton.jpg";
import BegonitAyracImage from "@public/begonit-ayrac.jpg";
import BitkilendirmeImage from "@public/bitkilendirme.jpg";
import Image from "next/image";

const tasarimlar = [
  {
    id: 1,
    name: "Sert Peyzaj",
    image: SertPeyzajImage.src,
    width: SertPeyzajImage.width,
    height: SertPeyzajImage.height,
  },
  {
    id: 2,
    name: "Yumuşak Peyzaj",
    image: YumusakPeyzajImage.src,
    width: YumusakPeyzajImage.width,
    height: YumusakPeyzajImage.height,
  },
  {
    id: 3,
    name: "Çim Serimi",
    image: CimSerimiImage.src,
    width: CimSerimiImage.width,
    height: CimSerimiImage.height,
  },
  {
    id: 4,
    name: "Bitkilendirme",
    image: BitkilendirmeImage.src,
    width: BitkilendirmeImage.width,
    height: BitkilendirmeImage.height,
  },
  {
    id: 5,
    name: "Sulama Sistemi Uygulaması",
    image: SulamaSistemiImage.src,
    width: SulamaSistemiImage.width,
    height: SulamaSistemiImage.height,
  },
  {
    id: 6,
    name: "Beton Uygulama",
    image: BetonImage.src,
    width: BetonImage.width,
    height: BetonImage.height,
  },
  {
    id: 7,
    name: "Drenaj Uygulama",
    image: DrenajImage.src,
    width: DrenajImage.width,
    height: DrenajImage.height,
  },
  {
    id: 8,
    name: "Adım Taşı Uygulama",
    image: AdimTasiImage.src,
    width: AdimTasiImage.width,
    height: AdimTasiImage.height,
  },
  {
    id: 9,
    name: "Begonit Ayraç Uygulama",
    image: BegonitAyracImage.src,
    width: BegonitAyracImage.width,
    height: BegonitAyracImage.height,
  },
  {
    id: 10,
    name: "Doğal Taş Uygulama",
    image: DogalTasImage.src,
    width: DogalTasImage.width,
    height: DogalTasImage.height,
  },
];

export default function Tasarim() {
  return (
    <div className="flex flex-col items-center justify-center">
      <SEO
        title="Uygulama - Bireysel Hizmetlerimiz"
        description="Kahyaoğlu Peyzaj Bireysel Hizmetlerimiz Uygulama"
      />
      <div
        className="w-full relative aspect-[2.2]
        "
      >

        <div className=" absolute inset-0 py-52   text-center text-white z-20">
          <h2 className="py-4 text-xl font-semibold">Servislerimiz</h2>
          <h1 className="pb-8 text-3xl font-semibold">Bireysel Uygulamalar</h1>
        </div>
        <div className="absolute inset-0 w-full z-0 aspect-[2.2]">
          <Image
            className=" mix-blend-darken  bg-black brightness-50 object-cover"
            src={BireyselUygulamaBackgroundImage.src}
            fill
            alt="Bireysel Uygulama"
            priority
          />
        </div>
      </div>
      {/* <div
        className="relative w-full bg-black bg-opacity-40 bg-cover bg-blend-darken"
        style={{
          backgroundImage: `url(${BireyselUygulamaBackgroundImage.src})`,
        }}
      >
        <div className="py-52  text-center text-white">
          <h2 className="py-4 text-xl font-semibold">Servislerimiz</h2>
          <h1 className="pb-8 text-3xl font-semibold">Bireysel Uygulamalar</h1>
        </div>
      </div> */}
      <div className="grid w-full max-w-5xl grid-cols-1 gap-x-10  gap-y-4 py-8 px-8 md:grid-cols-2 md:py-20">
        <h2 className="text-4xl font-semibold text-primary">
          Hayalinizdeki Bahçeye Ulaşmak İçin Gereken Son Adım !
        </h2>
        <div>
          <p className="text-justify text-black">
            Bir evin bahçesi, sadece bir dış mekan alanı değil, aynı zamanda ev
            sahiplerinin kişisel tarzını, estetik anlayışını ve yaşam tarzını
            yansıtan bir yerdir.
          </p>
          <br></br>
          <p className="text-justify text-black">
            Kahyaoğlu Peyzaj, bireysel konut ya da villa bahçeleri için özel
            olarak tasarlanmış peyzaj uygulama hizmeti sunmaktadır. Uzman
            tasarım ekibimiz, ev sahiplerinin istekleri, bölgenin iklimi ve
            diğer önemli faktörleri göz önünde bulundurarak, özelleştirilmiş
            peyzaj tasarımları sunar. Bahçenizin tüm detaylarını, bitki
            seçimlerinden bahçe mobilyalarına kadar düşünerek, size sadece
            hayalinizdeki bahçeyi hayata geçirmek kalır.
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
