"use client";

import { downloadAsPNG, downloadAsSVG, leftIcon } from "@/utils";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { useSettings } from "@/context/settings-context";

type Props = {
  format: "SVG" | "PNG";
};

export function DownloadButton({ format }: Props) {
  const { size } = useSettings();

  const id = "qr-code";
  const name = "QR";

  return (
    <Button
      aria-label={`Download QR code as ${format}`}
      className="w-full"
      onClick={() =>
        format === "SVG"
          ? downloadAsSVG(id, name)
          : downloadAsPNG(id, name, size)
      }
    >
      <Download className={leftIcon} />
      {format}
    </Button>
  );
}
