import { Props } from './types'

export const Chip = ({
	square = false,
	color = 'indigo-600',
	bgColor = 'indigo-50',
	text,
	fontWeight = 'font-bold',
	before,
	close,
	checked = false,
}: Props) => {
	const padding = `${before === undefined ? 'pl-2' : ''} pr-2`
	const design = square ? 'rounded' : 'rounded-full'
	const opacity = checked ? '' : 'opacity-80'

	return (
		<div
			className={`${design} ${padding} bg-${bgColor} ${fontWeight} ${opacity} inline-flex gap-1 capitalize cursor-pointer`}
		>
			{typeof before === 'string' ? (
				<span
					className={`${design} text-${bgColor} bg-${color} w-6 h-6 flex items-center justify-center min-w-min px-1`}
				>
					{before}
				</span>
			) : (
				before
			)}

			<span className={`text-${color}`}>{text}</span>

			{close !== undefined && (
				<button className={design} onClick={close}>
					<svg
						className={`fill-${bgColor} bg-${color} rounded-full p-0.5`}
						xmlns='http://www.w3.org/2000/svg'
						height='16'
						width='16'
						viewBox='0 0 48 48'
					>
						<path d='m24 27.3-9.9 9.9q-.7.7-1.65.7t-1.65-.7q-.7-.7-.7-1.65t.7-1.65l9.9-9.9-9.9-9.9q-.7-.7-.7-1.65t.7-1.65q.7-.7 1.65-.7t1.65.7l9.9 9.9 9.9-9.9q.7-.7 1.65-.7t1.65.7q.7.7.7 1.65t-.7 1.65L27.3 24l9.9 9.9q.7.7.7 1.65t-.7 1.65q-.7.7-1.65.7t-1.65-.7Z' />
					</svg>
				</button>
			)}
		</div>
	)
}
