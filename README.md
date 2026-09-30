# 🧩 Interactive Workspace Configurator

An interactive workspace builder built with Next.js, allowing users to configure their own desk setup with drag, resize, and layer management functionality.

## 🎥 Demo Video

[![Watch the demo](https://img.youtube.com/vi/vZ8T0es6uKY/maxresdefault.jpg)](https://www.youtube.com/watch?v=vZ8T0es6uKY)

Click the image above to watch the full demo on YouTube.

Link Demo: https://app-workspace.rizkymalm.com/

Repository: [https://github.com/rizkymalm/fe-app-workspace-test](https://github.com/rizkymalm/fe-app-workspace-test)

---

## 🚀 Overview

This project simulates a real-world product configurator where users can:

- Select desks and chairs
- Add workspace accessories (monitor, lamp, plants, etc.)
- Drag and reposition elements
- Resize supported elements
- Manage layers (bring to front / send to back)
- View real-time pricing summary

The focus of this implementation is product-level interaction design, clean state management, and scalable UI architecture.

---

## 🎨 UI Foundation

This project is built on top of **Digimal**, a modern dashboard template created by Rizki Malem.

Digimal is a customizable dashboard UI system designed for scalable web applications, built with:

- Next.js
- Tailwind CSS
- Modular component architecture

You can explore the Digimal template here:  
https://rizkymalm.site/

Using Digimal as the UI foundation allowed this project to focus more on interaction systems and configurator logic rather than rebuilding layout infrastructure from scratch.

---

## 🛠 Tech Stack

- **Next.js (App Router)**
- **Tailwind CSS**
- **Redux** – Global workspace state management
- **React RND** – Drag and resize system
- TypeScript

Deployed on **Vercel**.

---

## ✨ Key Features

### 🖱 Drag & Drop System
Workspace elements can be repositioned freely within the preview area.  
All movements are bounded within the parent container.

### 📏 Resize Support
Resizable elements (e.g., monitor) support dynamic width and height adjustment.

### 🗂 Layer Management
Users can:
- Bring items to front
- Send items backward
- Automatically elevate selected items

Layer order is managed cleanly via controlled state logic.

### 💰 Real-Time Pricing
All selected items update the total price instantly.

### 🎯 Clean Architecture
The project is structured with separation of concerns:

- `workspace/` → Preview rendering logic  
- `config/` → Static product data  
- `lib/` → Pricing & utilities  
- `redux/` → Global state management  

---

## 🧠 Design Approach

This project prioritizes:

- UX clarity
- Predictable interaction behavior
- Controlled component architecture
- Scalable state updates
- Performance-aware drag handling (updates on stop instead of on every pixel move)

Rather than over-engineering backend systems, the focus is on delivering a realistic interactive frontend product experience.

---

## 📦 Installation

```bash
npm install
# or
yarn install
```

## Run Dev

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
