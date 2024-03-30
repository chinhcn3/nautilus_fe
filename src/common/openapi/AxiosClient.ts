/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { AdminCategoriesService } from './services/AdminCategoriesService';
import { AdminCommentsService } from './services/AdminCommentsService';
import { AdminControlsService } from './services/AdminControlsService';
import { AdminGiftsService } from './services/AdminGiftsService';
import { AdminTopicsService } from './services/AdminTopicsService';
import { AdminUsersService } from './services/AdminUsersService';
import { CategoriesService } from './services/CategoriesService';
import { CommentsService } from './services/CommentsService';
import { ContentsService } from './services/ContentsService';
import { GiftsService } from './services/GiftsService';
import { MessagesService } from './services/MessagesService';
import { NotificationsService } from './services/NotificationsService';
import { SessionsService } from './services/SessionsService';
import { SseService } from './services/SseService';
import { TopicsService } from './services/TopicsService';
import { UploadsService } from './services/UploadsService';
import { UsersService } from './services/UsersService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class AxiosClient {

  public readonly adminCategories: AdminCategoriesService;
  public readonly adminComments: AdminCommentsService;
  public readonly adminControls: AdminControlsService;
  public readonly adminGifts: AdminGiftsService;
  public readonly adminTopics: AdminTopicsService;
  public readonly adminUsers: AdminUsersService;
  public readonly categories: CategoriesService;
  public readonly comments: CommentsService;
  public readonly contents: ContentsService;
  public readonly gifts: GiftsService;
  public readonly messages: MessagesService;
  public readonly notifications: NotificationsService;
  public readonly sessions: SessionsService;
  public readonly sse: SseService;
  public readonly topics: TopicsService;
  public readonly uploads: UploadsService;
  public readonly users: UsersService;

  public readonly request: BaseHttpRequest;

  constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? '/api/v1',
      VERSION: config?.VERSION ?? '0.1',
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? 'include',
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    });

    this.adminCategories = new AdminCategoriesService(this.request);
    this.adminComments = new AdminCommentsService(this.request);
    this.adminControls = new AdminControlsService(this.request);
    this.adminGifts = new AdminGiftsService(this.request);
    this.adminTopics = new AdminTopicsService(this.request);
    this.adminUsers = new AdminUsersService(this.request);
    this.categories = new CategoriesService(this.request);
    this.comments = new CommentsService(this.request);
    this.contents = new ContentsService(this.request);
    this.gifts = new GiftsService(this.request);
    this.messages = new MessagesService(this.request);
    this.notifications = new NotificationsService(this.request);
    this.sessions = new SessionsService(this.request);
    this.sse = new SseService(this.request);
    this.topics = new TopicsService(this.request);
    this.uploads = new UploadsService(this.request);
    this.users = new UsersService(this.request);
  }
}

