export class OperacoesMatematicas {
  somarArray(numeros: number[]): number {
    const somaNumeros = numeros.reduce((valorAcumulado, numero) => valorAcumulado += numero, 0)

    return somaNumeros;
  }

  ehPar(numero: number): boolean {
    if (numero % 2 === 0) {
      return true
    } else {
      return false
    }
  }
}

export const MAX_VALOR = 1000;