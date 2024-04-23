
# Resistor Colour Code calculator 

A resistor colour code is a labelling scheme that employs coloured bands on the resistor body to represent the resistance value and tolerance. With the help of this approach, resistor values in electronic circuits can be quickly and easily identified without the need for extra testing or equipment. A standardised colour code chart defines the resistance value, and the order in which these colours appear establishes that each colour corresponds to a particular number. Because of how easily and effectively it may transmit important resistor information at a glance, this method is commonly employed.

![Resistor Colour Code calculator Web site shown on a range of devices](/readme/media/responsive.png)

## Demo

A live demo can be found [here.](https://tenda-m.github.io/risistor-colour-code/)

- - - 

## Table of Content
1. [Project Goals](#project-goals)
   1. [Target Audience](#target-audience)
   2. [User Goals](#user-goals)
   3. [Site Owner Goals](#site-owner-goals)
2. [User Experience (UX)](#user-experience-ux)
   1. [User Requirements and Expectations](#user-requirements-and-expectations)
   2. [User Stories](#user-stories)
   3. [Features To Achieve These Goals](#features-to-achieve-these-goals)
3. [Design](#design)
   1. [Wireframes](#wireframes)
   2. [Logo](#logo)
   3. [Colour Scheme](#colour-scheme)
   4. [Fonts](#fonts)
4. [Structure](#structure)
   1. [Technologies Used](#technologies-used)
   2. [Frameworks](#frameworks)
   3. [Tools](#tools)
5. [Features](#features)
   1. [Heading](#heading)
   2. [Instruction Button](#instruction-button)
   3. [Interactive Resistor Color Code Calculator:](#interactive-resistor-color-code-calculator)
   4. [Dynamic Resistor Display](#dynamic-resistor-display)
   5. [Local Storage Interaction](#local-storage-interaction)
   6. [Calculation Output](#calculation-output)
   7. [Alert](#alert)
   8. [Footer](#footer)
   9. [Future features](#future-features)
* [Languages Used](#languages-used)
* [User Experience](#user-experience-ux)
* [Design](#design)
  * [Wireframes](#wireframes)
  * [Features](#features)
  * [Color Scheme](#color-scheme)
  * [Typography](#typography)
  * [Icons](#icons)
* [Deployment](#deployment)
  * [Run locally](#run-locally)
  * [Testing](#testing)
* [Credits](#credits)
* [Acknowledgements](#acknowledgements)

- - -

## Project Goals
The objective of this project is to create an interactive resistor colour code tool that will help a variety of users, including professional engineers and electronics students, understand the process of recognising resistor values. 

### Target Audience:
* Students studying electronics: Recognising resistor colour codes helps students understand circuit diagrams and construct circuits appropriately.
* Teachers and Instructors: These codes are a useful teaching aid for basic electronics teachers to explain resistor attributes and circuit theory.
* Professional Electronics Engineers: When designing, testing, and troubleshooting electronic systems, engineers frequently employ resistor colour codes.
* Technicians & Repair Professionals: When doing repairs and maintenance on electronic equipment, these users employ colour codes to determine the resistor values.
* Makers and Inventors: Resistor colour codes are used by anyone making new electronic devices or prototypes to make sure their parts fulfil the necessary requirements.
* Hobbyists and DIY Enthusiasts: These codes are used by people who choose resistors for a variety of purposes when working on do-it-yourself projects or hobbies related to electronics.

### User goals
* Accuracy in Resistor Identification: Users aim to accurately determine the resistance values of resistors based on their color bands without manual calculations.

* Error Reduction:Minimize mistakes in identifying resistor values which can lead to circuit errors, enhancing the reliability of electronic designs and repairs.

* Ease of Use: Convey a user-friendly interface that makes learning easier, especially for those new to electronics, so they may use the tool without needing to have a thorough understanding of the resistor colour coding system beforehand.

* Efficiency and Speed: Selecting and verifying components takes less time when resistor values are found quickly. This improves productivity in jobs like circuit design or maintenance.


### Site Owner Goals
* Develop a practical and pedagogical platform that teaches users how to accurately decipher the color-coded bands on resistors, which stand for resistance values, tolerances, and occasionally temperature coefficients.

* Develop a user-friendly, intuitive interface that works across a range of platforms so that users may utilise the product in a variety of contexts, such as classrooms, electronics labs, and field service operations.

* Develop a variety of resistor configurations to support different resistor types, such as 4-band, 5-band, and 6-band resistors, in order to address a wide range of possible educational and real-world applications.

* Offer real-time feedback, put in place a system that enables users to enter resistor colours and get a response right away on the resistor value. This will improve learning through trial and error and eliminate the need for manual calculations.

* Develop a tool that loads quickly and responds well to increase user satisfaction, particularly in educational contexts where time is often of the essence.
By fulfilling these objectives, the Resistor Colour Code Tool will serve as a useful tool for rapidly identifying resistors 

## User Experience (UX)

### User Requirements and Expectations
* User interface that is intuitive: Simple, uncomplicated, and easy to use, even for beginners.Each interactive element, including dropdowns for choosing resistor bands, has clear labelling and is visible.

* Accurate Calculations: Based on the chosen colour codes, accurate resistance values are calculated.  Users get immediate response when they choose or alter the colour of the resistor band.

* Wider Band Options: Support for 4-band, 5-band, and 6-band resistors, among other resistor types. Options for choosing multiplier bands and tolerance where appropriate.

* Visual Representation: As users choose the colours, a visual representation of the resistor helps them better understand the locations and meanings of each band. 

* Error Handling: When users pick items that are incompatible or if an input exceeds the expected range, clear messages or alarms should be sent. Correction suggestions to avoid misunderstandings or improper usage of the instrument.

### User Stories

* As user, I want to select resistor bands by color so that I can learn to calculate the resistance values manually.

* As a user, working on electronics projects, I need to visually match the color on my physical resistor with an interactive display so that I can confirm the resistor values before using them in circuits.

* As a user, I want to be able to quickly input multiple resistor color codes and get accurate results so that I can efficiently verify components during my work.

* As a mobile user, I want the tool to be responsive and easy to use on my smartphone or tablet so that I can calculate resistor values on the go.

* As an advanced user, I want to be able to configure settings for tolerance.

### Features To Achieve These Goals

## Design

Using colours that closely resemble the base colour of a real resistor—a light or neutral colour with coloured bands—will help the calculator simulate the appearance of resistors. Users may find it easier to mentally relate the digital instrument to the physical parts they are accustomed to handling as a result.

### Wireframes
[Wireframe Desktop 4 band](./assets/docs/wireframes/)  
[Wireframe Desktop 5 band](./assets/docs/wireframes/) 
[Wireframe Desktop 6 band](./assets/docs/wireframes/) 

[Wireframe Tablet 4 band](./assets/docs/wireframes/)   
[Wireframe Tablet 5 band](./assets/docs/wireframes/) 
[Wireframe Tablet 6 band](./assets/docs/wireframes/) 

[Wireframe Mobile 4 band](./assets/docs/wireframes/)   
[Wireframe Mobile 5 band](./assets/docs/wireframes/) 
[Wireframe Mobile 6 band](./assets/docs/wireframes/) 


### Logo
The base logo was found on the [Canva](https://www.freepik.com/premium-vector/resistor-logo_35489968.htm) website. 
![Logo image](./readme/media/logo.png)

### Colour Scheme
The palette colour scheme is used for this website are based on the colours of the colour chart shown below.

![Colour wheel image](./readme/media/colour-chart.png)

### Fonts
   The sans-serif font style was chosen for this website. It is clear and easy to read. [Google fonts: sans-serif](https://fonts.google.com/knowledge/glossary/sans_serif) 

![Font style image](./readme/media/font-style.png)

## Structure

The structure implemented for this project is a single HTML.

* Instructions button: Briefly explains how to use the tool.

* Resistor Color Code Calculator:Band Selection that allows users to choose the number of bands (usually 4, 5, or 6).

* Color Selectors:Dropdown menus or clickable color bands for setting the color of each resistor band.
  Each dropdown corresponds to a specific attribute of the resistor (e.g., first digit, second digit, multiplier, tolerance).

* Calculate Button: When clicked, computes the resistance based on the selected colors.

* Visual Representation: A graphical display of the resistor with the selected colors.

* Result Display: Shows the calculated resistance and possibly the tolerance in ohms.


### Technologies Used

- HTML
- CSS
- JavaScript

### Frameworks

- [Font Awesome](https://fontawesome.com/icons)
- [Google Fonts](https://fonts.google.com/)
- [Favicon](https://fonts.google.com/)

### Tools

- GitHub
- Visual Studio Code
- Photoshop
- Illustrator

## Features

### Main
#### Heading
The heading has a logo that reflects the theme of the website. This is a graphic representation of a resistor or a symbolic representation of electronics and circuitry. The logo helps in branding and makes the site immediately recognisable to users.

Website Title: Next to  the logo, the title "Resistor Colour Code Calculator" that is prominently displayed. This title clearly describes the purpose of the website and reinforces its functionality.

#### Instruction Button:
A button labeled "Instructions" (id="popupTrigger") is placed near the header area.

This button, when clicked, triggers a popup that provides users with a guide on how to use the resistor colour code calculator effectively.

This feature enhances user experience by offering accessible assistance, making the tool more user-friendly, especially for first-time visitors

#### Interactive Resistor Color Code Calculator:
Band Selection: Users can select between different resistor types (3-band, 4-band, 5-band, and 6-band), with dropdown menus for each band's color. These selections dynamically adjust the displayed resistor image and the calculated values.

#### Dynamic Resistor Display: 
As users select colors for each band, a visual representation of the resistor updates in real-time, reflecting the chosen colors.

#### Local Storage Interaction: 
Functions for saving, loading, and clearing resistor configurations using the browser's local storage allow users to save their settings for later use or clear them as needed.

#### Calculation Output:
 After selecting the colors, users can click the "Calculate" button to see the resistance value, tolerance, and the minimum and maximum resistance values based on the tolerance.

#### Alert
* Validation Alert:
Purpose: To inform the user that not all required selections have been made before performing a calculation.
Example Message: "Please select values from all dropdown menus before calculating."
This alert ensures that the user completes all necessary inputs to get a valid calculation result, preventing errors or incorrect resistor values.

* Save Confirmation Alert:
Purpose: To confirm that the resistor settings have been successfully saved to the browser's local storage.
Example Message: "Settings saved!"
This feedback reassures the user that their data has been stored correctly and can be retrieved later.

* Load Confirmation Alert:
Purpose: To notify the user that previously saved settings have been successfully loaded.
Example Message: "Settings loaded!"
This alert confirms that the saved data is now active on the calculator, allowing the user to continue where they left off or review saved configurations.

* No Saved Settings Alert:
Purpose: To inform the user that there are no saved settings available to load.
Example Message: "No saved settings found."
This message is useful for clarifying to the user that there is no saved data, which might be due to never saving any settings or clearing them previously.

* Clear Settings Alert:
Purpose: To confirm that all saved settings have been cleared from local storage.
Example Message: "Settings cleared!"
This message confirms the user's action of clearing data, ensuring they understand that all saved configurations have been erased.

#### Future features
To enhance the functionality and user experience of the Resistor Color Code website, the following features can be added in the future:

* User Accounts and Profile Management:
   Allow users to create accounts to save their preferences, past calculations, and custom configurations securely online.
* Advanced Calculation Options:
Include additional calculations such as power, current, and voltage using Ohm's Law, enhancing the tool's usefulness for more complex electronic projects.

###########################################

 ## User stories

### First Time Visitor Goals


### As a Returning Visitor
 

### As a Frequent User 
 

 # Design

## Wireframes:

* Index Page:
![Home Page Wireframe](readme/wireframes/home.png)

* Recipe Page:
![Recipe Page Wireframe](readme/wireframes/recipes.png)

* Contact Us Page:
![Contact Us Page Wireframe](<readme/wireframes/contact-us.png>)

- - -
## Features

There are three pages on the website:: the index page, the recepie page, and the conctact us page. Each page includes  a **navigation bar**, and a **footer**.

# **Index page**

The **Home** page is divided into 3 sections, *header*, *main section* and *footer*.

## Header
The *header* is a distinctive element that is consistently visible on all pages, with a *navigation bar* set against a chocolate background color and white text.
![Sweetwave Header](readme/media/header.png)
- - - 

## Main Section

The *main section* has three sections that consist of  the *hero section* ,*about section* and the *inspiration image section **.

### Hero Section

The *hero* aims to make a good impression on the user by including an image and a short paragraph introducing the website.
![Sweetwave Hero](readme/media/hero.png)

### About Section

The user will find brief details about the website's goal beneath the image. A quick backstory about how Sweetwave can relate to the user is provided as a means of encouraging user engagement.
![Sweetwave about](readme/media/about.png)


### Inspiration image 

The user is shown pictures that serve as inspiration for the type of baking they can accomplish near the end of the index page.
![Sweetwave inspiration images](<readme/media/inspiration-images.png>)
- - - 

## Footer 

The message in the footer invites users to click on the social icons, which makes it easier for them to stay in touch on social media. Links lead to user-friendly tab-based navigation. **This unique footer is consistently displayed on every page**.
![Sweetwave footer](readme/media/footer.png)
- - - 
# **Recipe page**

*Header*, *main section*, and *footer* are the three sections that make up the *Recipe* page. Both the [Footer](#footer) and the [Header](#header) are identical to the index page. 

## Main Section

### Recipe Section

There are two sections on the **Recipe** page: the first contains the first recipe, and the second contains the second recipe. The two sections have the same formatting.

Along with the recipe's name and date stamp, there's an eye-catching picture of the finished product. A subsection provides the user with further instructions on how to prepare the baking dish, along with a list of essential ingredients.

First Recipe:
![Sweetwave recipe page image](<readme/media/recipe-image.png>)
![Sweetwave recipe page instructions](<readme/media/recipe-instructions.png>)

Second Recipe:
![Sweetwave recipe page image](<readme/media/recipe-image-second.png>)
![Sweetwave recipe page instructions](<readme/media/recipe-instructions-second.png>)
- - - 

# **Contact Us page**

Three sections make up the *Contact us page*: the *header*, *main section*, and *footer*. The index page is the same as the [Header](#header) and the [Footer](#footer). 

## Main Section

The **Contact us** page has an easy-to-use contact form that asks for the user's name and email address and has a message section all its own. Before sending a message, the user must correctly complete all input fields.
A button that says "Let's bake" is located at the bottom of the form. The page features a tasty background picture of bread. 
![Sweetwave contact us form](<readme/media/contact-us.png>)
- - -

# Color Scheme

The choice of the chocolate brown color scheme was made to add a sleek, sophisticated, and modern look without lessening the image's impact.
![Sweetwave Colour Palette](<readme/media/color-scheme.png>)
- - - 

# Typography

The website maintains a consistent and unified typographic style by using a single font, **san serif** from **Google Fonts**.
- - - 

# Icons
The website's icons are available under a free license and were sourced from [Font Awesome](https://fontawesome.com/icons).

- - - 

# Deployment

The website is hosted directly from the master branch on GitHub Pages. Every time a new commit is made to the main branch, the deployed site is automatically updated. The landing page must have the name index.html in order for GitHub Pages to deploy it correctly.

The following actions were taken in order to deploy the page on GitHub Pages from its [GitHub repository](https://github.com/Tenda-M/project1-sweetwave): 
1. Sign up or log in to GitHub.
2. Launch the repository for the project.
3. Click the top menu and choose **Settings**.
4. In the navigation panel on the left, select "Pages."
5. Select the branch to be deployed (Main for more recent repositories, Master for older ones) in the "Source" section.
6. Choose the deployment folder, usually located at "/root."
7. Press "Save" and watch as the deployment procedure is finished.
8. The "Source" section will be beneath your URL.

## Run locally
**Fork:**
1. Sign up or log in to GitHub.
2. Go to https://github.com/Tenda-M/project1-sweetwave to access the project [repository].
3. Press the Fork icon located in the upper right corner.

**Clone:**
1. Sign up or log in to GitHub.
2. Go to https://github.com/Tenda-M/project1-sweetwave1. Sign up or log in to GitHub.
2. Go to https://github.com/Tenda-M/project1-sweetwave and open the project [repository].
3. Select your preferred cloning method (SSH, HTTPS, or GitHub CLI), click the "Code" button, and copy the provided link.
4. Locate the cloned directory by opening the terminal of your favorite code editor and going to the desired location.
5. Paste the link from step 3 into the terminal, type "git clone," and hit Enter.

- - -

# Testing 
The website is made to function well, which makes it simple for users to accomplish their objectives. Throughout the development process, any bugs were found and fixed using the Chrome development tools. Performance testing was carried out using manual techniques.

1. Every button on the website functions as it should when clicked.

2. All other site links, including social media links, open in new tabs.

## Functionality

1. To check for syntax errors on each page of the project, the W3C Markup Validator and W3C CSS Validator Services were utilized.

  * Index Page
![Index Page HTML](readme/test/index-checker.png)
  * Recipe Page
![Recipe HTML](readme/test/recipes-checker.png)
  * Contact Us Page
![Contact Us HTML](readme/test/contact-us-checker.png)
  * CSS Page
![CSS Page](readme/test/css-checker.png)

2. The Sweetwave website's performance, accessibility, best practices, and SEO are tested using Lighthouse, a feature of the Chrome Developer Tools.

  * Index Page
![Index Page HTML](readme/test/index-lighthouse.png)
  * Recipe Page
![Recipe HTML](readme/test/recipes-lighthouse.png)
  * Contact Us Page
![Contact Us HTML](readme/test/contact-us-lighthouse.png)

3. Before submitting, the Contact Us form needs all fields must be filled out.
  * Contact Us Form
![Contact Us Form](readme/test/sign-up-form.png)

4. Upon completing the contact us form, the user is taken to an alternate website.
  * Submitted page.
![Contact Us Form](readme/test/submitted-page.png)

## Usability
Testing was done on the navigation. Every webpage has a consistent and easily readable menu. The website's resources are easily found by users.

## Compatibility 
The website is set up to work properly across a range of browsers and screen sizes. Testing was done on Chrome, Firefox, Safari, and Edge to ensure compatibility.

## Responsiveness
Chrome DevTools was used to test responsiveness on a variety of screens, including the 5k iMac Pro (5120x2880px) and the iPhone 5 (320px wide). Media queries were used to increase responsiveness.

- - - 

# Credits
I used the Love Lunning project as an example when creating the navigation bar and footer.

All images on the website belong to me with the exception of the image on the contact us page taken from [nice page](https://nicepage.com/), under a free license agreement.

All recipes on the website are from [bbcgoodfood](https://www.bbcgoodfood.com)

All content was written by me.

- - -

# Acknowledgements
* My Mentor Excellence Ilesanmi for continuous helpful and constructive feedback.