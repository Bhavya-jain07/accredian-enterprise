import { NextResponse } from "next/server";

// In-memory store (for demo; replace with DB in production)
const leads = [];

export async function POST(request) {
  try {
    const body = await request.json();

    // Basic validation
    const { name, email, company, teamSize } = body;
    if (!name || !email || !company || !teamSize) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, company, teamSize" },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const lead = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
      source: "enterprise_landing_page",
    };

    // Store in memory (push to array)
    leads.push(lead);

    console.log("New enterprise lead captured:", {
      id: lead.id,
      name: lead.name,
      company: lead.company,
      email: lead.email,
      teamSize: lead.teamSize,
      program: lead.program,
      createdAt: lead.createdAt,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Lead captured successfully. Our team will reach out within 2 business hours.",
        leadId: lead.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lead capture error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Simple read endpoint — protect this in production with auth!
  return NextResponse.json({
    total: leads.length,
    leads: leads.map(({ id, name, company, email, teamSize, program, createdAt }) => ({
      id,
      name,
      company,
      email,
      teamSize,
      program,
      createdAt,
    })),
  });
}
