---
title: "Shared Shopping Lists Web App"
summary: "A collaborative web app that lets users create, share, and manage shopping lists in real time."
tags:
- React
- TypeScript
- Supabase
- Row Level Security
- Tailwind CSS
content: "A collaborative shopping list web application focused on secure sharing and clean user experience."
screenshots:
- "/projects/shared-lists-web/authenticate.png"
- "/projects/shared-lists-web/dashboard.png"
- "/projects/shared-lists-web/lists-overview.png"
- "/projects/shared-lists-web/list-details.png"
- "/projects/shared-lists-web/share-dialog.png"
- "/projects/shared-lists-web/delete-list-dialog.png"

repo: "private"
featured: "yes"
---

## The Problem

Coordinating shopping across multiple people often leads to duplicated items, outdated lists, or messages scattered across different apps. I wanted to build a single source of truth where multiple users could collaborate on shared shopping lists securely and in real time.

## The Approach

I designed a multi-user web application using React and TypeScript, backed by Supabase for authentication and data storage. Secure sharing was enforced through row-level security (RLS), ensuring users could only access lists they owned or were explicitly invited to.

The app uses a clean, component-driven UI with a local-first feel, minimizing friction when creating, updating, or checking off items. Sharing workflows were intentionally explicit, requiring consent before collaboration is enabled.

## Outcome

The result is a fast, intuitive web app that supports real-time list updates, secure collaboration, and a scalable data model. The architecture allows for future extensions such as permissions, activity history, and cross-platform synchronization.
