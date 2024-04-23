'use server';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/utils/prisma';

export async function create(formData: FormData) {
    const input = formData.get('input') as string;

    if (!input.trim()) {
        return;
    }

    await prisma.todo.create({
        data: {
            value: input,
        },
    });

    revalidatePath('/');
}

export async function deleteTodo(formData: FormData) {
    const inputId = formData.get('inputId') as string;

    await prisma.todo.delete({
        where: {
            id: inputId,
        },
    });

    revalidatePath('/');
}

export async function updateCompletedStatus(formData: FormData) {
    const inputId = formData.get('inputId') as string;
    const todo = await prisma.todo.findUnique({
        where: {
            id: inputId,
        },
    });

    if (!todo) {
        return;
    }

    const updatedStatus = !todo.isCompleted;

    await prisma.todo.update({
        where: {
            id: inputId,
        },
        data: {
            isCompleted: updatedStatus,
        },
    });

    revalidatePath('/');
}

export async function showAll(formData: FormData) {
    await prisma.todo.updateMany({
        where: {
            show: false,
        },
        data: {
            show: true,
        },
    });
    revalidatePath('/');
}

export async function showActive(formData: FormData) {
    const todos = await prisma.todo.findMany({
        where: {
            isCompleted: false,
        },
    });

    if (!todos) {
        await prisma.todo.updateMany({
            where: {
                isCompleted: true,
            },
            data: {
                show: false,
            },
        });
        return;
    }

    await prisma.todo.updateMany({
        where: {
            isCompleted: false,
        },
        data: {
            show: true,
        },
    });

    await prisma.todo.updateMany({
        where: {
            isCompleted: true,
        },
        data: {
            show: false,
        },
    });
    revalidatePath('/');
}

export async function showCompleted(formData: FormData) {
    await prisma.todo.updateMany({
        where: {
            isCompleted: true,
        },
        data: {
            show: true,
        },
    });
    await prisma.todo.updateMany({
        where: {
            isCompleted: false,
        },
        data: {
            show: false,
        },
    });
    revalidatePath('/');
}

export async function deleteCompletedTodos(formData: FormData) {
    await prisma.todo.deleteMany({
        where: {
            isCompleted: true,
        },
    });

    revalidatePath('/');
}
