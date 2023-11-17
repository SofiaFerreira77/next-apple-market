export default function Field({ label, children }) {
    return (
        <label className="flex flex-col gap">
            <span>{label}</span>
            {children}
        </label>
    )
}