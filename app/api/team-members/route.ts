import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function GET(request: NextRequest) {
  try {
    const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${process.env.STRAPI_API_URL}/api/team-members?populate=avatar`,
      headers: { 
        'Authorization': `Bearer ${process.env.STRAPI_API_KEY}`
      }
    }

    const response = await axios.request(config)

    const transformedData = {
      ...response.data,
      data: response.data.data.map((member: any) => ({
        ...member,
        avatar_url: member.avatar ? `${process.env.STRAPI_API_URL}${member.avatar.url}` : null
      }))
    }
    console.log('transformedDatatransformedData', transformedData.data[0].avatar_url)
    
    return NextResponse.json(
      { success: true, data: transformedData },
      { status: 200 }
    )

  } catch (error: any) {
    console.error('Team members fetch error:', error)
    
    // Don't expose internal error details to client
    return NextResponse.json(
      { error: 'Failed to fetch team members. Please try again later.' },
      { status: 500 }
    )
  }
} 