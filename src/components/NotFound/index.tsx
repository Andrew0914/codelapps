"use client";
import LocaleContext from "@/shared/contexts/LocaleContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function NotFound() {
  const { dictionary } = useContext(LocaleContext);

  return (
    <div className="mt--2 text--center flex--center-column h--full-viewport">
      <h1 className="text--giant">{dictionary["404"].title}</h1>
      <h3 className="my--2">{dictionary["404"].description}</h3>
      <h1 className="movingx">🛸</h1>

      <Image
        src="/images/common/ufo_404.png"
        width={290}
        height={210}
        alt={dictionary["404"].imageDescription}
        title={dictionary["404"].imageDescription}
        className="round  my--2"
      />

      <div className="flex--sb-center">
        <Link href="/" className="text--md my--2 text--link">
          {dictionary["404"].link}
        </Link>
      </div>
    </div>
  );
}
