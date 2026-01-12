# 🚐 TravelTrucks — Camper Rental Platform

**TravelTrucks** is a modern web application for a camper rental company. The project allows users to search for campers, filter them by technical specifications, view reviews, and book a vehicle.

## 🔗 Live Demo

👉 [Open project on Vercel](https://travel-trucks-lac-delta.vercel.app/)

## ✨ Key Features

- **🔍 Advanced Filtering System**: Users can search for campers by location and filter results by equipment (AC, Kitchen, TV, etc.) or vehicle type. All filtering logic is handled server-side to ensure accuracy.
- **📄 Detailed Camper Profiles**: Each camper has a dedicated page featuring a high-quality gallery, full technical specifications, and interactive tabs for Features and Reviews.
- **❤️ Favorites Management**: Save preferred campers to a personalized list. The selection is persistent and remains saved even after page reloads via Zustand middleware.
- **📅 Integrated Booking**: A user-friendly booking form with an interactive calendar.
- **🔔 Professional Notifications**: Real-time feedback using **React Hot Toast**, providing users with clear success or error messages after booking.
- **📦 Efficient Data Loading**: Implemented "Load More" pagination to ensure fast loading times and a smooth browsing experience.

## 💻 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Styling**: CSS Modules
- **UI Components**: React Datepicker, React Hot Toast

## 🛠️ Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/OksanaSlonska/travel-trucks]
   ```

2. **Navigate to the project folder:**

   ```bash
   cd travel-trucks
   ```

3. **Install dependencies:**

```bash
npm install
```

4. **Launch the development server:**

```bash
npm run dev
```

5. **Open in browser** `http://localhost:3000`

---

## 📁 Project Structure

- `app/` — Routing and core application pages.
- `components/` — Reusable UI components (Cards, Filters, Loader, etc.).
- `lib/stores/` — Global state management logic (Zustand).
- `constants/` — Configuration data for filters and icons.
- `types/` — TypeScript interfaces and definitions.

---

## 👤 Author

**Oksana Slonska**

```

```
