import React, { HTMLAttributes } from "react";
interface ILayout extends HTMLAttributes<HTMLDivElement> {}
function Layout({ children }: ILayout) {
	return <div>{children}</div>;
}

export default Layout;
