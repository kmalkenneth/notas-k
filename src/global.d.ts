/// <reference types="@sveltejs/kit" />
interface ImportMetaEnv {
	VITE_STRAPI_URL: string;
	VITE_WEBSITE_URL: string;
	VITE_WEBSITE_NAME: string;
}

interface Meta {
	title: string;
	description: string;
	url: string;
	image: string;
	lenguage: string;
	canonical: string;
	robots: string;
}

interface Image {
	url: string;
	alternativeText: string;
}

interface Writer {
	slug: string;
	photo: Image;
	name: string;
	biography: string;
}

interface Group {
	slug: string;
	name: string;
}
interface Article {
	id: number;
	title: string;
	description: string;
	content: string;
	writer: Writer;
	image: Image;
	slug: string;
	group: Group;
	created_at: string;
	updated_at: string;
	published_at: string;
}

interface PaginationData {
	currentPage: number;
	totalPages: number;
}

interface Link {
	href: string;
	text: string;
}
