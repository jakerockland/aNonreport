# aNonreport
A distributed Blockchain-supported human rights violation reporting system.

Developed initially as a HackUPC 2016 Project. 

Inspiration

Technologists and human rights advocates are often kept isolated from each other, speaking languages not easily understood by those inhabiting the other camp. Merging innovative technologies to facilitate advocacy for human rights seems imperative, yet is seldom practiced.

aNonreport is the result of conversations between several programmers, Jack Rockland & Jack Kleeman, and a human security researcher  with experience in violent conflicts, Galen Englund. Through further consultations with leading experts from the International Crisis Group, Organization for Security and Cooperation in Europe (OSCE), and the UNHCR, they realized a gap in current human rights reporting technologies that could be improved through distributed blockchain-based programming. Joined at hackUPC by Suraj Shetty, aNonreport is a hackathon project inspired by real world needs. 

Disseminating information about human rights violations is easier than ever, but tracking and acting upon the vast quantities of data available has become increasingly difficult. Simultaneously, people who do report violations risk persecution. Existing anonymous solutions, such as SecureDrop, are centralized, relying on servers that are both expensive to implement and vulnerable to attack. Further, these reporting systems leave information ultimately in the hands of a single organization. New programming platforms allow for decentralized reporting techniques that could empower both witnesses and reporting organizations that have traditionally depended on in-house, expensive solutions to receive information from the field.

What it does

aNonreport is an online platform that enables users to file reports anonymously, including video & images, that can be geo-tagged and immediately sent to one or more monitoring organizations. It uses the latest in decentralized, anonymous communication technologies based on the same secure blockchain technology that bitcoin uses. By eliminating centralized servers and relying on multiple layers of encryption, users are assured of their anonymity, while receiving organizations are able to use a real-time updating system that is immune to traditional hacking exploits.

aNonreport will have numerous applications, from election-day monitoring in domestic contexts to reporting attacks on civilians during , and even providing a whistle blowing platform for existing organizations. A scalable solution, the platform will eventually be able to enable one user’s report to be sent to multiple organizations simultaneously, while ensuring a complete digital chain of custody that can be verified for investigative purposes.

Possible applications include use by:

- Existing organizations that already have individuals in the field monitoring human rights violations:
  - Instantly reporting attacks during wartime, such as barrel-bombs or chemical weapons in Syria by trained human rights monitors   
  - Election monitoring reporting by field observers
  - Post-facto interviewing of witnesses during human rights investigations
  
- Individuals who want to anonymously report violations that they have experienced or documented such as:
  - Refugees or migrants en route submitting reports on their own experiences
  - Citizens reporting on police violence or abuse
  - Witnesses of corruption by citizens, especially when paired with apps like CameraV
  
- Coalitions of organizations that want to collaborate to share information about violations in a given region 

How is aNonreport different than existing solutions like SecureDrop or Ushahidi?

aNonreport is different from any current reporting solution because it takes advantage of a completely decentralized, yet verifiable distribution network through IPFS and Ethereum. In plain English: 

1. There is no central server to attack, meaning that all stored data cannot be located or hacked. There is no point of failure once uploaded.
2. All data is ‘fingerprinted’ via a randomized security key, which allows organizations to track who has accessed the data & verify that it has not been corrupted. The user who uploaded the information remains entirely anonymous.

Both users and organizations have to properly implemented security protocol to protect their ends of the system, but aNonreport is designed to assure completely transparent, open-source, end-to-end security. 

How we built it

aNonreport is built on Ethereum, a decentralized platform that runs applications that can circumvent any possibility of censorship or interference from third parties. The specific contracts are programmed in Ethereum and are then run through the back-end in JS. Encryption of files is handled through concurrent PGP via a Keybase implementation. The file uploads will eventually be handled through IPFS, a distributed hosting service that puts small portions of encrypted files on different computers. This ensures a file network without any centralized server and anonymity. though a later switch to another, faster distributed hosting solution such as MaidSafe will be iterated.
