import $ from 'jquery';

const API_KEY = 'dc6zaTOxFJmzC';
const API_ENDPOINT = 'http://api.giphy.com/v1/gifs';

const GIFY = (() => {
	'use strict';
	function get(search){
		return new Promise((resolve, reject) => {
			const uri = `${API_ENDPOINT}/search?q=${encodeURIComponent(search)}&api_key=${API_KEY}`;
			$.getJSON(uri, data => {
				resolve(data);
			}).fail( err => {
				reject(err);
			});
		});
	}

	return {

		init(){
			get('Scream')
				.then( data => {

				});
		}
	};

})();

module.exports = GIFY;