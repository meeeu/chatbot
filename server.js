app = require('koa')()
, route = require('koa-route')
, parse = require('co-body')

app.use( route.post('/webhook', webhook) )

function *webhook() {
  req = yield parse(this)
  this.body = yield req.hub.challenge
}

app.listen(process.env.PORT || 9000)
