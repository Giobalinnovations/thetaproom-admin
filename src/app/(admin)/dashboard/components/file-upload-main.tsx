'use client';
import { z } from 'zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

import Dropzone from 'react-dropzone';
import { cn } from '@/lib/utils';
import { FormField } from '@/components/ui/form';
import { ArrowUp, Upload, X } from 'lucide-react';

export default function FileUploadMain({
  form,
  fieldName,
  uploadLabel,
  multiple = false,
}: {
  form: any;
  fieldName: string;
  uploadLabel?: string;
  multiple?: boolean;
}) {
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      name: fieldName,
      control: form.control,
    }
  );

  // console.log(form.formState.errors);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
        {fields.map((field: any, index) => (
          <div
            key={field.id}
            className="relative aspect-square  overflow-hidden"
          >
            <Image
              src={field.preview}
              alt={field.id}
              fill
              // fill
              onLoad={() => {
                URL.revokeObjectURL(field.preview);
              }}
              className="object-cover w-full h-full rounded-md"
            />
            <Button
              variant="destructive"
              size="icon"
              onClick={() => remove(index)}
              className="absolute top-0 right-0 m-2 rounded-full"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
      <div className="relative">
        <FormField
          control={form.control}
          name={fieldName}
          render={() => (
            <Dropzone
              accept={{
                'image/*': ['.jpg', '.jpeg', '.png'],
              }}
              onDropAccepted={acceptedFiles => {
                if (!multiple) {
                  if (fields.length > 0) {
                    remove(0);
                  }
                }
                acceptedFiles.map(acceptedFile => {
                  append(
                    Object.assign(acceptedFile, {
                      preview: URL.createObjectURL(acceptedFile),
                    })
                  );
                });
              }}
              multiple={multiple}
              maxSize={5000000}
              maxFiles={multiple ? undefined : 1}
            >
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps({
                    className: cn(
                      'p-3 mb-4 flex flex-col items-center justify-center w-full rounded-md cursor-pointer border border-[#e2e8f0] shadow-sm'
                    ),
                  })}
                >
                  <div className="flex items-center mt-2 mb-2 gap-x-3">
                    <label
                      htmlFor={fieldName}
                      className={`text-sm flex flex-col justify-center items-center text-[7E8DA0] cursor-pointer focus:outline-none focus:underline ${
                        form.formState.errors[fieldName] && 'text-red-500'
                      }`}
                      tabIndex={0}
                    >
                      <Upload />{' '}
                      <span className="text-center">
                        {uploadLabel ?? 'Add your Image'}
                      </span>
                      <input {...getInputProps()} />
                    </label>
                  </div>
                </div>
              )}
            </Dropzone>
          )}
        />
      </div>
    </>
  );
}
