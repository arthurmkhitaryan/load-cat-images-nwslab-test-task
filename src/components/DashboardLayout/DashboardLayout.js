import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { getCategoriesAction } from "./../../store/actions/categoryAction";

//styles
import * as S from "./DashboardLayout.styles";

export const DashboardLayout = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, []);


  return (
    <S.DashboardLayoutWrapper>
      <S.DashboardLayoutSidebar>
        <Link to={{ pathname: "/categories" }}>Dashboard</Link>
        <S.Line />
        {categories?.map((category) => (
          <Link
            to={{ pathname: `/categories/${category.id}` }}
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
      </S.DashboardLayoutSidebar>
      <S.DashboardLayoutContent>
        <Outlet />
      </S.DashboardLayoutContent>
    </S.DashboardLayoutWrapper>
  );
};
