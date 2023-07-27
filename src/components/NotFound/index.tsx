"use client";
import LocaleContext from "@/shared/contexts/LocaleContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function NotFound() {
  const { dictionary } = useContext(LocaleContext);

  return (
    <div className="py--4 text--center flex--center-column">
      <h1 className="text--giant">{dictionary["404"].title}</h1>
      <h3 className="my--2">{dictionary["404"].description}</h3>
      <h1 className="movingx">🛸</h1>
      {/* TODO: create & implement 404 image */}
      <Image
        src="/images/common/ufo_404.png"
        width={307}
        height={230}
        alt={dictionary["404"].imageDescription}
        title={dictionary["404"].imageDescription}
        className="round  my--4"
      />

      <div className="my--1 flex--sb-center">
        <Link href="/" className="text--md my--2">
          {dictionary["404"].link}
        </Link>
      </div>
    </div>
  );
}
