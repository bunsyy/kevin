import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  link,
  image,
}) => {
  return (
    <Card className="glass-card overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-primary group flex flex-col h-full bg-card/30">
      {image ? (
        <div className="h-48 bg-muted rounded-t-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      ) : (
        <div className="h-48 bg-muted/20 flex items-center justify-center">
          <span className="text-muted-foreground text-xs uppercase tracking-widest">
            Project Preview
          </span>
        </div>
      )}
      <CardHeader className="p-6 pb-2">
        <CardTitle className="text-xl font-bold text-white group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0 grow">
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      {link && (
        <CardFooter className="p-6 pt-0">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm font-medium flex items-center gap-1.5 hover:gap-2 transition-all"
          >
            View Project <ExternalLink className="h-3 w-3" />
          </a>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;
