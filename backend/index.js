import express from 'express'

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        {
          "id": 1,
          "name": "Wooden Dining Table",
          "price": 250.00,
          "image": "https://images.unsplash.com/photo-1604068543203-0bd674520050"
        },
        {
          "id": 2,
          "name": "Glass Coffee Table",
          "price": 180.00,
          "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
        },
        {
          "id": 3,
          "name": "Marble Top Side Table",
          "price": 130.00,
          "image": "https://images.unsplash.com/photo-1585128792020-3b6bd306b4a2"
        },
        {
          "id": 4,
          "name": "Industrial Work Table",
          "price": 300.00,
          "image": "https://images.unsplash.com/photo-1554998171-7f4351042eb8"
        },
        {
          "id": 5,
          "name": "Modern Office Desk",
          "price": 280.00,
          "image": "https://images.unsplash.com/photo-1598228723793-52759a175fa4"
        },
        {
          "id": 6,
          "name": "Outdoor Patio Table",
          "price": 200.00,
          "image": "https://images.unsplash.com/photo-1515263487990-61b07816b324"
        },
        {
          "id": 7,
          "name": "Folding Picnic Table",
          "price": 150.00,
          "image": "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6"
        },
        {
          "id": 8,
          "name": "Antique Writing Table",
          "price": 400.00,
          "image": "https://images.unsplash.com/photo-1605261031428-23417a19949c"
        },
        {
          "id": 9,
          "name": "Round Kitchen Table",
          "price": 220.00,
          "image": "https://images.unsplash.com/photo-1598300042247-4e320f3dfd75"
        },
        {
          "id": 10,
          "name": "Gaming Desk",
          "price": 350.00,
          "image": "https://images.unsplash.com/photo-1602941526468-0383b032cbe0"
        },
        {
          "id": 11,
          "name": "Minimalist Coffee Table",
          "price": 170.00,
          "image": "https://images.unsplash.com/photo-1571057787781-7b1c6e2f9251"
        },
        {
          "id": 12,
          "name": "Expandable Dining Table",
          "price": 450.00,
          "image": "https://images.unsplash.com/photo-1598300042247-4e320f3dfd75"
        },
        {
          "id": 13,
          "name": "Rustic Farmhouse Table",
          "price": 500.00,
          "image": "https://images.unsplash.com/photo-1585128792020-3b6bd306b4a2"
        },
        {
          "id": 14,
          "name": "Standing Desk",
          "price": 320.00,
          "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
        },
        {
          "id": 15,
          "name": "Reclaimed Wood Coffee Table",
          "price": 270.00,
          "image": "https://images.unsplash.com/photo-1604068543203-0bd674520050"
        },
        {
          "id": 16,
          "name": "Bar Table with Stools",
          "price": 340.00,
          "image": "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6"
        },
        {
          "id": 17,
          "name": "Modern Glass Dining Table",
          "price": 380.00,
          "image": "https://images.unsplash.com/photo-1515263487990-61b07816b324"
        },
        {
          "id": 18,
          "name": "Kids Study Table",
          "price": 120.00,
          "image": "https://images.unsplash.com/photo-1598228723793-52759a175fa4"
        },
        {
          "id": 19,
          "name": "Vintage Console Table",
          "price": 290.00,
          "image": "https://images.unsplash.com/photo-1554998171-7f4351042eb8"
        },
        {
          "id": 20,
          "name": "L-Shaped Office Desk",
          "price": 480.00,
          "image": "https://images.unsplash.com/photo-1605261031428-23417a19949c"
        },
        {
          "id": 21,
          "name": "Metal Frame Coffee Table",
          "price": 190.00,
          "image": "https://images.unsplash.com/photo-1598300042247-4e320f3dfd75"
        },
        {
          "id": 22,
          "name": "Teakwood Outdoor Table",
          "price": 310.00,
          "image": "https://images.unsplash.com/photo-1585128792020-3b6bd306b4a2"
        },
        {
          "id": 23,
          "name": "Handcrafted Wood Table",
          "price": 370.00,
          "image": "https://images.unsplash.com/photo-1604068543203-0bd674520050"
        },
        {
          "id": 24,
          "name": "Glass Top Study Desk",
          "price": 230.00,
          "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
        },
        {
          "id": 25,
          "name": "Scandinavian Style Table",
          "price": 290.00,
          "image": "https://images.unsplash.com/photo-1515263487990-61b07816b324"
        },
        {
          "id": 26,
          "name": "Classic Wooden Desk",
          "price": 260.00,
          "image": "https://images.unsplash.com/photo-1554998171-7f4351042eb8"
        },
        {
          "id": 27,
          "name": "Boho Chic Table",
          "price": 300.00,
          "image": "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6"
        },
        {
          "id": 28,
          "name": "Foldable Wall Table",
          "price": 140.00,
          "image": "https://images.unsplash.com/photo-1605261031428-23417a19949c"
        },
        {
          "id": 29,
          "name": "Rustic Barnwood Table",
          "price": 450.00,
          "image": "https://images.unsplash.com/photo-1585128792020-3b6bd306b4a2"
        },
        {
          "id": 30,
          "name": "Minimalist Work Desk",
          "price": 310.00,
          "image": "https://images.unsplash.com/photo-1598228723793-52759a175fa4"
        }
      ]
      

    if (req.query.search) {
        const filterProducts = products.filter(prod => prod.name.includes(req.query.search))
        res.send(filterProducts);
        return;
    }

    setTimeout(() => {
        res.send(products);
    }, 3000);
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server running on port ${port}`)
});