const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateResumeSummary = async (userData) => {
  try {
    const { education, experience, skills, projects, internships } = userData;

    const prompt = `Generate a professional resume summary (2-3 sentences) for a candidate with the following background:

Education: ${education.map(e => `${e.degree} in ${e.fieldOfStudy} from ${e.institution}`).join(', ')}
Experience: ${experience.map(e => `${e.position} at ${e.company}`).join(', ')}
Skills: ${skills.map(s => s.name).join(', ')}
Projects: ${projects.map(p => p.title).join(', ')}
Internships: ${internships.map(i => `${i.role} at ${i.company}`).join(', ')}

Create a compelling, professional summary that highlights their strengths and career focus.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a professional resume writer. Create concise, impactful resume summaries.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 150,
      temperature: 0.7,
    });

    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error('AI Service Error:', error);
    throw new Error('Failed to generate AI summary');
  }
};

const enhanceProjectDescription = async (projectTitle, technologies) => {
  try {
    const prompt = `Write a brief, professional description (1-2 sentences) for a project titled "${projectTitle}" that uses these technologies: ${technologies.join(', ')}.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 100,
      temperature: 0.7,
    });

    return completion.choices[0].message.content.trim();
  } catch (error) {
    console.error('AI Service Error:', error);
    throw new Error('Failed to enhance description');
  }
};

module.exports = {
  generateResumeSummary,
  enhanceProjectDescription
};