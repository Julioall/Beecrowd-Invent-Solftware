

using System;


/*
Entrada
Leia três valores de ponto flutuante (double) A, B e C.

Saída
Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.

Exemplos de Entrada	
10.0 20.1 5.1

Exemplos de Saída
R1 = -0.29788
R2 = -1.71212




Exemplos de Entrada	
0.0 20.0 5.0

Exemplos de Saída
Impossivel calcular

*/
class FormulaBhaskara
{
    public static void Main(string[] args)
    {
        string[] entradas = Console.ReadLine().Split();
        double a = Convert.ToDouble(entradas[0]);
        double b = Convert.ToDouble(entradas[1]);
        double c = Convert.ToDouble(entradas[2]);
        // delta = b²-4*a*c
        double delta = Math.Pow(b, 2) - 4 * a * c;


        if (delta < 0)
        {
            Console.WriteLine("Impossivel calcular");
        }

        else
        {
            double R1 = (-b + Math.Sqrt(delta)) / (2 * a);
            double R2 = (-b - Math.Sqrt(delta)) / (2 * a);

            if (!double.IsNaN(R1) && !double.IsNaN(R2))
            {
                Console.WriteLine($"R1 = {R1:F5}");
                Console.WriteLine($"R2 = {R2:F5}");
            }
            else
            {
                Console.WriteLine("Impossivel calcular");
            }
        }
    }
}