import { NextResponse } from 'next/server';
import { readDatabase, writeDatabase } from '@rancer/shared-data/storage';
import { Lead } from '@rancer/shared-data';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and project message are required.' },
        { status: 400 }
      );
    }

    const newLead: Lead = {
      id: `lead-${Date.now()}`,
      name,
      email,
      phone: phone || '',
      company: company || '',
      service: service || 'Website Development',
      budget: budget || '$5k - $15k',
      message,
      status: 'New',
      createdAt: new Date().toISOString(),
      notes: 'Submitted via public contact form.'
    };

    const db = readDatabase();
    db.leads = [newLead, ...(db.leads || [])];
    writeDatabase(db);

    // If Supabase environment variables are provided on Vercel, sync lead to Supabase PostgreSQL table
    const sbUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
    const sbKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;
    if (sbUrl && sbKey) {
      try {
        await fetch(`${sbUrl}/rest/v1/leads`, {
          method: 'POST',
          headers: {
            'apikey': sbKey,
            'Authorization': `Bearer ${sbKey}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
          },
          body: JSON.stringify({
            name,
            email,
            phone: phone || '',
            company: company || '',
            service: service || 'Website Development',
            budget: budget || '$5k - $15k',
            message,
            status: 'New',
            notes: 'Submitted via public contact form.'
          })
        });
      } catch (sbErr) {
        console.warn('Supabase lead sync warning:', sbErr);
      }
    }

    return NextResponse.json(
      { success: true, message: 'Inquiry submitted successfully!', lead: newLead },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting lead:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const db = readDatabase();
    return NextResponse.json({ leads: db.leads || [] });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load leads' }, { status: 500 });
  }
}
