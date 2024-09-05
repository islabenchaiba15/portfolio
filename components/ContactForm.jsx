"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { sendEmail } from "@/lib/actions/portfolio.actions";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "./ui/toast";
import { Telegram } from "@mui/icons-material";
import ShinyButton from "./magicui/shiny-button";
import { ClientSideMotion2 } from "./clientSideMotion";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email("Invalid email address"),
  message: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const ContactForm = () => {
    const { toast } = useToast()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values) {
    
    const response = await sendEmail(values);

    if (response.success) {
      console.log("Email sent successfully", response.data);
      toast({
        description: "Your message has been sent successfully.",
      })
    } else {
      console.error("Failed to send email", response.error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }

    
  }

  return (
    <div id="contact" className="container mx-auto max-w-[650px]">
      <div className="flex justify-center my-4">
        <ShinyButton text="Contact" className=""/>
      </div>
      <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
      <ClientSideMotion2>
      <p className="text-center mb-12">
        Want to chat? Just shoot me a dm with a direct question on this form and
        I'll respond whenever I can. I will ignore all soliciting.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Email</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is the email you send by it .
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Message</FormLabel>
                <FormControl>
                  <Textarea className="min-h-[140px]"placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>Message contain details</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="flex gap-1 ">
            Submit
            <Telegram size={12} className="group-hover:translate-x-2 group-hover:-translate-y-2"/>
          </Button>
        </form>
      </Form>
      </ClientSideMotion2>

    </div>
  );
};
export default ContactForm;
