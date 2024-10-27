import React from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Search } from 'lucide-react'

export default function FilmStockInput ({ label, placeholder, onChange, calledFunction }) {
	return (
		<div className="relative w-full max-w-sm">
			<div className="relative">
				<Input
					type="text"
					id="filmStockSearch"
					className="w-full bg-stone-200 border-stone-300 text-black-1000 placeholder-stone-500 focus:border-stone-500 focus:ring-amber-500"
					placeholder={placeholder}
					onChange={onChange}
					autoComplete="off"
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							calledFunction()
						}
					} }
				/>
				<Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500" />
			</div>
			<div className="absolute inset-0 bg-gradient-to-r from-stone-200/50 to-transparent pointer-events-none"></div>
		</div>
	)
}