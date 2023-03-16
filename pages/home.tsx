import React from "react";
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(import("../src/components/map"), { ssr: false });

function Home() {
  return (
    <>
      <MapWithNoSSR />
    </>
  );
}

export default Home;
