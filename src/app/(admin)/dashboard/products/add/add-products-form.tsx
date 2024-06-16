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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Input } from '@/components/ui/input';
import OptionalText from '../../components/optional-text';
import FileUploadMain from '../../components/file-upload-main';
import usePost from '@/hooks/usePost';
import apiEndpoint from '@/services/apiEndpoint';
import { Loader2 } from 'lucide-react';
import TipTap from '@/components/ui/tip-tap';
import CategoryList from '../../components/category-list';

const formSchema = z.object({
  category: z.string({
    required_error: 'Please select an destination id to display.',
  }),
  name: z.string().min(2, {
    message: 'Destinations Name must be at least 2 characters.',
  }),

  description: z
    .string()
    .min(10, {
      message: 'Description must be at least 10 characters.',
    })
    .optional()
    .or(z.literal('')),

  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'slug is not valid',
  }),
  imageCover: z
    .array(z.any())
    .nonempty({ message: 'Images cover is required' }),
  images: z.array(z.any()).nonempty({ message: 'Images required' }),
});

export default function AddProductsForm() {
  const postMutation = usePost({
    apiEndpointUrl: apiEndpoint.PRODUCTS,
    queryKey: 'getAllProducts',
    routeUrl: false,
    successMessage: 'Product created successfully',
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      category: '',
      name: '',
      description: '',
      slug: '',
      imageCover: [],
      images: [],
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (typeof value === 'string' || value instanceof Blob) {
        formData.append(key, value);
      } else if (Array.isArray(value)) {
        if (
          value.every(item => item instanceof Blob || typeof item === 'string')
        ) {
          value.forEach(item => formData.append(key, item));
        } else {
          formData.append(key, JSON.stringify(value));
        }
      } else {
        formData.append(key, JSON.stringify(value));
      }
    });

    // for (const pair of formData.entries()) {
    //   console.log(pair[0], pair[1]);
    // }

    postMutation.mutate(formData);
    form.control._reset();
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a Product Category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <CategoryList notAvailableMessage="category" />
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="product name..." {...field} />
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
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <TipTap {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
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

          {/* file upload main */}
          <FileUploadMain
            form={form}
            fieldName="imageCover"
            uploadLabel="Add your cover image"
          />
          <FileUploadMain
            form={form}
            fieldName="images"
            uploadLabel="Add Images"
            multiple={true}
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
              'Add Products'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
