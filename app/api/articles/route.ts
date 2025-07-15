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
      url: `${process.env.STRAPI_API_URL}/api/articles?populate=category&populate=author&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
      headers: { 
        'Authorization': `Bearer ${process.env.STRAPI_API_KEY}`
      }
    }

    const response = await axios.request(config)
    
    return NextResponse.json(
      { success: true, data: response.data },
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