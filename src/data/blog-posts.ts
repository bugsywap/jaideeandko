export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "psychology-of-video-catchiness",
    title: "The Psychology of Video Catchiness: How to Stop the Scroll",
    excerpt: "Why do some videos grab attention in 3 seconds while others are ignored? We dive into the science of visual patterns and storytelling hooks.",
    content: `
      <h2>The Critical 3-Second Window</h2>
      <p>In the digital age, attention is the most valuable currency. For brands, capturing that attention in the first three seconds isn't just a goal—it's the foundation of ROI. If you can't stop the scroll, the rest of your message is invisible.</p>
      
      <p>Research indicates that the average human attention span on social media has narrowed significantly. You have precisely three seconds to communicate value, spark emotion, or trigger curiosity. This is the "Hook Phase," and it dictates the success of your entire campaign.</p>
      
      <h2>Visual Patterns that Disrupt</h2>
      <p>Our brains are biologically wired to recognize patterns, but they are even more attuned to <strong>pattern interruptions</strong>. High-contrast color palettes, unexpected camera movement, or a close-up of a human face showing intense emotion are timeless hooks that still dominate today's algorithms.</p>
      
      <p>When we design social content at Jaidee & Ko, we prioritize "Visual Gravity." This means placing the most compelling element not just at the start, but in the center of the frame where the eye naturally rests during a scroll.</p>
      
      <h2>The Power of the "Open Loop"</h2>
      <p>One of the most sophisticated storytelling techniques is the "Open Loop." By presenting a question or a mysterious situation at the very start—without immediate resolution—you create a psychological tension. The human brain naturally seeks closure, compelling the viewer to stay until the very end to "close the loop."</p>
      
      <h2>Strategic Conclusion</h2>
      <p>True "catchiness" isn't about being the loudest in the room; it's about being the most strategically disruptive. By mastering these psychological triggers, brands can transition from being a fleeting glance to a lasting memory.</p>
    `,
    date: "March 15, 2024",
    author: "Jaidee & Ko Team",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1492691523567-6119201a3fa3?auto=format&fit=crop&q=80&w=1200",
    readTime: "5 min read"
  },
  {
    slug: "b2b-video-marketing-beyond-testimonials",
    title: "B2B Video Marketing 101: Moving Beyond Corporate Testimonials",
    excerpt: "Corporate testimonials are great, but they aren't enough. Learn how to create strategic video content that moves leads through your pipeline.",
    content: `
      <h2>The Evolution of B2B Storytelling</h2>
      <p>For decades, the "talking head" testimonial was the undisputed king of B2B video marketing. While social proof remains vital, modern buyers—especially in the tech and NGO sectors—crave something deeper. They seek authority, clarity, and a vision ellos can align with.</p>
      
      <p>Today's B2B decision-makers are more informed than ever. They don't just want to know that your service works; they want to see it in action, understand its nuances, and see themselves reflected in the success stories you share.</p>
      
      <h2>The Three Pillars of Strategic Content</h2>
      <ul>
        <li><strong>Authority Content:</strong> Deep-dives into industry trends, founder stories, and "how-it-works" explainers that position your brand as a thought leader.</li>
        <li><strong>Empathy Content:</strong> Content that directly addresses the specific, often unvoiced, pain points of your target audience through relatable scenarios.</li>
        <li><strong>Proof Content:</strong> Moving beyond the simple quote—interactive case studies that showcase data, workflow, and measurable real-world impact.</li>
      </ul>
      
      <h2>Surgical Distribution</h2>
      <p>Creating a masterpiece is only half the battle. In the B2B world, distribution must be surgical. While LinkedIn is the primary engine, integrating video into personalized outreach or high-intent help documentation can significantly accelerate your sales cycle.</p>
      
      <h2>Final Thoughts</h2>
      <p>B2B marketing is becoming more personal, more visual, and infinitely more direct. If your video strategy is still stuck in the era of generic corporate presentations, it's time for an evolution. Connect with your audience where they are: in the moment of discovery.</p>
    `,
    date: "March 10, 2024",
    author: "Jaidee & Ko Team",
    category: "B2B Marketing",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200",
    readTime: "7 min read"
  }
];
