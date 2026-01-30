import { Outlet } from "react-router-dom";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";

export function AppLayout() {
    return (
        <div className="
        flex 
        flex-col 
        min-h-screen 
        bg-background 
        text-foreground 
        transition-all
        ">
            <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
        </div>
    )
}