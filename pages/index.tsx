import dynamic from "next/dynamic";

import Layout from "@/components/Layout";
import { axiosInstance } from "@/service/api";

import type { NotesResponse } from "./api/notes";

const TextEditor = dynamic(() => import("../components/TextEditor/index"), {
  ssr: false,
});

export default function Home() {
  return (
    <Layout>
      <TextEditor data={"<p>Hello world</p>"} onChange={console.log} />
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const response = await axiosInstance.get<NotesResponse>(
      "http://localhost:3000/api/notes"
    );
    const notes = response.data;

    return {
      props: {
        notes,
      },
    };
  } catch (error) {
    console.error(error);
  }
}
