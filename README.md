# Frontend Exercise: Apple Market

## Presentation
This project is an e-commerce exercise with React, Nextjs and Typescript for learning purpose.

## Built with and Using
- [x] [Nextjs](https://nextjs.org/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
- [x] [React](https://react.dev/)
- [x] [FakeStore API](https://fakestoreapi.com)
- [x] [Mock API](https://mockapi.io) to develop Shopping Cart


## App features
- [x] Basic Layout with Header and Footer
- [x] Homepage with Banner and listing the featured products
- [x] Listing all products - grid layout
- [x] Detailed view of Product - add to Cart
- [x] Shopping Cart
- [x] Typescript
- [x] Server Side Rendering / Static Site Generation

## Architecture
Clean architecture

| Path |  Alias | Description  |
|---|---|---|
| `src/app`  | -  | Next.js pages |
| `src/components/shared`  | `@components/shared/*`  | Global shared components (header, footer, heading, icons, ...)  |
| `src/components/*`  | `@components/*`  | Reusable components to fill pages |
| `src/hooks`  | `@hooks/*`  | Custom hooks  |
| `src/styles`  | `@styles/*`  | Component's styles  |
| `src/useCases/*`  | `@useCases/*`  | Use case acts as an intermediary between *views (components/pages)* and the *repositories*  |
| `src/repositories/*`  | `@repositories/*`  | Repositories - data access and storage logic. The repository pattern abstracts the data source (e.g., API, database) from the rest of your application, making it easier to switch data sources if needed. |


## Important package.json scripts

```bash
npm run dev
```

# Next Steps
The concepts of Clean Architecture, SOLID and Functional Programming are reviewed. Next steps:
- [ ] State management with Zustand
- [ ] Styling with [Emotion](https://emotion.sh) 
- [ ] Internationalization
- [ ] Possibility to add/remove from wishlist
