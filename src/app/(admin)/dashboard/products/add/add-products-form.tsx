'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
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

const formSchema = z.object({
  destination: z.string({
    required_error: 'Please select an destination id to display.',
  }),
  name: z.string().min(2, {
    message: 'Destinations Name must be at least 2 characters.',
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

  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'slug is not valid',
  }),
  imageCover: z
    .array(z.any())
    .nonempty({ message: 'Images cover is required' }),
  images: z.array(z.any()).nonempty({ message: 'Images required' }),
  duration: z
    .string()
    .min(1, {
      message: 'duration required',
    })
    .optional()
    .or(z.literal('')),
  highlights: z.string().min(6, {
    message: 'Highlights must be at least 6 characters.',
  }),
  included: z.string().min(6, {
    message: 'included must be at least 6 characters.',
  }),
  itinerary: z.object({
    description: z.string().min(6, {
      message: 'included must be at least 6 characters.',
    }),
    days: z
      .array(
        z.object({
          location: z.string().min(1, { message: 'Location Name is required' }),
          description: z.string().min(1, {
            message: 'description is required',
          }),
          latitude: z
            .string()
            .min(1, { message: 'Latitude is required' })
            .optional()
            .or(z.literal('')),
          longitude: z
            .string()
            .min(1, { message: 'Longitude is required' })
            .optional()
            .or(z.literal('')),
          stayAt: z
            .string()
            .min(1, { message: 'Stay is required' })
            .optional()
            .or(z.literal('')),
        })
      )
      .nonempty({ message: 'Useful information is required' }),
  }),

  accommodation: z.string().min(6, {
    message: 'accommodation must be at least 6 characters.',
  }),
});

export default function AddProductsForm() {
  const postMutation = usePost({
    apiEndpointUrl: apiEndpoint.TOURS,
    queryKey: 'getAllDestinations',
    routeUrl: false,
    successMessage: 'Tours created successfully',
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      summary: '',
      description: '',
      slug: '',
      imageCover: [],
      images: [],
      duration: '',
      highlights: '',
      included: '',
      itinerary: {
        description: '',
        days: [
          {
            location: '',
            description: '',
            latitude: '',
            longitude: '',
            stayAt: '',
          },
        ],
      },
      accommodation: '',
    },
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      name: 'itinerary.days',
      control: form.control,
    }
  );

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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="South Africa, Italy, Australia..."
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
                <FormLabel>Summary</FormLabel>
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

          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Duration <OptionalText />
                </FormLabel>
                <FormControl>
                  <Input placeholder="duration..." {...field} />
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

          <FormField
            control={form.control}
            name="highlights"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  highlights <OptionalText />
                </FormLabel>
                <FormControl>
                  <TipTap {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="included"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  included <OptionalText />
                </FormLabel>
                <FormControl>
                  <TipTap {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* itinerary information */}
          <FormField
            control={form.control}
            name="itinerary.description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Itinerary Description <OptionalText />
                </FormLabel>
                <FormControl>
                  <TipTap {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="relative">
            {fields.map((_, index) => {
              return (
                <div key={index}>
                  <div className="flex gap-3">
                    <div className="w-full">
                      {' '}
                      <FormField
                        control={form.control}
                        key={index}
                        name={`itinerary.days.${index}.location`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>location</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage className="text-red-500 capitalize" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        key={index + 1}
                        name={`itinerary.days.${index}.description`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel> Description</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage className="text-red-500 capitalize" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        key={index + 1}
                        name={`itinerary.days.${index}.latitude`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel> Latitude</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage className="text-red-500 capitalize" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        key={index + 1}
                        name={`itinerary.days.${index}.longitude`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel> Longitude</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage className="text-red-500 capitalize" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        key={index + 1}
                        name={`itinerary.days.${index}.stayAt`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel> StayAt</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage className="text-red-500 capitalize" />
                          </FormItem>
                        )}
                      />
                    </div>
                    {fields.length > 1 && (
                      <Button type="button" onClick={() => remove(index)}>
                        Delete
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
            <div className="flex justify-center items-center mt-5">
              {' '}
              <Button
                type="button"
                onClick={() =>
                  append({
                    location: '',
                    description: '',
                    latitude: '',
                    longitude: '',
                    stayAt: '',
                  })
                }
              >
                Add itinerary Days
              </Button>
            </div>
          </div>
          <FormField
            control={form.control}
            name="accommodation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  accommodation <OptionalText />
                </FormLabel>
                <FormControl>
                  <TipTap {...field} />
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
              'Add Tours'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
