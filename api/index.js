module.exports = (request, response) => {
  const { url } = request
  const urlParts = url.split('/')

  if (url === '/') {
    response.writeHead(302, {
      Location: `https://vercel.com`
    })

    response.end()
    return
  }

  if (urlParts.length < 3) {
    return {
      error: 'Please specify all the missing data (see the repo)!',
      errorHandle: 'missing_data'
    }
  }

  const isVercel = urlParts.length === 3
  const user = isVercel ? 'vercel' : urlParts[1]
  const repo = urlParts[isVercel ? 1 : 2]
  const code = urlParts[isVercel ? 2 : 3]

  response.writeHead(302, {
    Location: `https://github.com/${user}/${repo}/blob/master/errors/${code}.md`
  })

  response.end()
}
