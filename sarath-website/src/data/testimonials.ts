
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  relationship: string;
  knownSince: string;
  linkedin: string;
  photo: string;
}



export const testimonials: Testimonial[] = [

{
  quote:
    'I saw Sarath join Olam fresh out of business school and take on responsibilities that would normally be given to someone with much more experience. He quickly developed the ability to work across business and technology teams, earning trust through his ownership and willingness to learn. What impressed me most was how comfortable he became operating in ambiguity. He brought structure to complex problems and remained focused on execution even when projects encountered challenges in scoping, infrastructure and engineering.',
  author: 'Swaytha Rajagopalan',
  role: 'Associate Director, Product Management',
  company: 'EY',
  relationship: 'Mentored me during my first year at Olam.',
  knownSince: '2019',
  linkedin: 'https://linkedin.com/in/swaytharajagopalan',
  photo: '/images/testimonials/swaytha.jpeg',
},

{ quote: 'I managed Sarath while he was working on digitising warehouse operations and standardising processes across geographies, helping create scalable templates for adoption across the business. What stood out was his ability to navigate ambiguity, work across functions and keep execution moving while balancing operational realities with technology considerations.', 
    author: 'Deepak Kaul', 
    role: 'Head Food & Beverage Solutions - EMEAI', 
    company: 'ofi', 
    relationship: 'Managed me while I led digital transformation initiatives across the coffee business.', 
    knownSince: '2021', 
    linkedin: 'https://linkedin.com/in/deepak-kaul-5221725', 
    photo: '/images/testimonials/deepak.jpeg', 
  },

{
  quote:
    'I have known Sarath for over a decade and worked closely with him as part of Katha\'s core team. He was often the person asking whether we were solving the right problem - I frequently relied on him to challenge whether we were measuring the right metrics and focusing on KPIs that actually mattered. He has a knack for understanding the context behind the data rather than reacting to the numbers alone, which helped us make better decisions as we scaled.',
  author: 'Ishan M',
  role: 'Founder & CEO',
  company: 'Katha Ads',
  relationship: 'Friends since 2009 and later worked together as part of Katha\'s core team.',
  knownSince: '2009',
  linkedin: 'https://linkedin.com/in/inu8421',
  photo: '/images/testimonials/ishan.jpeg',
},


{
  quote:
    'One thing I appreciated about working with Sarath was his ability to understand both the business problem and the technical constraints behind it. He relied on data to guide decisions and build alignment, but was always open to looking at more relevant data. He also understood that numbers do not tell the whole story. He consistently brought user context and on-ground realities into discussions, and helped Katha make better product decisions.',
  author: 'Harsh Vardhan Sharma',
  role: 'Co-Founder & CTO',
  company: 'Katha Ads',
  relationship: 'Worked closely with me on product, operations and technology decisions while scaling Katha.',
  knownSince: '2022',
  linkedin: 'https://linkedin.com/in/harsh-vardhan-sharma-06a4049a',
  photo: '/images/testimonials/harsh.jpeg',
},


{
  quote:
    'As someone responsible for driving adoption of Olam Direct across different origins, I valued how early Sarath involved himself in business discussions. He was genuinely curious about the operational challenges teams were facing and worked hard to understand them before proposing solutions. That approach helped build trust with stakeholders and made it easier for teams to see technology as an enabler rather than something being imposed on them.',
  author: 'Priyank Pradeep',
  role: 'CEO & Owner',
  company: 'Codrin Group',
  relationship: 'Worked closely with me on digital origination initiatives across multiple geographies.',
  knownSince: '2019',
  linkedin: 'https://linkedin.com/in/priyank-pradeep-707590a',
  photo: '/images/testimonials/priyank.jpeg',
},



  
];
