export const Message = (props) => {
    return <div className={`h-1/2 w-full md:w-1/2 bg-content mt-12 flex center items-center justify-center rounded-lg shadow-lg flex-col ${props.styles}`}>
        {props.children}
    </div>
}