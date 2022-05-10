﻿using Stark_MunderDifflin.Models;

namespace Stark_MunderDifflin.Repos

{
    public interface IOrderRepo
    {
        public List<Order> GetAllOrders();
        public void DeleteOrder(int orderId);
        public List<Order> GetAllOrdersByUID(string uid);
        public int AddOrder(Order order);
        public void CloseOrder(int orderId);
        public Order? GetOpenOrderByUID(string uid);
    }
}
