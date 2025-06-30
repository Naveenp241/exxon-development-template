
import Carousel from './Carousel';
import './carousel.css'; 
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Molecules/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Carousel> ;

export default meta;

type Story = StoryObj<typeof Carousel>;
const slides = [{
  surfacedItemType: "card",
  imageSrc: {
    url: 'https://corporate.exxonmobil.com/dfsmedia/203ddbf073b24e7dac6f6243dabf7669/58493-50059/resize/2048x4096/options/keepaspectratio/holding-hands-article-landscape-169-2880-x-1620'
  },
  title: 'Respecting human rights',
  description: 'Our commitment to respecting human rights is embedded throughout our corporate policies, practices and expectations. We’re guided by the goals of universally recognized human rights principles as we identify and mitigate the potential impacts of our activities.',
  label: 'Learn about our commitment to respecting human rights ', 
  href: 'https://corporate.exxonmobil.com/sustainability-and-reports/sustainability/safeguarding-people/respecting-human-rights'
},
{
  surfacedItemType: "card",
  imageSrc: {
    url: 'https://corporate.exxonmobil.com/dfsmedia/203ddbf073b24e7dac6f6243dabf7669/55452-50059/resize/2048x4096/options/keepaspectratio/png-youth-in-classroom-topic-banner-landscape-169-2880-x-1620'
  },
  title: 'Managing socioeconomic impacts',
  description: 'The key socioeconomic elements of our integrated approach include: identification and assessment of potential impacts and benefits; human rights; community engagement and grievance management; community health, safety and security; local economic development; land use, resettlement and livelihood restoration; cultural heritage; and Indigenous peoples.',
  label: 'Details', 
  href: '/en/rewards-program'
},
{
  surfacedItemType: "card",
  imageSrc: {
    url: 'https://corporate.exxonmobil.com/dfsmedia/203ddbf073b24e7dac6f6243dabf7669/133664-50059/resize/2048x4096/options/keepaspectratio/dsc00105-4234-x-2382-landscape-169-2880-x-1620'
  },
  title: 'Working with suppliers',
  description: 'Our core value of Care doesn’t stop at our door. Our suppliers of goods and services all have a role to play in how we work to Protect Tomorrow. Today.',
  label: 'Learn about how ExxonMobil works with our suppliers', 
  href: 'https://corporate.exxonmobil.com/sustainability-and-reports/sustainability/safeguarding-people/working-with-suppliers'
},
{
  surfacedItemType: "card",
  imageSrc: {
    url: 'https://corporate.exxonmobil.com/dfsmedia/203ddbf073b24e7dac6f6243dabf7669/55452-50059/resize/2048x4096/options/keepaspectratio/png-youth-in-classroom-topic-banner-landscape-169-2880-x-1620'
  },
  title: 'Managing socioeconomic impacts',
  description: 'The key socioeconomic elements of our integrated approach include: identification and assessment of potential impacts and benefits; human rights; community engagement and grievance management; community health, safety and security; local economic development; land use, resettlement and livelihood restoration; cultural heritage; and Indigenous peoples.',
  label: 'Details', 
  href: '/en/rewards-program'
},
{
  surfacedItemType: "card",
  imageSrc: {
    url: 'https://corporate.exxonmobil.com/dfsmedia/203ddbf073b24e7dac6f6243dabf7669/133664-50059/resize/2048x4096/options/keepaspectratio/dsc00105-4234-x-2382-landscape-169-2880-x-1620'
  },
  title: 'Working with suppliers',
  description: 'Our core value of Care doesn’t stop at our door. Our suppliers of goods and services all have a role to play in how we work to Protect Tomorrow. Today.',
  label: 'Learn about how ExxonMobil works with our suppliers', 
  href: 'https://corporate.exxonmobil.com/sustainability-and-reports/sustainability/safeguarding-people/working-with-suppliers'
}
];

const slides2 = [{
  surfacedItemType: "card",
  imageSrc: {
    url: 'https://corporate.exxonmobil.com/dfsmedia/203ddbf073b24e7dac6f6243dabf7669/58493-50059/resize/2048x4096/options/keepaspectratio/holding-hands-article-landscape-169-2880-x-1620'
  },
  title: 'Respecting human rights',
  description: 'Our commitment to respecting human rights is embedded throughout our corporate policies, practices and expectations. We’re guided by the goals of universally recognized human rights principles as we identify and mitigate the potential impacts of our activities.',
  label: 'Learn about our commitment to respecting human rights ', 
  href: 'https://corporate.exxonmobil.com/sustainability-and-reports/sustainability/safeguarding-people/respecting-human-rights',
  indicatorContent:'slide 1'
},
{
  surfacedItemType: "card",
  imageSrc: {
    url: 'https://corporate.exxonmobil.com/dfsmedia/203ddbf073b24e7dac6f6243dabf7669/55452-50059/resize/2048x4096/options/keepaspectratio/png-youth-in-classroom-topic-banner-landscape-169-2880-x-1620'
  },
  title: 'Managing socioeconomic impacts',
  description: 'The key socioeconomic elements of our integrated approach include: identification and assessment of potential impacts and benefits; human rights; community engagement and grievance management; community health, safety and security; local economic development; land use, resettlement and livelihood restoration; cultural heritage; and Indigenous peoples.',
  label: 'Details', 
  href: '/en/rewards-program',
  indicatorContent:'slide 2'
},
{
  surfacedItemType: "card",
  imageSrc: {
    url: 'https://corporate.exxonmobil.com/dfsmedia/203ddbf073b24e7dac6f6243dabf7669/133664-50059/resize/2048x4096/options/keepaspectratio/dsc00105-4234-x-2382-landscape-169-2880-x-1620'
  },
  title: 'Working with suppliers',
  description: 'Our core value of Care doesn’t stop at our door. Our suppliers of goods and services all have a role to play in how we work to Protect Tomorrow. Today.',
  label: 'Learn about how ExxonMobil works with our suppliers', 
  href: 'https://corporate.exxonmobil.com/sustainability-and-reports/sustainability/safeguarding-people/working-with-suppliers',
  indicatorContent:'slide 3'
},
{
  surfacedItemType: "card",
  imageSrc: {
    url: 'https://corporate.exxonmobil.com/dfsmedia/203ddbf073b24e7dac6f6243dabf7669/55452-50059/resize/2048x4096/options/keepaspectratio/png-youth-in-classroom-topic-banner-landscape-169-2880-x-1620'
  },
  title: 'Managing socioeconomic impacts',
  description: 'The key socioeconomic elements of our integrated approach include: identification and assessment of potential impacts and benefits; human rights; community engagement and grievance management; community health, safety and security; local economic development; land use, resettlement and livelihood restoration; cultural heritage; and Indigenous peoples.',
  label: 'Details', 
  href: '/en/rewards-program',
  indicatorContent:'slide 4'
},
{
  surfacedItemType: "card",
  imageSrc: {
    url: 'https://corporate.exxonmobil.com/dfsmedia/203ddbf073b24e7dac6f6243dabf7669/133664-50059/resize/2048x4096/options/keepaspectratio/dsc00105-4234-x-2382-landscape-169-2880-x-1620'
  },
  title: 'Working with suppliers',
  description: 'Our core value of Care doesn’t stop at our door. Our suppliers of goods and services all have a role to play in how we work to Protect Tomorrow. Today.',
  label: 'Learn about how ExxonMobil works with our suppliers', 
  href: 'https://corporate.exxonmobil.com/sustainability-and-reports/sustainability/safeguarding-people/working-with-suppliers',
  indicatorContent:'slide 5'
}
];

export const CarouselVariant1: Story = {
  args: {
    slides: slides,
    options: {
      loop: true,
      align: 'start',
    },
    slidesToShow: 1,
    dotsVariant: 'v1'
  },
};

export const CarouselVariant2: Story = {
  args: {
    slides: slides,
    options: {
      loop: true,
      align: 'start',
    },
    slidesToShow: 1,
    dotsVariant: 'v2'
  },
};

export const CarouselVariant3: Story = {
  args: {
    slides: slides2,
    options: {
      loop: true,
      align: 'start',
    },
    slidesToShow: 1,
    dotsVariant: 'v3',
    enableIndicatorContent: true,
    floatContent: true
  },
};