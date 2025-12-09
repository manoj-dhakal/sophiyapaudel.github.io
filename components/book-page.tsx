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

  // if (content.type === "musaffah-image") {
  //   return (
  //     <div
  //       className={cn("h-full flex flex-col", content.fullBleed ? "p-0" : "p-8 md:p-16 items-center justify-center")}
  //     >
  //       <div
  //         className={cn(
  //           "relative bg-neutral-100",
  //           content.fullBleed ? "w-full h-full" : "max-w-md w-full aspect-[4/3]",
  //         )}
  //       >
  //         {/* Simulated low-res, compressed image aesthetic */}
  //         <div
  //           className="absolute inset-0 bg-cover bg-center"
  //           style={{
  //             backgroundImage: `url('${content.src}')`,
  //             filter: "contrast(0.9) saturate(0.8)",
  //             imageRendering: "auto",
  //           }}
  //         />
  //         {/* JPEG artifact overlay */}
  //         <div className="absolute inset-0 bg-gradient-to-br from-transparent via-neutral-200/10 to-neutral-300/20" />
  //       </div>
  //       {content.listingText && (
  //         <p className="mt-4 text-[10px] text-neutral-400 font-mono max-w-sm text-center leading-relaxed">
  //           {content.listingText}
  //         </p>
  //       )}
  //     </div>
  //   )
  // }
  // if (content.type === "musaffah-image") {
  //   return (
  //     // CHANGE 1: 'p-0' forces no padding, so it hits the edges
  //     <div className="h-full w-full flex flex-col bg-gray-900 p-0 relative">
  //       <div className="relative w-full h-full border-4 border-red-500 shadow-2xl">
  //         {/* Enhanced image aesthetic */}
  //         <div
  //           className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125 sepia-50"
  //           style={{
  //             backgroundImage: `url('${content.src}')`,
  //             imageRendering: "pixelated",
  //           }}
  //         />
  //         {/* Aggressive scanline overlay */}
  //         <div className="absolute inset-0 bg-[url('/scanlines.png')] opacity-20 mix-blend-overlay" />
          
  //         {/* Listing text overlaid at the bottom since image is full size */}
  //         {content.listingText && (
  //           <div className="absolute bottom-8 left-0 right-0 flex justify-center px-4">
  //             <p className="text-sm text-yellow-300 font-mono font-bold max-w-xl text-center leading-snug tracking-widest uppercase bg-black/70 p-3 border-2 border-red-500 shadow-lg">
  //               {content.listingText}
  //             </p>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   )
  // }
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
              backgroundImage: `url('${content.src}')`,
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

  // if (content.type === "nyuad-image") {
  //   return (
  //     <div className="h-full flex flex-col items-center justify-center p-8 md:p-16">
  //       <div className="max-w-sm w-full aspect-[4/3] relative bg-neutral-50 border border-neutral-100">
  //         <div
  //           className="absolute inset-0 bg-cover bg-center"
  //           style={{
  //             backgroundImage: `url('${content.src}')`,
  //           }}
  //         />
  //       </div>
  //     </div>
  //   )
  // }
  // if (content.type === "nyuad-image") {
  //   return (
  //     // CHANGE 2: Removed padding and centering constraints
  //     <div className="h-full w-full p-0 bg-pink-100 border-8 border-purple-500 relative">
  //       {/* Container is now full width/height */}
  //       <div className="w-full h-full relative bg-white border-b-[6px] border-black">
  //         <div
  //           className="absolute inset-0 bg-cover bg-center"
  //           style={{
  //             backgroundImage: `url('${content.src}')`,
  //           }}
  //         />
  //         <div className="absolute bottom-0 right-0 bg-purple-500 text-white p-2 text-xs font-bold uppercase tracking-widest z-10">
  //           Documented.
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
if (content.type === "nyuad-image") {
    return (
      // Container: Full width/height, no padding (p-0) to hit the edges
      <div className="h-full w-full p-0 relative">
        {/* Image Wrapper: Full size, no borders, shadows, or rotation */}
        <div className="w-full h-full relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${content.src}')`,
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

