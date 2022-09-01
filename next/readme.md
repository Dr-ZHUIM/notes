# next.js

## How Next.js Works

### 1. environments

Environment means the context in which your code running.

- `development environment` => local machine

- `production environment` => server-side or the client-side

### 2. compile

Transformed Code into a version browsers can understand.

### 3. Minifying

Cut off comments, spaces, indents, and multiple lines.

In Next.js, JavaScript and CSS files are automatically minified for production.

### 4. Bundling

Bundling is the process of resolving the web of dependencies and merging (or ‘packaging’)

### 5. Code Splitting

Code-splitting is the process of splitting the application’s bundle into smaller chunks required by each entry point. 

when the homepage is rendered, the code for other pages is not served initially.

Code-splitting also means that pages become isolated . If a certain page throws an error , the rest of the application would still work.

- **atvantage :**  
1.avoid re-downloading the same code  
2.start pre-loading the code of other 


### 6. Build Time and Runtime

- Build Time  
Build Time means the period which you bundle your code for production.

- Runtime  
Runtime means the period which your application runs in response to a user’s request

### 7. Client and Server

- the client refer to the browser on the user's device.

- the server refer to a computer which store your application code and receive requests from your users.

### 8. What is rendering ?

Rendering means converting the code of your application in `React` into the HTML representations of your UI.

Rendering Type :

- **Client-Side Rendering**

  Jsx/Tsx   =>(babel)   js    =>    HTML

- **Pre-Rendering**
  Jsx/Tsx => js => HTML (from server) => Client-Side

  - **Server-Side Rendering**  
     the HTML of the page is generated on a server for each request.

  - **Static Site Generation**  
      Only render static resources and the HTML is stored in a CDN and re-used for each request.


### 9. What is the Network ?

 In the case of a Next.js application, your application code can be distributed to **origin servers**, **Content Delivery Networks (CDNs)**, and **the Edge**.

- **Origin Servers**  
  origin Servers can distinguish this server from the other places application code can be distributed to, such as CDN servers and Edge servers.

  When an origin server receives a request, it does some computation before sending a response. The result of this computation work can be moved to a CDN

- **Content Delivery Networks**   
  CDNs store `static content (such as HTML and image files)` in `multiple locations around the world` and are placed between the client and the origin server.

- **The Edge**  
  The Edge is a generalized concept for the fringe (or edge) of the network, closest to the user. Similar to the CDN , the Edge has different locations around the world but also can `run code` which means both `caching` and `code execution` can be done at the Edge Server.

---

## Navigate Between Pages

### 10. Client-side Navigate  

Client-side navigation means that the page transition happens using JavaScript. 

The browser would not make a full refrash with a Client-side navigation triggered.

### 11. Prefetching

In production environment of Next.js , it will automatically **prefetch** the code for the linked page in the background which makes the page transition more near-instant.

---

## Static Assets


