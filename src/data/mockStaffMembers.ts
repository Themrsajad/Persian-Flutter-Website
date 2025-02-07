import type { Member } from '~/types';
import avatar1 from '~/assets/images/avatar/sample-avatar-1.png';
import avatar2 from '~/assets/images/avatar/sample-avatar-2.png';
import avatar3 from '~/assets/images/avatar/sample-avatar-3.png';
import avatar4 from '~/assets/images/avatar/sample-avatar-4.png';
import bigImage from '~/assets/images/bigImage.png';

export const staffMembers: Member[] = [
  // lastNames, jobTitles, aboutMe, bigImage, skills, favorites, contact should be edited.
  // socials should be added.
  {
    slug: 'amir', // /members/[slug]
    firstName: 'امیر',
    lastName: 'نام خانوادگی',
    jobTitle: 'عنوان شغلی', //توسعه دهنده ارشد فلاتر مثلا
    pfTitle: 'توسعه‌دهنده ارشد و مشاور فنی',
    description: 'امیر با تخصص عمیق در فلاتر، راهنمای فنی پروژه‌های پیچیده و چالش‌برانگیز است',
    aboutMe: 'امیر با تخصص عمیق در فلاتر، راهنمای فنی پروژه‌های پیچیده و چالش‌برانگیز است', // توضیحات و درباره من که در صفحه شخصی قرار میگیرد
    image: { src: avatar1, alt: 'امیر' },
    bigImage: { src: bigImage, alt: 'امیر' }, // عکس بزرگ که در صفحه شخصی قرار میگیرد
    skills: [
      // بخش تخصص های من
      'توسعه نرم‌افزارهای فلاتری و موبایل',
      'طراحی سایت‌های استاتیک با  Astro',
      'ساخت و طراحی اپلیکیشن‌های Embedded',
      ' پروژه‌های DIY',
      '  مباحث مربوط به خانه هوشمند و  Home Assistant',
      'کار با مدل‌های هوش مصنوعی و تجربه استفاده از آن‌ها ',
    ],
    // بخش علاقه مندی ها
    favorites:
      'به پروژه‌ها و منابع  Open Source علاقه زیادی دارم، به همین دلیل در بخش Open Source جامعه فلاتر فارسی فعال هستم.  ',
    // بخش ارتباط با من
    contact:
      'لینک شبکه‌های اجتماعی من را می‌توانید توی این صفحه پیدا کنید. اگر سؤالی دارید یا فکر می‌کنید میتونم توی زمینه خاصی بهتون کمکی کنم، فقط کافیه هر جایی که راحتیت به من پیام بدید!',
  },

  {
    slug: 'sara',
    firstName: 'سارا',
    lastName: 'نام خانوادگی',
    jobTitle: 'عنوان شغلی',
    pfTitle: 'مسئول آموزش و منتورینگ',
    description: 'سارا با تجربه غنی در آموزش، مسیر یادگیری را برای اعضای جامعه هموار می‌کند',
    aboutMe: 'سارا با تجربه غنی در آموزش، مسیر یادگیری را برای اعضای جامعه هموار می‌کند',
    image: { src: avatar2, alt: 'سارا' },
    bigImage: { src: bigImage, alt: 'سارا' },
    skills: [
      'توسعه نرم‌افزارهای فلاتری و موبایل',
      'طراحی سایت‌های استاتیک با  Astro',
      'ساخت و طراحی اپلیکیشن‌های Embedded',
      ' پروژه‌های DIY',
      '  مباحث مربوط به خانه هوشمند و  Home Assistant',
      'کار با مدل‌های هوش مصنوعی و تجربه استفاده از آن‌ها ',
    ],
    favorites:
      'به پروژه‌ها و منابع  Open Source علاقه زیادی دارم، به همین دلیل در بخش Open Source جامعه فلاتر فارسی فعال هستم.  ',
    contact:
      'لینک شبکه‌های اجتماعی من را می‌توانید توی این صفحه پیدا کنید. اگر سؤالی دارید یا فکر می‌کنید میتونم توی زمینه خاصی بهتون کمکی کنم، فقط کافیه هر جایی که راحتیت به من پیام بدید!',
  },

  {
    slug: 'hadi',
    firstName: 'هادی',
    lastName: 'نام خانوادگی',
    jobTitle: 'عنوان شغلی',
    pfTitle: 'مدیر کافه فلاتر',
    description: 'هادی با برنامه‌ریزی دقیق، کافه فلاتر را به یک رویداد منظم و ارزشمند تبدیل کرده است',
    aboutMe: 'هادی با برنامه‌ریزی دقیق، کافه فلاتر را به یک رویداد منظم و ارزشمند تبدیل کرده است',
    image: { src: avatar3, alt: 'هادی' },
    bigImage: { src: bigImage, alt: 'هادی' },
    skills: [
      'توسعه نرم‌افزارهای فلاتری و موبایل',
      'طراحی سایت‌های استاتیک با  Astro',
      'ساخت و طراحی اپلیکیشن‌های Embedded',
      ' پروژه‌های DIY',
      '  مباحث مربوط به خانه هوشمند و  Home Assistant',
      'کار با مدل‌های هوش مصنوعی و تجربه استفاده از آن‌ها ',
    ],
    favorites:
      'به پروژه‌ها و منابع  Open Source علاقه زیادی دارم، به همین دلیل در بخش Open Source جامعه فلاتر فارسی فعال هستم.  ',
    contact:
      'لینک شبکه‌های اجتماعی من را می‌توانید توی این صفحه پیدا کنید. اگر سؤالی دارید یا فکر می‌کنید میتونم توی زمینه خاصی بهتون کمکی کنم، فقط کافیه هر جایی که راحتیت به من پیام بدید!',
  },

  {
    slug: 'parham',
    firstName: 'پرهام',
    lastName: 'نام خانوادگی',
    jobTitle: 'عنوان شغلی',
    pfTitle: 'مسئول رسانه‌های اجتماعی',
    description: 'پرهام با خلاقیت و نوآوری، حضور ما را در شبکه‌های اجتماعی مدیریت می‌کند',
    aboutMe: 'پرهام با خلاقیت و نوآوری، حضور ما را در شبکه‌های اجتماعی مدیریت می‌کند',
    image: { src: avatar4, alt: 'پرهام' },
    bigImage: { src: bigImage, alt: 'پرهام' },
    skills: [
      'توسعه نرم‌افزارهای فلاتری و موبایل',
      'طراحی سایت‌های استاتیک با  Astro',
      'ساخت و طراحی اپلیکیشن‌های Embedded',
      ' پروژه‌های DIY',
      '  مباحث مربوط به خانه هوشمند و  Home Assistant',
      'کار با مدل‌های هوش مصنوعی و تجربه استفاده از آن‌ها ',
    ],
    favorites:
      'به پروژه‌ها و منابع  Open Source علاقه زیادی دارم، به همین دلیل در بخش Open Source جامعه فلاتر فارسی فعال هستم.  ',
    contact:
      'لینک شبکه‌های اجتماعی من را می‌توانید توی این صفحه پیدا کنید. اگر سؤالی دارید یا فکر می‌کنید میتونم توی زمینه خاصی بهتون کمکی کنم، فقط کافیه هر جایی که راحتیت به من پیام بدید!',
  },
];
