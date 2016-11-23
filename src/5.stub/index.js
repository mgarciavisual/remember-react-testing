export default function openWindow(url, title = '') {
	if (!url) {
		return;
	} else {
		window.open(url, title);
	}
}
