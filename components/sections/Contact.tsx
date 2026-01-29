"use client";

import * as React from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Github, Linkedin, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

const Contact = () => {
    const { toast } = useToast();
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const phoneNumber = "5581998460022";
    const waMessage = encodeURIComponent("Olá, Rafaelly! Vi seu portfólio e gostaria de iniciar uma conversa.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${waMessage}`;

    const handleContactAction = (type: "email" | "whatsapp") => {
        toast({
            title: type === "email" ? "Abrindo e-mail" : "Conectando ao WhatsApp",
            description: "Preparando canal de comunicação...",
        });
    };

    const ContactForm = (
        <div className="space-y-6 py-4 text-left">
            <div className="space-y-4">
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-accent">Nome Completo</label>
                    <input type="text" placeholder="Como devo te chamar?" className="w-full bg-accent/5 border border-accent/10 rounded-xl p-4 text-sm outline-none focus:border-accent/40 transition-all text-foreground" />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-accent">E-mail Profissional</label>
                    <input type="email" placeholder="exemplo@empresa.com" className="w-full bg-accent/5 border border-accent/10 rounded-xl p-4 text-sm outline-none focus:border-accent/40 transition-all text-foreground" />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-accent">Sua Mensagem</label>
                    <textarea rows={4} placeholder="Conte-me sobre o desafio técnico..." className="w-full bg-accent/5 border border-accent/10 rounded-xl p-4 text-sm outline-none focus:border-accent/40 transition-all resize-none text-foreground" />
                </div>
            </div>
            <Button
                onClick={() => toast({ title: "Mensagem enviada!", description: "Entrarei em contato em breve." })}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-widest py-7 rounded-2xl shadow-lg shadow-accent/20"
            >
                <Send className="w-4 h-4 mr-2" />
                Enviar Agora
            </Button>
        </div>
    );

    return (
        <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-20 items-center">

                    <div className="animate-slide-up">
                        <Badge variant="outline" className="mb-6 border-accent/30 text-accent uppercase tracking-[0.2em] px-4 py-1">
                            Contato
                        </Badge>
                        <h2 className="font-heading text-4xl md:text-6xl font-semibold text-foreground mb-8 leading-[1.1] italic">
                            Design inteligente. Código sólido. <span className="text-accent not-italic">Resultados reais.</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-12 font-body max-w-xl text-left">
                            Atuo na intersecção entre o design e o Frontend para entregar interfaces que não apenas funcionam, mas encantam.
                        </p>

                        <div className="space-y-4 max-w-md">
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => handleContactAction("whatsapp")} className="block">
                                <Card className="bg-transparent border-border/40 hover:border-accent/40 hover:bg-accent/5 transition-all group cursor-pointer overflow-hidden">
                                    <CardContent className="p-5 flex items-center gap-5">
                                        <div className="p-3 bg-accent/10 rounded-2xl border border-accent/20 group-hover:scale-110 transition-transform">
                                            <MessageCircle className="w-5 h-5 text-accent" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Fale Comigo</p>
                                            <p className="text-foreground font-medium text-sm md:text-base">(81) 99846-0022</p>
                                        </div>
                                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-all" />
                                    </CardContent>
                                </Card>
                            </a>

                            <a href="mailto:rafaellyltbmarques@gmail.com" onClick={() => handleContactAction("email")} className="block">
                                <Card className="bg-transparent border-border/40 hover:border-accent/40 hover:bg-accent/5 transition-all group cursor-pointer overflow-hidden">
                                    <CardContent className="p-5 flex items-center gap-5">
                                        <div className="p-3 bg-accent/10 rounded-2xl border border-accent/20 group-hover:scale-110 transition-transform">
                                            <Mail className="w-5 h-5 text-accent" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Email</p>
                                            <p className="text-foreground font-medium text-sm md:text-base">rafaellyltbmarques@gmail.com</p>
                                        </div>
                                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-all" />
                                    </CardContent>
                                </Card>
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <Card className="bg-card/50 border-border/60 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col items-center text-center max-w-[420px] w-full">

                            <div className="space-y-8 relative z-10 w-full flex flex-col items-center">
                                <div className="space-y-4 flex flex-col items-center">
                                    <Badge className="bg-accent/10 border-accent/20 text-accent flex gap-2 items-center w-fit">
                                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                                        Disponível agora
                                    </Badge>
                                    <CardTitle className="font-heading text-2xl md:text-3xl font-semibold leading-tight">
                                        Bora trocar uma ideia?
                                    </CardTitle>
                                </div>

                                {isDesktop ? (
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button className="w-fit px-10 py-7 bg-foreground text-background hover:bg-accent hover:text-accent-foreground rounded-2xl font-bold uppercase tracking-widest text-xs transition-all shadow-xl group">
                                                Enviar Mensagem
                                                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[500px] border-accent/20 bg-card/95 backdrop-blur-xl">
                                            <DialogHeader>
                                                <DialogTitle className="font-heading text-2xl text-accent">Nova Mensagem</DialogTitle>
                                            </DialogHeader>
                                            {ContactForm}
                                        </DialogContent>
                                    </Dialog>
                                ) : (
                                    <Drawer>
                                        <DrawerTrigger asChild>
                                            <Button className="w-fit px-10 py-7 bg-foreground text-background hover:bg-accent hover:text-accent-foreground rounded-2xl font-bold uppercase tracking-widest text-xs transition-all shadow-xl">
                                                Enviar Mensagem
                                            </Button>
                                        </DrawerTrigger>
                                        <DrawerContent className="bg-card px-6">
                                            <DrawerHeader className="text-center px-0">
                                                <DrawerTitle className="text-2xl text-accent font-heading">Contato</DrawerTitle>
                                            </DrawerHeader>
                                            {ContactForm}
                                            <div className="h-8" />
                                        </DrawerContent>
                                    </Drawer>
                                )}

                                <div className="pt-8 border-t border-border/40 w-full flex flex-col sm:flex-row items-center justify-center gap-6">
                                    <div className="flex items-center gap-3">
                                        <a href="https://linkedin.com/in/rafaellylemos" target="_blank" className="p-2.5 rounded-xl bg-secondary/50 border border-border/40 text-foreground hover:text-accent transition-all">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                        <a href="https://github.com/rafaellylemos" target="_blank" className="p-2.5 rounded-xl bg-secondary/50 border border-border/40 text-foreground hover:text-accent transition-all">
                                            <Github className="w-5 h-5" />
                                        </a>
                                    </div>

                                    <div className="flex flex-col items-center sm:items-start border-l sm:border-border/40 sm:pl-6">
                                        <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-0.5">Localização</span>
                                        <div className="flex items-center gap-1.5 text-xs font-medium text-foreground/80">
                                            <MapPin className="w-3 h-3 text-accent" />
                                            <span>Recife, BR</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;