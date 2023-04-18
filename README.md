# MunderDifflin
Munder Difflin is a full stack application allowing a user to view, filter, and buy paper products. The application allows a user to add paper to a cart and update the amount of items in the cart using full CRUD on the client-side. The server-side, uses authentication to validate the user and allow the user to update their cart and account accordingly. 

## Get Started
```
git clone https://github.com/DerekMalone/Stark-MunderDifflin.git
cd Stark-MunderDifflin
```
To run the code, paste the above git commands into your terminal. You will need to open an instance of Visual Studio. Select the "Open a project of solution" option. Navigate to the folder that the above git command cloned to. open the Caffe-Cache.sln file. You will need to go to the DBInit.sql file located in the SQL folder. Execute the DBInit.sql file "Ctl+Shift+E". Then "Start" the C# file by selecting the Start command or "F5".
Once the Server-Side has been successfully started, in your terminal cd into the caffe-cache-client directory. If installed, use the `code .` command to open Visual Studio Code. You will then need to run `npm start` to launch the web application.

## About the User 
- The ideal user for this application is a company or individual who needs high quality paper products.
- The problem this app solves for them is it allows the user to buy high quality paper from a reputable source with ease and efficiency.

## Features 
- When a user selects a paper product to add to their cart, it is added in real time to their cart.
- When a user views their cart, they will be able to edit the amount of paper they are purchasing.
- When a user views their cart, they are able to remove a paper product from their cart.

## Code Snippet
### Server-Side: 
``` 
 [HttpPut("Edit/{id}")]
        public IActionResult UpdatePaper(int id, [FromBody] Paper paperObj)
        {
            try
            {
                _paperRepo.UpdatePaper(id, paperObj);

                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound();
            }
        }
```

### Client-Side:
```
const handleSearch = (e) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord);

        if (searchWord === '') {
            func({});
        } else {
            func(filteredData);
        }
    };

```

## Contributors
- [Derek Malone](https://github.com/DerekMalone)
- [Meseret Gebremariam](https://github.com/Meseret-G)
- [Daniel Sitarek](https://github.com/dsitarek)
- [Harika](https://github.com/hcodes11)
