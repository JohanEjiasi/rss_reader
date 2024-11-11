async function fetchRSSFeed(url) {
    try {
        const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
        const data = await response.json();
        const parser = new DOMParser();
        const xml = parser.parseFromString(data.contents, "application/xml");
        displayFeedEntries(xml);
    } catch (error) {
        console.error("Error fetching the RSS feed:", error);
        document.getElementById("rssFeed").innerHTML = "<p>Failed to load RSS feed. Please try again later.</p>";
    }
}

function displayFeedEntries(xml) {
    const items = xml.querySelectorAll("item");
    const rssFeed = document.getElementById("rssFeed");
    rssFeed.innerHTML = ""; // Clear any existing content

    items.forEach(item => {
        const title = item.querySelector("title").textContent;
        const link = item.querySelector("link").textContent;
        const pubDate = item.querySelector("pubDate").textContent;
        const description = item.querySelector("description").textContent;

        const entry = document.createElement("div");
        entry.classList.add("entry");
        entry.innerHTML = `
            <h2><a href="${link}" target="_blank">${title}</a></h2>
            <p><strong>Published:</strong> ${pubDate}</p>
            <p>${description}</p>
        `;
        rssFeed.appendChild(entry);
    });
}

// Add all the RSS feed URLs here
const rssFeedURLs = [
    "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Africa.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Americas.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/AsiaPacific.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Europe.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/MiddleEast.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/US.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Education.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Politics.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/TheUpshot.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/NYRegion.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Business.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/EnergyEnvironment.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/SmallBusiness.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Economy.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Dealbook.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/MediaandAdvertising.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/YourMoney.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/PersonalTech.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Baseball.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/CollegeBasketball.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/CollegeFootball.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Golf.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Hockey.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/ProBasketball.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/ProFootball.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Soccer.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Tennis.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Environment.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Space.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Health.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Well.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/ArtandDesign.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/BookReview.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Dance.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Movies.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Music.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Television.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Theater.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/FashionandStyle.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/DiningandWine.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Love.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/TMagazine.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Travel.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/RealEstate.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Jobs.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Autos.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Lens.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Obituaries.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/TimesWire.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/MostEmailed.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/MostShared.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/MostViewed.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Opinion.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Columnists.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/CharlesBlow.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/JamelleBouie.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/DavidBrooks.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/FrankBruni.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/GailCollins.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/RossDouthat.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/MaureenDowd.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/ThomasFriedman.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/MichelleGoldberg.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/EugeneRobinson.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/PaulKrugman.xml",
    "https://rss.nytimes.com/services/xml/rss/nyt/Opinionator.xml"
];

// Fetch each RSS feed and display it
rssFeedURLs.forEach(url => fetchRSSFeed(url));
