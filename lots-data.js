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
    text: "Aerial survey alignment complete for all Blue plots (Lot 718) and Yellow plots (Lot 720). Individual deed markers updated."
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

// Mapped Blue (Lot 718) and Yellow (Lot 720) Plots
let lotRepository = [
  // Sector 718 (Blue dots along the left bend, road, and middle street)
  { id: "718-01", color: "blue", sector: "718", x: 36.5, y: 11.5, owner: "En. Ahmad Faiz", contact: "012-3456789", address: "No. 1, Lorong Bendera, Batu 3" },
  { id: "718-02", color: "blue", sector: "718", x: 36.8, y: 22.0, owner: "Pn. Noraini Hassan", contact: "012-3456789", address: "No. 3, Lorong Bendera, Batu 3" },
  { id: "718-03", color: "blue", sector: "718", x: 36.8, y: 25.5, owner: "Mr. Tan Chee Keong", contact: "012-3456789", address: "No. 5, Lorong Bendera, Batu 3" },
  { id: "718-04", color: "blue", sector: "718", x: 36.8, y: 28.5, owner: "Haji Ramli Kassim", contact: "012-3456789", address: "No. 7, Lorong Bendera, Batu 3" },
  { id: "718-05", color: "blue", sector: "718", x: 37.0, y: 32.0, owner: "Pn. Zaleha binti Ali", contact: "012-3456789", address: "No. 9, Lorong Bendera, Batu 3" },
  { id: "718-06", color: "blue", sector: "718", x: 37.0, y: 37.5, owner: "Mr. Muthusamy Pillai", contact: "012-3456789", address: "No. 11, Lorong Bendera, Batu 3" },
  { id: "718-07", color: "blue", sector: "718", x: 36.0, y: 42.5, owner: "En. Khairul Anuar", contact: "012-3456789", address: "No. 13, Lorong Bendera, Batu 3" },
  { id: "718-08", color: "blue", sector: "718", x: 35.5, y: 47.0, owner: "Pn. Salmah Bakar", contact: "012-3456789", address: "No. 15, Lorong Bendera, Batu 3" },
  { id: "718-09", color: "blue", sector: "718", x: 34.5, y: 51.5, owner: "Mr. Lim Guan Hock", contact: "012-3456789", address: "No. 17, Lorong Bendera, Batu 3" },
  { id: "718-10", color: "blue", sector: "718", x: 33.0, y: 56.5, owner: "Dato' Sri Sulaiman", contact: "012-3456789", address: "No. 19, Lorong Bendera, Batu 3" },
  { id: "718-11", color: "blue", sector: "718", x: 30.5, y: 65.0, owner: "En. Zulkifli Harun", address: "No. 21, Lorong Bendera, Batu 3" },
  { id: "718-12", color: "blue", sector: "718", x: 30.0, y: 68.5, owner: "Pn. Rosnah Abdullah", address: "No. 23, Lorong Bendera, Batu 3" },
  { id: "718-13", color: "blue", sector: "718", x: 27.5, y: 72.0, owner: "Mr. Wong Kok Wai", address: "No. 25, Lorong Bendera, Batu 3" },
  { id: "718-14", color: "blue", sector: "718", x: 27.5, y: 75.5, owner: "En. Azman Shah", address: "No. 27, Lorong Bendera, Batu 3" },
  { id: "718-15", color: "blue", sector: "718", x: 26.0, y: 78.5, owner: "Pn. Faridah Othman", address: "No. 29, Lorong Bendera, Batu 3" },
  { id: "718-16", color: "blue", sector: "718", x: 24.5, y: 86.5, owner: "En. Razak Osman", address: "No. 31, Lorong Bendera, Batu 3" },
  { id: "718-17", color: "blue", sector: "718", x: 24.2, y: 90.0, owner: "Mr. David Lee", address: "No. 33, Lorong Bendera, Batu 3" },
  { id: "718-18", color: "blue", sector: "718", x: 49.5, y: 21.5, owner: "Pn. Halimah Said", address: "No. 2, Jalan Murni 718, Batu 3" },
  { id: "718-19", color: "blue", sector: "718", x: 49.5, y: 25.5, owner: "En. Shamsul Bahari", address: "No. 4, Jalan Murni 718, Batu 3" },
  { id: "718-20", color: "blue", sector: "718", x: 49.5, y: 29.0, owner: "Mr. Chong Wei Ming", address: "No. 6, Jalan Murni 718, Batu 3" },
  { id: "718-21", color: "blue", sector: "718", x: 49.5, y: 33.0, owner: "Pn. Rohani Yaakob", address: "No. 8, Jalan Murni 718, Batu 3" },
  { id: "718-22", color: "blue", sector: "718", x: 49.5, y: 38.0, owner: "En. Kamaruddin Jalil", address: "No. 10, Jalan Murni 718, Batu 3" },
  { id: "718-23", color: "blue", sector: "718", x: 49.2, y: 41.5, owner: "Mr. Rajesh Kumar", address: "No. 12, Jalan Murni 718, Batu 3" },
  { id: "718-24", color: "blue", sector: "718", x: 48.5, y: 45.0, owner: "Pn. Maznah Karim", address: "No. 14, Jalan Murni 718, Batu 3" },
  { id: "718-25", color: "blue", sector: "718", x: 48.0, y: 48.0, owner: "En. Iskandar Mirza", address: "No. 16, Jalan Murni 718, Batu 3" },
  { id: "718-26", color: "blue", sector: "718", x: 46.5, y: 55.0, owner: "Pn. Norliah Mansor", address: "No. 18, Jalan Murni 718, Batu 3" },
  { id: "718-27", color: "blue", sector: "718", x: 45.8, y: 59.0, owner: "Mr. Vincent Tan", address: "No. 20, Jalan Murni 718, Batu 3" },
  { id: "718-28", color: "blue", sector: "718", x: 43.5, y: 62.5, owner: "En. Johari Salleh", address: "No. 22, Jalan Murni 718, Batu 3" },
  { id: "718-29", color: "blue", sector: "718", x: 43.5, y: 65.0, owner: "Pn. Safiah Hamid", address: "No. 24, Jalan Murni 718, Batu 3" },
  { id: "718-30", color: "blue", sector: "718", x: 41.0, y: 71.5, owner: "En. Lokman Hakim", address: "No. 26, Jalan Murni 718, Batu 3" },
  { id: "718-31", color: "blue", sector: "718", x: 39.5, y: 75.0, owner: "Pn. Ainon Mahbob", address: "No. 28, Jalan Murni 718, Batu 3" },
  { id: "718-32", color: "blue", sector: "718", x: 39.0, y: 78.5, owner: "Mr. Kenneth Seah", address: "No. 30, Jalan Murni 718, Batu 3" },
  { id: "718-33", color: "blue", sector: "718", x: 38.0, y: 82.5, owner: "En. Syawaluddin", address: "No. 32, Jalan Murni 718, Batu 3" },
  { id: "718-34", color: "blue", sector: "718", x: 37.5, y: 86.0, owner: "Pn. Normala Samad", address: "No. 34, Jalan Murni 718, Batu 3" },
  { id: "718-35", color: "blue", sector: "718", x: 36.5, y: 89.5, owner: "En. Badrul Hisyam", address: "No. 36, Jalan Murni 718, Batu 3" },

  // Sector 720 (Yellow dots along top boundary, middle street, and right ridge)
  { id: "720-01", color: "yellow", sector: "720", x: 45.5, y: 12.5, owner: "Mr. Alan Chew", address: "No. 2, Lorong Atas 720, Batu 3" },
  { id: "720-02", color: "yellow", sector: "720", x: 49.8, y: 12.5, owner: "En. Mustaffa Kamal", address: "No. 4, Lorong Atas 720, Batu 3" },
  { id: "720-03", color: "yellow", sector: "720", x: 55.5, y: 12.5, owner: "Pn. Rohana Hashim", address: "No. 6, Lorong Atas 720, Batu 3" },
  { id: "720-04", color: "yellow", sector: "720", x: 60.0, y: 12.5, owner: "Mr. Eric Tay", address: "No. 8, Lorong Atas 720, Batu 3" },
  { id: "720-05", color: "yellow", sector: "720", x: 65.5, y: 12.2, owner: "En. Danial Ariffin", address: "No. 10, Lorong Atas 720, Batu 3" },
  { id: "720-06", color: "yellow", sector: "720", x: 69.2, y: 12.2, owner: "Pn. Zaharah Isa", address: "No. 12, Lorong Atas 720, Batu 3" },
  { id: "720-07", color: "yellow", sector: "720", x: 74.5, y: 12.2, owner: "Mr. Gary Fong", address: "No. 14, Lorong Atas 720, Batu 3" },
  { id: "720-08", color: "yellow", sector: "720", x: 60.2, y: 21.0, owner: "Pn. Azizah Latif", address: "No. 1, Jalan Sejahtera 720, Batu 3" },
  { id: "720-09", color: "yellow", sector: "720", x: 60.2, y: 25.5, owner: "En. Ridzuan Yusof", address: "No. 3, Jalan Sejahtera 720, Batu 3" },
  { id: "720-10", color: "yellow", sector: "720", x: 60.5, y: 28.5, owner: "Mr. Kevin Low", address: "No. 5, Jalan Sejahtera 720, Batu 3" },
  { id: "720-11", color: "yellow", sector: "720", x: 60.5, y: 32.5, owner: "Pn. Mastura Daud", address: "No. 7, Jalan Sejahtera 720, Batu 3" },
  { id: "720-12", color: "yellow", sector: "720", x: 60.8, y: 37.5, owner: "En. Nasir Wahab", address: "No. 9, Jalan Sejahtera 720, Batu 3" },
  { id: "720-13", color: "yellow", sector: "720", x: 59.2, y: 42.5, owner: "Pn. Khatijah Ibrahim", address: "No. 11, Jalan Sejahtera 720, Batu 3" },
  { id: "720-14", color: "yellow", sector: "720", x: 58.8, y: 48.5, owner: "Mr. Jason Lim", address: "No. 13, Jalan Sejahtera 720, Batu 3" },
  { id: "720-15", color: "yellow", sector: "720", x: 56.8, y: 53.5, owner: "En. Fadzil Ahmad", address: "No. 15, Jalan Sejahtera 720, Batu 3" },
  { id: "720-16", color: "yellow", sector: "720", x: 55.5, y: 58.0, owner: "Pn. Wan Mariam", address: "No. 17, Jalan Sejahtera 720, Batu 3" },
  { id: "720-17", color: "yellow", sector: "720", x: 55.0, y: 61.5, owner: "Mr. Michael Teoh", address: "No. 19, Jalan Sejahtera 720, Batu 3" },
  { id: "720-18", color: "yellow", sector: "720", x: 54.0, y: 65.5, owner: "En. Saiful Bahri", address: "No. 21, Jalan Sejahtera 720, Batu 3" },
  { id: "720-19", color: "yellow", sector: "720", x: 52.5, y: 69.5, owner: "Pn. Harlina Hamid", address: "No. 23, Jalan Sejahtera 720, Batu 3" },
  { id: "720-20", color: "yellow", sector: "720", x: 51.5, y: 73.5, owner: "Mr. Bernard Soo", address: "No. 25, Jalan Sejahtera 720, Batu 3" },
  { id: "720-21", color: "yellow", sector: "720", x: 50.8, y: 77.0, owner: "En. Imran Ghazali", address: "No. 27, Jalan Sejahtera 720, Batu 3" },
  { id: "720-22", color: "yellow", sector: "720", x: 49.5, y: 80.5, owner: "Pn. Rohani Talib", address: "No. 29, Jalan Sejahtera 720, Batu 3" },
  { id: "720-23", color: "yellow", sector: "720", x: 48.0, y: 85.0, owner: "En. Hishamuddin Mat", address: "No. 31, Jalan Sejahtera 720, Batu 3" },
  { id: "720-24", color: "yellow", sector: "720", x: 46.5, y: 89.2, owner: "Mr. Daniel Tan", address: "No. 33, Jalan Sejahtera 720, Batu 3" },
  { id: "720-25", color: "yellow", sector: "720", x: 71.5, y: 20.0, owner: "En. Shukri Baba", address: "No. 2, Jalan Rimba 720, Batu 3" },
  { id: "720-26", color: "yellow", sector: "720", x: 71.2, y: 24.8, owner: "Pn. Norizan Bakri", address: "No. 4, Jalan Rimba 720, Batu 3" },
  { id: "720-27", color: "yellow", sector: "720", x: 71.0, y: 28.5, owner: "Mr. Justin Loke", address: "No. 6, Jalan Rimba 720, Batu 3" },
  { id: "720-28", color: "yellow", sector: "720", x: 71.0, y: 32.0, owner: "En. Sabri Yunus", address: "No. 8, Jalan Rimba 720, Batu 3" },
  { id: "720-29", color: "yellow", sector: "720", x: 71.5, y: 37.0, owner: "Pn. Zuraidah Kamar", address: "No. 10, Jalan Rimba 720, Batu 3" },
  { id: "720-30", color: "yellow", sector: "720", x: 71.5, y: 42.0, owner: "Mr. Wilson Ng", address: "No. 12, Jalan Rimba 720, Batu 3" },
  { id: "720-31", color: "yellow", sector: "720", x: 70.0, y: 46.0, owner: "En. Nizamuddin", address: "No. 14, Jalan Rimba 720, Batu 3" },
  { id: "720-32", color: "yellow", sector: "720", x: 69.0, y: 50.5, owner: "Pn. Shuhada Radzi", address: "No. 16, Jalan Rimba 720, Batu 3" },
  { id: "720-33", color: "yellow", sector: "720", x: 67.5, y: 55.0, owner: "Mr. Andy Wong", address: "No. 18, Jalan Rimba 720, Batu 3" },
  { id: "720-34", color: "yellow", sector: "720", x: 67.0, y: 58.5, owner: "En. Fazley Yaacob", address: "No. 20, Jalan Rimba 720, Batu 3" },
  { id: "720-35", color: "yellow", sector: "720", x: 66.5, y: 62.5, owner: "Pn. Siti Mariam", address: "No. 22, Jalan Rimba 720, Batu 3" },
  { id: "720-36", color: "yellow", sector: "720", x: 66.0, y: 66.0, owner: "En. Hairi Katiman", address: "No. 24, Jalan Rimba 720, Batu 3" },
  { id: "720-37", color: "yellow", sector: "720", x: 64.5, y: 69.5, owner: "Mr. Steven Chew", address: "No. 26, Jalan Rimba 720, Batu 3" },
  { id: "720-38", color: "yellow", sector: "720", x: 64.0, y: 73.2, owner: "Pn. Latifah Omar", address: "No. 28, Jalan Rimba 720, Batu 3" },
  { id: "720-39", color: "yellow", sector: "720", x: 63.0, y: 77.8, owner: "En. Firdaus Naim", address: "No. 30, Jalan Rimba 720, Batu 3" },
  { id: "720-40", color: "yellow", sector: "720", x: 62.0, y: 81.2, owner: "Mr. Christopher Tan", address: "No. 32, Jalan Rimba 720, Batu 3" },
  { id: "720-41", color: "yellow", sector: "720", x: 61.0, y: 85.0, owner: "Pn. Norashikin", address: "No. 34, Jalan Rimba 720, Batu 3" },
  { id: "720-42", color: "yellow", sector: "720", x: 60.5, y: 89.0, owner: "En. Tawfiq Ismail", address: "No. 36, Jalan Rimba 720, Batu 3" }
];