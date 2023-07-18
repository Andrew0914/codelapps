import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py--4 text--center flex--center-column">
      <h1 className="text--giant">404</h1>
      <h3 className="my--2">Page not Found</h3>
      <h1 className="movingx">🛸</h1>
      {/* TODO: create & implement 404 image */}
      <Image
        src="/images/common/ufo_404.png"
        width={307}
        height={230}
        alt="You are lost, maybe an UFO take this page"
        className="round  my--4"
      />

      <div className="my--1 flex--sb-center">
        <Link href="/" className="text--md my--2">
          Take me home
        </Link>
      </div>
    </div>
  );
}
