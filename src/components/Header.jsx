import { NavLink } from "react-router-dom";
import './Header.css'

const Header = ({ setSearch, setSort, sort }) => {
    return (
        <header>
            <div className="logo-container">
                <NavLink to="/">
                <img
                    className="logo"
                    alt="pokemon logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
                />
                </NavLink>
                <h1>Primera Generación</h1>
            </div>
            <div className="filter-container">
                <div className="input-container">
                    <input
                        name="búsqueda"
                        type="text"
                        placeholder="Buscar por nombre, número o tipo"
                        onChange={(e) =>
                            setSearch(e.target.value.toLowerCase())
                        }
                    ></input>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <label htmlFor="sort">Ordenar por:</label>
                <select
                    name="sort"
                    id="sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value="num-low-high">Número: Bajo - Alto</option>
                    <option value="num-high-low">Número: Alto - Bajo</option>
                    <option value="name-a-z">Nombre: A - Z</option>
                    <option value="name-z-a">Nombre: Z - A</option>
                </select>
            </div>
        </header>
    );
};

export default Header;