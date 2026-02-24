import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react"
import { TextStreamChatTransport } from "ai";

import {
    Conversation,
    ConversationContent,
    ConversationEmptyState
} from "@/components/ai-elements/conversation";
import { Message, MessageContent, MessageResponse } from "@/components/ai-elements/message";
import {
    PromptInput,
    PromptInputTextarea,
    PromptInputSubmit
} from "@/components/ai-elements/prompt-input";
import { useServerHealth } from "@/hooks/useServerHealth";
import { WELCOME_MESSAGE, type AIMessage } from "@/types";



export default function Chat() {
    // const { data: health, isError, isLoading: isCheckingHealth } = useServerHealth();
    const [input, setInput] = useState('');
    const { messages, sendMessage, status } = useChat({
        transport: new TextStreamChatTransport({
            api: "http://127.0.0.1:8000/api/chat",

        }),




    });
    const isLoading = status === "streaming" || status === "submitted";
    // const isServerDown = isError || !health;
    const [open, setOpen] = useState(false)

    // console.log(messages, WELCOME_MESSAGE);

    const messagesEndRef = useRef<HTMLDivElement | null>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

        useEffect(() => {
    scrollToBottom()
    }, [messages, isLoading])



    const SUGGESTIONS = [
        // "Show me your AI projects",
        "What tech stack does Carla use?",
        "Show me a fullstack project",
        "Tell me about data projects",

    ]
    // Track whether user has interacted
    const [welcomeClicked, setWelcomeClicked] = useState(false)

    // Prepend welcome message only if no other messages yet
    const displayedMessages =
        messages.length === 0 && !welcomeClicked ? [WELCOME_MESSAGE] : messages

    const handleSuggestionClick = (text: string) => {
        sendMessage({ text })
        setWelcomeClicked(true) // remove suggestion chips after first click
    }



    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Connection Overlay */}
            {/* {isServerDown && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <div className="text-center p-6 border rounded-lg shadow-lg bg-white">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="font-bold text-red-600">Lost connection to AI Server</p>
            <p className="text-sm text-gray-500">Attempting to reconnect...</p>
          </div>
        </div>
      )} */}

            <button
                onClick={() => setOpen(!open)}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition"
            >
                {open ? "Close Chat" : "Chat 💬"}
            </button>

            {open && (

                <div className="mt-2 w-100 max-w-full h-100 md:h-125 flex flex-col border border-border rounded-3xl shadow-2xl bg-background overflow-hidden">
                    <div className="px-4 py-2 border-b border-border bg-background/90 backdrop-blur-sm flex justify-between items-center sticky top-0 z-10">
                        <span className="font-semibold text-primary">Carla's Assistant</span>
                        <button
                            onClick={() => setOpen(false)}
                            className="text-muted-foreground hover:text-destructive"
                        >
                            ✕
                        </button>
                    </div>

                    


                    {/* <div className="flex flex-col h-screen"> */}
                    <div className="flex-1 overflow-y-auto h-full scroll-smooth px-4 py-2 space-y-3">
                        <Conversation>
                            <ConversationContent>
                                {messages.length === 0 ? (
                                    <ConversationEmptyState
                                        title={WELCOME_MESSAGE.parts[0].text.split("\n")[0]} // "Hi 👋 — I’m Carla's portfolio assistant."
                                        description={WELCOME_MESSAGE.parts[0].text.split("\n").slice(1).join("\n")} // "What
                                    // title="Hi 👋 — I’m Carla's portfolio assistant."
                                    // description="What would you like to know?"
                                    />
                                ) : (
                                    messages.map((message) => (
                                        <Message key={message.id} from={message.role} 
                                        className="flex flex-col gap-2 p-0">
                                            <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                                <div
                                                    className={
                                                        `max-w-[80%] glow  
                                                    rounded-tr-none rounded-2xl 
                                                    px-4 py-2 text-sm shadow-sm tracking-tight
                                                    border
                                                   
                                                   
                                                    
                             
                                                     ${message.role === 'user'
                                                            ? 'bg-primary text-primary-foreground border-primary/30 ml-auto' // User: Blue/Dark
                                                            : 'bg-muted glow  text-card-foreground border-border' // AI: Gray/Light
                                                        }`}
                                                >


                                                    {/* <Message key={message.id} from={message.role}> */}

                                                    <MessageContent>
                                                        {message.role === 'assistant' ? (

                                                            <MessageResponse>

                                                                {message.parts
                                                                    ?.filter(part => part.type === 'text')
                                                                    .map(part => part.text)
                                                                    .join('')}
                                                            </MessageResponse>  // 👈 Wrap AI messages in MessageResponse
                                                        ) : (
                                                            message.parts?.map((part) =>
                                                                part.type === 'text' && part.text
                                                            )
                                                        )}
                                                    </MessageContent>
                                                    <div ref={messagesEndRef} />
                                                </div>
                                            </div>
                                        </Message>
                                    ))
                                )}

                                {/* Show suggestion chips only below welcome message */}
                                {messages.length === 0 && !welcomeClicked && (
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {SUGGESTIONS.map((s) => (
                                            <button
                                                key={s}
                                                onClick={() => handleSuggestionClick(s)}
                                                className="px-4 py-1.5 rounded-full border border-primary text-primary hover:bg-primary/10 transition"
                                            >
                                                {s}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </ConversationContent>
                        </Conversation>
                    </div>


                    {/* <div className="border-t p-4"> */}
                    <div className="border-t border-border p-3 bg-background/90 backdrop-blur-sm">
                        <PromptInput
                            onSubmit={(message, event) => {
                                event.preventDefault();
                                if (message.text) {
                                    sendMessage({ text: message.text });
                                    setInput("");
                                }
                            }}
                            className="flex gap-2"
                        // className="max-w-3xl mx-auto flex gap-2 items-end"
                        >
                            <PromptInputTextarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message..."
                                // disabled={isServerDown}
                                disabled={isLoading}
                                rows={1}
                                className="flex-1 rounded-xl border border-border px-3 py-2 bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"

                            // className="flex-1"
                            />
                            <PromptInputSubmit
                                className="bg-primary text-primary-foreground px-4 py-2 rounded-xl hover:bg-primary-hover transition"

                                disabled={isLoading} />
                        </PromptInput>
                    </div>

                </div>
            )}
        </div>
    )
}