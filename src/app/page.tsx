"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplitLarge from '@/components/sections/hero/HeroSplitLarge';
import SplitAboutCards from '@/components/sections/about/SplitAboutCards';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBaseSocial from '@/components/sections/footer/FooterBaseSocial';
import { Facebook, Instagram, Leaf, Phone, Sprout, Twitter } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="smallSizeLargeTitles"
      background="grid"
      cardStyle="solid"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      headingFontWeight={undefined}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Loquaci Farms"
          navItems={[
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Why Us", id: "features" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get Fresh Produce",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitLarge
          title="Fresh Farm-to-Table Produce from Carson Loquaci"
          description="Experience the finest quality organic vegetables grown with passion and sustainable farming practices. Direct from our family farm to your table."
          tag="Premium Sustainable Farming"
          tagIcon={Sprout}
          buttons={[
            { text: "Shop Now", href: "products" },
            { text: "Learn More", href: "about" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764883513121-tg41cy3c.jpg"
          imageAlt="Beautiful farm field at sunrise"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAboutCards
          title="About Carson Loquaci Farms"
          description="With over 20 years of experience in agriculture, Carson Loquaci is committed to providing the highest quality organic produce. Our farm uses sustainable farming practices to ensure both environmental responsibility and nutritional excellence."
          tag="Our Story"
          features={[
            {
              id: "sustainability",
              title: "Sustainable Practices",
              description: "We prioritize soil health and environmental conservation through organic farming methods and crop rotation.",
              label: "100% Organic"
            },
            {
              id: "quality",
              title: "Premium Quality",
              description: "Every vegetable is hand-selected and harvested at peak ripeness for maximum flavor and nutritional value.",
              label: "Farm Fresh"
            }
          ]}
          buttons={[
            { text: "Discover Our Story", href: "contact" }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardFour
          title="Our Featured Harvest"
          description="Freshly harvested organic vegetables delivered with care. Each product is selected for quality and ripeness."
          tag="Farm Fresh"
          tagIcon={Leaf}
          products={[
            {
              id: "tomatoes",
              name: "Heirloom Tomatoes",
              price: "$5.99",
              variant: "Red, Beefsteak, Cherry",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764883514605-f8znlsnm.jpg",
              imageAlt: "Fresh heirloom tomatoes"
            },
            {
              id: "lettuce",
              name: "Organic Lettuce Mix",
              price: "$4.49",
              variant: "Romaine, Spinach, Arugula",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764883516818-w9hgmntb.jpg",
              imageAlt: "Fresh organic lettuce"
            },
            {
              id: "peppers",
              name: "Colorful Bell Peppers",
              price: "$6.99",
              variant: "Red, Yellow, Green, Orange",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764883515412-nnr7y5sm.jpg",
              imageAlt: "Colorful fresh peppers"
            },
            {
              id: "carrots",
              name: "Sweet Carrots",
              price: "$3.99",
              variant: "Orange, Purple, Yellow",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764883516122-d1t3c7sk.jpg",
              imageAlt: "Fresh sweet carrots"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNine
          title="Why Choose Loquaci Farms"
          description="Experience the difference that sustainable, quality farming makes"
          features={[
            {
              id: 1,
              title: "Sustainable Farming",
              description: "We use eco-friendly practices that protect the soil and environment for future generations",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764883515412-nnr7y5sm.jpg",
                imageAlt: "Sustainable farming - Phone 1"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764883516122-d1t3c7sk.jpg",
                imageAlt: "Sustainable farming - Phone 2"
              }
            },
            {
              id: 2,
              title: "Direct from Farm",
              description: "Get produce directly from our farm, ensuring maximum freshness and nutritional value",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764883514605-f8znlsnm.jpg",
                imageAlt: "Direct from Farm - Phone 1"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764883516818-w9hgmntb.jpg",
                imageAlt: "Direct from Farm - Phone 2"
              }
            }
          ]}
          showStepNumbers={false}
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Carson's produce is absolutely incredible. The freshness and quality are unmatched. We've noticed a real difference in our cooking and our family's health since we started buying from Loquaci Farms."
          rating={5}
          author="Michelle Rodriguez, Home Chef"
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764883517548-app42f76.jpg",
              alt: "Michelle Rodriguez"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764883518043-2w166pzb.jpg",
              alt: "David Chen"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764883518695-ur5xcz0h.jpg",
              alt: "Sarah Mitchell"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764883519593-c05327to.jpg",
              alt: "James Wilson"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Ready to Experience Fresh Farm Produce"
          ctaDescription="Connect with us to place your order or learn more about our farming practices."
          ctaButton={{
            text: "Contact Us Today",
            href: "mailto:hello@loquacifarms.com"
          }}
          ctaIcon={Phone}
          faqs={[
            {
              id: "1",
              title: "When can I place orders?",
              content: "Orders can be placed throughout the week for weekend delivery. We offer flexible pickup and delivery options to suit your schedule."
            },
            {
              id: "2",
              title: "Are your products certified organic?",
              content: "Yes, all our produce is grown using certified organic methods without synthetic pesticides or fertilizers."
            },
            {
              id: "3",
              title: "What areas do you deliver to?",
              content: "We currently deliver to the surrounding region. Contact us directly to confirm delivery availability for your area."
            },
            {
              id: "4",
              title: "How do you ensure freshness?",
              content: "All produce is harvested the day before delivery and stored in optimal conditions to maintain peak freshness and quality."
            }
          ]}
          useInvertedBackground="noInvert"
          animationType="slide-up"
          accordionAnimationType="smooth"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseSocial
          description="Providing premium organic produce from our family farm to your table. Committed to sustainable farming and quality."
          logoText="Loquaci Farms"
          copyrightText="© 2025 Carson Loquaci Farms. All rights reserved."
          columns={[
            {
              title: "Quick Links",
              items: [
                { label: "Home", href: "hero" },
                { label: "About", href: "about" },
                { label: "Products", href: "products" }
              ]
            },
            {
              title: "Information",
              items: [
                { label: "Contact", href: "contact" },
                { label: "Terms of Service", href: "#terms" },
                { label: "Privacy Policy", href: "#privacy" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}