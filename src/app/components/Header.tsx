'use client'

import { ShoppingCart } from 'lucide-react';
import { useIsMobile } from "../hooks/UseMobile";
import SearchBar from "@/app/components/SearchBar";
import {useState} from "react";

const Header = () => {
    const [search, setSearch] = useState("");
    const isMobile = useIsMobile();

    const handleSearch = () => {
        alert("Buscando por: " + search + "")
    };

    return (
        <header className="w-full py-4 px-8 flex items-center justify-between gap-8">
            <div className="flex items-center gap-2">
        <span className="text-2xl md:text-3xl font-bold tracking-tight text-primary text-nowrap">
          PokeCard Shop
        </span>
            </div>
            <SearchBar value={search} onChange={setSearch} onSubmit={handleSearch}/>
            <div>
                <button className="relative flex items-center gap-1 hover:bg-blue-100 px-4 py-2 rounded transition-all duration-300">
                    <ShoppingCart className="w-6 h-6" />
                    {isMobile ? null : <span className="font-medium">Cart</span>}
                </button>
            </div>
        </header>
    );
};

export default Header;