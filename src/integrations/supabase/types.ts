export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      addresses: {
        Row: {
          city: string
          house: string
          id: string
          label: string
          landmark: string
          name: string
          phone: string
          street: string
          user_id: string
        }
        Insert: {
          city: string
          house: string
          id?: string
          label?: string
          landmark?: string
          name: string
          phone: string
          street: string
          user_id: string
        }
        Update: {
          city?: string
          house?: string
          id?: string
          label?: string
          landmark?: string
          name?: string
          phone?: string
          street?: string
          user_id?: string
        }
        Relationships: []
      }
      categories: {
        Row: {
          id: string
          image_index: number
          name: string
          sort_order: number
        }
        Insert: {
          id: string
          image_index?: number
          name: string
          sort_order?: number
        }
        Update: {
          id?: string
          image_index?: number
          name?: string
          sort_order?: number
        }
        Relationships: []
      }
      coupons: {
        Row: {
          active: boolean
          code: string
          expires_at: string
          kind: string
          max_discount: number
          min_order: number
          title: string
          usage_limit: number
          used: number
          value: number
        }
        Insert: {
          active?: boolean
          code: string
          expires_at?: string
          kind?: string
          max_discount?: number
          min_order?: number
          title: string
          usage_limit?: number
          used?: number
          value: number
        }
        Update: {
          active?: boolean
          code?: string
          expires_at?: string
          kind?: string
          max_discount?: number
          min_order?: number
          title?: string
          usage_limit?: number
          used?: number
          value?: number
        }
        Relationships: []
      }
      delivery_areas: {
        Row: {
          active: boolean
          eta: string
          fee: number
          free_above: number
          id: string
          name: string
        }
        Insert: {
          active?: boolean
          eta?: string
          fee?: number
          free_above?: number
          id?: string
          name: string
        }
        Update: {
          active?: boolean
          eta?: string
          fee?: number
          free_above?: number
          id?: string
          name?: string
        }
        Relationships: []
      }
      delivery_slots: {
        Row: {
          active: boolean
          id: string
          label: string
        }
        Insert: {
          active?: boolean
          id: string
          label: string
        }
        Update: {
          active?: boolean
          id?: string
          label?: string
        }
        Relationships: []
      }
      milk_subscriptions: {
        Row: {
          frequency: string
          id: string
          paused: boolean
          product_id: string
          quantity: number
          user_id: string
        }
        Insert: {
          frequency?: string
          id?: string
          paused?: boolean
          product_id: string
          quantity?: number
          user_id: string
        }
        Update: {
          frequency?: string
          id?: string
          paused?: boolean
          product_id?: string
          quantity?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "milk_subscriptions_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          body: string
          created_at: string
          id: string
          read: boolean
          title: string
          user_id: string
        }
        Insert: {
          body?: string
          created_at?: string
          id?: string
          read?: boolean
          title: string
          user_id: string
        }
        Update: {
          body?: string
          created_at?: string
          id?: string
          read?: boolean
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      order_items: {
        Row: {
          id: string
          image_index: number
          name: string
          order_id: string
          price: number
          product_id: string | null
          quantity: number
          unit: string
        }
        Insert: {
          id?: string
          image_index?: number
          name: string
          order_id: string
          price: number
          product_id?: string | null
          quantity: number
          unit: string
        }
        Update: {
          id?: string
          image_index?: number
          name?: string
          order_id?: string
          price?: number
          product_id?: string | null
          quantity?: number
          unit?: string
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          address: Json
          created_at: string
          delivery_fee: number
          discount: number
          id: string
          number: string
          partner_id: string | null
          payment_method: string
          slot: string
          status: string
          subtotal: number
          total: number
          user_id: string
        }
        Insert: {
          address: Json
          created_at?: string
          delivery_fee: number
          discount?: number
          id?: string
          number?: string
          partner_id?: string | null
          payment_method?: string
          slot?: string
          status?: string
          subtotal: number
          total: number
          user_id: string
        }
        Update: {
          address?: Json
          created_at?: string
          delivery_fee?: number
          discount?: number
          id?: string
          number?: string
          partner_id?: string | null
          payment_method?: string
          slot?: string
          status?: string
          subtotal?: number
          total?: number
          user_id?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          active: boolean
          brand: string
          category_id: string | null
          created_at: string
          description: string
          id: string
          image_index: number
          image_url: string | null
          mrp: number
          name: string
          price: number
          rating: number
          stock: number
          store_id: string | null
          unit: string
        }
        Insert: {
          active?: boolean
          brand?: string
          category_id?: string | null
          created_at?: string
          description?: string
          id?: string
          image_index?: number
          image_url?: string | null
          mrp: number
          name: string
          price: number
          rating?: number
          stock?: number
          store_id?: string | null
          unit?: string
        }
        Update: {
          active?: boolean
          brand?: string
          category_id?: string | null
          created_at?: string
          description?: string
          id?: string
          image_index?: number
          image_url?: string | null
          mrp?: number
          name?: string
          price?: number
          rating?: number
          stock?: number
          store_id?: string | null
          unit?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_store_id_fkey"
            columns: ["store_id"]
            isOneToOne: false
            referencedRelation: "stores"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          id: string
          name: string
          phone: string
        }
        Insert: {
          created_at?: string
          id: string
          name?: string
          phone?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          phone?: string
        }
        Relationships: []
      }
      reviews: {
        Row: {
          comment: string
          created_at: string
          id: string
          product_id: string
          rating: number
          user_id: string
        }
        Insert: {
          comment?: string
          created_at?: string
          id?: string
          product_id: string
          rating: number
          user_id: string
        }
        Update: {
          comment?: string
          created_at?: string
          id?: string
          product_id?: string
          rating?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reviews_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      stores: {
        Row: {
          active: boolean
          closes: string
          id: string
          location: string
          name: string
          opens: string
          owner_id: string | null
        }
        Insert: {
          active?: boolean
          closes?: string
          id?: string
          location?: string
          name: string
          opens?: string
          owner_id?: string | null
        }
        Update: {
          active?: boolean
          closes?: string
          id?: string
          location?: string
          name?: string
          opens?: string
          owner_id?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      wishlist: {
        Row: {
          product_id: string
          user_id: string
        }
        Insert: {
          product_id: string
          user_id: string
        }
        Update: {
          product_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "wishlist_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      place_order: {
        Args: {
          address_id: string
          coupon_code?: string
          delivery_slot: string
          items: Json
        }
        Returns: string
      }
    }
    Enums: {
      app_role: "customer" | "admin" | "delivery_partner" | "vendor"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["customer", "admin", "delivery_partner", "vendor"],
    },
  },
} as const
