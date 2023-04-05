## 👋 Welcome to GourmetGPS

Hello on the other side of the screen, thank you for taking the time to review this challenge.

This project is made in React v18, Typescript, Redux Toolkit and SASS.

The information you will see when running this project comes from 2 APIs:

1. Mapbox: with this API I'm getting location data
   <https://www.mapbox.com/>

2. Yelp Fusion: with this API I am getting all the restaurants near the selected location, this API also provides me with reviews from customers that have visited these restaurants (maximum 3)
   <https://fusion.yelp.com/>

To be able to use the Yelp Fusion API in the frontend of this project I had to create a small server that is deployed in <https://render.com/> and here you can take a look at the code <https://github.com/migueljh/gourmet-gps-service>

Before you run this project please add the environment variables needed to do a properly use of the API's

Create a file called .env.local <- just like that
and add the env variables already provided to you

To install packages run:

yarn install

To run this project do:

yarn run dev

Next, check your console and next to Local label you will see the address this project is running at

You can also check the responsive version :)

PS: Most of the logos come from <https://undraw.co/illustrations> and Figma community files from users who have left them for free use.