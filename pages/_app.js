import { useState } from "react";
import Layout from "@/components/Layout";
import GlobalStyles from "@/styles";

export default function App({ Component, pageProps }) {
  const [count, setCount] = useState(1337);

  function handleAddCount() {
    setCount(count + 1);
  }

  return (
    <>
      <GlobalStyles />
      <Layout count={count}>
        <Component {...pageProps} count={count} onAddCount={handleAddCount} />
      </Layout>
    </>
  );
}
