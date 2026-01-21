import { NextRequest, NextResponse } from 'next/server';

const CMS_USERNAME = process.env.CMS_USERNAME || 'weiwei';
const CMS_PASSWORD = process.env.CMS_PASSWORD || 'weiwei';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    if (username === CMS_USERNAME && password === CMS_PASSWORD) {
      // Simple token - in production use JWT
      const token = Buffer.from(`cms_admin_${Date.now()}`).toString('base64');

      return NextResponse.json({
        success: true,
        token
      });
    }

    return NextResponse.json({
      success: false,
      error: 'Invalid username or password'
    }, { status: 401 });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Server error'
    }, { status: 500 });
  }
}
