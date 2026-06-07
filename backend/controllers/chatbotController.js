const OpenAI = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SYSTEM_PROMPT = `You are Nova, the AI assistant for NovaTech Solutions — a premium digital agency.

Services: Web Development, Mobile Apps (Android/iOS/Flutter), Software Solutions (ERP/CRM), AI Integration, Tech Support (24/7), Digital Marketing (SEO/Ads), Social Media Marketing, Cloud Services.

Key facts:
- 5+ years experience, 50+ projects, 98% client satisfaction
- Pricing: websites from $500, mobile apps from $2000, enterprise software from $5000
- Free 30-min consultation available
- Hiring: Frontend Dev, Backend Dev, Flutter Dev, UI/UX Designer, Digital Marketing Exec
- Contact: hello@novatechsolutions.com

Be helpful, concise (2-4 sentences), and friendly. Encourage contacting the team for custom quotes.`;

exports.chat = async (req, res) => {
  try {
    const { message, history = [] } = req.body;
    if (!message?.trim())
      return res.status(400).json({ success: false, message: 'Message is required.' });

    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...history.slice(-10),
      { role: 'user', content: message }
    ];

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
      max_tokens: 300,
      temperature: 0.7
    });

    res.json({ success: true, reply: response.choices[0].message.content });
  } catch (err) {
    // Fallback when OpenAI is unavailable
    res.json({ success: true, reply: "Thanks for your message! Our team will get back to you soon. Feel free to email us at hello@novatechsolutions.com 😊" });
  }
};
