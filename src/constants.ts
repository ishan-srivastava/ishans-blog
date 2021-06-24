export interface Blog {
  title: string;
  link: string;
  banner: string;
  date: string;
}

export const Blogs: Blog[] = [
  {
    title: "Javascript engine : you beauty.",
    link: "https://dev.to/ishansrivastava/javascript-engine-you-beauty-52ko",
    date: "20 Jun 2020",
    banner:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--dVTbGIfh--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/t18z3kvk0hnis13penfy.jpg",
  },
  {
    title: "Javascript modules, why?",
    link: "https://dev.to/ishansrivastava/javascript-modules-why-28gh",
    date: "26 May 2020 ",
    banner:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--IeZ6C0QK--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/vr1yv596gq3mqmrmejao.jpg",
  },
];
