import React, { useState } from "react";
import { Layout, PostBody, SEO } from "~/components/common";
import TestImage from "@public/kurumsal-page.jpg";
import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";

//new sanity
import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import { getAllCategories, getAllReferanslar, getAllTags, getSettings, getKvkkMetni } from 'lib/sanity.client'
import { Category, Post, Settings, Tags } from 'lib/sanity.queries'
import { GetServerSideProps, GetStaticProps } from 'next'
import { groq } from 'next-sanity'
import { createClient } from 'next-sanity'
import { lazy } from 'react'




import type { FC } from "react";

interface Kvkk {
  content: any,
  title: string,
}

interface KvkkMetniProps {
  kvkk: Kvkk,
  preview: boolean
}


export default function KvkkMetni(props: KvkkMetniProps) {
  const { preview, kvkk } = props

  return (
    <div className="relative w-full flex items-center justify-center bg-background-primary pt-16 pb-20 lg:pt-24 lg:pb-28 ">
      <SEO
        title="Kvkk Aydınlatma Metni"
        description={`Kvkk Aydınlatma Metni`}
      />
      <div className="relative prose flex flex-col items-center justify-center ">
        <div className="text-center ">
          <h1 className="">
            {kvkk.title}
          </h1>
          <article className=" flex items-center justify-center">
            <PostBody content={kvkk.content} />
          </article>
        </div>
      </div>



    </div>
  );
}

KvkkMetni.Layout = Layout;


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

    const [kvkk] = await Promise.all([
      getKvkkMetni()
    ])


    return {
      props: {
        kvkk,
        preview,
      },
    }
  }