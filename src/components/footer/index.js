import React from "react";

export default function() {
  return (
    <div className="footer bg-dark bg-gradient mt-auto">
      <div className="container">
        <div className="footer__inner pt-2 pt-2 pb-2 d-flex align-items-center">
          <div className="copy text-light">Copyright 2021 (c)</div>
          <button className="btn btn-danger ms-auto" onClick={() => clear_ls()}>Сбросить данные</button>
        </div>
      </div>
    </div>
  )
}

function clear_ls() {
  localStorage.clear();
  window.location.reload();
}