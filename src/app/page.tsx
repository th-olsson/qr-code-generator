import { DownloadButton } from "@/components/download-button";
import { DownloadPopover } from "@/components/download-options";
import { QrCode } from "@/components/qr-code";
import { QrInputs } from "@/components/qr-input/qr-inputs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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
        </Card>
        <Card className="flex flex-col items-center justify-center  h-fit sticky top-0">
          <CardContent className="flex justify-center flex-col items-center p-6">
            <QrCode />
            <div className="flex flex-row gap-2 justify-between w-full pt-6">
              <DownloadButton />
              <div>
                <DownloadPopover />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
