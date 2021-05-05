import React from 'react';
import atomize from "@quarkly/atomize";

const Test = props => <div {...props}>
	Say hello Tes2222t
</div>;

export default atomize(Test)({
	name: "Test",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "Test — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});