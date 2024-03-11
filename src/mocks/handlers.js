// mocks/handlers.js
import { http, HttpResponse } from 'msw';
import profile from './profile.json';
 
export const handlers = [
    http.get('/user', async (req, res, ctx) => {
    return HttpResponse.json(profile)
  }),
]