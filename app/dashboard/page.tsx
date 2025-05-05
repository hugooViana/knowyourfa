"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { getUserProfile } from "@/lib/actions"
import { Loader2 } from "lucide-react"
import Image from "next/image"

interface UserProfile {
  name: string
  email: string
  profileCompletion: number
  interests: string[]
  recentEvents: { name: string; date: string }[]
  socialStats: {
    esportsInteractions: number
    furiaInteractions: number
    followedTeams: string[]
  }
  recommendations: { title: string; description: string; type: string }[]
}

export default function DashboardPage() {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile()
        setProfile(data)
      } catch (error) {
        console.error("Error fetching profile:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    )
  }

  // Usar os dados do perfil carregado
  const userProfile = profile || {
    name: "Hugo Viana",
    email: "hugo.viana@email.com",
    profileCompletion: 85,
    interests: ["CS:GO", "League of Legends", "Valorant", "FURIA", "LOUD"],
    recentEvents: [
      { name: "ESL Pro League Season 16", date: "2024-03-15" },
      { name: "CBLOL 2024 - Split 1", date: "2024-02-20" },
    ],
    socialStats: {
      esportsInteractions: 127,
      furiaInteractions: 43,
      followedTeams: ["FURIA", "LOUD", "paiN Gaming", "MIBR"],
    },
    recommendations: [
      {
        title: "FURIA Store - Camiseta Oficial 2024",
        description: "Nova camiseta oficial do time FURIA para a temporada 2024",
        type: "product",
      },
      {
        title: "IEM Rio 2024",
        description: "Campeonato internacional de CS2 no Rio de Janeiro",
        type: "event",
      },
      {
        title: "Programa de Fidelidade FURIA",
        description: "Acumule pontos e troque por produtos exclusivos",
        type: "program",
      },
    ],
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard do Fã</h1>
          <p className="text-gray-500">Bem-vindo de volta, {userProfile.name}</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center">
          <div className="mr-4">
            <p className="text-sm text-gray-500">Perfil completo</p>
            <div className="flex items-center">
              <Progress value={userProfile.profileCompletion} className="w-32 mr-2" />
              <span className="text-sm font-medium">{userProfile.profileCompletion}%</span>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
          <TabsTrigger value="recommendations">Recomendações</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Perfil de Fã</CardTitle>
                <CardDescription>Seus interesses em esports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {userProfile.interests.map((interest, index) => (
                    <Badge key={index} variant="secondary">
                      {interest}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-2">Eventos Recentes</h4>
                  <ul className="space-y-2">
                    {userProfile.recentEvents.map((event, index) => (
                      <li key={index} className="text-sm flex justify-between">
                        <span>{event.name}</span>
                        <span className="text-gray-500">{new Date(event.date).toLocaleDateString("pt-BR")}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Estatísticas Sociais</CardTitle>
                <CardDescription>Suas interações com esports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Interações com Esports</span>
                      <span className="text-sm font-medium">{userProfile.socialStats.esportsInteractions}</span>
                    </div>
                    <Progress value={Math.min(userProfile.socialStats.esportsInteractions / 2, 100)} />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Interações com FURIA</span>
                      <span className="text-sm font-medium">{userProfile.socialStats.furiaInteractions}</span>
                    </div>
                    <Progress value={Math.min(userProfile.socialStats.furiaInteractions / 1, 100)} />
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Times Seguidos</h4>
                    <div className="flex flex-wrap gap-2">
                      {userProfile.socialStats.followedTeams.map((team, index) => (
                        <Badge key={index} variant="outline">
                          {team}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Recomendações</CardTitle>
                <CardDescription>Baseadas no seu perfil</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {userProfile.recommendations.map((rec, index) => (
                    <li key={index} className="border-b pb-3 last:border-0 last:pb-0">
                      <div className="flex items-start">
                        <div className="bg-gray-100 p-2 rounded mr-3">
                          {rec.type === "product" && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                              <line x1="3" y1="6" x2="21" y2="6"></line>
                              <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                          )}
                          {rec.type === "event" && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                              <line x1="16" y1="2" x2="16" y2="6"></line>
                              <line x1="8" y1="2" x2="8" y2="6"></line>
                              <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                          )}
                          {rec.type === "program" && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          )}
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">{rec.title}</h4>
                          <p className="text-xs text-gray-500">{rec.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="social" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Análise de Redes Sociais</CardTitle>
              <CardDescription>Suas interações com conteúdo de esports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Distribuição de Interações</h3>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Gráfico de distribuição de interações</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Times Mais Interagidos</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>FURIA</span>
                        <span>43%</span>
                      </div>
                      <Progress value={43} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>LOUD</span>
                        <span>27%</span>
                      </div>
                      <Progress value={27} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>paiN Gaming</span>
                        <span>18%</span>
                      </div>
                      <Progress value={18} />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>MIBR</span>
                        <span>12%</span>
                      </div>
                      <Progress value={12} />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Produtos Recomendados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                      <Image
                        src="/placeholder.svg"
                        alt="Camiseta FURIA"
                        width={400}
                        height={200}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium">Camiseta Oficial FURIA 2024</h4>
                    <p className="text-sm text-gray-500 mt-1">R$ 249,90</p>
                    <Badge className="mt-2">Recomendado para você</Badge>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                      <Image
                        src="/placeholder.svg"
                        alt="Mousepad FURIA"
                        width={400}
                        height={200}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium">Mousepad FURIA XL</h4>
                    <p className="text-sm text-gray-500 mt-1">R$ 129,90</p>
                    <Badge className="mt-2">Recomendado para você</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Eventos Próximos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <Badge>15 Jun 2024</Badge>
                    <Badge variant="outline">Rio de Janeiro</Badge>
                  </div>
                  <h4 className="font-medium">IEM Rio 2024</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Campeonato internacional de CS2 com a participação da FURIA
                  </p>
                  <div className="mt-3 text-sm">
                    <span className="font-medium">Compatibilidade:</span> 98%
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <Badge>22 Jul 2024</Badge>
                    <Badge variant="outline">São Paulo</Badge>
                  </div>
                  <h4 className="font-medium">CBLOL Split 2 - Final</h4>
                  <p className="text-sm text-gray-500 mt-1">Final do Campeonato Brasileiro de League of Legends</p>
                  <div className="mt-3 text-sm">
                    <span className="font-medium">Compatibilidade:</span> 85%
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Programas Exclusivos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium">Programa de Fidelidade FURIA</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Acumule pontos e troque por produtos exclusivos e experiências únicas com o time
                  </p>
                  <Badge className="mt-3" variant="secondary">
                    Exclusivo para fãs
                  </Badge>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium">Meet & Greet Virtual</h4>
                  <p className="text-sm text-gray-500 mt-1">Encontro virtual exclusivo com jogadores da FURIA</p>
                  <Badge className="mt-3" variant="secondary">
                    Vagas limitadas
                  </Badge>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium">Clube de Assinatura</h4>
                  <p className="text-sm text-gray-500 mt-1">Receba produtos exclusivos da FURIA mensalmente</p>
                  <Badge className="mt-3" variant="secondary">
                    Novo programa
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
