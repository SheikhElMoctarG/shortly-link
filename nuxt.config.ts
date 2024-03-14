// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['./assets/css/main.css'],
  modules: ['@nuxtjs/supabase', '@nuxt/ui', 'nuxt-gtag'],
  supabase: {
    redirect: false
  },
  runtimeConfig: {
    public: {
      app_url: process.env.URL
    }
  },
  gtag: {
    id: 'G-YFYYYD3QKV'
  },
  app: {
    head: {
      title: "Shortly-Link - Short Link System",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: "Shortly-Link is a short link system developed by Sheikh El-Moctar. Create and manage short links easily with Vue.js, Nuxt.js." },
        { name: 'keywords', content: "Shortly-Link, Short Link System, Vue.js, Nuxt.js, Tailwind CSS, Supabase, MongoDB, Node.js, Express.js, Web Development, Frontend Development, Backend Development, Responsive Design, Scalable Applications, Modern Frameworks, Database Management, مختصر الروابط, نظام الروابط القصيرة, تطوير الويب, تطوير واجهة المستخدم, تطوير الخلفية, تصميم متجاوب, تطبيقات قابلة للتوسيع, الأطر الحديثة, إدارة قواعد البيانات" },

        // Open Graph (Facebook) meta tags
        { property: 'og:title', content: "Shortly-Link - Short Link System" },
        { property: 'og:description', content: "Shortly-Link is a short link system developed by Sheikh El-Moctar. Create and manage short links easily with Vue.js, Nuxt.js." },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://link.sheikhelmoctar.me' },
        { property: 'og:image', content: 'https://www.sheikhelmoctar.me/imgs/sheikh.jpg' },
        { property: 'og:image:alt', content: 'Shortly-Link' },

        // Twitter card meta tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: "Shortly-Link - Short Link System" },
        { name: 'twitter:description', content: "Shortly-Link is a short link system developed by Sheikh El-Moctar. Create and manage short links easily with Vue.js, Nuxt.js." },
        { name: 'twitter:image', content: 'https://www.sheikhelmoctar.me/imgs/sheikh.jpg' },
      ]
    }
  }
})
