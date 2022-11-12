export const Title = (props) => {
    return <h1 className={`text-2xl text-center font-semibold m-7 ${props.className ? props.className : ''}`}>
        {props.children}
    </h1>
}