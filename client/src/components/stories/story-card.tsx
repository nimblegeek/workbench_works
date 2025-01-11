import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, MapPin } from "lucide-react";
import type { Story } from "@db/schema";

interface StoryCardProps {
  story: Story;
  onClick?: () => void;
}

export default function StoryCard({ story, onClick }: StoryCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={onClick}>
      <div className="aspect-video relative overflow-hidden">
        <img
          src={story.imageUrl}
          alt={story.title}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{story.title}</CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarIcon className="h-4 w-4" />
          {new Date(story.createdAt).toLocaleDateString()}
          <MapPin className="h-4 w-4 ml-2" />
          {story.location}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {story.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium">{story.author}</span>
          <Button variant="ghost" size="sm">
            Read more
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
