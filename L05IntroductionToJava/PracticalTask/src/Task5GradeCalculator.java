import java.util.Scanner;

public class Task5GradeCalculator {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        String scoreRequirement = "Invalid data. Enter valid score in range (0-100):";
        int score;
        char grade;
        System.out.println("Enter score in range (0-100):");

        do {
            while (!scanner.hasNextInt()) {
                System.out.println(scoreRequirement);
                scanner.next();
            }
            score = scanner.nextInt();
            if ((score < 0) || (score > 100)) {
                System.out.println(scoreRequirement);
            }
        } while ((score < 0) || (score > 100));

        scanner.close();

        if (score > 90) grade = 'A';
        else if (score > 80) grade = 'B';
        else if (score > 70) grade = 'C';
        else if (score > 60) grade = 'D';
        else if (score > 50) grade = 'E';
        else grade = 'F';

        System.out.println("Score " + score + " corresponds with the letter grade \"" + grade + "\"");

    }
}
