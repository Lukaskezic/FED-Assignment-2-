﻿namespace ModelsApi.Models.DTOs
{
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
    public class changePassword
    {
        public string Email { get; set; }
        public string OldPassword { get; set; }
        public string Password { get; set; }
    }
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
}
