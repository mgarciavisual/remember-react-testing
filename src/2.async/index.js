export default function delayedRemove(arr, timeout = 150) {
	setTimeout(() => {
		arr.pop();
	}, timeout);
}
