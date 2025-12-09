module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/book-content.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bookContent",
    ()=>bookContent
]);
const bookContent = [
    // PAGE 1: Title
    {
        type: "title",
        title: "Archives of Absence",
        subtitle: "A study in structural inequality through domestic space\nSophiya"
    },
    // PAGE 9: NYUAD Email (long scrollable text)
    {
        type: "nyuad-email",
        text: `Subject: NYU Shanghai J-term 2026 housing application email


Hello,
Thank you for choosing to attend J-Term 2026 at NYU Shanghai! We are excited to welcome you and are pleased to share that the J-Term 2026 Housing Application is now open, room 1400 [hidden information] woven quietly into the announcement. In the event there has been a change in your plans, kindly update your status with your Academic Advisor as soon as possible, نهارك سعيد، هل لا يزال هذا العنصر متوفراً؟ as these updates help us prepare for your arrival.
This email contains important information regarding on-campus housing at NYU Shanghai, Labors Room in Building Musaffah, month/2600 د.إ, and we encourage you to review it carefully.
Important Dates (ALL IN SHANGHAI TIME)
Application Open: Monday, November 10, 2025
Application Closes: 9 AM, Monday, November 24, 2025
Housing Assignments Released: Late December, 2025, Room for rent — Free/month appearing like a stray listing between formal deadlines.
Move-in Day: 9 am, Sunday, January 4, 2026
Move-out Day: 12 pm, Saturday, January 17, 2026, gently overlapping with Bachelor’s Room/Hall available in Shabiya 12, month/1000 د.إ.
Housing Details
For the J-Term 2026 session, NYU Abu Dhabi students will be housed at Jingyao Residence Hall in double occupancy rooms (priced at 660 USD per student), a detail that briefly echoes Bachelors Flat, Rooms & Partitions — Electra/Najda — month/1000 د.إ as another kind of temporary accommodation.
You can request a preferred roommate in the application, or provide lifestyle information so we can pair you with compatible students, Room for rent 🎈🎈 nearby, to ensure a comfortable living environment. If you have any special needs, kindly submit an application to the Moses Center for Accessibility and Inclusive Culture, a process as essential as scanning Labour rooms available in musaffah, floral bedsheet folded at the corner of an online listing.
Students who do not submit their application by the deadline will be automatically assigned to an available on-campus housing space, a reminder that mirrors how Daily Rooms for rent in Abudhabi — month/1100 د.إ are offered to whoever contacts first. Your room includes bed linens and a pillow, a private bathroom, kitchen, and washing machine, details that contrast the simplicity of metal bunk frames in Electra/Najda; residents can borrow a basic cookware set from the Tower 5 Resource Center (during business hours).
Please bring a small amount of cash in the local currency for immediate needs, upon arrival or set up the Alipay APP with an international Credit Card, a suggestion that sits alongside the practical notes in Room for rent — Free/month posts often seen circulating between workers.
Policies & Resources
All students studying at NYU Shanghai must familiarize themselves with the Student Conduct Policies and Processes, a requirement that quietly resonates with the unspoken rules within Labors Room Musaffah Available advertisements. You can review this information here: NYU Shanghai Community Standards.
If you have any questions, please don’t hesitate to reach out to us, نهارك سعيد، هل لا يزال هذا العنصر متوفراً؟ folded softly into the invitation for support. We are looking forward to welcoming you to NYU Shanghai and making your J-Term experience memorable!
Best regards,
Office of Residential Education and Housing`
    },
    // PAGE 2: Musaffah image
    {
        type: "musaffah-image",
        src: "/img1.jpg",
        listingText: ""
    },
    // PAGE 3: Musaffah image
    {
        type: "musaffah-image",
        src: "/img2.PNG",
        listingText: ""
    },
    // PAGE 4: Musaffah image (full bleed)
    {
        type: "musaffah-image",
        src: "/img3.PNG",
        fullBleed: true
    },
    {
        type: "musaffah-image",
        src: "/img10.png",
        listingText: ""
    },
    // PAGE 5: Musaffah image
    {
        type: "musaffah-image",
        src: "/img4.PNG",
        listingText: ""
    },
    // PAGE 6: NYUAD dorm image
    {
        type: "nyuad-image",
        src: "/img5.jpg"
    },
    // PAGE 7: Musaffah image
    {
        type: "musaffah-image",
        src: "/img6.jpg",
        listingText: ""
    },
    {
        type: "musaffah-image",
        src: "/img9.png",
        listingText: ""
    },
    // PAGE 8: Musaffah image
    {
        type: "musaffah-image",
        src: "/img7.jpg",
        listingText: ""
    },
    {
        type: "musaffah-image",
        src: "/img8.jpg",
        listingText: ""
    },
    // PAGE 10: Colophon / Closing
    {
        type: "colophon",
        text: "Two Archives of Absence documents the visual and bureaucratic traces of domestic space across regimes of precarity and privilege. The Musaffah images are sourced from Facebook Marketplace bed space listings. The NYUAD materials are excerpted from official housing communications. Neither archive preserves the presence of its inhabitants—only the conditions of their passage."
    }
];
}),
"[project]/components/book-page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookPage",
    ()=>BookPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function BookPage({ content }) {
    if (content.type === "title") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col items-center justify-center p-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl md:text-4xl font-light tracking-[0.3em] text-neutral-900 uppercase mb-8",
                    children: content.title
                }, void 0, false, {
                    fileName: "[project]/components/book-page.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                content.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs md:text-sm text-neutral-400 tracking-[0.2em] uppercase max-w-md leading-relaxed whitespace-pre-wrap",
                    children: content.subtitle
                }, void 0, false, {
                    fileName: "[project]/components/book-page.tsx",
                    lineNumber: 16,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/book-page.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this);
    }
    if (content.type === "section-title") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col items-center justify-center p-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] text-neutral-300 tracking-[0.3em] uppercase mb-4",
                    children: content.part
                }, void 0, false, {
                    fileName: "[project]/components/book-page.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg md:text-2xl font-light tracking-[0.2em] text-neutral-800 uppercase",
                    children: content.title
                }, void 0, false, {
                    fileName: "[project]/components/book-page.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/book-page.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this);
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
        return(// Container: Keeps it full width/height with no padding (p-0)
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full flex flex-col bg-gray-900 p-0 relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-cover bg-center",
                        style: {
                            backgroundImage: `url('${content.src}')`
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/book-page.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    content.listingText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-8 left-0 right-0 flex justify-center px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-yellow-300 font-mono font-bold max-w-xl text-center leading-snug tracking-widest uppercase bg-black/70 p-3 border-2 border-red-500 shadow-lg",
                            children: content.listingText
                        }, void 0, false, {
                            fileName: "[project]/components/book-page.tsx",
                            lineNumber: 110,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/book-page.tsx",
                        lineNumber: 109,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/book-page.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/book-page.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this));
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
        return(// Container: Full width/height, no padding (p-0) to hit the edges
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full p-0 relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-cover bg-center",
                    style: {
                        backgroundImage: `url('${content.src}')`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/book-page.tsx",
                    lineNumber: 159,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/book-page.tsx",
                lineNumber: 158,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/book-page.tsx",
            lineNumber: 156,
            columnNumber: 7
        }, this));
    }
    if (content.type === "institutional-text") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col items-center justify-center p-12 md:p-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-lg w-full",
                children: [
                    content.header && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block text-[9px] text-neutral-300 tracking-[0.25em] uppercase mb-6",
                        children: content.header
                    }, void 0, false, {
                        fileName: "[project]/components/book-page.tsx",
                        lineNumber: 174,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs md:text-sm text-neutral-500 font-mono leading-loose tracking-wide",
                        children: content.text
                    }, void 0, false, {
                        fileName: "[project]/components/book-page.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/book-page.tsx",
                lineNumber: 172,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/book-page.tsx",
            lineNumber: 171,
            columnNumber: 7
        }, this);
    }
    if (content.type === "list-text") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col items-center justify-center p-12 md:p-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-lg w-full",
                children: [
                    content.header && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block text-[9px] text-neutral-300 tracking-[0.25em] uppercase mb-6",
                        children: content.header
                    }, void 0, false, {
                        fileName: "[project]/components/book-page.tsx",
                        lineNumber: 187,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-3",
                        children: content.items?.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "text-xs text-neutral-500 font-mono leading-relaxed tracking-wide",
                                children: item
                            }, i, false, {
                                fileName: "[project]/components/book-page.tsx",
                                lineNumber: 191,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/book-page.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/book-page.tsx",
                lineNumber: 185,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/book-page.tsx",
            lineNumber: 184,
            columnNumber: 7
        }, this);
    }
    if (content.type === "blank") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full bg-white"
        }, void 0, false, {
            fileName: "[project]/components/book-page.tsx",
            lineNumber: 202,
            columnNumber: 12
        }, this);
    }
    if (content.type === "nyuad-email") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full overflow-y-auto p-8 md:p-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-lg mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                    className: "text-[10px] md:text-xs text-neutral-500 font-mono leading-loose tracking-wide whitespace-pre-wrap",
                    children: content.text
                }, void 0, false, {
                    fileName: "[project]/components/book-page.tsx",
                    lineNumber: 209,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/book-page.tsx",
                lineNumber: 208,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/book-page.tsx",
            lineNumber: 207,
            columnNumber: 7
        }, this);
    }
    if (content.type === "colophon") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full flex flex-col items-center justify-center p-12 md:p-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] md:text-xs text-neutral-400 tracking-wide leading-loose max-w-md text-center",
                children: content.text
            }, void 0, false, {
                fileName: "[project]/components/book-page.tsx",
                lineNumber: 220,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/book-page.tsx",
            lineNumber: 219,
            columnNumber: 7
        }, this);
    }
    return null;
}
}),
"[project]/app/print/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PrintBook
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$book$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/book-content.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$book$2d$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/book-page.tsx [app-rsc] (ecmascript)");
;
;
;
function PrintBook() {
    return(// We use 'print:block' to ensure this shows up properly even if flex interferes
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-white print:block",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$book$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["bookContent"].map((pageContent, index)=>// KEY FIX: Explicitly set 148mm x 210mm for each item in the list
            // This stops the pages from "drifting" or creating 25 blank pages.
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "break-after-page relative mx-auto",
                style: {
                    width: '148mm',
                    height: '210mm'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$book$2d$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BookPage"], {
                    content: pageContent
                }, void 0, false, {
                    fileName: "[project]/app/print/page.tsx",
                    lineNumber: 16,
                    columnNumber: 11
                }, this)
            }, index, false, {
                fileName: "[project]/app/print/page.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/print/page.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this));
}
}),
"[project]/app/print/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/print/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fb87a655._.js.map