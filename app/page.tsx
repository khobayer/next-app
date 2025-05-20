"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
// import Link from "next/link";
// import ProductCard from "./components/ProductCard";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";

import Image from "next/image";
// import HeavyComponent from "./components/HeavyComponent";
import { useState } from "react";
// import dynamic from "next/dynamic";
// import _ from "lodash";
// import coffee from "@/public/images/coffee.jpg";

// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   ssr: false,
//   loading: () => <p>Loading....</p>,
// });

export default function Home() {
  // const session = await getServerSession(authOptions);
  const [isVisible, setVisible] = useState(false);
  return (
    <main className="relative h-screen">
      <h1>Hello World</h1>
      <button
        onClick={ async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];

          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>
      {/* {isVisible && <HeavyComponent />} */}
      {/* <Image
        src="https://bit.ly/react-cover"
        alt="Coffee"
        fill
        className="object-cover"
        sizes="100vw"
        quality={100}
        priority
      /> */}
    </main>
  );
}
