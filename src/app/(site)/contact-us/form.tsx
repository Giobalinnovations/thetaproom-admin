'use client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
// import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {};

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              {/* <Input placeholder="shadcn" {...field} /> */}
              Contact us
            </FormControl>
            <FormDescription>This is your public display name.</FormDescription>
            <FormMessage>
              {form.formState.errors.username && (
                <span>{form.formState.errors.username.message}</span>
              )}
            </FormMessage>
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}
