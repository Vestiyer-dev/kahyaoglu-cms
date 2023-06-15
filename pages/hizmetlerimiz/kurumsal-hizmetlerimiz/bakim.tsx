import React from "react";
import { Layout, SEO } from "~/components/common";
import TestImage from "@public/kurumsal-page.jpg";
import KurumsalBakimBackgroundImage from "@public/kurumsal-bakim-background.jpg";
import SiteBakimiImage from "@public/site-bakimi.jpg";
import YabaniOtTemizlemeImage from "@public/yabani-ot-temizleme.jpg";
import IlaclamaImage from "@public/ilaclama.jpg";
import GubrelemeImage from "@public/gubreleme.jpg";
import BudamaImage from "@public/budama.jpg";
import CimBicimiImage from "@public/cim-bicimi.jpg";
import ToprakHavalandirmaImage from "@public/toprak-havalandirma.jpg";
import MevsimlikBitkilendirmeImage from "@public/mevsimlik-bitkilendirme.jpg";
import BegonitAyracImage from "@public/begonit-ayrac.jpg";
import YuruyusAracYoluImage from "@public/yuruyus-arac-yolu.jpg";
import TeknikDanismanlikImage from "@public/teknik-danismanlik.jpg";
import Image from "next/image";

const tasarimlar = [
  {
    id: 1,
    name: "Site Bakımı",
    image: SiteBakimiImage.src,
    width: TestImage.width,
    height: TestImage.height,
  },
  {
    id: 2,
    name: "Yabani Ot Temizleme",
    image: YabaniOtTemizlemeImage.src,
    width: YabaniOtTemizlemeImage.width,
    height: YabaniOtTemizlemeImage.height,
  },
  {
    id: 3,
    name: "İlaçlama",
    image: IlaclamaImage.src,
    width: IlaclamaImage.width,
    height: IlaclamaImage.height,
  },
  {
    id: 4,
    name: "Gübreleme",
    image: GubrelemeImage.src,
    width: GubrelemeImage.width,
    height: GubrelemeImage.height,
  },
  {
    id: 5,
    name: "Budama",
    image: BudamaImage.src,
    width: BudamaImage.width,
    height: BudamaImage.height,
  },
  {
    id: 6,
    name: "Çim Biçimi",
    image: CimBicimiImage.src,
    width: CimBicimiImage.width,
    height: CimBicimiImage.height,
  },
  {
    id: 7,
    name: "Toprak Havalandırma",
    image: ToprakHavalandirmaImage.src,
    width: ToprakHavalandirmaImage.width,
    height: ToprakHavalandirmaImage.height,
  },
  {
    id: 8,
    name: "Mevsimlik Bitkilendirme",
    image: MevsimlikBitkilendirmeImage.src,
    width: MevsimlikBitkilendirmeImage.width,
    height: MevsimlikBitkilendirmeImage.height,
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
    name: "Yürüyüş ve Araç Yolu Bakımı",
    image: YuruyusAracYoluImage.src,
    width: YuruyusAracYoluImage.width,
    height: YuruyusAracYoluImage.height,
  },
  {
    id: 11,
    name: "Teknik Danışmanlık",
    image: TeknikDanismanlikImage.src,
    width: TeknikDanismanlikImage.width,
    height: TeknikDanismanlikImage.height,
  },
];

export default function Tasarim() {
  return (
    <div className="flex flex-col items-center justify-center">
      <SEO
        title="Bakım - Kurumsal Hizmetlerimiz"
        description="Kahyaoğlu Peyzaj Kurumsal Hizmetlerimiz Bakım"
      />

      {/* <div
        className="relative w-full bg-black bg-opacity-40 bg-cover bg-bottom bg-blend-darken"
        style={{
          backgroundImage: `url(${KurumsalBakimBackgroundImage.src})`,
        }}
      >
        <div className="py-52  text-center text-white">
          <h2 className="py-4 text-xl font-semibold">Servislerimiz</h2>
          <h1 className="pb-8 text-3xl font-semibold">Kurumsal Bakım</h1>
        </div>
      </div> */}
      <div
        className="w-full relative aspect-[2.2]
        "
      >

        <div className=" absolute inset-0 py-52   text-center text-white z-20">
          <h2 className="py-4 text-xl font-semibold">Servislerimiz</h2>
          <h1 className="pb-8 text-3xl font-semibold">Kurumsal Bakım</h1>
        </div>
        <div className="absolute inset-0 w-full z-0 aspect-[2.2]">
          <Image
            className=" mix-blend-darken  bg-black brightness-50 object-cover"
            src={KurumsalBakimBackgroundImage.src}
            fill
            alt="Kurumsal Bakım"
            priority
          />
        </div>
      </div>
      <div className="grid w-full max-w-5xl grid-cols-1 gap-x-10  gap-y-4 py-8 px-8 md:grid-cols-2 md:py-20">
        <h2 className="text-4xl font-semibold text-primary">
          Sitenizin Peyzaj Bakımı Emin Ellerde !
        </h2>
        <div>
          <p className="text-justify">
            Bahçeniz, kurumsal sitenizin misafirlerinize ve müşterilerinize
            sunacağı ilk izlenimdir. Özenle tasarlanmış, düzenli olarak bakımı
            yapılmış bir bahçe, markanızın profesyonelliğini ve kalitesini
            yansıtır. Uzman bahçe bakım ekibimiz, bahçenizin tüm ihtiyaçlarına
            uygun olarak tasarlanmış bir bakım programı hazırlar. Bitkilerin
            düzenli olarak sulanması, gübrelenmesi ve budanması gibi rutin
            işlemler yanı sıra, bahçenizin haşere ve hastalıklardan korunması
            için de gerekli önlemler alınır.
          </p>
          <br></br>
          <p className="text-justify">
            Bizimle çalışarak, bahçenizin her zaman en iyi şekilde görünmesini
            sağlayabilirsiniz. Hizmetlerimiz arasında çim biçme, çalı ve ağaç
            budama, bitki hastalığı kontrolü, sulama sistemleri bakımı ve
            gübreleme gibi işlemler yer almaktadır. Kahyaoğlu Peyzaj uzman
            ekibi, size özel bir bakım planı oluşturacak ve bahçenizin tüm
            ihtiyaçlarına uygun olarak düzenli olarak bakımını yapacaktır.
            Böylece, siz de kurumsal sitenizin bahçesi ile ilgilenmek zorunda
            kalmadan, markanızın profesyonel imajını koruyabilirsiniz. Hemen
            bizimle iletişime geçin ve kurumsal site bahçe bakımı hizmetimizle
            ilgili daha fazla bilgi edinin.
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
