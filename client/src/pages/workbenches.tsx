import { useQuery } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ProductCard from "@/components/workbench/product-card";
import type { Workbench } from "@db/schema";

export default function Workbenches() {
  const [selectedWorkbench, setSelectedWorkbench] = useState<Workbench | null>(null);
  const { data: workbenches, isLoading } = useQuery<Workbench[]>({
    queryKey: ["/api/workbenches"],
  });

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmitInquiry = (data: any) => {
    // Handle inquiry submission
    console.log(data);
  };

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold">Premium Workbenches</h1>
        
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-[500px] animate-pulse bg-muted rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workbenches?.map((workbench) => (
              <ProductCard 
                key={workbench.id} 
                workbench={workbench}
                onInquire={() => setSelectedWorkbench(workbench)}
              />
            ))}
          </div>
        )}
      </div>

      <Dialog open={!!selectedWorkbench} onOpenChange={() => setSelectedWorkbench(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Inquire About {selectedWorkbench?.name}</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you about this workbench.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={form.handleSubmit(onSubmitInquiry)} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <Input {...form.register("name")} />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input type="email" {...form.register("email")} />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea {...form.register("message")} />
            </div>

            <DialogFooter>
              <Button type="submit">Send Inquiry</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
