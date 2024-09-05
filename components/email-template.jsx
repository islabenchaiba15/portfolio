import * as React from 'react';

export const EmailTemplate =({
  firstName,
  message,
  email
}) => (
  <div>
    <h4>you have received email from {firstName}</h4>
    <p className="text-black">{message}</p>
    <h4>the email sender is  {email}</h4>
  </div>
);