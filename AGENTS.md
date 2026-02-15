# Kabbalah Guy Agent Instructions (AGENTS.md)

## Mission
Build and grow the “Kabbalah Guy” brand via:
1) A high-quality website featuring a Kabbalah-based Journey Map with lesson pages.
2) Social content (X + YouTube) that provides real value and drives traffic back to the site.
3) A primary CTA: signup for “Daily Kabbalah Life Tip” email.

## Primary CTA
Every core page and most social posts should drive toward:
- “Get the Daily Kabbalah Life Tip” email signup
Secondary CTAs:
- Read the next Journey step
- Watch the related YouTube video
- Follow on X

## Voice & Content Style
- Tone: warm, grounded, practical, modern.
- Goal: make Kabbalah actionable for daily life.
- Avoid: fear-based messaging, guaranteed outcomes, medical/financial claims.
- Always: include a simple practice or reflection prompt when possible.
- Keep lessons beginner-friendly; define terms briefly.

## Website Requirements
- Tech: Next.js (App Router), MDX content, Tailwind.
- Core pages:
  - Home (what this is, how it helps emphasize practical growth, CTA)
  - Journey Map (overview of stages + clickable steps)
  - Lesson Page template (principle, story/teaching, practice, reflection, CTA)
  - About
  - Subscribe (dedicated landing page for daily tips)
- SEO:
  - page titles, descriptions, OG tags
  - sitemap + robots.txt
- Analytics-ready (event hooks for CTA clicks)

## Journey Map Content Model
Each lesson should include:
- title
- stage (string)
- principle (1–2 sentences)
- teaching (short, clear explanation)
- practice (1 small action)
- reflection (2–4 questions)
- CTA module:
  - email signup
  - link to next lesson
  - optional: related YouTube embed

## Social Content System
Generate:
- X: threads + short posts
- YouTube: titles + descriptions + script outlines
Rules:
- Value-first: teach something concrete.
- Include CTA to a relevant lesson URL or /subscribe.
- Use consistent UTM tags in links.

## Engineering Workflow
- Make small PRs.
- Add README instructions to run locally.
- Keep dependencies minimal.
- Add basic lint/typecheck.
- If a design decision is unclear, choose the simplest, cleanest option.
