import { DownloadButton } from "@/components/download-button";
import { OptionsPopover } from "@/components/options-popover";
import { QrCode } from "@/components/qr-code";
import { QrInputs } from "@/components/qr-input/qr-inputs";
import { ThemeSelector } from "@/components/theme-selector";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Readex_Pro } from "next/font/google";

const readexPro = Readex_Pro({ subsets: ["latin"], weight: "variable" });

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-4 flex flex-col gap-6">
      <div className="flex justify-between items-baseline">
        <h1 className={`${readexPro.className} text-2xl font-medium`}>
          Create your QR code
        </h1>
        <ThemeSelector />
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <Card className="w-full h-fit">
          <CardHeader>
            <QrInputs />
          </CardHeader>
        </Card>
        <Card className="flex flex-col items-center justify-center  h-fit sticky top-0">
          <CardContent className="flex justify-center flex-col items-center p-6">
            <QrCode />
            <div className="flex flex-row gap-2 justify-between w-full pt-4">
              <DownloadButton />
              <div>
                <OptionsPopover />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
