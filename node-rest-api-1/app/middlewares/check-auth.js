import Boom from 'boom';

import { TokenService } from './../utils'

export default async (ctx, next) => {
  console.log(ctx.request)
  const { request: { header: { authorization } } } = ctx;
  if (!TokenService.decode(authorization)) throw Boom.forbidden('You are not authorized!');
  await next();
};
