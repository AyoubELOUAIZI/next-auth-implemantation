# this is some steps for my implementation of next auth:
    1-create a new blanc project in next.js
    2-install next auth library: npm install next-auth
    3-creating the file in the app : api/auth/[...nextauth]/route.ts
    4-also using the instructions in the page or documentation:
      https://next-auth.js.org/configuration/initialization#route-handlers-app
# Adding sign in and callbacks:
  1-we just add the atributes secret:process.env.NEXTAUTH_SECRET in the authOptions and we define it in the .env file.
# Accessing via server/client components:
## Via the server:
  1-we go to the main page.tsx exists in the root of the app directory.
  2-we export the authOptions
  3-we import the authOptions in the page.tsx file and pass it to the getServerSession function from the next-auth/next

## Via the client:
  1-we create a component AuthProvider in the components directory.
  2-we import the sission provider from next-auth/react
  3-...
