import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Layout from "../Layout/layout";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
const formSchema = z.object({
  date: z.string().min(1, "Date is required"),
  title: z.string().min(1, "Title is required"),
  details: z.string().min(1, "Details are required"),
  isPrivate: z.boolean().optional(),
  tag: z.string().optional(),
});

export type FormSchema = z.infer<typeof formSchema>;

export const Journal = () => {

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  return (
    <Layout props={{ title: "Journals" }}>
      <div className="flex flex-1 overflow-auto rounded-md border ml-2 mr-2 mt-3">
        <div className="w-2/3 p-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center w-full gap-2 border-b pb-2">
              <h2 className="font-semibold text-primary">Create Journal</h2>
              <span><i className='bx bx-book-bookmark '></i></span>
            </div>
            <div className="flex items-center gap-2">
              <Form {...form}>
                <form onSubmit={form.handleSubmit((data) => console.log(data))} className="w-full">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter title" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div>
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                  </div>
                  <div>
                      <FormField
                        control={form.control}
                        name="details"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="mt-4">Details</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Enter details here" {...field} rows={8}/>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                  </div>
                  <div className="grid grid-cols-2 mt-4">
                      <div>
                        <FormField
                          control={form.control}
                          name="isPrivate"
                          render={({ field }) => (
                            <FormItem className="flex items-center gap-2">
                              <FormControl>
                                <Checkbox checked={field.value} onChange={field.onChange} />
                              </FormControl>
                              <FormLabel>Is Private</FormLabel>
                              <Tooltip>
                                <TooltipTrigger className="cursor-pointer mt-1"><i className="bx bx-info-circle"></i></TooltipTrigger>
                                <TooltipContent>
                                  <p className="text-sm">Only you can see this journal entry</p>
                                </TooltipContent>
                              </Tooltip>
                            </FormItem>
                          )}
                        />
                      </div>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <Button className="w-1/2">Save</Button>
                  </div>

                </form>
              </Form>
            </div>

          </div>
        </div>

        <div className="w-px bg-gray-300"></div>
        <div className="w-1/3 p-4">
          <h1 className="text-2xl font-bold">Journal Entries</h1>
          <p className="mt-2 text-gray-600">Here you can view and manage your journal entries.</p>
          {/* Add your journal entries list or form here */}
        </div>
      </div>
    </Layout>
  );
}

