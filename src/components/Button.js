export const Button = (props) => {
  return (
    <button
      className={`disabled:bg-indigo-300 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none rounded-lg bg-indigo-600 text-white px-4 py-1 font-semibold text-base leading-tight shadow-md hover:bg-indigo-700 m-1 duration-200 ${props.className}`}
      type={props.type || 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}