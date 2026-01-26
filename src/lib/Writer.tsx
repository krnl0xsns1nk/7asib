"use client";
import React from "react";

interface WriterProp {
	text: string;
	time?: number;
}

const Writer: React.FC<WriterProp> = ({ text, time = 100 }) => {
	const [TEXT, setText] = React.useState<string>("");
	const [start, setStart] = React.useState<boolean>(false);
	const ref = React.useRef<HTMLSpanElement | null>(null);

	React.useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setStart(true);
				}
			},
			{ threshold: 0.5 }
		);

		if (ref.current) observer.observe(ref.current);

		return () => {
			if (ref.current) observer.unobserve(ref.current);
		};
	}, []);

	React.useEffect(() => {
		if (!start) return;
		let i: number = -1;
		// ok brothers, dont ask me why i write -1 💔
		const interval = setInterval(() => {
			i++;
			setText(prev => prev + text[i]);
			if (i + 1 >= text.length) clearInterval(interval);
		}, time);

		return () => clearInterval(interval);
	}, [start, text, time]);

	return <span ref={ref}>{TEXT}</span>;
};

export default Writer;
