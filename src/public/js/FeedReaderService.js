const CORS_PROXY = '/proxy?url='

class FeedReaderService {

	constructor(parser) {
		this.parser = parser;
	}

	parse(url) {

		let promise = new Promise((resolve, reject) => {
			let that = this;
			this.parser.parseURL(CORS_PROXY + url).then(function(feed) {
			//	console.log(feed)
				resolve(that.parseFeed(feed));
			});
		});

		return promise;
	}

	parseFeed(feed) {

		let feedDTO = {
			title: feed.title,
			feedUrl: feed.feedUrl,
			items: []
		}

		let that = this;

		feed.items.forEach(function(entry) {
			var entryDto = that.parseFeedItem(entry);
	    	feedDTO.items.push(that.parseFeedItem(entry));
	  	});

	  	return feedDTO;
	}

	parseFeedItem(feedItem) {
		return {
			title: feedItem.title,
			pubDate: feedItem.pubDate,
			content: (feedItem.content ? feedItem.content : feedItem['content:encoded'])
		};
	}

}