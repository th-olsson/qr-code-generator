"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDownloadOptions } from "@/context/download-options-context";
import { Settings2 } from "lucide-react";
import { Switch } from "./ui/switch";

export function DownloadPopover() {
  const { size, setSize, transparent, setTransparent } = useDownloadOptions();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          aria-label="open download options"
        >
          <Settings2 />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Options</h4>
          </div>
          <div className="grid gap-4">
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
