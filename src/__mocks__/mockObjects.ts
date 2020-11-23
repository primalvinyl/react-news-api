export const mockRequestObject = {
    query: 'test',
    sort: 'test'
};

/* ************************************** Mock REDUX Objects **************************************** */
// mock redux articles object
export const mockReduxArticlesObject = {
    results: [
        {
            "title": "CBS News Eye on Trends: The latest from the Election & Survey Unit",
            "description": "A recap of latest polls and data-driven studies from the CBS News Election & Survey Unit",
            "image": "https://cbsnews2.cbsistatic.com/hub/i/r/2020/07/12/0f0fbf59-cae9-454f-8128-30f2dd29bb72/thumbnail/1200x630/a5c375d6109197375013d0e24820b8c1/battleground-tracker-1600x900.png",
            "url": "https://www.cbsnews.com/live-news/cbsnews-eye-on-trends/"
        }
    ],
    error: false,
    error_message: '',
    request_status: 'resolved'
}


/* ************************************** Mock API Objects **************************************** */
// mock articles api object
export const mockApiArticlesObject = {
    "status": "ok",
    "totalResults": 3,
    "articles": [
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "CBS News",
            "title": "CBS News Eye on Trends: The latest from the Election & Survey Unit",
            "description": "A recap of latest polls and data-driven studies from the CBS News Election & Survey Unit",
            "url": "https://www.cbsnews.com/live-news/cbsnews-eye-on-trends/",
            "urlToImage": "https://cbsnews2.cbsistatic.com/hub/i/r/2020/07/12/0f0fbf59-cae9-454f-8128-30f2dd29bb72/thumbnail/1200x630/a5c375d6109197375013d0e24820b8c1/battleground-tracker-1600x900.png",
            "publishedAt": "2020-11-20T03:50:00+00:00",
            "content": "Updated on: November 19, 2020 / 10:50 PM\r\n / CBS News\r\nWatch this space for a recap of the latest polls and data-driven studies curated by the CBS News Election &amp; Survey Unit!\r\n11/19/2020\r\nNearly… [+342292 chars]"
        },
        {
            "source": {
                "id": "buzzfeed",
                "name": "Buzzfeed"
            },
            "author": "[{\"@type\":\"Person\",\"name\":\"Michele Bird\",\"url\":\"https://www.buzzfeed.com/michelelbird\",\"jobTitle\":\"BuzzFeed Contributor\"}]",
            "title": "Are You More Like Sam Or Dean From \"Supernatural\"?",
            "description": "Channel your inner Winchester.",
            "url": "https://www.buzzfeed.com/michelelbird/are-you-more-like-sam-or-dean-from-supernatural",
            "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2020-11/16/21/campaign_images/c3b1ebfb16c2/are-you-more-like-sam-or-dean-from-supernatural-2-9731-1605561226-50_dblbig.jpg",
            "publishedAt": "2020-11-19T18:22:30.0122512Z",
            "content": "First off, how would you describe yourself?"
        },
        {
            "source": {
                "id": "ign",
                "name": "IGN"
            },
            "author": null,
            "title": "Assassin's Creed Valhalla - Combat, Skills, Raids, and More - IGN",
            "description": "Assassin's Creed Valhalla is overhauling combat to focus on what Vikings do best. As Eivor you'll raid, crush, and pillage. \r\n\r\nWe're breaking down the finer points of combat, raids, skill system, abilities, tips, tricks, strategies, and so much more.\r\n\r\nAnd …",
            "url": "https://www.ign.com/videos/assassins-creed-valhalla-combat-skills-raids-and-more",
            "urlToImage": "https://assets1.ignimgs.com/thumbs/userUploaded/2020/11/4/accombatoo-1604537330812.jpg?width=1280",
            "publishedAt": "2020-11-19T18:22:23.0271483Z",
            "content": "Did you enjoy this video?"
        }
    ]
};
