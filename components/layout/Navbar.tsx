'use client';

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!isMobile && isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    }, [isMobile, isMobileMenuOpen]);

    const navLinks = [
        { href: "#about", label: "Sobre" },
        { href: "#experience", label: "Experiência" },
        { href: "#skills", label: "Habilidades" },
        { href: "#contact", label: "Contato" },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/70 backdrop-blur-xl border-b border-border py-3" : "bg-transparent py-5"
            }`}>
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-14 md:h-16">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-heading text-xl md:text-2xl font-bold text-foreground tracking-tight group">
                        Rafaelly<span className="text-accent group-hover:animate-pulse">.</span>
                    </button>

                    {!isMobile && (
                        <div className="hidden md:flex items-center gap-10">
                            <div className="flex items-center gap-8">
                                {navLinks.map((link) => (
                                    <button
                                        key={link.href}
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors relative group"
                                    >
                                        {link.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                                    </button>
                                ))}
                            </div>
                            {/* <a
                                href={`https://wa.me/5581998460022?text=${encodeURIComponent("Olá, Rafaelly! Vi seu portfólio e gostaria de iniciar uma conversa.")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-semibold rounded-full hover:bg-accent hover:text-accent-foreground transition-all shadow-lg shadow-foreground/5"
                            >
                                Fale Comigo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </a> */}
                        </div>
                    )}

                    {isMobile && (
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-foreground transition-colors hover:bg-secondary rounded-lg">
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    )}
                </div>

                {isMobile && isMobileMenuOpen && (
                    <div className="py-6 border-t border-border animate-in fade-in slide-in-from-top-4 bg-background/95 backdrop-blur-xl rounded-b-2xl shadow-xl">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <button key={link.href} onClick={() => scrollToSection(link.href)} className="text-left text-lg font-medium text-muted-foreground hover:text-accent py-2 px-2 transition-colors">
                                    {link.label}
                                </button>
                            ))}
                            <a href="mailto:rafaellyltbmarques@gmail.com" className="flex items-center justify-center gap-2 px-5 py-4 bg-accent text-accent-foreground text-base font-bold rounded-xl mt-4">
                                Fale Comigo <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;