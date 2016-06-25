app = require('koa')()
, route = require('koa-route')
, parse = require('co-body')

app.use( route.post('/webhook', webhook) )

function *webhook() {
  req = yield parse(this)
  this.body = req
}

app.listen(8080)
