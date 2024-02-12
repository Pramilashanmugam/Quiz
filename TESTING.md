# Testing

## Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px and upwards as defined in [WCAG 2.1 Reflow criteria for responsive design](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) on Chrome, Edge, Firefox and Opera browsers.

* Steps to test:
 * Open browser and navigate to [Quiz to check your knowledge](https://pramilashanmugam.github.io/Quiz/)
  * Open the developer tools (right click and inspect)
  * Set to responsive and decrease width to 320px.
  * Set the zoom to 50%.
  * Click and drag the responsive window to maximum width.

Expected:

Website is responsive on all screen sizes and no images are pixelated or stretched. No horizontal scroll is present. No elements overlap.

Actual:

Website behaved as expected.

#### Cross-Browser Testing:

Website was also opened on the following browsers with no issues

 * Safari

   ![05B26003-18FF-4777-8E57-135CFC871939](https://github.com/Pramilashanmugam/Quiz/assets/150790058/a65be910-1e71-4ace-8cb9-9cfd0d724369)

 * Mozilla firefox
   
   ![mozilla](https://github.com/Pramilashanmugam/Zumba-Project1/assets/150790058/88a5f1d3-a9b2-4a78-bed6-63eabed21081)

 * Chrome

   ![Screenshot 2024-02-12 8 20 28 PM](https://github.com/Pramilashanmugam/Quiz/assets/150790058/6f818d42-fa51-43be-a4f9-9b1420ebb53b)

 * Edge

   ![Screenshot (28)](https://github.com/Pramilashanmugam/Zumba-Project1/assets/150790058/e6775d4f-c4a3-4087-b601-69b7b1aaf430)

Website was also opened on the following devices and no responsive issues were seen:

* Galaxy fold
* ipad Air
* iPhone SE
* Samsung s8+
* Surface Pro 7

## Functional Testing

#### Buttons Testing:

* Each buttons in this website are tested to check whether it does its functionality as per design and the outcome was same as expected as per the functionality.

   * ###### Start button

     ![Screenshot 2024-02-10 8 51 42 PM](https://github.com/Pramilashanmugam/Zumba-Project1/assets/150790058/563bdf89-5dbc-4881-a18b-43cd2ff861e6)

  * ###### Ready button

    ![Screenshot 2024-02-10 8 50 18 PM](https://github.com/Pramilashanmugam/Zumba-Project1/assets/150790058/4942dd51-cd26-4ef2-8d64-78ca6ea903ca) 

  * ###### Exit button

     ![Screenshot 2024-02-10 8 47 02 PM](https://github.com/Pramilashanmugam/Zumba-Project1/assets/150790058/31d84bd5-b01a-4027-8560-71feff0ad9b0)

  * ###### HTML Button

     ![Screenshot 2024-02-10 8 54 07 PM](https://github.com/Pramilashanmugam/Zumba-Project1/assets/150790058/3ade1305-9fae-4db5-bf98-55ed14e57bba)

  * ###### CSS Button

     ![Screenshot 2024-02-10 8 54 54 PM](https://github.com/Pramilashanmugam/Zumba-Project1/assets/150790058/ee718d05-a110-47bf-aa19-e276a9c2de7b)

  * ###### JavaScript Button

     ![Screenshot 2024-02-10 8 55 52 PM](https://github.com/Pramilashanmugam/Zumba-Project1/assets/150790058/9a1005e8-1c54-4efe-914f-36644669aa67)
  
  * ###### Next Button

     ![Screenshot 2024-02-10 9 09 44 PM](https://github.com/Pramilashanmugam/Zumba-Project1/assets/150790058/2e1eba25-164c-4503-93ad-0768f2d4bee1)
  
  * ###### Play Again Button

     ![Screenshot 2024-02-10 9 21 59 PM](https://github.com/Pramilashanmugam/Zumba-Project1/assets/150790058/83fe3a21-a149-4ede-b60e-5191c6de9ecb)

  * ###### Display Question in Quiz
    
    ![Screenshot 2024-02-10 9 30 10 PM](https://github.com/Pramilashanmugam/Zumba-Project1/assets/150790058/1cc86bfa-4be7-4cf9-aee5-508ed8112e38)

  * ###### Answer Buttons

    ![Screenshot 2024-02-10 9 45 52 PM](https://github.com/Pramilashanmugam/Zumba-Project1/assets/150790058/dca8d9d8-c679-4142-8e06-47e85a02b585)

  * ###### Score Display

    ![Screenshot 2024-02-10 10 12 27 PM](https://github.com/Pramilashanmugam/Zumba-Project1/assets/150790058/fea7e54d-65a5-48e5-a13c-57a34dafd1e5)

  * ##### Try and Catch 

    * I have included try and catch in most of the functions as it helps in identifying errors in critial functions. It will help in reducing time on debugging. I have tried to manipulate the function and found the errors are catched by this method.


* #### Bugs faced during Development and Testing:

There are no known bugs at the moment. Below are some bugs found and fixed

 * After creating 2 javascript files, the Start button stopped functioning, despite using the right import commands and export commands inside the javascript files. I identified that the issue was in index.html file and debugged the same by adding type ="module" inside the script element in the HTML file.

  * Initial development of the website was only with html quiz, once the quiz started functioning as per requirement, I added Css and Javascript question arrays. But after inclusion of new arrays, the funtionality for CSS and Javascript button didnot work as per design. The corresponding questions were not called on click of CSS and Javascript buttons rather it was displaying the HTML questions. Then the issue was identified and created a parameter 'val' inside the startquiz and displayquiz function. This parameter will take the value of respective quiz button to each function and works according to the requirement.

  * When play again button was clicked, the response till reaching quiz worked perfectly but later it was showing the previous quiz last question instead of reseting the question from question number one. This issue got rectified by setting currentQuestionIndex = 0 in Start quiz.

  * Next button was not getting hidden when the question is got displayed. This was fixed by identifying the typo error in the code.  

  * 404.html page was not functioning until 404.md file with the following command was included '---permalink: /404.html---'. This solution was found in slack community.

## Validator Testing

 * ### HTML 
   * No errors were returned when passing through the official W3C Validator.

   ![Screenshot 2024-02-10 11 18 33 PM](https://github.com/Pramilashanmugam/Zumba-Project1/assets/150790058/e303fc86-2113-4d9a-984e-683d8fbcc796)


* ### CSS
  * No errors were found when passing through the official (Jigsaw) validator.
   
   ![Screenshot 2024-02-10 11 25 09 PM](https://github.com/Pramilashanmugam/Zumba-Project1/assets/150790058/d25d46dc-6d1f-4364-ba8a-d26972e0d1ef)


* ### JavaScript

  * No errors were found on script.js file when passing through the official (JSHint) validator.

  ![Screenshot 2024-02-10 11 27 43 PM](https://github.com/Pramilashanmugam/Zumba-Project1/assets/150790058/bd1833ee-773e-4082-9a7d-f32b474de127)

  * No errors were found on quizData.js file when passing through the official (JSHint) validator.

  ![Screenshot 2024-02-10 11 30 08 PM](https://github.com/Pramilashanmugam/Zumba-Project1/assets/150790058/7685ab96-473a-4c7c-b9a9-89ff552a46c2)



