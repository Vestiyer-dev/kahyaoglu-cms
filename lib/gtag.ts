/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// interface EventData {
//   action: string
//   category: string
//   label?: string
//   value?: number
// }

// interface PageViewData {
//   url: string
// }

// interface Window {
//   gtag: (...args: any[]) => void
//   dataLayer: Record<string, any>
// }

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: Record<string, any>
  }
}

export const GA_MEASUREMENT_ID = 'GTM-M76FJQM'

// export const pageView = (data: PageViewData) => {
//   window.gtag('config', GA_MEASUREMENT_ID, {
//     page_path: data.url,
//   })
// }

// export const event = (data: EventData) => {
//   window.gtag('event', data.action, {
//     event_category: data.category,
//     event_label: data.label,
//     value: data.value,
//   })
// }

export const pageview = (url: any) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}
