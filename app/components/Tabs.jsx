import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ExperienceTimeLine from "./ExperienceTimeLine";
import EducationTimeLine from "./EducationTimeline";

function TabsDemo({ className }) {
  return (
    <Tabs defaultValue="experience" className="w-full inter-font">
      <TabsList>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
      </TabsList>
      <TabsContent value="experience">
        <ExperienceTimeLine />
      </TabsContent>
      <TabsContent value="education">
        <EducationTimeLine />
      </TabsContent>
    </Tabs>
  );
}

export default TabsDemo;
