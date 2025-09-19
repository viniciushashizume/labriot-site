import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react"

export default function BlogAdmin() {
  // Dados simulados de posts do blog
  const blogPosts = [
    {
      id: 1,
      title: "Avanços na Robótica Autônoma",
      author: "Dra. Sarah Chen",
      date: "10 de Setembro, 2025",
      status: "Publicado",
      excerpt:
        "Uma visão aprofundada de nossas últimas pesquisas em sistemas de navegação autônoma e suas aplicações no mundo real.",
    },
    {
      id: 2,
      title: "O Futuro da Interação Humano-Robô",
      author: "Dr. Marcus Johnson",
      date: "5 de Setembro, 2025",
      status: "Rascunho",
      excerpt:
        "Explorando novas interfaces e paradigmas para uma colaboração mais intuitiva e eficaz entre humanos e robôs.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Gerenciar Blog</h1>
        <Button asChild>
          <Link href="/admin/blog/new">
            <Plus className="mr-2 h-4 w-4" />
            Novo Post
          </Link>
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar posts..." className="w-full bg-background pl-8" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="published">Publicados</SelectItem>
            <SelectItem value="draft">Rascunhos</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">Filtros</Button>
      </div>

      <div className="space-y-4">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>
                {post.author} • {post.status === "Publicado" ? post.date : "Rascunho"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/admin/blog/edit/${post.id}`}>
                    <Edit className="mr-2 h-4 w-4" />
                    Editar
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="text-destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Excluir
                </Button>
              </div>
              {post.status === "Publicado" ? (
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/blog/${post.id}`} target="_blank">
                    <Eye className="mr-2 h-4 w-4" />
                    Visualizar
                  </Link>
                </Button>
              ) : (
                <Button variant="default" size="sm">
                  Publicar
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}