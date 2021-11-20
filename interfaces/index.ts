
export interface Pivot {
  shop_id: number, 
  mage_id: number, 
  identifier: string
}
export interface Image {
    created_at?: string
    id?: number
    path?: string
    pivot?: Pivot
    updated_at?: string
    url?: string
}
export interface Shop {
  affiliate_url: string
  background: string
  content: string
  created_at: string
  facebook: string | null
  id: number
  image: Image []
  instagram: string | null
  logo: Image []
  name: string
  secondary_content: string | null
  seo_desc: string
  seo_title: string
  sidebar_content:  string
  slug: string
  subtitle: string
  title: string
  twitter: string | null
  updated_at: string
  url: string
}
export interface Discount {
  code: number | null
  created_at: string
  description: string
  end: string
  exclusive: number
  shop: Shop
  formated_end: string
  formated_start: string
  hash: string | number
  ordered: number
  id: number
  preview?: null
  shop_id:number
  status: 1
  status_label: string
  title:  string
  type: number
  updated_at: string
  url: string |  null
  uses_count: number
  verified: string
}