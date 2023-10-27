using System;
using System.Collections;
using System.Collections.Generic;
using System.Security.Cryptography;
/*
Como se sabe, existe um corvo com três olhos. O que não se sabia é que o corvo com três olhos pode prever o resultado da loteria de Westeros. Enquanto todos os outros corvos coletam as apostas, o corvo de três olhos já sabe o resultado, e quando Bran sonha com o corvo, o corvo conta o resultado. O problema é que Bran apesar de lembrar do sonho, não consegue interpretá-lo sozinho em tempo hábil. A sua tarefa é fazer um programa para interpretar o sonho de Bran e calcular o resultado da loteria.

Durante o sonho, o corvo pisca diversas vezes e grita apenas 3 vezes. A cada grito um número do resultado da loteria é calculado.

Cada piscada do corvo comunica um número em binário. Um olho aberto significa 1 e um olho fechado significa 0. O olho da esquerda é o mais significativo e o da direita é o menos significativo. A cada piscada, este número deve ser somado, e quando o corvo grita, essa soma é um resultado.

Entrada
A entrada descreve, em cada linha, em sequência, ou um grito ou uma piscada do corvo.

Um grito é representado pela string caw caw

Uma piscada é representada por três caracteres * ou -, representando, respectivamente, um olho aberto ou um olho fechado, da esquerda para a direita.

Lembre-se que o corvo tem 3 olhos.

Os números sorteados na loteria não excedem 1000.

Saída
A saída são três linhas, cada linha com um número da loteria.

Exemplo de Entrada	
--*
caw caw
*--
caw caw
caw caw

Exemplo de Saída
1
4
0 
*/

class Corvo
{

    static void Main(string[] args)
    {
        Dictionary<string, int> binario_de_piscadas = new Dictionary<string, int>(){
                    {"--*",1},
                    {"-*-",2},
                    {"-**",3},
                    {"*--",4},
                    {"*-*",5},
                    {"**-",6},
                    {"***",7} };


        List<int> entradas_recebidas = new List<int>();
        List<int> resultados_encontrados = new List<int>();
        int gritos_contados = 0;
        while (true)
        {
            if (gritos_contados < 3)
            {
                string entrada_do_usuario = Console.ReadLine();
                if (entrada_do_usuario != "caw caw")
                {
                    entradas_recebidas.Add(binario_de_piscadas[entrada_do_usuario]);
                    Console.WriteLine($"Entrada adicionanada: { binario_de_piscadas[entrada_do_usuario]}");
                    
                }
                else
                {
                    gritos_contados++;
                    int soma_entradas = 0;
                    foreach (var item in entradas_recebidas)
                    {
                        soma_entradas += item; 
                    }
                    entradas_recebidas.Clear();
                    Console.WriteLine($"Soma das entradas: {soma_entradas}");
                    resultados_encontrados.Add(soma_entradas);
                }
            }
            else
            {
                foreach (var item in resultados_encontrados)
                {
                    Console.WriteLine(item);
                }
                break;


            }




        }

    }

}