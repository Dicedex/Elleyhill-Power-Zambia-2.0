import type { SVGProps } from "react";

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2L12 8" />
      <path d="M12 16L12 22" />
      <path d="M17 7L19.5 9" />
      <path d="M4.5 9L7 7" />
      <path d="M17 17L19.5 15" />
      <path d="M4.5 15L7 17" />
      <path d="M9 2L15 2" />
      <path d="M9 22L15 22" />
      <path d="M2 15L2 9" />
      <path d="M22 15L22 9" />
      <path d="M8 12.5C8 11.12 8.9 10 10 10H14C15.1 10 16 11.12 16 12.5C16 13.88 15.1 15 14 15H10C8.9 15 8 13.88 8 12.5Z" fill="currentColor"/>
    </svg>
  ),
  spinner: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};
