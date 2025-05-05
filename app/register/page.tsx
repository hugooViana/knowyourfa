"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { createUser } from "@/lib/actions"

export default function RegisterPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("personal")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    address: "",
    phone: "",
    birthdate: "",
    interests: "",
    events: "",
    purchases: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await createUser(formData)
      router.push("/documents")
    } catch (error) {
      console.error("Error creating user:", error)
    }
  }

  const handleNextTab = () => {
    if (activeTab === "personal") setActiveTab("interests")
    else if (activeTab === "interests") handleSubmit(new Event("submit"))
  }

  const handlePrevTab = () => {
    if (activeTab === "interests") setActiveTab("personal")
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Cadastro de Perfil</h1>
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Informações do Fã</CardTitle>
          <CardDescription>Preencha seus dados para criar seu perfil de fã de esports</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="personal">Dados Pessoais</TabsTrigger>
                <TabsTrigger value="interests">Interesses e Atividades</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cpf">CPF</Label>
                    <Input
                      id="cpf"
                      name="cpf"
                      placeholder="000.000.000-00"
                      value={formData.cpf}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="birthdate">Data de Nascimento</Label>
                    <Input
                      id="birthdate"
                      name="birthdate"
                      type="date"
                      value={formData.birthdate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Endereço Completo</Label>
                  <Textarea
                    id="address"
                    name="address"
                    placeholder="Rua, número, bairro, cidade, estado, CEP"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
              </TabsContent>

              <TabsContent value="interests" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="interests">Interesses em Esports</Label>
                  <Textarea
                    id="interests"
                    name="interests"
                    placeholder="Descreva seus jogos e times favoritos, há quanto tempo acompanha esports, etc."
                    className="min-h-[100px]"
                    value={formData.interests}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="events">Eventos que Participou</Label>
                  <Textarea
                    id="events"
                    name="events"
                    placeholder="Liste os eventos de esports que você participou no último ano"
                    className="min-h-[100px]"
                    value={formData.events}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="purchases">Compras Relacionadas</Label>
                  <Textarea
                    id="purchases"
                    name="purchases"
                    placeholder="Descreva produtos relacionados a esports que você comprou no último ano (camisetas, ingressos, etc.)"
                    className="min-h-[100px]"
                    value={formData.purchases}
                    onChange={handleChange}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          {activeTab === "interests" && (
            <Button variant="outline" onClick={handlePrevTab}>
              Voltar
            </Button>
          )}
          {activeTab === "personal" ? (
            <Button className="ml-auto" onClick={handleNextTab}>
              Próximo
            </Button>
          ) : (
            <Button className="ml-auto" onClick={handleNextTab}>
              Finalizar e Continuar
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}
