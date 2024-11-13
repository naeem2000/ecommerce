import { createClient } from 'contentful';

const client = createClient({
	space: 'ljs6vi4vtnch',
	accessToken: 'eifrFbf2soct9sxMWskMtRP7ThRUTUkBkhPQuRl99G4',
});

export async function getData() {
	const data = await client.getEntries().then((response: any) => response);
	return data;
}
