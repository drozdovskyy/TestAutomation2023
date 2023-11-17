import java.math.BigDecimal;
import java.util.Scanner;

class Task1CalculationOfTheFinalProductPriceIncludingVAT {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        String priceRequirement = "Invalid data. Please enter valid data (positive number with no more than two decimals.";
        double priceExcludingVAT;
        double priceIncludingVAT;
        boolean isPositiveAndHasTwoDecimals;
        String requirement = "Invalid data. Please enter valid data (positive number with no more than two decimals.";

        System.out.println("Enter price of a product excluding VAT:");

        do {
            while (!scanner.hasNextDouble()){
                System.out.println(priceRequirement);
                scanner.next();
            }

            priceExcludingVAT = scanner.nextDouble();
            isPositiveAndHasTwoDecimals = (BigDecimal.valueOf(priceExcludingVAT).scale() <= 2) && (priceExcludingVAT > 0);

            if (!isPositiveAndHasTwoDecimals) {
                System.out.println(priceRequirement);
            }

        } while (!isPositiveAndHasTwoDecimals);

        priceIncludingVAT = priceExcludingVAT * 1.2;
        System.out.printf("Price excluding VAT: %.2f, Price including VAT: %.2f",priceExcludingVAT, priceIncludingVAT);

        scanner.close();
    }
}