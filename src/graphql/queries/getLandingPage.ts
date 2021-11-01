const GET_LANDING_PAGE = /* GraphQL */ `
  fragment imageData on UploadFile {
    alternativeText
    url
  }

  fragment logo on LandingPage {
    logo {
      ...imageData
    }
  }

  fragment button on ComponentPageButton {
    label
    url
  }

  fragment header on LandingPage {
    header {
      title
      description
      button {
        ...button
      }
      image {
        ...imageData
      }
    }
  }

  fragment aboutProjects on LandingPage {
    aboutProjects: sectionAboutProject {
      title
      description
      image {
        ...imageData
      }
    }
  }

  fragment techs on LandingPage {
    techs: sectionTech {
      title
      techIcons {
        title
        icon {
          ...imageData
        }
      }
    }
  }

  fragment concepts on LandingPage {
    concepts: sectionConcepts {
      title
      concepts {
        title
      }
    }
  }

  fragment modules on LandingPage {
    modules: sectionModules {
      title
      modules {
        title
        subtitle
        description
      }
    }
  }

  fragment agenda on LandingPage {
    agenda: sectionAgenda {
      title
      description
    }
  }

  fragment pricing on LandingPage {
    pricing: pricingBox {
      totalPrice
      numberInstallments
      priceInstallment
      benefits {
        text
      }
      button {
        ...button
      }
    }
  }

  fragment aboutUs on LandingPage {
    aboutUs: sectionAboutUs {
      title
      authors {
        photo {
          ...imageData
        }
        name
        role
        socialLinks {
          title
          url
        }
        description
      }
    }
  }

  fragment reviews on LandingPage {
    reviews: sectionReviews {
      title
      reviews {
        name
        text
        photo {
          ...imageData
        }
      }
    }
  }

  fragment faq on LandingPage {
    faq: sectionFaq {
      title
      questions {
        question
        answer
      }
    }
  }

  query GET_LANDING_PAGE {
    landingPage {
      ...logo
      ...header
      ...aboutProjects
      ...techs
      ...concepts
      ...modules
      ...agenda
      ...pricing
      ...aboutUs
      ...reviews
      ...faq
    }
  }
`

export default GET_LANDING_PAGE
