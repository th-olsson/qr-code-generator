import { TextInput } from "./text-input";
import { URLInput } from "./url-input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { QrInputType } from "@/types";
import { Link, Mail, Phone, Text, Wifi } from "lucide-react";
import { EmailInput } from "./email-input";
import { PhoneInput } from "./phone-input";
import { WifiInput } from "./wifi-input";

const link = "w-3 h-3 mr-1";

export function QrInputs() {
  return (
    <Tabs defaultValue={QrInputType.url} className="flex flex-col gap-4">
      <TabsList className="flex flex-wrap w-fit h-fit justify-start gap-y-1">
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
        <TabsTrigger value={QrInputType.phone}>
          <Phone className={link} />
          {QrInputType.phone}
        </TabsTrigger>
        <TabsTrigger value={QrInputType.wifi}>
          <Wifi className={link} />
          {QrInputType.wifi}
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
      <TabsContent value={QrInputType.phone}>
        <PhoneInput />
      </TabsContent>
      <TabsContent value={QrInputType.wifi}>
        <WifiInput />
      </TabsContent>
    </Tabs>
  );
}
