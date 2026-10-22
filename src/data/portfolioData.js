import projectsData from './projects.json';

export const personalInfo = {
  name: "Gracel Urquia",
  title: "AI Automation Specialist",
  tagline: "Autonomous Systems. Intelligent Workflows. Zero Friction.",
  bio: "I design and deploy resilient AI agents, end-to-end automation pipelines, and custom API bridges. Specializing in n8n, Make.com, and Zapier, I help high-growth teams eliminate repetitive manual operations and scale autonomously.",
  status: "Available for new projects & consulting",
  email: "urquiagracel@gmail.com",
  location: "Remote / Worldwide",
  socials: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://x.com",
    calendar: "https://cal.com",
  },
  stats: [
    { label: "Projects", value: "12", change: "Production Deployed" },
    { label: "Automated Systems", value: "24/7", change: "Continuous Uptime" },
  ]
};

export const services = [
  {
    id: "ai-agents",
    title: "Autonomous AI Agents & RAG",
    icon: "Bot",
    description: "Multi-agent autonomous systems powered by OpenAI, Claude, and local LLMs with retrieval-augmented generation (RAG) for internal knowledge access.",
    deliverables: ["Custom LangChain & AutoGen agents", "RAG vector search (Pinecone / Supabase)", "Role-based AI triage & assistants", "Self-critique & validation loops"],
    highlight: "Most Requested"
  },
  {
    id: "workflow-automation",
    title: "Enterprise Workflow Orchestration",
    icon: "GitBranch",
    description: "Complex multi-branch workflows built on n8n and Make.com with comprehensive error handling, fallback logic, and audit trails.",
    deliverables: ["Self-hosted n8n infrastructure", "Webhook-driven real-time pipelines", "Dead-letter queues & error alerting", "High-throughput data transformations"],
    highlight: "Core Expertise"
  },
  {
    id: "api-integrations",
    title: "Custom API & Middleware Development",
    icon: "Code2",
    description: "Custom Python & Node.js microservices connecting legacy systems and non-standard APIs that off-the-shelf tools can't handle.",
    deliverables: ["FastAPI / Express integration endpoints", "OAuth2 & token management", "Batch ETL data loaders", "Secure rate-limited bridges"],
    highlight: "Technical Rigor"
  },
  {
    id: "business-intelligence",
    title: "Automated Reporting & Alerts",
    icon: "BarChart3",
    description: "Executive dashboards and automated digests in Slack, Notion, or Email aggregating KPIs from multiple disparate data sources.",
    deliverables: ["Daily executive digest bots", "Automated anomaly detection alerts", "Airtable / Google Sheets automated models", "Weekly revenue reconciliations"],
    highlight: "Client Favorite"
  },
  {
    id: "audit-strategy",
    title: "Automation Roadmapping & Audits",
    icon: "Compass",
    description: "Comprehensive operational audits to identify bottlenecks, calculate expected ROI, and create an actionable automation roadmap.",
    deliverables: ["Process mapping diagrams", "Cost vs. Benefit ROI model", "Tech stack consolidation plan", "Implementation timeline & specs"],
    highlight: "Strategic"
  }
];

export const interactiveWorkflows = [
  {
    id: "lead-triage",
    name: "AI Lead Qualification & Fast-Track Routing",
    category: "Sales & RevOps",
    description: "Captures inbound demo requests, enriches company data via AI, calculates intent score, and alerts sales reps in Slack within 3 seconds.",
    nodes: [
      { id: "1", title: "Inbound Webhook", type: "trigger", icon: "Webhook", desc: "Form submit received" },
      { id: "2", title: "AI Research & Scoring", type: "ai", icon: "Sparkles", desc: "GPT-4o evaluates ICP & budget" },
      { id: "3", title: "CRM Upsert", type: "action", icon: "Database", desc: "HubSpot contact & deal created" },
      { id: "4", title: "Priority Slack Ping", type: "action", icon: "Bell", desc: "Rep notified with AI summary" },
      { id: "5", title: "Calendar Booking Link", type: "action", icon: "Calendar", desc: "Personalized SMS & email dispatched" }
    ],
    samplePayload: {
      lead: "Sarah Chen, VP Ops at CloudScale",
      budget: "$50,000+",
      aiScore: "96/100 (Tier 1 High Intent)",
      timeToRoute: "2.4 seconds"
    }
  },
  {
    id: "invoice-parser",
    name: "Autonomous Invoice Parser & Xero Reconciliation",
    category: "Finance & Accounting",
    description: "Listens for vendor invoices in Gmail, extracts line-items using Vision AI, cross-checks against Purchase Orders, and stages payment.",
    nodes: [
      { id: "1", title: "Email Attachment Listener", type: "trigger", icon: "Mail", desc: "PDF invoice detected" },
      { id: "2", title: "Vision LLM OCR Extraction", type: "ai", icon: "Eye", desc: "Extracts line items, tax, vendor ID" },
      { id: "3", title: "PO Database Validation", type: "action", icon: "CheckCircle2", desc: "Matches PO number in Postgres" },
      { id: "4", title: "Accounting Software Entry", type: "action", icon: "FileSpreadsheet", desc: "Drafts bill in Xero / QuickBooks" },
      { id: "5", title: "Slack 1-Click Approval", type: "action", icon: "ShieldCheck", desc: "Finance Director approves via button" }
    ],
    samplePayload: {
      vendor: "Acme Logistics Ltd",
      totalAmount: "$8,420.00",
      poMatch: "PO-2026-8819 (Verified)",
      status: "Ready for 1-click CFO approval"
    }
  },
  {
    id: "customer-support-rag",
    name: "Self-Learning RAG Customer Support Swarm",
    category: "Customer Success",
    description: "Resolves 70% of tier-1 support tickets instantly using Pinecone vector search over internal docs, escalating complex queries to humans.",
    nodes: [
      { id: "1", title: "Ticket Created", type: "trigger", icon: "MessageSquare", desc: "Zendesk / Intercom webhook" },
      { id: "2", title: "Vector Embeddings Query", type: "ai", icon: "Cpu", desc: "Pinecone semantic search over docs" },
      { id: "3", title: "Hallucination Guardrail", type: "ai", icon: "ShieldAlert", desc: "Fact-checks answer against sources" },
      { id: "4", title: "Confidence Score Branch", type: "logic", icon: "GitFork", desc: "Score > 88% auto-replies, else routes" },
      { id: "5", title: "Resolution & CSAT Logging", type: "action", icon: "CheckSquare", desc: "Ticket closed or warm-handed to team" }
    ],
    samplePayload: {
      query: "How do I rotate our API keys without downtime?",
      confidence: "94.8%",
      action: "Auto-replied with verified documentation steps",
      resolutionTime: "8 seconds"
    }
  }
];

export const projects = projectsData.projects || [];

export const techStack = [
  { name: "Zapier", category: "Automation Platform", icon: "Zap", proficiency: "Expert", badge: "Advanced" },
  { name: "n8n", category: "Automation Platform", icon: "Workflow", proficiency: "Expert", badge: "Primary Tool" },
  { name: "Make", category: "Automation Platform", icon: "Boxes", proficiency: "Expert", badge: "Certified" },
  { name: "Slack", category: "Communication", icon: "MessageSquare", proficiency: "Expert", badge: "Bot Workflows" },
  { name: "Airtable", category: "Databases", icon: "Table", proficiency: "Expert", badge: "Relational Ops" },
  { name: "ChatGPT", category: "AI & Models", icon: "Sparkles", proficiency: "Expert", badge: "LLM Workflows" },
  { name: "Google Gemini", category: "AI & Models", icon: "Cpu", proficiency: "Expert", badge: "Multimodal AI" },
  { name: "Claude", category: "AI & Models", icon: "Sparkles", proficiency: "Expert", badge: "Reasoning" },
  { name: "REST API's & Webhook", category: "APIs & Webhooks", icon: "Radio", proficiency: "Expert", badge: "Core Protocol" },
  { name: "Supabase", category: "Databases", icon: "Layers", proficiency: "Advanced", badge: "Vector & DB" },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Process Mapping",
    description: "We map your current manual workflows, detect bottlenecks, and quantify the exact hours and dollars an automated solution will save.",
    duration: "Week 1",
    deliverable: "Process Blueprint & Expected ROI Model"
  },
  {
    step: "02",
    title: "Architecture & Data Schema",
    description: "Designing fail-safe system architecture with error logging, rate-limit management, token budgets, and security permissions.",
    duration: "Week 1 - 2",
    deliverable: "Technical Architecture Spec"
  },
  {
    step: "03",
    title: "Build, Prompt Tuning & Edge Testing",
    description: "Developing workflows in n8n/Make/Python, tuning AI system prompts with guardrails, and stress-testing edge cases and bad payloads.",
    duration: "Week 2 - 3",
    deliverable: "Staging Pipeline & Test Reports"
  },
  {
    step: "04",
    title: "Production Deployment & Monitoring",
    description: "Live cutover with automated heartbeat monitoring, dead-letter recovery alerts in Slack, and comprehensive team documentation.",
    duration: "Week 4+",
    deliverable: "Self-Healing Pipeline + Video SOPs"
  }
];

export const testimonials = [
  {
    name: "Alexandre Moreau",
    role: "COO, Nexus Growth Partners",
    content: "Gracel restructured our entire client onboarding pipeline. What used to take our ops team 4 hours per client now happens in 45 seconds without a single dropped record. She's an exceptional automation architect.",
    rating: 5,
    avatar: "AM"
  },
  {
    name: "Elena Rostova",
    role: "Head of Growth, Vektor AI",
    content: "The multi-agent research workflow Gracel built for us completely revolutionized our outbound pipeline. It's rare to find someone who understands both the deep technical side of APIs and the commercial business impact.",
    rating: 5,
    avatar: "ER"
  },
  {
    name: "Marcus Vance",
    role: "Founder, Peak Logistics",
    content: "Our invoice reconciliation was a nightmare until Gracel automated the OCR and ERP integration. The accuracy is 99%+ and the ROI paid for the entire engagement within the first 30 days.",
    rating: 5,
    avatar: "MV"
  }
];
