---
title: "Shared Shopping Lists Android App"
summary: "A native Android app for managing and sharing shopping lists with offline-first support."
tags:
- Kotlin
- Jetpack Compose
- Room
- Django
- Paging 3
content: "An offline-first Android shopping list app with secure sharing and local persistence."
screenshots:
- "/projects/shared-lists-web/dashboard.png"
- "/projects/shared-lists-web/list-detail.png"
- "/projects/shared-lists-web/share-dialog.png"
repo: "private"
featured: "yes"
---

## The Problem

Many shopping list apps fail when connectivity is unreliable, making them frustrating to use in real-world scenarios like grocery stores. I wanted to build a native Android app that remains fully usable offline while still supporting secure list sharing between users.

## The Approach

I built the app using Kotlin and Jetpack Compose, following a clean architecture with a repository pattern. Local data is stored in Room, allowing the app to function offline-first, while a Django backend handles authentication, sharing permissions, and synchronization.

State management is handled through ViewModels, and paginated data loading is implemented using Paging 3 to keep the UI responsive even as data grows.

## Outcome

The app provides a smooth, reliable experience regardless of network conditions. Users can create and manage shared lists offline, with changes syncing automatically when connectivity is restored. The architecture is robust, scalable, and designed for long-term maintainability.
