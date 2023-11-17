import java.util.Scanner;

public class Task2AverageTemperatureCalculation {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        float[] temperatures = new float[5];

        for (int i = 0; i < 5; i++) {
            System.out.println("Enter temperature of day #" + (i+1) + ": ");
            while (!scanner.hasNextFloat()) {
                System.out.println("Invalid data. Please enter valid float.");
                scanner.next();
            }
            temperatures[i] = scanner.nextFloat();
        }

        float sum = 0;
        for (float temperature : temperatures) {
            sum += temperature;
        }

        float average = sum / temperatures.length;

        System.out.println("Average temperature: " + average);

        scanner.close();
    }

}
