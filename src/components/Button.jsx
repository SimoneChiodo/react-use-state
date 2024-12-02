export default function ({ index, btnText, activeState, handleStatusChange }) {
    function selectButtonColor() {
        switch (btnText.toLowerCase()) {
            case "html":
                return "btn-secondary";
            case "css":
                return "btn-success";
            case "javascript":
                return "btn-danger";
            case "node.js":
                return "btn-warning";
            case "express":
                return "btn-info";
            case "reactjs":
                return "btn-dark";

            default:
                return "btn-light";
        }
    }

    const color = activeState ? selectButtonColor() : "btn-primary";

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
