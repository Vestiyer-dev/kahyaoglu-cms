/* This example requires Tailwind CSS v2.0+ */
import {
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";
import KurumsalImage from "@public/kurumsal-image.webp";
import BireyselImage from "@public/bireysel-image.png";
import Link from "next/link";

const transferFeatures = [
  {
    id: 1,
    name: "Memnuniyet Garantisi",
    description:
      "Yaptığımız bütün işleri sizinle beraber planlayıp sizin hayalinizdeki bahçeyi kavuşmanız için gerekeni yapıyoruz. Memnuniyetiniz bizim için 1. öncelik.",
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: "Uygun Fiyat",
    description:
      "Hem kaliteli hem de ekonomik fiyatlandırma politikamızla, hayallerinizdeki bahçeyi size sunuyoruz.",
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: "Uzman ekip",
    description:
      "15 yılı aşkın sektör tecrübemizle hayallerinizdeki bahçeyi eksiksiz ve hızlı bir şekilde sunuyoruz.",
    icon: BoltIcon,
  },
];
const communicationFeatures = [
  {
    id: 1,
    name: "Site Bakımı",
    description:
      "Zahmetli ve düzenli takip gerektiren site peyzaj bakımını zengin ekibimizle üstleniyoruz. Size ve sitenizin sakinlerine sadece bahçenizin keyifini çıkartmak kalıyor.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    id: 2,
    name: "Tasarım - Projelendirme - Uygulama",
    description:
      "360 derece peyzaj hizmeti sunuyoruz. Tasarımdan başlayarak uygulamaya kadar ve hatta sonrasında periyodik bakımları yapmak için uzman kadromuz sizin için 365 gün hazır.",
    icon: EnvelopeIcon,
  },
];

export default function SideWithImages() {
  return (
    <div className="overflow-hidden bg-background-primary py-16 lg:py-24">
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <svg
          className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block  "
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div className="relative">
          <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-black sm:text-4xl">
            Endüstriyi şekillendiren uzmanlık
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
            Hikayesine inandığımız projeler yapıyor,<br></br>
            müşterilerimizin yaşam alanlarını geliştiriyoruz
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative ">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Bireysel Müşteri Hizmetlerimiz
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Bahçenizin ailenizle, sevdiklerinizle ve dostlarınızla güzel
              anılar paylaştığınız ve adeta doğayla iç içe olduğunuz sizin için
              önemli bir yaşam alanı olduğunu biliyoruz. Bizler de sizin
              hayallerizi süsleyen bahçeleri evinize taşıyoruz.
            </p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 w-fit rounded-md shadow">
              <Link
                href="/hizmetlerimiz/bireysel-hizmetlerimiz"
                className="md:text-md flex w-fit items-center justify-center rounded-md 
                                border border-transparent bg-primary px-8 py-3 font-medium
                                 text-base text-white hover:bg-primary-dark md:py-4 md:px-10"
              >
                Tamamını Gör
              </Link>
            </div>
          </div>

          <div className="relative mt-10 h-full lg:mt-0 " aria-hidden="true">
            <svg
              className="absolute left-1/2 -z-50 -translate-x-1/2 translate-y-16 transform lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <Image
              className=" inset-0 h-full w-full rounded-2xl  object-cover"
              src={BireyselImage.src}
              alt=""
              width={600}
              height={600}
            />
          </div>
        </div>

        <svg
          className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="lg:col-start-2 ">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Kurumsal Müşteri Hizmetlerimiz
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Müşterilerininiz ve ziyaretçilerinizin ilk izlenimin işinizin
                başarısı için ne kadar önemli olduğunu biliyoruz. Bu bağlamda
                sitenizin bütün peyzaj iş ve bakımlarını uçtan uca kaplayan
                hizmetler sunuyoruz.
              </p>

              <dl className="mt-10 space-y-10">
                {communicationFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-primary text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 w-fit rounded-md shadow">
                <Link
                  href="/hizmetlerimiz/kurumsal-hizmetlerimiz"
                  className="md:text-md flex w-fit items-center justify-center rounded-md 
                                border border-transparent bg-primary px-8 py-3 font-medium
                                 text-base text-white hover:bg-primary-dark md:py-4 md:px-10"
                >
                  Tamamını Gör
                </Link>
              </div>
            </div>

            <div className="relative  mt-10 lg:col-start-1 lg:mt-0 ">
              <svg
                className="absolute left-1/2 -z-10 -translate-x-1/2 translate-y-16 transform lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <Image
                className=" inset-0 h-full w-full rounded-2xl object-cover "
                src={KurumsalImage.src}
                alt=""
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
