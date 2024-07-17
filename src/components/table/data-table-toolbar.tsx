'use client';

import { Table } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { lastExitStepUrls, priorities, statuses } from './data/data';
import { DataTableFacetedFilter } from './data-table-faceted-filter';
import { CrossIcon } from 'lucide-react';
import { DataTableViewOptions } from './data-table-view-options';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between overflow-auto">
      <div className="flex flex-1 items-center space-x-2 overflow-auto">
        <Input
          placeholder="search by title..."
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={event =>
            table.getColumn('title')?.setFilterValue(event.target.value)
          }
          className="h-8 max-w-[150px] lg:max-w-[250px]"
        />
        {table.getColumn('visaStatus') && (
          <DataTableFacetedFilter
            column={table.getColumn('visaStatus')}
            title="Visa Status"
            options={statuses}
          />
        )}

        {table.getColumn('lastExitStepUrl') && (
          <DataTableFacetedFilter
            column={table.getColumn('lastExitStepUrl')}
            title="lastExitStepUrl"
            options={lastExitStepUrls}
          />
        )}
        {isFiltered && (
          <Button
            variant="checkBtn"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <CrossIcon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
