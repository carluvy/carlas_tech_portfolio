import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function ProjectsScreen() {
    return (
        <Card>
            <CardContent className="space-y-2">
                <h3 className="text-lg font-semibold"> My Projects</h3>
                <p className="text-muted-foreground">
                    built with Vite, React, and Tailwind v4
                </p>
                <Button> View Project</Button>
            </CardContent>
        </Card>
    )
}