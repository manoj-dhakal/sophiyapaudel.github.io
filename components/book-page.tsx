import { cn } from "@/lib/utils"
import type { PageContent } from "@/lib/book-content"


interface BookPageProps {
  content: PageContent
}

export function BookPage({ content }: BookPageProps) {
  if (content.type === "title") {
    return (
      <div className="h-full flex flex-col items-center justify-center p-12 text-center">
        <h1 className="text-2xl md:text-4xl font-light tracking-[0.3em] text-neutral-900 uppercase mb-8">
          {content.title}
        </h1>
        {content.subtitle && (
          <p className="text-xs md:text-sm text-neutral-400 tracking-[0.2em] uppercase max-w-md leading-relaxed whitespace-pre-wrap">
            {content.subtitle}
          </p>
        )}
      </div>
    )
  }

  if (content.type === "section-title") {
    return (
      <div className="h-full flex flex-col items-center justify-center p-12 text-center">
        <span className="text-[10px] text-neutral-300 tracking-[0.3em] uppercase mb-4">{content.part}</span>
        <h2 className="text-lg md:text-2xl font-light tracking-[0.2em] text-neutral-800 uppercase">{content.title}</h2>
      </div>
    )
  }
  const baseURL = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (content.type === "musaffah-image") {
    return (
      // Container: Keeps it full width/height with no padding (p-0)
      <div className="h-full w-full flex flex-col bg-gray-900 p-0 relative">
        {/* Image Wrapper: Removed 'border-4 border-red-500 shadow-2xl' */}
        <div className="relative w-full h-full">
          {/* Image itself: Removed 'filter grayscale contrast-125 sepia-50' and 'imageRendering: pixelated' */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              // backgroundImage: `url('${content.src}')`,
                

                backgroundImage: `url('${baseURL}${content.src}')`,

            }}
          />
          {/* Removed the scanline overlay div entirely */}

          {/* Listing text overlay - kept this styling so text is readable over the image */}
          {content.listingText && (
            <div className="absolute bottom-8 left-0 right-0 flex justify-center px-4">
              <p className="text-sm text-yellow-300 font-mono font-bold max-w-xl text-center leading-snug tracking-widest uppercase bg-black/70 p-3 border-2 border-red-500 shadow-lg">
                {content.listingText}
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }


if (content.type === "nyuad-image") {
    return (
      // Container: Full width/height, no padding (p-0) to hit the edges
      <div className="h-full w-full p-0 relative">
        {/* Image Wrapper: Full size, no borders, shadows, or rotation */}
        <div className="w-full h-full relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${baseURL}${content.src}')`,
            }}
          />
        </div>
      </div>
    )
  }
  if (content.type === "institutional-text") {
    return (
      <div className="h-full flex flex-col items-center justify-center p-12 md:p-20">
        <div className="max-w-lg w-full">
          {content.header && (
            <span className="block text-[9px] text-neutral-300 tracking-[0.25em] uppercase mb-6">{content.header}</span>
          )}
          <p className="text-xs md:text-sm text-neutral-500 font-mono leading-loose tracking-wide">{content.text}</p>
        </div>
      </div>
    )
  }

  if (content.type === "list-text") {
    return (
      <div className="h-full flex flex-col items-center justify-center p-12 md:p-20">
        <div className="max-w-lg w-full">
          {content.header && (
            <span className="block text-[9px] text-neutral-300 tracking-[0.25em] uppercase mb-6">{content.header}</span>
          )}
          <ul className="space-y-3">
            {content.items?.map((item, i) => (
              <li key={i} className="text-xs text-neutral-500 font-mono leading-relaxed tracking-wide">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  if (content.type === "blank") {
    return <div className="h-full bg-white" />
  }

  if (content.type === "nyuad-email") {
    return (
      <div className="h-full overflow-y-auto p-8 md:p-12">
        <div className="max-w-lg mx-auto">
          <pre className="text-[10px] md:text-xs text-neutral-500 font-mono leading-loose tracking-wide whitespace-pre-wrap">
            {content.text}
          </pre>
        </div>
      </div>
    )
  }

  if (content.type === "colophon") {
    return (
      <div className="h-full flex flex-col items-center justify-center p-12 md:p-20">
        <p className="text-[10px] md:text-xs text-neutral-400 tracking-wide leading-loose max-w-md text-center">
          {content.text}
        </p>
      </div>
    )
  }

  return null
}

