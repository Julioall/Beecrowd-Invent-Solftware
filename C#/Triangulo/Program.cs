/*
 Leia 3 valores reais (A, B e C) e verifique se eles formam ou não um triângulo. Em caso positivo, calcule o perímetro do triângulo e apresente a mensagem:


Perimetro = XX.X


Em caso negativo, calcule a área do trapézio que tem A e B como base e C como altura, mostrando a mensagem


Area = XX.X

Entrada
A entrada contém três valores reais.

Saída
O resultado deve ser apresentado com uma casa decimal.

Exemplo de Entrada	
6.0 4.0 2.0

Exemplo de Saída
Area = 10.0
 */

using System;

class Triangulo
{

    static void Main(string[] args)
    {

        string[] entradas = Console.ReadLine().Split();
        double A = Convert.ToDouble(entradas[0]);
        double B = Convert.ToDouble(entradas[1]);
        double C = Convert.ToDouble(entradas[2]);

        if (A + B > C && A + C > B && B + C > A)
        {
            double Perimetro = A + B + C;
            Console.WriteLine($"Perimetro = {Perimetro:F1}");
        }
        else
        {
            double Area = ((A + B) * C) / 2;
            Console.WriteLine($"Area = {Area:F1}");
        }
    }
}