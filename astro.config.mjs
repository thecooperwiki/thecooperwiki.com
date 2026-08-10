import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"
import fs from "node:fs"

function getCourses(school, prefix) {
    let files = fs.readdirSync(`src/content/docs/academics/courses/${school}`)

    let regex = new RegExp(`${prefix}\\d\\d\\d`)
    
    return files.filter(file => regex.test(file)).map(file => `academics/courses/engineering/${file.split(".")[0]}`)
}

export default defineConfig({
    site: "https://thecooperwiki.com",
	integrations: [
		starlight({
			title: "The Cooper Wiki",
            pagination: false,
			social: [{ icon: "github", label: "GitHub", href: "https://github.com/thecooperwiki/thecooperwiki.com" }],
            editLink: { baseUrl: "https://github.com/thecooperwiki/thecooperwiki.com/tree/main" },
            lastUpdated: true,
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
                                { 
                                    label: "Engineering", collapsed: true, 
                                    items: [
                                        { label: "BIO", collapsed: true, items: getCourses("engineering", "bio") },
                                        { label: "CE", collapsed: true, items: getCourses("engineering", "ce") },
                                        { label: "CH", collapsed: true, items: getCourses("engineering", "ch") },
                                        { label: "CHE", collapsed: true, items: getCourses("engineering", "che") },
                                        { label: "CS", collapsed: true, items: getCourses("engineering", "cs") },
                                        { label: "ECE", collapsed: true, items: getCourses("engineering", "ece") },
                                        { label: "EID", collapsed: true, items: getCourses("engineering", "eid") },
                                        { label: "ESC", collapsed: true, items: getCourses("engineering", "esc") },
                                        { label: "MA", collapsed: true, items: getCourses("engineering", "ma") }, 
                                        { label: "ME", collapsed: true, items: getCourses("engineering", "me") },
                                        { label: "PH", collapsed: true, items: getCourses("engineering", "ph") },
                                    ]
                                },
                                { label: "Humanities", collapsed: true, 
                                    items: [{ autogenerate: { directory: "academics/courses/humanities" }}]},
                            ]
                        },
                        { 
                            label: "Professors",
                            items: [
                                { label: "Disclaimer", slug: "academics/professors/disclaimer" },
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
