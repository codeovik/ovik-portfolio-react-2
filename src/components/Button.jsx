// section navigate button like: #home, #plan, #contact
export function LinkButton({ href, children, primary = false }) {
  const backgroundClass = primary 
    ? 'bg-primary hover:bg-primary/80' 
    : 'bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20'

  return (
    <a 
      href={href} 
      className={`px-7 flex gap-1 cursor-pointer justify-center group md:w-max w-full py-3 ${backgroundClass} transition-all items-center rounded-full`}
    >
        <span>{children}</span>
        <span className="relative overflow-hidden">
            <svg className="h-5 dark:fill-white fill-black rotate-45 group-hover:transform group-hover:translate-x-7 ease-out transition-all group-hover:-translate-y-7 group-hover:opacity-0 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M342.6 81.4C330.1 68.9 309.8 68.9 297.3 81.4L137.3 241.4C124.8 253.9 124.8 274.2 137.3 286.7C149.8 299.2 170.1 299.2 182.6 286.7L288 181.3L288 552C288 569.7 302.3 584 320 584C337.7 584 352 569.7 352 552L352 181.3L457.4 286.7C469.9 299.2 490.2 299.2 502.7 286.7C515.2 274.2 515.2 253.9 502.7 241.4L342.7 81.4z"/></svg>
            <svg className="h-5 dark:fill-white fill-black rotate-45 group-hover:transform -translate-x-7 top-0 letf-0 absolute group-hover:translate-x-0 transition-all translate-y-7 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M342.6 81.4C330.1 68.9 309.8 68.9 297.3 81.4L137.3 241.4C124.8 253.9 124.8 274.2 137.3 286.7C149.8 299.2 170.1 299.2 182.6 286.7L288 181.3L288 552C288 569.7 302.3 584 320 584C337.7 584 352 569.7 352 552L352 181.3L457.4 286.7C469.9 299.2 490.2 299.2 502.7 286.7C515.2 274.2 515.2 253.9 502.7 241.4L342.7 81.4z"/></svg>
        </span>
    </a>
  )
}

// action button like: open video pop up
export function ActionButton({ onClick, children, primary = false }) {
  const backgroundClass = primary 
    ? 'bg-primary hover:bg-primary/80' 
    : 'bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20'

  return (
    <button 
      onClick={onClick}
      className={`px-7 flex cursor-pointer gap-1 justify-center group md:w-max w-full py-3 ${backgroundClass} transition-all items-center rounded-full`}
    >
        <span>{children}</span>
        <span className="relative overflow-hidden">
            <svg className="h-5 dark:fill-white fill-black rotate-45 group-hover:transform group-hover:translate-x-7 ease-out transition-all group-hover:-translate-y-7 group-hover:opacity-0 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M342.6 81.4C330.1 68.9 309.8 68.9 297.3 81.4L137.3 241.4C124.8 253.9 124.8 274.2 137.3 286.7C149.8 299.2 170.1 299.2 182.6 286.7L288 181.3L288 552C288 569.7 302.3 584 320 584C337.7 584 352 569.7 352 552L352 181.3L457.4 286.7C469.9 299.2 490.2 299.2 502.7 286.7C515.2 274.2 515.2 253.9 502.7 241.4L342.7 81.4z"/></svg>
            <svg className="h-5 dark:fill-white fill-black rotate-45 group-hover:transform -translate-x-7 top-0 letf-0 absolute group-hover:translate-x-0 transition-all translate-y-7 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M342.6 81.4C330.1 68.9 309.8 68.9 297.3 81.4L137.3 241.4C124.8 253.9 124.8 274.2 137.3 286.7C149.8 299.2 170.1 299.2 182.6 286.7L288 181.3L288 552C288 569.7 302.3 584 320 584C337.7 584 352 569.7 352 552L352 181.3L457.4 286.7C469.9 299.2 490.2 299.2 502.7 286.7C515.2 274.2 515.2 253.9 502.7 241.4L342.7 81.4z"/></svg>
        </span>
    </button>
  )
}

{/*
Usage Example:

1. import component

2. // For navigation
<LinkButton href="/path" primary={true/false}>Navigate</LinkButton>

2. // For actions/events
<ActionButton onClick={() => handleClick()} primary={true/false}>Click me</ActionButton>
*/}