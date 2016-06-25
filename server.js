app = require('koa')()
, route = require('koa-route')
, parse = require('co-body')

app.use( route.get('/webhook', webhook) )

function *webhook() {
  req = this.request.query
  console.log(req)
  this.body = req['hub.challenge']
}

app.listen(process.env.PORT || 9000)
