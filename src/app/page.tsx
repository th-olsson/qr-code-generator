import { DownloadButton } from "@/components/download-button";
import { DownloadSettings } from "@/components/download-settings";
import { QrCode } from "@/components/qr-code";
import { QrInputs } from "@/components/qr-input/qr-inputs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-4 flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-center sm:text-start">
        Create your QR code
      </h1>
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Card className="w-full h-fit">
          <CardHeader>
            <QrInputs />
          </CardHeader>
          <Separator />
          <CardContent className="pb-0">
            <DownloadSettings />
          </CardContent>
        </Card>

        <Card className="flex flex-col items-center justify-center px-6 h-fit sticky top-0">
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
