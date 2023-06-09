import { useState } from 'react';
import { MemoryLaneLayout } from '@components/layouts';

import style from './login.module.css';

export default function LoginPage() {

   const [isError, setError] =  useState<boolean>(false);


  return (
    <MemoryLaneLayout
      title="Memory Lane Home Living Inc. | Dementia Care Home Richmond Hill ON"
      pageDescription="MLHL Login"
    >
      <div
        style={{ marginTop: '200px' }}
        className="d-flex justify-content-center login-page"
      >
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className={`form-control`}
              placeholder="Enter username"
              id="username"
            />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className={`form-control border border-2 ${style.input}`}
              placeholder="Enter password"
              id="password"
            />
            { isError && <small className={`form-text text-danger ${style.error}`}>
              Username or Password are incorrect.
            </small>}
            <div className="m-2 text-end">
              <button type="submit" className={`btn ${style.button}`}>
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </MemoryLaneLayout>
  );
}
