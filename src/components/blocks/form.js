import "./form.css"
import Button from "../ui/Button";

function Form() {
  return (
    <div className="form">
      <div className="form__link-wrapper">
				<a href="" className="form__link">Зарегистрироваться</a>
			</div>
			<h1 className="form__header">Вход</h1>

			<fieldset id="email-fieldset" class="form__fieldset fieldset fieldset_error">
				{/* <label class="fieldset__label" for="form-login"></label> */}
        <input id="form-login" class="fieldset__input" type="text" name="login" placeholder="Логин" />
        <span id="login-error" class="fieldset__error">Поле не должно быть пустым</span>
      </fieldset>

			<fieldset id="password-fieldset" class="form__fieldset fieldset fieldset_error">
        {/* <label class="fieldset__label" for="form-password"></label> */}
        <input id="form-password" class="fieldset__input" type="password" name="password" placeholder="Пароль" />
        <span id="password-error" class="fieldset__error">Поле не должно быть пустым</span>
      </fieldset>

			<fieldset id="checkbox-fieldset" class="form__fieldset fieldset checkbox fieldset_error">
				<input id="checkbox" type="checkbox" />
				<label class="checkbox__label" for="checkbox">
					<svg width="17" height="17" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M5.36133 13L0.755859 8.39453L2.52246 6.62793L5.36133 9.45801L14.3613 0.493164L16.1279 2.2334L5.36133 13Z" fill="#787878"></path>
					</svg>
					<span class="checkbox__text">Я согласен получать обновления на почту</span>
				</label>
			</fieldset>
			
			<div id="checkbox-error" class="fieldset__error error"><span class="fieldset__error">Логин или пароль неверен</span></div>

			<fieldset class="form__fieldset fieldset submit">
				<Button>Войти</Button>
			</fieldset>

    </div>
		
  );
}

export default Form;
