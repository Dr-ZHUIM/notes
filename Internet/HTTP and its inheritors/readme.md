<style>
red { color: red }
yellow { color: yellow }
</style>

# HTTPS

## Part I. Why Do We Need HTTPS?

We need HTTPS for three reasons :

- Privacy
- Integrity
- Identification

### Privacy

HTTPS can hold your URL bar of your browser to tell you there is no crab watching your shoulder.

### Integrity

HTTPS can ensure your communication is not being tampered with.

### Identification

HTTPS can identify both of your goal website and your identity.

HTTPS will check the `digital signature` to identify the sender.

Additionally, HTTPS will check a `SSL certificate` and a `Certificate Authority (CA)` to identify the server.

## Part II. Keys

HTTPs need a scenario to provide three serves as above on the web. This mechanism is called encryption. 

Now, let's see what encrption algorithm is used for HTTPS.

### Symmetric Key Algorithm 🔑

In this approach, there is one only key to encrypt and decrypt a message.

**Send Step:** sender send a message encrypted with the key

- sender send a message
- the message is encrypted by the encryption algorithm
- the encryption algorithm transfrom and spread out multiple times 
- the message has been encrypted

**Receive Step** receiver decrypt the messagge with the same key above.

- get a encrypted message
- decrypt the message by the encryption algorithm with the same key
- the encryption algorithm transfrom and compress multiple times 
- the message has been decrypted

**Tips:**

- anyone with the key can open the box, You have to be super careful with how you distribute the key.

### Asymmetric Key Algorithm 🔑🔑

The asymmetric key Algorithm provide two keys `Public Key`, `Private Key`.

You can share your `Public Key` to anyone.

The `Public Key` is in charge of the encryption 

The `Private Key` is used to decrypt the message

**Significance:** This is great not only for privacy, but also for identification since we know for sure that only the owner of the 2 keys can open the message.

## Part III. The Handshake

