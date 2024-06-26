import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import TitleCard from "./TitleCard";
import Searchbar from "./Searchbar";
import { v4 as uuid } from "uuid";

function ArticleList() {
  const headers = { "x-Api-key": "aa267afd8cb14334b67cf2670eeab6a6" };
  const [articleArr, setArticleArr] = useState([{ title: "" }]);
  const [url, setUrl] = useState(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=aa267afd8cb14334b67cf2670eeab6a6&page=1`
  );

  async function getArticles() {
    let res = await axios({ method: "get", url: url, headers: headers });
    setArticleArr(res.data.articles);
  }

  function createTitleCards() {
    return articleArr.map((article) => {
      if (
        article.description &&
        article.title !== "[Removed]" &&
        article.urlToImage
      ) {
        return (
          <TitleCard
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
            key={uuid()}
          />
        );
      }
    });
  }

  useEffect(() => {
    //Sadly newAPI limits requests to localhost only, so I have to hard code the articles for the deployment
    //The local version of the app works as is should and has a functional search bar
    setArticleArr([
    {
        "source": {
            "id": "cbs-news",
            "name": "CBS News"
        },
        "author": "Caitlin Yilek, Erica Brown, Scott MacFarlane, Alyssa Spady",
        "title": "Hunter Biden's ex-wife, ex-girlfriend testify about drug use in gun trial - CBS News",
        "description": "Hallie Biden, the widow of Hunter Biden's brother Beau who was romantically involved with Hunter and discarded the gun at the center of the trial, has yet to testify.",
        "url": "https://www.cbsnews.com/news/hunter-biden-gun-trial-fbi-agent/",
        "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2024/06/05/29293575-e0cc-41a3-a7f0-658b601e46e5/thumbnail/1200x630/9287ccb9aba9c36716cb0d4d01801f44/pxl-20240605-2045028982.jpg?v=6d480a252670b63de1e37fef02c977a5",
        "publishedAt": "2024-06-05T22:02:38Z",
        "content": "Hunter Biden's ex-wife Kathleen Buhle and a woman he was later romantically involved with both testified Wednesday in his federal gun trial after his attorney sought to cast doubt on the authenticity… [+9391 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Clare Foran, Ted  Barrett",
        "title": "Senate GOP blocks bill to guarantee access to contraception - CNN",
        "description": "Senate Republicans voted Wednesday to block a bill put forward by Democrats that would guarantee access to contraception nationwide, as Democrats seek to highlight the issue in the run up to November’s elections.",
        "url": "https://www.cnn.com/2024/06/05/politics/senate-vote-contraception-access/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/c-ap22190630659990.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-06-05T21:41:00Z",
        "content": "Senate Republicans voted Wednesday to block a bill put forward by Democrats that would guarantee access to contraception nationwide, as Democrats seek to highlight the issue in the run up to November… [+4858 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Josh Schafer",
        "title": "Lululemon stock surges after company boosts profit outlook, stock buybacks - Yahoo Finance",
        "description": "Lululemon reported first quarter results after the bell on Wednesday amid growing competition in the athleisure space.",
        "url": "https://finance.yahoo.com/news/lululemon-stock-surges-after-company-boosts-profit-outlook-stock-buybacks-092112497.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/ZXP.NLIrNfEXFcTghG4WrQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-12/06a46220-ac0e-11ee-bf5d-f04cbc405b81",
        "publishedAt": "2024-06-05T21:28:35Z",
        "content": "Lululemon's (LULU) stock rose more than 10% in after-hours trading as the company boosted its full-year profit outlook and raised its stock repurchase program by $1 billion.\r\nThe company said it now … [+3189 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": null,
        "title": "Nvidia value hits $3tn, overtaking Apple - BBC.com",
        "description": "Nvidia has been marked out as a  winner from a wave of investments in artificial intelligence.",
        "url": "https://www.bbc.com/news/articles/c6ppqd3j621o",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/fea4/live/415e2650-2380-11ef-bac3-438326d5ea25.jpg",
        "publishedAt": "2024-06-05T21:25:25Z",
        "content": "Natalie Sherman,Business reporter, BBC News\r\nNvidia's market value has surged past $3tn (£2.3tn), lifting the chipmaker ahead of Apple to become the second most valuable publicly listed company in th… [+2092 chars]"
    },
    {
        "source": {
            "id": "usa-today",
            "name": "USA Today"
        },
        "author": "USA TODAY",
        "title": "When is Nvidia stock split? Key dates to know ahead of 10-to-1 split - USA TODAY",
        "description": null,
        "url": "https://www.usatoday.com/story/money/investing/2024/06/05/nvidia-stock-split/73979065007/",
        "urlToImage": null,
        "publishedAt": "2024-06-05T21:22:09Z",
        "content": null
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": "Reuters",
        "title": "WHO confirms first fatal human case of bird flu A(H5N2) - Reuters",
        "description": null,
        "url": "https://www.reuters.com/world/americas/who-confirms-first-human-case-avian-influenza-ah5n2-mexico-2024-06-05/",
        "urlToImage": null,
        "publishedAt": "2024-06-05T21:07:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": null,
        "title": "Biden border order attacked by rival Republicans - BBC.com",
        "description": "The president has hit back at critics after unveiling plans to curb record migrant arrivals at the US-Mexico border.",
        "url": "https://www.bbc.com/news/articles/cv224kdxwm4o",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/cfd0/live/6003eff0-233e-11ef-a13a-0b8c563da930.jpg",
        "publishedAt": "2024-06-05T20:40:56Z",
        "content": "A group of migrants who were detained attempting to cross the US border from Mexico yesterday\r\nUS President Joe Biden's Republican rivals, and some of his Democratic allies, have criticised his new e… [+5160 chars]"
    },
    {
        "source": {
            "id": "politico",
            "name": "Politico"
        },
        "author": "POLITICO",
        "title": "New Jersey Gov. Phil Murphy signs deeply controversial public records overhaul - POLITICO",
        "description": null,
        "url": "https://www.politico.com/news/2024/06/05/new-jersey-murphy-public-records-bill-00161823",
        "urlToImage": null,
        "publishedAt": "2024-06-05T20:37:06Z",
        "content": null
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Zachary Cohen, Sara Murray",
        "title": "Georgia court of appeals indefinitely pauses the election subversion conspiracy case against Donald Trump - CNN",
        "description": "A Georgia appeals court has halted the election subversion conspiracy case against former President Donald Trump and several of his co-defendants until a panel of judges rules on whether Fulton County District Attorney Fani Willis should be disqualified, acco…",
        "url": "https://www.cnn.com/2024/06/05/politics/georgia-trump-fani-willis-trial-delay/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/20240605-fani-willis-donald-trump-split-060524.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-06-05T20:35:00Z",
        "content": "A Georgia appeals court has halted the election subversion conspiracy case against former President Donald Trump and several of his co-defendants until a panel of judges rules on whether Fulton Count… [+2674 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": null,
        "title": "Robert Fico: Slovak PM blames opposition's 'hatred' for shooting - BBC.com",
        "description": "Robert Fico describes man who shot him as an \"opposition activist\" and blames \"anti-government media\".",
        "url": "https://www.bbc.com/news/articles/c899yq888jeo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/b545/live/172ab220-2373-11ef-80aa-699d54c46324.jpg",
        "publishedAt": "2024-06-05T20:13:24Z",
        "content": "Three weeks after Robert Fico was gunned down in central Slovakia, hes made a full-throated return to political life - on the eve of the European elections.\r\nIn a Facebook video apparently recorded a… [+3247 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Forbes"
        },
        "author": "Monica Mercuri",
        "title": "Miranda Derrick Speaks Out Against Netflix's 'Dancing For The Devil' Documentary - Forbes",
        "description": "Miranda Derrick, the subject of Netflix's \"Dancing for the Devil,\" is addressing accusations that she is in a cult. Here's why she called the documentary \"one-sided.\"",
        "url": "https://www.forbes.com/sites/monicamercuri/2024/06/05/miranda-derrick-speaks-out-against-netflixs-dancing-for-the-devil-documentary/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6660bec70d230b33e66403c8/0x0.jpg?format=jpg&crop=1499,1000,x121,y91,safe&height=900&width=1600&fit=bounds",
        "publishedAt": "2024-06-05T20:03:56Z",
        "content": "LOS ANGELES, CALIFORNIA - FEBRUARY 05: (FOR EDITORIAL USE ONLY) Miranda Derrick attends the 65th ... [+] GRAMMY Awards on February 05, 2023 in Los Angeles, California. (Photo by Amy Sussman/Getty Ima… [+5901 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "13abc Action News"
        },
        "author": "Associated Press",
        "title": "Woman fatally stabbed 3-year-old within seconds after following family from store, police say - WTVG",
        "description": "The boy’s mother was about to load her groceries into her vehicle when Ellis ran at them with a knife, stabbing the boy twice, Beck said. The boy died at a hospital.",
        "url": "https://www.13abc.com/2024/06/05/woman-fatally-stabbed-3-year-old-within-seconds-after-following-family-store-police-say/",
        "urlToImage": "https://gray-wtvg-prod.cdn.arcpublishing.com/resizer/v2/D3JAP3UOCVGDVG7XNK4R4U7Z6Y.jpg?auth=f7343615f27629b3a6c9a64111447ddc6173ff0a6060ee9d88aa9d5cc97eef84&width=1200&height=600&smart=true",
        "publishedAt": "2024-06-05T19:08:00Z",
        "content": "A woman who fatally stabbed a 3-year-old boy sitting in a grocery cart outside a supermarket attacked him and his mother in less than five seconds before walking away, police said.\r\nPolice said witne… [+1792 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Deadline"
        },
        "author": "Lynette Rice",
        "title": "‘The Voice’ Brings Back Adam Levine, Adds Kelsea Ballerini To Coach In Spring 2025 - Deadline",
        "description": "The Maroon 5 frontman and original Voice coach is returning for season 27 alongside new coach Kelsea Ballerini.",
        "url": "http://deadline.com/2024/06/the-voice-brings-back-adam-levine-adds-kelsea-ballerini-spring-2025-1235959676/",
        "urlToImage": "https://deadline.com/wp-content/uploads/2024/06/Adam-Levine-Kelsea-Ballerini.jpg?w=1000",
        "publishedAt": "2024-06-05T19:00:00Z",
        "content": "Adam Levine is returning to The Voice. \r\nThe Maroon 5 frontman and original Voice coach is returning for season 27 in 2025 following 16 consecutive seasons in the role. He’ll reclaim his red chair on… [+1168 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": "Reuters",
        "title": "Biden's airing of Gaza ceasefire proposal pushes Netanyahu toward a deal - Reuters",
        "description": null,
        "url": "https://www.reuters.com/world/us/with-gaza-ceasefire-announcement-biden-pushes-netanyahu-toward-deal-2024-06-05/",
        "urlToImage": null,
        "publishedAt": "2024-06-05T18:50:00Z",
        "content": null
    },
    {
        "source": {
            "id": "google-news",
            "name": "Google News"
        },
        "author": "The Associated Press",
        "title": "'Traitors' cast will include Sam Asghari, Chrishell Stause, Tom Sandoval — and a British aristocrat - The Associated Press",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiX2h0dHBzOi8vYXBuZXdzLmNvbS9hcnRpY2xlL3RyYWl0b3JzLXNlYXNvbi0zLWNhc3QtYW5ub3VuY2VtZW50LTMyOTUyNmY3NDljMDc4Mjk3NWIwYjg0ZDZkZjZjMTI50gEA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-06-05T18:50:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "1-ON-1 WITH CONNOR McDAVID, MATCHING UP WITH PANTHERS, EXTENDED TIME OFF - TSN",
        "description": "TSN\"s Ryan Rishaug has an exclusive locker room chat with Oilers captain Connor McDavid ahead of Saturday's matchup against the Florida Panthers in the Stanl...",
        "url": "https://www.youtube.com/watch?v=7D71rWFO8fE",
        "urlToImage": "https://i.ytimg.com/vi/7D71rWFO8fE/maxresdefault.jpg",
        "publishedAt": "2024-06-05T18:46:27Z",
        "content": null
    },
    {
        "source": {
            "id": "nfl-news",
            "name": "NFL News"
        },
        "author": null,
        "title": "Browns' Nick Chubb taking knee rehab 'day by day,' says hit by Minkah Fitzpatrick 'part of the game' - NFL.com",
        "description": "Cleveland Browns running back Nick Chubb updated the progress of his knee injury on Wednesday and opened up about the play that ended his 2023 season, adding he puts no blame on Steelers safety Minkah Fitzpatrick.",
        "url": "https://www.nfl.com/news/browns-rb-nick-chubb-taking-knee-rehab-day-by-day-hit-by-minkah-fitzpatrick-part-of-the-game",
        "urlToImage": "https://static.www.nfl.com/image/upload/t_editorial_landscape_12_desktop/league/ph0fs3u6qlmkffdllzyx",
        "publishedAt": "2024-06-05T18:46:00Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Daniel Howley",
        "title": "Why Apple's generative AI push won't launch an iPhone supercycle in 2024 - Yahoo Finance",
        "description": "Apple is expected to unveil its big generative AI push with new capabilities for the iPhone. But don’t expect generative AI itself to spur a new iPhone sales...",
        "url": "https://finance.yahoo.com/news/why-apples-generative-ai-push-wont-launch-an-iphone-supercycle-in-2024-184411662.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/uf0BWwsquymF4_jAkGxdTw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-06/d0d54dd0-229b-11ef-aeff-c53977758562",
        "publishedAt": "2024-06-05T18:44:11Z",
        "content": "Were less than a week out from Apples (AAPL) Worldwide Developers Conference (WWDC), which kicks off on June 10 at the companys headquarters in Cupertino, Calif. This year the company is expected to … [+5018 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Financial Times"
        },
        "author": "Joshua Chaffin",
        "title": "New York 'indefinitely' pauses Manhattan congestion pricing scheme - Financial Times",
        "description": "Plan had been expected to take effect later this month and raise billions for ailing public transit system",
        "url": "https://www.ft.com/content/d328f5c3-8ac2-4355-853a-308890573afd",
        "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.ft.com%2F__origami%2Fservice%2Fimage%2Fv2%2Fimages%2Fraw%2Fhttps%253A%252F%252Fd1e00ek4ebabms.cloudfront.net%252Fproduction%252F9c440459-739a-4130-ba61-d6e2a816ab6e.jpg%3Fsource%3Dnext-article%26fit%3Dscale-down%26quality%3Dhighest%26width%3D700%26dpr%3D1?source=next-opengraph&fit=scale-down&width=900",
        "publishedAt": "2024-06-05T18:29:21Z",
        "content": "New York City will indefinitely pause a congestion pricing plan that was years in the making, the states governor Kathy Hochul said on Wednesday, casting uncertainty over billions of dollars in expec… [+3510 chars]"
    }
]);
    //getArticles();
  }, []);

  return (
    <div className="flex flex-col gap-y-5">
      {/*<Searchbar setUrl={setUrl} />*/}
      {createTitleCards()}
    </div>
  );
}

export default ArticleList;
