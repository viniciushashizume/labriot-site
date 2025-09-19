import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search, Edit, Trash2, ExternalLink } from "lucide-react"

export default function PublicationsAdmin() {
  // Dados simulados de publicações
  const publications2023 = [
    {
      id: 1,
      title: "Aprendizado Adaptativo em Sistemas Robóticos",
      authors: "Chen, S., Johnson, M., & Patel, A.",
      journal: "IEEE Transactions on Robotics",
      year: "2023",
      doi: "10.1109/TRO.2023.123456",
    },
    {
      id: 2,
      title: "Compreensão de Cenas 3D em Tempo Real para Navegação Autônoma",
      authors: "Johnson, M., Patel, A., & Chen, S.",
      journal: "International Conference on Robotics and Automation (ICRA)",
      year: "2023",
      doi: "10.1109/ICRA.2023.789012",
    },
  ]

  const publications2022 = [
    {
      id: 3,
      title: "Percepção Multi-Modal para Manipulação Robótica",
      authors: "Patel, A., Chen, S., & Johnson, M.",
      journal: "Conference on Robot Learning (CoRL)",
      year: "2022",
      doi: "10.1109/CORL.2022.345678",
    },
  ]

  const publications2021 = [
    {
      id: 4,
      title: "Aprendizado por Reforço para Manipulação Robótica",
      authors: "Johnson, M., & Chen, S.",
      journal: "Neural Information Processing Systems (NeurIPS)",
      year: "2021",
      doi: "10.1109/NEURIPS.2021.901234",
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Gerenciar Publicações</h1>
        <Button asChild>
          <Link href="/admin/publications/new">
            <Plus className="mr-2 h-4 w-4" />
            Nova Publicação
          </Link>
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar publicações..." className="w-full bg-background pl-8" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Ano" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os Anos</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
            <SelectItem value="2021">2021</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">Exportar</Button>
      </div>

      <Tabs defaultValue="2023" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="2023">2023</TabsTrigger>
          <TabsTrigger value="2022">2022</TabsTrigger>
          <TabsTrigger value="2021">2021</TabsTrigger>
        </TabsList>

        <TabsContent value="2023" className="mt-6 space-y-4">
          {publications2023.map((publication) => (
            <Card key={publication.id}>
              <CardHeader>
                <CardTitle>{publication.title}</CardTitle>
                <CardDescription>{publication.authors}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="text-sm">
                    <span className="font-medium">Publicado em:</span> {publication.journal}, {publication.year}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">DOI:</span> {publication.doi}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/admin/publications/edit/${publication.id}`}>
                      <Edit className="mr-2 h-4 w-4" />
                      Editar
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Excluir
                  </Button>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`https://doi.org/${publication.doi}`} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Publicação
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="2022" className="mt-6 space-y-4">
          {publications2022.map((publication) => (
            <Card key={publication.id}>
              <CardHeader>
                <CardTitle>{publication.title}</CardTitle>
                <CardDescription>{publication.authors}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="text-sm">
                    <span className="font-medium">Publicado em:</span> {publication.journal}, {publication.year}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">DOI:</span> {publication.doi}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/admin/publications/edit/${publication.id}`}>
                      <Edit className="mr-2 h-4 w-4" />
                      Editar
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Excluir
                  </Button>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`https://doi.org/${publication.doi}`} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Publicação
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="2021" className="mt-6 space-y-4">
          {publications2021.map((publication) => (
            <Card key={publication.id}>
              <CardHeader>
                <CardTitle>{publication.title}</CardTitle>
                <CardDescription>{publication.authors}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="text-sm">
                    <span className="font-medium">Publicado em:</span> {publication.journal}, {publication.year}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">DOI:</span> {publication.doi}
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/admin/publications/edit/${publication.id}`}>
                      <Edit className="mr-2 h-4 w-4" />
                      Editar
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Excluir
                  </Button>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`https://doi.org/${publication.doi}`} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Publicação
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}