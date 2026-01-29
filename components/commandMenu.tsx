"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { User, Briefcase, GraduationCap, Mail, Github, Linkedin } from "lucide-react"

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = (command: () => void) => {
    setOpen(false)
    command()
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="O que você procura? (Tente 'Projetos'...)" />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
        <CommandGroup heading="Navegação">
          <CommandItem onSelect={() => runCommand(() => window.location.hash = "#about")}>
            <User className="mr-2 h-4 w-4" />
            <span>Sobre Mim</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => window.location.hash = "#experience")}>
            <Briefcase className="mr-2 h-4 w-4" />
            <span>Experiência Profissional</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => window.location.hash = "#courses")}>
            <GraduationCap className="mr-2 h-4 w-4" />
            <span>Formação Acadêmica</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Social & Links">
          <CommandItem onSelect={() => runCommand(() => window.open("https://github.com/seu-user", "_blank"))}>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => window.open("https://linkedin.com/in/seu-user", "_blank"))}>
            <Linkedin className="mr-2 h-4 w-4" />
            <span>LinkedIn</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}