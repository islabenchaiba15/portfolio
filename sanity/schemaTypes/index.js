import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import experience from './experience'
import skills from './skill'
import project from './project'
import social from './social'

export const schema = {
  types: [blockContentType, categoryType, postType, authorType,experience,skills,project,social],
}
