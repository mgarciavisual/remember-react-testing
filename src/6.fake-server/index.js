import axios from 'axios';

export default function getPostContent(id) {
	return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
		.then(function(response) {
			return response.data.body;
		})
		.catch(function(error) {
			return '';
		});
}