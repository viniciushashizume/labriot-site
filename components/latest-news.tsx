import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function LatestNews() {
  const news = [
    {
      id: 1,
      title: "Avanço em Navegação Autônoma",
      date: "15 de Setembro, 2025",
      excerpt: "Nossa equipe publicou um novo artigo sobre algoritmos de SLAM visual que melhoram drasticamente a precisão da navegação em ambientes internos.",
      slug: "avanco-navegacao-autonoma"
    },
    {
      id: 2,
      title: "Labriot Vence Competição de Robótica",
      date: "2 de Setembro, 2025",
      excerpt: "Estamos orgulhosos de anunciar que nosso robô autônomo, ATLAS, conquistou o primeiro lugar na Competição Internacional de Robótica 2025.",
      slug: "vitoria-competicao-robotica"
    }
  ]

  return (
    <div className="space-y-4">
      {news.map((item) => (
        <Card key={item.id}>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">{item.title}</CardTitle>
            <CardDescription>{item.date}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{item.excerpt}</p>
          </CardContent>
          <CardFooter>
            <Link href={`/blog/${item.slug}`} className="text-sm font-medium flex items-center">
              Leia Mais <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}