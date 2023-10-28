import { DownloadButton } from "@/components/download-button";
import { DownloadSettings } from "@/components/download-settings";
import { QrCode } from "@/components/qr-code";
import { TextInput } from "@/components/textInput";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-4 flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-center sm:text-start">
        QR Code Generator
      </h1>
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Card className="w-full">
          <CardHeader />
          <CardContent>
            <TextInput />
            <DownloadSettings />
          </CardContent>
        </Card>
        <Card className="px-4">
          <CardHeader></CardHeader>
          <CardContent className="flex justify-center">
            <QrCode />
          </CardContent>
          <CardFooter>
            <div className="flex flex-row gap-2 justify-between w-full">
              <DownloadButton format="PNG" />
              <DownloadButton format="SVG" />
            </div>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
