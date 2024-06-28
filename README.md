This is the Invoice Assignment from Aurika Tech.

## Getting Started

First, Clone the project and Install all the necessary dependencies using:
```bash
npm i
# or
npm i --force
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Why this version?

First I was building this assignment using the Zoho API, but the API wasn't providing all the data needed in the project, like the seller name, PAN Card Details, GST Details, etc.
If the API Doesn't provide this data, then we needed to add the database and that would have ruined the whole point of using Zoho's API, cuz if we are using our own database, then why not store all the data there only and why use Zoho API.
Then I thought of using Invoice Ninja's API, then I got to know that it is only available for PRO or ENTERPRISE plan.

Then, at last, I chose to go with the custom approach, although I'm using react states to store all the data, it is fairly easy to store and Integrate the same thing with the API and our own database.
Only one thing that I was not able to complete is that "Amount in Words" thing, as I was going out of station on a very urgent basis. But apart from that, I tries implementing everything.
even that discount feature and all the caltulations as well.
