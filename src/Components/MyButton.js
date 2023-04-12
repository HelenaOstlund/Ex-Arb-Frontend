const MyButton = (props) => {
    return (
        <button
            onClick={props.onClick}
            style={{
                backgroundColor: "red",
                color: "purple",
                borderRadius: "10px"
            }}
        >
            {props.children}
        </button>
    )

}
export default MyButton;