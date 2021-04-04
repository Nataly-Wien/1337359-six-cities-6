import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {ReviewsForm} from './review-form';

describe(`Should review posting form work correctly`, () => {
  it(`Should review form work correctly`, () => {
    const review = `The apartment at the back was lovely and roomy, the one at the front pretty cramped, but good value for money.`;

    render(< ReviewsForm addReview={() => { }} isCommentPosting={false} isPostCommentError={false} />);
    userEvent.type(screen.getByTestId(`review`), review);
    userEvent.click(screen.getByTestId(`radio-2`));

    expect(screen.getByDisplayValue(review)).toBeInTheDocument();
    expect(screen.getByTestId(`radio-1`)).not.toBeChecked();
    expect(screen.getByTestId(`radio-2`)).toBeChecked();
    expect(screen.getByTestId(`radio-3`)).not.toBeChecked();
    expect(screen.getByTestId(`radio-4`)).not.toBeChecked();
    expect(screen.getByTestId(`radio-5`)).not.toBeChecked();
  });

  it(`Should submit button be disabled when review is too short`, () => {
    const review = `Too short`;
    render(< ReviewsForm addReview={() => { }} isCommentPosting={false} isPostCommentError={false} />);

    userEvent.type(screen.getByTestId(`review`), review);
    userEvent.click(screen.getByTestId(`radio-3`));

    expect(screen.getByTestId(`submit-button`)).toBeDisabled();
  });

  it(`Should submit button be disabled when rating doesn't checked`, () => {
    const review = `The apartment at the back was lovely and roomy, the one at the front pretty cramped, but good value for money.`;

    render(< ReviewsForm addReview={() => { }} isCommentPosting={false} isPostCommentError={false} />);
    userEvent.type(screen.getByTestId(`review`), review);

    expect(screen.getByTestId(`submit-button`)).toBeDisabled();
  });

  it(`Should submit button be enabled when review is langer then 50 characters and rating is checked`, () => {
    const review = `The apartment at the back was lovely and roomy, the one at the front pretty cramped, but good value for money.`;

    render(< ReviewsForm addReview={() => { }} isCommentPosting={false} isPostCommentError={false} />);
    userEvent.type(screen.getByTestId(`review`), review);
    userEvent.click(screen.getByTestId(`radio-4`));

    expect(screen.getByTestId(`submit-button`)).not.toBeDisabled();
  });
});
