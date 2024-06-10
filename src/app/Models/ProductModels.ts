export interface ProductList {
  name: string
  description: string
  price: number
  pictureUrl: string
  productTypeName: string
  productBrandName: string
}


export interface ProductListPagination {
  pageIndex: number
  pageSize: number
  count: number
  products: ProductList[]
}
