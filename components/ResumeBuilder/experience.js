export default function Experience(props) {
    return (
        <div>
            <h1 className="text-lg font-semibold">
                {props.position}
            </h1>
            <h2 className="font-light text-sm text-zinc-400">
                {props.date}
            </h2>
            <p className="text-zinc-600">
                {props.description}
            </p>
        </div>
    );
}