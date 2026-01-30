import type { Project } from "@/types";
 export const projects: Project[] = [
    {
        slug: "expense-tracker",
        title: "Personal Expense Tracker",
        summary:
      "A full-stack expense tracking app with JWT authentication, offline-first storage, and financial insights.",
    tags: ["Kotlin", "Jetpack Compose", "Room", "Django"],
    featured: true,
    content: "....."
  },

    {
    slug: "shared-shopping-lists",
    title: "Shared Shopping Lists",
    summary:
      "A collaborative shopping list app with friend invites, consent-based sharing, and real-time sync.",
    tags: ["Jetpack Compose", "Room", "Paging 3", "Supabase"],
    featured: true,
    content: "...."
  },

  {
    slug: "pdf-to-csv",
    title: "PDF to CSV Converter",
    summary:
      "A local-first tool for extracting structured data from PDFs for analysis and reporting.",
    tags: ["Python", "Pandas", "Data Processing"],
    content: "..."
  },
]


