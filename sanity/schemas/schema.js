// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// All ./ root files here
import siteSettings from './siteSettings';
import eventInformation from './eventInformation';

// All documents here
import navigation from './documents/navigation';
import page from './documents/page';
import home from './documents/home';
import map from './documents/map';
import people from './documents/people';
import venues from './documents/venues';
import performanceCat from './documents/performanceCat';
import performances from './documents/performances';
import legal from './documents/legal';
import sponsors from './documents/sponsors';

// All objects here 
import navItem from './objects/navItem';
import navLink from './objects/navLink';
import pageBuilder from './objects/pageBuilder';
import pageBuilderContent from './objects/pageBuilderContent';
import pageBuilderColumns from './objects/pageBuilderColumns';
import bodyPortableText from './objects/bodyPortableText';
import column from './objects/column';
import richText from './objects/richText';
import imageFigure from './objects/imageFigure';
import emailVal from './objects/emailVal';
import link from './objects/link';
import youtube from './objects/youtube';
import socialLinks from './objects/socialLinks';
import performanceTypeObject from './objects/performanceTypeObject';
import peopleObject from './objects/peopleObject';
import performanceObject from './objects/performanceObject';
import role from './objects/role';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    siteSettings,
    eventInformation,
    navigation,
    navItem,
    navLink,
    page,
    home, 
    people,
    venues,
    performanceCat,
    performances,
    map,
    legal,
    sponsors,
    pageBuilder,
    pageBuilderContent,
    pageBuilderColumns,
    bodyPortableText,
    column,
    richText,
    imageFigure,
    emailVal,
    link,
    youtube,
    socialLinks,
    performanceTypeObject,
    peopleObject,
    performanceObject,
    role
  ]),
})
