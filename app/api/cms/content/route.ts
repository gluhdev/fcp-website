import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const CONTENT_FILE = path.join(process.cwd(), 'data', 'content.json');

export async function GET() {
  try {
    if (!fs.existsSync(CONTENT_FILE)) {
      return NextResponse.json({
        success: false,
        error: 'Content file not found'
      }, { status: 404 });
    }

    const content = JSON.parse(fs.readFileSync(CONTENT_FILE, 'utf-8'));

    return NextResponse.json({
      success: true,
      content
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Failed to read content'
    }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check authorization
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({
        success: false,
        error: 'Unauthorized'
      }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    // Simple token validation - check if it starts with cms_admin_
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    if (!decoded.startsWith('cms_admin_')) {
      return NextResponse.json({
        success: false,
        error: 'Invalid token'
      }, { status: 401 });
    }

    const { content } = await request.json();

    // Create backup
    if (fs.existsSync(CONTENT_FILE)) {
      const backup = CONTENT_FILE.replace('.json', `.backup.${Date.now()}.json`);
      fs.copyFileSync(CONTENT_FILE, backup);
    }

    // Update timestamp
    content.lastUpdated = new Date().toISOString();

    // Save content
    fs.writeFileSync(CONTENT_FILE, JSON.stringify(content, null, 2));

    return NextResponse.json({
      success: true,
      message: 'Content saved successfully'
    });

  } catch (error) {
    console.error('Error saving content:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to save content'
    }, { status: 500 });
  }
}
