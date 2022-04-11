export default function Education(props) {
    return (
        <div>
            <h1 className="text-lg font-semibold">
                {props.program}
            </h1>
            <h2 className="font-light text-sm text-zinc-400">
                {props.date}
            </h2>
            <p className="text-zinc-600">
                {props.description}
            </p>
            <p className="mt-2 text-sm text-zinc-500">
                {props.awards}
            </p>
        </div>
    );
}