"use client";

import { QRCodeSVG } from "qrcode.react";
import { useQrCode } from "@/context/qr-context";
import { useOptions } from "@/context/options-context";

export function QrCode() {
  const { value } = useQrCode();
  const { size, transparent, level } = useOptions();

  return (
    <div className="bg-white p-6 border w-fit">
      <QRCodeSVG value={value} level={level} />
      {/* Hidden downloadable QR code */}
      <QRCodeSVG
        id="qr-code"
        className="hidden"
        value={value}
        size={size}
        level={level}
        includeMargin={!transparent}
        bgColor={transparent ? "transparent" : "white"}
      />
    </div>
  );
}
