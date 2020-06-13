/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import User from 'App/Models/User'

Route.on('/test').render('welcome')

Route.get('/test2', async ({ view }) => {
  return view.render('welcome')
})

Route.get('login', async ({ auth, response }) => {
  const user = await User.firstOrFail()
  await auth.login(user!)

  return response.redirect('back')
})

Route.get('logout', async ({ auth, response }) => {
  await auth.logout()

  return response.redirect('back')
})

Route.get('createUser', async () => {
  return await User.create({
    email: 'romain.lanz@example.com',
    password: 'secret',
  })
})

