import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function GET(request: NextRequest) {
  try {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${process.env.STRAPI_API_URL}/api/categories?populate=articles`,
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
    console.error('Categories fetch error:', error)
    
    // Don't expose internal error details to client
    return NextResponse.json(
      { error: 'Failed to fetch categories. Please try again later.' },
      { status: 500 }
    )
  }
} 