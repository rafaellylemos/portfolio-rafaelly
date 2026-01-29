"use client";

import { ArrowDown, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
    const scrollToAbout = () => {
        const element = document.querySelector("#about");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Configuração do WhatsApp
    const phoneNumber = "5581998460022";
    const waMessage = encodeURIComponent("Olá, Rafaelly! Vi seu portfólio e gostaria de iniciar uma conversa.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${waMessage}`;

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Background com Gradiente e Pattern Sutil */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b89331' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            <div className="relative z-10 container mx-auto px-6 text-center">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    Disponível para novos projetos
                </div>

                {/* Título Principal: Arquiteta de Interfaces foca na sua precisão técnica */}
                <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 tracking-tight">
                    Frontend Developer
                    <br />
                    <span className="text-accent italic">&</span> Arquiteta de Interfaces
                </h1>

                {/* Descrição com foco em implementação e performance */}
                <p className="font-body text-lg md:text-xl text-muted-foreground mx-auto mb-12 max-w-2xl italic leading-relaxed">
                    "Transformando conceitos visuais em interfaces <span className="text-foreground font-medium not-italic">fluidas, acessíveis e de alta performance.</span>"
                </p>

                {/* CTAs Principais */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    {/* Botão WhatsApp - Agora como "Iniciar Conversa" */}
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-10 py-4 bg-foreground text-background text-base font-bold uppercase tracking-widest rounded-full hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-foreground/10 flex items-center justify-center"
                    >
                        Iniciar Conversa
                    </a>

                    {/* Botão de Download do CV - Aponta para public/Rafaelly_Lemos.pdf */}
                    <Button
                        asChild
                        variant="outline"
                        className="w-full sm:w-auto h-auto px-10 py-4 border-border text-foreground text-base font-bold uppercase tracking-widest rounded-full hover:bg-accent/5 transition-all hover:scale-105"
                    >
                        <a
                            href="/Rafaelly_Lemos.pdf"
                            download="Rafaelly_Lemos_Frontend_Developer.pdf"
                        >
                            <FileText className="w-4 h-4 mr-2" />
                            Baixar CV
                        </a>
                    </Button>
                </div>

                {/* Redes Sociais com bordas sutis */}
                <div className="flex items-center justify-center gap-6">
                    <a 
                        href="https://linkedin.com/in/rafaellylemos" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all border border-border/40"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                        href="https://github.com/rafaellylemos" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-3 rounded-full bg-secondary/50 text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all border border-border/40"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <button
                onClick={scrollToAbout}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 text-muted-foreground hover:text-accent transition-colors animate-bounce"
            >
                <ArrowDown className="w-6 h-6" />
            </button>
        </section>
    );
};

export default Hero;