const routes = [
  { path: '/feed/:id', component: feed }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

var feedUrls = [
	'http://www.commitstrip.com/en/feed/',
	'https://xkcd.com/rss.xml',
	'https://www.comicsrss.com/rss/dilbert.rss',
	'https://www.comicsrss.com/rss/dilbert-classics.rss'
]

var app = new Vue({
	router,
	el: '#app',
	data: {
		feeds: [],
		i: 0,
	},
	created: function () {
		//window.addEventListener('keydown', this.onkey);
		this.loadFeeds();
	},
	beforeDestroy: function () {
		//window.removeEventListener('keydown', this.onkey);
	},
	methods: {
		loadFeeds: function() {
			feedUrls.forEach(this.loadFeed);
		},
		loadFeed: function(feedUrl) {
			let feeds = this.feeds;
			service = new FeedReaderService(new RSSParser());
			service.parse(feedUrl).then(function(result) {
				console.log(result);
				feeds.push(result);
			});
		}/*,
	/	previous: function() {
			this.i = (this.i == 0 ? this.feed.items.length : this.i) - 1;
		},
		next: function() {
			this.i = (this.i + 1) % this.feed.items.length;
		}*///,
		/*onkey(e) {
			switch(e.key) {
				case "ArrowLeft":
					this.previous();
					break;
				case "ArrowRight":
					this.next();
					break;
				default:
					// do nothing
			}
		}*/
	}
});	