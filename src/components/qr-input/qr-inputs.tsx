import { TextInput } from "./text-input";
import { URLInput } from "./url-input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { QrInputType } from "@/types";
import { Link, Text } from "lucide-react";

const link = "w-3 h-3 mr-1";

export function QrInputs() {
  return (
    <Tabs defaultValue={QrInputType.url}>
      <TabsList>
        <TabsTrigger value={QrInputType.url}>
          <Link className={link} />
          {QrInputType.url}
        </TabsTrigger>
        <TabsTrigger value={QrInputType.text}>
          <Text className={link} />
          {QrInputType.text}
        </TabsTrigger>
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
