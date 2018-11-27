module.exports = {

  async indexPage ( ctx ) {
    const title = 'admin page'
    await ctx.render('admin', {
      title,
    })
  },

  async loginPage ( ctx ) {
    await ctx.render('login')
  }

}