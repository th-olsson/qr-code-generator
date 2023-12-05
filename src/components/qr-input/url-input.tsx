"use client";

import { useQrCode } from "@/context/qr-context";
import { Label } from "../ui/label";
import { QrInputType } from "@/types";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";

export function URLInput() {
  const { urlInput, setValue } = useQrCode();
  const { url, setUrl } = urlInput;

  useEffect(() => {
    setValue(url);
  });

  return (
    <div className="flex flex-col space-y-2 w-full">
      <Label htmlFor="url-input">{QrInputType.url}</Label>
      <Input
        id="url-input"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
    </div>
  );
}
