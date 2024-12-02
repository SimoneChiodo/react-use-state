export default function ({ title, description }) {
    return (
        <div className="card-border text-start w-75 mt-3">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
}
