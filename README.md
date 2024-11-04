# Password Generator

A Progressive Web App (PWA) designed to help users generate strong and customizable passwords. Users can set the length of their password, select character options (uppercase letters, numbers, special characters), and instantly copy the generated password for easy use. The app is installable on mobile and desktop devices, providing quick access for secure password generation anytime, even offline.

## Features

- **Customizable Password Length**: Choose the desired length for the password, from short to long.
- **Character Options**: Select specific character types to include in the password—uppercase letters, numbers, and special characters.
- **Instant Copy**: Copy the generated password to the clipboard with a single click, for easy pasting where needed.
- **PWA Capabilities**: Installable on mobile devices and desktops for quick access.
- **Offline Access**: The app is fully functional offline once loaded, allowing password generation without an internet connection.

## App

[Use the Password Generator app](https://nickdeupree.github.io/PasswordGenerator) <!-- Replace # with the actual URL once hosted. -->

## Usage

1. **Set Password Length**: Use the input box to specify how many characters you want in the password.
2. **Select Character Options**:
   - Enable **Uppercase Letters** to include uppercase characters (A-Z).
   - Enable **Numbers** to include numeric characters (0-9).
   - Enable **Special Characters** to include symbols like `!@#$%^&*`.
3. **Generate Password**: Click the **Generate Password** button to create a password based on your selected options. The generated password will display on the screen.
4. **Copy to Clipboard**: Click the copy icon next to the generated password to copy it instantly to your clipboard.

### Key Files

- **index.html**: Contains the app's structure and main HTML elements.
- **styles.css**: Defines all the app styling, including dark mode-friendly colors and responsive layout.
- **app.js**: JavaScript logic for generating passwords, handling clipboard copying, and managing character selection options.

### Core Functions

- **generatePassword**: Generates a password based on the selected length and character options (uppercase letters, numbers, special characters).
- **copyPassword**: Copies the generated password to the clipboard and provides a brief notification to confirm the action.
- **showNotification**: Displays a small notification that fades out after a few seconds, indicating successful password copying.
