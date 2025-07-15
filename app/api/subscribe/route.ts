import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const data = JSON.stringify({
      "data": {
        "email": email
      }
    })

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.STRAPI_API_URL}/api/subscribers`,
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${process.env.STRAPI_API_KEY}`
      },
      data: data
    }

    const response = await axios.request(config)
    
    return NextResponse.json(
      { success: true, data: response.data },
      { status: 200 }
    )

  } catch (error: any) {
    console.error('Newsletter subscription error:', error)
    
    // Don't expose internal error details to client
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    )
  }
} 