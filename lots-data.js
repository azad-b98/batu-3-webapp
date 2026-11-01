/* ==========================================================================
   BATU 3 RESIDENTIAL PORTAL - DATA REPOSITORY (lots-data.js)
   ========================================================================== */

// Announcements shared across Login Page & Dashboard
let announcementsData = [
  {
    id: 1,
    title: "Road Maintenance & Drainage Upgrade",
    date: "November 2026",
    text: "Pavement widening and drain repairs will commence along the Lot 718 central access lane this coming Thursday. Please follow traffic signage."
  },
  {
    id: 2,
    title: "Lot Boundary Cadastral Verification",
    date: "October 2026",
    text: "Aerial survey alignment complete for all Blue plots (Lot 718) and Yellow plots (Lot 722). Individual deed markers updated."
  },
  {
    id: 3,
    title: "Community Security & Gate System",
    date: "October 2026",
    text: "Shared community access passcode remains active. Residents are requested not to disclose passwords to unauthorized visitors."
  }
];

// Moving Gallery Items (Displayed on Dashboard)
let galleryData = [
  {
    id: 1,
    title: "Main Entrance Gate",
    category: "Infrastructure",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Sector 718 Green Corridor",
    category: "Landscape",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Community Playground & Park",
    category: "Recreation",
    img: "https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Central Access Road Resurfacing",
    category: "Development",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Surau & Community Hall",
    category: "Facility",
    img: "https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&w=600&q=80"
  }
];

// Mapped Blue (Lot 718) and Yellow (Lot 722) Plots
let lotRepository = [
  // Sector 718 (Blue dots along the left bend, road, and middle street)
  { id: "718-01", color: "blue", sector: "718", x: 36.5, y: 32.5, owner: "En. Ahmad Faiz", contact: "012-3456789", address: "No. 1, Lorong Bendera, Batu 3" },
  { id: "718-02", color: "blue", sector: "718", x: 35.0, y: 27.0, owner: "Pn. Noraini Hassan", contact: "012-3456789", address: "No. 3, Lorong Bendera, Batu 3" },
  { id: "718-03", color: "blue", sector: "718", x: 35.0, y: 23.0, owner: "Mr. Tan Chee Keong", contact: "012-3456789", address: "No. 5, Lorong Bendera, Batu 3" },
  { id: "718-04", color: "blue", sector: "718", x: 34.8, y: 19.0, owner: "Haji Ramli Kassim", contact: "012-3456789", address: "No. 7, Lorong Bendera, Batu 3" },
  { id: "718-05", color: "blue", sector: "718", x: 34.0, y: 15.5, owner: "Pn. Zaleha binti Ali", contact: "012-3456789", address: "No. 9, Lorong Bendera, Batu 3" },
  { id: "718-06", color: "blue", sector: "718", x: 48.0, y: 15.5, owner: "Mr. Muthusamy Pillai", contact: "012-3456789", address: "No. 11, Lorong Bendera, Batu 3" },
  { id: "718-07", color: "blue", sector: "718", x: 48.5, y: 19.0, owner: "En. Khairul Anuar", contact: "012-3456789", address: "No. 13, Lorong Bendera, Batu 3" },
  { id: "718-08", color: "blue", sector: "718", x: 49.0, y: 23.0, owner: "Pn. Salmah Bakar", contact: "012-3456789", address: "No. 15, Lorong Bendera, Batu 3" },
  { id: "718-09", color: "blue", sector: "718", x: 49.0, y: 26.0, owner: "Mr. Lim Guan Hock", contact: "012-3456789", address: "No. 17, Lorong Bendera, Batu 3" },
  { id: "718-10", color: "blue", sector: "718", x: 49.5, y: 30.5, owner: "Dato' Sri Sulaiman", contact: "012-3456789", address: "No. 19, Lorong Bendera, Batu 3" },
  { id: "718-11", color: "blue", sector: "718", x: 60.5, y: 30.5, owner: "En. Zulkifli Harun", contact: "012-3456789", address: "No. 21, Lorong Bendera, Batu 3" },
  { id: "718-12", color: "blue", sector: "718", x: 60.5, y: 26.0, owner: "Pn. Rosnah Abdullah", contact: "012-3456789", address: "No. 23, Lorong Bendera, Batu 3" },
  { id: "718-13", color: "blue", sector: "718", x: 60.0, y: 22.5, owner: "Mr. Wong Kok Wai", contact: "012-3456789", address: "No. 25, Lorong Bendera, Batu 3" },
  { id: "718-14", color: "blue", sector: "718", x: 59.5, y: 19.0, owner: "En. Azman Shah", contact: "012-3456789", address: "No. 27, Lorong Bendera, Batu 3" },
  { id: "718-15", color: "blue", sector: "718", x: 59.5, y: 15.5, owner: "Pn. Faridah Othman", contact: "012-3456789", address: "No. 29, Lorong Bendera, Batu 3" },
  { id: "718-16", color: "blue", sector: "718", x: 45.0, y: 6.5, owner: "En. Razak Osman", contact: "012-3456789", address: "No. 31, Lorong Bendera, Batu 3" },
  { id: "718-17", color: "blue", sector: "718", x: 50.5, y: 6.5, owner: "Mr. David Lee", contact: "012-3456789", address: "No. 33, Lorong Bendera, Batu 3" },
  { id: "718-18", color: "blue", sector: "718", x: 56.0, y: 6.5, owner: "Pn. Halimah Said", address: "No. 2, Jalan Murni 718, Batu 3" },
  { id: "718-19", color: "blue", sector: "718", x: 62.0, y: 6.0, owner: "En. Shamsul Bahari", address: "No. 4, Jalan Murni 718, Batu 3" },
  { id: "718-20", color: "blue", sector: "718", x: 68.5, y: 6.0, owner: "Mr. Chong Wei Ming", address: "No. 6, Jalan Murni 718, Batu 3" },
  { id: "718-21", color: "blue", sector: "718", x: 74.0, y: 6.0, owner: "Pn. Rohani Yaakob", address: "No. 8, Jalan Murni 718, Batu 3" },
  { id: "718-22", color: "blue", sector: "718", x: 79.5, y: 10.0, owner: "En. Kamaruddin Jalil", address: "No. 10, Jalan Murni 718, Batu 3" },
  { id: "718-23", color: "blue", sector: "718", x: 76.0, y: 14.5, owner: "Mr. Rajesh Kumar", address: "No. 12, Jalan Murni 718, Batu 3" },
  { id: "718-24", color: "blue", sector: "718", x: 76.5, y: 18.0, owner: "Pn. Maznah Karim", address: "No. 14, Jalan Murni 718, Batu 3" },
  { id: "718-25", color: "blue", sector: "718", x: 77.0, y: 22.5, owner: "En. Iskandar Mirza", address: "No. 16, Jalan Murni 718, Batu 3" },
  { id: "718-26", color: "blue", sector: "718", x: 78.0, y: 26.0, owner: "Pn. Norliah Mansor", address: "No. 18, Jalan Murni 718, Batu 3" },
  { id: "718-27", color: "blue", sector: "718", x: 78.5, y: 30.0, owner: "Mr. Vincent Tan", address: "No. 20, Jalan Murni 718, Batu 3" },
  
  // Sector 720 (Yellow dots along top boundary, middle street, and right ridge)
  { id: "722-01", color: "yellow", sector: "722", x: 17.5, y: 92.5, owner: "Mr. Alan Chew", contact: "012-3456789", address: "No. 2, Lorong Atas 722, Batu 3" },
  { id: "722-02", color: "yellow", sector: "722", x: 19.5, y: 87.5, owner: "En. Mustaffa Kamal", contact: "012-3456789", address: "No. 4, Lorong Atas 722, Batu 3" },
  { id: "722-03", color: "yellow", sector: "722", x: 20.0, y: 83.5, owner: "Pn. Rohana Hashim", contact: "012-3456789", address: "No. 6, Lorong Atas 722, Batu 3" },
  { id: "722-04", color: "yellow", sector: "722", x: 21.0, y: 78.5, owner: "Mr. Eric Tay", contact: "012-3456789", address: "No. 8, Lorong Atas 722, Batu 3" },
  { id: "722-05", color: "yellow", sector: "722", x: 22.5, y: 74.0, owner: "En. Danial Ariffin", contact: "012-3456789", address: "No. 10, Lorong Atas 722, Batu 3" },
  { id: "722-06", color: "yellow", sector: "722", x: 23.2, y: 69.5, owner: "Pn. Zaharah Isa", contact: "012-3456789", address: "No. 12, Lorong Atas 722, Batu 3" },
  { id: "722-07", color: "yellow", sector: "722", x: 24.0, y: 65.0, owner: "Mr. Gary Fong", contact: "012-3456789", address: "No. 14, Lorong Atas 722, Batu 3" },
  { id: "722-08", color: "yellow", sector: "722", x: 25.2, y: 61.0, owner: "Pn. Azizah Latif", contact: "012-3456789", address: "No. 1, Jalan Sejahtera 722, Batu 3" },
  { id: "722-09", color: "yellow", sector: "722", x: 26.2, y: 56.5, owner: "En. Ridzuan Yusof", contact: "012-3456789", address: "No. 3, Jalan Sejahtera 722, Batu 3" },
  { id: "722-10", color: "yellow", sector: "722", x: 27.5, y: 52.5, owner: "Mr. Kevin Low", contact: "012-3456789", address: "No. 5, Jalan Sejahtera 722, Batu 3" },
  { id: "722-11", color: "yellow", sector: "722", x: 28.5, y: 48.5, owner: "Pn. Mastura Daud", contact: "012-3456789", address: "No. 7, Jalan Sejahtera 722, Batu 3" },
  { id: "722-12", color: "yellow", sector: "722", x: 29.8, y: 45.0, owner: "En. Nasir Wahab", contact: "012-3456789", contact: "012-3456789", address: "No. 9, Jalan Sejahtera 722, Batu 3" },
  { id: "722-13", color: "yellow", sector: "722", x: 30.2, y: 41.0, owner: "Pn. Khatijah Ibrahim", address: "No. 11, Jalan Sejahtera 722, Batu 3" },
  { id: "722-14", color: "yellow", sector: "722", x: 31.8, y: 37.0, owner: "Mr. Jason Lim", contact: "012-3456789", address: "No. 13, Jalan Sejahtera 722, Batu 3" },
  { id: "722-15", color: "yellow", sector: "722", x: 49.5, y: 36.5, owner: "En. Fadzil Ahmad", contact: "012-3456789", address: "No. 15, Jalan Sejahtera 722, Batu 3" },
  { id: "722-16", color: "yellow", sector: "722", x: 49.0, y: 41.0, owner: "Pn. Wan Mariam", contact: "012-3456789", address: "No. 17, Jalan Sejahtera 722, Batu 3" },
  { id: "722-17", color: "yellow", sector: "722", x: 47.5, y: 45.5, owner: "Mr. Michael Teoh", address: "No. 19, Jalan Sejahtera 722, Batu 3" },
  { id: "722-18", color: "yellow", sector: "722", x: 48.0, y: 49.5, owner: "En. Saiful Bahri", contact: "012-3456789", address: "No. 21, Jalan Sejahtera 722, Batu 3" },
  { id: "722-19", color: "yellow", sector: "722", x: 47.5, y: 53.5, owner: "Pn. Harlina Hamid", address: "No. 23, Jalan Sejahtera 722, Batu 3" },
  { id: "722-20", color: "yellow", sector: "722", x: 47.0, y: 58.0, owner: "Mr. Bernard Soo", contact: "012-3456789", address: "No. 25, Jalan Sejahtera 722, Batu 3" },
  { id: "722-21", color: "yellow", sector: "722", x: 46.5, y: 62.0, owner: "En. Imran Ghazali", address: "No. 27, Jalan Sejahtera 722, Batu 3" },
  { id: "722-22", color: "yellow", sector: "722", x: 45.5, y: 67.0, owner: "Pn. Rohani Talib", contact: "012-3456789", address: "No. 29, Jalan Sejahtera 722, Batu 3" },
  { id: "722-23", color: "yellow", sector: "722", x: 44.5, y: 71.0, owner: "En. Hishamuddin Mat", contact: "012-3456789", address: "No. 31, Jalan Sejahtera 722, Batu 3" },
  { id: "722-24", color: "yellow", sector: "722", x: 43.5, y: 77.2, owner: "Mr. Daniel Tan", address: "No. 33, Jalan Sejahtera 722, Batu 3" },
  { id: "722-25", color: "yellow", sector: "722", x: 43.0, y: 82.5, owner: "En. Shukri Baba", contact: "012-3456789", address: "No. 2, Jalan Rimba 722, Batu 3" },
  { id: "722-26", color: "yellow", sector: "722", x: 42.2, y: 86.8, owner: "Pn. Norizan Bakri", address: "No. 4, Jalan Rimba 722, Batu 3" },
  { id: "722-27", color: "yellow", sector: "722", x: 40.0, y: 92.5, owner: "Mr. Justin Loke", contact: "012-3456789", address: "No. 6, Jalan Rimba 722, Batu 3" },
  { id: "722-28", color: "yellow", sector: "722", x: 50.0, y: 91.0, owner: "En. Sabri Yunus", contact: "012-3456789", address: "No. 8, Jalan Rimba 722, Batu 3" },
  { id: "722-29", color: "yellow", sector: "722", x: 50.5, y: 85.5, owner: "Pn. Zuraidah Kamar", contact: "012-3456789", address: "No. 10, Jalan Rimba 722, Batu 3" },
  { id: "722-30", color: "yellow", sector: "722", x: 52.0, y: 82.0, owner: "Mr. Wilson Ng", contact: "012-3456789", address: "No. 12, Jalan Rimba 722, Batu 3" },
  { id: "722-31", color: "yellow", sector: "722", x: 53.0, y: 77.0, owner: "En. Nizamuddin", address: "No. 14, Jalan Rimba 722, Batu 3" },
  { id: "722-32", color: "yellow", sector: "722", x: 54.0, y: 72.5, owner: "Pn. Shuhada Radzi", contact: "012-3456789", address: "No. 16, Jalan Rimba 722, Batu 3" },
  { id: "722-33", color: "yellow", sector: "722", x: 54.5, y: 68.0, owner: "Mr. Andy Wong", address: "No. 18, Jalan Rimba 722, Batu 3" },
  { id: "722-34", color: "yellow", sector: "722", x: 55.5, y: 64.5, owner: "En. Fazley Yaacob", contact: "012-3456789", address: "No. 20, Jalan Rimba 722, Batu 3" },
  { id: "722-35", color: "yellow", sector: "722", x: 56.5, y: 60.5, owner: "Pn. Siti Mariam", address: "No. 22, Jalan Rimba 722, Batu 3" },
  { id: "722-36", color: "yellow", sector: "722", x: 57.0, y: 56.0, owner: "En. Hairi Katiman", address: "No. 24, Jalan Rimba 722, Batu 3" },
  { id: "722-37", color: "yellow", sector: "722", x: 58.5, y: 52.5, owner: "Mr. Steven Chew", contact: "012-3456789", address: "No. 26, Jalan Rimba 722, Batu 3" },
  { id: "722-38", color: "yellow", sector: "722", x: 59.0, y: 48.2, owner: "Pn. Latifah Omar", address: "No. 28, Jalan Rimba 722, Batu 3" },
  { id: "722-39", color: "yellow", sector: "722", x: 60.0, y: 44.8, owner: "En. Firdaus Naim", address: "No. 30, Jalan Rimba 722, Batu 3" },
  { id: "722-40", color: "yellow", sector: "722", x: 61.5, y: 40.0, owner: "Mr. Christopher Tan", address: "No. 32, Jalan Rimba 722, Batu 3" },
  { id: "722-41", color: "yellow", sector: "722", x: 62.0, y: 36.0, owner: "Pn. Norashikin", address: "No. 34, Jalan Rimba 722, Batu 3" },
  { id: "722-42", color: "yellow", sector: "722", x: 77.5, y: 37.0, owner: "En. Tawfiq Ismail", address: "No. 36, Jalan Rimba 722, Batu 3" },
  { id: "722-43", color: "yellow", sector: "722", x: 77.0, y: 40.5, owner: "Mr. Adrian Lim", address: "No. 38, Jalan Rimba 722, Batu 3" },
  { id: "722-44", color: "yellow", sector: "722", x: 76.5, y: 44.0, owner: "Pn. Farah Nadia", address: "No. 40, Jalan Rimba 722, Batu 3" },
  { id: "722-45", color: "yellow", sector: "722", x: 76.0, y: 48.0, owner: "En. Azharuddin", address: "No. 42, Jalan Rimba 722, Batu 3" },
  { id: "722-46", color: "yellow", sector: "722", x: 75.5, y: 52.0, owner: "Mr. Kelvin Ong", address: "No. 44, Jalan Rimba 722, Batu 3" },
  { id: "722-47", color: "yellow", sector: "722", x: 75.0, y: 56.0, owner: "Pn. Siti Aisyah", address: "No. 46, Jalan Rimba 722, Batu 3" },
  { id: "722-48", color: "yellow", sector: "722", x: 74.5, y: 60.0, owner: "En. Hafizuddin", address: "No. 48, Jalan Rimba 722, Batu 3" },
  { id: "722-49", color: "yellow", sector: "722", x: 74.0, y: 64.0, owner: "Mr. Raymond Tan", address: "No. 50, Jalan Rimba 722, Batu 3" },
  { id: "722-50", color: "yellow", sector: "722", x: 73.5, y: 68.0, owner: "Pn. Noraini", address: "No. 52, Jalan Rimba 722, Batu 3" },
  { id: "722-51", color: "yellow", sector: "722", x: 73.0, y: 72.0, owner: "En. Zainal Abidin", address: "No. 54, Jalan Rimba 722, Batu 3" },
  { id: "722-52", color: "yellow", sector: "722", x: 72.5, y: 77.0, owner: "Mr. Adrian Lim", address: "No. 56, Jalan Rimba 722, Batu 3" },
  { id: "722-53", color: "yellow", sector: "722", x: 72.0, y: 82.0, owner: "Pn. Farah Nadia", address: "No. 58, Jalan Rimba 722, Batu 3" },
  { id: "722-54", color: "yellow", sector: "722", x: 71.5, y: 85.0, owner: "En. Azharuddin", address: "No. 60, Jalan Rimba 722, Batu 3" },
  { id: "722-55", color: "yellow", sector: "722", x: 71.0, y: 91.0, owner: "Mr. Kelvin Ong", address: "No. 62, Jalan Rimba 722, Batu 3" },
];