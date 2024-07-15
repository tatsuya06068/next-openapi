/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewTodo } from '../models/NewTodo';
import type { Todo } from '../models/Todo';
import type { UpdateTodo } from '../models/UpdateTodo';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * Get all todos
     * @returns Todo A list of todos
     * @throws ApiError
     */
    public static getTodos(): CancelablePromise<Array<Todo>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/todos',
        });
    }
    /**
     * Create a new todo
     * @param requestBody
     * @returns Todo The created todo
     * @throws ApiError
     */
    public static postTodos(
        requestBody: NewTodo,
    ): CancelablePromise<Todo> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/todos',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update a todo
     * @param id
     * @param requestBody
     * @returns Todo The updated todo
     * @throws ApiError
     */
    public static patchTodos(
        id: number,
        requestBody: UpdateTodo,
    ): CancelablePromise<Todo> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/todos/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a todo
     * @param id
     * @returns void
     * @throws ApiError
     */
    public static deleteTodos(
        id: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/todos/{id}',
            path: {
                'id': id,
            },
        });
    }
}
