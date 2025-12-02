'use client'

import Image from 'next/image'
import Link from 'next/link'

import { getCategoryReadTime } from '@/lib/blog-helpers'
import { useInfiniteArticles } from '@/lib/hooks/use-blog-data'
import { formatDateString } from '@/lib/utils'

import { Skeleton } from './ui/skeleton'

import type { Article } from '@/lib/hooks/use-blog-data'

function ArticelSkeleton() {
  const data = new Array(6).fill(1)
  return data.map((_, index) => (
    <div
      className="col-span-12 md:col-span-6 lg:col-span-4"
      key={index}
    >
      <Skeleton className="h-[284px] w-full" />
      <Skeleton className="mt-8 h-6 w-1/3" />
      <Skeleton className="mt-4 h-6 w-full" />
      <div className="mt-6 flex space-x-3">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-5 w-32" />
      </div>
    </div>
  ))
}

function ArticleItem({ article }: { article: Article }) {
  const { title, slug, category, cover_url: coverUrl, publishedAt } = article
  return (
    <div className="col-span-12 flex flex-col gap-4 bg-white md:col-span-6 lg:col-span-4">
      {/* Image */}
      <div className="relative h-[285px] w-full">
        <Image
          src={coverUrl ?? '/blog/blog-banner-image.svg'}
          alt="AI and human connection"
          fill
          className="h-full w-full object-cover object-center"
          priority
        />
      </div>

      {/* Text */}
      <div className="p-4">
        {/* Category */}
        <div className="font-manrope text-[18px] font-semibold uppercase leading-[140%] text-[#00C8B3]">
          {category?.name}
        </div>

        {/* Title */}
        <Link
          href={`/blog/${slug ?? ''}`}
          className="font-manrope text-[20px] font-bold leading-[130%] text-[#202222]"
        >
          {title}
        </Link>

        {/* Meta info */}
        <div className="mt-4 flex items-center justify-start gap-12">
          <div className="font-manrope text-[16px] font-normal leading-[150%] text-[#525757]">
            {formatDateString(publishedAt)}
          </div>

          <div className="font-manrope flex items-center gap-2 text-[16px] font-normal leading-[150%] text-[#525757]">
            <div className="h-[13px] w-[13px] rounded-full bg-[#00C8B3]" />
            {getCategoryReadTime(category?.name)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LastBlog() {
  const { articles, hasMore, loadMore, isLoading } = useInfiniteArticles()

  return (
    <section className="bg-[#F7F9FD]">
      <div className="flex justify-center">
        <div className="grid h-full w-[88%] grid-cols-12 gap-8 pb-6">
          <div className="col-span-12 mb-2 flex flex-col items-start justify-start gap-4">
            <div className="align-middle font-[Manrope] text-[28px] font-semibold leading-[130%] text-[#202222]">
              Last blog
            </div>
          </div>

          {isLoading && <ArticelSkeleton />}

          {articles.map((article) => (
            <ArticleItem
              article={article}
              key={article.id}
            />
          ))}
          {hasMore && (
            <div className="col-span-12 flex justify-center pt-4">
              <button
                onClick={loadMore}
                disabled={isLoading}
                className="border border-[#A0DCDD] px-4 py-2 align-middle font-[Manrope] text-[18px] font-semibold leading-[150%] text-[#0036AF] hover:bg-[#A0DCDD]"
              >
                View more
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
