export interface Project {
    // id: string,
    slug: string,
    summary: string,
    title: string,
    tags: string[],
    featured?: boolean,
    thumbnail?: string,
    content: string,
    screenshots?: string[],
    repo?: string,
    public: boolean,
    article?: string,
    cover?: string,
    domain?: string,
}

export interface AIMessage {
    id: string,
    role: string,
    content: string,

}

export const WELCOME_MESSAGE = {
  id: "welcome",
  role: "assistant" as "assistant",
  state: "static",
  parts: [
    {
      text: `Hi 👋 — I’m Carla's portfolio assistant.

You can ask me about Carla's:
• Projects and architecture
• Design decisions

What would you like to do?`.trim(),
      type: "text" as "text",
    },
  ],
  metadata: {},
}