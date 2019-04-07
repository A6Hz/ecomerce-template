import {
  FETCH_SINGLE_PRODUCT,
  CHANGE_CURRENCY,
  RECEIVE_PRODUCTS
} from "../constants/ActionTypes";

const initialState = {
  products: [
    {
      id: 1,
      name: "Flare Dress",
      price: 120,
      salePrice: 200,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/1.jpg",
        "/assets/images/fashion/product/21.jpg",
        "/assets/images/fashion/product/36.jpg",
        "/assets/images/fashion/product/12.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 16,
      new: true,
      sale: true,
      category: "women",
      colors: ["yellow", "gray", "green"],
      size: ["M", "L", "XL"],
      tags: ["nike", "caprese"],
      rating: 4,
      variants: [
        {
          color: "yellow",
          images: "/assets/images/fashion/product/1.jpg"
        },
        {
          color: "gray",
          images: "/assets/images/fashion/product/21.jpg"
        },
        {
          color: "green",
          images: "/assets/images/fashion/product/36.jpg"
        }
      ]
    },
    {
      id: 2,
      name: "Wrap Dress",
      price: 330.0,
      salePrice: 165.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/15.jpg",
        "/assets/images/fashion/product/7.jpg",
        "/assets/images/fashion/product/9.jpg",
        "/assets/images/fashion/product/13.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 6,
      new: true,
      sale: false,
      category: "women",
      colors: ["gray", "orange"],
      size: ["M", "L", "XL"],
      tags: ["caprese", "puma"],
      rating: 5,
      variants: [
        {
          color: "gray",
          images: "/assets/images/fashion/product/15.jpg"
        },
        {
          color: "orange",
          images: "/assets/images/fashion/product/7.jpg"
        }
      ]
    },
    {
      id: 3,
      name: "Danim Jeans",
      price: 500.0,
      salePrice: 250.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/32.jpg",
        "/assets/images/fashion/product/2.jpg",
        "/assets/images/fashion/product/25.jpg",
        "/assets/images/fashion/product/26.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 12,
      new: false,
      sale: false,
      category: "women",
      colors: ["blue", "white", "yellow"],
      size: ["M", "L", "XL"],
      tags: ["puma"],
      rating: 4,
      variants: [
        {
          color: "blue",
          images: "/assets/images/fashion/product/32.jpg"
        },
        {
          color: "white",
          images: "/assets/images/fashion/product/2.jpg"
        },
        {
          color: "yellow",
          images: "/assets/images/fashion/product/25.jpg"
        }
      ]
    },
    {
      id: 4,
      name: "Waist Dress",
      price: 180.0,
      salePrice: 360.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/5.jpg",
        "/assets/images/fashion/product/12.jpg",
        "/assets/images/fashion/product/31.jpg",
        "/assets/images/fashion/product/18.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: true,
      sale: true,
      category: "women",
      colors: ["pink", "gray", "green"],
      size: ["M", "L", "XL"],
      tags: ["lifestyle"],
      rating: 4,
      variants: [
        {
          color: "pink",
          images: "/assets/images/fashion/product/5.jpg"
        },
        {
          color: "gray",
          images: "/assets/images/fashion/product/12.jpg"
        },
        {
          color: "green",
          images: "/assets/images/fashion/product/31.jpg"
        }
      ]
    },
    {
      id: 5,
      name: "Trim Dress",
      price: 420.0,
      salePrice: 840.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/13.jpg",
        "/assets/images/fashion/product/10.jpg",
        "/assets/images/fashion/product/21.jpg",
        "/assets/images/fashion/product/15.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: true,
      sale: false,
      category: "women",
      colors: ["pink", "yellow", "gray"],
      size: ["M", "L", "XL"],
      tags: ["caprese", "lifestyle"],
      rating: 5,
      variants: [
        {
          color: "pink",
          images: "/assets/images/fashion/product/13.jpg"
        },
        {
          color: "yellow",
          images: "/assets/images/fashion/product/10.jpg"
        },
        {
          color: "gray",
          images: "/assets/images/fashion/product/21.jpg"
        }
      ]
    },
    {
      id: 6,
      name: "Cut Dress",
      price: 290,
      salePrice: 580,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/30.jpg",
        "/assets/images/fashion/product/29.jpg",
        "/assets/images/fashion/product/28.jpg",
        "/assets/images/fashion/product/9.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: false,
      sale: true,
      category: "women",
      colors: ["blue", "gray", "orange"],
      size: ["M", "L", "XL"],
      tags: ["caprese"],
      rating: 5,
      variants: [
        {
          color: "blue",
          images: "/assets/images/fashion/product/30.jpg"
        },
        {
          color: "gray",
          images: "/assets/images/fashion/product/24.jpg"
        },
        {
          color: "orange",
          images: "/assets/images/fashion/product/9.jpg"
        }
      ]
    },
    {
      id: 7,
      name: "Sleeveless dress",
      price: 950.0,
      salePrice: 425.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/20.jpg",
        "/assets/images/fashion/product/4.jpg",
        "/assets/images/fashion/product/35.jpg",
        "/assets/images/fashion/product/32.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: true,
      sale: true,
      category: "women",
      colors: ["red", "white", "blue"],
      size: ["M", "L", "XL"],
      tags: ["nike", "lifestyle"],
      rating: 4,
      variants: [
        {
          color: "red",
          images: "/assets/images/fashion/product/20.jpg"
        },
        {
          color: "white",
          images: "/assets/images/fashion/product/4.jpg"
        },
        {
          color: "blue",
          images: "/assets/images/fashion/product/35.jpg"
        }
      ]
    },
    {
      id: 8,
      name: "Maxi Dress",
      price: 140.0,
      salePrice: 280.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/11.jpg",
        "/assets/images/fashion/product/6.jpg",
        "/assets/images/fashion/product/22.jpg",
        "/assets/images/fashion/product/1.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: true,
      sale: false,
      category: "women",
      colors: ["black", "yellow"],
      size: ["M", "L", "XL"],
      tags: ["nike", "lifestyle"],
      rating: 3,
      variants: [
        {
          color: "black",
          images: "/assets/images/fashion/product/11.jpg"
        },
        {
          color: "yellow",
          images: "/assets/images/fashion/product/1.jpg"
        }
      ]
    },
    {
      id: 9,
      name: "Knit Dress",
      price: 370.0,
      salePrice: 720.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/14.jpg",
        "/assets/images/fashion/product/15.jpg",
        "/assets/images/fashion/product/4.jpg",
        "/assets/images/fashion/product/19.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: true,
      sale: false,
      category: "women",
      colors: ["pink", "gray"],
      size: ["M", "L", "XL"],
      tags: ["nike", "lifestyle"],
      rating: 4,
      variants: [
        {
          color: "pink",
          images: "/assets/images/fashion/product/14.jpg"
        },
        {
          color: "gray",
          images: "/assets/images/fashion/product/4.jpg"
        }
      ]
    },
    {
      id: 10,
      name: "Cut Top Dress",
      price: 110.0,
      salePrice: 220.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/23.jpg",
        "/assets/images/fashion/product/22.jpg",
        "/assets/images/fashion/product/11.jpg",
        "/assets/images/fashion/product/2.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: false,
      sale: false,
      category: "women",
      colors: ["red", "black", "white"],
      size: ["M", "L", "XL"],
      tags: ["nike", "lifestyle"],
      rating: 3,
      variants: [
        {
          color: "red",
          images: "/assets/images/fashion/product/23.jpg"
        },
        {
          color: "black",
          images: "/assets/images/fashion/product/22.jpg"
        },
        {
          color: "white",
          images: "/assets/images/fashion/product/2.jpg"
        }
      ]
    },
    {
      id: 11,
      name: "Sleeveless dress",
      price: 330.0,
      salePrice: 660.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/9.jpg",
        "/assets/images/fashion/product/12.jpg",
        "/assets/images/fashion/product/14.jpg",
        "/assets/images/fashion/product/19.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: true,
      sale: true,
      category: "women",
      colors: ["orange", "gray", "pink"],
      size: ["M", "L", "XL"],
      tags: ["nike", "lifestyle"],
      rating: 5,
      variants: [
        {
          color: "orange",
          images: "/assets/images/fashion/product/9.jpg"
        },
        {
          color: "gray",
          images: "/assets/images/fashion/product/12.jpg"
        },
        {
          color: "pink",
          images: "/assets/images/fashion/product/14.jpg"
        }
      ]
    },
    {
      id: 12,
      name: "Overlap Dresss",
      price: 250.0,
      salePrice: 500.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/2.jpg",
        "/assets/images/fashion/product/22.jpg",
        "/assets/images/fashion/product/24.jpg",
        "/assets/images/fashion/product/11.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: true,
      sale: false,
      category: "women",
      colors: ["white", "black"],
      size: ["M", "L", "XL"],
      tags: ["nike", "lifestyle"],
      rating: 3,
      variants: [
        {
          color: "white",
          images: "/assets/images/fashion/product/2.jpg"
        },
        {
          color: "black",
          images: "/assets/images/fashion/product/22.jpg"
        }
      ]
    },
    {
      id: 13,
      name: "Trench Dress",
      price: 660.0,
      salePrice: 1320.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/31.jpg",
        "/assets/images/fashion/product/18.jpg",
        "/assets/images/fashion/product/24.jpg",
        "/assets/images/fashion/product/28.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: false,
      sale: true,
      category: "women",
      colors: ["gray", "green"],
      size: ["M", "L", "XL"],
      tags: ["nike", "lifestyle"],
      rating: 4,
      variants: [
        {
          color: "green",
          images: "/assets/images/fashion/product/31.jpg"
        },
        {
          color: "gray",
          images: "/assets/images/fashion/product/24.jpg"
        }
      ]
    },
    {
      id: 14,
      name: "Striped Dress",
      price: 950.0,
      salePrice: 425.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/13.jpg",
        "/assets/images/fashion/product/22.jpg",
        "/assets/images/fashion/product/10.jpg",
        "/assets/images/fashion/product/1.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: true,
      sale: false,
      category: "women",
      colors: ["orange", "black", "yellow"],
      size: ["M", "L", "XL"],
      tags: ["nike", "lifestyle"],
      rating: 4,
      variants: [
        {
          color: "orange",
          images: "/assets/images/fashion/product/13.jpg"
        },
        {
          color: "black",
          images: "/assets/images/fashion/product/22.jpg"
        },
        {
          color: "yellow",
          images: "/assets/images/fashion/product/10.jpg"
        }
      ]
    },
    {
      id: 15,
      name: "Cut Top Dress",
      price: 350.0,
      salePrice: 700.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/17.jpg",
        "/assets/images/fashion/product/21.jpg",
        "/assets/images/fashion/product/15.jpg",
        "/assets/images/fashion/product/12.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: false,
      sale: false,
      category: "women",
      colors: ["black", "white", "gray"],
      size: ["M", "L", "XL"],
      tags: ["nike", "lifestyle"],
      rating: 5,
      variants: [
        {
          color: "black",
          images: "/assets/images/fashion/product/17.jpg"
        },
        {
          color: "white",
          images: "/assets/images/fashion/product/21.jpg"
        },
        {
          color: "gray",
          images: "/assets/images/fashion/product/12.jpg"
        },
        {
          color: "gray",
          images: "/assets/images/fashion/product/15.jpg"
        }
      ]
    },
    {
      id: 16,
      name: "Floral Dress",
      price: 556.0,
      salePrice: 278.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/3.jpg",
        "/assets/images/fashion/product/10.jpg",
        "/assets/images/fashion/product/24.jpg",
        "/assets/images/fashion/product/22.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: false,
      sale: true,
      category: "women",
      colors: ["pink", "yellow", "gray"],
      size: ["M", "L", "XL"],
      tags: ["nike", "lifestyle"],
      rating: 4,
      variants: [
        {
          color: "pink",
          images: "/assets/images/fashion/product/3.jpg"
        },
        {
          color: "yellow",
          images: "/assets/images/fashion/product/10.jpg"
        },
        {
          color: "gray",
          images: "/assets/images/fashion/product/24.jpg"
        }
      ]
    },
    {
      id: 20,
      name: "Floral Top",
      price: 800.0,
      salePrice: 400.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/25.jpg",
        "/assets/images/fashion/product/20.jpg",
        "/assets/images/fashion/product/24.jpg",
        "/assets/images/fashion/product/34.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: false,
      sale: false,
      category: "women",
      colors: ["red", "gray", "pink"],
      size: ["M", "L", "XL"],
      tags: ["nike", "lifestyle"],
      rating: 4,
      variants: [
        {
          color: "red",
          images: "/assets/images/fashion/product/25.jpg"
        },
        {
          color: "gray",
          images: "/assets/images/fashion/product/24.jpg"
        },
        {
          color: "pink",
          images: "/assets/images/fashion/product/34.jpg"
        }
      ]
    },
    {
      id: 21,
      name: "Fitted Dress",
      price: 1050.0,
      salePrice: 2000.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/7.jpg",
        "/assets/images/fashion/product/6.jpg",
        "/assets/images/fashion/product/8.jpg",
        "/assets/images/fashion/product/20.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: true,
      sale: false,
      category: "women",
      colors: ["orange", "black", "red"],
      size: ["M", "L", "XL"],
      tags: ["lifestyle", "nike"],
      rating: 5,
      variants: [
        {
          color: "orange",
          images: "/assets/images/fashion/product/7.jpg"
        },
        {
          color: "black",
          images: "/assets/images/fashion/product/6.jpg"
        },
        {
          color: "red",
          images: "/assets/images/fashion/product/20.jpg"
        }
      ]
    },
    {
      id: 22,
      name: "Half T-Shirt",
      price: 250.0,
      salePrice: 500.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/43.jpg",
        "/assets/images/fashion/product/59.jpg",
        "/assets/images/fashion/product/42.jpg",
        "/assets/images/fashion/product/57.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: true,
      sale: true,
      category: "men",
      colors: ["white", "gray", "black"],
      size: ["M", "L", "XL"],
      tags: ["lifestyle", "nike"],
      rating: 4,
      variants: [
        {
          color: "white",
          images: "/assets/images/fashion/product/43.jpg"
        },
        {
          color: "gray",
          images: "/assets/images/fashion/product/59.jpg"
        },
        {
          color: "black",
          images: "/assets/images/fashion/product/42.jpg"
        }
      ]
    },
    {
      id: 23,
      name: "Half Sleeve",
      price: 130.0,
      salePrice: 260.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/66.jpg",
        "/assets/images/fashion/product/47.jpg",
        "/assets/images/fashion/product/74.jpg",
        "/assets/images/fashion/product/46.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: false,
      sale: true,
      category: "men",
      colors: ["orange", "green", "gray"],
      size: ["M", "L", "XL"],
      tags: ["lifestyle", "nike"],
      rating: 5,
      variants: [
        {
          color: "orange",
          images: "/assets/images/fashion/product/66.jpg"
        },
        {
          color: "green",
          images: "/assets/images/fashion/product/47.jpg"
        },
        {
          color: "gray",
          images: "/assets/images/fashion/product/74.jpg"
        }
      ]
    },
    {
      id: 24,
      name: "Fitted T-Shirt",
      price: 150.0,
      salePrice: 300.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/56.jpg",
        "/assets/images/fashion/product/49.jpg",
        "/assets/images/fashion/product/72.jpg",
        "/assets/images/fashion/product/74.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: true,
      sale: true,
      category: "men",
      colors: ["white", "gray"],
      size: ["M", "L", "XL"],
      tags: ["lifestyle", "nike"],
      rating: 4,
      variants: [
        {
          color: "white",
          images: "/assets/images/fashion/product/56.jpg"
        },
        {
          color: "gray",
          images: "/assets/images/fashion/product/72.jpg"
        }
      ]
    },
    {
      id: 25,
      name: "Fitted T-Shirt",
      price: 210.0,
      salePrice: 420.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/47.jpg",
        "/assets/images/fashion/product/46.jpg",
        "/assets/images/fashion/product/55.jpg",
        "/assets/images/fashion/product/52.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: false,
      sale: false,
      category: "men",
      colors: ["green", "gray", "black"],
      size: ["M", "L", "XL"],
      tags: ["lifestyle", "nike"],
      rating: 5,
      variants: [
        {
          color: "green",
          images: "/assets/images/fashion/product/47.jpg"
        },
        {
          color: "gray",
          images: "/assets/images/fashion/product/46.jpg"
        },
        {
          color: "black",
          images: "/assets/images/fashion/product/55.jpg"
        }
      ]
    },
    {
      id: 26,
      name: "Casual Shirt",
      price: 420.0,
      salePrice: 840.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/63.jpg",
        "/assets/images/fashion/product/46.jpg",
        "/assets/images/fashion/product/51.jpg",
        "/assets/images/fashion/product/52.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: false,
      sale: true,
      category: "men",
      colors: ["pink", "green", "yellow"],
      size: ["M", "L", "XL"],
      tags: ["lifestyle", "nike"],
      rating: 4,
      variants: [
        {
          color: "pink",
          images: "/assets/images/fashion/product/63.jpg"
        },
        {
          color: "green",
          images: "/assets/images/fashion/product/46.jpg"
        },
        {
          color: "yellow",
          images: "/assets/images/fashion/product/51.jpg"
        }
      ]
    },
    {
      id: 27,
      name: "Pocket T-Shirt",
      price: 360.0,
      salePrice: 720.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/73.jpg",
        "/assets/images/fashion/product/72.jpg",
        "/assets/images/fashion/product/80.jpg",
        "/assets/images/fashion/product/42.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: true,
      sale: true,
      category: "men",
      colors: ["orange", "black", "white"],
      size: ["M", "L", "XL"],
      tags: ["lifestyle", "nike"],
      rating: 4,
      variants: [
        {
          color: "orange",
          images: "/assets/images/fashion/product/73.jpg"
        },
        {
          color: "black",
          images: "/assets/images/fashion/product/72.jpg"
        },
        {
          color: "white",
          images: "/assets/images/fashion/product/80.jpg"
        }
      ]
    },
    {
      id: 28,
      name: "Fitted T-Shirt",
      price: 900.0,
      salePrice: 450.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/55.jpg",
        "/assets/images/fashion/product/57.jpg",
        "/assets/images/fashion/product/47.jpg",
        "/assets/images/fashion/product/76.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: false,
      sale: false,
      category: "men",
      colors: ["black", "green"],
      size: ["M", "L", "XL"],
      tags: ["lifestyle", "nike"],
      rating: 5,
      variants: [
        {
          color: "black",
          images: "/assets/images/fashion/product/55.jpg"
        },
        {
          color: "green",
          images: "/assets/images/fashion/product/47.jpg"
        }
      ]
    },
    {
      id: 29,
      name: "Fitted T-Shirt",
      price: 680.0,
      salePrice: 1360.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/51.jpg",
        "/assets/images/fashion/product/66.jpg",
        "/assets/images/fashion/product/62.jpg",
        "/assets/images/fashion/product/77.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: false,
      sale: false,
      category: "men",
      colors: ["white", "pink", "gray"],
      size: ["M", "L", "XL"],
      tags: ["lifestyle", "nike"],
      rating: 4,
      variants: [
        {
          color: "white",
          images: "/assets/images/fashion/product/51.jpg"
        },
        {
          color: "pink",
          images: "/assets/images/fashion/product/66.jpg"
        },
        {
          color: "gray",
          images: "/assets/images/fashion/product/62.jpg"
        }
      ]
    },
    {
      id: 30,
      name: "Sweetware T-Shirt",
      price: 500.0,
      salePrice: 1000.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/78.jpg",
        "/assets/images/fashion/product/71.jpg",
        "/assets/images/fashion/product/72.jpg",
        "/assets/images/fashion/product/53.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: true,
      sale: false,
      category: "men",
      colors: ["blue", "black"],
      size: ["M", "L", "XL"],
      tags: ["lifestyle", "nike"],
      rating: 4,
      variants: [
        {
          color: "blue",
          images: "/assets/images/fashion/product/78.jpg"
        },
        {
          color: "black",
          images: "/assets/images/fashion/product/71.jpg"
        }
      ]
    },
    {
      id: 31,
      name: "Fitted T-Shirt",
      price: 322.0,
      salePrice: 161.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/49.jpg",
        "/assets/images/fashion/product/72.jpg",
        "/assets/images/fashion/product/60.jpg",
        "/assets/images/fashion/product/66.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: false,
      sale: true,
      category: "men",
      colors: ["white", "black", "red"],
      size: ["M", "L", "XL"],
      tags: ["lifestyle", "nike"],
      rating: 4,
      variants: [
        {
          color: "white",
          images: "/assets/images/fashion/product/49.jpg"
        },
        {
          color: "black",
          images: "/assets/images/fashion/product/72.jpg"
        },
        {
          color: "red",
          images: "/assets/images/fashion/product/60.jpg"
        }
      ]
    },
    {
      id: 32,
      name: "Full Sleeve",
      price: 390.0,
      salePrice: 780.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/47.jpg",
        "/assets/images/fashion/product/79.jpg",
        "/assets/images/fashion/product/70.jpg",
        "/assets/images/fashion/product/42.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: true,
      sale: true,
      category: "men",
      colors: ["green", "yellow"],
      size: ["M", "L", "XL"],
      tags: ["lifestyle", "nike"],
      rating: 4,
      variants: [
        {
          color: "green",
          images: "/assets/images/fashion/product/47.jpg"
        },
        {
          color: "yellow",
          images: "/assets/images/fashion/product/79.jpg"
        }
      ]
    },
    {
      id: 33,
      name: "Full Sleeve",
      price: 600.0,
      salePrice: 1200.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/51.jpg",
        "/assets/images/fashion/product/77.jpg",
        "/assets/images/fashion/product/65.jpg",
        "/assets/images/fashion/product/74.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: false,
      sale: false,
      category: "men",
      colors: ["yellow", "gray", "black"],
      size: ["M", "L", "XL"],
      tags: ["lifestyle", "nike"],
      rating: 4,
      variants: [
        {
          color: "yellow",
          images: "/assets/images/fashion/product/51.jpg"
        },
        {
          color: "gray",
          images: "/assets/images/fashion/product/77.jpg"
        },
        {
          color: "black",
          images: "/assets/images/fashion/product/65.jpg"
        }
      ]
    },
    {
      id: 34,
      name: "Fitted Jeans",
      price: 300.0,
      salePrice: 600.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/76.jpg",
        "/assets/images/fashion/product/60.jpg",
        "/assets/images/fashion/product/66.jpg",
        "/assets/images/fashion/product/67.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: true,
      sale: true,
      category: "men",
      colors: ["black", "red"],
      size: ["M", "L", "XL"],
      tags: ["lifestyle", "nike"],
      rating: 5,
      variants: [
        {
          color: "black",
          images: "/assets/images/fashion/product/76.jpg"
        },
        {
          color: "red",
          images: "/assets/images/fashion/product/60.jpg"
        }
      ]
    },
    {
      id: 35,
      name: "Printed Shirt",
      price: 200.0,
      salePrice: 400.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/67.jpg",
        "/assets/images/fashion/product/77.jpg",
        "/assets/images/fashion/product/71.jpg",
        "/assets/images/fashion/product/72.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: false,
      sale: false,
      category: "men",
      colors: ["pink", "gray"],
      size: ["M", "L", "XL"],
      tags: ["lifestyle", "nike"],
      rating: 4,
      variants: [
        {
          color: "pink",
          images: "/assets/images/fashion/product/67.jpg"
        },
        {
          color: "gray",
          images: "/assets/images/fashion/product/77.jpg"
        }
      ]
    },
    {
      id: 36,
      name: "Fitted Danim Jeans",
      price: 100.0,
      salePrice: 200.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/61.jpg",
        "/assets/images/fashion/product/75.jpg",
        "/assets/images/fashion/product/56.jpg",
        "/assets/images/fashion/product/42.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: false,
      sale: false,
      category: "men",
      colors: ["blue", "black", "white"],
      size: ["M", "L", "XL"],
      tags: ["lifestyle", "nike"],
      rating: 4,
      variants: [
        {
          color: "blue",
          images: "/assets/images/fashion/product/61.jpg"
        },
        {
          color: "black",
          images: "/assets/images/fashion/product/75.jpg"
        },
        {
          color: "white",
          images: "/assets/images/fashion/product/56.jpg"
        }
      ]
    },
    {
      id: 37,
      name: "Casual Jeans",
      price: 160.0,
      salePrice: 320.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/66.jpg",
        "/assets/images/fashion/product/75.jpg",
        "/assets/images/fashion/product/78.jpg",
        "/assets/images/fashion/product/80.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: false,
      sale: false,
      category: "men",
      colors: ["red", "white"],
      size: ["M", "L", "XL"],
      tags: ["lifestyle", "nike"],
      rating: 4,
      variants: [
        {
          color: "red",
          images: "/assets/images/fashion/product/66.jpg"
        },
        {
          color: "white",
          images: "/assets/images/fashion/product/75.jpg"
        }
      ]
    },
    {
      id: 38,
      name: "Full Sleeve",
      price: 450.0,
      salePrice: 900.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/60.jpg",
        "/assets/images/fashion/product/74.jpg",
        "/assets/images/fashion/product/47.jpg",
        "/assets/images/fashion/product/72.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: false,
      sale: true,
      category: "men",
      colors: ["orange", "gray", "green"],
      size: ["M", "L", "XL"],
      tags: ["lifestyle", "nike"],
      rating: 4,
      variants: [
        {
          color: "orange",
          images: "/assets/images/fashion/product/60.jpg"
        },
        {
          color: "gray",
          images: "/assets/images/fashion/product/74.jpg"
        },
        {
          color: "green",
          images: "/assets/images/fashion/product/47.jpg"
        }
      ]
    },
    {
      id: 39,
      name: "Fitted T-Shirt",
      price: 115.0,
      salePrice: 230.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/70.jpg",
        "/assets/images/fashion/product/67.jpg",
        "/assets/images/fashion/product/64.jpg",
        "/assets/images/fashion/product/65.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: false,
      sale: false,
      category: "men",
      colors: ["pink", "white"],
      size: ["M", "L", "XL"],
      tags: ["lifestyle", "nike"],
      rating: 4,
      variants: [
        {
          color: "white",
          images: "/assets/images/fashion/product/70.jpg"
        },
        {
          color: "pink",
          images: "/assets/images/fashion/product/67.jpg"
        }
      ]
    },
    {
      id: 40,
      name: "Track Jeans",
      price: 480.0,
      salePrice: 240.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/69.jpg",
        "/assets/images/fashion/product/55.jpg",
        "/assets/images/fashion/product/57.jpg",
        "/assets/images/fashion/product/75.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: true,
      sale: true,
      category: "men",
      colors: ["black", "gray", "orange"],
      size: ["M", "L", "XL"],
      tags: ["lifestyle", "nike"],
      rating: 4,
      variants: [
        {
          color: "black",
          images: "/assets/images/fashion/product/69.jpg"
        }
      ]
    },
    {
      id: 41,
      name: "Fitted T-Shirt",
      price: 110.0,
      salePrice: 220.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/49.jpg",
        "/assets/images/fashion/product/65.jpg",
        "/assets/images/fashion/product/68.jpg",
        "/assets/images/fashion/product/69.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: true,
      sale: true,
      category: "men",
      colors: ["blue", "black"],
      size: ["M", "L", "XL"],
      tags: ["lifestyle", "nike"],
      rating: 4,
      variants: [
        {
          color: "blue",
          images: "/assets/images/fashion/product/49.jpg"
        },
        {
          color: "black",
          images: "/assets/images/fashion/product/65.jpg"
        }
      ]
    },
    {
      id: 42,
      name: "Half Sleeve",
      price: 200.0,
      salePrice: 400.0,
      discount: 50,
      pictures: [
        "/assets/images/fashion/product/62.jpg",
        "/assets/images/fashion/product/45.jpg",
        "/assets/images/fashion/product/48.jpg",
        "/assets/images/fashion/product/49.jpg"
      ],
      shortDetails:
        "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem,",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      stock: 10,
      new: false,
      sale: true,
      category: "men",
      colors: ["gray", "black", "white"],
      size: ["M", "L", "XL"],
      tags: ["lifestyle", "nike"],
      rating: 4,
      variants: [
        {
          color: "gray",
          images: "/assets/images/fashion/product/62.jpg"
        },
        {
          color: "black",
          images: "/assets/images/fashion/product/45.jpg"
        },
        {
          color: "white",
          images: "/assets/images/fashion/product/48.jpg"
        }
      ]
    }
  ],
  symbol: "$",
  product_details: []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        products: action.products
      };
    case FETCH_SINGLE_PRODUCT:
      if (
        state.products.findIndex(product => product.id === action.productId) !==
        -1
      ) {
        const singleItem = state.products.reduce((itemAcc, product) => {
          return product;
        }, []);
        return {
          ...state,
          product_details: singleItem
        };
      }

    case CHANGE_CURRENCY:
      return {
        ...state,
        symbol: action.symbol
      };
    default:
      return state;
  }
};
export default productReducer;
