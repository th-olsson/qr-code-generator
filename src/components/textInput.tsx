"use client";

import { useQrCode } from "@/context/qr-context";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function TextInput() {
  const { setValue } = useQrCode();

  return (
    <div className="flex flex-col space-y-2 w-full">
      <Label htmlFor="text-input">Text</Label>
      <Input
        id="text-input"
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
