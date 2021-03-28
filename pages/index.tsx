import Layout from "@/Components/Layout";
import { axiosInstance } from "@/service/api";

import type { NotesResponse } from "./api/notes";

export default function Home(props: { notes: Record<string, string> }) {
  return (
    <Layout>
      <h2 className="mb-3">Notely</h2>
      <p>Your favorite note taking app</p>
      <pre>{JSON.stringify(props, null, 2)}</pre>
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
