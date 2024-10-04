---
type: PageLayout
title: Home
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/bg1.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 75
sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    title: >-
      Hey, I'm your techie neighbor, and i am ready to work to make your digital
      life easier and more secure.
    subtitle: >-
      I am an accomplished and hardworking IT professional who is also
      undertaking the task of assisting my neighbors with their technical needs,
      both large and small! 
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-14
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: HeroSection
    actions: []
    text: >
      From homes to small businesses, The Techie Neighbor can assist you with
      all aspects of networking, security, hardware and software
      troubleshooting, and more!
  - type: DividerSection
    title: Divider
    elementId: ''
    styles:
      self:
        width: full
        padding:
          - pt-4
          - pb-4
        justifyContent: center
        borderWidth: 1
        borderStyle: solid
  - type: CtaSection
    title: Let's do this
    text: |
      My services can be purchased and reserved through the following sites:
    actions:
      - type: Button
        label: Fiverr
        altText: ''
        url: 'https://www.fiverr.com/techieneighbor'
        showIcon: true
        icon: cart
        iconPosition: right
        style: primary
        elementId: ''
      - type: Button
        label: Thumbtack
        altText: ''
        url: >-
          https://www.thumbtack.com/ga/suwanee/router-setup-install-and-repair/techieneighbor-llc/service/527544422781173783?utm_medium=web&utm_source=txt&surface=sp&referrer_pk=527544422486859801
        showIcon: true
        icon: cart
        iconPosition: right
        style: primary
        elementId: ''
    colors: colors-f
    backgroundSize: full
    elementId: ''
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-12
          - pb-28
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - type: ContactSection
    title: Contact Me
    text: |
      I can't wait to talk shop!
    form:
      type: FormBlock
      title: contact
      fields:
        - type: TextFormControl
          name: name
          label: name
          hideLabel: true
          placeholder: Your name
          width: 1/2
          isRequired: 'true'
        - type: EmailFormControl
          name: email
          label: name
          hideLabel: true
          placeholder: Your email
          width: 1/2
          isRequired: 'true'
        - type: TextareaFormControl
          name: message
          label: Tell me about your project
          hideLabel: true
          placeholder: Tell me about your project
          width: full
          isRequired: true
      submitLabel: Send Message
      elementId: contact
      styles:
        submitLabel:
          textAlign: left
    colors: colors-f
    backgroundSize: full
    elementId: form
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-28
          - pb-36
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: center
      text:
        textAlign: center
metaTags: []
metaDescription: Suwanee IT Small Business Computer Repair Troubleshooting
---
