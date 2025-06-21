type SearchBarProps = {
    value: string;
    onChange: (v: string) => void;
    onSubmit?: () => void;
};

const SearchBar = ({ value, onChange, onSubmit }: SearchBarProps) => {
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                onSubmit?.();
            }}
            className="flex w-full max-w-xl gap-2"
            role="search"
        >
            <input
                type="search"
                placeholder="Qual pokémon você procura?"
                className="flex-1 border border-border rounded-lg px-4 py-2 text-lg focus:ring-primary outline-none transition-all"
                value={value}
                onChange={e => onChange(e.target.value)}
                autoFocus
            />
            <button type="submit" className="bg-background px-5 py-2 rounded-lg text-white hover:bg-primary/90 transition-colors font-semibold">
                Buscar
            </button>
        </form>
    );
};

export default SearchBar;