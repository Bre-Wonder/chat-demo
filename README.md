# Start Here to set up your "Chat Me Up" Mobile App!

The Chat Me Upp Mobile App is designed for user to be able to allow users a chat interface where they can exchanged text and image messages. The user will start on an initial screen where they can choose their username and background color. Once the user clicks the "Start Chatting" button they will be directed to a second screen that allows the messaging of text and images. 


## How to get started:

#1 Set up Expo:
    *   Make sure that Node is a suitable version for Expo (at the time of writing this version 16 is the highest version of Node that can be used)
        Follow these commands to do so:

        nvm install 16.19.0
        nvm use 16.19.0
        nvm alias default 16.19.0

    *   Use the follow commands in your terminal to install Expo + Expo CLI:

        npm install -g expo-cli

    *   To allow for ease of testing you can download that Expo Go App for you phone. 

    *   To log into your expo-cli and run "expo login"

#2 Creating New Project:
    *   Create new project in your IDE for React Native by typing the following command:
        
        npx create-expo-app hello-world --template ("hello world" can be exchanged with whatever you want your project name to be)
        Note: if this is the first time you have created a "create-expo-app", you might be asked to for permissions to add create-expo-app packaged. Type "y" and hit enter

    *   If you are asked which templete to use, press enter to set up a blank one

#3 Navigate to your New Project:
    *   Navigate to your new project via the command line to run app and view it in the Expo Go App. Use the following commands:

        cd hello-world (or replace with your projects name)
        npm start OR expo start
    

## Project Dependancies:
*   React-Native
*   React Navigation/Native Stack

## API:
**Not using one at this time