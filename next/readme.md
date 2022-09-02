---
name : readme
date : 2022/9/2
---

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

### 1. Image Component

- Images are lazy loaded by default

```
import Image from 'next/image';

const YourComponent = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);
```
---

### 2. Metadata in Head Component

Head Component allow you to edit `<head>` of a page.

```
import Head from 'next/head';
export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
```
---

### 3. Third-Party JavaScript

Third-party JavaScript refers to any scripts that are added from a third-party source.

- strategy controls when the third-party script should load.
- lazyOnload tells Next.js to load this particular script lazily during browser idle time
- onLoad is used to run any JavaScript code immediately after the script has finished loading.

```
import Script from 'next/script';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
```


### 4. Css / Sass Modules

Next.js use CSS modules for **`components`** .

CSS modules allow you to locally scope CSS at the component-level by automatically creating unique class names.

To use those CSS classes or other selector , you need :
- Import the CSS file and assign a name to it, like styles
- Use styles.container as the className

```
import styles from './layout.module.css';

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
} 
```

**Automatically Generates Unique Class Names**

A CSS module should be named as `[fileName].module.css` or `[fileName].module.scss`.

If a className in component `Layout` as `home` , it will be transformed as `[componentName]_[ClassName]__[RandomCode]` which accomplishes scoping CSS.

---

### 5. Global Styles

CSS Modules are useful for component-level styles. 

But if you want some CSS to be loaded by every page. Next.js has support for that as well.

- Create a top-level styles directory and a global.css file.
- To load global CSS files, create a file called pages/_app.js with the following content:

```
import '../styles/global.scss';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

> In Next.js, you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.
