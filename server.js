app = require('koa')()
, route = require('koa-route')
, parse = require('co-body')

app.use( route.get('/webhook', webhook) )

function *webhook() {
  req = yield parse(this)
  this.body = req.hub.challenge
}

app.listen(process.env.PORT || 9000)
