import Image from "next/image";
import React from "react";
// import HeroPhoto from "@public/home-photo1.jpg";
import Link from "next/link";
import HeroPhoto from "@public/home-photo1.jpg"
export default function Hero() {

  return (
    <main className="lg:relative">
      <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">En İyi Bahçeler</span>{" "}
            <br className="hidden xl:block"></br>
            <span className="block text-primary xl:inline">
              Sizin de Hakkınız
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Kahyaoglu Modern Peyzaj olarak hem kaliteli hem de ekonomik çözümler
            üretiyor ve sizi hayallerinizdeki bahçeye kavuşturuyoruz. Doğru
            peyzajın insanların hayatlarını değiştirebildiğine inanıyoruz
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link
                href="/iletisim"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 font-medium text-base text-white hover:bg-primary-dark md:py-4 md:px-14 md:text-lg"
              >
                Randevu Oluştur
              </Link>
            </div>
            {/* <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">

                            <a
                                href="#"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-background-primary px-8 py-3 text-base font-medium text-primary hover:bg-background-primary md:py-4 md:px-10 md:text-lg"
                            >
                                Live demo
                            </a>
                        </div> */}
          </div>
        </div>
      </div>
      <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
        <Image
          className="-0 z-10 h-full w-full object-cover"
          src={HeroPhoto.src}
          alt="Kahyaoğlu Peyzaj Ana Sayfa"
          // width={650}
          // height={650}
          priority
          fill

        />
      </div>
    </main>
  );
}
