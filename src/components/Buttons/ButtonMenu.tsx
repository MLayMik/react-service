import { Link } from "react-router-dom";

export default function ButtonMenu({children , changeButton, menu, section}:any) {
	return (
		<div>
			<Link to={`${section}`} onClick={() => changeButton(section)} className={menu === section? 'font-bold': undefined}>{children}</Link>
			{section === menu && <div className="h-0.5 bg-black mt-4"></div>}
		</div>
	)
}