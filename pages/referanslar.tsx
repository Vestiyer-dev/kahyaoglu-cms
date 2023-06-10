import React, { useState } from "react";
import { Layout, SEO } from "~/components/common";
import TestImage from "@public/kurumsal-page.jpg";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

type Tasarim = {
  id: string;
  name: string;
  description: string;
  image: string;
  width: number;
  height: number;
  category?: string;
  tags?: string[];
};

const tasarimlar = [
  {
    id: "1",
    name: "Yalıkavak Seba Taşevler Villa 170",
    description:
      "Villa 170 yumuşak peyzaj, sulama sistemi ve bahçe drenaj uygulaması tarafımızca yapılmıştır.",
    image: TestImage.src,
    width: TestImage.width,
    height: TestImage.height,
    category: "bireysel",
    tags: ["Tasarım", "Uygulama"],
  },
  {
    id: "2",
    name: "Yalıkavak Seba Taşevler Villa 157",
    description:
      "Villa 157 yumuşak peyzaj ve sulama sistemleri tarafımızca tasarlanıp uygulanmıştır.",
    image: TestImage.src,
    width: TestImage.width,
    height: TestImage.height,
    category: "bireysel",
    tags: ["Tasarım", "Uygulama"],
  },
  {
    id: "3",
    name: "Mesa Demirbükü Site Bakımı",
    description:
      "Bodrum'un seçkin ve elit sitelerinden Mesa Demirbükü'nün peyzaj bakımı tarafımızca düzenli olarak yapılmaktadır.",
    image: TestImage.src,
    width: TestImage.width,
    height: TestImage.height,
    category: "kurumsal",
    tags: ["Bakım"],
  },
  {
    id: "4",
    name: "Seba Taşevler Site Bakımı",
    description:
      "Bodrum'un seçkin ve elit sitelerinden Seba Taşevler'in peyzaj bakımı tarafımızca düzenli olarak yapılmaktadır.",
    image: TestImage.src,
    width: TestImage.width,
    height: TestImage.height,
    category: "kurumsal",
    tags: ["Bakım"],
  },
  {
    id: "5",
    name: "Yalıkavak Seba Taşevler 2. Etap 14 Villa",
    description:
      "Bodrum'un seçkin ve elit sitelerinden Seba Taşevler'in 2. Etap'ında bulunan 14 adet villanın sulama sitemleri tarafımızca projelendrilip uygulanmış, çim serimi yapılmıştır.",
    image: TestImage.src,
    width: TestImage.width,
    height: TestImage.height,
    category: "kurumsal",
    tags: ["Tasarım", "Uygulama"],
  },
  {
    id: "6",
    name: "Yalıkavak Tilkicik Villa",
    description:
      "Yalıkavak Tilkicik'de bulunan seçkin müşterimizin villasının yumuşak peyzaj ve sulama sistemleri tarafımızca projelendirilip uygulanmıştır.",
    image: TestImage.src,
    width: TestImage.width,
    height: TestImage.height,
    category: "bireysel",
    tags: ["Tasarım", "Uygulama"],
  },
  {
    id: "7",
    name: "Mesa Villa",
    description:
      "Bodrum'un en elit sitelerinden olan Mesa'da bulunan müşterimizin villasına ait yumuşak peyzaj ve sulama sistemleri tarafımızca tasarlanıp uygulanmış, bahçeye çim serimi yapılmıştır",
    image: TestImage.src,
    width: TestImage.width,
    height: TestImage.height,
    category: "bireysel",
    tags: ["Tasarım", "Uygulama"],
  },
  {
    id: "8",
    name: "Yalıkavak Geriş Villa",
    description:
      "Bodrum'un seçkin beldelerinden Yalıkavak Geriş'de bulunan özel müşterimizin villasındaki sulama sistemleri ve taş duvarı tarafımızca projelendirilip uygulanmıştır",
    image: TestImage.src,
    width: TestImage.width,
    height: TestImage.height,
    category: "bireysel",
    tags: ["Tasarım", "Uygulama"],
  },
  {
    id: "9",
    name: "Gölköy Mahallesi Villa",
    description:
      "Bodrum'un seçkin beldelerinden Gölköy'de bulunan villanın yumuşak peyzaj, sulama sistemi ve taş duvarı tarafımızca projelendirilip uygulanmıştır",
    image: TestImage.src,
    width: TestImage.width,
    height: TestImage.height,
    category: "bireysel",
    tags: ["Tasarım", "Uygulama"],
  },
  {
    id: "10",
    name: "Yalıkavak Gökçebel Villa",
    description:
      "Seçkin müşterimizin Gökçebel'de bulunan villasının yumuşak peyzaj, sulama sistemleri, yürüyüş yolu, altyapı ve drenaj işlemleri tarafımızca projelendirilip uygulanmıştır.",
    image: TestImage.src,
    width: TestImage.width,
    height: TestImage.height,
    category: "bireysel",
    tags: ["Tasarım", "Uygulama"],
  },
  {
    id: "11",
    name: "Torba 4 Villa",
    description:
      "Bodrum'un seçkin beldelerinden Torba'da bulunan 4 adet villanın yumuşak peyzaj, sulama sistemleri ve drenajı tarafımızca projelendirilip uygulanmıştır",
    image: TestImage.src,
    width: TestImage.width,
    height: TestImage.height,
    category: "kurumsal",
    tags: ["Tasarım", "Uygulama"],
  },
];

import type { FC } from "react";

type MenuButtonProps = {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export const MenuButton: FC<MenuButtonProps> = ({
  active,
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${active
          ? "bg-primary-dark text-white"
          : "bg-primary text-white opacity-75 hover:bg-primary-dark"
        } mr-2 rounded-md px-3 py-2 text-sm font-medium`}
    >
      {children}
    </button>
  );
};

const tags = ["Tasarım", "Uygulama", "Bakım"];

export default function Referanslar() {
  // easing: "linear" | "ease-in" | "ease-out" | "ease-in-out" | string;
  const [kurumsalActive, setKurumsalActive] = React.useState(false);
  const [bireyselActive, setBireyselActive] = React.useState(false);
  const [items, setItems] = React.useState(tasarimlar);
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [noResults, setNoResults] = React.useState(false);
  const handleClickKurumsal = () => {
    setKurumsalActive((x) => !x);
  };
  const handleClickBireysel = () => {
    setBireyselActive((x) => !x);
  };

  const handleTags = (tag: string | null | undefined) => {
    if (tag == null) return; // null or undefined check

    if (selectedTags.includes(tag)) {
      setSelectedTags((x) => x.filter((x) => x !== tag));
      return;
    }
    setSelectedTags((x) => [...x, tag]);
  };

  React.useEffect(() => {
    let filteredItems = tasarimlar;

    if (kurumsalActive && !bireyselActive) {
      filteredItems = filteredItems.filter(
        (item) => item.category === "kurumsal"
      );
    } else if (bireyselActive && !kurumsalActive) {
      filteredItems = filteredItems.filter(
        (item) => item.category === "bireysel"
      );
    } else if (kurumsalActive && bireyselActive) {
      // no filter applied since both categories are active
    }

    if (selectedTags.length > 0) {
      filteredItems = filteredItems.filter((item) => {
        return selectedTags.some((tag) => item.tags?.includes(tag));
      });
    }

    setItems(filteredItems);
  }, [kurumsalActive, bireyselActive, selectedTags]);

  React.useEffect(() => {
    if (items.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
  }, [items]);

  const resetFilters = () => {
    setKurumsalActive(false);
    setBireyselActive(false);
    setSelectedTags([]);
    setItems(tasarimlar);
  };

  //Animation
  const [selectedItem, setSelectedItem] = useState<null | Tasarim>(null);

  const handleCardClick = (item: Tasarim) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <div className="relative w-full bg-gray-50 pt-16 pb-20 lg:pt-24 lg:pb-28 ">
      <SEO
        title="Referanslarımız"
        description={`Kahyaoğlu Peyzaj'ın Referans Projeleri`}
      />
      <div className="relative  ">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Referanslarımız
          </h2>
          <p className="mx-auto mt-3 max-w-2xl px-8 text-xl text-gray-500 sm:mt-4">
            Kurumsal ve bireysel referanslarımızı burada bulabilirsiniz.
          </p>
        </div>
      </div>

      <div>
        <div className="mt-8 flex items-center justify-center gap-2">
          <MenuButton active={kurumsalActive} onClick={handleClickKurumsal}>
            Kurumsal
          </MenuButton>
          <MenuButton active={bireyselActive} onClick={handleClickBireysel}>
            Bireysel
          </MenuButton>
        </div>

        {/* CONTROL PANEL */}
        {/* <button className={`font-normal bg-teal-500 text-white ${kurumsalActive ? '' : 'opacity-50 '}`}
                    onClick={handleClickKurumsal}
                >Kurumsal</button>
                <button className={`font-normal bg-teal-500 text-white ${bireyselActive ? '' : 'opacity-50 '}`}
                    onClick={handleClickBireysel}
                >Bireysel</button>
                <div><code>{JSON.stringify(selectedTags, null, 2)}</code></div> */}
        <div className="flex items-center justify-center  gap-2 pt-4">
          {tags.map((tag) => {
            const active = Boolean(selectedTags.find((x) => x === tag));
            return (
              <MenuButton
                key={tag}
                active={active}
                onClick={() => handleTags(tag)}
              >
                {tag}
              </MenuButton>
            );
          })}
        </div>
        <p className="pt-2 text-center text-sm text-gray-700">
          Filitrelemek için yukarıdaki butonlara tıklayın
        </p>
        {noResults && (
          <div className="flex items-center justify-center">
            <div className="flex flex-col text-center">
              <span className="py-2 pt-8 font-medium text-red">
                Aradığınız filterlerde referans bulunamadı
              </span>
              <button
                className="mr-2 rounded-md  bg-primary-dark px-3 py-2 text-sm font-medium text-white"
                onClick={resetFilters}
              >
                Filitreleri Sıfırla
              </button>
            </div>
          </div>
        )}
        <motion.ul className="mt-4  grid w-full grid-cols-2 md:grid-cols-4">
          {items.map((tasarim) => (
            <li className="group relative text-center " key={tasarim.id}>
              <motion.div
                key={tasarim.id}
                className="card relative aspect-square cursor-pointer rounded bg-white shadow-lg"
                onClick={() => handleCardClick(tasarim)}
                layoutId={tasarim.id}
              >
                <Image
                  className="aspect-square object-cover"
                  src={tasarim.image}
                  alt={tasarim.name}
                  width={tasarim.width}
                  height={tasarim.height}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 text-white transition-all duration-300 ease-out  group-hover:opacity-70">
                  <span className="text-lg font-medium">{tasarim.name}</span>
                </div>
              </motion.div>
            </li>
          ))}
        </motion.ul>

        <AnimatePresence>
          {selectedItem && (
            <>
              <motion.div
                className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50"
                onClick={handleCloseModal}
                exit={{ opacity: 0, transition: { dItemuration: 0 } }}
                variants={modalVariants}
              >
                {" "}
              </motion.div>
              <motion.div
                className="modal-content fixed left-0 right-0 top-0  bottom-0 z-[100] mx-4 mt-[20vh] h-fit w-auto max-w-4xl  rounded bg-white  p-4 shadow-lg md:mx-8 md:mt-[3vh] lg:mx-auto "
                onClick={handleCloseModal}
                initial="hidden"
                animate="visible"
                layoutId={selectedItem.id}
                exit="exit"
                variants={modalVariants}
              >
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  width={selectedItem.width}
                  height={selectedItem.height}
                  style={{
                    maxHeight: "70vh",

                  }}
                  className="mb-4 aspect-square rounded object-cover "
                />

                <h2 className="text-2xl font-bold">{selectedItem.name}</h2>
                <p className=" text-lg">{selectedItem.description}</p>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

Referanslar.Layout = Layout;
