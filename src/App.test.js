import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { Title } from './components/Title'
import { CategoryList } from './components/CategoryList'
import { MovieList } from './components/MovieList'
import { MovieInfo } from './components/MovieInfo'

Enzyme.configure({ adapter: new Adapter() });

describe("Title component", () => {
  
	test("Shows a title", () => {
		const wrapper = mount(<Title title={""} />);
		wrapper.setProps({
			title: "test title"
		});
		expect(wrapper.find("h1").text()).toEqual("test title");
	});

});

describe("Menu component (CategoryList/CategoryListItem)", () => {
  
	test("Contains a Menu", () => {
		const wrapper = mount(<CategoryList categories={[]} />);
		wrapper.setProps({
			categories: [
							{_id: "1", title: "title 1", description: "description 1"},
							{_id: "2", title: "title 2", description: "description 2"}
						]
		});
		expect(wrapper.find("nav")).toHaveLength(1);
	});

	test("Menu contains the brand name Movies@com", () => {
		const wrapper = mount(<CategoryList categories={[]} />);
		wrapper.setProps({
			categories: [
							{_id: "1", title: "title 1", description: "description 1"},
							{_id: "2", title: "title 2", description: "description 2"}
						]
		});
		expect(wrapper.find("a.navbar-brand").text()).toEqual("Movies@com");
	});

	test("Menu contains a list of X categories", () => {
		const wrapper = mount(<CategoryList categories={[]} />);
		wrapper.setProps({
			categories: [
							{_id: "1", title: "title 1", description: "description 1"},
							{_id: "2", title: "title 2", description: "description 2"},
							{_id: "3", title: "title 3", description: "description 3"}
						]
		});
		expect(wrapper.find("div.category-list").find("a")).toHaveLength(3);
	});

});

describe("Movie component (MovieList/MovieListItem/MovieInfo)", () => {
  
	test("List X movies", () => {
		const wrapper = mount(<MovieList movies={[]} />);
		wrapper.setProps({
			movies: [
						{_id: "1", title: "title 1", year: 1001, image: "image 1", rating: 1 },
						{_id: "2", title: "title 2", year: 1002, image: "image 2", rating: 2 },
						{_id: "3", title: "title 3", year: 1003, image: "image 3", rating: 3 },
						{_id: "4", title: "title 4", year: 1004, image: "image 4", rating: 4 }	
					]
		});
		expect(wrapper.find("div.movie-col")).toHaveLength(4);
	});

	test("Shows movie preview content", () => {
		const wrapper = mount(<MovieList movies={[]} />);
		wrapper.setProps({
			movies: [
						{_id: "1", title: "title 1", year: 1001, image: "image 1", rating: 1 }
					]
		});
		expect(wrapper.find("div.movie-col")).toHaveLength(1);
		expect(wrapper.find("div.movie-col").find("div.movie-item")).toHaveLength(1);
		expect(wrapper.find("div.movie-col").find("div.movie-item").find("figure.image")
					  .find("a").find("img").prop("src")).toEqual("image 1");
		expect(wrapper.find("div.movie-col").find("div.movie-item").find("div.media-content")
					  .find("p.title").text()).toEqual("title 1");
		expect(wrapper.find("div.movie-col").find("div.movie-item").find("div.media-content")
					  .find("p.subtitle").text()).toEqual("1001");

	});

	test("Shows the movie detail", () => {
		const wrapper = mount(<MovieInfo movie={{}} />);
		wrapper.setProps({
			movie: {_id: "1", title: "title 1", year: 1001, image: "image 1", rating: 2, trailer:"trailer 1", duration: 0, description: "description 1"}			
		});
		expect(wrapper.find("div.movie-detail")).toHaveLength(1);
		expect(wrapper.find("div.movie-detail").find("div.youtube-video")).toHaveLength(1);
		expect(wrapper.find("div.movie-detail").find("div.movie-subinfo").find("h2").text()).toEqual("title 1");
		expect(wrapper.find("div.movie-detail").find("div.movie-subinfo").find("span.movie-year").text()).toEqual("1001 | ");
		expect(wrapper.find("div.movie-detail").find("div.movie-subinfo").find("span.movie-duration").text()).toEqual("0 min");
		expect(wrapper.find("div.movie-detail").find("div.movie-description").text()).toEqual("description 1");
		expect(wrapper.find("div.movie-detail").find("div.movie-rating")).toHaveLength(1);
	});


});