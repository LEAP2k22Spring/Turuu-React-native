import { SideBar } from "@/src";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  let location = useRouter();
  return (
    <div className="flex">
      {location.asPath === "/" ? null : <SideBar />}
      <Component {...pageProps} />
    </div>
  );
}
