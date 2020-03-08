/**
 * Title                        : Javascript Coding Challenge 4
 * Subtitle                     : Calculate Validation Number
 * Author                       : Rother Jay B. Copino
 * Date Written                 : February 26, 2020
 * Java Compiler Version        : 13.0.2
 * Java Development Kit Version : 13.0.2
 * Requirements:
 *      1.  Write a function that accepts an integer and returns a “validation” number.
 *          This validation number is calculated by adding all the digits in the input.
 *      2.  If the result of this sum has more than a single digit, another iteration is
 *          required, repeat the process until a single digit number is calculated.
 * Input file by batch          : calculateValidationNumber.in (e.g. java CalculateValidationNumber)
 * Input via arguments          : (e.g. java CalculateValidationNumber 44444)
 */

import java.lang.Math;
import java.io.File;
import java.io.BufferedReader;
import java.io.FileReader;

/**
 * This class will accept an input integer and returns a validation 
 * number by adding all the digits of the input integer.
 */
public class CalculateValidationNumber {

    public static void main(String[] args) {

        if (args != null && args.length == 1) {
            String inputNumberStr = args[0];
            calculateValidationNumber(inputNumberStr);
        } else {
            readInputFile();
        }
        
    }

    /**
     * This method will read the input file and parse the input value
     * by new line and iterate over the give inputs.
     * 
     * Return value: void/none
     */
    private static void readInputFile() {
        File currentDir = new File("");
        String inFileDir = currentDir.getAbsolutePath() + File.separator + "calculateValidationNumber.in";
        File inFile = new File(inFileDir);

        try {
            BufferedReader br = new BufferedReader(new FileReader(inFile));
            String str;
            int validationNumber = 0;

            while ((str = br.readLine()) != null)  {
                validationNumber = calculateValidationNumber(str);
                System.out.println("| Given " + str + ", validation number is equal to the output: " + validationNumber);
            } 
        } catch (Exception e) {
            System.out.println(e);
        }
    }

    /**
     * This method will calculate the validation number given
     * the input integer and continuously iterate if the digits 
     * int the sum is more than one (1).
     */
    private static int calculateValidationNumber(String inputNumberStr) {
        
        if (inputNumberStr != null && inputNumberStr != "") {
            int sum = 0;
            int sumReset = 0;

            sum = accumulateSumOfDigits(inputNumberStr, sum);
            
            while (String.valueOf(sum).length() > 1) {
                sumReset = 0;
                sumReset = accumulateSumOfDigits(String.valueOf(sum), sumReset);
                sum = sumReset;
            }

            return sum;
        }

        return 0;
    }

    /**
     * This method will calculate the sum of the digits
     * given the integer and the sum.
     */
    public static int accumulateSumOfDigits(String inputNumberStr, int sum) {
        char[] inputNumberCharArray = inputNumberStr.toCharArray();

        for (char ch: inputNumberCharArray) {
            sum += Integer.parseInt(String.valueOf(ch));
        }

        return sum;
    }

    

}

