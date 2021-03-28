import type { GetStaticProps } from "next";

import Layout from "@/Components/Layout";

export default function Home(props: { notes: Record<string, string> }) {
  return (
    <Layout>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </Layout>
  );
}

export function getStaticProps() {
  return {
    props: {
      notes: {
        content: "notes here",
        createdAt: "today",
        updatedAt: "a moment ago and this is an error",
      },
    },
  };
}
