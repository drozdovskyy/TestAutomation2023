import java.util.Scanner;

public class Task6SimpleAgeCategoryClassifier {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String ageRequirement = "Invalid data. Enter valid age:";
        int age;
        String ageCategory;

        System.out.println("Enter your age:");

        do {
            while (!scanner.hasNextInt()) {
                System.out.println("Invalid data. Enter valid age:");
                scanner.next();
            }
            age = scanner.nextInt();
            if ((age < 0) || (age > 122)) {
                if (age >122) System.out.println("No one lived longer than Jeanne Louise Calment. " + ageRequirement);
                else System.out.println(ageRequirement);
            }
        } while ((age < 0) || (age > 122));

        scanner.close();

        if (age >= 60) ageCategory = "senior";
        else if (age >= 20) ageCategory = "adult";
        else if (age >= 13) ageCategory = "teenager";
        else ageCategory = "child";

        System.out.println("Based on your age, You are" + ((ageCategory=="adult")?" an ":" a ") + ageCategory);
    }
}
