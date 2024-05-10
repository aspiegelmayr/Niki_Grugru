import { ChapterSelectionText, NavBarText } from "../../text-constants";
import Chapter from "./chapter";

export const Chapters: Chapter[] = [
    new Chapter(NavBarText.CHAPTERS_DROPDOWN.CHAPTER1, ChapterSelectionText.ABOUT.CHAPTER1.TITLE, ChapterSelectionText.ABOUT.CHAPTER1.TEXT, '/chapters/1'),
    new Chapter(NavBarText.CHAPTERS_DROPDOWN.CHAPTER2, ChapterSelectionText.ABOUT.CHAPTER2.TITLE, ChapterSelectionText.ABOUT.CHAPTER2.TEXT, '/chapters/2'),
    new Chapter(NavBarText.CHAPTERS_DROPDOWN.CHAPTER3, ChapterSelectionText.ABOUT.CHAPTER3.TITLE, ChapterSelectionText.ABOUT.CHAPTER3.TEXT, '/chapters/3'),
    new Chapter(NavBarText.CHAPTERS_DROPDOWN.CHAPTER4, ChapterSelectionText.ABOUT.CHAPTER4.TITLE, ChapterSelectionText.ABOUT.CHAPTER4.TEXT, '/chapters/4')
];