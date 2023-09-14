import { NextRequest, NextResponse } from 'next/server'
import counties from 'utils/i18n.json'

export function middleware(request: NextRequest) {
  const geo = request.geo
  const countryData = counties[geo.country]

  const response = NextResponse.rewrite('/')

  response.headers.set('x-vercel-ip-city', geo.city)
  response.headers.set('x-vercel-ip-country', geo.country)
  response.headers.set('x-vercel-ip-country-region', geo.region)

  if (countryData) {
    response.headers.set('x-vercel-ip-currency', countryData.currency)
    response.headers.set('x-vercel-ip-languages', countryData.languages.join(', '))
  }

  return response
}
