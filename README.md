# Kg Batu Tiga Resident Portal (Portal Penduduk)

A clean, community-focused web portal designed for the residents of **Kg Batu Tiga** to streamline local announcements, secure access, and community coordination.

---

## 🌟 Features & Services

### 1. Resident Access & Authentication (`/`)
* **Password-Protected Login**: Secure gateway allowing verified community members to log in using a designated passphrase (`Kata laluan`).
* **Live Sync Status**: Real-time server connection indicator (`Sync`) located on the top right to verify active data synchronization with the backend.

### 2. Public Notices & Announcements Board (`Pengumuman`)
The portal acts as a central hub for community updates, historical tracking, and active notices:

---

## 🛠️ Architecture & Tech Stack

* **Hosting & Edge Deployment**: Deployed via **Cloudflare Workers** (`azad-bukhari.workers.dev`), ensuring fast, edge-optimized global delivery.
* **Frontend UI**: Modern responsive design featuring light card layouts, status badges, and intuitive form controls.

---

## 🛠️ Database

* **Supabase SQL**: Integrate database using supabase, free-tier, ensuring the owner data keep in the db.

---

## 🚀 Quick Start / Development

1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/batu-3-portal.git](https://github.com/your-username/batu-3-portal.git)