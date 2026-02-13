"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Markdown from "react-markdown";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    href?: string;
    description: string;
    fullDescription?: string;
    dates: string;
    technologies: readonly string[];
    link?: string;
    image?: string;
    video?: string;
    links?: readonly {
      icon: React.ReactNode;
      type: string;
      href: string;
    }[];
  } | null;
}

function ProjectModalImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-sm">No Image</div>;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      onError={() => setImageError(true)}
    />
  );
}

export function ProjectModal({ isOpen, onClose, project }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[99] backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-[100] bg-background rounded-t-[20px] border-t border-border shadow-2xl flex flex-col max-h-[85vh] w-full"
            style={{ willChange: "transform" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-2 shrink-0">
              <div className="space-y-1">
                 <h2 className="text-2xl font-bold tracking-tight">{project.title}</h2>
                 <p className="text-sm text-muted-foreground">{project.dates}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-muted"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            
            {/* Content Container with Scroll */}
            <div className="overflow-y-auto p-6 space-y-6">
                <div className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Side - Media, Tech, Links (1 column) */}
                    <div className="space-y-6 md:col-span-1">
                        {/* Media */}
                        <div className="rounded-xl overflow-hidden bg-muted aspect-video w-full border border-border shadow-sm">
                            {project.video ? (
                                <video
                                    src={project.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <ProjectModalImage src={project.image || ""} alt={project.title} />
                            )}
                        </div>

                         {/* Technologies */}
                         {project.technologies && project.technologies.length > 0 && (
                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="px-2 py-1 text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Links */}
                        {project.links && project.links.length > 0 && (
                            <div className="space-y-3">
                                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Links</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.links.map((link, idx) => (
                                        <Link
                                            key={idx}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Badge className="flex items-center gap-2 px-3 py-1.5 text-xs">
                                                {link.icon}
                                                {link.type}
                                            </Badge>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Side - Description (2 columns) */}
                    <div className="space-y-4 md:col-span-2">
                        <h3 className="text-lg font-semibold">About</h3>
                        <div className="prose dark:prose-invert max-w-none text-muted-foreground text-sm leading-relaxed">
                            <Markdown>{project.fullDescription || project.description}</Markdown>
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
