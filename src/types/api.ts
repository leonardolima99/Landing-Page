export type ImageProps = {
  alternativeText: string
  url: string
}

export type ButtonProps = {
  label: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: ButtonProps
  image: ImageProps
}

export type AboutProjectsProps = {
  title: string
  description: string
  image: ImageProps
}

export type TechIconsProps = {
  title: string
  icon: ImageProps
}

export type TechsProps = {
  title: string
  techIcons: [TechIconsProps]
}

export type ConceptsProps = {
  title: string
  concepts: {
    title: string
  }[]
}

export type ModulesProps = {
  title: string
  modules: {
    title: string
    subtitle: string
    description: string
  }[]
}

export type AgendaProps = {
  title: string
  description: string
}

export type PricingProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: {
    text: string
  }[]
  button: ButtonProps
}

export type SocialLinksProps = {
  title: string
  url: string
}

export type AuthorsProps = {
  photo: ImageProps
  name: string
  role: string
  socialLinks: [SocialLinksProps]
  description: string
}

export type AboutUsProps = {
  title: string
  authors: [AuthorsProps]
}

export type ReviewsProps = {
  title: string
  reviews: {
    name: string
    text: string
    photo: ImageProps
  }[]
}

export type FaqProps = {
  title: string
  questions: {
    question: string
    answer: string
  }[]
}
export type LandingPageProps = {
  logo: ImageProps
  header: HeaderProps
  aboutProjects: AboutProjectsProps
  techs: TechsProps
  concepts: ConceptsProps
  modules: ModulesProps
  agenda: AgendaProps
  pricing: PricingProps
  aboutUs: AboutUsProps
  reviews: ReviewsProps
  faq: FaqProps
}
