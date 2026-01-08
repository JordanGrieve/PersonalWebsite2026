import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TimeLine from "./TimeLine";

function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <TimeLine />
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
}

export default TabsDemo;
