import { TextInput } from "./text-input";
import { URLInput } from "./url-input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { QrInputType } from "@/types";
import { Link, Mail, Text } from "lucide-react";
import { EmailInput } from "./email-input";

const link = "w-3 h-3 mr-1";

export function QrInputs() {
  return (
    <Tabs defaultValue={QrInputType.url}>
      <TabsList className="flex flex-wrap w-fit h-fit">
        <TabsTrigger value={QrInputType.url}>
          <Link className={link} />
          {QrInputType.url}
        </TabsTrigger>
        <TabsTrigger value={QrInputType.text}>
          <Text className={link} />
          {QrInputType.text}
        </TabsTrigger>
        <TabsTrigger value={QrInputType.email}>
          <Mail className={link} />
          {QrInputType.email}
        </TabsTrigger>
      </TabsList>
      <TabsContent value={QrInputType.url}>
        <URLInput />
      </TabsContent>
      <TabsContent value={QrInputType.text}>
        <TextInput />
      </TabsContent>
      <TabsContent value={QrInputType.email}>
        <EmailInput />
      </TabsContent>
    </Tabs>
  );
}
