Vue.component('comic', {
	props: { 
		comic: { 
			default: function () { 
				return {}; 
			} 
		}
	},
	template: `
		<div class="card mb-3 text-center">
			<div class="card-header">{{ comic.title }}</div>
			<span class="m-3" v-html="comic.content"/>
			<footer class="card-text"><small class="text-muted">{{ comic.pubDate }}</small></footer>
		</div>`
});


