'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Badge } from '@/components/ui/badge';

import { statuses } from '@/components/table/data/data';
import { DataTableColumnHeader } from '@/components/table/data-table-column-header';
import { DataTableRowActions } from '@/components/table/data-table-row-actions';
import { BlogsType } from '@/lib/type';
import Image from 'next/image';

export const columns: ColumnDef<BlogsType>[] = [
  // {
  //   id: 'select',
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && 'indeterminate')
  //       }
  //       onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={value => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: 'imageCover',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Cover Image" />
    ),
    cell: ({ row }) => (
      <div className="w-[100px] line-clamp-3 text-wrap">
        <div className="relative overflow-hidden aspect-video">
          <Image
            src={row.getValue('imageCover')}
            alt={row.getValue('imageCoverAlt')}
            className="object-cover w-full h-full rounded-md"
            fill
          />
        </div>
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => (
      <div
        className="w-[250px] line-clamp-2 text-wrap capitalize"
        title={row.getValue('title')}
      >
        {row.getValue('title')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },

  // {
  //   accessorKey: 'visaStatus',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Visa Status" />
  //   ),
  //   cell: ({ row }) => (
  //     <div className="w-[160px] text-wrap">{row.getValue('visaStatus')}</div>
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },

  // test
  // {
  //   accessorKey: 'title',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Title" />
  //   ),
  //   cell: ({ row }) => {
  //     const label = labels.find(label => label.value === row.original.label);
  //     console.log(label);
  //     return (
  //       <div className="flex space-x-2">
  //         {label && <Badge variant="outline">{label.label}</Badge>}
  //         <span className="max-w-[500px] truncate font-medium">
  //           {row.getValue('title')}
  //         </span>
  //       </div>
  //     );
  //   },
  // },
  // {
  //   accessorKey: 'visaStatus',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Visa Status" />
  //   ),
  //   cell: ({ row }) => {
  //     const status = statuses.find(
  //       status => status.value === row.getValue('visaStatus')
  //     );

  //     if (!status) {
  //       return null;
  //     }

  //     {
  //     }
  //     return (
  //       <div className="flex w-[200px] items-center ">
  //         {status.value === 'incomplete' && (
  //           <Badge
  //             variant="incomplete"
  //             className="capitalize cursor-pointer text-wrap "
  //             title="form not completed"
  //           >
  //             {status.value}
  //           </Badge>
  //         )}
  //         {status.value === 'pending payment' && (
  //           <Badge
  //             variant="pendingPayment"
  //             className="capitalize cursor-pointer text-wrap"
  //             title="Payment not completed"
  //           >
  //             {status.value}
  //           </Badge>
  //         )}
  //         {status.value === 'pending' && (
  //           <Badge
  //             variant="pending"
  //             className="capitalize cursor-pointer text-wrap"
  //             title="Payment Completed"
  //           >
  //             {status.value}
  //           </Badge>
  //         )}
  //         {status.value === 'visa sent' && (
  //           <Badge
  //             variant="visaSent"
  //             className="capitalize cursor-pointer text-wrap"
  //             title="Visa Sent Successfully"
  //           >
  //             {status.value}
  //           </Badge>
  //         )}
  //         {status.value === 'under process' && (
  //           <Badge
  //             variant="underProcess"
  //             className="capitalize cursor-pointer text-wrap"
  //             title="Visa is under process"
  //           >
  //             {status.value}
  //           </Badge>
  //         )}
  //         {status.value === 'verify' && (
  //           <Badge
  //             variant="verify"
  //             className="capitalize cursor-pointer text-wrap"
  //             title="Visa is verify"
  //           >
  //             {status.value}
  //           </Badge>
  //         )}

  //         <DataTableRowActions
  //           row={row}
  //           href="/dashboard/india"
  //           eyeOpen={false}
  //         />
  //       </div>
  //     );
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id));
  //   },
  // },
  {
    id: 'actions',
    cell: ({ row }) => (
      <DataTableRowActions row={row} href="/dashboard/blogs" eyeOpen={true} />
    ),
  },
];
