"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { uploadDocument, verifyIdentity } from "@/lib/actions"
import { Loader2, Upload, Check, AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function DocumentsPage() {
  const router = useRouter()
  const [isUploading, setIsUploading] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const [documentFile, setDocumentFile] = useState<File | null>(null)
  const [selfieFile, setSelfieFile] = useState<File | null>(null)
  const [documentPreview, setDocumentPreview] = useState<string | null>(null)
  const [selfiePreview, setSelfiePreview] = useState<string | null>(null)
  const [verificationStatus, setVerificationStatus] = useState<"idle" | "success" | "error">("idle")
  const [verificationMessage, setVerificationMessage] = useState("")

  const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setDocumentFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setDocumentPreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSelfieChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelfieFile(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelfiePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUploadAndVerify = async () => {
    if (!documentFile || !selfieFile) return

    try {
      setIsUploading(true)

      // Upload dos documentos
      const documentUrl = await uploadDocument(documentFile, "document")
      const selfieUrl = await uploadDocument(selfieFile, "selfie")

      setIsUploading(false)
      setIsVerifying(true)

      // Verificação de identidade
      const result = await verifyIdentity(documentUrl, selfieUrl)

      if (result.success) {
        setVerificationStatus("success")
        setVerificationMessage("Verificação concluída com sucesso!")
        setTimeout(() => {
          router.push("/social")
        }, 2000)
      } else {
        setVerificationStatus("error")
        setVerificationMessage(result.message || "Falha na verificação. Tente novamente.")
      }
    } catch (error) {
      console.error("Error uploading or verifying:", error)
      setVerificationStatus("error")
      setVerificationMessage("Ocorreu um erro. Tente novamente.")
    } finally {
      setIsUploading(false)
      setIsVerifying(false)
    }
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Verificação de Identidade</h1>
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Upload de Documentos</CardTitle>
          <CardDescription>Faça o upload de seus documentos para verificação de identidade</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {verificationStatus !== "idle" && (
            <Alert variant={verificationStatus === "success" ? "default" : "destructive"}>
              {verificationStatus === "success" ? <Check className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
              <AlertTitle>{verificationStatus === "success" ? "Sucesso!" : "Erro!"}</AlertTitle>
              <AlertDescription>{verificationMessage}</AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Label htmlFor="document">Documento de Identidade (RG ou CNH)</Label>
              <div
                className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => document.getElementById("document")?.click()}
              >
                {documentPreview ? (
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
                    <img
                      src={documentPreview || "/placeholder.svg"}
                      alt="Preview do documento"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="py-8 flex flex-col items-center">
                    <Upload className="h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">Clique para fazer upload do documento</p>
                  </div>
                )}
                <input type="file" id="document" className="hidden" accept="image/*" onChange={handleDocumentChange} />
              </div>
            </div>

            <div className="space-y-4">
              <Label htmlFor="selfie">Selfie com Documento</Label>
              <div
                className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => document.getElementById("selfie")?.click()}
              >
                {selfiePreview ? (
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
                    <img src={selfiePreview || "/placeholder.svg"} alt="Preview da selfie" className="object-cover" />
                  </div>
                ) : (
                  <div className="py-8 flex flex-col items-center">
                    <Upload className="h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">Clique para fazer upload da selfie</p>
                  </div>
                )}
                <input type="file" id="selfie" className="hidden" accept="image/*" onChange={handleSelfieChange} />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Instruções:</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
              <li>O documento deve estar legível e sem reflexos</li>
              <li>A selfie deve mostrar claramente seu rosto junto com o documento</li>
              <li>Certifique-se de que todas as informações do documento estão visíveis</li>
              <li>Utilizamos IA para verificar a autenticidade dos documentos</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={handleUploadAndVerify}
            disabled={!documentFile || !selfieFile || isUploading || isVerifying}
          >
            {isUploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando documentos...
              </>
            ) : isVerifying ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Verificando identidade...
              </>
            ) : (
              "Enviar e Verificar"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
