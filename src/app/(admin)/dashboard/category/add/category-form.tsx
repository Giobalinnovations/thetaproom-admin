'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import apiEndpoint from '@/services/apiEndpoint';
import { Loader2 } from 'lucide-react';
import usePost from '@/hooks/usePost';

const formSchema = z.object({
  name: z.string().min(1, {
    message: 'Category Name must be at least 1 characters.',
  }),
});

export default function CategoryForm() {
  const postMutation = usePost({
    apiEndpointUrl: apiEndpoint.CATEGORY,
    queryKey: 'getAllCategory',
    routeUrl: '/dashboard/category/add',
    successMessage: 'Category created successfully',
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const lowercaseValues = { ...values, name: values.name.toLowerCase() };
    postMutation.mutate(lowercaseValues);
    form.control._reset();
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="blogs category..."
                    {...field}
                    onChange={event =>
                      field.onChange(event.target.value.toLowerCase())
                    }
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {postMutation.isError ? (
            <div className="text-red-500">
              An error occurred:{' '}
              {postMutation?.error['response']?.data?.error ??
                'something goes wrong'}
            </div>
          ) : null}
          <Button
            type="submit"
            disabled={postMutation.isPending}
            className={`${postMutation.isPending ? 'opacity-50' : ''}`}
          >
            {' '}
            {postMutation.isPending ? (
              <>
                <Loader2 className="animate-spin" /> Loading
              </>
            ) : (
              'Create Category'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
