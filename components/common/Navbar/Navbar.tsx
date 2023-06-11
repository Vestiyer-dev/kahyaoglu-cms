import Link from "next/link";
import NavbarRoot from "./NavbarRoot";
import { Logo } from "@components/ui";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

import {
  ChartBarIcon,
  CursorArrowRaysIcon,
  // PhoneIcon,
  // PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const solutions = [
  {
    name: "Tasarım",
    description:
      "Bireysel Konutunuzun peyzajını zevkinize ve kullanım amacına göre tasarlıyoruz.",
    href: "/hizmetlerimiz/bireysel-hizmetlerimiz/tasarim",
    icon: ChartBarIcon,
  },
  {
    name: "Uygulama",
    description:
      "Evinizin bahçesini düzenliyor, estetik ve fonksiyonel açıdan en uygun uygulama işlemlerini gerçekleştiriyoruz.",
    href: "/hizmetlerimiz/bireysel-hizmetlerimiz/uygulama",
    icon: CursorArrowRaysIcon,
  },
  // {
  //   name: 'Bakım',
  //   description: "Connect with third-party tools that you're already using.",
  //   href: '/hizmetlerimiz/bireysel-hizmetlerimiz/bakim',
  //   icon: Squares2X2Icon,
  // },
];
const kurumsalMenu = [
  {
    name: "Tasarım",
    description:
      "Müşterilerirniz için en göz alıcı peyzajı profesyonel değerlendirmeler ile tasarlıyoruz.",
    href: "/hizmetlerimiz/kurumsal-hizmetlerimiz/tasarim",
    icon: ChartBarIcon,
  },
  {
    name: "Uygulama",
    description:
      "İşletmeniz için A'dan Z'ye kurumsal peyzaj uygulama hizmetleri sunuyoruz.",
    href: "/hizmetlerimiz/kurumsal-hizmetlerimiz/uygulama",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Bakım",
    description:
      "İşletmenizin sahip olduğu tüm açık alanların profesyonel bir şekilde düzenli bakımını yapıyoruz.",
    href: "/hizmetlerimiz/kurumsal-hizmetlerimiz/bakim",
    icon: Squares2X2Icon,
  },
];

import {
  Bars3Icon,
  // BookmarkSquareIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import {
  // BriefcaseIcon,
  BuildingOfficeIcon,
  // ComputerDesktopIcon,
  // GlobeAltIcon,
  // InformationCircleIcon,
  // NewspaperIcon,

  // UserGroupIcon,
} from "@heroicons/react/24/outline";

interface Link {
  href: string;
  label: string;
}

const Navbar = () => {
  const features = [
    {
      name: "Kurumsal",
      href: "/kurumsal",
      description:
        "Get a better understanding of where your traffic is coming from.",
      icon: ChartBarIcon,
    },
    {
      name: "Blog",
      href: "/blog",
      description: "Speak directly to your customers in a more meaningful way.",
      icon: CursorArrowRaysIcon,
    },
    {
      name: "İletişim",
      href: "/iletisim",
      description: "Your customers' data will be safe and secure.",
      icon: ShieldCheckIcon,
    },
    {
      name: "Referanslarımız",
      href: "/referanslar",
      description: "Connect with third-party tools that you're already using.",
      icon: Squares2X2Icon,
    },
    // {
    //   name: 'Bireysel Hizmerlerimiz',
    //   href: '/bireysel-hizmetlerimiz/tasarim',
    //   description: 'Build strategic funnels that will drive your customers to convert',
    //   icon: ArrowPathIcon,
    // },
    // {
    //   name: 'Kurumsal Hizmerlerimiz',
    //   href: '/kurumsal-hizmetlerimiz/tasarim',
    //   description: 'Build strategic funnels that will drive your customers to convert',
    //   icon: ArrowPathIcon,
    // },
  ];

  // type ClassNameProps = {
  //   className?: string
  // }

  function classNames(...classes: (string | undefined)[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <NavbarRoot>
      <Popover className="relative bg-background-secondary shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex w-full items-center justify-between py-2 md:justify-start md:space-x-10 lg:py-6 ">
            <div className="block shrink-0 justify-start ">
              <Link href="/">
                <span className="sr-only">Kahyaoğlu Peyzaj</span>
                <Logo className="flex  lg:w-full" />
              </Link>
            </div>
            <div className="-my-2 -mr-2 flex w-full justify-end lg:hidden ">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-background-secondary p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group
              as="nav"
              className="hidden w-full items-center justify-center space-x-10 lg:flex "
            >
              <Popover className="relative">
                {({ open, close }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group inline-flex items-center rounded-md bg-background-secondary font-medium text-base hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      )}
                    >
                      <span>Bireysel Hizmetlerimiz</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute inset-x-0 z-10 -ml-4   mt-3 w-[60vw] max-w-[800px] transform px-2 shadow-md sm:px-0 lg:w-[55vw] ">
                        <div className="bg-background-secondary">
                          <div className="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-2 lg:px-8 lg:py-12 xl:py-16">
                            {solutions.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex flex-col justify-between rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                                onClick={() => close()}
                              >
                                <div className="flex md:h-full lg:flex-col">
                                  <div className="flex-shrink-0">
                                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white sm:h-12 sm:w-12">
                                      <item.icon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                      />
                                    </div>
                                  </div>
                                  <div className="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                    <div>
                                      <p className="font-medium text-base text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                    <p className="mt-2 text-sm font-medium text-primary lg:mt-4">
                                      Ayrıntıları Gör
                                      <span aria-hidden="true"> &rarr;</span>
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover className="relative">
                {({ open, close }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group inline-flex items-center rounded-md bg-background-secondary font-medium text-base hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      )}
                    >
                      <span>Kurumsal Hizmetlerimiz</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute inset-x-0 z-10 -ml-4   mt-3 w-[80vw] max-w-[800px] transform px-2 shadow-md sm:px-0 lg:w-[60vw] ">
                        <div className="bg-background-secondary">
                          <div className="mx-auto grid max-w-7xl gap-y-6 px-4 py-6 sm:grid-cols-3 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-3 lg:px-8 lg:py-12 xl:py-16">
                            {kurumsalMenu.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex flex-col justify-between rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50"
                                onClick={() => close()}
                              >
                                <div className="flex md:h-full lg:flex-col">
                                  <div className="flex-shrink-0">
                                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary text-white sm:h-12 sm:w-12">
                                      <item.icon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                      />
                                    </div>
                                  </div>
                                  <div className="ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                    <div>
                                      <p className="font-medium text-base text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                    <p className="mt-2 text-sm font-medium text-primary lg:mt-4">
                                      Ayrıntıları Gör
                                      <span aria-hidden="true"> &rarr;</span>
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              {/* <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md bg-background-secondary text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
                      )}
                    >
                      <span>Kurumsal Hizmetlerimiz</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute inset-x-0 z-10 transform   -ml-4 mt-3 w-[80vw] lg:w-[60vw] max-w-[800px] px-2 sm:px-0 shadow-md ">
                        <div className="absolute inset-0 flex" aria-hidden="true">
                          <div className="w-1/2 bg-background-secondary shadow-lg rounded-2xl" />
                          <div className=" bg-gray-50 w-1/2  shadow-lg  rounded-2xl" />
                        </div>
                        <div className="relative mx-auto grid max-w-7xl grid-cols-1 ">
                          <nav
                            className="grid gap-y-10 gap-x-8 bg-background-secondary px-4 py-8 sm:grid-cols-3  sm:py-12 sm:px-6 lg:px-8 xl:pr-12  shadow-lg  rounded-2xl"
                            aria-labelledby="solutions-heading"
                          >
                            <h2 id="solutions-heading" className="sr-only">
                              Kurumsal Hizmetlerimiz
                            </h2>
                            <div>
                              <h3 className="text-base font-medium text-gray-500">Tasarım</h3>
                              <ul role="list" className="mt-5 space-y-6">
                                {tasarim.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 transition duration-150 ease-in-out hover:bg-gray-50"
                                    >
                                      <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                      <span className="ml-4">{item.name}</span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h3 className="text-base font-medium text-gray-500">Uygulama</h3>
                              <ul role="list" className="mt-5 space-y-6">
                                {uygulama.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 transition duration-150 ease-in-out hover:bg-gray-50"
                                    >
                                      <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                      <span className="ml-4">{item.name}</span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h3 className="text-base font-medium text-gray-500">Bakım</h3>
                              <ul role="list" className="mt-5 space-y-6">
                                {uygulama.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 transition duration-150 ease-in-out hover:bg-gray-50"
                                    >
                                      <item.icon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                      <span className="ml-4">{item.name}</span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </nav>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover> */}
              {/* <FlyoutMenu /> */}
              <Link
                href="/kurumsal"
                className="font-medium text-base text-gray-500 hover:text-gray-900"
              >
                Kurumsal
              </Link>
              <Link
                href="/blog"
                className="font-medium text-base text-gray-500 hover:text-gray-900"
              >
                Blog
              </Link>
              <Link
                href="/iletisim"
                className="font-medium text-base text-gray-500 hover:text-gray-900"
              >
                İletişim
              </Link>
              <Link
                href="/referanslar"
                className="font-medium text-base text-gray-500 hover:text-gray-900"
              >
                Referanslarımız
              </Link>
            </Popover.Group>
          </div>
        </div>
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition lg:hidden"
          >
            {({ close }) => (
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-background-secondary shadow-lg ring-1  ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Link href="/" onClick={() => close()}>
                        <Logo />
                      </Link>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-background-secondary p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {features.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                          onClick={() => close()}
                        >
                          <item.icon
                            className="h-6 w-6 flex-shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          <span className="ml-3 font-medium text-base text-gray-900">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="space-y-6 py-6 px-5">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <div className="flex flex-col gap-3">
                      <Link
                        href="/hizmetlerimiz/bireysel-hizmetlerimiz"
                        className="flex font-medium text-base text-gray-900 hover:text-gray-700"
                        onClick={() => close()}
                      >
                        <BuildingOfficeIcon
                          className="h-6 w-6 flex-shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span className=" ml-3">Bireysel Hizmetlerimiz</span>
                      </Link>
                      <div></div>
                      {solutions.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => close()}
                          className="ml-10 font-medium text-base text-gray-900  hover:text-gray-700"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className="flex flex-col gap-3">
                      <Link
                        href="/hizmetlerimiz/kurumsal-hizmetlerimiz"
                        className="flex font-medium text-base text-gray-900 hover:text-gray-700"
                        onClick={() => close()}
                      >
                        <BuildingOfficeIcon
                          className="h-6 w-6 flex-shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span className=" ml-3">Kurumsal Hizmetlerimiz</span>
                      </Link>
                      {kurumsalMenu.map((item) => (
                        <Link
                          onClick={() => close()}
                          key={item.name}
                          href={item.href}
                          className="ml-10 font-medium text-base text-gray-900 hover:text-gray-700"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
    </NavbarRoot>
  );
};

export default Navbar;
