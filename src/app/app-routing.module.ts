import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LogComponent } from "./log/log.component";
import { ThreadsComponent } from "./threads/threads.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "thread", component: ThreadsComponent },

  { path: "log", component: LogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
