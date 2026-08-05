import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

export default defineConfig({
	integrations: [
		starlight({
			title: "The Cooper Wiki",
            pagination: false,
			social: [{ icon: "github", label: "GitHub", href: "https://github.com/thecooperwiki/thecooperwiki.com" }],
			sidebar: [
				{
					label: "Academics",
                    items: [
                        { 
                            label: "Curricula", 
                            items: [
                                { label: "Architecture", slug: "academics/curricula/architecture" },
                                { label: "Art", slug: "academics/curricula/art" },
                                { label: "Engineering", collapsed: true, 
                                    items: [{ autogenerate: { directory: "academics/curricula/engineering" }}]},
                            ]
                        },
                        { 
                            label: "Courses",
                            items: [
                                { label: "Architecture", collapsed: true,
                                    items: [{ autogenerate: { directory: "academics/courses/architecture" }}]},
                                { label: "Art", collapsed: true, 
                                    items: [{ autogenerate: { directory: "academics/courses/art" }}]},
                                { label: "Engineering", collapsed: true, 
                                    items: [{ autogenerate: { directory: "academics/courses/engineering" }}]},
                                { label: "Humanities", collapsed: true, 
                                    items: [{ autogenerate: { directory: "academics/courses/humanities" }}]},
                            ]
                        },
                        { 
                            label: "Professors",
                            items: [
                                { label: "Architecture", collapsed: true,
                                    items: [{ autogenerate: { directory: "academics/professors/architecture" }}]},
                                { label: "Art", collapsed: true, 
                                    items: [{ autogenerate: { directory: "academics/professors/art" }}]},
                                { label: "Engineering", collapsed: true, 
                                    items: [{ autogenerate: { directory: "academics/professors/engineering" }}]},
                                { label: "Humanities", collapsed: true, 
                                    items: [{ autogenerate: { directory: "academics/professors/humanities" }}]},
                            ]
                        },
                    ],
				},
                {
                    label: "For Incoming Freshmen",
                    items: [{ autogenerate: { directory: "incoming" }}],
                },
                {
                    label: "Campus Life",
                    items: [{ autogenerate: { directory: "campus-life" }}],
                },
                {
                    label: "Contributing",
                    items: [{ autogenerate: { directory: "contributing" }}],
                },
			],
            customCss: [
                "@fontsource-variable/inter",
                "./src/custom.css",
            ],
		}),
	],
});
