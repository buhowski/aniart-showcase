// Reusable HTML tags
export const ScrolledLink = ({ href, className, text }) => {
	return (
		<a href={href} className={`main-btn ${className}`}>
			{text}
		</a>
	);
};
