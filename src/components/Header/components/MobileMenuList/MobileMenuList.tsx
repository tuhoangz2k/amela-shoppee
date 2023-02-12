import React, { useState } from 'react';
import { categories } from 'constants/index';
import { MobileMenuListWrap, MobileItemLink, ButtonShow } from './MobileMenuList.styled';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

type Props = {};

const MobileMenuList = (props: Props) => {
  const [isOpenCategories, setIsopenCategories] = useState<any>({
    men: false,
    women: false,
    modest: false,
  });

  const toggleMenuList = (
    name: string,
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setIsopenCategories((prev: any) => ({
      ...prev,
      [name]: !isOpenCategories[name],
    }));
  };

  return (
    <MobileMenuListWrap>
      {categories.map((categories, index) => {
        if (categories.children) {
          return (
            <div key={`${categories.label}${categories.path}`}>
              <span>
                <MobileItemLink to={categories.path} left={10}>
                  {categories.label}
                  <ButtonShow
                    onClick={(e) => toggleMenuList(categories?.key as string, e)}
                  >
                    {isOpenCategories[categories?.key as string] ? (
                      <MinusOutlined style={{ fontSize: 20 }} />
                    ) : (
                      <PlusOutlined style={{ fontSize: 20 }} />
                    )}
                  </ButtonShow>
                </MobileItemLink>
              </span>
              {!!isOpenCategories[categories?.key as string] && (
                <div>
                  {categories.children.map((child, index) => {
                    if (child.children) {
                      return (
                        <div key={`${child.label}${child.path}`}>
                          <span>
                            <MobileItemLink to={child.path} left={30}>
                              {child.label}
                              <ButtonShow
                                onClick={(e) => toggleMenuList(child?.key as string, e)}
                              >
                                {isOpenCategories[child?.key as string] ? (
                                  <MinusOutlined style={{ fontSize: 20 }} />
                                ) : (
                                  <PlusOutlined style={{ fontSize: 20 }} />
                                )}
                              </ButtonShow>
                            </MobileItemLink>
                          </span>
                          {!!isOpenCategories[child?.key as string] && (
                            <div>
                              {child.children.map((child1, index) => (
                                <MobileItemLink
                                  to={child1.path}
                                  left={46}
                                  key={`${child1.label}${child1.path}`}
                                >
                                  {child1?.label}
                                </MobileItemLink>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    } else {
                      return (
                        <MobileItemLink
                          to={child.path}
                          left={30}
                          key={`${child.label}${child.path}`}
                        >
                          {child.label}
                        </MobileItemLink>
                      );
                    }
                  })}
                </div>
              )}
            </div>
          );
        } else {
          return (
            <MobileItemLink to={categories.path} key={index} left={10}>
              {categories.label}
            </MobileItemLink>
          );
        }
      })}
    </MobileMenuListWrap>
  );
};

export default MobileMenuList;
