export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? '';

export const pageviewGA = (url:string ) => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    })
}

export const eventGA = ({ action, params }:any) => {
    window.gtag('event', action, params)
}