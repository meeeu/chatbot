app = require('koa')()
, route = require('koa-route')
, parse = require('co-body')

app.use( route.get('/webhook', webhook) )
app.use( route.get('/privacy', privacy) )
function *privacy() {
  this.body = 'You are private.  We will not share your info with anyone.'
}
function *webhook() {
  req = this.request.query
  console.log(req)
  this.body = req['hub.challenge']
}

app.listen(process.env.PORT || 9000)
