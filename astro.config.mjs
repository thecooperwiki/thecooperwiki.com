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
                            collapsed: true,
                            items: [
                                { label: "Architecture", slug: "academics/curricula/architecture" },
                                { label: "Art", slug: "academics/curricula/art" },
                                { label: "Engineering", items: 
                                    [{ autogenerate: { directory: "academics/curricula/engineering" }}]},
                            ]
                        },
                        { 
                            label: "Courses",
                            items: [
                                { label: "Architecture", items: 
                                    [{ autogenerate: { directory: "academics/courses/architecture", collapsed: true }}]},
                                { label: "Art", items: 
                                    [{ autogenerate: { directory: "academics/courses/art", collapsed: true }}]},
                                { label: "Engineering", items: 
                                    [{ autogenerate: { directory: "academics/courses/engineering", collapsed: true }}]},
                                { label: "Humanities", items: 
                                    [{ autogenerate: { directory: "academics/courses/humanities", collapsed: true }}]},
                            ]
                        },
                        { 
                            label: "Professors",
                            items: [
                                { label: "Architecture", items: 
                                    [{ autogenerate: { directory: "academics/professors/architecture", collapsed: true }}]},
                                { label: "Art", items: 
                                    [{ autogenerate: { directory: "academics/professors/art", collapsed: true }}]},
                                { label: "Engineering", items: 
                                    [{ autogenerate: { directory: "academics/professors/engineering", collapsed: true }}]},
                                { label: "Humanities", items: 
                                    [{ autogenerate: { directory: "academics/professors/humanities", collapsed: true }}]},
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
