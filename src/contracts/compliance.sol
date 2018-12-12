contract Compliance {
   address public charity; //Charity's Digital Signature; Digital Signature is stored in external database linked with Charity's information
   uint private PROGRAM_MAX; //TODO: constants
   uint private ADMINISTRATIVE_MAX;
   uint public programExpense;
   uint public administrativeExpense;
   uint public totalRevenue;
  // uint public computedProgramExpense;
   //uint public computedAdministrativeExpense;
   //checkpoint 
   
   //Temporary computational variables
   //uint public
   //TODO: check private vs public

    address owner;
  

    // This is the constructor which registers the
    // creator and the assigned name.
    constructor() public {

        owner = msg.sender;
        PROGRAM_MAX = 85;
        ADMINISTRATIVE_MAX = 15; //TODO: Correct variable type 
    }

   
   struct CharityInfo {
       uint totalRevenue;
       uint programExpense;
       uint administrativeExpense;
   }
   
   
   

   
    function Compute () public returns(bool){
        
        //API CALL
        //CharityInfo charity_info =  CharityInfo(100.0, 80.0, 10.0); //TEST
        //computedProgramExpense = charity_info.programExpense / charity_info.totalRevenue;
       // computedAdministrativeExpense = charity_info.administrativeExpense / charity_info.totalRevenue;
        //Testing Program Compliance
        administrativeExpense = 10;
        totalRevenue = 100;
        programExpense = 85;
        if((programExpense) >= PROGRAM_MAX) return true;

    } 
  
  
     /*
   
      function APICall () private{
        charity_info.totalRevenue = 100;
        charity_info.programExpense = 80;
        charity_info.administrativeExpense = 10;
   } 
   
      function isCompliant() internal constant returns(bool){
       //Extra code to write to database: charity, and percentages of program and administration 
       return true;
   }
   
   */
   
   
  // function notCompliant() internal constant{
       //TODO
//   }
   
   // Fallback function in case someone sends ether to the contract so it doesn't get lost and to increase the treasury of this contract that will be distributed in each game
  // function() external public payable {}
   
}