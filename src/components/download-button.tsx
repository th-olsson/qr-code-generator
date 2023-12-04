"use client";

import { downloadAsPNG, downloadAsSVG } from "@/utils";
import { Button } from "./ui/button";
import { useSettings } from "@/context/settings-context";

export function DownloadButton() {
  const { size, format } = useSettings();

  const id = "qr-code";
  const name = "QR";

  return (
    <Button
      aria-label={`Download QR code as ${format}`}
      className="w-full"
      variant="outline"
      onClick={() =>
        format === "SVG"
          ? downloadAsSVG(id, name)
          : downloadAsPNG(id, name, size)
      }
      disabled={Number.isNaN(size) || size < 1}
    >
      Download
    </Button>
  );
}
