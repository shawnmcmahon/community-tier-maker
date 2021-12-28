Iteration 1 

- It should take in a link from tiermaker.com as an input and import information from the tier list 
    x Should import - 
        1. title
        2. tier list board
        3. corresponding images to be rated

- It should create a tier list replica from the imported information 

- It should allow the host to highlight an image to be staged for the next round to be rated 

- It should contain a vote button that starts the voting round for the community 

- It should contain a way for the chat to vote on their tier choice for the image
    - Do they vote in Twitch chat? 
        - Need to look into websockets if going this route 
        - Leaning towards this route for future Twitch integration with bits and donations 
    - Do they vote on the website someway? 
        - Would need to create a shareable session. 

- It should contain a final results poll that displays the results of the poll. The poll should show the percentage of people that voted for each tier. The poll should have the winning tier highlighted. 

- It should add the image to the tier it was voted to. The new, updated tier should be displayed to the user before a new round begins. 

- It should display the finished community tier when all images have been voted on 

- It should have a way to download or share the community tier list when finished. 


Iteration 2 

Monitzation ideas

- It should have a settings menu that lets you change how bits and donations effect the community tier 

- It should have a way to donate Twitch bits to "boost" how much your vote is worth 

- It should have a linear boost setting 
    x 100 bits = +1 extra votes 
    x 500 bits = +5 extra votes 
    x 1000 bits = +10 extra votes 

- It should have an progressive boost setting 
    x 100 bits = +1 extra vote 
    x 500 bits = +6 extra votes 
    x 1000 bits = +15 extra votes 

Iteration 3 

Channel Points Betting 

- It should have a way to wager channel points in order to guess on what the community thinks the content creators rating is 

- It should have a button that reveals the channel point distribution after the content creator has made their rating
    x Ratings should not be displayed to the user until the content creator has rated


