import feedparser

def fetch_rss(url):
    """Fetch RSS feed from the given URL."""
    feed = feedparser.parse(url)
    return feed

def display_feed(feed):
    """Display the feed title and entries."""
    print(f"Feed Title: {feed.feed.title}\n")
    
    for entry in feed.entries:
        print(f"Entry Title: {entry.title}")
        if hasattr(entry, 'published'):
            print(f"Published: {entry.published}")
        if hasattr(entry, 'link'):
            print(f"Link: {entry.link}")
        if hasattr(entry, 'summary'):
            print(f"Summary: {entry.summary}")
        print("-" * 40)

def save_entries_to_file(feed, filename='rss_feed_entries.txt'):
    """Save the feed entries to a text file."""
    with open(filename, 'w', encoding='utf-8') as f:
        for entry in feed.entries:
            f.write(f"Entry Title: {entry.title}\n")
            if hasattr(entry, 'published'):
                f.write(f"Published: {entry.published}\n")
            if hasattr(entry, 'link'):
                f.write(f"Link: {entry.link}\n")
            if hasattr(entry, 'summary'):
                f.write(f"Summary: {entry.summary}\n")
            f.write("-" * 40 + "\n")

def main():
    rss_url = input("Enter RSS feed URL (default: NYT Top Stories): ") or 'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml'
    rss_feed = fetch_rss(rss_url)
    
    display_feed(rss_feed)
    
    save = input("Would you like to save the entries to a file? (yes/no): ").strip().lower()
    if save in ['yes', 'y']:
        save_entries_to_file(rss_feed)
        print(f"Entries saved to 'rss_feed_entries.txt'.")

if __name__ == '__main__':
    main()
