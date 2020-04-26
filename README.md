<h1 align="center">Welcome to BackupPlease 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/tutanck" target="_blank">
    <img alt="Twitter: tutanck" src="https://img.shields.io/twitter/follow/tutanck.svg?style=social" />
  </a>
</p>

> Automated and scheduled MongoDB backups using CircleCi and Git.

## Usage

```
1) Set up the project on CircleCi

2) Fill in environment variables accordingly:

 - DUMP_CMD  // mongodb://<dbuser>:<dbpassword>@<dbdomain>.mongolab.com:<dbport>/<dbdatabase> 
 <!-- should not define -o (output directory option)  -->
 - REPOSITORY_URL // https://github.com/username/repository.git
 - email // your-github-email@domain.com
 - name // your-github-username
 - sshkey // a:valid:ssh:key:with:read:and:write:rights:to:your:repository

3) Go take a nap !
```

## Author

👤 **tutanck**

- Twitter: [@tutanck](https://twitter.com/tutanck)
- Github: [@tutanck](https://github.com/tutanck)
- LinkedIn: [@tutanck](https://linkedin.com/in/tutanck)

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/tutanck">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
