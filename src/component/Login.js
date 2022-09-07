import React from 'react'
import burger from '../assets/images/burger.png'

export default function Login() {
    return (
      <>
        <div class="d-flex justify-content-center">
          <div class="brand_logo_container">
            <img src={burger}  class="brand_logo" alt="Logo"/>
          </div>
        </div>
        <div class="d-flex justify-content-center form_container">
          <form>
            <div class="input-group mb-3">
              <input type="text" name="" class="form-control input_user" value="" placeholder="username"/>
            </div>
            <div class="input-group mb-2">
              <input type="password" name="" class="form-control input_pass" value="" placeholder="password"/>
            </div>
            <div class="d-flex justify-content-center mt-3 login_container">
              <button type="button" name="button" class="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </>
    );
}
