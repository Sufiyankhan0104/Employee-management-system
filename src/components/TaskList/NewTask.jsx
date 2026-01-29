import React from 'react'

const NewTast = ({ data }) => {
  return (
    <div
      className="
        shrink-0
        w-full sm:w-[280px] md:w-[300px]
        bg-green-400/90
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
            bg-yellow-600
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

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-2 mt-4">
        <button
          className="
            bg-green-500
            hover:bg-green-600
            text-white
            py-2
            text-sm
            rounded-lg
            w-full
            transition
          "
        >
          Mark as completed
        </button>

        <button
          className="
            cursor-pointer
            bg-red-800
            hover:bg-red-900
            text-white
            py-2
            text-sm
            rounded-lg
            w-full
            transition
          "
        >
          Mark as failed
        </button>
      </div>
    </div>
  )
}

export default NewTast
