import dynamic from "next/dynamic";
import React, { useState } from "react";

import Button from "@/components/Buttons";
import Layout from "@/components/Layout";
import type { EditorProps } from "@/components/TextEditor";
import { axiosInstance } from "@/service/api";

import type { NotesResponse } from "./api/notes";

const TextEditor = dynamic<EditorProps>(
  () => import("../components/TextEditor"),
  {
    ssr: false,
  }
);

export default function Home() {
  const [text, setText] = useState<string>("");

  return (
    <Layout>
      <div className="flex items-center justify-end p-1 h-12">
        <div className="flex gap-3">
          <Button className="bg-gray-500 text-white" label="cancel" />
          <Button className="bg-green-600 text-white" label="save" />
        </div>
      </div>
      <TextEditor data={text} onChange={(e: string) => setText(e)} />
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const response = await axiosInstance.get<NotesResponse>(
      "https://my-json-server.typicode.com/Bryan-cee/notely-dummy-data/notes"
    );
    const notes = response.data;

    console.log(notes);

    return {
      props: {
        notes,
      },
    };
  } catch (error) {
    console.error(error);
  }
}
