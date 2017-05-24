import { BehaviorSubject ,Subject, Observable } from 'rxjs'
import * as io from 'socket.io-client';
import { PostData } from '../classes/postData';

export class PostService {

	private url = "http://localhost:8080";
	private socket;

	private _posts: BehaviorSubject<PostData[]> = new BehaviorSubject([]);
	get posts(): Observable<PostData[]> { return this._posts.asObservable() };

	public subscribe(room: String) : void {
		console.log("PostService: Called Subscribe");

		this.socket = io(this.url);

		this.socket.on("connect", () => {

			console.log("Made connection");

			this.socket.emit('log', "Subscribed");

			console.log("Emitted Log");			

			this.socket.emit("room", room);

			console.log("Emitted Room");			
		});

		// Subscribe for incoming messages
		this.socket.on("new-post", (data: PostData) => {
			console.log("New post event: " + data.title);

			let currentPosts = this._posts.getValue();

			currentPosts.push(data);

			this._posts.next(currentPosts);
		});
		
	}

}