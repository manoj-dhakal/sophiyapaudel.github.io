export type PageContent =
  | { type: "title"; title: string; subtitle?: string }
  | { type: "section-title"; part: string; title: string }
  | { type: "musaffah-image"; src: string; listingText?: string; fullBleed?: boolean }
  | { type: "nyuad-image"; src: string }
  | { type: "institutional-text"; header?: string; text: string }
  | { type: "list-text"; header?: string; items: string[] }
  | { type: "blank" }
  | { type: "colophon"; text: string }
  | { type: "nyuad-email"; text: string }

export const bookContent: PageContent[] = [
  // PAGE 1: Title
  {
    type: "title",
    title: "Archives of Absence",
    subtitle: "A study in structural inequality through domestic space\nSophiya",
  
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
Office of Residential Education and Housing`,
  },

  // PAGE 2: Musaffah image
  {
    type: "musaffah-image",
    src: "/img1.jpg",
    listingText: "",
  },

  // PAGE 3: Musaffah image
  {
    type: "musaffah-image",
    src: "/img2.PNG",
    listingText: "",
  },

  // PAGE 4: Musaffah image (full bleed)
  {
    type: "musaffah-image",
    src: "/img3.PNG",
    fullBleed: true,
  },
  {
    type: "musaffah-image",
    src: "/img10.png",
    listingText: "",
  },

  // PAGE 5: Musaffah image
  {
    type: "musaffah-image",
    src: "/img4.PNG",
    listingText: "",
  },

  // PAGE 6: NYUAD dorm image
  {
    type: "nyuad-image",
    src: "/img5.jpg",
  },

  // PAGE 7: Musaffah image
  {
    type: "musaffah-image",
    src: "/img6.jpg",
    listingText: "",
  },
  {
    type: "musaffah-image",
    src: "/img9.png",
    listingText: "",
  },

  // PAGE 8: Musaffah image
  {
    type: "musaffah-image",
    src: "/img7.jpg",
    listingText: "",
  },
  {
    type: "musaffah-image",
    src: "/img8.jpg",
    listingText: "",
  },
  
  

  // PAGE 10: Colophon / Closing
  {
    type: "colophon",
    text: "Two Archives of Absence documents the visual and bureaucratic traces of domestic space across regimes of precarity and privilege. The Musaffah images are sourced from Facebook Marketplace bed space listings. The NYUAD materials are excerpted from official housing communications. Neither archive preserves the presence of its inhabitants—only the conditions of their passage.",
  },
]
