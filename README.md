# Answers

This project aims to answer the questions that ask from Ascendion. This is a Next.js application implementing three challenges:

1. **Calculator**: Add two numbers.
2. **Navbar**: Responsive navbar with toggle and search input.
3. **Two Sum II**: Find two indices in a sorted array summing to a target.

### Technologies

- Next.js (React)
- TypeScript
- TailwindCSS
- Jest & React Testing Library

### Tooling

```
node >= 20
```

### Directory Structure

```
ascendion-frontend/
├── app/
│   ├── calculator/      # Challenge 1: Calculator
│   │   ├── page.tsx
│   ├── two-sum/         # Challenge 3: Two Sum II
│   │   ├── page.tsx
│   ├── layout.tsx 
│   └── page.tsx         
├── components/
│   ├── __tests__/
│   │   ├── calculator.test.tsx
│   │   ├── two-sum.test.tsx
│   │   ├── header.test.tsx
│   │   ├── mobile-header.test.tsx
│   │   └── theme-toggle.test.tsx
│   ├── (answer-01)      # Challenge 1: Calculator
│   │   └──calculator.tsx
│   ├── (answer-02)      # Challenge 2: Navbar
│   │   ├── header.mock.ts
│   │   ├── header.tsx
│   │   └── mobile-header.tsx
│   ├── (answer-03)      # Challenge 3: Two Sum II
│   │   └── two-sum.tsx
│   ├── theme/
│   │   └── theme.tsx
│   ├── container.tsx 
│   └── input.tsx       
├── hooks/
│   ├── __tests__/
│   │   ├── useCalculator.test.tsx
│   │   └── useTwoSum.test.tsx
│   ├── useActivePath.ts
│   ├── useCalculator.ts
│   └── useTwoSum.ts
├── lib/
│   ├── form-schema/
│   │   ├── calculator-schema.ts
│   │   └── two-sum-schema.ts
│   ├── constant.ts
│   └── types.ts
├── provider/
│   └── theme-provider.tsx
├── public/
├── util/
│   ├── calculator.ts
│   └── two-sum.ts
├── jest.config.js
├── jest.setup.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
└── tsconfig.json
```

### Running locally

- Install dependencies using npm: `npm install`
- Run the app locally: `npm run dev`
- Run tests: `npm test`


