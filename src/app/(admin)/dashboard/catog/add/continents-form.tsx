'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { object, z } from 'zod';
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
import { Textarea } from '@/components/ui/textarea';
import OptionalText from '../../components/optional-text';
import FileUploadMain from '../../components/file-upload-main';
import usePost from '@/hooks/usePost';
import apiEndpoint from '@/services/apiEndpoint';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Continents Name must be at least 2 characters.',
  }),
  summary: z
    .string()
    .min(6, {
      message: 'Summary Name must be at least 6 characters.',
    })
    .optional()
    .or(z.literal('')),
  description: z
    .string()
    .min(10, {
      message: 'Description must be at least 10 characters.',
    })
    .optional()
    .or(z.literal('')),
  longitude: z
    .string()
    .regex(/^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/, {
      message: 'Longitude must be a number between -180.000000 and 180.000000',
    })
    .optional()
    .or(z.literal('')),
  latitude: z
    .string()
    .regex(/^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/, {
      message: 'Latitude must be a number between -90.000000 and 90.000000',
    })
    .optional()
    .or(z.literal('')),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'slug is not valid',
  }),
  imageCover: z
    .array(z.any())
    .nonempty({ message: 'Images cover is required' }),
});

export default function ContinentsForm() {
  const postMutation = usePost({
    apiEndpointUrl: apiEndpoint.CREATE_CONTINENTS,
    queryKey: 'getAllContinents',
    routeUrl: '/dashboard/country/add',
    successMessage: 'Continent created successfully',
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      summary: '',
      description: '',
      longitude: '',
      latitude: '',
      slug: '',
      imageCover: [],
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value instanceof File) {
        formData.append(key, value);
      } else if (Array.isArray(value)) {
        if (value.every(item => item instanceof File)) {
          value.forEach(file => formData.append(key, file));
        } else {
          formData.append(key, JSON.stringify(value));
        }
      } else {
        formData.append(key, value);
      }
    });

    postMutation.mutate(formData);
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
                    placeholder="Africa, Asia, Europe, America, Australia..."
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="summary"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Summary
                  <OptionalText />
                </FormLabel>
                <FormControl>
                  <Input placeholder="summary..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Description
                  <OptionalText />
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="description..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="longitude"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Longitude <OptionalText />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="longitude..." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="latitude"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Latitude <OptionalText />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="latitude..." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug</FormLabel>
                <FormControl>
                  <Input placeholder="slug..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FileUploadMain
            form={form}
            fieldName="imageCover"
            uploadLabel="Add your cover image"
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
              'Add Continents'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
