# Password checker

A simple password checker written in Javascript for web page forms, not the best out there but not the worst either. Let me know of any bugs you encounter.

First, open the index.html file, choose a security level for your password and then type it into the textbox. If it complies with the security restrictions, the confirmation textbox will be enabled. Type it again in the second textbox and it will be checked against the first one. Then click the "Submit" button and, if both passwords match, an alert box will pop up displaying "Registration completed". Otherwise, it will read either "Your passwords do not match" or "Insert a valid password" accordingly.

Any character can be used in a password, but only the 26 letters of the basic Latin alphabet (i.e. upper and lowercase "A" to "Z") will count as letters. Which means that characters like "ß", "ö", "ç", etc. are valid but they will not be considered letters.

Feel free to copy the code, tweak it and bash it mercilessly.