
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
6. [Bugs / Improvements](#bugs--improvements)
   1. [lighthouse](#lighthouse)
7. [Validation](#validation)
   1. [HTML Validation](#html-validation)
   2. [CSS Validation](#css-validation)
   3. [JavaScript Validation](#javascript-validation)
8. [Lighthouse](#lighthouse-1)
9. [Testing](#testing)
   1. [Device Test](#device-test)
   2. [Browser Test](#browser-test)
   3. [Features Test](#features-test)
   4. [Testing User Stories](#testing-user-stories)
10. [Deployment](#deployment)
    1. [Clone](#clone)
    2. [Fork](#fork)
11. [Reference](#reference)
12. [Acknowledgements](#acknowledgements)

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
* As a user, I want to choose between 4-band, 5-band, and 6-band options so that I can specify the type of resistor I am working with.

* As a user I want the interface to update dynamically when I select different band options so that only the relevant dropdowns for my selected band option are visible and active.

* As a user I want the calculator to adjust its resistance colour calculation based on whether I select 4-band, 5-band, or 6-band, so that I can receive accurate resistance values for different configurations.

* As a new user I want clear instructions and help regarding how to select and interpret different band options, so that I can better understand how to use the calculator effectively without prior extensive knowledge.

* As a user I want the previously selected colors to reset or clear out when I switch between different band numbers, so that I do not have any carryover values that could affect my new calculations.

* As user, I want to select resistor bands by color so that I can learn to calculate the resistance values manually.

* As a user, working on electronics projects, I need to visually match the color on my physical resistor with an interactive display so that I can confirm the resistor values before using them in circuits.

* As a mobile user, I want the tool to be responsive and easy to use on my smartphone or tablet so that I can calculate resistor values on the go.

* As As a user,I want to receive an alert if I attempt to calculate the resistor value without selecting all required bands.

* As a user, I want to receive an alert for storage so that i know settings have been applied




## Design

Using colours that closely resemble the base colour of a real resistor—a light or neutral colour with coloured bands—will help the calculator simulate the appearance of resistors. Users may find it easier to mentally relate the digital instrument to the physical parts they are accustomed to handling as a result.

### Wireframes
[Wireframe Desktop 4 band](./readme/wireframes/desktop-4-band.png)  
[Wireframe Desktop 5 band](./readme/wireframes/desktop-5-band.png)  
[Wireframe Desktop 6 band](./readme/wireframes/desktop-6-band.png)  

[Wireframe Mobile 4 band](./readme/wireframes/mobile-4-band.png)     
[Wireframe Mobile 5 band](./readme/wireframes/mobile-5-band.png)  
[Wireframe Mobile 6 band](./readme/wireframes/desktop-6-band.png)  


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
- Gitpod
- Photoshop

## Features

### Main
#### Heading
The heading has a logo that reflects the theme of the website. This is a graphic representation of a resistor or a symbolic representation of electronics and circuitry. The logo helps in branding and makes the site immediately recognisable to users.

Website Title: Next to  the logo, the title "Resistor Colour Code Calculator" that is prominently displayed. This title clearly describes the purpose of the website and reinforces its functionality.

![Heading(Desktop) image](./readme/media/heading-desktop.png)

[Heading(Mobile) image](./readme/media/heading-phone.png)

#### Instruction Button:
A button labeled "Instructions is placed near the header area.

This button, when clicked, triggers a popup that provides users with a guide on how to use the resistor colour code calculator effectively.

This feature enhances user experience by offering accessible assistance, making the tool more user-friendly, especially for first-time visitors

![Instruction button image](./readme/media/instruction-button.png)

#### Interactive Resistor Color Code Calculator:
Band Selection: Users can select between different resistor types (3-band, 4-band, 5-band, and 6-band), with dropdown menus for each band's color. These selections dynamically adjust the displayed resistor image and the calculated values.

[Desktop 4 band](./readme/media/desktop-4-band-feature.png)  
[Desktop 5 band](./readme/media/desktop-5-band-feature.png)  
[Desktop 6 band](./readme/media/desktop-6-band-feature.png)  

[Mobile 4 band](./readme/media/phone-4-band-feature.png)     
[Mobile 5 band](./readme/media/phone-5-band-feature.png)  
[Mobile 6 band](./readme/media/phone-6-band-feature.png) 

#### Dynamic Resistor Display: 
As users select colors for each band, a visual representation of the resistor updates in real-time, reflecting the chosen colors.

[Resistor Display image without colour band selection](./readme/media/display-image-no-band.png)
[Resistor Display image with four colour band selection](./readme/media/display-image-4-band.png)
[Resistor Display image with five colour band selection](./readme/media/display-image-5-band.png)
[Resistor Display image with six colour band selection](./readme/media/display-image-6-band.png)

#### Local Storage Interaction: 
Functions for saving, loading, and clearing resistor configurations using the browser's local storage allow users to save their settings for later use or clear them as needed. These functions are triggered by button clicks in the user interface

[Local Storage Interaction image ](./readme/media/storage-buttons.png)

#### Calculation Output:
 After selecting the colors, users can click the "Calculate" button to see the resistance value, tolerance, and the minimum and maximum resistance values based on the tolerance.

[Calculate ouptput image without dispayed value](./readme/media/output-no-value.png)
[Calculate output image without dispayed value](./readme/media/output-value.png)

#### Alert
* Validation Alert:
Purpose: To inform the user that not all required selections have been made before performing a calculation.
Message: "Please select values from all dropdown menus before calculating."
This alert ensures that the user completes all necessary inputs to get a valid calculation result, preventing errors or incorrect resistor values.
![Validation Alert image ](./readme/media/validation-alert.png)

* Save Confirmation Alert:
Purpose: To confirm that the resistor settings have been successfully saved to the browser's local storage.
Message: "Settings saved!"
This feedback reassures the user that their data has been stored correctly and can be retrieved later.
![Save Confirmation Alert image ](./readme/media/save-alert.png)

* Load Confirmation Alert:
Purpose: To notify the user that previously saved settings have been successfully loaded.
Message: "Settings loaded!"
This alert confirms that the saved data is now active on the calculator, allowing the user to continue where they left off or review saved configurations.
![Load Confirmation Alert image ](./readme/media/loaded-alert.png)

* Clear Settings Alert:
Purpose: To confirm that all saved settings have been cleared from local storage.
Message: "Settings cleared!"
This message confirms the user's action of clearing data, ensuring they understand that all saved configurations have been erased.
![Clear Settings Alert image ](./readme/media/clear-alert.png)

#### Footer
The message in the footer invites users to click on the social icons, which makes it easier for them to stay in touch on social media and give us feedback. Links lead to user-friendly tab-based navigation. 
[Footer on desktop image ](./readme/media/footer-desktop.png)
[Footer on mobile image ](./readme/media/footer-mobile.png)

#### Future features
To enhance the functionality and user experience of the Resistor Color Code website, the following features can be added in the future:

* User Accounts and Profile Management:
   Allow users to create accounts to save their preferences, past calculations, and custom configurations securely online.
* Advanced Calculation Options:
Include additional calculations such as power, current, and voltage using Ohm's Law, enhancing the tool's usefulness for more complex electronic projects.

## Bugs / Improvements
### Lighthouse
The lighthouse feature in Google Chrome showed the issue of having some buttons and select elements not having associated label elements. Issue was resolved by adding in labels and the accessibility score went 
[Select elements issue image](./readme/test/select-bug.png)
[Button element issue image](./readme/test/button-bug.png)

[Lighthouse validation image](./readme/test/lighthouse-validation.png.png)

## Validation
To check for syntax errors on each page of the project, the W3C Markup Validator and W3C CSS Validator Services were utilized.
The validation of HTML, CSS, and JavaScript all passed since all of the problems had been fixed.

### HTML
[HTML validation image](./readme/test/html-validation.png.png)

### CSS
[CSS validation image](./readme/test/css-validation.png)

### JavaScript
[JavaScript validation image](./readme/test/.png)

## Testing
### Device test
Tested with Mobile, tablet, laptop and desktop all worked

### Browser test
Google Chrome, Microsoft Edge, Mozilla Firefox

### Features test
| Feature                                                                                                                                                        | Result |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
|   Tested instructin button works                                                                                                                           |Passed       |
|   Tested four band Radio button loads correct select band                                                                                                  |Passed       |
|   Tested five band Radio button loads correct select band                                                                                                  |Passed       |
|   Tested six band Radio button loads correct select band                                                                                                   |Passed       |
|   Tested dropdown menus for first band                                                                                                                     |Passed       |
|   Tested dropdown menus for second band                                                                                                                    |Passed       |
|   Tested dropdown menus for third band                                                                                                                     |Passed       |
|   Tested dropdown menus for fourth band                                                                                                                    |Passed       |
|   Tested dropdown menus for fifth band                                                                                                                     |Passed       |
|   Tested dropdown menus for tolerance band                                                                                                                 |Passed       |
|   Tested add settings storage button  and functionality                                                                                                    |Passed       |
|   Tested load settings storage button and functionality                                                                                                    |Passed       |
|   Tested clear settings storage button and functionality                                                                                                   |Passed       |
|   Tested calculate button                                                                                                                                  |Passed       |
|   Tested display value for calculated value                                                                                                                |Passed       |
|   Tested display value for tolerance value                                                                                                                 |Passed       |
|   Tested display value for calculated minimum value                                                                                                        |Passed       |
|   Tested display value for tolerance Maximum alue                                                                                                          |Passed       |
|   Tested calculated results for four band select with gold tolerance                                                                                       |Passed       |
|   Tested calculated results for five band select with gold tolerance                                                                                       |Passed       |
|   Tested calculated results for six band select with gold tolerance                                                                                        |Passed       |
|   Tested calculated results for four band select with silver tolerance                                                                                     |Passed       |
|   Tested calculated results for five band select with silver tolerance                                                                                     |Passed       |
|   Tested calculated results for six band select with silver tolerance                                                                                      |Passed       |
|   Tested Alert for validation alert                                                                                                                        |Passed       |
|   Tested Alert for save confirmation alert                                                                                                                 |Passed       |
|   Tested Alert for load confirmation alert                                                                                                                 |Passed       |
|   Tested Alert for no saved settings alert                                                                                                                 |Passed       |
|   Tested Alert for clear settings alert                                                                                                                    |Passed       |
|   Tested 404 page.                                                                                                                                         |Passed       |
                                                                                                                                                          

### Testing User Stories

**1. As a user, I want to choose between 4-band, 5-band, and 6-band options so that I can specify the type of resistor I am working with.**
| Feature | Action | Expected Result | Actual Result |
|-------------------|-------------------------------------------------------------------|----------------------------------------------|------------------|
| Basic Band Selection                     | After clicking on radio button for  4, 5 and 6 band | button response and updates the page | Work as expected       |

**2. As a user I want the interface to update dynamically when I select different band options so that only the relevant dropdowns for my selected band option are visible and active.**
| Feature | Action | Expected Result | Actual Result |
|-----------|-------------------------------------------------------------------|----------------------------------------------|------------------|
| Dynamic Interface Update                 | After clicking on radio button for  4, 5 and 6 band | User can multiple select increase from 4 to 6 | Work as expected    |

**3. As a user I want the calculator to adjust its resistance colour calculation based on whether I select 4-band, 5-band, or 6-band, so that I can receive accurate resistance values for different configurations.**
| Feature | Action | Expected Result | Actual Result |
|-----------|-------------------------------------------------------------------|----------------------------------------------|------------------|
| Accurate Calculation for Different Bands |nselect colours in the drop-down selection          | selected colour band are calculated             | Work as expected   |
   
**4. As a new user I want clear instructions and help regarding how to select and interpret different band options, so that I can better understand how to use the calculator effectively without prior extensive knowledge.**
| Feature | Action | Expected Result | Actual Result |
|-----------|-------------------------------------------------------------------|----------------------------------------------|------------------|
| Help and Instructions for Different Bands| Click on instructions button                         | A popup window opens                          | Work as expected    |

**5. As a user I want the previously selected colors to reset or clear out when I switch between different band numbers, so that I do not have any carryover values that could affect my new calculations.**
| Feature | Action | Expected Result | Actual Result |
|-----------|-------------------------------------------------------------------|----------------------------------------------|------------------|
| Reset Options When Switching Bands      | Click save, load, clear settings buttions              | Each button responds                         | Work as expected    |

**6. As user, I want to select resistor bands by color so that I can learn to calculate the resistance values manually.**
| Feature | Action | Expected Result | Actual Result |
|-----------|-------------------------------------------------------------------|----------------------------------------------|------------------|
| Calculation                             | Click calculate button                                 |   correct results are displayed       |     Work as expected   |

**7. As a user, working on electronics projects, I need to visually match the color on my physical resistor with an interactive display so that I can confirm the resistor values before using them in circuits.**
| Feature | Action | Expected Result | Actual Result |
|-----------|-------------------------------------------------------------------|----------------------------------------------|------------------|
| Visually colour display                 | select colours in the drop-down selection           | selected colour are displayed on the digital resistor | Work as expected   |

**8.As a mobile user, I want the tool to be responsive and easy to use on my smartphone or tablet so that I can calculate resistor values on the go.**
| Feature | Action | Expected Result | Actual Result |
|-----------|-------------------------------------------------------------------|----------------------------------------------|------------------|
| Mobile and tablet  responsive           | load site on mobile and tablet and test all functions | site responds as on desktop             | Work as expected    |


**9.As As a user,I want to receive an alert if I attempt to calculate the resistor value without selecting all required bands.**
| Feature | Action | Expected Result | Actual Result |
|-----------|-------------------------------------------------------------------|----------------------------------------------|------------------|
| Alert for Incomplete Band Selection    | leave out a selection of a colour band then press select|  an alert popup is shown on screen      | Work as expected     |


**11.As a user, I want to receive an alert for storage so that i know settings have been applied**
| Feature | Action | Expected Result | Actual Result |
|-----------|-------------------------------------------------------------------|----------------------------------------------|------------------|
| Alert for storage                     | Click save, load, clear settings buttions                 |  an alert popup is shown on screen    |   Work as expected     |

## Deployment

The website is hosted directly from the master branch on GitHub Pages. Every time a new commit is made to the main branch, the deployed site is automatically updated. The landing page must have the name index.html in order for GitHub Pages to deploy it correctly.

The following actions were taken in order to deploy the page on GitHub Pages from its [GitHub repository](https://github.com/Tenda-M/risistor-colour-code/tree/main): 
1. Sign up or log in to GitHub.
2. Launch the repository for the project.
3. Click the top menu and choose **Settings**.
4. In the navigation panel on the left, select "Pages."
5. Select the branch to be deployed (Main for more recent repositories, Master for older ones) in the "Source" section.
6. Choose the deployment folder, usually located at "/root."
7. Press "Save" and watch as the deployment procedure is finished.
8. The "Source" section will be beneath your URL.

### Fork:
1. Sign up or log in to GitHub.
2. Go to https://github.com/Tenda-M/risistor-colour-code to access the project [repository].
3. Press the Fork icon located in the upper right corner.

### Clone:
1. Sign up or log in to GitHub.
2. Go to https://github.com/Tenda-M/risistor-colour-code Sign up or log in to GitHub.
2. Go to https://github.com/Tenda-M/risistor-colour-code and open the project [repository].
3. Select your preferred cloning method (SSH, HTTPS, or GitHub CLI), click the "Code" button, and copy the provided link.
4. Locate the cloned directory by opening the terminal of your favorite code editor and going to the desired location.
5. Paste the link from step 3 into the terminal, type "git clone," and hit Enter.

## Reference
**Pictures, Colours, Logo**  
[logo](https://www.freepik.com/premium-vector/resistor-logo_35489968.htm)   
[Colours](https://coolors.co/ffffff-c1bcac-979b8d-5c7457-214e34)    
[Am I Responsive](https://ui.dev/amiresponsive)

**Create 404 page**  
[404 page](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site)


**Create branch, Marge branch**  
[Git commands](https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet)

**HTML, CSS, JavScript**  
I got the idea for my project from the Math walkthrough project and the study materials from Code Institute. To learn more about writing code and the various JavaScript approaches accessible, I checked out w3schools. I utilise the Stack Overflow website to troubleshoot and fix problems when I encounter them.

These links were used to develop this project  
[w3schools](https://www.w3schools.com/)  
[stackoverflow](https://stackoverflow.com/) 
[Pop up window](https://www.youtube.com/watch?v=sEJB7FtBoug)
[Band Selection drop down button](https://www.youtube.com/watch?v=XnpYMlcKKXQ)
[]()
[]()
[]()
[]()


## Acknowledgements
* My Mentor Excellence Ilesanmi for continuous helpful and constructive feedback.


###########################################




- - - 

# Credits
I used the Love Lunning project as an example when creating the navigation bar and footer.

All images on the website belong to me with the exception of the image on the contact us page taken from [nice page](https://nicepage.com/), under a free license agreement.

All recipes on the website are from [bbcgoodfood](https://www.bbcgoodfood.com)

All content was written by me.

- - -


