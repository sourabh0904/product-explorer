export function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-800 animate-pulse"
        >
          {/* Image skeleton */}
          <div className="w-full aspect-square bg-gray-200 dark:bg-gray-800" />
          
          {/* Content skeleton */}
          <div className="p-4 space-y-3">
            {/* Category badge */}
            <div className="h-5 w-20 bg-gray-200 dark:bg-gray-800 rounded-full" />
            
            {/* Title */}
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full" />
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
            </div>
            
            {/* Rating */}
            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded" />
            
            {/* Price */}
            <div className="h-6 w-20 bg-gray-200 dark:bg-gray-800 rounded" />
          </div>
        </div>
      ))}
    </div>
  )
}
