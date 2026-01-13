'use client'

import { ArrowUpDown } from 'lucide-react'

export type SortOption = 'default' | 'price-asc' | 'price-desc'

interface SortDropdownProps {
  value: SortOption
  onChange: (value: SortOption) => void
}

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="relative">
      <label htmlFor="sort" className="sr-only">
        Sort products
      </label>
      <div className="flex items-center gap-2">
        <ArrowUpDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        <select
          id="sort"
          value={value}
          onChange={(e) => onChange(e.target.value as SortOption)}
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent cursor-pointer"
        >
          <option value="default">Default Order</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  )
}
