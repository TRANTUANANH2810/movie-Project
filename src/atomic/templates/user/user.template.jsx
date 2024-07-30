import { Link } from "react-router-dom";
import { Select } from "../../atoms/select";
export function UserTemplate({ children }) {
	return (
		<>
			<header className="h-24 px-16 bg-black text-white sticky">
				<Link to={"/"}>
					<img className="h-[3.2rem]" src="/logo.webp" alt="logo" />
				</Link>

				<nav>
					<Link to={"/"}>Home</Link>
					<Link to="/">Phim Đang Chiếu</Link>
					<Link>Phim Chuẩn Bị Chiếu</Link>
				</nav>
				<Select />
			</header>
			{children}
		</>
	);
}
