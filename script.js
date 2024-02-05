const ingredientsData = {
  1: ['����� �����', '����� ���������� � ������������ ��������� � ������-������ �����'],
  2: ['������ �� �����', '������� ������ �� ��� �� Stray Kids, � �������� �� ������ ������ ����, �������� ������� � ���������'],
  3: ['������', '���� ����, ������ ���� ����, ������, �������, ������ ������, ������ ������� �����, ����� ������, ��������� ��������, ������� � ��������.'],
  4: ['����-��� �����', '������� � ����� ��������� � ��������� �� ������'],
  5: ['����-��� ���', '������� � ����� ��������� � ��������� �� �������� ���'],
  6: ['����-��� ������', '������� � ����� ��������� � ��������� �� �������'],
};

function showIngredients(productId) {
  const ingredientsContainer = document.getElementById('ingredients');
  const ingredientsList = document.getElementById('ingredients-list');

  ingredientsList.innerHTML = '';

  if (ingredientsData[productId]) {
    ingredientsData[productId].forEach((ingredient) => {
      const listItem = document.createElement('li');
      listItem.textContent = ingredient;
      ingredientsList.appendChild(listItem);
    });
  } else {
    const listItem = document.createElement('li');
    listItem.textContent = '������ �� ������';
    ingredientsList.appendChild(listItem);
  }

  ingredientsContainer.style.display = 'block';
}

function closeIngredients() {
  const ingredientsContainer = document.getElementById('ingredients');
  ingredientsContainer.style.display = 'none';
}
function addToCart(productId) {
  // ����� ����� �������� ������ ��� ���������� �������� � ������� (��� ����� ���� ��������� �� ������� �������, ��������)
  
  // ���������� ����������� � ���������� � �������
  alert('����� �������� � �������!');
}
