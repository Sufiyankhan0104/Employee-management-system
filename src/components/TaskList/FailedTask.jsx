import React from 'react'

const FailedTask = ({ data }) => {
  return (
    <div
      className="
        shrink-0
        w-full sm:w-[280px] md:w-[300px]
        bg-blue-400/90
        rounded-2xl
        p-4
        shadow-lg
        hover:shadow-2xl
        transition-all
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        <h1
          className="
            bg-gray-600
            text-white
            text-xs sm:text-sm
            py-1 px-3 sm:px-4
            rounded-full
            font-semibold
            truncate
          "
        >
          {data.category}
        </h1>

        <p className="text-xs sm:text-sm text-gray-800 whitespace-nowrap">
          {data.date}
        </p>
      </div>

      {/* Body */}
      <div className="mt-4 space-y-2">
        <h1 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
          {data.title}
        </h1>

        <p className="text-sm sm:text-base text-gray-800 line-clamp-3">
          {data.description}
        </p>
      </div>

      {/* Action */}
      <button
        className="
          cursor-pointer
          mt-4
          bg-blue-700
          hover:bg-blue-800
          text-white
          py-2
          px-4
          rounded-lg
          text-sm
          w-full
          transition
        "
      >
        Failed Task
      </button>
    </div>
  )
}

export default FailedTask
