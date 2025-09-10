import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Blog Labriot</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Mantenha-se atualizado com nossos mais recentes avanços de pesquisa, insights e eventos em robótica e
                  IA.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input type="text" placeholder="Pesquisar artigos..." className="max-w-lg flex-1" />
                  <Button type="submit">Pesquisar</Button>
                </form>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button variant="outline" size="lg">
                Carregar Mais Artigos
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Assine Nossa Newsletter</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Mantenha-se atualizado com nossos mais recentes avanços de pesquisa, publicações e eventos.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2 sm:flex-row">
                <Input type="email" placeholder="Digite seu email" className="max-w-lg flex-1" />
                <Button type="submit">Assinar</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                Respeitamos sua privacidade. Cancele a inscrição a qualquer momento.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

