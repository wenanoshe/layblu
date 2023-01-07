import { SVGProps } from 'react'

const Checkbox = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' {...props}>
		<path d='m24 27.3-9.9 9.9q-.7.7-1.65.7t-1.65-.7q-.7-.7-.7-1.65t.7-1.65l9.9-9.9-9.9-9.9q-.7-.7-.7-1.65t.7-1.65q.7-.7 1.65-.7t1.65.7l9.9 9.9 9.9-9.9q.7-.7 1.65-.7t1.65.7q.7.7.7 1.65t-.7 1.65L27.3 24l9.9 9.9q.7.7.7 1.65t-.7 1.65q-.7.7-1.65.7t-1.65-.7Z' />
	</svg>
)
export default Checkbox