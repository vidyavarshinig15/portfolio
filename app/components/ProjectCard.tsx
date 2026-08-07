"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/useLanguage";

interface ProjectCardProps {
  images: string[];
  title: string;
  description: string;
  date: string;
  tags: string[];
  isVideo?: boolean;
  siteUrl?: string;
}

export default function ProjectCard({
  images,
  title,
  description,
  date,
  tags,
  isVideo = false,
  siteUrl,
}: ProjectCardProps) {
  const { t } = useLanguage();
  const renderMedia = () => {
    if (isVideo && images.length === 1) {
      return (
        <div className="relative h-48 bg-gray-900">
          <video
            src={images[0]}
            className="w-full h-full object-cover opacity-60"
            poster={images[0].replace(".mp4", "-poster.jpg")}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      );
    }

    if (images.length === 1) {
      return (
        <div className="relative h-48 bg-gray-900">
          <Image
            src={images[0]}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      );
    }

    if (images.length === 2) {
      return (
        <div className="grid grid-cols-2 gap-2">
          <div className="relative h-48">
            <Image
              src={images[0]}
              alt={`${title} 1`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-48">
            <Image
              src={images[1]}
              alt={`${title} 2`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>
      );
    }

    if (images.length === 3) {
      return (
        <div className="grid grid-cols-2 gap-2">
          <div className="relative h-48 row-span-2">
            <Image
              src={images[0]}
              alt={`${title} 1`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-[5.75rem]">
            <Image
              src={images[1]}
              alt={`${title} 2`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-[5.75rem]">
            <Image
              src={images[2]}
              alt={`${title} 3`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <a
      href={siteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:bg-gray-50 dark:hover:bg-[#222222] transition-all duration-300 group cursor-pointer"
    >
      <div className="relative">
        {renderMedia()}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
          <div className="text-white text-center">
            <span className="text-xl font-bold flex items-center gap-2">
              {t.projects.seeProject}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-external-link-icon lucide-external-link"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#191919] dark:text-white mb-2 translate-y-[-1px]">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-between flex-wrap gap-3">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {date}
          </span>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-750 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
