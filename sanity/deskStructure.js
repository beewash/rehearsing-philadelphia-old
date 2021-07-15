import S from '@sanity/desk-tool/structure-builder';
import { GrServices, GrCircleInformation } from 'react-icons/gr';
import { BsPeopleCircle } from 'react-icons/bs';

const hiddenDocTypes = item => ![
  'siteSettings',
  'eventInformation',
  'people'
].includes(item.getId())

export default () =>
  S.list()
    .title('Base')
    .items(
      [
            S.listItem()
                .title('Event Information')
                .icon(GrCircleInformation)
                .child(
                    S.document()
                        .schemaType('eventInformation')
                        .documentId('eventInformation')
                ),
            S.divider(),
            S.listItem()
                .title('Filtered People')
                .child(
                    S.list()
                        .title('Filters')
                        .items([
                          S.listItem()
                            .title('Composers')
                            .child(
                              S.documentTypeList('people')
                                .title('Composers')
                                .filter(`_type == "people" && roleList[].roleType == "composer"`)
                                .child()
                            ),
                          S.listItem()
                            .title('Artists')
                            .child(
                              S.documentTypeList('people')
                                .title('Artists')
                                .child()
                                .filter('_type == "people" && roleList[].roleType == "artist"')
                            ),
                          S.listItem()
                            .title('Faculty')
                            .child(
                              S.documentTypeList('people')
                                .title('Faculty')
                                .child()
                                .filter('_type == "people" && roleList[].roleType == "faculty"')
                            ),
                        ]),
                ),
            S.listItem()
                .title('All People')
                .icon(BsPeopleCircle)
                .child(
                  /* Create a list of all posts */
                  S.documentList()
                    .title('All People')
                    .filter('_type == "people"')
                ),
            S.divider(),
            ...S.documentTypeListItems().filter(hiddenDocTypes),
            S.listItem()
                .title('Site Settings')
                .icon(GrServices)
                .child(
                    S.document()
                        .schemaType('siteSettings')
                        .documentId('siteSettings')
                ),
      ]
    )