import { BiLoaderAlt } from 'react-icons/bi'

export function Loading() {
  return (
    <div className="pt-44 border-blue-500 border-2 h-screen">
      <BiLoaderAlt className="animate-spin text-[2rem] w-full" />
    </div>
  )
}
