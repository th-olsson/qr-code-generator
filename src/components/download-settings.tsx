"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useQrCode } from "@/context/qr-context";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useSettings } from "@/context/settings-context";

export function DownloadSettings() {
  const { value } = useQrCode();
  const { size, setSize, bgColor, setBgColor } = useSettings();

  const id = "qr-code";

  return (
    <div className="w-full">
      {/* Hidden QR code for download */}
      <QRCodeSVG
        id={id}
        className="hidden"
        value={value}
        includeMargin={bgColor !== "transparent"}
        bgColor={bgColor}
        size={size}
      />

      <Accordion type="single" collapsible defaultValue="download-settings">
        <AccordionItem value="download-settings">
          <AccordionTrigger>Options</AccordionTrigger>
          <AccordionContent className="px-4">
            <div className="flex flex-col p-1 gap-4">
              <div className="flex flex-col gap-2">
                <Label>Background</Label>
                <RadioGroup defaultValue={bgColor} onValueChange={setBgColor}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="white" id="white-bg" />
                    <Label htmlFor="white-bg">White</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="transparent"
                      id="transparent-bg"
                      onSelect={() => console.log("item on select")}
                    />
                    <Label htmlFor="transparent-bg">Transparent</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="size">Size (px)</Label>
                <Input
                  id="size"
                  type="number"
                  min="1"
                  value={size}
                  onChange={(e) => setSize(e.target.valueAsNumber)}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
