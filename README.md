Angular-Node-Express-App-Template
=================================

##Setup
1. Install [Git](http://git-scm.com/downloads) if you have not already done so.
    
    **Recommended Git Installation** 
    1. Agree with the GNU General Public License 
    2. The default selected components should be enough
    3. Use Git from the Windows Command Prompt
    4. Checkout as-is, commit as-is
    5. Finish installation
  
2. Install [Node.JS](http://nodejs.org/download/)

    Node will be used to run the server, downloading and managing project dependencies from `package.json`, and configure the server using [Express](http://expressjs.com/), which runs on top of Node, to run the server the way we want it.
    
	When ready to download Node, select the `Windows Installer (.msi)` 64-bit, if you are running on a 64-bit machine, and install with the defaults. Once the installation finishes, you will have to **restart** your PC for changes to take effect. 

3. Install a necessary Node global package
  
    There is a Node package that needs to be installed globally on your system. To install it, open a terminal/command prompt window run the following command.
    
     ```
     npm install -g nodemon
     ```
4. Cloning this repository
    1. Navigate to a folder directory on your machine outside of the folder you normally use to store you projects and where you would want to clone this repository to (ex. I want to clone into \Documents\Projects, so you want to be in \Documents outside of the \Projects folder). 
    2. If you installed Git, right click on your equivalent \Projects folder and select `Git Bash`
    3. If you run into an ssl/certificate error, execute the following command to disable SSL certificate verification. This is needed because the Git server's certificate is self signed. This command configures Git globally, so it only needs to be run once.
          
            git config --global http.sslVerify false
          
    4. Clone this repository by copying and pasting this command `git clone https://github.com/ejborges/Angular-Node-Express-App-Template.git` into the git terminal window (in git, the `Insert` key = paste), then press `Enter`. 

5. The repository will now be cloned into your equivalent \Projects folder and be named **Angular-Node-Express-App-Template**.

6. Once the download finished, cd into the folder by running `cd Angular-Node-Express-App-Template` 

7. To this project's dependencies installed, run `npm install`. This will look at the `package.json` file and install the dependencies into the `node_modules` folder. 
8. Once the dependencies have finished downloading, start the server by running `nodemon server.js`. This will run the server on port 3000. Go ahead and open a browser window to [localhost:3000](http://localhost:3000)
  - If you encounter the error `listen EADDRINUSE`, this means that the server address on port 3000 is already in use. You can:
    - Close the process using port 3000
    - Edit server.js variable portNum to be another value.

9. Since this is a template, there will not be much to see when you open the page. Everything is set up to begin development on an AngualrJS app. 
