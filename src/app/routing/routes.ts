import { HomeComponent } from "../components/home.component";
import { PostsComponent } from '../components/posts.component';

export const ROUTES = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':room',
    component: PostsComponent
  }
];