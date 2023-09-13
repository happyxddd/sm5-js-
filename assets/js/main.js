let number = Number(prompt('Сколько квадратиков хотим создать?'));
let m_case= document.querySelector('.main-case')
let result = '<div class="object"></div>'

for (a = 0; a < number; a++)
{
    console.log(a)
    m_case.insertAdjacentHTML('beforeend' ,result)
}