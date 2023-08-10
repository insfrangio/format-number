import { SVGProps } from 'react'
export const Check = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={12}
    fill='none'
  >
    <path
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.4}
      d='M14 1 4.9 11 1 6.714'
    />
  </svg>
)
