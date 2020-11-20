import { HTMLAttributes } from "react";
import styled from "styled-components";
interface IWrapper extends HTMLAttributes<HTMLDivElement> {
	maxWidth?: string;
}
export const TextBlockDiv = styled.div`
	margin-bottom: 1em;
	${({ theme }) => theme.breakpoints.down("md")} {
		margin-bottom: 0.875em;
	}
	${({ theme }) => theme.breakpoints.down("sm")} {
		margin-bottom: 0.75em;
	}
`;

const Wrapper = styled.div<IWrapper>`
	max-width: ${({ maxWidth }) => maxWidth || "80%"};
	${({ theme }) => theme.breakpoints.down("md")} {
		max-width: 100%;
	}
`;

export default Wrapper;
