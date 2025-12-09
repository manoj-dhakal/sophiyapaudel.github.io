"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookPage } from "@/components/book-page"
import { bookContent } from "@/lib/book-content"

export function ArtistBook() {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = bookContent.length

  const goToNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const goToPrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Book Viewer */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-4xl aspect-[3/4] bg-white shadow-2xl border border-neutral-100 relative overflow-hidden">
          <BookPage content={bookContent[currentPage]} />
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-neutral-100 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={goToPrev}
            disabled={currentPage === 0}
            className="text-neutral-500 hover:text-neutral-900"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>

          <div className="flex items-center gap-4">
            <span className="text-xs text-neutral-400 font-mono tracking-wider">
              {currentPage + 1} / {totalPages}
            </span>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={goToNext}
            disabled={currentPage === totalPages - 1}
            className="text-neutral-500 hover:text-neutral-900"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}
