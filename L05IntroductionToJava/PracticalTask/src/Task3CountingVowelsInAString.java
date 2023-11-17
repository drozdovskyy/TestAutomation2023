import java.util.Scanner;

public class Task3CountingVowelsInAString {

    private static final String VOWELS = "aeiou";

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int vowelsCounter = 0;

        System.out.println("Enter string for vowels counting:");

        String string = scanner.next();

        scanner.close();

        for (char ch : string.toLowerCase().toCharArray()) {
            if (VOWELS.indexOf(ch) != -1) {
                vowelsCounter++;
            }
        }

        System.out.println("There are " + vowelsCounter + " vowels (a, e, i, o, u) found in the string \"" + string + "\"");


    }
}
