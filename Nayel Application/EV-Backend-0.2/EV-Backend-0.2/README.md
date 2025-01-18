# EV-BackEnd
The EV-Backend is equipped with Laravel APIs, which are responsible for managing and authenticating user sessions (such as sign up, sign in, and sign out) for a mobile application. Additionally, it features a dashboard that enables the management of all bikes, as well as admin login sessions for new admin registration and accessing the dashboard functionality.

## Prerequisites
#### For MacOs
Check whether Homebrew, PHP, and Composer are installed or not for creating a Laravel application. If not, run the following commands:

- Install Homebrew: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
- Install PHP (version 7 or 7+): brew install php
- Install Composer: brew install composer
- Open the zshrc file using nano: nano ~/.zshrc
- Add the following path to the bottom of the file: PATH="HOME/.composer/vendor/bin:$PATH"
- Exit nano by pressing CTRL + X and save.
- Run the command to also make it available in the current session: source ~/zshrc
#### For Windows
- [Install XAMMP](https://www.c-sharpcorner.com/article/how-to-install-and-configure-xampp-in-windows-10/).
- [Install PHP](https://www.sitepoint.com/how-to-install-php-on-windows/)
- [Install Composer](https://webfiredesigns.ca/blog/how-install-composer-windows-10).
## Installation
1. Clone the project: git clone https://github.com/Neurocomputation-Lab-NCAI-NEDUET/EV-Backend.git
2. Move into the directory where you want to clone this project (for e.g., Desktop): cd EV-Backend
3. Open the project in VS Code.
4. Run composer install
5. Run cp .env.example .env
6. Run php artisan key:generate
7. Run php artisan jwt:secret
8. Open the .env file.
9. Check the value of DB_DATABASE.
10. Change the value of DB_USERNAME and DB_PASSWORD with the username and password you have set for MySQL.
11. Create a database with the name of the database mentioned in the DB_DATABASE.
12. Set the details of the SMTP server as well in the .env file.
13. Run php artisan migrate to migrate all the tables in the database.
14. Run php artisan serve.
15. Copy the URL and paste it in the browser.
<p align="center">
  <img width="460" height="300" src="https://user-images.githubusercontent.com/84729934/232708545-8ee2f18d-884f-412b-8fa8-997498d230a5.png">
</p>

## Author and Reviewer
**Author:** Ayesha Akhtar ([GitHub](https://github.com/ayesha15akhtar))

**Reviewer:** Mahnoor Atiq ([GitHub](https://github.com/mahnoo))

  

