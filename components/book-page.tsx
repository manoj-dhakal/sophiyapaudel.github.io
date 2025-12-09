// import { cn } from "@/lib/utils"
// import type { PageContent } from "@/lib/book-content"

// interface BookPageProps {
//   content: PageContent
// }

// export function BookPage({ content }: BookPageProps) {
//   if (content.type === "title") {
//     return (
//       <div className="h-full flex flex-col items-center justify-center p-12 text-center">
//         <h1 className="text-2xl md:text-4xl font-light tracking-[0.3em] text-neutral-900 uppercase mb-8">
//           {content.title}
//         </h1>
//         {content.subtitle && (
//           <p className="text-xs md:text-sm text-neutral-400 tracking-[0.2em] uppercase max-w-md leading-relaxed whitespace-pre-wrap">
//             {content.subtitle}
//           </p>
//         )}
//       </div>
//     )
//   }

//   if (content.type === "section-title") {
//     return (
//       <div className="h-full flex flex-col items-center justify-center p-12 text-center">
//         <span className="text-[10px] text-neutral-300 tracking-[0.3em] uppercase mb-4">{content.part}</span>
//         <h2 className="text-lg md:text-2xl font-light tracking-[0.2em] text-neutral-800 uppercase">{content.title}</h2>
//       </div>
//     )
//   }

//   // if (content.type === "musaffah-image") {
//   //   return (
//   //     <div
//   //       className={cn("h-full flex flex-col", content.fullBleed ? "p-0" : "p-8 md:p-16 items-center justify-center")}
//   //     >
//   //       <div
//   //         className={cn(
//   //           "relative bg-neutral-100",
//   //           content.fullBleed ? "w-full h-full" : "max-w-md w-full aspect-[4/3]",
//   //         )}
//   //       >
//   //         {/* Simulated low-res, compressed image aesthetic */}
//   //         <div
//   //           className="absolute inset-0 bg-cover bg-center"
//   //           style={{
//   //             backgroundImage: `url('${content.src}')`,
//   //             filter: "contrast(0.9) saturate(0.8)",
//   //             imageRendering: "auto",
//   //           }}
//   //         />
//   //         {/* JPEG artifact overlay */}
//   //         <div className="absolute inset-0 bg-gradient-to-br from-transparent via-neutral-200/10 to-neutral-300/20" />
//   //       </div>
//   //       {content.listingText && (
//   //         <p className="mt-4 text-[10px] text-neutral-400 font-mono max-w-sm text-center leading-relaxed">
//   //           {content.listingText}
//   //         </p>
//   //       )}
//   //     </div>
//   //   )
//   // }
//   // if (content.type === "musaffah-image") {
//   //   return (
//   //     // CHANGE 1: 'p-0' forces no padding, so it hits the edges
//   //     <div className="h-full w-full flex flex-col bg-gray-900 p-0 relative">
//   //       <div className="relative w-full h-full border-4 border-red-500 shadow-2xl">
//   //         {/* Enhanced image aesthetic */}
//   //         <div
//   //           className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125 sepia-50"
//   //           style={{
//   //             backgroundImage: `url('${content.src}')`,
//   //             imageRendering: "pixelated",
//   //           }}
//   //         />
//   //         {/* Aggressive scanline overlay */}
//   //         <div className="absolute inset-0 bg-[url('/scanlines.png')] opacity-20 mix-blend-overlay" />
          
//   //         {/* Listing text overlaid at the bottom since image is full size */}
//   //         {content.listingText && (
//   //           <div className="absolute bottom-8 left-0 right-0 flex justify-center px-4">
//   //             <p className="text-sm text-yellow-300 font-mono font-bold max-w-xl text-center leading-snug tracking-widest uppercase bg-black/70 p-3 border-2 border-red-500 shadow-lg">
//   //               {content.listingText}
//   //             </p>
//   //           </div>
//   //         )}
//   //       </div>
//   //     </div>
//   //   )
//   // }
//   if (content.type === "musaffah-image") {
//     return (
//       // Container: Keeps it full width/height with no padding (p-0)
//       <div className="h-full w-full flex flex-col bg-gray-900 p-0 relative">
//         {/* Image Wrapper: Removed 'border-4 border-red-500 shadow-2xl' */}
//         <div className="relative w-full h-full">
//           {/* Image itself: Removed 'filter grayscale contrast-125 sepia-50' and 'imageRendering: pixelated' */}
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{
//               backgroundImage: `url('${content.src}')`,
//             }}
//           />
//           {/* Removed the scanline overlay div entirely */}

//           {/* Listing text overlay - kept this styling so text is readable over the image */}
//           {content.listingText && (
//             <div className="absolute bottom-8 left-0 right-0 flex justify-center px-4">
//               <p className="text-sm text-yellow-300 font-mono font-bold max-w-xl text-center leading-snug tracking-widest uppercase bg-black/70 p-3 border-2 border-red-500 shadow-lg">
//                 {content.listingText}
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     )
//   }

//   // if (content.type === "nyuad-image") {
//   //   return (
//   //     <div className="h-full flex flex-col items-center justify-center p-8 md:p-16">
//   //       <div className="max-w-sm w-full aspect-[4/3] relative bg-neutral-50 border border-neutral-100">
//   //         <div
//   //           className="absolute inset-0 bg-cover bg-center"
//   //           style={{
//   //             backgroundImage: `url('${content.src}')`,
//   //           }}
//   //         />
//   //       </div>
//   //     </div>
//   //   )
//   // }
//   // if (content.type === "nyuad-image") {
//   //   return (
//   //     // CHANGE 2: Removed padding and centering constraints
//   //     <div className="h-full w-full p-0 bg-pink-100 border-8 border-purple-500 relative">
//   //       {/* Container is now full width/height */}
//   //       <div className="w-full h-full relative bg-white border-b-[6px] border-black">
//   //         <div
//   //           className="absolute inset-0 bg-cover bg-center"
//   //           style={{
//   //             backgroundImage: `url('${content.src}')`,
//   //           }}
//   //         />
//   //         <div className="absolute bottom-0 right-0 bg-purple-500 text-white p-2 text-xs font-bold uppercase tracking-widest z-10">
//   //           Documented.
//   //         </div>
//   //       </div>
//   //     </div>
//   //   )
//   // }
// if (content.type === "nyuad-image") {
//     return (
//       // Container: Full width/height, no padding (p-0) to hit the edges
//       <div className="h-full w-full p-0 relative">
//         {/* Image Wrapper: Full size, no borders, shadows, or rotation */}
//         <div className="w-full h-full relative">
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{
//               backgroundImage: `url('${content.src}')`,
//             }}
//           />
//         </div>
//       </div>
//     )
//   }
//   if (content.type === "institutional-text") {
//     return (
//       <div className="h-full flex flex-col items-center justify-center p-12 md:p-20">
//         <div className="max-w-lg w-full">
//           {content.header && (
//             <span className="block text-[9px] text-neutral-300 tracking-[0.25em] uppercase mb-6">{content.header}</span>
//           )}
//           <p className="text-xs md:text-sm text-neutral-500 font-mono leading-loose tracking-wide">{content.text}</p>
//         </div>
//       </div>
//     )
//   }

//   if (content.type === "list-text") {
//     return (
//       <div className="h-full flex flex-col items-center justify-center p-12 md:p-20">
//         <div className="max-w-lg w-full">
//           {content.header && (
//             <span className="block text-[9px] text-neutral-300 tracking-[0.25em] uppercase mb-6">{content.header}</span>
//           )}
//           <ul className="space-y-3">
//             {content.items?.map((item, i) => (
//               <li key={i} className="text-xs text-neutral-500 font-mono leading-relaxed tracking-wide">
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     )
//   }

//   if (content.type === "blank") {
//     return <div className="h-full bg-white" />
//   }

//   if (content.type === "nyuad-email") {
//     return (
//       <div className="h-full overflow-y-auto p-8 md:p-12">
//         <div className="max-w-lg mx-auto">
//           <pre className="text-[10px] md:text-xs text-neutral-500 font-mono leading-loose tracking-wide whitespace-pre-wrap">
//             {content.text}
//           </pre>
//         </div>
//       </div>
//     )
//   }

//   if (content.type === "colophon") {
//     return (
//       <div className="h-full flex flex-col items-center justify-center p-12 md:p-20">
//         <p className="text-[10px] md:text-xs text-neutral-400 tracking-wide leading-loose max-w-md text-center">
//           {content.text}
//         </p>
//       </div>
//     )
//   }

//   return null
// }

import { cn } from "@/lib/utils"
import type { PageContent } from "@/lib/book-content"

interface BookPageProps {
  content: PageContent
}

// FORCE the path to your specific repository name
const BASE_PATH = "/sophiyapaudel.github.io";

export function BookPage({ content }: BookPageProps) {
  // Maximalist Title Page
  if (content.type === "title") {
    return (
      <div className="relative h-full flex flex-col items-center justify-center p-24 text-center bg-yellow-300 border-[12px] border-black shadow-[15px_15px_0_rgba(0,0,0,1)] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/sophiyapaudel.github.io/noise.svg')] opacity-20 pointer-events-none" />
        <h1 className="relative z-10 text-6xl md:text-8xl font-black tracking-tighter text-red-700 uppercase mb-12 [text-shadow:8px_8px_0_black]">
          {content.title}
        </h1>
        {content.subtitle && (
          <p className="relative z-10 text-lg md:text-2xl text-white font-extrabold tracking-[0.4em] uppercase max-w-2xl leading-relaxed bg-black p-6 border-4 border-white transform -rotate-2 shadow-xl whitespace-pre-wrap">
            {content.subtitle}
          </p>
        )}
      </div>
    )
  }

  // Maximalist Section Title
  if (content.type === "section-title") {
    return (
      <div className="h-full flex flex-col items-center justify-center p-16 text-center bg-blue-900 border-8 border-yellow-400">
        <span className="text-xl text-yellow-400 tracking-[0.4em] uppercase mb-6 [text-shadow:2px_2px_0_black] transform rotate-1">
          {content.part}
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-[0.2em] text-white uppercase [text-shadow:4px_4px_0_rgba(255,0,0,0.8)]">
          {content.title}
        </h2>
      </div>
    )
  }

  // Maximalist Musaffah Image
  if (content.type === "musaffah-image") {
    return (
      <div className="h-full w-full flex flex-col bg-gray-900 p-0 relative">
        <div className="relative w-full h-full">
          {/* HARDCODED PATH FIX */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${BASE_PATH}${content.src}')`,
            }}
          />
          
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

  // Maximalist NYUAD Image
  if (content.type === "nyuad-image") {
    return (
      <div className="h-full w-full p-0 relative">
        <div className="w-full h-full relative">
          {/* HARDCODED PATH FIX */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${BASE_PATH}${content.src}')`,
            }}
          />
        </div>
      </div>
    )
  }

  // Maximalist Institutional Text
  if (content.type === "institutional-text") {
    return (
      <div className="h-full flex flex-col items-center justify-center p-16 md:p-24 bg-red-800 text-white">
        <div className="max-w-3xl w-full border-4 border-white bg-black/30 p-8 shadow-[6px_6px_0_#FFF]">
          {content.header && (
            <span className="block text-xl text-yellow-300 tracking-[0.3em] uppercase mb-8 font-extrabold border-b-4 border-yellow-300 pb-2">
              {content.header}
            </span>
          )}
          <p className="text-base md:text-lg text-white font-serif italic leading-loose tracking-normal [text-shadow:1px_1px_0_#000]">
            {content.text}
          </p>
          <div className="mt-8 h-2 bg-yellow-300 skew-y-1" />
        </div>
      </div>
    )
  }

  // Maximalist List Text
  if (content.type === "list-text") {
    return (
      <div className="h-full flex flex-col items-center justify-center p-16 md:p-24 bg-teal-800 text-white">
        <div className="max-w-3xl w-full border-8 border-red-500 bg-white p-10 shadow-[12px_12px_0_#EF4444]">
          {content.header && (
            <span className="block text-xl text-red-500 tracking-[0.3em] uppercase mb-8 font-black border-b-4 border-red-500 pb-2">
              {content.header}
            </span>
          )}
          <ul className="space-y-4">
            {content.items?.map((item, i) => (
              <li key={i} className="text-base text-gray-900 font-sans font-bold leading-snug tracking-wide border-l-4 border-teal-500 pl-4 py-1 bg-teal-50/50">
                <span className="text-teal-500 mr-2">{"//"}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  // Maximalist Blank Page
  if (content.type === "blank") {
    return <div className="h-full bg-gradient-to-br from-purple-900 to-red-900 border-[20px] border-yellow-400 shadow-inner" />
  }

  // Maximalist NYUAD Email
  if (content.type === "nyuad-email") {
    return (
      <div className="h-full overflow-y-auto p-12 md:p-20 bg-gray-900 border-8 border-green-500">
        <div className="max-w-4xl mx-auto bg-black p-10 border-4 border-white shadow-2xl">
          <p className="text-green-500 text-2xl font-mono mb-4 border-b-4 border-green-500 pb-2">
            TERMINAL_ACCESS_GRANTED $
          </p>
          <pre className="text-sm md:text-lg text-green-300 font-mono leading-relaxed tracking-normal whitespace-pre-wrap [text-shadow:0_0_2px_#00FF00]">
            {content.text}
          </pre>
          <p className="mt-8 text-green-500 text-2xl font-mono">
            END_OF_FILE
          </p>
        </div>
      </div>
    )
  }

  // Maximalist Colophon
  if (content.type === "colophon") {
    return (
      <div className="h-full flex flex-col items-center justify-center p-16 md:p-24 bg-gray-200 border-t-10 border-b-10 border-black transform skew-y-1">
        <div className="bg-white p-10 border-8 border-black shadow-[8px_8px_0_#9CA3AF] transform -skew-y-1">
          <p className="text-base md:text-xl text-black font-extrabold tracking-wide leading-snug max-w-xl text-center border-b-4 border-red-500 pb-4">
            **COLOPHON: DISPLACEMENT AND DOCUMENTATION**
          </p>
          <p className="mt-6 text-sm md:text-base text-gray-700 tracking-normal leading-relaxed max-w-xl text-center font-serif italic">
            {content.text}
          </p>
        </div>
      </div>
    )
  }

  return null
}
