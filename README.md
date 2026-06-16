<div align="center">

<br/>

# 📸 Potrogram

### A full-stack social media platform inspired by Instagram

*Share moments. Connect with people. Built from scratch.*

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

<br/>

</div>

---

## 🌟 What is Potrogram?

**Potrogram** is a fully functional social media web application built entirely from scratch, designed to replicate and expand upon the core experience of Instagram. Users can create an account, share photos, interact with other people's content, send private messages, and discover new users — all within a clean, responsive interface that works on both desktop and mobile.

This project demonstrates real-world full-stack development skills: from database design and server-side logic, to authentication, file storage, and a polished user interface.

---

## ✨ Features

### 👤 Authentication & Profiles
> Secure sign-in with email/password or Google OAuth, powered by NextAuth.js with JWT sessions.

<!-- Screenshot: Login page -->
<img width="1366" height="768" alt="Screenshot (2297)" src="https://github.com/user-attachments/assets/688e2015-2fc2-466f-9774-d14648af0572" />


<!-- Screenshot: Register page -->
<img width="1366" height="768" alt="Screenshot (2298)" src="https://github.com/user-attachments/assets/89856879-e2f0-4032-ba87-66c9cc43b1ef" />

---

### 🏠 Home Feed
> A personalized feed that displays posts from users you follow, with real-time like interactions and quick comment access.

<!-- Screenshot: Home feed -->
<img width="1366" height="768" alt="Screenshot (2295)" src="https://github.com/user-attachments/assets/e42d3923-dc91-42d0-8eec-0b3f002f3959" />
<img width="1366" height="768" alt="Screenshot (2296)" src="https://github.com/user-attachments/assets/8a494e5d-c283-4dfa-bad1-1bd152ccb9a1" />


---

### 📤 Create a Post
> Upload a photo and add a description. Images are stored securely in the cloud via **Pinata (IPFS)**, so they load fast and stay available.

<!-- Screenshot: Create post page -->
<img width="1366" height="768" alt="Screenshot (2287)" src="https://github.com/user-attachments/assets/3e18a3b1-50e7-41fb-a201-e1022c4517b7" />


---

### ❤️ Likes & Comments
> Interact with any post — like it, leave a comment, or view all comments in a detailed post view.

<!-- Screenshot: Single post with comments -->
<img width="1366" height="768" alt="Screenshot (2290)" src="https://github.com/user-attachments/assets/02849334-7026-4a82-a92c-974a4e9a196c" />

---

### 🔖 Bookmarks
> Save posts you want to revisit. Bookmarked content is available in its own dedicated section on your profile.

<!-- Screenshot: Bookmarked posts section -->
<img width="1366" height="768" alt="Screenshot (2294)" src="https://github.com/user-attachments/assets/06d3a790-6c99-4be5-84b1-2300e522cfdb" />

---

### 🙋 Follow System
> Follow and unfollow other users. Your home feed updates to reflect the people you care about.

<!-- Screenshot: User profile with follow button -->
<img width="1366" height="768" alt="Screenshot (2292)" src="https://github.com/user-attachments/assets/d0e16111-c8ff-4342-9f11-01d53fa75e03" />

---

### 💬 Private Messaging
> Send direct messages to any user. Conversations are organized per user pair and load in chronological order.

<!-- Screenshot: Messages page -->
<img width="1366" height="768" alt="Screenshot (2288)" src="https://github.com/user-attachments/assets/9c58ae3a-f9fe-40d8-a069-389efcdb301c" />

---

### 🔍 Search
> Find other users instantly by username with a live search experience.

<!-- Screenshot: Search page -->
<img width="1366" height="768" alt="Screenshot (2291)" src="https://github.com/user-attachments/assets/69ac62d0-04e0-4c37-8b9a-6aed307e484c" />

---

### 🔔 Notifications
> Stay informed about activity related to your content and profile.

<!-- Screenshot: Notifications page -->
<img width="1366" height="768" alt="Screenshot (2289)" src="https://github.com/user-attachments/assets/6f524567-126d-44f7-861a-812c156d72e9" />

---

### ⚙️ Profile Settings
> Customize your public profile: name, username, avatar, bio, and subtitle — all editable from a clean settings form.

<!-- Screenshot: Settings form -->
<img width="1366" height="768" alt="Screenshot (2293)" src="https://github.com/user-attachments/assets/057a20d2-3a77-4976-a266-bdb46cbbae13" />

---

### 📱 Responsive Design
> Fully adaptive layout — desktop navigation sidebar on wide screens, mobile bottom navigation bar on small screens. Works great on any device.

<!-- Screenshot: Mobile view -->
> 📷 *Screenshot placeholder — Mobile navigation*

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | Full-stack React framework with SSR & Server Actions |
| **Language** | TypeScript 5 | Type-safe development across frontend and backend |
| **Database** | MongoDB Atlas | Cloud-hosted NoSQL database |
| **ORM** | Prisma 6 | Type-safe database schema and queries |
| **Auth** | NextAuth.js v5 | Email/password & Google OAuth with JWT sessions |
| **Styling** | Tailwind CSS + Radix UI | Utility-first styling with accessible components |
| **File Storage** | Pinata (IPFS) | Decentralized image hosting for uploaded content |
| **Icons** | Lucide React | Clean, consistent icon system |
| **Utilities** | date-fns, lodash | Date formatting and data manipulation |

---

## 🗄️ Data Models

The application is built around the following core entities:

```
Profile   → User account with avatar, bio, and credentials
Post      → Photo + description authored by a profile
Comment   → Text comment tied to a specific post
Like      → A user's like on a post (tracked individually)
Bookmark  → A user's saved post for later reference
Follower  → A directional follow relationship between two profiles
Chat      → A conversation thread between two users
Message   → An individual message within a chat
```

---

## 🚀 Getting Started

Follow these steps to run Potrogram locally on your machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) — version 18 or higher
- [npm](https://www.npmjs.com/) — comes with Node.js
- [Git](https://git-scm.com/)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/potrogram.git
cd potrogram
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root of the project with the following variables:

```env
# Authentication secret (generate with: npx auth secret)
AUTH_SECRET="your-auth-secret"

# Google OAuth credentials (from Google Cloud Console)
AUTH_GOOGLE_ID="your-google-client-id"
AUTH_GOOGLE_SECRET="your-google-client-secret"

# MongoDB connection string (from MongoDB Atlas or local instance)
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/dbname"

# Pinata (IPFS) for image storage (from pinata.cloud)
PINATA_JWT="your-pinata-jwt"
NEXT_PUBLIC_GATEWAY_URL="your-pinata-gateway-url"
PINATA_GROUP_ID="your-pinata-group-id"
```

> 💡 **Where to get these values:**
> - **AUTH_SECRET** → run `npx auth secret` in your terminal
> - **Google OAuth** → [Google Cloud Console](https://console.cloud.google.com/) → Create OAuth 2.0 credentials
> - **MongoDB** → [MongoDB Atlas](https://www.mongodb.com/atlas) → Free tier available
> - **Pinata** → [Pinata Cloud](https://www.pinata.cloud/) → Free tier available for image hosting

### 4. Generate Prisma client & push schema

```bash
npx prisma generate
npx prisma db push
```

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app is running! 🎉

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
potrogram/
├── prisma/
│   └── schema.prisma         # Database models
├── src/
│   ├── actions.ts            # Server Actions (all backend logic)
│   ├── auth.ts               # Authentication configuration
│   ├── db.ts                 # Prisma client instance
│   ├── app/
│   │   └── (routes)/
│   │       ├── page.tsx      # Home feed
│   │       ├── login/        # Sign in
│   │       ├── register/     # Sign up
│   │       ├── create/       # New post
│   │       ├── profile/      # User profile & bookmarks
│   │       ├── posts/[id]/   # Single post view
│   │       ├── users/[username]/ # Public user profiles
│   │       ├── messages/     # Direct messages
│   │       ├── search/       # User search
│   │       ├── notifications/# Notifications
│   │       ├── settings/     # Profile settings
│   │       └── browse/       # Explore posts
│   └── components/           # Reusable React components
└── public/                   # Static assets
```

---

## 👨‍💻 Author

**@ang3lfco** — Full-stack Developer

> Building practical software for real-world use cases.

---

<div align="center">

*Made with ☕ and TypeScript*

</div>
