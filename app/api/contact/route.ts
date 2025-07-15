import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstname, lastname, email, phone_number, subject, message } = body

    // Validate required fields
    if (!firstname || !lastname || !email || !phone_number || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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
        "firstname": firstname,
        "lastname": lastname,
        "email": email,
        "phone_number": phone_number,
        "subject": subject,
        "message": message
      }
    })

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.STRAPI_API_URL}/api/contact-submissions`,
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
    console.error('Contact form submission error:', error)
    
    // Don't expose internal error details to client
    return NextResponse.json(
      { error: 'Failed to submit contact form. Please try again later.' },
      { status: 500 }
    )
  }
} 