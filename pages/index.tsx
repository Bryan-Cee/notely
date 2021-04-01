import dynamic from "next/dynamic";

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
  return (
    <Layout>
      <TextEditor data="<p>Hello world</p>" onChange={console.log} />
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
