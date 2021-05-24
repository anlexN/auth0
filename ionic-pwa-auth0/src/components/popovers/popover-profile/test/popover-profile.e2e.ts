import { newE2EPage } from '@stencil/core/testing';

describe('popover-profile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<popover-profile></popover-profile>');

    const element = await page.find('popover-profile');
    expect(element).toHaveClass('hydrated');
  });
});
