import Layout from "@/Components/Layout";
import { axiosInstance } from "@/service/api";

import type { NotesResponse } from "./api/notes";

export default function Home(props: { notes: Record<string, string> }) {
  return (
    <Layout>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const response = await axiosInstance.get<NotesResponse>("/api/notes");
    const notes = response.data;

    return {
      props: {
        notes,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        notes: {
          content: "notes here",
          createdAt: "today",
          updatedAt: "a moment ago",
        },
      },
    };
  }
}
