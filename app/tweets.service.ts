export class TweetsService {
	getTweets() : Object[] {
		return [
      {
        name: "Windward",
        handle: "@windwardstudios",
        tweet: "Looking for a better company reporting or docgen app?",
        likes: 1,
        liked: true,
        image: "http://lorempixel.com/100/100/people/?1"
      },
      {
        name: "AngularJS News",
        handle: "@angularjs_news",
        tweet: "Right Relevance: Influencers, Articles and Conversations",
        likes: 5,
        liked: true,
        image: "http://lorempixel.com/100/100/people/?2"
      },
      {
        name: "UX & Bootstrap",
        handle: "@3rdwave",
        tweet: "10 Reasons Why Web Projects Fail",
        likes: 0,
        liked: false,
        image: "http://lorempixel.com/100/100/people/?3"
      }
    ]
	}
}