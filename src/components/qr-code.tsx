"use client";

import { QRCodeSVG } from "qrcode.react";
import { useQrCode } from "@/context/qr-context";
import { useSettings } from "@/context/settings-context";

export function QrCode() {
  const { value } = useQrCode();
  const { size, transparent } = useSettings();

  return (
    <div className="bg-white p-6 border w-fit">
      <QRCodeSVG value={value} />
      {/* Hidden downloadable QR code */}
      <QRCodeSVG
        id="qr-code"
        className="hidden"
        value={value}
        includeMargin={!transparent}
        bgColor={transparent ? "transparent" : "white"}
        size={size}
      />
    </div>
  );
}
