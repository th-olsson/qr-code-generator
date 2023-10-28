"use client";

import { QRCodeSVG } from "qrcode.react";
import { useQrCode } from "@/context/qr-context";

export function QrCode() {
  const { value } = useQrCode();

  return (
    <div className="bg-white p-6 border w-fit">
      <QRCodeSVG value={value} />
    </div>
  );
}
