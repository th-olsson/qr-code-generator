import { TextInput } from "./text-input";
import { URLInput } from "./url-input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { QrInputType } from "@/types";

export function QrInputs() {
  return (
    <Tabs defaultValue={QrInputType.url}>
      <TabsList>
        <TabsTrigger value={QrInputType.url}>{QrInputType.url}</TabsTrigger>
        <TabsTrigger value={QrInputType.text}>{QrInputType.text}</TabsTrigger>
      </TabsList>
      <TabsContent value={QrInputType.url}>
        <URLInput />
      </TabsContent>
      <TabsContent value={QrInputType.text}>
        <TextInput />
      </TabsContent>
    </Tabs>
  );
}
