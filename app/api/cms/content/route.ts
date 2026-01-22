import { NextRequest, NextResponse } from 'next/server';
import { put, list } from '@vercel/blob';

const CONTENT_BLOB_NAME = 'cms-content.json';

// Default content structure
const defaultContent = {
  lastUpdated: new Date().toISOString(),
  pages: {},
  contact: {
    email: 'info@fullcustompackaging.com'
  }
};

async function getContentFromBlob() {
  try {
    const { blobs } = await list({ prefix: CONTENT_BLOB_NAME });

    if (blobs.length === 0) {
      return null;
    }

    // Get the most recent blob
    const blob = blobs[0];
    const response = await fetch(blob.url);
    const content = await response.json();
    return content;
  } catch (error) {
    console.error('Error reading from Blob:', error);
    return null;
  }
}

export async function GET() {
  try {
    const content = await getContentFromBlob();

    if (!content) {
      // Return default content if nothing saved yet
      return NextResponse.json({
        success: true,
        content: defaultContent
      });
    }

    return NextResponse.json({
      success: true,
      content
    });

  } catch (error) {
    console.error('Error in GET:', error);
    return NextResponse.json({
      success: true,
      content: defaultContent
    });
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

    // Update timestamp
    content.lastUpdated = new Date().toISOString();

    // Save to Vercel Blob (overwrite existing)
    await put(CONTENT_BLOB_NAME, JSON.stringify(content, null, 2), {
      access: 'public',
      addRandomSuffix: false,
      allowOverwrite: true,
    });

    return NextResponse.json({
      success: true,
      message: 'Content saved successfully'
    });

  } catch (error) {
    console.error('Error saving content:', error);
    return NextResponse.json({
      success: false,
      error: 'Failed to save content: ' + (error instanceof Error ? error.message : 'Unknown error')
    }, { status: 500 });
  }
}
