export default function ({ index, btnText, activeState, handleStatusChange }) {
    const color = activeState ? "btn-warning" : "btn-primary";

    return (
        <>
            <button
                onClick={() => handleStatusChange(index)}
                type="button"
                className={"btn m-3 " + color}
            >
                {btnText}
            </button>
        </>
    );
}
