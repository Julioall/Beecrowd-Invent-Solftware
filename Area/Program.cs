using System;
using System.Globalization;

/*
Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.

Exemplos de Entrada	
3.0 4.0 5.2

Exemplos de Saída
TRIANGULO: 7.800
CIRCULO: 84.949
TRAPEZIO: 18.200
QUADRADO: 16.000
RETANGULO: 12.000
*/
class Area
{
    public static void Main(string[] args)
    {
        double pi = 3.14159;
        string[] entrada = Console.ReadLine().Split();
        double A = Convert.ToDouble(entrada[0], CultureInfo.InvariantCulture);
        double B = Convert.ToDouble(entrada[1], CultureInfo.InvariantCulture);
        double C = Convert.ToDouble(entrada[2], CultureInfo.InvariantCulture);

        double TRIANGULO = A * C / 2;
        double CIRCULO = pi * (Math.Pow(C, 2));
        double TRAPEZIO = (A + B) / 2 * C;
        double QUADRADO = Math.Pow(B, 2);
        double RETANGULO = A * B;


        Console.WriteLine($"TRIANGULO: {TRIANGULO.ToString("F3").Replace(',', '.')}");
        Console.WriteLine($"CIRCULO: {CIRCULO.ToString("F3").Replace(',','.')}");
        Console.WriteLine($"TRAPEZIO: {TRAPEZIO.ToString("F3").Replace(',', '.')}");
        Console.WriteLine($"QUADRADO: {QUADRADO.ToString("F3").Replace(',', '.')}");
        Console.WriteLine($"RETANGULO: {RETANGULO.ToString("F3").Replace(',', '.')}");
        Console.ReadLine();
    }
}
