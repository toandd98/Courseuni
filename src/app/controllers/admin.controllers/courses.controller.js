const Course = require('../../models/Course');
const Lesson = require('../../models/Lesson');
const Comment = require('../../models/Comment');
const Exercise = require('../../models/Exercise');
const Category = require('../../models/Category');
const { mongooseToObject } = require('../../../util/mongoose');
const { multipleMongooseToObject } = require('../../../util/mongoose');

class coursesController {
    // COURSES
    // [GET] /admin/courses
    show(req, res, next) {
        let currentPage = parseInt(req.query.page) || 1;
        let perPage = 10;

        let skip = (currentPage - 1) * perPage;

        let courseQuery = Course.find({})
            .populate('course')
            .populate('category')
            .skip(skip)
            .limit(perPage);
        Promise.all([
            courseQuery,
            Course.countDocumentsDeleted(),
            Course.countDocuments(),
        ])
            .then(([courses, deletedCount, count]) =>
                res.render('admin/list/courses-list', {
                    layout: 'admin',
                    title: 'Quản lý khoá học',
                    pagination: {
                        page: currentPage,
                        limit: perPage,
                        totalRows: count,
                    },
                    deletedCount,
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
    // [GET] /admin/courses/create
    create(req, res, next) {
        Category.find({}).then((categories) =>
            res.render('admin/create/course-create', {
                layout: 'admin',
                title: 'Thêm khoá học',
                categories: multipleMongooseToObject(categories),
            }),
        );
    }
    // [POST] /admin/courses/store
    store(req, res, next) {
        req.body.image = req.file.path.split('\\').slice(2).join('/');
        req.body.obtain = req.body.obtain
            .split('\n')
            .filter((obtain) => obtain !== '');
        const course = new Course(req.body);
        course
            .save()
            .then(() => {
                res.redirect('/admin/courses');
            })
            .catch(next);
        // res.json(req.body)
    }

    // [GET] /admin/courses/:courseSlug/edit

    edit(req, res, next) {
        Promise.all([
            Course.findOne({ slug: req.params.courseSlug }).populate(
                'category',
            ),
            Category.find({}),
        ])
            .then(([course, categories]) =>
                res.render('admin/edit/course-edit', {
                    layout: 'admin',
                    title: 'Sửa khoá học ' + course.name,
                    obtain: course.obtain.join('\n'),
                    course: mongooseToObject(course),
                    categories: multipleMongooseToObject(categories),
                }),
            )
            .catch(next);
    }

    // [PUT] /admin/courses/:courseSlug/update
    update(req, res, next) {
        if (req.file) {
            req.body.image = req.file.path.split('\\').slice(2).join('/');
        } else {
            req.body.image = req.body.imageOld;
        }
        req.body.obtain = req.body.obtain
            .split('\n')
            .filter((obtain) => obtain !== '');
        Course.updateOne({ slug: req.params.courseSlug }, req.body)
            .then(() => res.redirect('/admin/courses'))
            .catch(next);
        // res.json(req.body)
    }

    // [DELETE] /admin/courses/:courseSlug/delete
    delete(req, res, next) {
        Course.delete({ slug: req.params.courseSlug }).then();
        Lesson.find({ courseSlug: req.params.courseSlug })
            .then((lessons) => {
                lessons.forEach((lesson) => {
                    Exercise.delete({ lessonSlug: lesson.slug }).then();
                    Lesson.delete({
                        courseSlug: req.params.courseSlug,
                    }).then();
                    Comment.delete({ lessonSlug: lesson.slug }).then();
                });
            })
            .then(res.redirect('back'))
            .catch(next);
    }

    // [GET] /admin/trash/courses
    trash(req, res, next) {
        let currentPage = parseInt(req.query.page) || 1;
        let perPage = 10;

        let skip = (currentPage - 1) * perPage;

        let courseQuery = Course.findDeleted({})
            .populate('category')
            .skip(skip)
            .limit(perPage);

        Promise.all([courseQuery, Course.countDocumentsDeleted()])
            .then(([courses, count]) =>
                res.render('admin/trash/courses-trash', {
                    layout: 'admin',
                    title: 'Khoá học đã xoá',
                    courses: multipleMongooseToObject(courses),
                    pagination: {
                        page: currentPage,
                        limit: perPage,
                        totalRows: count,
                    },
                }),
            )
            .catch(next);
    }

    // [PATCH] /admin/trash/:courseSlug/restore
    restore(req, res, next) {
        Course.restore({ slug: req.params.courseSlug }).then();
        Lesson.findDeleted({ courseSlug: req.params.courseSlug })
            .then((lessons) => {
                lessons.forEach((lesson) => {
                    Exercise.restore({ lessonSlug: lesson.slug }).then();
                    Lesson.restore({
                        courseSlug: req.params.courseSlug,
                    }).then();
                    Comment.restore({ lessonSlug: lesson.slug }).then();
                });
            })
            .then(res.redirect('back'))
            .catch(next);
    }

    // [PATCH] /admin/trash/:courseSlug/forceDelete
    forceDelete(req, res, next) {
        Course.deleteOne({ slug: req.params.courseSlug }).then();
        Lesson.findDeleted({ courseSlug: req.params.courseSlug })
            .then((lessons) => {
                lessons.forEach((lesson) => {
                    Exercise.deleteMany({ lessonSlug: lesson.slug }).then();
                    Lesson.deleteMany({
                        courseSlug: req.params.courseSlug,
                    }).then();
                    Comment.deleteMany({ lessonSlug: lesson.slug }).then();
                });
            })
            .then(res.redirect('back'))
            .catch(next);
    }

    // [POST] /admin/courses/handle-form-actions
    handleFormActions(req, res, next) {
        let lessons = Lesson.find({
            courseSlug: { $in: req.body.checkSlugs },
        });
        lessons.select('slug');
        switch (req.body.action) {
            case 'delete':
                Course.delete({ slug: { $in: req.body.checkSlugs } }).then();
                Lesson.find({ courseSlug: { $in: req.body.checkSlugs } })
                    .then((lessons) => {
                        lessons.forEach((lesson) => {
                            Exercise.delete({
                                lessonSlug: lesson.slug,
                            }).then();
                            Lesson.delete({ slug: lesson.slug }).then();
                            Comment.delete({
                                lessonSlug: lesson.slug,
                            }).then();
                        });
                    })
                    .then(res.redirect('back'))
                    .catch(next);
                break;
            case 'forceDelete':
                Course.deleteMany({
                    slug: { $in: req.body.checkSlugs },
                }).then();
                Lesson.findDeleted({
                    courseSlug: { $in: req.body.checkSlugs },
                })
                    .then((lessons) => {
                        lessons.forEach((lesson) => {
                            Exercise.deleteMany({
                                lessonSlug: lesson.slug,
                            }).then();
                            Lesson.deleteMany({ slug: lesson.slug }).then();
                            Comment.deleteMany({
                                lessonSlug: lesson.slug,
                            }).then();
                        });
                    })
                    .then(res.redirect('back'))
                    .catch(next);
                break;
            case 'restore':
                Course.restore({ slug: { $in: req.body.checkSlugs } }).then();
                Lesson.findDeleted({
                    courseSlug: { $in: req.body.checkSlugs },
                })
                    .then((lessons) => {
                        lessons.forEach((lesson) => {
                            Exercise.restore({
                                lessonSlug: lesson.slug,
                            }).then();
                            Lesson.restore({ slug: lesson.slug }).then();
                            Comment.restore({
                                lessonSlug: lesson.slug,
                            }).then();
                        });
                    })
                    .then(res.redirect('back'))
                    .catch(next);
                break;
            default:
                res.json({ message: 'Action invalid' });
        }
    }
}

module.exports = new coursesController();
