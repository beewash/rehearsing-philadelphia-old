import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { sanity } from '../sanity';

export default function Header() {
    const [navigationData, setNavigation] = useState(null);

    useEffect(() => {
        sanity.fetch(`
        *[_type == "siteSettings"]{
            frontpage ->{
                slug{
                  current
                }
            },
            mainNav ->{
                title,
                navId{
                  current
                },
                items[]{
                    _key, 
                    text,
                    navigationItemUrl{
                        externalContent,
                        externalLink, 
                        internalLink->{
                            title,
                            slug{
                                current
                            }
                        }
                    }
                }
            }
        }
        `)
        .then((data) => setNavigation(data))
        .catch(console.error);
    }, []);

    return (
        <header>
          <div>
            <Link to='/' aria-label='Home'>
            </Link>
          </div>
            <div id='Nav'>
                <nav role='navigation'>
                {navigationData && navigationData.map((navigation, index) => (
                    <>
                    {navigation.mainNav.items ? (
                        <ul role='menubar'>
                            {navigation.mainNav.items.map(navItems => (
                            <li key={navItems._key} >
                            {navItems.navigationItemUrl.externalContent ? (
                                <a href={navItems.navigationItemUrl.externalLink} target='_blank' rel="noopener noreferer noreferrer">{navItems.text}</a>
                            )
                                : <Link to={"/" + navItems.navigationItemUrl.internalLink.slug.current}>{navItems.text}</Link>
                            }
                            </li>
                            ))}
                        </ul>
                    ) : null}
                    </>
                ))}
                </nav>
            </div>
        </header>
    )
}