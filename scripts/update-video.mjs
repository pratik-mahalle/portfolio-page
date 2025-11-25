import fs from 'fs/promises';
import path from 'path';

const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || 'YOUR_CHANNEL_ID_HERE';
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const TARGET_FILE = path.join(process.cwd(), 'latest-video.json');

async function main() {
  if (CHANNEL_ID === 'YOUR_CHANNEL_ID_HERE') {
    console.error('Error: YOUTUBE_CHANNEL_ID is not set.');
    process.exit(1);
  }

  try {
    const response = await fetch(RSS_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
    }
    const xml = await response.text();

    // Simple regex to parse the first entry
    const entryMatch = xml.match(/<entry>([\s\S]*?)<\/entry>/);
    if (!entryMatch) {
      console.log('No entries found in RSS feed.');
      return;
    }

    const entry = entryMatch[1];
    
    const titleMatch = entry.match(/<title>(.*?)<\/title>/);
    const videoIdMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
    
    if (titleMatch && videoIdMatch) {
      const title = titleMatch[1];
      const videoId = videoIdMatch[1];
      const url = `https://youtu.be/${videoId}`;
      const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

      const videoData = {
        title,
        url,
        thumbnail
      };

      const currentData = JSON.parse(await fs.readFile(TARGET_FILE, 'utf-8'));
      
      if (currentData.url !== url) {
        await fs.writeFile(TARGET_FILE, JSON.stringify(videoData, null, 2) + '\n');
        console.log(`Updated latest video to: ${title}`);
      } else {
        console.log('Latest video is already up to date.');
      }
    } else {
        console.error('Could not parse video details from entry.');
    }

  } catch (error) {
    console.error('Error updating video:', error);
    process.exit(1);
  }
}

main();

