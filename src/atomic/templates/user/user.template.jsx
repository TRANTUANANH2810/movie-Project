import { Link } from "react-router-dom";
import { SelectTranslate } from "./components/translate/translate";

export function UserTemplate({ children }) {
	return (
		<>
			<header className="h-24 px-16 bg-black text-white sticky flex items-center justify-between">
				<div className="flex items-center gap-12">
					<Link to={"/"}>
						<img className="h-[3.2rem]" src="/logo.webp" alt="logo" />
					</Link>

					<nav className="flex gap-4">
						<Link to="/">Trang Chủ</Link>
						<Link to="/showing-movie">Phim Đang Chiếu</Link>
						<Link to="/coming-movie">Phim Chuẩn Bị Chiếu</Link>
					</nav>
				</div>
				<div>
					<SelectTranslate />
				</div>
			</header>
			{children}
		</>
	);
}
