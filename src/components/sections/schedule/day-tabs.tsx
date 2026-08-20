"use client";

import { ScheduleItem } from "@/components/sections/schedule/schedule-item";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { scheduleDays } from "@/data/schedule";

export function DayTabs() {
  return (
    <Tabs defaultValue={scheduleDays[0].id} className="gap-8">
      <TabsList className="group-data-horizontal/tabs:h-auto w-fit gap-2 rounded-full border border-white/10 bg-white/5 p-1.5">
        {scheduleDays.map((day) => (
          <TabsTrigger
            key={day.id}
            value={day.id}
            className="h-auto rounded-full border-transparent px-6 py-3 font-button text-sm font-bold text-white/60 after:hidden data-active:!border-primary data-active:!bg-primary data-active:!text-primary-foreground data-active:shadow-none"
          >
            {day.label} · {day.date}
          </TabsTrigger>
        ))}
      </TabsList>

      {scheduleDays.map((day) => (
        <TabsContent key={day.id} value={day.id}>
          <RevealGroup className="flex flex-col gap-4">
            {day.items.map((item) => (
              <RevealItem key={item.time}>
                <ScheduleItem {...item} />
              </RevealItem>
            ))}
          </RevealGroup>
        </TabsContent>
      ))}
    </Tabs>
  );
}
