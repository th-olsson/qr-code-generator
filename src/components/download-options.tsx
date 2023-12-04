"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSettings } from "@/context/settings-context";
import { Settings2 } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Switch } from "./ui/switch";

export function DownloadPopover() {
  const { size, setSize, transparent, setTransparent, format, setFormat } =
    useSettings();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="open download options"
        >
          <Settings2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Download options</h4>
          </div>
          <div className="grid gap-4">
            <fieldset>
              <RadioGroup
                value={format}
                onValueChange={setFormat}
                className="flex items-center justify-between"
              >
                <legend className="text-sm font-medium">Format</legend>
                <div className="flex gap-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="PNG" id="PNG" />
                    <Label htmlFor="PNG">PNG</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="SVG" id="SVG" />
                    <Label htmlFor="SVG">SVG</Label>
                  </div>
                </div>
              </RadioGroup>
            </fieldset>

            <div className="flex items-center justify-between gap-20">
              <Label htmlFor="size" className="whitespace-nowrap">
                Size (px)
              </Label>
              <Input
                className="h-8"
                id="size"
                type="number"
                min={1}
                value={size}
                onChange={(e) => setSize(e.target.valueAsNumber)}
              />
            </div>
            <div className="items-top flex justify-between">
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="transparent"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Use background
                </label>
              </div>
              <Switch
                id="transparent"
                checked={!transparent}
                onCheckedChange={() => setTransparent(!transparent)}
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
