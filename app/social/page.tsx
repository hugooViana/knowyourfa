"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { connectSocialMedia, validateEsportsProfile } from "@/lib/actions"
import { Loader2 } from "lucide-react"

export default function SocialPage() {
  const router = useRouter()
  const [isConnecting, setIsConnecting] = useState(false)
  const [isValidating, setIsValidating] = useState(false)
  const [socialProfiles, setSocialProfiles] = useState({
    twitter: "",
    instagram: "",
    facebook: "",
    twitch: "",
    youtube: "",
  })
  const [esportsProfiles, setEsportsProfiles] = useState({
    steam: "",
    battlenet: "",
    riotgames: "",
    faceit: "",
    gamersclub: "",
  })
  const [permissions, setPermissions] = useState({
    readPosts: true,
    readFollowing: true,
    readInteractions: true,
  })

  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSocialProfiles((prev) => ({ ...prev, [name]: value }))
  }

  const handleEsportsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEsportsProfiles((prev) => ({ ...prev, [name]: value }))
  }

  const handlePermissionChange = (name: string, checked: boolean) => {
    setPermissions((prev) => ({ ...prev, [name]: checked }))
  }

  const handleConnectSocial = async () => {
    try {
      setIsConnecting(true)
      await connectSocialMedia(socialProfiles, permissions)
      setIsConnecting(false)
    } catch (error) {
      console.error("Error connecting social media:", error)
      setIsConnecting(false)
    }
  }

  const handleValidateProfiles = async () => {
    try {
      setIsValidating(true)
      await validateEsportsProfile(esportsProfiles)
      setIsValidating(false)
      router.push("/dashboard")
    } catch (error) {
      console.error("Error validating esports profiles:", error)
      setIsValidating(false)
    }
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Conectar Redes Sociais</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Redes Sociais</CardTitle>
            <CardDescription>Conecte suas redes sociais para analisar suas interações com esports</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="twitter">Twitter/X</Label>
              <Input
                id="twitter"
                name="twitter"
                placeholder="@seu_usuario"
                value={socialProfiles.twitter}
                onChange={handleSocialChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="instagram">Instagram</Label>
              <Input
                id="instagram"
                name="instagram"
                placeholder="@seu_usuario"
                value={socialProfiles.instagram}
                onChange={handleSocialChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="facebook">Facebook</Label>
              <Input
                id="facebook"
                name="facebook"
                placeholder="seu_perfil"
                value={socialProfiles.facebook}
                onChange={handleSocialChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="twitch">Twitch</Label>
              <Input
                id="twitch"
                name="twitch"
                placeholder="seu_canal"
                value={socialProfiles.twitch}
                onChange={handleSocialChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="youtube">YouTube</Label>
              <Input
                id="youtube"
                name="youtube"
                placeholder="seu_canal"
                value={socialProfiles.youtube}
                onChange={handleSocialChange}
              />
            </div>

            <div className="border-t pt-4 mt-4">
              <h3 className="font-medium mb-2">Permissões:</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="readPosts" className="cursor-pointer">
                    Ler publicações
                  </Label>
                  <Switch
                    id="readPosts"
                    checked={permissions.readPosts}
                    onCheckedChange={(checked) => handlePermissionChange("readPosts", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="readFollowing" className="cursor-pointer">
                    Ler páginas seguidas
                  </Label>
                  <Switch
                    id="readFollowing"
                    checked={permissions.readFollowing}
                    onCheckedChange={(checked) => handlePermissionChange("readFollowing", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="readInteractions" className="cursor-pointer">
                    Ler interações
                  </Label>
                  <Switch
                    id="readInteractions"
                    checked={permissions.readInteractions}
                    onCheckedChange={(checked) => handlePermissionChange("readInteractions", checked)}
                  />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleConnectSocial} disabled={isConnecting}>
              {isConnecting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Conectando...
                </>
              ) : (
                "Conectar Redes Sociais"
              )}
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Perfis de Esports</CardTitle>
            <CardDescription>Adicione seus perfis em plataformas de jogos e esports</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="steam">Steam</Label>
              <Input
                id="steam"
                name="steam"
                placeholder="URL do perfil ou ID"
                value={esportsProfiles.steam}
                onChange={handleEsportsChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="battlenet">Battle.net</Label>
              <Input
                id="battlenet"
                name="battlenet"
                placeholder="Seu ID"
                value={esportsProfiles.battlenet}
                onChange={handleEsportsChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="riotgames">Riot Games</Label>
              <Input
                id="riotgames"
                name="riotgames"
                placeholder="Seu nome de invocador"
                value={esportsProfiles.riotgames}
                onChange={handleEsportsChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="faceit">FACEIT</Label>
              <Input
                id="faceit"
                name="faceit"
                placeholder="URL do perfil"
                value={esportsProfiles.faceit}
                onChange={handleEsportsChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="gamersclub">Gamers Club</Label>
              <Input
                id="gamersclub"
                name="gamersclub"
                placeholder="URL do perfil"
                value={esportsProfiles.gamersclub}
                onChange={handleEsportsChange}
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <h3 className="font-medium mb-2">Como funciona:</h3>
              <p className="text-sm text-gray-600">
                Nossa IA analisará seus perfis para validar que você é um fã autêntico de esports e personalizar sua
                experiência. Seus dados são protegidos e usados apenas para melhorar sua experiência.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleValidateProfiles} disabled={isValidating}>
              {isValidating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Validando...
                </>
              ) : (
                "Validar e Continuar"
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
