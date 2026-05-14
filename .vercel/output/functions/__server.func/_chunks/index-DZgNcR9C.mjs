import { i as __toESM } from "../_runtime.mjs";
import { f as require_jsx_runtime, p as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_lucide_react } from "../_libs/lucide-react.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region dist/server/assets/index-DZgNcR9C.js
var import_jsx_runtime = require_jsx_runtime();
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_lucide_react = require_lucide_react();
const links = [
	{
		label: "Beranda",
		href: "#beranda",
		icon: import_lucide_react.Home
	},
	{
		label: "Tentang",
		href: "#tentang",
		icon: import_lucide_react.User
	},
	{
		label: "Tugas AI",
		href: "#tugas-ai",
		icon: import_lucide_react.Sparkles
	},
	{
		label: "Portofolio",
		href: "#portofolio",
		icon: import_lucide_react.Briefcase
	},
	{
		label: "Kontak",
		href: "#kontak",
		icon: import_lucide_react.Mail
	}
];
const socials = [
	{
		Icon: import_lucide_react.Instagram,
		label: "Instagram"
	},
	{
		Icon: import_lucide_react.Github,
		label: "GitHub"
	},
	{
		Icon: import_lucide_react.Linkedin,
		label: "LinkedIn"
	}
];
function Sidebar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [collapsed, setCollapsed] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("#beranda");
	(0, import_react.useEffect)(() => {
		const ids = links.map((l) => l.href.slice(1));
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) setActive("#" + e.target.id);
			});
		}, {
			rootMargin: "-40% 0px -55% 0px",
			threshold: 0
		});
		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:hidden fixed top-0 inset-x-0 z-40 flex items-center justify-between px-4 py-3 bg-background/70 backdrop-blur-xl border-b border-border/60",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#beranda",
				className: "flex items-center gap-2 font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid place-items-center h-8 w-8 rounded-full bg-gradient-primary text-primary-foreground shadow-glow shrink-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Heart, {
						className: "h-4 w-4",
						fill: "currentColor"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gradient-primary",
					children: "Portofolio"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": "Menu",
				onClick: () => setOpen(true),
				className: "h-10 w-10 grid place-items-center rounded-full hover:bg-primary-soft",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Menu, { className: "h-5 w-5" })
			})]
		}),
		open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			onClick: () => setOpen(false),
			className: "md:hidden fixed inset-0 z-40 bg-foreground/40 backdrop-blur-sm animate-fade-in-up"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: `fixed top-0 left-0 z-50 h-screen flex flex-col
          bg-card/80 backdrop-blur-2xl border-r border-border/60
          transition-all duration-500 ease-out
          ${collapsed ? "md:w-20" : "md:w-64"}
          ${open ? "w-72 translate-x-0" : "-translate-x-full md:translate-x-0"}
        `,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-10 -left-10 h-48 w-48 rounded-full bg-primary-glow/40 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute bottom-0 -right-10 h-48 w-48 rounded-full bg-accent/60 blur-3xl" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-center justify-between px-5 pt-6 pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#beranda",
						onClick: () => setOpen(false),
						className: "flex items-center gap-3 font-semibold group focus:outline-none p-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 grid place-items-center h-10 w-10 rounded-full bg-gradient-primary text-primary-foreground shadow-glow transition-transform group-hover:scale-105",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Heart, {
								className: "h-5 w-5",
								fill: "currentColor"
							})
						}), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-base leading-tight text-gradient-primary",
								children: "Portofolio"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-bold tracking-widest text-muted-foreground uppercase leading-none mt-0.5",
								children: "Creative · AI"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Tutup",
						onClick: () => setOpen(false),
						className: "md:hidden h-9 w-9 grid place-items-center rounded-full hover:bg-primary-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "h-5 w-5" })
					})]
				}),
				!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-5 mb-4 rounded-2xl border border-border/60 bg-background/50 p-3 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative flex h-2.5 w-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-primary animate-ping opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-medium",
						children: "Open to Collaborate"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "relative flex-1 px-3 overflow-y-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1",
						children: links.map((l) => {
							const isActive = active === l.href;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: l.href,
								onClick: () => setOpen(false),
								className: `group relative flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition-all
                      ${isActive ? "bg-gradient-primary text-primary-foreground shadow-glow" : "text-foreground/70 hover:text-primary hover:bg-primary-soft"}
                      ${collapsed ? "md:justify-center md:px-0" : ""}
                    `,
								title: collapsed ? l.label : void 0,
								children: [
									isActive && !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r-full bg-primary-foreground/70" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(l.icon, { className: `h-[18px] w-[18px] shrink-0 transition-transform group-hover:scale-110 ${isActive ? "" : "text-primary"}` }),
									!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.label })
								]
							}) }, l.href);
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative px-5 py-4 border-t border-border/60 space-y-3",
					children: [!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2",
						children: socials.map(({ Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							"aria-label": label,
							className: "grid place-items-center h-9 w-9 rounded-xl bg-primary-soft text-primary hover:bg-gradient-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}, label))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setCollapsed((v) => !v),
						className: "hidden md:flex w-full items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-muted-foreground hover:text-primary hover:bg-primary-soft transition-colors",
						children: collapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronRight, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronLeft, { className: "h-4 w-4" }), " Ciutkan"] })
					})]
				})
			]
		})
	] });
}
const profile = "/assets/profile-CZRNTh6P.jpg";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "beranda",
		className: "relative min-h-screen flex items-center pt-24 pb-24 md:pt-32 md:pb-32 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-mesh opacity-70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary-glow/40 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-40 -right-20 h-80 w-80 rounded-full bg-accent/60 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-fade-in-up",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-medium mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Sparkles, { className: "h-3.5 w-3.5" }), "Halo, selamat datang!"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-4xl md:text-6xl font-bold leading-tight tracking-tight",
							children: [
								"Saya",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-primary",
									children: "Mutia Firda Damayanti"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed",
							children: [
								"Mahasiswa Teknik Informatika yang memadukan logika pemrograman dengan kreativitas visual. Saya sangat menikmati proses merancang",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-medium",
									children: "UI/UX"
								}),
								" yang intuitif, menciptakan karya lewat",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-medium",
									children: "Desain Grafis"
								}),
								", serta menghidupkan cerita melalui",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-medium",
									children: "Video Editing"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#portofolio",
								className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5",
								children: ["Lihat Karya", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#kontak",
								className: "inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card font-medium hover:bg-primary-soft hover:border-primary/40 transition-all",
								children: "Hubungi Saya"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex justify-center md:justify-end animate-fade-in-up",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-primary rounded-[2.5rem] rotate-6 scale-95 blur-sm opacity-70" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 bg-primary-soft rounded-[3rem] -rotate-3" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative h-72 w-72 md:h-96 md:w-96 rounded-[2.5rem] overflow-hidden shadow-soft border-4 border-background animate-float",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: profile,
									alt: "Foto profil",
									width: 768,
									height: 768,
									className: "h-full w-full object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-soft flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium",
									children: "Open to Collaborate"
								})]
							})
						]
					})
				})]
			})
		]
	});
}
const skills = [
	{
		name: "Design Graphic",
		value: 90,
		icon: import_lucide_react.Brush
	},
	{
		name: "UI/UX Design",
		value: 85,
		icon: import_lucide_react.Layout
	},
	{
		name: "Video Editing",
		value: 80,
		icon: import_lucide_react.Video
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "tentang",
		className: "py-20 md:py-28 relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary text-sm font-semibold tracking-widest uppercase block mb-2",
						children: "Tentang Saya"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-2 text-3xl md:text-4xl font-bold leading-tight",
						children: [
							"Menciptakan ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-primary",
								children: "kesan"
							}),
							" di setiap piksel dan logika."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-muted-foreground leading-relaxed",
						children: [
							"Sebagai mahasiswa Teknik Informatika, saya memadukan pemikiran logis dengan passion mendalam di dunia kreatif. Saya sangat menikmati proses merancang ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground font-medium",
								children: "UI/UX"
							}),
							" yang intuitif, menciptakan eksplorasi visual melalui ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground font-medium",
								children: "Desain Grafis"
							}),
							", serta menghidupkan cerita lewat ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground font-medium",
								children: "Video Editing"
							}),
							". Bagi saya, teknologi terbaik adalah yang tidak hanya bekerja dengan baik, tetapi juga indah dan berkesan secara visual."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-3 gap-4",
						children: [
							{
								label: "Proyek",
								value: "12+"
							},
							{
								label: "Klien",
								value: "5+"
							},
							{
								label: "Sertifikat",
								value: "5"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-card border border-border p-4 text-center shadow-soft hover:border-primary/40 transition-all hover:-translate-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-2xl md:text-3xl font-bold text-gradient-primary",
								children: s.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground mt-1 font-medium",
								children: s.label
							})]
						}, s.label))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full space-y-6",
				children: skills.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card border border-border rounded-2xl p-5 shadow-soft hover:-translate-y-1 transition-all duration-300 w-full",
					style: { animationDelay: `${i * 100}ms` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid place-items-center h-10 w-10 rounded-xl bg-primary-soft text-primary shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground/90",
								children: s.name
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm font-bold text-primary",
							children: [s.value, "%"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-2.5 w-full rounded-full bg-primary-soft overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-gradient-primary rounded-full transition-all duration-1000",
							style: { width: `${s.value}%` }
						})
					})]
				}, s.name))
			})]
		})
	});
}
const supabase = createClient("https://ykkuokxkbidiowrbqrfe.supabase.co", "sb_publishable_cMxxL4Rxnl3jwZuv889oCw_cBI3BH96");
function formatSize(bytes) {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
	return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function readFileAsDataUrl(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result);
		reader.onerror = () => reject(reader.error);
		reader.readAsDataURL(file);
	});
}
async function uploadFileToSupabase(file) {
	const blob = await (await fetch(file.dataUrl)).blob();
	const fileName = `${Date.now()}-${file.name}`;
	const { error: uploadError } = await supabase.storage.from("tugas-files").upload(fileName, blob, { contentType: file.type });
	if (uploadError) throw uploadError;
	return `https://ykkuokxkbidiowrbqrfe.supabase.co/storage/v1/object/public/tugas-files/${fileName}`;
}
function TugasAI() {
	const [tasks, setTasks] = (0, import_react.useState)([]);
	const [isAdmin, setIsAdmin] = (0, import_react.useState)(false);
	const [showPin, setShowPin] = (0, import_react.useState)(false);
	const [pin, setPin] = (0, import_react.useState)("");
	const [pinError, setPinError] = (0, import_react.useState)("");
	const [editingId, setEditingId] = (0, import_react.useState)(null);
	const [judul, setJudul] = (0, import_react.useState)("");
	const [tagsInput, setTagsInput] = (0, import_react.useState)("");
	const [deskripsi, setDeskripsi] = (0, import_react.useState)("");
	const [pendingFiles, setPendingFiles] = (0, import_react.useState)([]);
	const [justAdded, setJustAdded] = (0, import_react.useState)(null);
	const [confirmDelete, setConfirmDelete] = (0, import_react.useState)(null);
	const [viewFile, setViewFile] = (0, import_react.useState)(null);
	const [zoom, setZoom] = (0, import_react.useState)(1);
	const [fullscreen, setFullscreen] = (0, import_react.useState)(false);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [activeTags, setActiveTags] = (0, import_react.useState)([]);
	const fileInputRef = (0, import_react.useRef)(null);
	const allTags = (0, import_react.useMemo)(() => {
		const set = /* @__PURE__ */ new Set();
		tasks.forEach((t) => t.tags.forEach((tag) => set.add(tag)));
		return Array.from(set).sort();
	}, [tasks]);
	const filteredTasks = (0, import_react.useMemo)(() => {
		const q = searchQuery.trim().toLowerCase();
		return tasks.filter((t) => {
			const matchQuery = !q || t.judul.toLowerCase().includes(q) || t.deskripsi.toLowerCase().includes(q) || t.tags.some((tag) => tag.toLowerCase().includes(q));
			const matchTags = activeTags.length === 0 || activeTags.every((tag) => t.tags.includes(tag));
			return matchQuery && matchTags;
		});
	}, [
		tasks,
		searchQuery,
		activeTags
	]);
	const toggleTag = (tag) => {
		setActiveTags((prev) => prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]);
	};
	(0, import_react.useEffect)(() => {
		const fetchTasks = async () => {
			const { data, error } = await supabase.from("tugas").select("*").order("created_at", { ascending: false });
			if (error) {
				console.error(error);
				return;
			}
			setTasks(data.map((item) => ({
				id: item.id,
				judul: item.title,
				tags: Array.isArray(item.tags) ? item.tags : [],
				deskripsi: item.description || "",
				files: item.file_url ? [{
					name: item.file_name || "File Tugas",
					type: item.file_type || "application/octet-stream",
					size: item.file_size || 0,
					dataUrl: item.file_url
				}] : []
			})));
		};
		fetchTasks();
	}, []);
	(0, import_react.useEffect)(() => {
		if (viewFile) {
			setZoom(1);
			setFullscreen(false);
		}
	}, [viewFile]);
	(0, import_react.useEffect)(() => {
		if (!viewFile) return;
		const onKey = (e) => {
			if (e.key === "Escape") setViewFile(null);
			if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(3, +(z + .1).toFixed(2)));
			if (e.key === "-") setZoom((z) => Math.max(.5, +(z - .1).toFixed(2)));
			if (e.key === "0") setZoom(1);
			if (e.key.toLowerCase() === "f") setFullscreen((f) => !f);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [viewFile]);
	const handlePinSubmit = (e) => {
		e.preventDefault();
		if (pin === "1234") {
			setIsAdmin(true);
			setShowPin(false);
			setPin("");
			setPinError("");
		} else setPinError("PIN salah, coba lagi.");
	};
	const resetForm = () => {
		setEditingId(null);
		setJudul("");
		setTagsInput("");
		setDeskripsi("");
		setPendingFiles([]);
	};
	const handleFileChange = async (e) => {
		const fileList = e.target.files;
		if (!fileList || fileList.length === 0) return;
		const MAX_SIZE = 5 * 1024 * 1024;
		const newFiles = [];
		for (const file of Array.from(fileList)) {
			if (file.size > MAX_SIZE) continue;
			const dataUrl = await readFileAsDataUrl(file);
			newFiles.push({
				name: file.name,
				type: file.type,
				size: file.size,
				dataUrl
			});
		}
		setPendingFiles((prev) => [...prev, ...newFiles]);
		if (fileInputRef.current) fileInputRef.current.value = "";
	};
	const removePendingFile = (idx) => {
		setPendingFiles((prev) => prev.filter((_, i) => i !== idx));
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!judul.trim() || !deskripsi.trim()) return;
		const tags = tagsInput.split(",").map((t) => t.trim()).filter(Boolean);
		let fileUrl = "";
		let fileName = "";
		let fileType = "";
		let fileSize = 0;
		const newFileToUpload = pendingFiles.find((f) => f.dataUrl.startsWith("data:"));
		if (newFileToUpload) try {
			fileUrl = await uploadFileToSupabase(newFileToUpload);
			fileName = newFileToUpload.name;
			fileType = newFileToUpload.type;
			fileSize = newFileToUpload.size;
		} catch (err) {
			console.error("Upload gagal:", err);
			return;
		}
		if (editingId) {
			const updatePayload = {
				title: judul.trim(),
				description: deskripsi.trim(),
				tags
			};
			if (fileUrl) {
				updatePayload.file_url = fileUrl;
				updatePayload.file_name = fileName;
				updatePayload.file_type = fileType;
				updatePayload.file_size = fileSize;
			}
			if (pendingFiles.length === 0) {
				updatePayload.file_url = null;
				updatePayload.file_name = null;
				updatePayload.file_type = null;
				updatePayload.file_size = null;
			}
			const { error: error2 } = await supabase.from("tugas").update(updatePayload).eq("id", editingId);
			if (error2) {
				console.error(error2);
				return;
			}
			setTasks((prev) => prev.map((t) => {
				if (t.id !== editingId) return t;
				return {
					...t,
					judul: judul.trim(),
					tags,
					deskripsi: deskripsi.trim(),
					files: pendingFiles.length === 0 ? [] : fileUrl ? [{
						name: fileName,
						type: fileType,
						size: fileSize,
						dataUrl: fileUrl
					}] : t.files
				};
			}));
			setJustAdded(editingId);
			setTimeout(() => setJustAdded(null), 1500);
			resetForm();
			return;
		}
		const { data, error } = await supabase.from("tugas").insert({
			title: judul.trim(),
			description: deskripsi.trim(),
			tags,
			file_url: fileUrl || null,
			file_name: fileName || null,
			file_type: fileType || null,
			file_size: fileSize || null
		}).select().single();
		if (error) {
			console.error(error);
			return;
		}
		const newTask = {
			id: data.id,
			judul: data.title,
			tags,
			deskripsi: data.description || "",
			files: fileUrl ? [{
				name: fileName,
				type: fileType,
				size: fileSize,
				dataUrl: fileUrl
			}] : []
		};
		setTasks((prev) => [newTask, ...prev]);
		setJustAdded(newTask.id);
		setTimeout(() => setJustAdded(null), 1500);
		resetForm();
	};
	const handleEdit = (task) => {
		setEditingId(task.id);
		setJudul(task.judul);
		setTagsInput(task.tags.join(", "));
		setDeskripsi(task.deskripsi);
		setPendingFiles(task.files);
		const el = document.getElementById("tugas-ai-form");
		if (el) el.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	const handleDelete = async (id) => {
		const { error } = await supabase.from("tugas").delete().eq("id", id);
		if (error) {
			console.error(error);
			return;
		}
		setTasks((prev) => prev.filter((t) => t.id !== id));
		setConfirmDelete(null);
		if (editingId === id) resetForm();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "tugas-ai",
		className: "py-20 md:py-28 relative bg-gradient-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-6xl mx-auto px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-end justify-between flex-wrap gap-4 mb-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary text-sm font-semibold tracking-widest uppercase block mb-2",
								children: "Tugas AI"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 text-3xl md:text-4xl font-bold flex items-start gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col leading-tight",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Kumpulan Tugas" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gradient-primary",
											children: "Kecerdasan Buatan"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setShowPin(true),
										"aria-label": "Mode admin",
										className: "opacity-40 hover:opacity-100 hover:text-primary transition-all",
										title: "Admin",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Lock, { className: "h-4 w-4" })
									}),
									isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-primary text-primary-foreground font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Sparkles, { className: "h-3 w-3" }), " Admin"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted-foreground max-w-xl",
								children: "Daftar tugas selama perkuliahan. Dosen & pengunjung dapat melihat detail dan membuka file lampiran tiap tugas."
							})
						] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "tugas-ai-form",
						className: `overflow-hidden transition-all duration-500 ${isAdmin ? "max-h-[1200px] opacity-100 mb-8" : "max-h-0 opacity-0"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSubmit,
							className: "bg-card border border-primary/30 rounded-3xl p-6 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-semibold flex items-center gap-2",
										children: editingId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Pencil, { className: "h-4 w-4 text-primary" }), "Edit Tugas"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Plus, { className: "h-4 w-4 text-primary" }), "Upload Tugas Baru"] })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [editingId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: resetForm,
											className: "text-xs text-muted-foreground hover:text-primary",
											children: "Batal edit"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												setIsAdmin(false);
												resetForm();
											},
											className: "text-xs text-muted-foreground hover:text-primary",
											children: "Keluar mode admin"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid md:grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: judul,
										onChange: (e) => setJudul(e.target.value),
										placeholder: "Judul tugas",
										required: true,
										className: "px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: tagsInput,
										onChange: (e) => setTagsInput(e.target.value),
										placeholder: "Tags (pisahkan dengan koma)",
										className: "px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: deskripsi,
									onChange: (e) => setDeskripsi(e.target.value),
									placeholder: "Deskripsi singkat tugas...",
									required: true,
									rows: 3,
									className: "mt-4 w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary resize-none"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											ref: fileInputRef,
											type: "file",
											multiple: true,
											onChange: handleFileChange,
											className: "hidden",
											id: "tugas-file-input"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											htmlFor: "tugas-file-input",
											className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-dashed border-primary/40 bg-primary-soft/40 text-primary text-sm font-medium cursor-pointer hover:bg-primary-soft transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Upload, { className: "h-4 w-4" }), "Pilih file tugas (maks. 5 MB / file)"]
										}),
										pendingFiles.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-3 space-y-2",
											children: pendingFiles.map((f, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center justify-between gap-3 px-3 py-2 rounded-xl bg-background border border-border text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 min-w-0",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.FileText, { className: "h-4 w-4 text-primary shrink-0" }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "truncate",
															children: f.name
														}),
														f.size > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xs text-muted-foreground shrink-0",
															children: formatSize(f.size)
														})
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => removePendingFile(idx),
													className: "text-muted-foreground hover:text-destructive shrink-0",
													"aria-label": "Hapus file",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "h-4 w-4" })
												})]
											}, idx))
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-soft hover:shadow-glow transition-all",
									children: editingId ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Save, { className: "h-4 w-4" }), "Simpan Perubahan"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Plus, { className: "h-4 w-4" }), "Tambahkan Tugas"] })
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: searchQuery,
										onChange: (e) => setSearchQuery(e.target.value),
										placeholder: "Cari judul, deskripsi, atau tag...",
										className: "w-full pl-11 pr-11 py-3 rounded-2xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
									}),
									searchQuery && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setSearchQuery(""),
										className: "absolute right-3 top-1/2 -translate-y-1/2 h-7 w-7 grid place-items-center rounded-full hover:bg-muted text-muted-foreground",
										"aria-label": "Bersihkan pencarian",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "h-4 w-4" })
									})
								]
							}),
							allTags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold text-muted-foreground mr-1",
										children: "Filter tag:"
									}),
									allTags.map((tag) => {
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => toggleTag(tag),
											className: `inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium transition-all ${activeTags.includes(tag) ? "bg-primary text-primary-foreground shadow-soft" : "bg-primary-soft text-primary hover:bg-primary/20"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Tag, { className: "h-3 w-3" }), tag]
										}, tag);
									}),
									activeTags.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setActiveTags([]),
										className: "text-xs text-muted-foreground hover:text-primary underline underline-offset-2",
										children: "Reset"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									"Menampilkan ",
									filteredTasks.length,
									" dari ",
									tasks.length,
									" tugas"
								]
							})
						]
					}),
					filteredTasks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-card border border-dashed border-border rounded-2xl p-12 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Search, { className: "h-10 w-10 text-muted-foreground mx-auto mb-3 opacity-50" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: "Tidak ada tugas yang cocok"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground mt-1",
								children: "Coba ubah kata kunci atau hapus filter tag."
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
						children: filteredTasks.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: `group bg-card border border-border rounded-2xl p-6 shadow-soft hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 ${justAdded === t.id ? "ring-2 ring-primary animate-fade-in-up" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-2 mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-semibold text-lg leading-snug group-hover:text-primary transition-colors",
										children: t.judul
									}), justAdded === t.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.CheckCircle2, { className: "h-5 w-5 text-primary shrink-0" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap gap-1.5 mb-3",
									children: t.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-primary-soft text-primary font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Tag, { className: "h-3 w-3" }), tag]
									}, tag))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground leading-relaxed",
									children: t.deskripsi
								}),
								t.files.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 pt-4 border-t border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5 text-xs font-semibold text-muted-foreground mb-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Paperclip, { className: "h-3.5 w-3.5" }),
											t.files.length,
											" file terlampir"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-1.5",
										children: t.files.map((f, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-primary-soft/50 hover:bg-primary-soft text-sm transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.FileText, { className: "h-4 w-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "truncate",
													children: f.name
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-1 shrink-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setViewFile(f),
													className: "h-7 w-7 grid place-items-center rounded-md text-primary hover:bg-primary/10 transition-colors",
													title: "Lihat file",
													"aria-label": "Lihat file",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Eye, { className: "h-4 w-4" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: f.dataUrl,
													target: "_blank",
													rel: "noopener noreferrer",
													download: f.name,
													className: "h-7 w-7 grid place-items-center rounded-md text-primary hover:bg-primary/10 transition-colors",
													title: "Unduh file",
													"aria-label": "Unduh file",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Download, { className: "h-4 w-4" })
												})]
											})]
										}, idx))
									})]
								}),
								isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 pt-4 border-t border-border flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => handleEdit(t),
										className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Pencil, { className: "h-3.5 w-3.5" }), "Edit"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setConfirmDelete(t.id),
										className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-destructive/10 text-destructive text-xs font-medium hover:bg-destructive hover:text-destructive-foreground transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Trash2, { className: "h-3.5 w-3.5" }), "Hapus"]
									})]
								})
							]
						}, t.id))
					})
				]
			}),
			showPin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-[60] grid place-items-center bg-foreground/40 backdrop-blur-sm p-4 animate-fade-in-up",
				onClick: () => setShowPin(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onClick: (e) => e.stopPropagation(),
					onSubmit: handlePinSubmit,
					className: "w-full max-w-sm bg-card rounded-3xl p-6 shadow-soft border border-border relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setShowPin(false),
							className: "absolute top-4 right-4 h-8 w-8 grid place-items-center rounded-full hover:bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid place-items-center h-12 w-12 rounded-2xl bg-primary-soft text-primary mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Lock, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-semibold",
							children: "Mode Admin"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mt-1",
							children: "Masukkan PIN untuk mengakses fitur upload, edit & hapus tugas."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							inputMode: "numeric",
							autoFocus: true,
							value: pin,
							onChange: (e) => {
								setPin(e.target.value);
								setPinError("");
							},
							placeholder: "••••",
							className: "mt-5 w-full px-4 py-3 rounded-xl bg-background border border-border text-center text-2xl tracking-[0.5em] focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
						}),
						pinError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-destructive text-center",
							children: pinError
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "mt-5 w-full py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-soft hover:shadow-glow transition-all",
							children: "Masuk"
						})
					]
				})
			}),
			confirmDelete && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-[60] grid place-items-center bg-foreground/40 backdrop-blur-sm p-4 animate-fade-in-up",
				onClick: () => setConfirmDelete(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					onClick: (e) => e.stopPropagation(),
					className: "w-full max-w-sm bg-card rounded-3xl p-6 shadow-soft border border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid place-items-center h-12 w-12 rounded-2xl bg-destructive/10 text-destructive mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Trash2, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-semibold",
							children: "Hapus tugas?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mt-1",
							children: "Tugas dan semua file lampirannya akan dihapus. Tindakan ini tidak bisa dibatalkan."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center justify-end gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setConfirmDelete(null),
								className: "px-4 py-2 rounded-full text-sm font-medium hover:bg-muted transition-colors",
								children: "Batal"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => handleDelete(confirmDelete),
								className: "px-4 py-2 rounded-full text-sm font-medium bg-destructive text-destructive-foreground hover:opacity-90 transition-opacity",
								children: "Ya, hapus"
							})]
						})
					]
				})
			}),
			viewFile && (() => {
				const isImage = viewFile.type.startsWith("image/");
				const isPdf = viewFile.type === "application/pdf";
				const isText = viewFile.type.startsWith("text/") || viewFile.type === "application/json";
				const canZoom = isImage || isPdf || isText;
				const pdfSrc = isPdf ? `${viewFile.dataUrl}#zoom=${Math.round(zoom * 100)}&view=FitH` : viewFile.dataUrl;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fixed inset-0 z-[60] grid place-items-center bg-foreground/60 backdrop-blur-sm p-4 animate-fade-in-up",
					onClick: () => setViewFile(null),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: (e) => e.stopPropagation(),
						className: `bg-card rounded-3xl shadow-soft border border-border flex flex-col overflow-hidden transition-all duration-300 ${fullscreen ? "w-[98vw] h-[96vh] max-w-none" : "w-full max-w-5xl h-[88vh]"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3 px-4 py-2.5 border-b border-border bg-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 min-w-0 flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.FileText, { className: "h-4 w-4 text-primary shrink-0" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-medium truncate text-sm",
												children: viewFile.name
											}),
											viewFile.size > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-muted-foreground shrink-0 hidden sm:inline",
												children: formatSize(viewFile.size)
											})
										]
									}),
									canZoom && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1 px-2 py-1 rounded-full bg-muted/60 shrink-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setZoom((z) => Math.max(.5, +(z - .1).toFixed(2))),
												disabled: zoom <= .5,
												className: "h-7 w-7 grid place-items-center rounded-full hover:bg-background disabled:opacity-40 disabled:cursor-not-allowed text-foreground",
												"aria-label": "Perkecil",
												title: "Perkecil ( - )",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ZoomOut, { className: "h-4 w-4" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setZoom(1),
												className: "text-xs font-medium tabular-nums w-12 text-center hover:text-primary",
												title: "Reset zoom (0)",
												children: [Math.round(zoom * 100), "%"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setZoom((z) => Math.min(3, +(z + .1).toFixed(2))),
												disabled: zoom >= 3,
												className: "h-7 w-7 grid place-items-center rounded-full hover:bg-background disabled:opacity-40 disabled:cursor-not-allowed text-foreground",
												"aria-label": "Perbesar",
												title: "Perbesar ( + )",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ZoomIn, { className: "h-4 w-4" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-px h-4 bg-border mx-1" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setZoom(1),
												className: "h-7 w-7 grid place-items-center rounded-full hover:bg-background text-foreground",
												"aria-label": "Reset zoom",
												title: "Reset zoom (0)",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.RotateCcw, { className: "h-3.5 w-3.5" })
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1 shrink-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setFullscreen((f) => !f),
												className: "h-8 w-8 grid place-items-center rounded-full hover:bg-muted text-foreground",
												"aria-label": fullscreen ? "Kecilkan" : "Layar penuh",
												title: "Layar penuh ( F )",
												children: fullscreen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Minimize2, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Maximize2, { className: "h-4 w-4" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: viewFile.dataUrl,
												target: "_blank",
												rel: "noopener noreferrer",
												download: viewFile.name,
												className: "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Download, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "hidden sm:inline",
													children: "Unduh"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setViewFile(null),
												className: "h-8 w-8 grid place-items-center rounded-full hover:bg-muted",
												"aria-label": "Tutup",
												title: "Tutup ( Esc )",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "h-4 w-4" })
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 bg-muted/30 overflow-auto",
								children: isImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "min-h-full w-full grid place-items-center p-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: viewFile.dataUrl,
										alt: viewFile.name,
										style: {
											transform: `scale(${zoom})`,
											transformOrigin: "center center",
											transition: "transform 0.2s ease"
										},
										className: "max-h-[80vh] max-w-full object-contain rounded-lg shadow-soft"
									})
								}) : isPdf ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
									src: pdfSrc,
									title: viewFile.name,
									className: "w-full h-full bg-white"
								}, `pdf-${zoom}`) : isText ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full h-full overflow-auto bg-white",
									style: {
										fontSize: `${zoom}rem`,
										lineHeight: 1.6
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
										src: viewFile.dataUrl,
										title: viewFile.name,
										className: "w-full h-full bg-white border-0",
										style: { minHeight: "100%" }
									})
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full grid place-items-center p-8 text-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.FileText, { className: "h-12 w-12 text-primary mx-auto mb-3" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-medium",
											children: "Pratinjau tidak tersedia"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-muted-foreground mt-1",
											children: "Format file ini tidak bisa ditampilkan langsung. Silakan unduh untuk membukanya."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: viewFile.dataUrl,
											target: "_blank",
											rel: "noopener noreferrer",
											download: viewFile.name,
											className: "mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium shadow-soft hover:shadow-glow transition-all",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Download, { className: "h-4 w-4" }), "Unduh file"]
										})
									] })
								})
							}),
							canZoom && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-4 py-2 border-t border-border bg-card text-[11px] text-muted-foreground flex items-center justify-between",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Pintasan:",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
										className: "px-1.5 py-0.5 rounded bg-muted",
										children: "+"
									}),
									" /",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
										className: "px-1.5 py-0.5 rounded bg-muted",
										children: "-"
									}),
									" zoom,",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
										className: "px-1.5 py-0.5 rounded bg-muted",
										children: "0"
									}),
									" reset,",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
										className: "px-1.5 py-0.5 rounded bg-muted",
										children: "F"
									}),
									" layar penuh,",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
										className: "px-1.5 py-0.5 rounded bg-muted",
										children: "Esc"
									}),
									" tutup"
								] })
							})
						]
					})
				});
			})()
		]
	});
}
const projects = [];
function Portfolio() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "portofolio",
		className: "py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary text-sm font-semibold tracking-widest uppercase",
						children: "Portofolio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 text-3xl md:text-4xl font-bold",
						children: ["Karya yang ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-primary",
							children: "membanggakan"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground max-w-xl mx-auto",
						children: "Beberapa proyek UI/UX dan Design Graphic  pilihan yang pernah saya kerjakan."
					})
				]
			}), projects.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center py-12 border border-dashed border-border rounded-3xl bg-card/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground italic",
					children: "Proyek sedang dalam tahap pembaruan. Segera hadir!"
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 gap-6",
				children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group relative bg-card border border-border rounded-3xl overflow-hidden shadow-soft hover:-translate-y-1 hover:border-primary/40 transition-all duration-300",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/3] overflow-hidden bg-primary-soft",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.img,
							alt: p.title,
							loading: "lazy",
							width: 768,
							height: 576,
							className: "h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium px-2.5 py-1 rounded-full bg-primary-soft text-primary",
								children: p.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "mt-3 text-xl font-semibold flex items-center gap-2 group-hover:text-primary transition-colors",
								children: [p.title, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ExternalLink, { className: "h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: p.desc
							})
						]
					})]
				}, p.title))
			})]
		})
	});
}
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		message: ""
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		setSent(true);
		setForm({
			name: "",
			email: "",
			message: ""
		});
		setTimeout(() => setSent(false), 3e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "kontak",
		className: "py-20 md:py-28 bg-gradient-soft",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-5xl mx-auto px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary text-sm font-semibold tracking-widest uppercase",
							children: "Kontak"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 text-3xl md:text-4xl font-bold",
							children: ["Mari ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-primary",
								children: "berkolaborasi"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "Punya proyek menarik atau sekadar ingin menyapa? Kirim pesan saja!"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-5 gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2 space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-card border border-border rounded-2xl p-5 shadow-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "grid place-items-center h-10 w-10 rounded-xl bg-primary-soft text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Mail, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-sm",
									children: "mutiafirda14@gmail.com"
								})] })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card border border-border rounded-2xl p-5 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium mb-3",
								children: "Sosial Media"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2",
								children: [
									{
										Icon: import_lucide_react.Instagram,
										label: "Instagram"
									},
									{
										Icon: import_lucide_react.Linkedin,
										label: "LinkedIn"
									},
									{
										Icon: import_lucide_react.Github,
										label: "GitHub"
									}
								].map(({ Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									"aria-label": label,
									className: "grid place-items-center h-11 w-11 rounded-xl bg-primary-soft text-primary hover:bg-gradient-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
								}, label))
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "md:col-span-3 bg-card border border-border rounded-3xl p-6 shadow-soft space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid md:grid-cols-2 gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-medium text-muted-foreground",
									children: "Nama"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									value: form.name,
									onChange: (e) => setForm({
										...form,
										name: e.target.value
									}),
									className: "mt-1 w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary",
									placeholder: "Nama lengkap"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-medium text-muted-foreground",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									type: "email",
									value: form.email,
									onChange: (e) => setForm({
										...form,
										email: e.target.value
									}),
									className: "mt-1 w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary",
									placeholder: "email@contoh.com"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs font-medium text-muted-foreground",
								children: "Pesan"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								required: true,
								rows: 5,
								value: form.message,
								onChange: (e) => setForm({
									...form,
									message: e.target.value
								}),
								className: "mt-1 w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary resize-none",
								placeholder: "Ceritakan ide atau proyek Anda..."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: sent,
								className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-soft hover:shadow-glow transition-all hover:-translate-y-0.5 disabled:opacity-80",
								children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.CheckCircle2, { className: "h-4 w-4" }), " Terkirim!"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Kirim Pesan ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Send, { className: "h-4 w-4" })] })
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", { className: "mt-16 text-center text-sm text-muted-foreground" })
			]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "md:ml-64 pt-16 md:pt-0 transition-[margin] duration-500",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TugasAI, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			]
		})]
	});
}
//#endregion
export { Index as component };
