import React from 'react';
import sanity from '../sanity';
import BasePortableText from '@sanity/block-content-to-react';
import serializers from './serializers';

const PortableText = ({blocks}) => (
    <BasePortableText blocks={blocks} serializers={serializers} {...sanity.sanity} />
  )
  
  export default PortableText