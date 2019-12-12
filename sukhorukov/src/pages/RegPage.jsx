import React from 'react';

export function RegPage() {
  return (
    <div>
      <form action="http://localhost:3000/profile" method="POST" >
        <input type="text" name="name" id="name" placeholder="Login"/><br/>
        <input type="e-mail" name="email" id="email" placeholder="Email"/><br/>
        <input type="password" name="password" id="password"/><br/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
}