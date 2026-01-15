import { registerOTel } from '@vercel/otel'

export function register() {
  registerOTel({
    serviceName: 'riverrougecogop.com', // Change this to your app name
  })
}