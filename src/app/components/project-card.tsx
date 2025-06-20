import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Square card with image and title only */}
      <div
        className="relative cursor-pointer group aspect-square bg-black border flex items-end justify-center overflow-hidden hover:shadow-lg transition-all duration-300 p-0 m-0"
        onClick={() => setOpen(true)}
        style={{ minWidth: 0 }}
      >
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full absolute top-0 left-0"
          style={{ zIndex: 0 }}
        />
        <div className="w-full text-center p-2 bg-black/70 text-white text-base font-semibold relative z-10">
          {title}
        </div>
      </div>

      {/* Modal for project details */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-background shadow-xl max-w-lg w-full p-6 relative animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-black"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-48 rounded mb-4"
            />
            <h3 className="font-bold text-2xl mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <Link
                to={link}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm hover:underline font-medium"
              >
                <Github className="h-4 w-4" />
                View on GitHub
              </Link>
              <Link
                to={link}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm hover:underline font-medium"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
