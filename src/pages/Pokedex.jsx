import "./Pokedex.css";
import "../App.css";
import { useState } from "react";
import ConnectApi from "../components/ConnectApi";
import Header from "../components/Header";
import Card from "../components/Card";
import Load from "../components/Load";

function Pokedex() {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("num-low-high");
    const data = ConnectApi();


    if (!data) return <Load />;

    const byNum = (info) =>
        info.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));

    const byName = (info) =>
        info.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0));

    sort === "num-low-high" && byNum(data);
    sort === "num-high-low" && byNum(data).reverse();
    sort === "name-a-z" && byName(data);
    sort === "name-z-a" && byName(data).reverse();

    const searcher = (data) => {
        return data.filter(
            (item) =>
                item.name.toLowerCase().includes(search) ||
                item.id.toString().includes(search) ||
                item.types[0].type.name.toLowerCase().includes(search) ||
                (item.types[1] &&
                    item.types[1].type.name.toLowerCase().includes(search))
        );
    };

    return (
        <div className="main-container">

            <Header setSearch={setSearch} sort={sort} setSort={setSort} />
            <div className="cards-container">
                <Card poke={searcher(data)}/>
            </div>
            
        </div>
    );
}

export default Pokedex;