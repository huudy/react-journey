//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Election {
    struct Candidate {
        uint32 id;
        string name;
        uint32 voteCount;
    }
    mapping(address => bool) public voters;
    mapping(uint32 => Candidate) public candidates;
    uint32 public candidatesCount;
    event votedEvent(uint32 indexed _candidateId);

    constructor() {
        addCandidate("Cand1");
        addCandidate("Cand2");
    }

    function addCandidate(string memory _name) private {
        console.log("Adding candidate with name '%s'", _name);
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function vote(uint32 _candidateId) public {
        // require that they haven't voted before
        console.log("Voting for candidate '%n'", _candidateId);

        require(!voters[msg.sender], "We already counted your vote");

        // require a valid candidate
        require(
            _candidateId > 0 && _candidateId <= candidatesCount,
            "Candidate not found"
        );

        // record that voter has voted
        voters[msg.sender] = true;

        // update candidate vote Count
        candidates[_candidateId].voteCount++;

        // trigger voted event
        emit votedEvent(_candidateId);
    }
}
