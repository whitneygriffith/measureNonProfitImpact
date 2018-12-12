pragma solidity >=0.4.22 <0.6.0;
contract GoalSet {
    
    address owner;
    
    struct  goal {
    uint impactMinGoal;
    uint operationalMaxGoal;
    string nonprofit; 
    }
    
    goal myGoal;
    
    
    constructor() public {
    owner = msg.sender;
    
    
    myGoal.impactMinGoal = 80;
    myGoal.operationalMaxGoal = 20;
    
    
    
    }
    
    function returnImpactGoal() public view returns(uint){
        return myGoal.impactMinGoal;
    }
    
    function returnOpGoal() public view returns(uint){
        return myGoal.operationalMaxGoal;
    }
    
}