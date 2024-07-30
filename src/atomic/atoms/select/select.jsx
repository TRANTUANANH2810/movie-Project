import { TranslateIcon } from "../../../common/icons/translate";
import srcTranslate from "../../../common/icons/translate.svg";

export function Select() {
	return (
		<>
			<button className="bg-white text-black">
				<TranslateIcon />
				English
			</button>

			{/* <img src="/src/common/icons/translate.svg" /> */}
			<img src={srcTranslate} />
		</>
	);
}
