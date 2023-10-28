import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function downloadAsSVG(id: string, name: string) {
  const svg = document.getElementById(id);
  if (!svg) {
    return;
  }
  const svgData = new XMLSerializer().serializeToString(svg);
  const svgBlob = new Blob([svgData], { type: "image/svg+xml" });
  const svgUrl = URL.createObjectURL(svgBlob);
  const downloadLink = document.createElement("a");
  downloadLink.href = svgUrl;
  downloadLink.download = `${name}.svg`;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

export function downloadAsPNG(id: string, name: string, size: number) {
  const svg = document.getElementById(id);
  if (!svg) {
    return;
  }
  const svgData = new XMLSerializer().serializeToString(svg);
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }
  const img = document.createElement("img");
  img.setAttribute("src", "data:image/svg+xml;base64," + btoa(svgData));
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
    const png = canvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = png;
    downloadLink.download = `${name}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
}

export const leftIcon = cn("mr-2 h-4 w-4");
export const rightIcon = cn("ml-2 h-4 w-4");
