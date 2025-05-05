"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getUserProfile } from "@/lib/actions"
import { Loader2, Edit, Save } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ProfilePage() {
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<any>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editedProfile, setEditedProfile] = useState<any>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile()
        setProfile(data)
        setEditedProfile(data)
      } catch (error) {
        console.error("Erro ao buscar perfil:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setEditedProfile((prev: any) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSave = () => {
    setProfile(editedProfile)
    setIsEditing(false)
    // Aqui você implementaria a chamada para salvar no backend
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Perfil do Fã</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <Avatar className="w-24 h-24 mx-auto">
                <AvatarImage src="/placeholder.svg" alt={profile.name} />
                <AvatarFallback>
                  {profile.name
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="mt-4">{profile.name}</CardTitle>
              <CardDescription>{profile.email}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Membro desde</p>
                  <p>Janeiro 2024</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Nível de fã</p>
                  <p>Entusiasta</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Pontos acumulados</p>
                  <p>1.250 pts</p>
                </div>
                <Button variant="outline" className="w-full" onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? (
                    <>
                      <Save className="mr-2 h-4 w-4" />
                      Cancelar Edição
                    </>
                  ) : (
                    <>
                      <Edit className="mr-2 h-4 w-4" />
                      Editar Perfil
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="personal">Dados Pessoais</TabsTrigger>
              <TabsTrigger value="interests">Interesses</TabsTrigger>
              <TabsTrigger value="documents">Documentos</TabsTrigger>
            </TabsList>
            <TabsContent value="personal" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Pessoais</CardTitle>
                  <CardDescription>Seus dados cadastrais</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isEditing ? (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome Completo</Label>
                          <Input id="name" name="name" value={editedProfile.name} onChange={handleInputChange} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={editedProfile.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cpf">CPF</Label>
                          <Input id="cpf" name="cpf" value={editedProfile.cpf || ""} onChange={handleInputChange} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={editedProfile.phone || ""}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Endereço</Label>
                        <Textarea
                          id="address"
                          name="address"
                          value={editedProfile.address || ""}
                          onChange={handleInputChange}
                        />
                      </div>
                      <Button onClick={handleSave}>Salvar Alterações</Button>
                    </>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Nome Completo</p>
                          <p>{profile.name}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Email</p>
                          <p>{profile.email}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500">CPF</p>
                          <p>{profile.cpf || "Não informado"}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">Telefone</p>
                          <p>{profile.phone || "Não informado"}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Endereço</p>
                        <p>{profile.address || "Não informado"}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="interests" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Interesses em Esports</CardTitle>
                  <CardDescription>Seus jogos e times favoritos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Jogos Favoritos</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {profile.interests.map((interest: string, index: number) => (
                          <div key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                            {interest}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Times Favoritos</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {profile.socialStats.followedTeams.map((team: string, index: number) => (
                          <div key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                            {team}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Eventos Recentes</p>
                      <ul className="mt-2 space-y-2">
                        {profile.recentEvents.map((event: any, index: number) => (
                          <li key={index} className="text-sm">
                            {event.name} - {new Date(event.date).toLocaleDateString("pt-BR")}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="documents" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Documentos Verificados</CardTitle>
                  <CardDescription>Status da verificação de identidade</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-200 rounded-md p-4 flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-3">
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
                          className="text-green-600"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-green-800">Verificação Concluída</h4>
                        <p className="text-sm text-green-700 mt-1">
                          Sua identidade foi verificada com sucesso em 10/01/2024
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Documentos Enviados</p>
                      <ul className="mt-2 space-y-2">
                        <li className="flex items-center text-sm">
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
                            className="mr-2 text-gray-400"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                          </svg>
                          Documento de Identidade (RG)
                        </li>
                        <li className="flex items-center text-sm">
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
                            className="mr-2 text-gray-400"
                          >
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                          </svg>
                          Selfie com Documento
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
