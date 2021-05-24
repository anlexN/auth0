import { newSpecPage } from '@stencil/core/testing';
import { PopoverProfile } from '../popover-profile';

describe('popover-profile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PopoverProfile],
      html: `<popover-profile></popover-profile>`,
    });
    expect(page.root).toEqualHtml(`
      <popover-profile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </popover-profile>
    `);
  });
});
