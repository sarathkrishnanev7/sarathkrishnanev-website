export const site = {
  name: 'Sarath Krishnan',
  title: 'Sarath Krishnan — Systems, Product & Operations',
  description:
    'Personal website of Sarath Krishnan. Writing about systems, product, incentives and the messy realities of scale.',
  url: 'https://sarathkrishnanev-website.vercel.app',
  email: 'sarathkrishnanev7@gmail.com',
  location: 'India',
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Notes', href: '/blog' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
] as const;

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sarath-krishnan-ba5b8168/' },
] as const;