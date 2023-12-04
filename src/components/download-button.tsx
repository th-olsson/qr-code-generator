"use client";

import { downloadAsPNG, downloadAsSVG, rightIcon } from "@/utils";
import { Button } from "./ui/button";
import { useDownloadOptions } from "@/context/download-options-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Download } from "lucide-react";

export function DownloadButton() {
  const { size } = useDownloadOptions();

  const id = "qr-code";
  const name = "QR";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-full flex justify-between">
          <span>Download</span>
          <ChevronDown className={rightIcon} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => downloadAsPNG(id, name, size)}>
          Download PNG
          <Download className={rightIcon} />
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => downloadAsSVG(id, name)}>
          Download SVG
          <Download className={rightIcon} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
