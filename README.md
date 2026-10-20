# ✈️ AeroFlow - Next-Generation Smart Airport & Passenger Experience Platform

[![React 18](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lucide Icons](https://img.shields.io/badge/Icons-Lucide_React-F43F5E?style=for-the-badge&logo=feather&logoColor=white)](https://lucide.dev/)

> **A unified, intelligent airport companion web application offering AR indoor wayfinding, virtual queue management, AI-powered lost & found, eco-impact tracking, flight wellness, and passenger social spaces.**

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Modules & Features](#-key-modules--features)
- [System Architecture](#-system-architecture)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Running Locally](#installation--running-locally)
  - [Building for Production](#building-for-production)
- [Page & Routing Reference](#-page--routing-reference)
- [Author](#-author)
- [License](#-license)

---

## 📖 Overview

Navigating international airports can be stressful, characterized by long security queues, lost baggage, navigation confusion across sprawling terminals, and passenger travel anxiety. 

**AeroFlow** unifies all aspects of the modern airport journey into a single intuitive digital platform. From **Augmented Reality (AR) indoor terminal navigation** and **virtual queue booking** to **AI-assisted Lost & Found matching** and **carbon footprint tracking**, AeroFlow elevates the passenger experience from curb to gate.

---

## ✨ Key Modules & Features

### 🧭 AR Indoor Terminal Navigation (`ARNavigation.tsx`)
- **Interactive Wayfinding:** Visual, step-by-step guidance navigating passengers directly to boarding gates, duty-free shops, airline lounges, restrooms, and baggage claims.
- **Terminal Level Switching:** Seamless transitions across multi-level concourses and terminals.

### ⏱️ Virtual Queue Management (`QueueSystem.tsx`)
- **Queue Skipping:** Reserve virtual queue slots for security checkpoints, passport control, and priority boarding.
- **Live Wait Time Indicators:** Real-time estimations of checkpoint congestion to minimize physical queueing.

### 🔍 AI-Powered Lost & Found ("Find My Item") (`FindMyItem.tsx`)
- **Automated Logging:** Report lost personal belongings with photos, descriptions, flight numbers, and last-seen locations.
- **Smart Item Matching:** Visual and tag-based match algorithms that automatically alert owners when matching items are handed into airport security.

### 🛫 Real-Time Flight Tracker (`FlightTracking.tsx` & `Dashboard.tsx`)
- **Live Flight Status:** Gate assignments, departure countdowns, delay alerts, and carousel baggage reclaim numbers.
- **Digital Boarding Pass:** Integrated passenger boarding pass with rapid QR scanning.

### 🌱 EcoTracker & Sustainable Aviation (`EcoTracker.tsx`)
- **Flight Carbon Footprint:** Calculate individual trip carbon emissions with verified offset programs.
- **Green Airport Guide:** Discover water refill stations, eco-friendly terminal eateries, and zero-waste initiatives.

### 🧘 FlightMood & Passenger Wellness (`FlightMood.tsx`)
- **Travel Anxiety Relief:** Guided breathing routines, ambient relaxation soundscapes, and circadian rhythm sleep advice.
- **Passenger Mood Log:** In-flight wellbeing check-ins tailored to long-haul travelers.

### 👨‍👩‍👧 Family Hub (`FamilyHub.tsx`)
- **Family Amenities Guide:** Locators for baby care rooms, children's play areas, and stroller rental kiosks.
- **Lost Child SOS:** Rapid alert dispatch for families in busy terminal concourses.

### ☕ Social Space & Layover Networking (`SocialSpace.tsx`)
- **Passenger Lounges:** Connect with fellow travelers during layovers, share airport cabs into the city, or discuss common destinations.

---

## 🏗️ System Architecture

```mermaid
graph TD
    A[AeroFlow Passenger Web App] --> B[React 18 + Vite Router]
    B --> C[Passenger Hub Dashboard]
    B --> D[AR Navigation & Wayfinding]
    B --> E[Virtual Queue Management]
    B --> F[FindMyItem AI Lost & Found]
    B --> G[Flight Tracker & Live Status]
    B --> H[EcoTracker Carbon Offsetting]
    B --> I[FlightMood Wellness & Relaxation]
    B --> J[Family Hub & Social Space]
