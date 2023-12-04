"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Level, useOptions } from "@/context/options-context";
import { Settings2, X } from "lucide-react";
import { Switch } from "./ui/switch";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { useEffect } from "react";
import { Separator } from "./ui/separator";
import { PopoverClose } from "@radix-ui/react-popover";

export function OptionsPopover() {
  const { size, setSize, transparent, setTransparent, level, setLevel } =
    useOptions();

  // Prevents empty size value
  useEffect(() => {
    if (!size) {
      setSize(1);
    }
  }, [setSize, size]);

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
          <div className="flex justify-between items-center">
            <h4 className="font-medium leading-none">Options</h4>
            <PopoverClose asChild>
              <Button
                size="icon"
                variant="ghost"
                className="h-6 w-6 inline-flex items-center justify-center rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
            </PopoverClose>
          </div>
          <Separator />
          <div className="grid gap-4">
            <div className="items-top flex justify-between">
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="transparent"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Transparent background
                </label>
              </div>
              <Switch
                id="transparent"
                checked={transparent}
                onCheckedChange={() => setTransparent(!transparent)}
              />
            </div>
            <fieldset className="flex justify-between items-center">
              <div>
                <legend className="text-sm font-medium inline">
                  Error Level
                </legend>
              </div>
              <Tabs value={level} onValueChange={(v) => setLevel(v as Level)}>
                <TabsList className="h-8 gap-2" role="radiogroup">
                  <TabsTrigger
                    value="L"
                    className="h-6 w-6"
                    role="radio"
                    aria-selected={undefined}
                    aria-checked={level === "L"}
                  >
                    L
                  </TabsTrigger>
                  <TabsTrigger
                    value="M"
                    className="h-6 w-6"
                    role="radio"
                    aria-selected={undefined}
                    aria-checked={level === "M"}
                  >
                    M
                  </TabsTrigger>
                  <TabsTrigger
                    value="Q"
                    className="h-6 w-6"
                    role="radio"
                    aria-selected={undefined}
                    aria-checked={level === "Q"}
                  >
                    Q
                  </TabsTrigger>
                  <TabsTrigger
                    value="H"
                    className="h-6 w-6"
                    role="radio"
                    aria-selected={undefined}
                    aria-checked={level === "H"}
                  >
                    H
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </fieldset>
            <div className="flex items-center justify-between gap-32">
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
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
6;
