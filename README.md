# RSS Reader Application

This RSS Reader application allows you to fetch and display the latest articles from various RSS feeds, including feeds from The New York Times. 

## Features
- Fetch articles from various RSS feeds.
- Display feed titles and article titles in a user-friendly format.
- Enter a custom RSS feed URL to fetch articles from other sources.

## NYT RSS Feed Links

Here are some useful RSS feed links from The New York Times:

### General News Feeds
- **Top Stories**: [NYT Top Stories](https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml)
- **World News**: [NYT World News](https://rss.nytimes.com/services/xml/rss/nyt/World.xml)
- **U.S. News**: [NYT U.S. News](https://rss.nytimes.com/services/xml/rss/nyt/US.xml)
- **Technology**: [NYT Technology](https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml)
- **Health**: [NYT Health](https://rss.nytimes.com/services/xml/rss/nyt/Health.xml)
- **Business**: [NYT Business](https://rss.nytimes.com/services/xml/rss/nyt/Business.xml)
- **Opinion**: [NYT Opinion](https://rss.nytimes.com/services/xml/rss/nyt/Opinion.xml)
- **Arts**: [NYT Arts](https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml)

### Specialized Feeds
- **Education**: [NYT Education](https://rss.nytimes.com/services/xml/rss/nyt/Education.xml)
- **Science**: [NYT Science](https://rss.nytimes.com/services/xml/rss/nyt/Science.xml)
- **Sports**: [NYT Sports](https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml)
- **Fashion & Style**: [NYT Fashion & Style](https://rss.nytimes.com/services/xml/rss/nyt/FashionandStyle.xml)
- **Real Estate**: [NYT Real Estate](https://rss.nytimes.com/services/xml/rss/nyt/RealEstate.xml)
- **Food**: [NYT Food](https://rss.nytimes.com/services/xml/rss/nyt/Food.xml)

### Miscellaneous Feeds
- **The Upshot**: [NYT The Upshot](https://rss.nytimes.com/services/xml/rss/nyt/TheUpshot.xml)
- **T Magazine**: [NYT T Magazine](https://rss.nytimes.com/services/xml/rss/nyt/TMagazine.xml)
- **Travel**: [NYT Travel](https://rss.nytimes.com/services/xml/rss/nyt/Travel.xml)

## Installation Instructions

To run the RSS Reader application on your local device, follow these steps:

### Prerequisites
- Ensure you have [Python 3.x](https://www.python.org/downloads/) installed on your system.
- You may need to install additional Python packages.

### Steps to Download and Run the Application

1. **Clone the Repository**
   Open your command line or terminal and run the following command to clone the repository:
   ```bash
   git clone https://github.com/JohanEjiasi/rss_reader.git
   ```

2. **Navigate to the Project Directory**
   Change to the project directory:
   ```bash
   cd rss_reader
   ```

3. **Install Required Packages**
   Use `pip` to install the necessary Python packages. You can find the required packages listed in the `requirements.txt` file.
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Application**
   Execute the following command to start the application:
   ```bash
   python main.py
   ```

5. **Using the Application**
   - The application will prompt you to enter an RSS feed URL. If you press Enter without entering anything, it will use the default NYT Top Stories feed.
   - You can enter any of the provided NYT RSS feed links or any valid RSS feed URL to fetch articles.

## Additional Resources
- [New York Times](https://www.nytimes.com/)
