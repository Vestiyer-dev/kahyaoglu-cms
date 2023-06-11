import Link from "next/link";

/* This example requires Tailwind CSS v2.0+ */
export default function CTABranded() {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-2xl py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Hızlı, kaliteli ve eksiksiz</span>
          <span className="block"> Peyzaj Mimarlığı için sizi arayalım</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-emerald-100">
          Aşağıdaki butona tıklayarak iletişim formunu doldurabilirsiniz. Ekip
          arkadaşlarımız en kısa sürede sizi arayacaklar.
        </p>
        <Link
          href="/iletisim"
          className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-background-primary px-5 py-3 font-medium text-base text-primary hover:bg-indigo-50 sm:w-auto"
        >
          Randevu al
        </Link>
      </div>
    </div>
  );
}
