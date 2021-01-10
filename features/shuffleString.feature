Feature: Test ShuffleString function

  Scenario: "aiohn" transforms to "nihao"
    When the given string is 'aiohn'
     And the given array is 3,1,4,2,0
    Then the result is 'nihao'