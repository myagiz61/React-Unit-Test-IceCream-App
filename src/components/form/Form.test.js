import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";
import userEvent from "@testing-library/user-event";
test("Koşulların onaylanmasına göre buton aktifliği ", async () => {
  render(<Form />);

  // userin kurulumunu yapmak
  const user = userEvent.setup();

  // test etmek istediğimiz elemanları alma

  const orderBtn = screen.getByRole("button");

  const checkBtn = screen.getByRole("checkbox");

  // buton başlangıçta tıklanmaz halde
  expect(orderBtn).toBeDisabled();

  // chekbox ın durumunu kontrol etme
  expect(checkBtn).not.toBeChecked();

  // checkbox ı tikliyecez ve butonun aktif olup olmadığını kontrol edicez
  await user.click(checkBtn);
  expect(orderBtn).toBeEnabled();
});

test("onayla butonu hover olunca bildirim çıkar ", async () => {
  render(<Form />);

  const user = userEvent.setup();

  const checkBox = screen.getByRole("checkbox");

  const btnBox = screen.getByRole("button");

  await user.click(checkBox);

  fireEvent.mouseEnter(btnBox);

  const popup = screen.getByText("Size gerçekten", { exact: false });

  // bildirim gözüküryormu
  expect(popup).toBeVisible();

  // mouse'u butondan çekme
  fireEvent.mouseLeave(btnBox);

  // popup gözkmüyor mu?
  expect(popup).not.toBeVisible();
});
