import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

export default defineConfig({
	integrations: [
		starlight({
			title: "The Cooper Wiki",
            pagination: false,
			// social: [{ icon: "github", label: "GitHub", href: "https://github.com/thecooperwiki/thecooperwiki.com" }],
			sidebar: [
				{
					label: "Academics",
                    items: [
                        { label: "Overview", slug: "academics" },
                        { label: "Curricula", 
                            items: [{ autogenerate: { directory: "academics/curricula" }}]},
                        { label: "Courses",
                            items: [{ autogenerate: { directory: "academics/curricula" }}]},
                        { label: "Professors",
                            items: [{ autogenerate: { directory: "academics/curricula" }}]},
                    ],
				},
			],
		}),
	],
});
