'use client';

import { Row } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Eye, Loader2, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';

// import apiEndpoint from '@/services/apiEndpoint';
import { usePathname, useRouter } from 'next/navigation';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  href: string;
  eyeOpen: boolean;
}

// type VisaStatusType = 'under process' | 'verify' | 'visa sent';

// const visaStatusData: VisaStatusType[] = [
//   'under process',
//   'verify',
//   'visa sent',
// ];

export function DataTableRowActions<TData>({
  row,
  href,
  eyeOpen,
}: DataTableRowActionsProps<TData>) {
  const blogs: any = row.original;
  // const updateMutation = useUpdatePatchVisa({
  //   apiEndpointUrl: apiEndpoint.INDIAN_VISA,
  //   updateId: blogs._id,
  //   queryKey: 'indiaVisaApplication',
  //   successMessage: 'Visa status updated successfully',
  // });
  return (
    <div className="flex">
      {eyeOpen && (
        <Link href={`${href}/${blogs._id}/update`}>
          <Eye />
        </Link>
      )}
      {/* {!eyeOpen && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              disabled={!blogs.paid}
              variant="ghost"
              className="flex h-10 w-10 p-0 data-[state=open]:bg-muted"
            >
              <MoreHorizontal className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[160px]">
            {visaStatusData.map(visaStatus => (
              <DropdownMenuItem key={visaStatus}>
                <Button
                  size={'sm'}
                  className="py-1 px-3 w-full"
                  onClick={() => {
                    updateMutation.mutate(
                      { visaStatus: visaStatus },
                      {
                        onSuccess: () => {
                          location.reload();
                        },
                      }
                    );
                  }}
                >
                  {updateMutation.isPending ? (
                    <>
                      <Loader2 className="animate-spin w-4 h-4" /> Updating
                    </>
                  ) : (
                    visaStatus
                  )}
                </Button>
              </DropdownMenuItem>
            ))}

            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      )} */}
    </div>
  );
}
