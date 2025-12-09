import { bookContent } from "@/lib/book-content"
import { BookPage } from "@/components/book-page" 

export default function PrintBook() {
  return (
    // We use 'print:block' to ensure this shows up properly even if flex interferes
    <div className="w-full bg-white print:block">
      {bookContent.map((pageContent, index) => (
        // KEY FIX: Explicitly set 148mm x 210mm for each item in the list
        // This stops the pages from "drifting" or creating 25 blank pages.
        <div 
          key={index} 
          className="break-after-page relative mx-auto"
          style={{ width: '148mm', height: '210mm' }}
        >
          <BookPage content={pageContent} />
        </div>
      ))}
    </div>
  )
}