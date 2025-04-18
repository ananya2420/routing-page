"use client";

import { notFound, useRouter, useParams } from "next/navigation";
import Image from "next/image";
import { DUMMY_NEWS } from "../../../../../../dummy-news";

export default function InterceptedImagePage() {
  const router = useRouter();
  const params = useParams();

  const newsItemSlug = params?.slug;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);

  if (!newsItem) {
    notFound(); // This automatically renders the 404 page
    return null; // Prevent further rendering after notFound()
  }

  return (
    <>
      <h2>Intercepted!</h2>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image" onClick={() => router.back()}>
          <Image
            src={newsItem.image}
            alt={newsItem.title}
            width={600}
            height={400}
            priority={false}
          />
        </div>
      </dialog>
    </>
  );
}
