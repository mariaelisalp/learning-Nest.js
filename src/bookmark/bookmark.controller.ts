import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { BookmarkService } from './bookmark.service';
import { GetUser } from 'src/auth/decorator';
import { BookmarkDto, EditBookmarkDto } from './dto';

@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {
    constructor(private bookmarkService: BookmarkService){}

    @Get()
    getBookmarks(@GetUser('id') userId: number){
        return this.bookmarkService.getBookmarks(userId);
    }

    @Post()
    createBookmark(@GetUser('id') userId: number, @Body() dto: BookmarkDto){
        return this.bookmarkService.createBookmark(userId, dto);
    }

    @Get(':id')
    getBookmarksById(@GetUser('id') userId: number, @Param('id', ParseIntPipe) bookmarkId: number){
        return this.bookmarkService.getBookmarksById(userId, bookmarkId);
    }

    @Patch(':id')
    editBookmarksById(@GetUser('id') userId: number, 
    @Param('id', ParseIntPipe) bookmarkId: number, 
    @Body() dto: EditBookmarkDto){
        return this.bookmarkService.editBookmarksById(userId, bookmarkId, dto);
    }

    @Delete()
    deleteBookmarkById(@GetUser('id') userId: number,  @Param('id', ParseIntPipe) bookmarkId: number){
        return this.bookmarkService.deleteBookmarkById(userId, bookmarkId);
    }
}
