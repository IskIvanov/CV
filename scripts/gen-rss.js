const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate() {
  const feed = new RSS({
    title: 'Iskren Ivanov',
    site_url: 'https://iskren.dev',
    feed_url: 'https://iskren.dev/feed.xml'
  })

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
