import {
	mobileNavOpened,
	selectMobileNavIsOpen,
} from "@features/layout/layoutSlice";
import { useDispatch, useSelector } from "react-redux";
import Hamburger from "@components/Hamburger";
function MobileMenuButton() {
	const dispatch = useDispatch();
	const handleOpenMenu = () => dispatch(mobileNavOpened());
	return <Hamburger onClick={handleOpenMenu} />;
}

export default MobileMenuButton;
