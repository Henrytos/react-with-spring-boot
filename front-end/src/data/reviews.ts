export type Book = {
  title: string
  author: string
  coverUrl?: string
}

export type Review = {
  id: string
  reviewerName: string
  reviewerAvatar?: string
  date: string
  rating: number // 1-5
  book: Book
  excerpt?: string
  fullText?: string
}

export const reviews: Review[] = [
  {
    id: '1',
    reviewerName: 'Jaxson Dias',
    reviewerAvatar: '/assets/avatars/jaxson.jpg',
    date: 'Hoje',
    rating: 4,
    book: {
      title: 'O Hobbit',
      author: 'J.R.R. Tolkien',
      coverUrl: 'https://marketplace.canva.com/EAE4oJOnMh0/2/0/1003w/canva-capa-de-livro-de-suspense-pKsZq7ReKt4.jpg',
    },
    excerpt:
      'Sempre et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices.',
  },
  {
    id: '2',
    reviewerName: 'Brandon Botosh',
    reviewerAvatar: '/assets/avatars/brandon.jpg',
    date: 'Ontem',
    rating: 5,
    book: {
      title: 'O guia do mochileiro das galáxias',
      author: 'Douglas Adams',
      coverUrl: 'https://edit.org/img/blog/zz7-flyer-personalizavel-para-capas-de-livros.webp',
    },
    excerpt:
      'Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet.',
  },
  {
    id: '3',
    reviewerName: 'Lindsey Philips',
    reviewerAvatar: '/assets/avatars/lindsey.jpg',
    date: 'Ontem',
    rating: 4,
    book: {
      title: 'Entendendo Algoritmos',
      author: 'Aditya Bhargava',
      coverUrl: 'https://i0.wp.com/www.otakupt.com/wp-content/uploads/2025/09/Gachiakuta_Capa-Variante_Panini.jpg?resize=696%2C1018&ssl=1',
    },
    excerpt:
      'Integer at tincidunt sed mi. Venenatis nunc iusto porta viverra lacus. Texto de exemplo para a avaliação.',
  },
]

export default reviews
