import java.util.Scanner;

public class Task4EvenOrOddNumberChecker {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter number:");

        while(!scanner.hasNextInt()) {
            System.out.println("Invalid data. Enter valid integer number:");
            scanner.next();
        }

        int number = scanner.nextInt();

        scanner.close();

        if (number % 2 == 0) {
            System.out.println(number + " is an even number.");
        } else {
            System.out.println(number + " is an odd number.");
        }


    }
}
