<font face="inter">

# DNS

Before my DNS study, I wanna to line two website urls below where I learn DNS.

**An interactive website that allows you find what will happens if you mess something up with DNS**
<a>https://messwithdns.net/</a>

**An website exactly interprets What is DNS**
<a>https://www.cloudflare.com/en-gb/learning/dns/what-is-dns/</a>

---

# Sammary of DNS

## What is DNS ?
DNS is the abbreviation for the Domain Name System and it is used as a phonebook for the Internet.  

## What can DNS Do ?
DNS helps people to access information online through domain names, like github.com or google.com.

## Why We Need DNS ?
An IP address is given to each device on the Internet, and that address is necessary to find the appropriate device on the Internet. When a user wanna to load a webpage, a translation must occur between a user-type domain (like github.com) with a machine-friendly address(like 199.232.68.133) to locate the webpage.  
**And, DNS is your translator.**

## How DNS Does it work ?
Web browsers interact through Internet Procotol(IP) addresses. DNS translates domain names to IP addresses so your browser load Internet resources.

In other words, DNS resolution involves converting a hostname into a IP address. 

---

# Study of DNS Servers

## DNS Servers Involved in Loading a Webpage

All DNS servers fall into one of four categories : ***Recursive Resolvers***, ***Root NameServers***, ***TLD NameServers*** and ***Authoritative NameServers***.

In a typical DNS lookup, these four DNS servers will work together in harmony to complete the task of delivering the IP address for a domain name to the client.

## What is Recursive Resolvers ?

**Recursive resolvers**, also known as DNS recursor, is the first step in a DNS query. The Recursive resolvers act as a middleman between a client and DNS nameservers.  
After receiving a request from a web client, the recursive resolver will either response a cached data or send a request to the root nameserver, then send a request to the TLD nameserver, and lastly send a resquest to the authoritative nameserver.  
After receiving a response from the authoritative nameserver containing the IP address, the recursive resolver will send a response to the client.  

During this process, the recursive resolver will cache information received from the authoritative nameserver. When a client request a domain which was recently requested, the recursive resolver will circumvent the process if communicating with the nameservers, but just deliver the client the requested record from its cache.

## What is Root NameServers ?

**The DNS root nameservers** are known to every recursive resolver, and they are the first step in a recursive resolver's quest fir DNS records.   
A root nameerver accepts query which includes a domain name, and it will responds to its recursive resolver based on the extension of that domain (like .com, .net, .org).   
This response will directly deliver a request to the TLD server. 

## What is TLD NameServers ?

**The TLD(Top Level Domain) NameServers** maintains information for all the domain names that shares a common domain extension(like .com).  
When a query(for example: google.com) was caused by recursive resolver , it will point to a .com TLD nameserver which would respond by pointing to the authoritative nameserver (see below) for that domain.

- Generic top-level domains: These are domains that are not country specific, some of the best-known generic TLDs include .com, .org, .net, .edu, and .gov.

- Country code top-level domains: These include any domains that are specific to a country or state. Examples include .uk, .us, .ru, and .jp.

## What is Authoritative NameServers ?

When a recursive resolver receives a response from a TLD nameserver, that response will direct the resolver to an authoritative nameserver. The authoritative nameserver is usually the resolver’s last step in the journey for an IP address. The authoritative nameserver contains information specific to the domain name it serves (e.g. google.com) and it can provide a recursive resolver with the IP address of that server found in the DNS A record, or if the domain has a CNAME record (alias) it will provide the recursive resolver with an alias domain, at which point the recursive resolver will have to perform a whole new DNS lookup to procure a record from an authoritative nameserver (often an A record containing an IP address).

## Conclusion 

### **The Eight Steps in a DNS Lookup**

1. A user types ‘example.com’ into a web browser and the query travels into the Internet and is received by a DNS recursive resolver.

2. The resolver then queries a DNS root nameserver (.).

3. The root server then responds to the resolver with the address of a Top Level Domain (TLD) DNS server (such as .com or .net), which stores the information for its domains. When searching for example.com, our request is pointed toward the .com TLD.

4. The resolver then makes a request to the .com TLD.

5. The TLD server then responds with the IP address of the domain’s nameserver, example.com.

6. Lastly, the recursive resolver sends a query to the domain’s nameserver.

7. The IP address for example.com is then returned to the resolver from the nameserver.

8. The DNS resolver then responds to the web browser with the IP address of the domain requested initially.

![](https://www.cloudflare.com/img/learning/dns/what-is-dns/dns-lookup-diagram.png)

</font>
