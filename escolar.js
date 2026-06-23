let aluno1 = "Paulo"
let matriculado1 = true
let idade1 = 14
let nivel1

if (!matriculado1) {
    nivel1 = "Aluno não matriculado"
} else if (matriculado1 && idade1 < 6) {
    nivel1 = "Educação Infantil"
} else if (matriculado1 && idade1 >= 6 && idade1 <= 10) {
    nivel1 = "Ensino Fundamental I"
} else if (matriculado1 && idade1 >= 11 && idade1 <= 14) {
    nivel1 = "Ensino Fundamental II"
} else if (matriculado1 && idade1 >= 15 && idade1 <= 17) {
    nivel1 = "Ensino Médio"
} else if (matriculado1 && idade1 >= 18) {
    nivel1 = "Ensino Superior ou EJA"
}

let aluno2 = "Renata"
let matriculado2 = false
let idade2 = 16
let nivel2

if (!matriculado2) {
    nivel2 = "Aluno não matriculado"
} else if (matriculado2 && idade2 < 6) {
    nivel2 = "Educação Infantil"
} else if (matriculado2 && idade2 >= 6 && idade2 <= 10) {
    nivel2 = "Ensino Fundamental I"
} else if (matriculado2 && idade2 >= 11 && idade2 <= 14) {
    nivel2 = "Ensino Fundamental II"
} else if (matriculado2 && idade2 >= 15 && idade2 <= 17) {
    nivel2 = "Ensino Médio"
} else if (matriculado2 && idade2 >= 18) {
    nive2 = "Ensino Superior ou EJA"
}

console.log("Paulo nível: " + nivel1)
console.log("Renata nível: " + nivel2)