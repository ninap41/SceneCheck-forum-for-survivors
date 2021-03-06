import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ThreadsComponent } from "./threads/threads.component";
import { BoardsComponent } from "./boards/boards.component";
import { AboutComponent } from "./about/about.component";
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "threads/:id", component: ThreadsComponent },
  { path: "boards", component: BoardsComponent },
  { path: "about", component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
