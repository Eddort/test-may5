import React from "react";
import theme from "theme";
import { Theme, Link, Text, Em, Button, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.QuarklycommunityKitMenu />
		<Section padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Us
			</Text>
			<Components.Textss />
			<Components.Textss />
			<Components.Textss />
			<Components.Textss />
			<Text as="p" font="--lead" margin="20px 0 0 0">
				Hi! I'm a paragraph. Click here to add yo22211ur own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site{" "}
				<Em>
					visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company
				</Em>
				{" "}and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0">
				Hi! I'm a paragraph. Click here to add yo22211ur own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site{" "}
				<Em
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company
				</Em>
				{" "}and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
			<Components.Test />
			<Button font="--lead" margin="20px">
				Button
			</Button>
		</Section>
		<Components.QuarklycommunityKitBeforeAfterImage activationType="onMove" />
		<Components.QuarklycommunityKitBeforeAfterImage activationType="onMove" />
		<Components.QuarklycommunityKitBeforeAfterImage activationType="onMove" />
		<Components.QuarklycommunityKitBeforeAfterImage activationType="onMove" />
		<Components.QuarklycommunityKitLoopText />
		<Components.QuarklycommunityKitCarousel />
		<Box display="flex" justify-content="center">
			<Button>
				Button
			</Button>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});