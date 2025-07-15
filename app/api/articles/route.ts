import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = searchParams.get('page') || '1'
    const pageSize = searchParams.get('pageSize') || '10'

    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${process.env.STRAPI_API_URL}/api/articles?populate=category&populate=author&populate=cover&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
      headers: { 
        'Authorization': `Bearer ${process.env.STRAPI_API_KEY}`
      }
    }

    const response = await axios.request(config)
    
    // Transform the data to include cover_url
    const transformedData = {
      ...response.data,
      data: response.data.data.map((article: any) => ({
        ...article,
        cover_url: article.cover ? process.env.ENVIRONMENT === 'development' ? `${process.env.STRAPI_API_URL}${article.cover.url}` : article.cover.url : null
      }))
    }
    
    return NextResponse.json(
      { success: true, data: transformedData },
      { status: 200 }
    )

  } catch (error: any) {
    console.error('Articles fetch error:', error)
    
    // Don't expose internal error details to client
    return NextResponse.json(
      { error: 'Failed to fetch articles. Please try again later.' },
      { status: 500 }
    )
  }
} 