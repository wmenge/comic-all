const feed = Vue.component('feed', {
	props: { 
		feed: { 
			default: function () { 
				return {}; 
			} 
		},
		i: { default: 0 }
	},
	computed: {
		currentComic: function() {
			return this.feed.items[this.i];
		}
	},
	template: `
		<div>
			<h3 class="mb-5">{{ feed.title }}</h3>
			<div class="row justify-content-center">
				<div class="col-auto comic-container">
					<comic v-for="(item, key) in feed.items.slice(0, 5)" v-bind:comic="item"></comic>
	        	</div>
	        </div>
		</div>`,
	methods: {
		previous: function() {
			this.i = (this.i == 0 ? this.feed.items.length : this.i) - 1;
		},
		next: function() {
			this.i = (this.i + 1) % this.feed.items.length;
		}
	},
	beforeRouteUpdate (to, from, next) {
		// react to route changes...
		// don't forget to call next()
		this.feed = this.$parent.feeds[to.params.id];
		next()
	}
});

/*
<div>
  			<h3>{{ $route.params.id }} // {{ feed.title }}</h3>
			<div class="comic-container">
				<div v-on:click="previous" class="directional-button" id="left"></div>
				<comic v-bind:comic="currentComic"></comic>
				<div v-on:click="next" class="directional-button" id="right"></div>
			</div>
			<div class="thumbnail-list">
				<thumbnail v-for="(item, key) in feed.items.slice(0, 5)" v-bind:item="item" v-bind:i="key"></thumbnail>
			</div>
		</div>
*/