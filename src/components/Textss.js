import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Em } from "@quarkly/widgets";
const defaultProps = {
	"as": "p",
	"font": "--lead",
	"margin": "20px 0 0 0",
	"children": <>
		Hi! I'm a paragraph. Click here to add yo22211ur own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site{" "}
		<Em>
			visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company
		</Em>
		{" "}and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
	</>,
	"text-decoration-line": "underline",
	"color": "#b51c1c"
};
const overrides = {};

const Textss = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Text {...rest}>
		{children}
	</Text>;
};

Object.assign(Textss, { ...Text,
	defaultProps,
	overrides
});
export default Textss;