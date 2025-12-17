import type { Meta, StoryObj } from '@storybook/react-vite';

import { Modal, type ModalProps } from 'src/components/base/Modal';

const meta: Meta<ModalProps> = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: {
                disable: true,
            },
        },
        className: {
            control: {
                disable: true,
            },
        },
        open: {
            control: 'boolean',
        },
        onClose: {
            action: 'closed',
        },
    },
} satisfies Meta<ModalProps>;

export default meta;
type Story = StoryObj<ModalProps>;

export const Default: Story = {
    args: {
        open: false,
        children: '모달이 열렸어요.',
    },
};
