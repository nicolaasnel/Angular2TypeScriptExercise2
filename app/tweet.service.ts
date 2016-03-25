export class TweetService {
	getTweets() : Object[] {
		return [
      {
        name: "Windward",
        handle: "@windwardstudios",
        tweet: "Looking for a better company reporting or docgen app?",
        likes: 0,
        image: "http://lorempixel.com/100/100/people?1"
      },
      {
        name: "AngularJS News",
        handle: "@angularjs_news",
        tweet: "Right Relevance: Influencers, Articles and Conversations",
        likes: 4,
        image: "http://lorempixel.com/100/100/people?1"
      },
      {
        name: "UX & Bootstrap",
        handle: "@3rdwave",
        tweet: "10 Reasons Why Web Projects Fail",
        likes: 0,
        image: "http://lorempixel.com/100/100/people?1"
      }
    ]
	}
}