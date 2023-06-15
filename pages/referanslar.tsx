import React, { useState } from "react";
import { Layout, SEO } from "~/components/common";
import TestImage from "@public/kurumsal-page.jpg";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

//new sanity
import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import { getAllCategories, getAllReferanslar, getAllTags, getSettings } from 'lib/sanity.client'
import { Category, Post, Settings, Tags } from 'lib/sanity.queries'
import { GetServerSideProps, GetStaticProps } from 'next'
import { groq } from 'next-sanity'
import { createClient } from 'next-sanity'
import { lazy } from 'react'




import type { FC } from "react";
import { urlForImage } from "~/lib/sanity.image";



type MenuButtonProps = {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

interface ReferanslarProps {
  referans: Referanslar
  referanslar: Referanslar[]
  tags: Tags[]
  categories: Category[]
  settings?: Settings
  preview: boolean
  token: string | null
}


interface ReferanslarQuery {
  [key: string]: string
}

interface ReferanslarPreviewData {
  token?: string
}

export interface Referanslar {
  _id: string
  title?: string
  referans?: string
  coverImage?: any
  categoryType?: any
  description?: string
  tag?: any[]
}

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
type Referans = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
};
// const tags = ["Tasarım", "Uygulama", "Bakım"];

export default function Referanslar(props: ReferanslarProps) {
  const { referanslar, categories, tags: astag, settings, preview, token } = props
  const tags = astag.map(tag => tag.tags);

  const [kurumsalActive, setKurumsalActive] = React.useState(false);
  const [bireyselActive, setBireyselActive] = React.useState(false);
  const [items, setItems] = React.useState(referanslar.map(referans => ({
    id: referans._id,
    title: referans.title,
    description: referans.referans,
    image: urlForImage(referans.coverImage.asset._ref).height(600).width(900).url(),
    category: referans.categoryType.toLowerCase(),
    tags: referans.tag,
  })));
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [noResults, setNoResults] = React.useState(false);





  const handleClickKurumsal = () => {
    setKurumsalActive((x) => !x);
  };
  const handleClickBireysel = () => {
    setBireyselActive((x) => !x);
  };

  const handleTags = (tag: string | null | undefined) => {
    if (tag === null) return; // null or undefined check

    if (selectedTags.includes(tag)) {
      setSelectedTags((x) => x.filter((x) => x !== tag));
      return;
    }
    setSelectedTags((x) => [...x, tag]);
  };

  React.useEffect(() => {
    let filteredItems = referanslar.map(referans => ({
      id: referans._id,
      title: referans.title,
      description: referans.referans,
      image: urlForImage(referans.coverImage.asset._ref).height(600).width(900).url(),
      category: referans.categoryType.toLowerCase(),
      tags: referans.tag,
    }));

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
    setItems(referanslar.map(referans => ({
      id: referans._id,
      title: referans.title,
      description: referans.referans,
      image: urlForImage(referans.coverImage.asset._ref).height(40).width(40).url(),
      category: referans.categoryType.toLowerCase(),
      tags: referans.tag,
    })));
  };

  //Animation
  const [selectedItem, setSelectedItem] = useState<null | Referans>(null);

  const handleCardClick = (item: Referans) => {
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
    <div className="relative w-full bg-background-primary pt-16 pb-20 lg:pt-24 lg:pb-28 ">
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
                className="card relative aspect-square cursor-pointer rounded bg-background-primary shadow-lg"
                onClick={() => handleCardClick(tasarim)}
                layoutId={tasarim.id}
              >
                <Image
                  className="aspect-square object-cover"
                  src={tasarim.image}
                  alt={tasarim.title}
                  width={600}
                  height={600}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 text-white transition-all duration-300 ease-out  group-hover:opacity-70">
                  <span className="text-lg font-medium">{tasarim.title}</span>
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
                className="modal-content fixed left-0 right-0 top-0  bottom-0 z-[100] mx-4 mt-[20vh] h-fit w-auto max-w-4xl  rounded bg-background-primary  p-4 shadow-lg md:mx-8 md:mt-[3vh] lg:mx-auto "
                onClick={handleCloseModal}
                initial="hidden"
                animate="visible"
                layoutId={selectedItem.id}
                exit="exit"
                variants={modalVariants}
              >
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  width={900}
                  height={600}
                  style={{
                    maxHeight: "70vh",

                  }}
                  className="mb-4 aspect-square rounded object-cover "
                />

                <h2 className="text-2xl font-bold">{selectedItem.title}</h2>
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


const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null






export const getStaticProps: GetStaticProps =
  // <
  //     PageProps,
  //     Query,
  //     PreviewData
  // >
  async (ctx) => {
    const { preview = false, params = {} } = ctx

    const [settings, referanslar, tags, categories] = await Promise.all([
      getSettings(),
      getAllReferanslar(),
      getAllTags(),
      getAllCategories(),
    ])


    return {
      props: {
        referanslar,
        settings,
        tags,
        categories,
        preview,
      },
    }
  }