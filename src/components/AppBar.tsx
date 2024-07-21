import { SearchBar } from "./SearchBar";

export const AppBar = () => {
    return <div className="flex justify-between items-center p-4">
        <div>
            YouTube Logo
        </div>
        <div>
            <SearchBar />
        </div>
        <div>
            Sign In
        </div>
    </div>;
};
