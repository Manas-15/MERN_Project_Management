import { vendorBaseApi as api } from '../base/vendorBaseApi';
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    createVendorVendorsPost: build.mutation<
      CreateVendorVendorsPostApiResponse,
      CreateVendorVendorsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendors/`,
        method: 'POST',
        body: queryArg.vendorBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllVendorsVendorsGet: build.query<
      GetAllVendorsVendorsGetApiResponse,
      GetAllVendorsVendorsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendors/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          vendor_code: queryArg.vendorCode,
          name: queryArg.name,
          name__icontains: queryArg.nameIcontains,
          email: queryArg.email,
          email__icontains: queryArg.emailIcontains,
          phone_number: queryArg.phoneNumber,
          industry_code: queryArg.industryCode,
          industry_code__icontains: queryArg.industryCodeIcontains,
          address_line_1: queryArg.addressLine1,
          address_line_2: queryArg.addressLine2,
          country: queryArg.country,
          state: queryArg.state,
          city: queryArg.city,
          zipcode: queryArg.zipcode,
          tax_enabled: queryArg.taxEnabled,
          tax_id: queryArg.taxId,
          tax_jurisdictions: queryArg.taxJurisdictions,
          status: queryArg.status,
          status__icontains: queryArg.statusIcontains,
          effective_start_date: queryArg.effectiveStartDate,
          effective_end_date: queryArg.effectiveEndDate,
          type: queryArg['type'],
          vendor_type: queryArg.vendorType,
          category: queryArg.category,
          legal_name: queryArg.legalName,
          legal_name__icontains: queryArg.legalNameIcontains,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getVendorVendorsIdGet: build.query<
      GetVendorVendorsIdGetApiResponse,
      GetVendorVendorsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendors/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateVendorVendorsIdPut: build.mutation<
      UpdateVendorVendorsIdPutApiResponse,
      UpdateVendorVendorsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendors/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.vendorBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteVendorVendorsIdDelete: build.mutation<
      DeleteVendorVendorsIdDeleteApiResponse,
      DeleteVendorVendorsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendors/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getFileDataVendorsIdLogGet: build.query<
      GetFileDataVendorsIdLogGetApiResponse,
      GetFileDataVendorsIdLogGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendors/${queryArg.id}/log`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateVendorAddressVendorsVendorIdAddressesAddressIdPut: build.mutation<
      UpdateVendorAddressVendorsVendorIdAddressesAddressIdPutApiResponse,
      UpdateVendorAddressVendorsVendorIdAddressesAddressIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendors/${queryArg.vendorId}/addresses/${queryArg.addressId}`,
        method: 'PUT',
        body: queryArg.adressesBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteVendorAddressVendorsVendorIdAddressesAddressIdDelete: build.mutation<
      DeleteVendorAddressVendorsVendorIdAddressesAddressIdDeleteApiResponse,
      DeleteVendorAddressVendorsVendorIdAddressesAddressIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendors/${queryArg.vendorId}/addresses/${queryArg.addressId}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateVendorBankDetailVendorsVendorIdBankDetailsBankDetailsIdPut:
      build.mutation<
        UpdateVendorBankDetailVendorsVendorIdBankDetailsBankDetailsIdPutApiResponse,
        UpdateVendorBankDetailVendorsVendorIdBankDetailsBankDetailsIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `/vendors/${queryArg.vendorId}/bank_details/${queryArg.bankDetailsId}`,
          method: 'PUT',
          body: queryArg.bankDetailUpdate,
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          }
        })
      }),
    deleteVendorBankDetailVendorsVendorIdBankDetailsBankDetailsIdDelete:
      build.mutation<
        DeleteVendorBankDetailVendorsVendorIdBankDetailsBankDetailsIdDeleteApiResponse,
        DeleteVendorBankDetailVendorsVendorIdBankDetailsBankDetailsIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/vendors/${queryArg.vendorId}/bank_details/${queryArg.bankDetailsId}`,
          method: 'DELETE',
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          }
        })
      }),
    updateVendorTaxIdentificationVendorsVendorIdTaxIdentificationTaxIdentificationIdPut:
      build.mutation<
        UpdateVendorTaxIdentificationVendorsVendorIdTaxIdentificationTaxIdentificationIdPutApiResponse,
        UpdateVendorTaxIdentificationVendorsVendorIdTaxIdentificationTaxIdentificationIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `/vendors/${queryArg.vendorId}/tax_identification/${queryArg.taxIdentificationId}/`,
          method: 'PUT',
          body: queryArg.taxIdentificationBaseUpdate,
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          }
        })
      }),
    deleteVendorTaxIdentificationVendorsVendorIdTaxIdentificationTaxIdentificationIdDelete:
      build.mutation<
        DeleteVendorTaxIdentificationVendorsVendorIdTaxIdentificationTaxIdentificationIdDeleteApiResponse,
        DeleteVendorTaxIdentificationVendorsVendorIdTaxIdentificationTaxIdentificationIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/vendors/${queryArg.vendorId}/tax_identification/${queryArg.taxIdentificationId}/`,
          method: 'DELETE',
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          }
        })
      }),
    createVendorContactVendorContactsPost: build.mutation<
      CreateVendorContactVendorContactsPostApiResponse,
      CreateVendorContactVendorContactsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_contacts/`,
        method: 'POST',
        body: queryArg.vendorContactBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllVendorContactsVendorContactsGet: build.query<
      GetAllVendorContactsVendorContactsGetApiResponse,
      GetAllVendorContactsVendorContactsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_contacts/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          vendor_id: queryArg.vendorId,
          vendor_id__in: queryArg.vendorIdIn,
          first_name: queryArg.firstName,
          first_name__icontains: queryArg.firstNameIcontains,
          last_name: queryArg.lastName,
          last_name__icontains: queryArg.lastNameIcontains,
          designation: queryArg.designation,
          designation__icontains: queryArg.designationIcontains,
          email: queryArg.email,
          email__icontains: queryArg.emailIcontains,
          phone: queryArg.phone,
          phone__icontains: queryArg.phoneIcontains,
          status: queryArg.status,
          status__icontains: queryArg.statusIcontains,
          type: queryArg['type'],
          party_type: queryArg.partyType,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getVendorContactVendorContactsIdGet: build.query<
      GetVendorContactVendorContactsIdGetApiResponse,
      GetVendorContactVendorContactsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_contacts/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateVendorContactVendorContactsIdPut: build.mutation<
      UpdateVendorContactVendorContactsIdPutApiResponse,
      UpdateVendorContactVendorContactsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_contacts/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.vendorContactBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteVendorContactVendorContactsIdDelete: build.mutation<
      DeleteVendorContactVendorContactsIdDeleteApiResponse,
      DeleteVendorContactVendorContactsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_contacts/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createVendorItemPricesPost: build.mutation<
      CreateVendorItemPricesPostApiResponse,
      CreateVendorItemPricesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_item_prices/`,
        method: 'POST',
        body: queryArg.vendorItemPriceBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllVendorItemPriceVendorItemPricesGet: build.query<
      GetAllVendorItemPriceVendorItemPricesGetApiResponse,
      GetAllVendorItemPriceVendorItemPricesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_item_prices/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          vendor_item_id: queryArg.vendorItemId,
          currency_code: queryArg.currencyCode,
          price: queryArg.price,
          item_id: queryArg.itemId,
          vendor_id: queryArg.vendorId,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getVendorItemPricesIdGet: build.query<
      GetVendorItemPricesIdGetApiResponse,
      GetVendorItemPricesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_item_prices/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateVendorItemPricesIdPut: build.mutation<
      UpdateVendorItemPricesIdPutApiResponse,
      UpdateVendorItemPricesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_item_prices/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.vendorItemPriceBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteVendorItemPricesIdDelete: build.mutation<
      DeleteVendorItemPricesIdDeleteApiResponse,
      DeleteVendorItemPricesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_item_prices/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createVendorItemShippingsPost: build.mutation<
      CreateVendorItemShippingsPostApiResponse,
      CreateVendorItemShippingsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_item_shippings/`,
        method: 'POST',
        body: queryArg.vendorItemShippingBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllVendorItemShippingVendorItemShippingsGet: build.query<
      GetAllVendorItemShippingVendorItemShippingsGetApiResponse,
      GetAllVendorItemShippingVendorItemShippingsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_item_shippings/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          vendor_id: queryArg.vendorId,
          vendor_id__in: queryArg.vendorIdIn,
          vendor_item_id: queryArg.vendorItemId,
          shipping_note: queryArg.shippingNote,
          tracking_code: queryArg.trackingCode,
          currency_code: queryArg.currencyCode,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getVendorItemShippingsIdGet: build.query<
      GetVendorItemShippingsIdGetApiResponse,
      GetVendorItemShippingsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_item_shippings/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateVendorItemShippingsIdPut: build.mutation<
      UpdateVendorItemShippingsIdPutApiResponse,
      UpdateVendorItemShippingsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_item_shippings/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.vendorItemShippingBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteVendorItemShippingsIdDelete: build.mutation<
      DeleteVendorItemShippingsIdDeleteApiResponse,
      DeleteVendorItemShippingsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_item_shippings/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createVendorItemTaxsPost: build.mutation<
      CreateVendorItemTaxsPostApiResponse,
      CreateVendorItemTaxsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_item_taxs/`,
        method: 'POST',
        body: queryArg.vendorItemTaxBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllVendorItemTaxVendorItemTaxsGet: build.query<
      GetAllVendorItemTaxVendorItemTaxsGetApiResponse,
      GetAllVendorItemTaxVendorItemTaxsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_item_taxs/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          tenant_id: queryArg.tenantId,
          vendor_id: queryArg.vendorId,
          vendor_item_id: queryArg.vendorItemId,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getVendorItemTaxsIdGet: build.query<
      GetVendorItemTaxsIdGetApiResponse,
      GetVendorItemTaxsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_item_taxs/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateVendorItemTaxsIdPut: build.mutation<
      UpdateVendorItemTaxsIdPutApiResponse,
      UpdateVendorItemTaxsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_item_taxs/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.vendorItemTaxBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteVendorItemTaxsIdDelete: build.mutation<
      DeleteVendorItemTaxsIdDeleteApiResponse,
      DeleteVendorItemTaxsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_item_taxs/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createVendorLicensesPost: build.mutation<
      CreateVendorLicensesPostApiResponse,
      CreateVendorLicensesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_licenses/`,
        method: 'POST',
        body: queryArg.vendorLicenseBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllVendorLicenseVendorLicensesGet: build.query<
      GetAllVendorLicenseVendorLicensesGetApiResponse,
      GetAllVendorLicenseVendorLicensesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_licenses/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          tenant_id: queryArg.tenantId,
          vendor_id: queryArg.vendorId,
          license_id: queryArg.licenseId,
          effective_start_date: queryArg.effectiveStartDate,
          effective_end_date: queryArg.effectiveEndDate,
          status: queryArg.status,
          status__icontains: queryArg.statusIcontains,
          party_type: queryArg.partyType,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getVendorLicensesIdGet: build.query<
      GetVendorLicensesIdGetApiResponse,
      GetVendorLicensesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_licenses/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateVendorLicensesIdPut: build.mutation<
      UpdateVendorLicensesIdPutApiResponse,
      UpdateVendorLicensesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_licenses/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.vendorLicenseBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteVendorLicensesIdDelete: build.mutation<
      DeleteVendorLicensesIdDeleteApiResponse,
      DeleteVendorLicensesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_licenses/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createVendorItemVendorItemsPost: build.mutation<
      CreateVendorItemVendorItemsPostApiResponse,
      CreateVendorItemVendorItemsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_items/`,
        method: 'POST',
        body: queryArg.vendorItemsCreateRequest,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllVendorItemsVendorItemsGet: build.query<
      GetAllVendorItemsVendorItemsGetApiResponse,
      GetAllVendorItemsVendorItemsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_items/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          tenant_id: queryArg.tenantId,
          item_id: queryArg.itemId,
          vendor_id: queryArg.vendorId,
          party_type: queryArg.partyType,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getVendorItemVendorItemsIdGet: build.query<
      GetVendorItemVendorItemsIdGetApiResponse,
      GetVendorItemVendorItemsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_items/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateVendorItemVendorItemsIdPut: build.mutation<
      UpdateVendorItemVendorItemsIdPutApiResponse,
      UpdateVendorItemVendorItemsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_items/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.vendorItemBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteVendorItemVendorItemsIdDelete: build.mutation<
      DeleteVendorItemVendorItemsIdDeleteApiResponse,
      DeleteVendorItemVendorItemsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/vendor_items/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getCurrencyCurrenciesIdGet: build.query<
      GetCurrencyCurrenciesIdGetApiResponse,
      GetCurrencyCurrenciesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/currencies/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateCurrencyCurrenciesIdPut: build.mutation<
      UpdateCurrencyCurrenciesIdPutApiResponse,
      UpdateCurrencyCurrenciesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/currencies/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.currencyBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteCurrencyCurrenciesIdDelete: build.mutation<
      DeleteCurrencyCurrenciesIdDeleteApiResponse,
      DeleteCurrencyCurrenciesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/currencies/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllCurrenciesCurrenciesGet: build.query<
      GetAllCurrenciesCurrenciesGetApiResponse,
      GetAllCurrenciesCurrenciesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/currencies/`,
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          currency_name: queryArg.currencyName,
          currency_iso: queryArg.currencyIso,
          currency_code: queryArg.currencyCode,
          effective_start_date: queryArg.effectiveStartDate,
          effective_end_date: queryArg.effectiveEndDate,
          status: queryArg.status,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    createIndustryIndustriesPost: build.mutation<
      CreateIndustryIndustriesPostApiResponse,
      CreateIndustryIndustriesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/industries/`,
        method: 'POST',
        body: queryArg.industryBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllIndustriesIndustriesGet: build.query<
      GetAllIndustriesIndustriesGetApiResponse,
      GetAllIndustriesIndustriesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/industries/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          name: queryArg.name,
          industry_code: queryArg.industryCode,
          status: queryArg.status,
          name__icontains: queryArg.nameIcontains,
          industry_code__icontains: queryArg.industryCodeIcontains,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getIndustryIndustriesIdGet: build.query<
      GetIndustryIndustriesIdGetApiResponse,
      GetIndustryIndustriesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/industries/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateIndustryIndustriesIdPut: build.mutation<
      UpdateIndustryIndustriesIdPutApiResponse,
      UpdateIndustryIndustriesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/industries/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.industryBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteIndustryIndustriesIdDelete: build.mutation<
      DeleteIndustryIndustriesIdDeleteApiResponse,
      DeleteIndustryIndustriesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/industries/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createInvoicesPost: build.mutation<
      CreateInvoicesPostApiResponse,
      CreateInvoicesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/invoices/`,
        method: 'POST',
        body: queryArg.invoiceBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateEntityStatusInvoicesPut: build.mutation<
      UpdateEntityStatusInvoicesPutApiResponse,
      UpdateEntityStatusInvoicesPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/invoices/`,
        method: 'PUT',
        body: queryArg.entitycancelledUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          entity_type: queryArg.entityType,
          entity_id: queryArg.entityId
        }
      })
    }),
    getAllInvoiceInvoicesGet: build.query<
      GetAllInvoiceInvoicesGetApiResponse,
      GetAllInvoiceInvoicesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/invoices/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          invoice_from_type: queryArg.invoiceFromType,
          invoice_from_id: queryArg.invoiceFromId,
          invoice_from_id__in: queryArg.invoiceFromIdIn,
          invoice_number: queryArg.invoiceNumber,
          invoice_to_type: queryArg.invoiceToType,
          invoice_to_id: queryArg.invoiceToId,
          invoice_to_id__in: queryArg.invoiceToIdIn,
          invoice_date: queryArg.invoiceDate,
          invoice_amount: queryArg.invoiceAmount,
          status: queryArg.status,
          status__in: queryArg.statusIn,
          payment_term_id: queryArg.paymentTermId,
          payment_term_id__in: queryArg.paymentTermIdIn,
          order_type_id: queryArg.orderTypeId,
          order_type: queryArg.orderType,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getInvoicesIdGet: build.query<
      GetInvoicesIdGetApiResponse,
      GetInvoicesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/invoices/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateInvoicesIdPut: build.mutation<
      UpdateInvoicesIdPutApiResponse,
      UpdateInvoicesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/invoices/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.invoiceBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteInvoicesIdDelete: build.mutation<
      DeleteInvoicesIdDeleteApiResponse,
      DeleteInvoicesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/invoices/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getInvoiceInvoicesInvoiceNumberInvoiceNumberGet: build.query<
      GetInvoiceInvoicesInvoiceNumberInvoiceNumberGetApiResponse,
      GetInvoiceInvoicesInvoiceNumberInvoiceNumberGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/invoices/invoice_number/${queryArg.invoiceNumber}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_type: queryArg.orderType,
          order_type_id: queryArg.orderTypeId
        }
      })
    }),
    getAllAdjustmentreasonsItemsAdjustmentReasonGet: build.query<
      GetAllAdjustmentreasonsItemsAdjustmentReasonGetApiResponse,
      GetAllAdjustmentreasonsItemsAdjustmentReasonGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/items/adjustment_reason`,
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getAllTransactiontypesItemsTransactionTypeGet: build.query<
      GetAllTransactiontypesItemsTransactionTypeGetApiResponse,
      GetAllTransactiontypesItemsTransactionTypeGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/items/transaction_type`,
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    createItemItemsPost: build.mutation<
      CreateItemItemsPostApiResponse,
      CreateItemItemsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/items/`,
        method: 'POST',
        body: queryArg.itemBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllItemsItemsGet: build.query<
      GetAllItemsItemsGetApiResponse,
      GetAllItemsItemsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/items/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          manufacturer_id: queryArg.manufacturerId,
          os_item_category_id: queryArg.osItemCategoryId,
          industry_code: queryArg.industryCode,
          product_code: queryArg.productCode,
          type: queryArg['type'],
          name: queryArg.name,
          status: queryArg.status,
          name__icontains: queryArg.nameIcontains,
          status__icontains: queryArg.statusIcontains,
          industry_code__icontains: queryArg.industryCodeIcontains,
          product_code__icontains: queryArg.productCodeIcontains,
          type__icontains: queryArg.typeIcontains,
          unit_of_measurement_id: queryArg.unitOfMeasurementId,
          item_dimension_id: queryArg.itemDimensionId,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getItemItemsIdGet: build.query<
      GetItemItemsIdGetApiResponse,
      GetItemItemsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/items/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateItemItemsIdPut: build.mutation<
      UpdateItemItemsIdPutApiResponse,
      UpdateItemItemsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/items/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.itemBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteItemItemsIdDelete: build.mutation<
      DeleteItemItemsIdDeleteApiResponse,
      DeleteItemItemsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/items/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createItemsItemLocationsPost: build.mutation<
      CreateItemsItemLocationsPostApiResponse,
      CreateItemsItemLocationsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/items/item_locations/`,
        method: 'POST',
        body: queryArg.itemLocationBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllItemLocationItemsItemLocationsGet: build.query<
      GetAllItemLocationItemsItemLocationsGetApiResponse,
      GetAllItemLocationItemsItemLocationsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/items/item_locations/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          location_name: queryArg.locationName,
          location_name__icontains: queryArg.locationNameIcontains,
          location_code: queryArg.locationCode,
          location_code__icontains: queryArg.locationCodeIcontains,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getItemsItemLocationsIdGet: build.query<
      GetItemsItemLocationsIdGetApiResponse,
      GetItemsItemLocationsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/items/item_locations/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateItemsItemLocationsIdPut: build.mutation<
      UpdateItemsItemLocationsIdPutApiResponse,
      UpdateItemsItemLocationsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/items/item_locations/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.itemLocationBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteItemsItemLocationsIdDelete: build.mutation<
      DeleteItemsItemLocationsIdDeleteApiResponse,
      DeleteItemsItemLocationsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/items/item_locations/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createItemCategoryItemCategoriesPost: build.mutation<
      CreateItemCategoryItemCategoriesPostApiResponse,
      CreateItemCategoryItemCategoriesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_categories/`,
        method: 'POST',
        body: queryArg.itemCategoryBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllItemCategoriesItemCategoriesGet: build.query<
      GetAllItemCategoriesItemCategoriesGetApiResponse,
      GetAllItemCategoriesItemCategoriesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_categories/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          name: queryArg.name,
          name__icontains: queryArg.nameIcontains,
          industry_code: queryArg.industryCode,
          industry_code__icontains: queryArg.industryCodeIcontains,
          status: queryArg.status,
          status__icontains: queryArg.statusIcontains,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getItemCategoryItemCategoriesIdGet: build.query<
      GetItemCategoryItemCategoriesIdGetApiResponse,
      GetItemCategoryItemCategoriesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_categories/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateItemCategoryItemCategoriesIdPut: build.mutation<
      UpdateItemCategoryItemCategoriesIdPutApiResponse,
      UpdateItemCategoryItemCategoriesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_categories/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.itemCategoryBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteItemCategoryItemCategoriesIdDelete: build.mutation<
      DeleteItemCategoryItemCategoriesIdDeleteApiResponse,
      DeleteItemCategoryItemCategoriesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_categories/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllUomTypeUomsUomTypeGet: build.query<
      GetAllUomTypeUomsUomTypeGetApiResponse,
      GetAllUomTypeUomsUomTypeGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/uoms/uom_type`,
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    createUomUomsPost: build.mutation<
      CreateUomUomsPostApiResponse,
      CreateUomUomsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/uoms/`,
        method: 'POST',
        body: queryArg.uomBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllUomsUomsGet: build.query<
      GetAllUomsUomsGetApiResponse,
      GetAllUomsUomsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/uoms/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          uom_code: queryArg.uomCode,
          name: queryArg.name,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getUomUomsIdGet: build.query<
      GetUomUomsIdGetApiResponse,
      GetUomUomsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/uoms/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateUomUomsIdPut: build.mutation<
      UpdateUomUomsIdPutApiResponse,
      UpdateUomUomsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/uoms/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.uomBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteUomUomsIdDelete: build.mutation<
      DeleteUomUomsIdDeleteApiResponse,
      DeleteUomUomsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/uoms/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllItemDimensionTypesItemDimensionsItemDimensionTypeGet: build.query<
      GetAllItemDimensionTypesItemDimensionsItemDimensionTypeGetApiResponse,
      GetAllItemDimensionTypesItemDimensionsItemDimensionTypeGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_dimensions/ItemDimensionType`,
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    createItemDimensionItemDimensionsPost: build.mutation<
      CreateItemDimensionItemDimensionsPostApiResponse,
      CreateItemDimensionItemDimensionsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_dimensions/`,
        method: 'POST',
        body: queryArg.itemDimensionBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllItemDimensionsItemDimensionsGet: build.query<
      GetAllItemDimensionsItemDimensionsGetApiResponse,
      GetAllItemDimensionsItemDimensionsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_dimensions/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          dimension_type_id: queryArg.dimensionTypeId,
          uom_id: queryArg.uomId,
          status: queryArg.status,
          status__icontains: queryArg.statusIcontains,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getItemDimensionItemDimensionsIdGet: build.query<
      GetItemDimensionItemDimensionsIdGetApiResponse,
      GetItemDimensionItemDimensionsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_dimensions/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateItemDimensionItemDimensionsIdPut: build.mutation<
      UpdateItemDimensionItemDimensionsIdPutApiResponse,
      UpdateItemDimensionItemDimensionsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_dimensions/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.itemDimensionBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteItemDimensionItemDimensionsIdDelete: build.mutation<
      DeleteItemDimensionItemDimensionsIdDeleteApiResponse,
      DeleteItemDimensionItemDimensionsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_dimensions/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllItemPriceHistoriesItemPriceHistoriesGet: build.query<
      GetAllItemPriceHistoriesItemPriceHistoriesGetApiResponse,
      GetAllItemPriceHistoriesItemPriceHistoriesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_price_histories/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          item_price_id: queryArg.itemPriceId,
          currency_code: queryArg.currencyCode,
          price: queryArg.price,
          status: queryArg.status,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    createItemPriceItemPricesPost: build.mutation<
      CreateItemPriceItemPricesPostApiResponse,
      CreateItemPriceItemPricesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_prices/`,
        method: 'POST',
        body: queryArg.itemPriceBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllItemPricesItemPricesGet: build.query<
      GetAllItemPricesItemPricesGetApiResponse,
      GetAllItemPricesItemPricesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_prices/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          item_id: queryArg.itemId,
          item_dimension_id: queryArg.itemDimensionId,
          currency_code: queryArg.currencyCode,
          currency_code__icontains: queryArg.currencyCodeIcontains,
          unit_price: queryArg.unitPrice,
          packaging_price: queryArg.packagingPrice,
          status: queryArg.status,
          status__icontains: queryArg.statusIcontains,
          vendor_id: queryArg.vendorId,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getItemPriceItemPricesIdGet: build.query<
      GetItemPriceItemPricesIdGetApiResponse,
      GetItemPriceItemPricesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_prices/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateItemPriceItemPricesIdPut: build.mutation<
      UpdateItemPriceItemPricesIdPutApiResponse,
      UpdateItemPriceItemPricesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_prices/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.itemPriceBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteItemPriceItemPricesIdDelete: build.mutation<
      DeleteItemPriceItemPricesIdDeleteApiResponse,
      DeleteItemPriceItemPricesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_prices/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createPhysicalItemAttributePhysicalItemAttributesPost: build.mutation<
      CreatePhysicalItemAttributePhysicalItemAttributesPostApiResponse,
      CreatePhysicalItemAttributePhysicalItemAttributesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/physical_item_attributes/`,
        method: 'POST',
        body: queryArg.physicalItemAttributeBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllPhysicalItemAttributesPhysicalItemAttributesGet: build.query<
      GetAllPhysicalItemAttributesPhysicalItemAttributesGetApiResponse,
      GetAllPhysicalItemAttributesPhysicalItemAttributesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/physical_item_attributes/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          item_id: queryArg.itemId,
          item_dimension_id: queryArg.itemDimensionId,
          attribute_code: queryArg.attributeCode,
          name: queryArg.name,
          name__icontains: queryArg.nameIcontains,
          attribute_code__icontains: queryArg.attributeCodeIcontains,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getPhysicalItemAttributePhysicalItemAttributesIdGet: build.query<
      GetPhysicalItemAttributePhysicalItemAttributesIdGetApiResponse,
      GetPhysicalItemAttributePhysicalItemAttributesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/physical_item_attributes/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updatePhysicalItemAttributePhysicalItemAttributesIdPut: build.mutation<
      UpdatePhysicalItemAttributePhysicalItemAttributesIdPutApiResponse,
      UpdatePhysicalItemAttributePhysicalItemAttributesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/physical_item_attributes/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.physicalItemAttributeBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deletePhysicalItemAttributePhysicalItemAttributesIdDelete: build.mutation<
      DeletePhysicalItemAttributePhysicalItemAttributesIdDeleteApiResponse,
      DeletePhysicalItemAttributePhysicalItemAttributesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/physical_item_attributes/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createServiceItemAttributesPost: build.mutation<
      CreateServiceItemAttributesPostApiResponse,
      CreateServiceItemAttributesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/service_item_attributes/`,
        method: 'POST',
        body: queryArg.serviceItemAttributeBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllServiceItemAttributeServiceItemAttributesGet: build.query<
      GetAllServiceItemAttributeServiceItemAttributesGetApiResponse,
      GetAllServiceItemAttributeServiceItemAttributesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/service_item_attributes/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          item_id: queryArg.itemId,
          item_category_id: queryArg.itemCategoryId,
          attribute_code: queryArg.attributeCode,
          name: queryArg.name,
          name__icontains: queryArg.nameIcontains,
          attribute_code__icontains: queryArg.attributeCodeIcontains,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getServiceItemAttributesIdGet: build.query<
      GetServiceItemAttributesIdGetApiResponse,
      GetServiceItemAttributesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/service_item_attributes/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateServiceItemAttributesIdPut: build.mutation<
      UpdateServiceItemAttributesIdPutApiResponse,
      UpdateServiceItemAttributesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/service_item_attributes/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.serviceItemAttributeBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteServiceItemAttributesIdDelete: build.mutation<
      DeleteServiceItemAttributesIdDeleteApiResponse,
      DeleteServiceItemAttributesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/service_item_attributes/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createLicenseLicensesPost: build.mutation<
      CreateLicenseLicensesPostApiResponse,
      CreateLicenseLicensesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/licenses/`,
        method: 'POST',
        body: queryArg.licenseBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllLicensesLicensesGet: build.query<
      GetAllLicensesLicensesGetApiResponse,
      GetAllLicensesLicensesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/licenses/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          tenant_id: queryArg.tenantId,
          license_name: queryArg.licenseName,
          issuing_authority_id: queryArg.issuingAuthorityId,
          vallidity: queryArg.vallidity,
          license_authorities_id: queryArg.licenseAuthoritiesId,
          license_name__icontains: queryArg.licenseNameIcontains,
          vallidity__icontains: queryArg.vallidityIcontains,
          status: queryArg.status,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getLicenseLicensesIdGet: build.query<
      GetLicenseLicensesIdGetApiResponse,
      GetLicenseLicensesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/licenses/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateLicenseLicensesIdPut: build.mutation<
      UpdateLicenseLicensesIdPutApiResponse,
      UpdateLicenseLicensesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/licenses/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.licenseBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteLicenseLicensesIdDelete: build.mutation<
      DeleteLicenseLicensesIdDeleteApiResponse,
      DeleteLicenseLicensesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/licenses/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createPaymentPaymentsPost: build.mutation<
      CreatePaymentPaymentsPostApiResponse,
      CreatePaymentPaymentsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/payments/`,
        method: 'POST',
        body: queryArg.paymentBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllPaymentsPaymentsGet: build.query<
      GetAllPaymentsPaymentsGetApiResponse,
      GetAllPaymentsPaymentsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/payments/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          payee_type: queryArg.payeeType,
          payee_type_id: queryArg.payeeTypeId,
          payee_type_id__in: queryArg.payeeTypeIdIn,
          transaction_number: queryArg.transactionNumber,
          transaction_number__icontains: queryArg.transactionNumberIcontains,
          payment_date: queryArg.paymentDate,
          payment_amount: queryArg.paymentAmount,
          status: queryArg.status,
          status__in: queryArg.statusIn,
          project_id: queryArg.projectId,
          order_type: queryArg.orderType,
          order_type_id: queryArg.orderTypeId,
          payment_method: queryArg.paymentMethod,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getPaymentPaymentsIdGet: build.query<
      GetPaymentPaymentsIdGetApiResponse,
      GetPaymentPaymentsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/payments/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updatePaymentPaymentsIdPut: build.mutation<
      UpdatePaymentPaymentsIdPutApiResponse,
      UpdatePaymentPaymentsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/payments/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.paymentBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deletePaymentPaymentsIdDelete: build.mutation<
      DeletePaymentPaymentsIdDeleteApiResponse,
      DeletePaymentPaymentsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/payments/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createPurchaseOrderPurchaseOrdersPost: build.mutation<
      CreatePurchaseOrderPurchaseOrdersPostApiResponse,
      CreatePurchaseOrderPurchaseOrdersPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/purchase_orders/`,
        method: 'POST',
        body: queryArg.purchaseOrderBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllPurchaseOrdersPurchaseOrdersGet: build.query<
      GetAllPurchaseOrdersPurchaseOrdersGetApiResponse,
      GetAllPurchaseOrdersPurchaseOrdersGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/purchase_orders/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          vendor_id: queryArg.vendorId,
          vendor_id__in: queryArg.vendorIdIn,
          purchase_order_number: queryArg.purchaseOrderNumber,
          purchase_order_number__icontains:
            queryArg.purchaseOrderNumberIcontains,
          purchase_order_date: queryArg.purchaseOrderDate,
          project_id: queryArg.projectId,
          contract_id: queryArg.contractId,
          purchase_order_amount: queryArg.purchaseOrderAmount,
          tax_amount: queryArg.taxAmount,
          purchase_order_file_id: queryArg.purchaseOrderFileId,
          purchase_order_reference: queryArg.purchaseOrderReference,
          is_paid: queryArg.isPaid,
          country__icontains: queryArg.countryIcontains,
          state__icontains: queryArg.stateIcontains,
          city__icontains: queryArg.cityIcontains,
          zipcode__icontains: queryArg.zipcodeIcontains,
          purchase_order_total_amount: queryArg.purchaseOrderTotalAmount,
          payment_type: queryArg.paymentType,
          payment_method: queryArg.paymentMethod,
          status: queryArg.status,
          status__in: queryArg.statusIn,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getPurchaseOrderPurchaseOrdersIdGet: build.query<
      GetPurchaseOrderPurchaseOrdersIdGetApiResponse,
      GetPurchaseOrderPurchaseOrdersIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/purchase_orders/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updatePurchaseOrderPurchaseOrdersIdPut: build.mutation<
      UpdatePurchaseOrderPurchaseOrdersIdPutApiResponse,
      UpdatePurchaseOrderPurchaseOrdersIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/purchase_orders/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.purchaseOrderBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deletePurchaseOrderPurchaseOrdersIdDelete: build.mutation<
      DeletePurchaseOrderPurchaseOrdersIdDeleteApiResponse,
      DeletePurchaseOrderPurchaseOrdersIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/purchase_orders/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createPurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsPost:
      build.mutation<
        CreatePurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsPostApiResponse,
        CreatePurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsPostApiArg
      >({
        query: (queryArg: any) => ({
          url: `/purchase_orders/purchase_order_details/`,
          method: 'POST',
          body: queryArg.purchaseOrderDetailBaseCreate,
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          }
        })
      }),
    getAllPurchaseOrderDetailsPurchaseOrdersPurchaseOrderDetailsGet:
      build.query<
        GetAllPurchaseOrderDetailsPurchaseOrdersPurchaseOrderDetailsGetApiResponse,
        GetAllPurchaseOrderDetailsPurchaseOrdersPurchaseOrderDetailsGetApiArg
      >({
        query: (queryArg: any) => ({
          url: `/purchase_orders/purchase_order_details/`,
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          },
          params: {
            order_by: queryArg.orderBy,
            id: queryArg.id,
            id__in: queryArg.idIn,
            purchase_order_id: queryArg.purchaseOrderId,
            item_id: queryArg.itemId,
            item_name: queryArg.itemName,
            item_description: queryArg.itemDescription,
            unit_price: queryArg.unitPrice,
            total_price: queryArg.totalPrice,
            quantity: queryArg.quantity,
            page: queryArg.page,
            size: queryArg.size,
            get_all: queryArg.getAll
          }
        })
      }),
    getPurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsIdGet: build.query<
      GetPurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsIdGetApiResponse,
      GetPurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/purchase_orders/purchase_order_details/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updatePurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsIdPut:
      build.mutation<
        UpdatePurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsIdPutApiResponse,
        UpdatePurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsIdPutApiArg
      >({
        query: (queryArg: any) => ({
          url: `/purchase_orders/purchase_order_details/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.purchaseOrderDetailBaseUpdate,
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          }
        })
      }),
    deletePurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsIdDelete:
      build.mutation<
        DeletePurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsIdDeleteApiResponse,
        DeletePurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/purchase_orders/purchase_order_details/${queryArg.id}`,
          method: 'DELETE',
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          }
        })
      }),
    createWorkorderWorkOrdersPost: build.mutation<
      CreateWorkorderWorkOrdersPostApiResponse,
      CreateWorkorderWorkOrdersPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/work_orders/`,
        method: 'POST',
        body: queryArg.workOrderBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllWorkOrdersWorkOrdersGet: build.query<
      GetAllWorkOrdersWorkOrdersGetApiResponse,
      GetAllWorkOrdersWorkOrdersGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/work_orders/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          work_order_number: queryArg.workOrderNumber,
          work_order_number__icontains: queryArg.workOrderNumberIcontains,
          work_order_date: queryArg.workOrderDate,
          subcontractor_id: queryArg.subcontractorId,
          project_id: queryArg.projectId,
          contract_id: queryArg.contractId,
          work_order_amount: queryArg.workOrderAmount,
          tax_amount: queryArg.taxAmount,
          work_order_file_id: queryArg.workOrderFileId,
          work_order_reference: queryArg.workOrderReference,
          is_paid: queryArg.isPaid,
          payment_type: queryArg.paymentType,
          payment_method: queryArg.paymentMethod,
          tax_id: queryArg.taxId,
          work_order_name: queryArg.workOrderName,
          work_order_name__icontains: queryArg.workOrderNameIcontains,
          start_date: queryArg.startDate,
          end_date: queryArg.endDate,
          priority: queryArg.priority,
          status: queryArg.status,
          status__in: queryArg.statusIn,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getWorkorderWorkOrdersIdGet: build.query<
      GetWorkorderWorkOrdersIdGetApiResponse,
      GetWorkorderWorkOrdersIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/work_orders/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateWorkorderWorkOrdersIdPut: build.mutation<
      UpdateWorkorderWorkOrdersIdPutApiResponse,
      UpdateWorkorderWorkOrdersIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/work_orders/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.workOrderBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteWorkorderWorkOrdersIdDelete: build.mutation<
      DeleteWorkorderWorkOrdersIdDeleteApiResponse,
      DeleteWorkorderWorkOrdersIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/work_orders/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createTaxTaxesPost: build.mutation<
      CreateTaxTaxesPostApiResponse,
      CreateTaxTaxesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/taxes/`,
        method: 'POST',
        body: queryArg.taxBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllTaxesTaxesGet: build.query<
      GetAllTaxesTaxesGetApiResponse,
      GetAllTaxesTaxesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/taxes/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          name: queryArg.name,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getTaxTaxesIdGet: build.query<
      GetTaxTaxesIdGetApiResponse,
      GetTaxTaxesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/taxes/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateTaxTaxesIdPut: build.mutation<
      UpdateTaxTaxesIdPutApiResponse,
      UpdateTaxTaxesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/taxes/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.taxBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteTaxTaxesIdDelete: build.mutation<
      DeleteTaxTaxesIdDeleteApiResponse,
      DeleteTaxTaxesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/taxes/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createLicenseAuthorityLicenseAuthoritiesPost: build.mutation<
      CreateLicenseAuthorityLicenseAuthoritiesPostApiResponse,
      CreateLicenseAuthorityLicenseAuthoritiesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/license_authorities/`,
        method: 'POST',
        body: queryArg.licenseAuthorityBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllLicenseAuthoritiesLicenseAuthoritiesGet: build.query<
      GetAllLicenseAuthoritiesLicenseAuthoritiesGetApiResponse,
      GetAllLicenseAuthoritiesLicenseAuthoritiesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/license_authorities/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          name: queryArg.name,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getLicenseAuthorityLicenseAuthoritiesIdGet: build.query<
      GetLicenseAuthorityLicenseAuthoritiesIdGetApiResponse,
      GetLicenseAuthorityLicenseAuthoritiesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/license_authorities/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateLicenseAuthorityLicenseAuthoritiesIdPut: build.mutation<
      UpdateLicenseAuthorityLicenseAuthoritiesIdPutApiResponse,
      UpdateLicenseAuthorityLicenseAuthoritiesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/license_authorities/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.licenseAuthorityBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteLicenseAuthorityLicenseAuthoritiesIdDelete: build.mutation<
      DeleteLicenseAuthorityLicenseAuthoritiesIdDeleteApiResponse,
      DeleteLicenseAuthorityLicenseAuthoritiesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/license_authorities/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createManufacturerManufacturersPost: build.mutation<
      CreateManufacturerManufacturersPostApiResponse,
      CreateManufacturerManufacturersPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/manufacturers/`,
        method: 'POST',
        body: queryArg.manufacturerBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllManufacturersManufacturersGet: build.query<
      GetAllManufacturersManufacturersGetApiResponse,
      GetAllManufacturersManufacturersGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/manufacturers/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          name: queryArg.name,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getManufacturerManufacturersIdGet: build.query<
      GetManufacturerManufacturersIdGetApiResponse,
      GetManufacturerManufacturersIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/manufacturers/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateManufacturerManufacturersIdPut: build.mutation<
      UpdateManufacturerManufacturersIdPutApiResponse,
      UpdateManufacturerManufacturersIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/manufacturers/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.manufacturerBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteManufacturerManufacturersIdDelete: build.mutation<
      DeleteManufacturerManufacturersIdDeleteApiResponse,
      DeleteManufacturerManufacturersIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/manufacturers/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createPaymentTermPaymentTermsPost: build.mutation<
      CreatePaymentTermPaymentTermsPostApiResponse,
      CreatePaymentTermPaymentTermsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/payment_terms/`,
        method: 'POST',
        body: queryArg.paymentTermBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllPaymentTermsPaymentTermsGet: build.query<
      GetAllPaymentTermsPaymentTermsGetApiResponse,
      GetAllPaymentTermsPaymentTermsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/payment_terms/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          tenant_id: queryArg.tenantId,
          payment_term_name: queryArg.paymentTermName,
          payment_term_name__icontains: queryArg.paymentTermNameIcontains,
          payment_term_unit: queryArg.paymentTermUnit,
          status: queryArg.status,
          payment_term: queryArg.paymentTerm,
          status__icontains: queryArg.statusIcontains,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getPaymentTermPaymentTermsIdGet: build.query<
      GetPaymentTermPaymentTermsIdGetApiResponse,
      GetPaymentTermPaymentTermsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/payment_terms/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updatePaymentTermPaymentTermsIdPut: build.mutation<
      UpdatePaymentTermPaymentTermsIdPutApiResponse,
      UpdatePaymentTermPaymentTermsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/payment_terms/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.paymentTermBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deletePaymentTermPaymentTermsIdDelete: build.mutation<
      DeletePaymentTermPaymentTermsIdDeleteApiResponse,
      DeletePaymentTermPaymentTermsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/payment_terms/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createShipmentShipmentsPost: build.mutation<
      CreateShipmentShipmentsPostApiResponse,
      CreateShipmentShipmentsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/shipments/`,
        method: 'POST',
        body: queryArg.shipmentBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllShipmentsShipmentsGet: build.query<
      GetAllShipmentsShipmentsGetApiResponse,
      GetAllShipmentsShipmentsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/shipments/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          purchase_order_id: queryArg.purchaseOrderId,
          project_id: queryArg.projectId,
          shipment_number: queryArg.shipmentNumber,
          shipment_number__icontains: queryArg.shipmentNumberIcontains,
          expected_delivery_date: queryArg.expectedDeliveryDate,
          shipping_method: queryArg.shippingMethod,
          tracking_number: queryArg.trackingNumber,
          total_weight: queryArg.totalWeight,
          total_volume: queryArg.totalVolume,
          shipping_cost: queryArg.shippingCost,
          total_cost: queryArg.totalCost,
          created_by: queryArg.createdBy,
          actual_delivery_date: queryArg.actualDeliveryDate,
          reference_number: queryArg.referenceNumber,
          shipper_id: queryArg.shipperId,
          shipper_type: queryArg.shipperType,
          status: queryArg.status,
          status__in: queryArg.statusIn,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getShipmentShipmentsIdGet: build.query<
      GetShipmentShipmentsIdGetApiResponse,
      GetShipmentShipmentsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/shipments/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateShipmentShipmentsIdPut: build.mutation<
      UpdateShipmentShipmentsIdPutApiResponse,
      UpdateShipmentShipmentsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/shipments/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.shipmentBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteShipmentShipmentsIdDelete: build.mutation<
      DeleteShipmentShipmentsIdDeleteApiResponse,
      DeleteShipmentShipmentsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/shipments/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createShipmentItemShipmentItemsPost: build.mutation<
      CreateShipmentItemShipmentItemsPostApiResponse,
      CreateShipmentItemShipmentItemsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/shipment_items/`,
        method: 'POST',
        body: queryArg.shipmentItemBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllShipmentItemsShipmentItemsGet: build.query<
      GetAllShipmentItemsShipmentItemsGetApiResponse,
      GetAllShipmentItemsShipmentItemsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/shipment_items/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          shipment_id: queryArg.shipmentId,
          status: queryArg.status,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getShipmentItemShipmentItemsIdGet: build.query<
      GetShipmentItemShipmentItemsIdGetApiResponse,
      GetShipmentItemShipmentItemsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/shipment_items/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateShipmentItemShipmentItemsIdPut: build.mutation<
      UpdateShipmentItemShipmentItemsIdPutApiResponse,
      UpdateShipmentItemShipmentItemsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/shipment_items/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.shipmentItemBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteShipmentItemShipmentItemsIdDelete: build.mutation<
      DeleteShipmentItemShipmentItemsIdDeleteApiResponse,
      DeleteShipmentItemShipmentItemsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/shipment_items/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteShipmentAttachmentShipmentAttachmentsShipmentIdShipmentIdFileIdFileIdDelete:
      build.mutation<
        DeleteShipmentAttachmentShipmentAttachmentsShipmentIdShipmentIdFileIdFileIdDeleteApiResponse,
        DeleteShipmentAttachmentShipmentAttachmentsShipmentIdShipmentIdFileIdFileIdDeleteApiArg
      >({
        query: (queryArg: any) => ({
          url: `/shipment_attachments/shipment_id/${queryArg.shipmentId}/file_id/${queryArg.fileId}`,
          method: 'DELETE',
          headers: {
            'x-tenant-id': queryArg['x-tenant-id']
          }
        })
      }),
    getAllContractAmendmentContractsAmendmentsGet: build.query<
      GetAllContractAmendmentContractsAmendmentsGetApiResponse,
      GetAllContractAmendmentContractsAmendmentsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/contracts/amendments`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          contract_id: queryArg.contractId,
          contract_id__in: queryArg.contractIdIn,
          amendment_number: queryArg.amendmentNumber,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getAllTerminationContractsTerminationReasonsGet: build.query<
      GetAllTerminationContractsTerminationReasonsGetApiResponse,
      GetAllTerminationContractsTerminationReasonsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/contracts/termination_reasons`,
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    createContractContractsPost: build.mutation<
      CreateContractContractsPostApiResponse,
      CreateContractContractsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/contracts/`,
        method: 'POST',
        body: queryArg.contractCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllContractsContractsGet: build.query<
      GetAllContractsContractsGetApiResponse,
      GetAllContractsContractsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/contracts/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          party_id: queryArg.partyId,
          party_id__in: queryArg.partyIdIn,
          contract_name: queryArg.contractName,
          contract_name__icontains: queryArg.contractNameIcontains,
          contract_type: queryArg.contractType,
          contract_type__icontains: queryArg.contractTypeIcontains,
          contract_start_date: queryArg.contractStartDate,
          contract_end_date: queryArg.contractEndDate,
          contact_id: queryArg.contactId,
          created_by: queryArg.createdBy,
          status: queryArg.status,
          status__in: queryArg.statusIn,
          status__icontains: queryArg.statusIcontains,
          party_type: queryArg.partyType,
          is_appendix: queryArg.isAppendix,
          is_deleted: queryArg.isDeleted,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getContractContractsIdGet: build.query<
      GetContractContractsIdGetApiResponse,
      GetContractContractsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/contracts/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateContractContractsIdPut: build.mutation<
      UpdateContractContractsIdPutApiResponse,
      UpdateContractContractsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/contracts/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.contractUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteContractContractsIdDelete: build.mutation<
      DeleteContractContractsIdDeleteApiResponse,
      DeleteContractContractsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/contracts/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAppendicesContractsIdAppendicesGet: build.query<
      GetAppendicesContractsIdAppendicesGetApiResponse,
      GetAppendicesContractsIdAppendicesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/contracts/${queryArg.id}/appendices`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createAmendmentsContractscontractContractIdAmendmentsPost: build.mutation<
      CreateAmendmentsContractscontractContractIdAmendmentsPostApiResponse,
      CreateAmendmentsContractscontractContractIdAmendmentsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/contractscontract/${queryArg.contractId}/amendments`,
        method: 'POST',
        body: queryArg.contractAmendmentBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createTemplateContractsContractIdTemplatePost: build.mutation<
      CreateTemplateContractsContractIdTemplatePostApiResponse,
      CreateTemplateContractsContractIdTemplatePostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/contracts/${queryArg.contractId}/template`,
        method: 'POST',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createFromTemplateContractsFromTemplateTemplateIdPost: build.mutation<
      CreateFromTemplateContractsFromTemplateTemplateIdPostApiResponse,
      CreateFromTemplateContractsFromTemplateTemplateIdPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/contracts/from_template/${queryArg.templateId}`,
        method: 'POST',
        body: queryArg.templateContractCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createAttribiuteOfContractAttribiuteOfContractsPost: build.mutation<
      CreateAttribiuteOfContractAttribiuteOfContractsPostApiResponse,
      CreateAttribiuteOfContractAttribiuteOfContractsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/attribiute_of_contracts/`,
        method: 'POST',
        body: queryArg.attribiuteOfContractBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllAttribiuteOfContractsAttribiuteOfContractsGet: build.query<
      GetAllAttribiuteOfContractsAttribiuteOfContractsGetApiResponse,
      GetAllAttribiuteOfContractsAttribiuteOfContractsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/attribiute_of_contracts/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          attribute_name: queryArg.attributeName,
          attribute_name__in: queryArg.attributeNameIn,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getAttribiuteOfContractAttribiuteOfContractsIdGet: build.query<
      GetAttribiuteOfContractAttribiuteOfContractsIdGetApiResponse,
      GetAttribiuteOfContractAttribiuteOfContractsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/attribiute_of_contracts/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateAttribiuteOfContractAttribiuteOfContractsIdPut: build.mutation<
      UpdateAttribiuteOfContractAttribiuteOfContractsIdPutApiResponse,
      UpdateAttribiuteOfContractAttribiuteOfContractsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/attribiute_of_contracts/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.attribiuteOfContractBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteAttribiuteOfContractAttribiuteOfContractsIdDelete: build.mutation<
      DeleteAttribiuteOfContractAttribiuteOfContractsIdDeleteApiResponse,
      DeleteAttribiuteOfContractAttribiuteOfContractsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/attribiute_of_contracts/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createInventoriesPost: build.mutation<
      CreateInventoriesPostApiResponse,
      CreateInventoriesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/inventories/`,
        method: 'POST',
        body: queryArg.inventoryBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllInventoryInventoriesGet: build.query<
      GetAllInventoryInventoriesGetApiResponse,
      GetAllInventoryInventoriesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/inventories/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          status: queryArg.status,
          uom_id: queryArg.uomId,
          item_id: queryArg.itemId,
          location_id: queryArg.locationId,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getInventoriesIdGet: build.query<
      GetInventoriesIdGetApiResponse,
      GetInventoriesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/inventories/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateInventoriesIdPut: build.mutation<
      UpdateInventoriesIdPutApiResponse,
      UpdateInventoriesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/inventories/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.inventoryBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteInventoriesIdDelete: build.mutation<
      DeleteInventoriesIdDeleteApiResponse,
      DeleteInventoriesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/inventories/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createInventoryAdjustmentsPost: build.mutation<
      CreateInventoryAdjustmentsPostApiResponse,
      CreateInventoryAdjustmentsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/inventory_adjustments/`,
        method: 'POST',
        body: queryArg.inventoryAdjustmentBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllInventoryAdjustmentInventoryAdjustmentsGet: build.query<
      GetAllInventoryAdjustmentInventoryAdjustmentsGetApiResponse,
      GetAllInventoryAdjustmentInventoryAdjustmentsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/inventory_adjustments/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          item_id: queryArg.itemId,
          unit_of_measure_id: queryArg.unitOfMeasureId,
          adjustment_reason_id: queryArg.adjustmentReasonId,
          status: queryArg.status,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getInventoryAdjustmentsIdGet: build.query<
      GetInventoryAdjustmentsIdGetApiResponse,
      GetInventoryAdjustmentsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/inventory_adjustments/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateInventoryAdjustmentsIdPut: build.mutation<
      UpdateInventoryAdjustmentsIdPutApiResponse,
      UpdateInventoryAdjustmentsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/inventory_adjustments/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.inventoryAdjustmentBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteInventoryAdjustmentsIdDelete: build.mutation<
      DeleteInventoryAdjustmentsIdDeleteApiResponse,
      DeleteInventoryAdjustmentsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/inventory_adjustments/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createAttributeOfItemsPost: build.mutation<
      CreateAttributeOfItemsPostApiResponse,
      CreateAttributeOfItemsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/attribute_of_items/`,
        method: 'POST',
        body: queryArg.attributeOfItemBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllAttributeOfItemAttributeOfItemsGet: build.query<
      GetAllAttributeOfItemAttributeOfItemsGetApiResponse,
      GetAllAttributeOfItemAttributeOfItemsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/attribute_of_items/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          attribute_name: queryArg.attributeName,
          attribute_name__icontains: queryArg.attributeNameIcontains,
          attribute_type: queryArg.attributeType,
          item_category_id: queryArg.itemCategoryId,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getAttributeOfItemsIdGet: build.query<
      GetAttributeOfItemsIdGetApiResponse,
      GetAttributeOfItemsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/attribute_of_items/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateAttributeOfItemsIdPut: build.mutation<
      UpdateAttributeOfItemsIdPutApiResponse,
      UpdateAttributeOfItemsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/attribute_of_items/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.attributeOfItemBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteAttributeOfItemsIdDelete: build.mutation<
      DeleteAttributeOfItemsIdDeleteApiResponse,
      DeleteAttributeOfItemsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/attribute_of_items/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createItemAttributesPost: build.mutation<
      CreateItemAttributesPostApiResponse,
      CreateItemAttributesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_attributes/`,
        method: 'POST',
        body: queryArg.itemAttributeBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllItemAttributeItemAttributesGet: build.query<
      GetAllItemAttributeItemAttributesGetApiResponse,
      GetAllItemAttributeItemAttributesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_attributes/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          id__in: queryArg.idIn,
          item_id: queryArg.itemId,
          attribute_id: queryArg.attributeId,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getItemAttributesIdGet: build.query<
      GetItemAttributesIdGetApiResponse,
      GetItemAttributesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_attributes/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateItemAttributesIdPut: build.mutation<
      UpdateItemAttributesIdPutApiResponse,
      UpdateItemAttributesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_attributes/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.itemAttributeBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteItemAttributesIdDelete: build.mutation<
      DeleteItemAttributesIdDeleteApiResponse,
      DeleteItemAttributesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_attributes/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createContractTemplateContractTemplatesPost: build.mutation<
      CreateContractTemplateContractTemplatesPostApiResponse,
      CreateContractTemplateContractTemplatesPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/contract_templates/`,
        method: 'POST',
        body: queryArg.contractTemplateBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllContractTemplatesContractTemplatesGet: build.query<
      GetAllContractTemplatesContractTemplatesGetApiResponse,
      GetAllContractTemplatesContractTemplatesGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/contract_templates/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          template_name: queryArg.templateName,
          template_name__icontains: queryArg.templateNameIcontains,
          contract_type: queryArg.contractType,
          currency_code: queryArg.currencyCode,
          start_date: queryArg.startDate,
          end_date: queryArg.endDate,
          created_at: queryArg.createdAt,
          updated_at: queryArg.updatedAt,
          status: queryArg.status,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getContractTemplateContractTemplatesIdGet: build.query<
      GetContractTemplateContractTemplatesIdGetApiResponse,
      GetContractTemplateContractTemplatesIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/contract_templates/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateContractTemplateContractTemplatesIdPut: build.mutation<
      UpdateContractTemplateContractTemplatesIdPutApiResponse,
      UpdateContractTemplateContractTemplatesIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/contract_templates/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.contractTemplateBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteContractTemplateContractTemplatesIdDelete: build.mutation<
      DeleteContractTemplateContractTemplatesIdDeleteApiResponse,
      DeleteContractTemplateContractTemplatesIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/contract_templates/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    createItemRequisitionItemRequisitionsPost: build.mutation<
      CreateItemRequisitionItemRequisitionsPostApiResponse,
      CreateItemRequisitionItemRequisitionsPostApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_requisitions/`,
        method: 'POST',
        body: queryArg.itemRequisitionBaseCreate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    getAllItemRequisitionsItemRequisitionsGet: build.query<
      GetAllItemRequisitionsItemRequisitionsGetApiResponse,
      GetAllItemRequisitionsItemRequisitionsGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_requisitions/`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        },
        params: {
          order_by: queryArg.orderBy,
          id: queryArg.id,
          project_id: queryArg.projectId,
          task_id: queryArg.taskId,
          item_id: queryArg.itemId,
          uom_id: queryArg.uomId,
          quantity: queryArg.quantity,
          request_date: queryArg.requestDate,
          requested_by: queryArg.requestedBy,
          requisition_type: queryArg.requisitionType,
          created_at: queryArg.createdAt,
          updated_at: queryArg.updatedAt,
          page: queryArg.page,
          size: queryArg.size,
          get_all: queryArg.getAll
        }
      })
    }),
    getItemRequisitionItemRequisitionsIdGet: build.query<
      GetItemRequisitionItemRequisitionsIdGetApiResponse,
      GetItemRequisitionItemRequisitionsIdGetApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_requisitions/${queryArg.id}`,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    updateItemRequisitionItemRequisitionsIdPut: build.mutation<
      UpdateItemRequisitionItemRequisitionsIdPutApiResponse,
      UpdateItemRequisitionItemRequisitionsIdPutApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_requisitions/${queryArg.id}`,
        method: 'PUT',
        body: queryArg.itemRequisitionBaseUpdate,
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    }),
    deleteItemRequisitionItemRequisitionsIdDelete: build.mutation<
      DeleteItemRequisitionItemRequisitionsIdDeleteApiResponse,
      DeleteItemRequisitionItemRequisitionsIdDeleteApiArg
    >({
      query: (queryArg: any) => ({
        url: `/item_requisitions/${queryArg.id}`,
        method: 'DELETE',
        headers: {
          'x-tenant-id': queryArg['x-tenant-id']
        }
      })
    })
  }),
  overrideExisting: false
});
export { injectedRtkApi as vendorsApi };
export type CreateVendorVendorsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateVendorVendorsPostApiArg = {
  'x-tenant-id': number;
  vendorBaseCreate: VendorBaseCreate;
};
export type GetAllVendorsVendorsGetApiResponse =
  /** status 200 Successful Response */ PaginatedVendorBaseResponse;
export type GetAllVendorsVendorsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  vendorCode?: string | null;
  name?: string | null;
  nameIcontains?: string | null;
  email?: string | null;
  emailIcontains?: string | null;
  phoneNumber?: string | null;
  industryCode?: string | null;
  industryCodeIcontains?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  zipcode?: string | null;
  taxEnabled?: boolean | null;
  taxId?: string | null;
  taxJurisdictions?: string | null;
  status?: string | null;
  statusIcontains?: string | null;
  effectiveStartDate?: string | null;
  effectiveEndDate?: string | null;
  type?: string | null;
  vendorType?: string | null;
  category?: string | null;
  legalName?: string | null;
  legalNameIcontains?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetVendorVendorsIdGetApiResponse =
  /** status 200 Successful Response */ VendorDetailBaseResponse;
export type GetVendorVendorsIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateVendorVendorsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateVendorVendorsIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  vendorBaseUpdate: VendorBaseUpdate;
};
export type DeleteVendorVendorsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteVendorVendorsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type GetFileDataVendorsIdLogGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetFileDataVendorsIdLogGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateVendorAddressVendorsVendorIdAddressesAddressIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateVendorAddressVendorsVendorIdAddressesAddressIdPutApiArg = {
  addressId: number;
  vendorId: number;
  'x-tenant-id': number;
  adressesBaseUpdate: AdressesBaseUpdate;
};
export type DeleteVendorAddressVendorsVendorIdAddressesAddressIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteVendorAddressVendorsVendorIdAddressesAddressIdDeleteApiArg = {
  addressId: number;
  vendorId: number;
  'x-tenant-id': number;
};
export type UpdateVendorBankDetailVendorsVendorIdBankDetailsBankDetailsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateVendorBankDetailVendorsVendorIdBankDetailsBankDetailsIdPutApiArg =
  {
    bankDetailsId: number;
    vendorId: number;
    'x-tenant-id': number;
    bankDetailUpdate: BankDetailUpdate;
  };
export type DeleteVendorBankDetailVendorsVendorIdBankDetailsBankDetailsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteVendorBankDetailVendorsVendorIdBankDetailsBankDetailsIdDeleteApiArg =
  {
    bankDetailsId: number;
    vendorId: number;
    'x-tenant-id': number;
  };
export type UpdateVendorTaxIdentificationVendorsVendorIdTaxIdentificationTaxIdentificationIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateVendorTaxIdentificationVendorsVendorIdTaxIdentificationTaxIdentificationIdPutApiArg =
  {
    taxIdentificationId: number;
    vendorId: number;
    'x-tenant-id': number;
    taxIdentificationBaseUpdate: TaxIdentificationBaseUpdate;
  };
export type DeleteVendorTaxIdentificationVendorsVendorIdTaxIdentificationTaxIdentificationIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteVendorTaxIdentificationVendorsVendorIdTaxIdentificationTaxIdentificationIdDeleteApiArg =
  {
    taxIdentificationId: number;
    vendorId: number;
    'x-tenant-id': number;
  };
export type CreateVendorContactVendorContactsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateVendorContactVendorContactsPostApiArg = {
  'x-tenant-id': number;
  vendorContactBaseCreate: VendorContactBaseCreate;
};
export type GetAllVendorContactsVendorContactsGetApiResponse =
  /** status 200 Successful Response */ PaginatedVendorContactBaseResponse;
export type GetAllVendorContactsVendorContactsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  vendorId?: number | null;
  vendorIdIn?: string | null;
  firstName?: string | null;
  firstNameIcontains?: string | null;
  lastName?: string | null;
  lastNameIcontains?: string | null;
  designation?: string | null;
  designationIcontains?: string | null;
  email?: string | null;
  emailIcontains?: string | null;
  phone?: string | null;
  phoneIcontains?: string | null;
  status?: string | null;
  statusIcontains?: string | null;
  type?: string | null;
  partyType?: AssociateEntity | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetVendorContactVendorContactsIdGetApiResponse =
  /** status 200 Successful Response */ VendorContactBaseResponse;
export type GetVendorContactVendorContactsIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateVendorContactVendorContactsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateVendorContactVendorContactsIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  vendorContactBaseUpdate: VendorContactBaseUpdate;
};
export type DeleteVendorContactVendorContactsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteVendorContactVendorContactsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateVendorItemPricesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateVendorItemPricesPostApiArg = {
  'x-tenant-id': number;
  vendorItemPriceBaseCreate: VendorItemPriceBaseCreate;
};
export type GetAllVendorItemPriceVendorItemPricesGetApiResponse =
  /** status 200 Successful Response */ PaginatedVendorItemPriceBaseResponse;
export type GetAllVendorItemPriceVendorItemPricesGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  vendorItemId?: number | null;
  currencyCode?: string | null;
  price?: number | null;
  itemId?: number | null;
  vendorId?: number | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetVendorItemPricesIdGetApiResponse =
  /** status 200 Successful Response */ VendorItemPriceBaseResponse;
export type GetVendorItemPricesIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateVendorItemPricesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateVendorItemPricesIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  vendorItemPriceBaseUpdate: VendorItemPriceBaseUpdate;
};
export type DeleteVendorItemPricesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteVendorItemPricesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateVendorItemShippingsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateVendorItemShippingsPostApiArg = {
  'x-tenant-id': number;
  vendorItemShippingBaseCreate: VendorItemShippingBaseCreate;
};
export type GetAllVendorItemShippingVendorItemShippingsGetApiResponse =
  /** status 200 Successful Response */ PaginatedVendorItemShippingBaseResponse;
export type GetAllVendorItemShippingVendorItemShippingsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  vendorId?: number | null;
  vendorIdIn?: string | null;
  vendorItemId?: number | null;
  shippingNote?: string | null;
  trackingCode?: string | null;
  currencyCode?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetVendorItemShippingsIdGetApiResponse =
  /** status 200 Successful Response */ VendorItemShippingBaseResponse;
export type GetVendorItemShippingsIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateVendorItemShippingsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateVendorItemShippingsIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  vendorItemShippingBaseUpdate: VendorItemShippingBaseUpdate;
};
export type DeleteVendorItemShippingsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteVendorItemShippingsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateVendorItemTaxsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateVendorItemTaxsPostApiArg = {
  'x-tenant-id': number;
  vendorItemTaxBaseCreate: VendorItemTaxBaseCreate;
};
export type GetAllVendorItemTaxVendorItemTaxsGetApiResponse =
  /** status 200 Successful Response */ PaginatedVendorItemTaxBaseResponse;
export type GetAllVendorItemTaxVendorItemTaxsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  tenantId?: number | null;
  vendorId?: number | null;
  vendorItemId?: number | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetVendorItemTaxsIdGetApiResponse =
  /** status 200 Successful Response */ VendorItemTaxBaseResponse;
export type GetVendorItemTaxsIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateVendorItemTaxsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateVendorItemTaxsIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  vendorItemTaxBaseUpdate: VendorItemTaxBaseUpdate;
};
export type DeleteVendorItemTaxsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteVendorItemTaxsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateVendorLicensesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateVendorLicensesPostApiArg = {
  'x-tenant-id': number;
  vendorLicenseBaseCreate: VendorLicenseBaseCreate;
};
export type GetAllVendorLicenseVendorLicensesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAllVendorLicenseVendorLicensesGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  tenantId?: number | null;
  vendorId?: number | null;
  licenseId?: number | null;
  effectiveStartDate?: string | null;
  effectiveEndDate?: string | null;
  status?: string | null;
  statusIcontains?: string | null;
  partyType?: AssociateEntity | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetVendorLicensesIdGetApiResponse =
  /** status 200 Successful Response */ VendorLicenseBaseResponse;
export type GetVendorLicensesIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateVendorLicensesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateVendorLicensesIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  vendorLicenseBaseUpdate: VendorLicenseBaseUpdate;
};
export type DeleteVendorLicensesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteVendorLicensesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateVendorItemVendorItemsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateVendorItemVendorItemsPostApiArg = {
  'x-tenant-id': number;
  vendorItemsCreateRequest: VendorItemsCreateRequest;
};
export type GetAllVendorItemsVendorItemsGetApiResponse =
  /** status 200 Successful Response */ PaginatedVendorItemBaseResponse;
export type GetAllVendorItemsVendorItemsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  tenantId?: number | null;
  itemId?: number | null;
  vendorId?: number | null;
  partyType?: AssociateEntity | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetVendorItemVendorItemsIdGetApiResponse =
  /** status 200 Successful Response */ VendorItemDetailResponse;
export type GetVendorItemVendorItemsIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateVendorItemVendorItemsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateVendorItemVendorItemsIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  vendorItemBaseUpdate: VendorItemBaseUpdate;
};
export type DeleteVendorItemVendorItemsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteVendorItemVendorItemsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type GetCurrencyCurrenciesIdGetApiResponse =
  /** status 200 Successful Response */ CurrencyBaseResponse;
export type GetCurrencyCurrenciesIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateCurrencyCurrenciesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateCurrencyCurrenciesIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  currencyBaseUpdate: CurrencyBaseUpdate;
};
export type DeleteCurrencyCurrenciesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteCurrencyCurrenciesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type GetAllCurrenciesCurrenciesGetApiResponse =
  /** status 200 Successful Response */ PaginatedCurrencyBaseResponse;
export type GetAllCurrenciesCurrenciesGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  currencyName?: string | null;
  currencyIso?: string | null;
  currencyCode?: string | null;
  effectiveStartDate?: string | null;
  effectiveEndDate?: string | null;
  status?: Status | null;
  page?: number;
  size?: number;
  getAll?: boolean;
};
export type CreateIndustryIndustriesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateIndustryIndustriesPostApiArg = {
  'x-tenant-id': number;
  industryBaseCreate: IndustryBaseCreate;
};
export type GetAllIndustriesIndustriesGetApiResponse =
  /** status 200 Successful Response */ PaginatedIndustryBaseResponse;
export type GetAllIndustriesIndustriesGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  name?: string | null;
  industryCode?: string | null;
  status?: Status | null;
  nameIcontains?: string | null;
  industryCodeIcontains?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetIndustryIndustriesIdGetApiResponse =
  /** status 200 Successful Response */ IndustryBaseResponse;
export type GetIndustryIndustriesIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateIndustryIndustriesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateIndustryIndustriesIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  industryBaseUpdate: IndustryBaseUpdate;
};
export type DeleteIndustryIndustriesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteIndustryIndustriesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateInvoicesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateInvoicesPostApiArg = {
  'x-tenant-id': number;
  invoiceBaseCreate: InvoiceBaseCreate;
};
export type UpdateEntityStatusInvoicesPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateEntityStatusInvoicesPutApiArg = {
  entityType: EntityType;
  /** The ID of the entity */
  entityId: number;
  'x-tenant-id': number;
  entitycancelledUpdate: EntitycancelledUpdate;
};
export type GetAllInvoiceInvoicesGetApiResponse =
  /** status 200 Successful Response */ PaginatedInvoiceBaseResponse;
export type GetAllInvoiceInvoicesGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  invoiceFromType?: string | null;
  invoiceFromId?: number | null;
  invoiceFromIdIn?: string | null;
  invoiceNumber?: string | null;
  invoiceToType?: string | null;
  invoiceToId?: number | null;
  invoiceToIdIn?: string | null;
  invoiceDate?: string | null;
  invoiceAmount?: number | null;
  status?: string | null;
  statusIn?: string | null;
  paymentTermId?: number | null;
  paymentTermIdIn?: string | null;
  orderTypeId?: number | null;
  orderType?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetInvoicesIdGetApiResponse =
  /** status 200 Successful Response */ InvoiceDetailBaseResponse;
export type GetInvoicesIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateInvoicesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateInvoicesIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  invoiceBaseUpdate: InvoiceBaseUpdate;
};
export type DeleteInvoicesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteInvoicesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type GetInvoiceInvoicesInvoiceNumberInvoiceNumberGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetInvoiceInvoicesInvoiceNumberInvoiceNumberGetApiArg = {
  invoiceNumber: string;
  orderType: string;
  orderTypeId: number;
  'x-tenant-id': number;
};
export type GetAllAdjustmentreasonsItemsAdjustmentReasonGetApiResponse =
  /** status 200 Successful Response */ PaginatedAdjustmentReasonBaseResponse;
export type GetAllAdjustmentreasonsItemsAdjustmentReasonGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  page?: number;
  size?: number;
  getAll?: boolean;
};
export type GetAllTransactiontypesItemsTransactionTypeGetApiResponse =
  /** status 200 Successful Response */ PaginatedTransactionTypeBaseResponse;
export type GetAllTransactiontypesItemsTransactionTypeGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  page?: number;
  size?: number;
  getAll?: boolean;
};
export type CreateItemItemsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateItemItemsPostApiArg = {
  'x-tenant-id': number;
  itemBaseCreate: ItemBaseCreate;
};
export type GetAllItemsItemsGetApiResponse =
  /** status 200 Successful Response */ PaginatedItemBaseResponse;
export type GetAllItemsItemsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  manufacturerId?: number | null;
  osItemCategoryId?: number | null;
  industryCode?: string | null;
  productCode?: string | null;
  type?: string | null;
  name?: string | null;
  status?: string | null;
  nameIcontains?: string | null;
  statusIcontains?: string | null;
  industryCodeIcontains?: string | null;
  productCodeIcontains?: string | null;
  typeIcontains?: string | null;
  unitOfMeasurementId?: number | null;
  itemDimensionId?: number | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetItemItemsIdGetApiResponse =
  /** status 200 Successful Response */ ItemBaseDetailBaseResponse;
export type GetItemItemsIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateItemItemsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateItemItemsIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  itemBaseUpdate: ItemBaseUpdate;
};
export type DeleteItemItemsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteItemItemsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateItemsItemLocationsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateItemsItemLocationsPostApiArg = {
  'x-tenant-id': number;
  itemLocationBaseCreate: ItemLocationBaseCreate;
};
export type GetAllItemLocationItemsItemLocationsGetApiResponse =
  /** status 200 Successful Response */ PaginatedItemLocationBaseResponse;
export type GetAllItemLocationItemsItemLocationsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  locationName?: string | null;
  locationNameIcontains?: string | null;
  locationCode?: string | null;
  locationCodeIcontains?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetItemsItemLocationsIdGetApiResponse =
  /** status 200 Successful Response */ ItemLocationBaseResponse;
export type GetItemsItemLocationsIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateItemsItemLocationsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateItemsItemLocationsIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  itemLocationBaseUpdate: ItemLocationBaseUpdate;
};
export type DeleteItemsItemLocationsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteItemsItemLocationsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateItemCategoryItemCategoriesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateItemCategoryItemCategoriesPostApiArg = {
  'x-tenant-id': number;
  itemCategoryBaseCreate: ItemCategoryBaseCreate;
};
export type GetAllItemCategoriesItemCategoriesGetApiResponse =
  /** status 200 Successful Response */ PaginatedItemCategoryBaseResponse;
export type GetAllItemCategoriesItemCategoriesGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  name?: string | null;
  nameIcontains?: string | null;
  industryCode?: string | null;
  industryCodeIcontains?: string | null;
  status?: Status | null;
  statusIcontains?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetItemCategoryItemCategoriesIdGetApiResponse =
  /** status 200 Successful Response */ ItemCategoryBaseResponse;
export type GetItemCategoryItemCategoriesIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateItemCategoryItemCategoriesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateItemCategoryItemCategoriesIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  itemCategoryBaseUpdate: ItemCategoryBaseUpdate;
};
export type DeleteItemCategoryItemCategoriesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteItemCategoryItemCategoriesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type GetAllUomTypeUomsUomTypeGetApiResponse =
  /** status 200 Successful Response */ PaginatedUomTypeBaseResponse;
export type GetAllUomTypeUomsUomTypeGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  page?: number;
  size?: number;
  getAll?: boolean;
};
export type CreateUomUomsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateUomUomsPostApiArg = {
  'x-tenant-id': number;
  uomBaseCreate: UomBaseCreate;
};
export type GetAllUomsUomsGetApiResponse =
  /** status 200 Successful Response */ PaginatedUomBaseResponse;
export type GetAllUomsUomsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  uomCode?: string | null;
  name?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetUomUomsIdGetApiResponse =
  /** status 200 Successful Response */ UomBaseResponse;
export type GetUomUomsIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateUomUomsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateUomUomsIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  uomBaseUpdate: UomBaseUpdate;
};
export type DeleteUomUomsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteUomUomsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type GetAllItemDimensionTypesItemDimensionsItemDimensionTypeGetApiResponse =
  /** status 200 Successful Response */ PaginatedItemDimensionTypeBaseResponse;
export type GetAllItemDimensionTypesItemDimensionsItemDimensionTypeGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  page?: number;
  size?: number;
  getAll?: boolean;
};
export type CreateItemDimensionItemDimensionsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateItemDimensionItemDimensionsPostApiArg = {
  'x-tenant-id': number;
  itemDimensionBaseCreate: ItemDimensionBaseCreate;
};
export type GetAllItemDimensionsItemDimensionsGetApiResponse =
  /** status 200 Successful Response */ PaginatedItemDimensionBaseResponse;
export type GetAllItemDimensionsItemDimensionsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  dimensionTypeId?: number | null;
  uomId?: number | null;
  status?: Status | null;
  statusIcontains?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetItemDimensionItemDimensionsIdGetApiResponse =
  /** status 200 Successful Response */ ItemDimensionBaseResponse;
export type GetItemDimensionItemDimensionsIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateItemDimensionItemDimensionsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateItemDimensionItemDimensionsIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  itemDimensionBaseUpdate: ItemDimensionBaseUpdate;
};
export type DeleteItemDimensionItemDimensionsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteItemDimensionItemDimensionsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type GetAllItemPriceHistoriesItemPriceHistoriesGetApiResponse =
  /** status 200 Successful Response */ PaginatedItemPriceHistoryBaseResponse;
export type GetAllItemPriceHistoriesItemPriceHistoriesGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  itemPriceId?: number | null;
  currencyCode?: string | null;
  price?: number | null;
  status?: Status | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type CreateItemPriceItemPricesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateItemPriceItemPricesPostApiArg = {
  'x-tenant-id': number;
  itemPriceBaseCreate: ItemPriceBaseCreate;
};
export type GetAllItemPricesItemPricesGetApiResponse =
  /** status 200 Successful Response */ PaginatedItemPriceBaseResponse;
export type GetAllItemPricesItemPricesGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  itemId?: number | null;
  itemDimensionId?: number | null;
  currencyCode?: string | null;
  currencyCodeIcontains?: string | null;
  unitPrice?: number | null;
  packagingPrice?: number | null;
  status?: Status | null;
  statusIcontains?: string | null;
  vendorId?: number | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetItemPriceItemPricesIdGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetItemPriceItemPricesIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateItemPriceItemPricesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateItemPriceItemPricesIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  itemPriceBaseUpdate: ItemPriceBaseUpdate;
};
export type DeleteItemPriceItemPricesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteItemPriceItemPricesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreatePhysicalItemAttributePhysicalItemAttributesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreatePhysicalItemAttributePhysicalItemAttributesPostApiArg = {
  'x-tenant-id': number;
  physicalItemAttributeBaseCreate: PhysicalItemAttributeBaseCreate;
};
export type GetAllPhysicalItemAttributesPhysicalItemAttributesGetApiResponse =
  /** status 200 Successful Response */ PaginatedPhysicalItemAttributeBaseResponse;
export type GetAllPhysicalItemAttributesPhysicalItemAttributesGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  itemId?: number | null;
  itemDimensionId?: number | null;
  attributeCode?: string | null;
  name?: string | null;
  nameIcontains?: string | null;
  attributeCodeIcontains?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetPhysicalItemAttributePhysicalItemAttributesIdGetApiResponse =
  /** status 200 Successful Response */ PhysicalItemAttributeBaseResponse;
export type GetPhysicalItemAttributePhysicalItemAttributesIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdatePhysicalItemAttributePhysicalItemAttributesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdatePhysicalItemAttributePhysicalItemAttributesIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  physicalItemAttributeBaseUpdate: PhysicalItemAttributeBaseUpdate;
};
export type DeletePhysicalItemAttributePhysicalItemAttributesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeletePhysicalItemAttributePhysicalItemAttributesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateServiceItemAttributesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateServiceItemAttributesPostApiArg = {
  'x-tenant-id': number;
  serviceItemAttributeBaseCreate: ServiceItemAttributeBaseCreate;
};
export type GetAllServiceItemAttributeServiceItemAttributesGetApiResponse =
  /** status 200 Successful Response */ PaginatedServiceItemAttributeBaseResponse;
export type GetAllServiceItemAttributeServiceItemAttributesGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  itemId?: number | null;
  itemCategoryId?: number | null;
  attributeCode?: string | null;
  name?: string | null;
  nameIcontains?: string | null;
  attributeCodeIcontains?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetServiceItemAttributesIdGetApiResponse =
  /** status 200 Successful Response */ ServiceItemAttributeBaseResponse;
export type GetServiceItemAttributesIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateServiceItemAttributesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateServiceItemAttributesIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  serviceItemAttributeBaseUpdate: ServiceItemAttributeBaseUpdate;
};
export type DeleteServiceItemAttributesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteServiceItemAttributesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateLicenseLicensesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateLicenseLicensesPostApiArg = {
  'x-tenant-id': number;
  licenseBaseCreate: LicenseBaseCreate;
};
export type GetAllLicensesLicensesGetApiResponse =
  /** status 200 Successful Response */ PaginatedLicenseBaseResponse;
export type GetAllLicensesLicensesGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  tenantId?: number | null;
  licenseName?: string | null;
  issuingAuthorityId?: number | null;
  vallidity?: string | null;
  licenseAuthoritiesId?: number | null;
  licenseNameIcontains?: string | null;
  vallidityIcontains?: string | null;
  status?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetLicenseLicensesIdGetApiResponse =
  /** status 200 Successful Response */ LicenseDetailBaseResponse;
export type GetLicenseLicensesIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateLicenseLicensesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateLicenseLicensesIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  licenseBaseUpdate: LicenseBaseUpdate;
};
export type DeleteLicenseLicensesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteLicenseLicensesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreatePaymentPaymentsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreatePaymentPaymentsPostApiArg = {
  'x-tenant-id': number;
  paymentBaseCreate: PaymentBaseCreate;
};
export type GetAllPaymentsPaymentsGetApiResponse =
  /** status 200 Successful Response */ PaginatedPaymentBaseResponse;
export type GetAllPaymentsPaymentsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  payeeType?: string | null;
  payeeTypeId?: number | null;
  payeeTypeIdIn?: string | null;
  transactionNumber?: string | null;
  transactionNumberIcontains?: string | null;
  paymentDate?: string | null;
  paymentAmount?: number | null;
  status?: string | null;
  statusIn?: string | null;
  projectId?: number | null;
  orderType?: OrderTypeEnum | null;
  orderTypeId?: number | null;
  paymentMethod?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetPaymentPaymentsIdGetApiResponse =
  /** status 200 Successful Response */ PaymentBaseResponse;
export type GetPaymentPaymentsIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdatePaymentPaymentsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdatePaymentPaymentsIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  paymentBaseUpdate: PaymentBaseUpdate;
};
export type DeletePaymentPaymentsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeletePaymentPaymentsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreatePurchaseOrderPurchaseOrdersPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreatePurchaseOrderPurchaseOrdersPostApiArg = {
  'x-tenant-id': number;
  purchaseOrderBaseCreate: PurchaseOrderBaseCreate;
};
export type GetAllPurchaseOrdersPurchaseOrdersGetApiResponse =
  /** status 200 Successful Response */ PaginatedPurchaseOrderBaseResponse;
export type GetAllPurchaseOrdersPurchaseOrdersGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  vendorId?: number | null;
  vendorIdIn?: string | null;
  purchaseOrderNumber?: string | null;
  purchaseOrderNumberIcontains?: string | null;
  purchaseOrderDate?: string | null;
  projectId?: number | null;
  contractId?: number | null;
  purchaseOrderAmount?: number | null;
  taxAmount?: number | null;
  purchaseOrderFileId?: number | null;
  purchaseOrderReference?: string | null;
  isPaid?: boolean | null;
  countryIcontains?: string | null;
  stateIcontains?: string | null;
  cityIcontains?: string | null;
  zipcodeIcontains?: string | null;
  purchaseOrderTotalAmount?: number | null;
  paymentType?: string | null;
  paymentMethod?: string | null;
  status?: string | null;
  statusIn?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetPurchaseOrderPurchaseOrdersIdGetApiResponse =
  /** status 200 Successful Response */ PurchaseOrderBaseResponse;
export type GetPurchaseOrderPurchaseOrdersIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdatePurchaseOrderPurchaseOrdersIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdatePurchaseOrderPurchaseOrdersIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  purchaseOrderBaseUpdate: PurchaseOrderBaseUpdate;
};
export type DeletePurchaseOrderPurchaseOrdersIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeletePurchaseOrderPurchaseOrdersIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreatePurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreatePurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsPostApiArg =
  {
    'x-tenant-id': number;
    purchaseOrderDetailBaseCreate: PurchaseOrderDetailBaseCreate;
  };
export type GetAllPurchaseOrderDetailsPurchaseOrdersPurchaseOrderDetailsGetApiResponse =
  /** status 200 Successful Response */ PaginatedPurchaseOrderDetailBaseResponse;
export type GetAllPurchaseOrderDetailsPurchaseOrdersPurchaseOrderDetailsGetApiArg =
  {
    orderBy?: string | null;
    id?: number | null;
    idIn?: string | null;
    purchaseOrderId?: number | null;
    itemId?: number | null;
    itemName?: string | null;
    itemDescription?: string | null;
    unitPrice?: number | null;
    totalPrice?: number | null;
    quantity?: number | null;
    page?: number;
    size?: number;
    getAll?: boolean;
    'x-tenant-id': number;
  };
export type GetPurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsIdGetApiResponse =
  /** status 200 Successful Response */ PurchaseOrderDetailBaseResponse;
export type GetPurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsIdGetApiArg =
  {
    id: number;
    'x-tenant-id': number;
  };
export type UpdatePurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdatePurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsIdPutApiArg =
  {
    id: number;
    'x-tenant-id': number;
    purchaseOrderDetailBaseUpdate: PurchaseOrderDetailBaseUpdate;
  };
export type DeletePurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeletePurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsIdDeleteApiArg =
  {
    id: number;
    'x-tenant-id': number;
  };
export type CreateWorkorderWorkOrdersPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateWorkorderWorkOrdersPostApiArg = {
  'x-tenant-id': number;
  workOrderBaseCreate: WorkOrderBaseCreate;
};
export type GetAllWorkOrdersWorkOrdersGetApiResponse =
  /** status 200 Successful Response */ PaginatedWorkOrderBaseResponse;
export type GetAllWorkOrdersWorkOrdersGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  workOrderNumber?: string | null;
  workOrderNumberIcontains?: string | null;
  workOrderDate?: string | null;
  subcontractorId?: number | null;
  projectId?: number | null;
  contractId?: number | null;
  workOrderAmount?: number | null;
  taxAmount?: number | null;
  workOrderFileId?: number | null;
  workOrderReference?: string | null;
  isPaid?: boolean | null;
  paymentType?: string | null;
  paymentMethod?: string | null;
  taxId?: number | null;
  workOrderName?: string | null;
  workOrderNameIcontains?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  priority?: string | null;
  status?: string | null;
  statusIn?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetWorkorderWorkOrdersIdGetApiResponse =
  /** status 200 Successful Response */ WorkOrderDetailBaseResponse;
export type GetWorkorderWorkOrdersIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateWorkorderWorkOrdersIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateWorkorderWorkOrdersIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  workOrderBaseUpdate: WorkOrderBaseUpdate;
};
export type DeleteWorkorderWorkOrdersIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteWorkorderWorkOrdersIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateTaxTaxesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTaxTaxesPostApiArg = {
  'x-tenant-id': number;
  taxBaseCreate: TaxBaseCreate;
};
export type GetAllTaxesTaxesGetApiResponse =
  /** status 200 Successful Response */ PaginatedTaxBaseResponse;
export type GetAllTaxesTaxesGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  name?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetTaxTaxesIdGetApiResponse =
  /** status 200 Successful Response */ TaxBaseResponse;
export type GetTaxTaxesIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateTaxTaxesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateTaxTaxesIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  taxBaseUpdate: TaxBaseUpdate;
};
export type DeleteTaxTaxesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteTaxTaxesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateLicenseAuthorityLicenseAuthoritiesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateLicenseAuthorityLicenseAuthoritiesPostApiArg = {
  'x-tenant-id': number;
  licenseAuthorityBaseCreate: LicenseAuthorityBaseCreate;
};
export type GetAllLicenseAuthoritiesLicenseAuthoritiesGetApiResponse =
  /** status 200 Successful Response */ PaginatedLicenseAuthorityBaseResponse;
export type GetAllLicenseAuthoritiesLicenseAuthoritiesGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  name?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetLicenseAuthorityLicenseAuthoritiesIdGetApiResponse =
  /** status 200 Successful Response */ LicenseAuthorityBaseResponse;
export type GetLicenseAuthorityLicenseAuthoritiesIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateLicenseAuthorityLicenseAuthoritiesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateLicenseAuthorityLicenseAuthoritiesIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  licenseAuthorityBaseUpdate: LicenseAuthorityBaseUpdate;
};
export type DeleteLicenseAuthorityLicenseAuthoritiesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteLicenseAuthorityLicenseAuthoritiesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateManufacturerManufacturersPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateManufacturerManufacturersPostApiArg = {
  'x-tenant-id': number;
  manufacturerBaseCreate: ManufacturerBaseCreate;
};
export type GetAllManufacturersManufacturersGetApiResponse =
  /** status 200 Successful Response */ PaginatedManufacturerBaseResponse;
export type GetAllManufacturersManufacturersGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  name?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetManufacturerManufacturersIdGetApiResponse =
  /** status 200 Successful Response */ ManufacturerBaseResponse;
export type GetManufacturerManufacturersIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateManufacturerManufacturersIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateManufacturerManufacturersIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  manufacturerBaseUpdate: ManufacturerBaseUpdate;
};
export type DeleteManufacturerManufacturersIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteManufacturerManufacturersIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreatePaymentTermPaymentTermsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreatePaymentTermPaymentTermsPostApiArg = {
  'x-tenant-id': number;
  paymentTermBaseCreate: PaymentTermBaseCreate;
};
export type GetAllPaymentTermsPaymentTermsGetApiResponse =
  /** status 200 Successful Response */ PaginatedPaymentTermBaseResponse;
export type GetAllPaymentTermsPaymentTermsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  tenantId?: number | null;
  paymentTermName?: string | null;
  paymentTermNameIcontains?: string | null;
  paymentTermUnit?: string | null;
  status?: string | null;
  paymentTerm?: number | null;
  statusIcontains?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetPaymentTermPaymentTermsIdGetApiResponse =
  /** status 200 Successful Response */ PaymentTermBaseResponse;
export type GetPaymentTermPaymentTermsIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdatePaymentTermPaymentTermsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdatePaymentTermPaymentTermsIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  paymentTermBaseUpdate: PaymentTermBaseUpdate;
};
export type DeletePaymentTermPaymentTermsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeletePaymentTermPaymentTermsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateShipmentShipmentsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateShipmentShipmentsPostApiArg = {
  'x-tenant-id': number;
  shipmentBaseCreate: ShipmentBaseCreate;
};
export type GetAllShipmentsShipmentsGetApiResponse =
  /** status 200 Successful Response */ PaginatedShipmentBaseResponse;
export type GetAllShipmentsShipmentsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  purchaseOrderId?: number | null;
  projectId?: number | null;
  shipmentNumber?: string | null;
  shipmentNumberIcontains?: string | null;
  expectedDeliveryDate?: string | null;
  shippingMethod?: string | null;
  trackingNumber?: string | null;
  totalWeight?: number | null;
  totalVolume?: number | null;
  shippingCost?: number | null;
  totalCost?: number | null;
  createdBy?: string | null;
  actualDeliveryDate?: string | null;
  referenceNumber?: string | null;
  shipperId?: number | null;
  shipperType?: string | null;
  status?: string | null;
  statusIn?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetShipmentShipmentsIdGetApiResponse =
  /** status 200 Successful Response */ ShipmentDetailsResponse;
export type GetShipmentShipmentsIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateShipmentShipmentsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateShipmentShipmentsIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  shipmentBaseUpdate: ShipmentBaseUpdate;
};
export type DeleteShipmentShipmentsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteShipmentShipmentsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateShipmentItemShipmentItemsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateShipmentItemShipmentItemsPostApiArg = {
  'x-tenant-id': number;
  shipmentItemBaseCreate: ShipmentItemBaseCreate;
};
export type GetAllShipmentItemsShipmentItemsGetApiResponse =
  /** status 200 Successful Response */ PaginatedShipmentItemBaseResponse;
export type GetAllShipmentItemsShipmentItemsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  shipmentId?: number | null;
  status?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetShipmentItemShipmentItemsIdGetApiResponse =
  /** status 200 Successful Response */ ShipmentItemBaseResponse;
export type GetShipmentItemShipmentItemsIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateShipmentItemShipmentItemsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateShipmentItemShipmentItemsIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  shipmentItemBaseUpdate: ShipmentItemBaseUpdate;
};
export type DeleteShipmentItemShipmentItemsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteShipmentItemShipmentItemsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type DeleteShipmentAttachmentShipmentAttachmentsShipmentIdShipmentIdFileIdFileIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteShipmentAttachmentShipmentAttachmentsShipmentIdShipmentIdFileIdFileIdDeleteApiArg =
  {
    shipmentId: number;
    fileId: number;
    'x-tenant-id': number;
  };
export type GetAllContractAmendmentContractsAmendmentsGetApiResponse =
  /** status 200 Successful Response */ PaginatedContractAmendmentBaseResponse;
export type GetAllContractAmendmentContractsAmendmentsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  contractId?: number | null;
  contractIdIn?: string | null;
  amendmentNumber?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetAllTerminationContractsTerminationReasonsGetApiResponse =
  /** status 200 Successful Response */ PaginatedTerminationReasonBaseResponse;
export type GetAllTerminationContractsTerminationReasonsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  page?: number;
  size?: number;
  getAll?: boolean;
};
export type CreateContractContractsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateContractContractsPostApiArg = {
  'x-tenant-id': number;
  contractCreate: ContractCreate;
};
export type GetAllContractsContractsGetApiResponse =
  /** status 200 Successful Response */ PaginatedContractBaseResponse;
export type GetAllContractsContractsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  partyId?: number | null;
  partyIdIn?: string | null;
  contractName?: string | null;
  contractNameIcontains?: string | null;
  contractType?: string | null;
  contractTypeIcontains?: string | null;
  contractStartDate?: string | null;
  contractEndDate?: string | null;
  contactId?: number | null;
  createdBy?: string | null;
  status?: string | null;
  statusIn?: string | null;
  statusIcontains?: string | null;
  partyType?: AssociateEntity | null;
  isAppendix?: boolean | null;
  isDeleted?: boolean | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetContractContractsIdGetApiResponse =
  /** status 200 Successful Response */ ContractBaseResponse;
export type GetContractContractsIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateContractContractsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateContractContractsIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  contractUpdate: ContractUpdate;
};
export type DeleteContractContractsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteContractContractsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type GetAppendicesContractsIdAppendicesGetApiResponse =
  /** status 200 Successful Response */ any;
export type GetAppendicesContractsIdAppendicesGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateAmendmentsContractscontractContractIdAmendmentsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAmendmentsContractscontractContractIdAmendmentsPostApiArg = {
  contractId: number;
  'x-tenant-id': number;
  contractAmendmentBaseCreate: ContractAmendmentBaseCreate;
};
export type CreateTemplateContractsContractIdTemplatePostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateTemplateContractsContractIdTemplatePostApiArg = {
  contractId: number;
  'x-tenant-id': number;
};
export type CreateFromTemplateContractsFromTemplateTemplateIdPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateFromTemplateContractsFromTemplateTemplateIdPostApiArg = {
  templateId: number;
  'x-tenant-id': number;
  templateContractCreate: TemplateContractCreate;
};
export type CreateAttribiuteOfContractAttribiuteOfContractsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAttribiuteOfContractAttribiuteOfContractsPostApiArg = {
  'x-tenant-id': number;
  attribiuteOfContractBaseCreate: AttribiuteOfContractBaseCreate;
};
export type GetAllAttribiuteOfContractsAttribiuteOfContractsGetApiResponse =
  /** status 200 Successful Response */ PaginatedAttribiuteOfContractBaseResponse;
export type GetAllAttribiuteOfContractsAttribiuteOfContractsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  attributeName?: string | null;
  attributeNameIn?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetAttribiuteOfContractAttribiuteOfContractsIdGetApiResponse =
  /** status 200 Successful Response */ AttribiuteOfContractBaseResponse;
export type GetAttribiuteOfContractAttribiuteOfContractsIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateAttribiuteOfContractAttribiuteOfContractsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAttribiuteOfContractAttribiuteOfContractsIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  attribiuteOfContractBaseUpdate: AttribiuteOfContractBaseUpdate;
};
export type DeleteAttribiuteOfContractAttribiuteOfContractsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAttribiuteOfContractAttribiuteOfContractsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateInventoriesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateInventoriesPostApiArg = {
  'x-tenant-id': number;
  inventoryBaseCreate: InventoryBaseCreate;
};
export type GetAllInventoryInventoriesGetApiResponse =
  /** status 200 Successful Response */ PaginatedInventoryBaseResponse;
export type GetAllInventoryInventoriesGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  status?: string | null;
  uomId?: number | null;
  itemId?: number | null;
  locationId?: number | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetInventoriesIdGetApiResponse =
  /** status 200 Successful Response */ InventoryBaseResponse;
export type GetInventoriesIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateInventoriesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateInventoriesIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  inventoryBaseUpdate: InventoryBaseUpdate;
};
export type DeleteInventoriesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteInventoriesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateInventoryAdjustmentsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateInventoryAdjustmentsPostApiArg = {
  'x-tenant-id': number;
  inventoryAdjustmentBaseCreate: InventoryAdjustmentBaseCreate;
};
export type GetAllInventoryAdjustmentInventoryAdjustmentsGetApiResponse =
  /** status 200 Successful Response */ PaginatedInventoryAdjustmentBaseResponse;
export type GetAllInventoryAdjustmentInventoryAdjustmentsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  itemId?: number | null;
  unitOfMeasureId?: number | null;
  adjustmentReasonId?: number | null;
  status?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetInventoryAdjustmentsIdGetApiResponse =
  /** status 200 Successful Response */ InventoryAdjustmentBaseResponse;
export type GetInventoryAdjustmentsIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateInventoryAdjustmentsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateInventoryAdjustmentsIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  inventoryAdjustmentBaseUpdate: InventoryAdjustmentBaseUpdate;
};
export type DeleteInventoryAdjustmentsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteInventoryAdjustmentsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateAttributeOfItemsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateAttributeOfItemsPostApiArg = {
  'x-tenant-id': number;
  attributeOfItemBaseCreate: AttributeOfItemBaseCreate;
};
export type GetAllAttributeOfItemAttributeOfItemsGetApiResponse =
  /** status 200 Successful Response */ PaginatedAttributeOfItemBaseResponse;
export type GetAllAttributeOfItemAttributeOfItemsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  attributeName?: string | null;
  attributeNameIcontains?: string | null;
  attributeType?: string | null;
  itemCategoryId?: number | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetAttributeOfItemsIdGetApiResponse =
  /** status 200 Successful Response */ AttributeOfItemBaseResponse;
export type GetAttributeOfItemsIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateAttributeOfItemsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateAttributeOfItemsIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  attributeOfItemBaseUpdate: AttributeOfItemBaseUpdate;
};
export type DeleteAttributeOfItemsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteAttributeOfItemsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateItemAttributesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateItemAttributesPostApiArg = {
  'x-tenant-id': number;
  itemAttributeBaseCreate: ItemAttributeBaseCreate;
};
export type GetAllItemAttributeItemAttributesGetApiResponse =
  /** status 200 Successful Response */ PaginatedItemAttributeBaseResponse;
export type GetAllItemAttributeItemAttributesGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  idIn?: string | null;
  itemId?: number | null;
  attributeId?: number | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetItemAttributesIdGetApiResponse =
  /** status 200 Successful Response */ ItemAttributeBaseResponse;
export type GetItemAttributesIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateItemAttributesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateItemAttributesIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  itemAttributeBaseUpdate: ItemAttributeBaseUpdate;
};
export type DeleteItemAttributesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteItemAttributesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateContractTemplateContractTemplatesPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateContractTemplateContractTemplatesPostApiArg = {
  'x-tenant-id': number;
  contractTemplateBaseCreate: ContractTemplateBaseCreate;
};
export type GetAllContractTemplatesContractTemplatesGetApiResponse =
  /** status 200 Successful Response */ PaginatedContractTemplateBaseResponse;
export type GetAllContractTemplatesContractTemplatesGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  templateName?: string | null;
  templateNameIcontains?: string | null;
  contractType?: string | null;
  currencyCode?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  status?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetContractTemplateContractTemplatesIdGetApiResponse =
  /** status 200 Successful Response */ ContractTemplatesDetails;
export type GetContractTemplateContractTemplatesIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateContractTemplateContractTemplatesIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateContractTemplateContractTemplatesIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  contractTemplateBaseUpdate: ContractTemplateBaseUpdate;
};
export type DeleteContractTemplateContractTemplatesIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteContractTemplateContractTemplatesIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type CreateItemRequisitionItemRequisitionsPostApiResponse =
  /** status 200 Successful Response */ any;
export type CreateItemRequisitionItemRequisitionsPostApiArg = {
  'x-tenant-id': number;
  itemRequisitionBaseCreate: ItemRequisitionBaseCreate;
};
export type GetAllItemRequisitionsItemRequisitionsGetApiResponse =
  /** status 200 Successful Response */ PaginatedItemRequisitionBaseResponse;
export type GetAllItemRequisitionsItemRequisitionsGetApiArg = {
  orderBy?: string | null;
  id?: number | null;
  projectId?: number | null;
  taskId?: number | null;
  itemId?: number | null;
  uomId?: number | null;
  quantity?: number | null;
  requestDate?: string | null;
  requestedBy?: number | null;
  requisitionType?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  page?: number;
  size?: number;
  getAll?: boolean;
  'x-tenant-id': number;
};
export type GetItemRequisitionItemRequisitionsIdGetApiResponse =
  /** status 200 Successful Response */ ItemRequisitionBaseResponse;
export type GetItemRequisitionItemRequisitionsIdGetApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type UpdateItemRequisitionItemRequisitionsIdPutApiResponse =
  /** status 200 Successful Response */ any;
export type UpdateItemRequisitionItemRequisitionsIdPutApiArg = {
  id: number;
  'x-tenant-id': number;
  itemRequisitionBaseUpdate: ItemRequisitionBaseUpdate;
};
export type DeleteItemRequisitionItemRequisitionsIdDeleteApiResponse =
  /** status 200 Successful Response */ any;
export type DeleteItemRequisitionItemRequisitionsIdDeleteApiArg = {
  id: number;
  'x-tenant-id': number;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type VendorType =
  | 'corporate'
  | 'individual'
  | 'partnership'
  | 'proprietorship'
  | 'trust'
  | 'sole_proprietorship'
  | 'huf'
  | 'llp'
  | 'others';
export type AddressType = 'main' | 'billing' | 'shipping' | 'others';
export type VendorAddresses = {
  address_line_1: string;
  address_line_2?: string | null;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  type: AddressType;
};
export type BankAccountType =
  | 'savings'
  | 'current'
  | 'cash_credit'
  | 'overdraft'
  | 'others';
export type BankDetails = {
  account_number: string;
  account_holder_name: string;
  account_type: BankAccountType;
  bank_name: string;
  branch_name: string;
  ifsc_code: string;
  swift_code?: string | null;
  micr_code?: string | null;
  bank_address?: string | null;
  bank_country?: string | null;
  bank_state?: string | null;
  bank_city?: string | null;
  bank_zipcode?: string | null;
};
export type TaxIdentification = {
  tax_identification_type: string;
  tax_identification_number: string;
};
export type AssociateEntity = 'vendor' | 'subcontractor';
export type VendorBaseCreate = {
  name: string;
  legal_name: string;
  vendor_code?: string | null;
  vendor_type?: VendorType | null;
  category?: string | null;
  email: string;
  phone_country_code?: string | null;
  phone_number?: string | null;
  addresses: VendorAddresses[];
  bank_details?: BankDetails;
  industry_code?: string | null;
  logo_file_id?: number | null;
  tax_identification: TaxIdentification[];
  type?: AssociateEntity;
};
export type VendorBaseResponse = {
  id: number;
  vendor_code?: string | null;
  name?: string | null;
  email?: string | null;
  type?: string | null;
  phone_number?: string | null;
  phone_country_code?: string | null;
  industry_code?: string | null;
  tax_enabled?: boolean | null;
  tax_id?: string | null;
  tax_jurisdictions?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  vendor_type?: string | null;
  category?: string | null;
  legal_name?: string | null;
  logo_file_id?: number | null;
  barcode?: string | null;
};
export type PaginatedMeta = {
  current_page: number;
  items_per_page: number;
  total_pages: number;
  total_items: number;
};
export type PaginatedVendorBaseResponse = {
  items: VendorBaseResponse[];
  meta: PaginatedMeta;
};
export type VendorAddressesResponse = {
  address_line_1: string;
  address_line_2?: string | null;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  type: AddressType;
  id?: number | null;
};
export type BankDetailsBaseResponse = {
  account_number: string;
  account_holder_name: string;
  account_type: BankAccountType;
  bank_name: string;
  branch_name: string;
  ifsc_code: string;
  swift_code?: string | null;
  micr_code?: string | null;
  bank_address?: string | null;
  bank_country?: string | null;
  bank_state?: string | null;
  bank_city?: string | null;
  bank_zipcode?: string | null;
  id?: number | null;
};
export type TaxIdentificationBaseResponse = {
  tax_identification_type: string;
  tax_identification_number: string;
  id?: number | null;
};
export type VendorDetailBaseResponse = {
  id: number;
  vendor_code?: string | null;
  name?: string | null;
  email?: string | null;
  type?: string | null;
  phone_number?: string | null;
  phone_country_code?: string | null;
  industry_code?: string | null;
  tax_enabled?: boolean | null;
  tax_id?: string | null;
  tax_jurisdictions?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  vendor_type?: string | null;
  category?: string | null;
  legal_name?: string | null;
  logo_file_id?: number | null;
  barcode?: string | null;
  addresses: VendorAddressesResponse[];
  bank_details?: BankDetailsBaseResponse | null;
  tax_identification: TaxIdentificationBaseResponse[];
};
export type Status = 'active' | 'inactive' | 'pending' | 'expired' | 'deleted';
export type VendorBaseUpdate = {
  name?: string | null;
  email?: string | null;
  phone_country_code?: string | null;
  phone_number?: string | null;
  address_line_1?: string | null;
  address_line_2?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  zipcode?: string | null;
  status?: Status | null;
  industry_code?: string | null;
  vendor_type?: string | null;
  category?: string | null;
  legal_name?: string | null;
  logo_file_id?: number | null;
  addresses?: VendorAddressesResponse[] | null;
  tax_identification?: TaxIdentificationBaseResponse[];
  bank_details?: BankDetailsBaseResponse | null;
};
export type AdressesBaseUpdate = {
  address_line_1?: string | null;
  address_line_2?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  zipcode?: string | null;
  type?: string | null;
};
export type BankDetailUpdate = {
  account_number?: string | null;
  account_holder_name?: string | null;
  account_type?: string | null;
  bank_name?: string | null;
  branch_name?: string | null;
  ifsc_code?: string | null;
  swift_code?: string | null;
  micr_code?: string | null;
  bank_address?: string | null;
  bank_country?: string | null;
  bank_state?: string | null;
  bank_city?: string | null;
  bank_zipcode?: string | null;
};
export type TaxIdentificationBaseUpdate = {
  tax_identification_type?: string | null;
  tax_identification_number?: string | null;
};
export type ContactType = 'billing' | 'shipping' | 'purchase';
export type VendorContactBaseCreate = {
  first_name: string;
  last_name: string;
  designation: string;
  email: string;
  vendor_id: number;
  phone_country_code?: string | null;
  phone_number?: string | null;
  address_line_1?: string | null;
  address_line_2?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  zipcode?: string | null;
  type?: ContactType | null;
};
export type VendorContactBaseResponse = {
  id: number;
  first_name?: string | null;
  last_name?: string | null;
  designation?: string | null;
  email?: string | null;
  phone_number?: string | null;
  vendor_id?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  vendor_name?: string | null;
  phone_country_code?: string | null;
  address_line_1?: string | null;
  address_line_2?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  zipcode?: string | null;
  type?: string | null;
};
export type PaginatedVendorContactBaseResponse = {
  items: VendorContactBaseResponse[];
  meta: PaginatedMeta;
};
export type VendorContactBaseUpdate = {
  first_name?: string | null;
  last_name?: string | null;
  designation?: string | null;
  email?: string | null;
  phone?: string | null;
  vendor_id?: number | null;
  status?: Status | null;
  phone_country_code?: string | null;
  phone_number?: string | null;
  address_line_1?: string | null;
  address_line_2?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  zipcode?: string | null;
  type?: string | null;
};
export type VendorItemPriceBaseCreate = {
  vendor_item_id: number;
  currency_code: string;
  price: number;
};
export type VendorItemPriceBaseResponse = {
  id: number;
  vendor_item_id?: number | null;
  currency_code?: string | null;
  price?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  format_price?: string | null;
  vendor_id?: number | null;
  item_id?: number | null;
  vendor_name?: string | null;
  item_name?: string | null;
};
export type PaginatedVendorItemPriceBaseResponse = {
  items: VendorItemPriceBaseResponse[];
  meta: PaginatedMeta;
};
export type VendorItemPriceBaseUpdate = {
  vendor_item_id?: number | null;
  currency_code?: string | null;
  price?: number | null;
  status?: Status | null;
};
export type ShippingMethod =
  | 'Expedited shipping'
  | 'Overnight shipping'
  | 'Priority Mail'
  | 'Flat-rate shipping'
  | 'Economy shipping'
  | 'Multiple addresses'
  | 'Local delivery or pickup'
  | 'International shipping'
  | 'Freight shipping';
export type VendorItemShippingBaseCreate = {
  vendor_id: number;
  vendor_item_id: number;
  shipping_cost?: number | null;
  shipping_method?: ShippingMethod | null;
  shipping_date: string;
  shipping_note?: string | null;
  tracking_code?: string | null;
  currency_code?: string | null;
};
export type VendorItemShippingBaseResponse = {
  id?: number | null;
  tenant_id?: number | null;
  vendor_id?: number | null;
  vendor_item_id?: number | null;
  shipping_cost?: number | null;
  shipping_method?: string | null;
  shipping_date?: string | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  vendor_name?: string | null;
  created_by_name?: string | null;
  item_name?: string | null;
  shipping_note?: string | null;
  tracking_code?: string | null;
  currency_code?: string | null;
  format_shipping_cost?: string | null;
};
export type PaginatedVendorItemShippingBaseResponse = {
  items: VendorItemShippingBaseResponse[];
  meta: PaginatedMeta;
};
export type VendorItemShippingBaseUpdate = {
  vendor_id?: number | null;
  vendor_item_id?: number | null;
  shipping_cost?: number | null;
  shipping_method?: ShippingMethod | null;
  shipping_date?: string | null;
  status?: Status | null;
  shipping_note?: string | null;
  tracking_code?: string | null;
  currency_code?: string | null;
};
export type VendorItemTaxBaseCreate = {
  vendor_id: number;
  vendor_item_id: number;
  tax_id: number;
  tax_rate?: number | null;
};
export type VendorItemTaxBaseResponse = {
  id: number;
  vendor_id?: number | null;
  vendor_item_id?: number | null;
  tax_id?: number | null;
  tax_rate?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  vendor_name?: string | null;
  tax_name?: string | null;
};
export type PaginatedVendorItemTaxBaseResponse = {
  items: VendorItemTaxBaseResponse[];
  meta: PaginatedMeta;
};
export type VendorItemTaxBaseUpdate = {
  vendor_id?: number | null;
  vendor_item_id?: number | null;
  tax_id?: number | null;
  tax_rate?: number | null;
  status?: Status | null;
};
export type VendorLicenseBaseCreate = {
  license_id: number;
  vendor_id: number;
  file_id?: number[] | null;
  effective_start_date: string;
  effective_end_date?: string | null;
  license_number?: string | null;
};
export type VendorLicenseBaseResponse = {
  id: number;
  license_id?: number | null;
  vendor_id?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  vendor_name?: string | null;
  license_name?: string | null;
  file_id?: number[] | null;
  issuing_authority_id?: number | null;
  issuing_authority_name?: number | null;
  license_number?: string | null;
};
export type VendorLicenseBaseUpdate = {
  license_id?: number | null;
  vendor_id?: number | null;
  status?: Status | null;
  file_id?: number[] | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  license_number?: string | null;
};
export type VendorItemPrice = {
  currency_code: string;
  price: number;
};
export type VendorItemBaseCreate = {
  vendor_id: number;
  item_id: number;
  prices: VendorItemPrice;
};
export type VendorItemsCreateRequest = {
  items: VendorItemBaseCreate[];
};
export type Pricesinfo = {
  currency_code: string;
  price?: number | null;
};
export type VendorItemBaseResponse = {
  id: number;
  vendor_id?: number | null;
  item_id?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  vendor_name?: string | null;
  item_name?: string | null;
  item_description?: string | null;
  prices?: Pricesinfo[] | null;
};
export type PaginatedVendorItemBaseResponse = {
  items: VendorItemBaseResponse[];
  meta: PaginatedMeta;
};
export type VendorItemDetailResponse = {
  id: number;
  vendor_id?: number | null;
  item_id?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  vendor_name?: string | null;
  item_name?: string | null;
  item_description?: string | null;
};
export type VendorItemBaseUpdate = {
  vendor_id?: number | null;
  item_id?: number | null;
  prices?: VendorItemPrice | null;
  status?: Status | null;
};
export type CurrencyBaseResponse = {
  id: number;
  currency_name?: string | null;
  currency_iso?: string | null;
  currency_code?: string | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
};
export type CurrencyBaseUpdate = {
  currency_name?: string | null;
  currency_iso?: string | null;
  currency_code?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  status?: Status | null;
};
export type PaginatedCurrencyBaseResponse = {
  items: CurrencyBaseResponse[];
  meta: PaginatedMeta;
};
export type IndustryBaseCreate = {
  name: string;
  description: string;
  industry_code: string;
};
export type IndustryBaseResponse = {
  id: number;
  name?: string | null;
  description?: string | null;
  industry_code?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
};
export type PaginatedIndustryBaseResponse = {
  items: IndustryBaseResponse[];
  meta: PaginatedMeta;
};
export type IndustryBaseUpdate = {
  name?: string | null;
  description?: string | null;
  industry_code?: string | null;
  status?: Status | null;
};
export type InvoiceType =
  | 'Vendor'
  | 'Subcontractor'
  | 'Supplier'
  | 'Organization';
export type OrderTypeEnum = 'PurchaseOrder' | 'WorkOrder';
export type InvoiceTypeEnum = 'Regular' | 'Proforma' | 'Credit';
export type InvoiceStatusEnum =
  | 'Draft'
  | 'Approved'
  | 'Paid'
  | 'Cancelled'
  | 'Sent'
  | 'Unpaid';
export type InvoiceLineitem = {
  item_id: number;
  item_name: string;
  item_quantity: number;
  item_price: number;
  item_amount: number;
  currency_code: string;
  unit_of_measure: string;
  tax_id?: number | null;
  tax_value: number;
  tax_amount: number;
  total_amount: number;
};
export type InvoiceAttachments = {
  file_id: number;
  file_name: string;
  file_type: string;
};
export type InvoiceBaseCreate = {
  project_id?: number | null;
  invoice_from_type: InvoiceType;
  invoice_from_id: number;
  invoice_number: string;
  invoice_to_type: InvoiceType;
  invoice_to_id: number;
  invoice_date: string;
  invoice_due_date: string;
  invoice_received_date: string;
  invoice_amount: number;
  tax_amount: number;
  discount_amount?: number | null;
  shipping_amount: number;
  net_amount: number;
  invoice_reference?: string | null;
  currency_code: string;
  payment_term_id: number;
  notes?: string | null;
  order_type: OrderTypeEnum;
  order_type_id: number;
  invoice_type: InvoiceTypeEnum;
  status: InvoiceStatusEnum;
  line_items?: InvoiceLineitem[];
  invoice_attachments?: InvoiceAttachments[] | null;
  approver_id?: number | null;
  party_type?: string | null;
};
export type EntityType = 'invoice' | 'purchase_order' | 'work_order';
export type EntitycancelledUpdate = {
  status?: InvoiceStatusEnum | null;
  cancelled_reason?: string | null;
  cancelled_date?: string | null;
};
export type InvoiceAuditHistoryResponse = {
  action: string;
  changed_by: string;
  changed_by_name: string;
  changed_at: string;
  old_values?: any | null;
  new_values?: any | null;
  tenant_id: number;
};
export type InvoiceBaseResponse = {
  id: number;
  tenant_id?: number | null;
  project_id?: number | null;
  invoice_from_type?: string | null;
  invoice_from_id?: number | null;
  invoice_number?: string | null;
  invoice_to_type?: string | null;
  invoice_to_id?: number | null;
  invoice_date?: string | null;
  invoice_due_date?: string | null;
  invoice_received_date?: string | null;
  invoice_amount?: number | null;
  tax_amount?: number | null;
  discount_amount?: number | null;
  shipping_amount?: number | null;
  invoice_reference?: string | null;
  is_paid?: boolean | null;
  currency_code?: string | null;
  payment_term_id?: number | null;
  notes?: string | null;
  status?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  order_type?: string | null;
  order_type_id?: number | null;
  order_type_number?: string | null;
  net_amount?: number | null;
  invoice_type?: string | null;
  line_items?: InvoiceLineitem[];
  invoice_attachments?: InvoiceAttachments[] | null;
  cancelled_reason?: string | null;
  cancelled_date?: string | null;
  cancelled_by?: string | null;
  cancelled_by_name?: string | null;
  currency_symbol?: string | null;
  audit_logs?: InvoiceAuditHistoryResponse[] | null;
  approver_id?: number | null;
  approval_status?: string | null;
  party_type?: string | null;
  barcode?: string | null;
};
export type PaginatedInvoiceBaseResponse = {
  items: InvoiceBaseResponse[];
  meta: PaginatedMeta;
};
export type PaymentInfo = {
  id?: number | null;
  transaction_number?: string | null;
  reference_note?: string | null;
  payment_date?: string | null;
  payment_method?: string | null;
  payment_amount?: number | null;
};
export type InvoiceDetailBaseResponse = {
  id: number;
  tenant_id?: number | null;
  project_id?: number | null;
  invoice_from_type?: string | null;
  invoice_from_id?: number | null;
  invoice_number?: string | null;
  invoice_to_type?: string | null;
  invoice_to_id?: number | null;
  invoice_date?: string | null;
  invoice_due_date?: string | null;
  invoice_received_date?: string | null;
  invoice_amount?: number | null;
  tax_amount?: number | null;
  discount_amount?: number | null;
  shipping_amount?: number | null;
  invoice_reference?: string | null;
  is_paid?: boolean | null;
  currency_code?: string | null;
  payment_term_id?: number | null;
  notes?: string | null;
  status?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  order_type?: string | null;
  order_type_id?: number | null;
  order_type_number?: string | null;
  net_amount?: number | null;
  invoice_type?: string | null;
  line_items?: InvoiceLineitem[];
  invoice_attachments?: InvoiceAttachments[] | null;
  cancelled_reason?: string | null;
  cancelled_date?: string | null;
  cancelled_by?: string | null;
  cancelled_by_name?: string | null;
  currency_symbol?: string | null;
  audit_logs?: InvoiceAuditHistoryResponse[] | null;
  approver_id?: number | null;
  approval_status?: string | null;
  party_type?: string | null;
  barcode?: string | null;
  payment_info?: PaymentInfo[] | null;
  approved_by_name?: string | null;
  approved_date?: string | null;
};
export type InvoiceBaseUpdate = {
  status?: InvoiceStatusEnum | null;
  invoice_received_date?: string | null;
  invoice_attachments?: InvoiceAttachments[] | null;
  approver_id?: number | null;
};
export type AdjustmentReasonBaseResponse = {
  id: number;
  reason?: string | null;
};
export type PaginatedAdjustmentReasonBaseResponse = {
  items: AdjustmentReasonBaseResponse[];
  meta: PaginatedMeta;
};
export type TransactionTypeBaseResponse = {
  id: number;
  transaction_type?: string | null;
};
export type PaginatedTransactionTypeBaseResponse = {
  items: TransactionTypeBaseResponse[];
  meta: PaginatedMeta;
};
export type ItemTypeEnum = 'physical' | 'service' | 'asset';
export type WarrantyTypeEnum =
  | 'Manufacturer Warranty'
  | 'Service Warranty'
  | 'Replacement Warranty'
  | 'Limited Warranty'
  | 'Lifetime Warranty'
  | 'No Warranty';
export type WarrantyPeriodUnitEnum = 'Days' | 'Weeks' | 'Months' | 'Years';
export type InventoryDetails = {
  uom_id: number;
  quantity: number;
  reorder_point: number;
  safety_stock: number;
  location_id: number;
};
export type ItemBaseCreate = {
  industry_code?: string | null;
  product_code: string;
  upc_code?: string | null;
  sku?: string | null;
  name: string;
  type?: ItemTypeEnum | null;
  base_price: number;
  description?: string | null;
  os_item_category_id?: number | null;
  manufacturer_id?: number | null;
  parent_item_id?: number | null;
  unit_of_measurement_id: number;
  item_dimension_id: number;
  minimum_stock_level?: number | null;
  maximum_stock_level?: number | null;
  reorder_point?: number | null;
  warrenty_period?: number | null;
  warrenty_type?: WarrantyTypeEnum | null;
  warrenty_period_unit?: WarrantyPeriodUnitEnum | null;
  lead_time?: number | null;
  lead_time_unit?: string | null;
  currency_code?: string | null;
  inventory: InventoryDetails[];
  item_type?: string | null;
  is_consumable?: boolean | null;
};
export type ItemBaseResponse = {
  id: number;
  os_item_category_id?: number | null;
  industry_code?: string | null;
  product_code?: string | null;
  upc_code?: string | null;
  sku?: string | null;
  type?: ItemTypeEnum | null;
  name?: string | null;
  base_price?: number | null;
  description?: string | null;
  manufacturer_id?: number | null;
  parent_item_id?: number | null;
  unit_of_measurement_id?: number | null;
  item_dimension_id?: number | null;
  minimum_stock_level?: number | null;
  maximum_stock_level?: number | null;
  reorder_point?: number | null;
  warrenty_period?: number | null;
  warrenty_type?: string | null;
  warrenty_period_unit?: string | null;
  lead_time?: number | null;
  lead_time_unit?: string | null;
  item_category_name?: string | null;
  industry_name?: string | null;
  uom_name?: string | null;
  uom_code?: string | null;
  currency_code?: string | null;
  curency_symbol?: string | null;
  barcode?: string | null;
  item_type?: string | null;
  is_consumable?: boolean | null;
};
export type PaginatedItemBaseResponse = {
  items: ItemBaseResponse[];
  meta: PaginatedMeta;
};
export type VendorItemPriceInfo = {
  vendor_id: number;
  vendor_name: string;
  price: number;
};
export type InventoryInfo = {
  uom_id: number;
  uom_name: string;
  quantity: number;
  reorder_point: number;
  safety_stock: number;
  location_id: number;
  location_name: string;
};
export type ItemBaseDetailBaseResponse = {
  id: number;
  os_item_category_id?: number | null;
  industry_code?: string | null;
  product_code?: string | null;
  upc_code?: string | null;
  sku?: string | null;
  type?: ItemTypeEnum | null;
  name?: string | null;
  base_price?: number | null;
  description?: string | null;
  manufacturer_id?: number | null;
  parent_item_id?: number | null;
  unit_of_measurement_id?: number | null;
  item_dimension_id?: number | null;
  minimum_stock_level?: number | null;
  maximum_stock_level?: number | null;
  reorder_point?: number | null;
  warrenty_period?: number | null;
  warrenty_type?: string | null;
  warrenty_period_unit?: string | null;
  lead_time?: number | null;
  lead_time_unit?: string | null;
  item_category_name?: string | null;
  industry_name?: string | null;
  uom_name?: string | null;
  uom_code?: string | null;
  currency_code?: string | null;
  curency_symbol?: string | null;
  barcode?: string | null;
  item_type?: string | null;
  is_consumable?: boolean | null;
  price_info?: VendorItemPriceInfo[] | null;
  inventory_info?: InventoryInfo[] | null;
};
export type ItemBaseUpdate = {
  os_item_category_id?: number | null;
  industry_code?: string | null;
  product_code?: string | null;
  upc_code?: string | null;
  sku?: string | null;
  type?: ItemTypeEnum | null;
  name?: string | null;
  base_price?: number | null;
  description?: string | null;
  manufacturer_id?: number | null;
  parent_item_id?: number | null;
  unit_of_measurement_id?: number | null;
  item_dimension_id?: number | null;
  minimum_stock_level?: number | null;
  maximum_stock_level?: number | null;
  reorder_point?: number | null;
  warrenty_period?: number | null;
  warrenty_type?: string | null;
  warrenty_period_unit?: string | null;
  lead_time?: number | null;
  lead_time_unit?: string | null;
  currency_code?: string | null;
  inventory?: InventoryDetails[] | null;
  item_type?: string | null;
  is_consumable?: boolean | null;
};
export type ItemLocationBaseCreate = {
  location_name: string;
  location_code: string;
  description?: string | null;
  address_line1?: string | null;
  address_line2?: string | null;
  city?: string | null;
  state?: string | null;
  postal_code?: string | null;
  country?: string | null;
  phone_number?: string | null;
  phone_country_code?: string | null;
  fax_number?: string | null;
  email?: string | null;
};
export type ItemLocationBaseResponse = {
  id: number;
  tenant_id?: number | null;
  location_name?: string | null;
  location_code?: string | null;
  description?: string | null;
  address_line1?: string | null;
  address_line2?: string | null;
  city?: string | null;
  state?: string | null;
  postal_code?: string | null;
  country?: string | null;
  phone_number?: string | null;
  phone_country_code?: string | null;
  fax_number?: string | null;
  email?: string | null;
  status?: string | null;
  is_active?: boolean | null;
  created_at?: string | null;
  updated_at?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  created_by_name?: string | null;
};
export type PaginatedItemLocationBaseResponse = {
  items: ItemLocationBaseResponse[];
  meta: PaginatedMeta;
};
export type ItemLocationBaseUpdate = {
  location_name?: string | null;
  location_code?: string | null;
  description?: string | null;
  address_line1?: string | null;
  address_line2?: string | null;
  city?: string | null;
  state?: string | null;
  postal_code?: string | null;
  country?: string | null;
  phone_number?: string | null;
  phone_country_code?: string | null;
  fax_number?: string | null;
  email?: string | null;
};
export type ItemCategoryBaseCreate = {
  name: string;
  description?: string | null;
  industry_code: string;
};
export type ItemCategoryBaseResponse = {
  id: number;
  name?: string | null;
  description?: string | null;
  category_code?: string | null;
  industry_code?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  industry_name?: string | null;
};
export type PaginatedItemCategoryBaseResponse = {
  items: ItemCategoryBaseResponse[];
  meta: PaginatedMeta;
};
export type ItemCategoryBaseUpdate = {
  name?: string | null;
  description?: string | null;
  industry_code?: string | null;
  status?: Status | null;
};
export type UomTypeBaseResponse = {
  id: number;
  uom_type?: string | null;
};
export type PaginatedUomTypeBaseResponse = {
  items: UomTypeBaseResponse[];
  meta: PaginatedMeta;
};
export type UomBaseCreate = {
  uom_code: string;
  uom_name: string;
  uom_description: string;
  uom_type_id: number;
};
export type UomBaseResponse = {
  id: number;
  tenant_id?: number | null;
  uom_code?: string | null;
  uom_name?: string | null;
  uom_description?: string | null;
  uom_type_id?: number | null;
  status?: Status | null;
  created_at?: string | null;
  updated_at?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  uom_type_name?: string | null;
};
export type PaginatedUomBaseResponse = {
  items: UomBaseResponse[];
  meta: PaginatedMeta;
};
export type UomBaseUpdate = {
  uom_code?: string | null;
  uom_name?: string | null;
  uom_description?: string | null;
  uom_type_id?: number | null;
  status?: Status | null;
};
export type ItemDimensionTypeBaseResponse = {
  id: number;
  dimension_type: string;
};
export type PaginatedItemDimensionTypeBaseResponse = {
  items: ItemDimensionTypeBaseResponse[];
  meta: PaginatedMeta;
};
export type ItemDimensionBaseCreate = {
  uom_id: number;
  value: number;
  dimension_type_id: number;
};
export type ItemDimensionBaseResponse = {
  id: number;
  uom_id?: number | null;
  value?: number | null;
  dimension_type_id?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  uom_name?: string | null;
  dimension_type_name?: string | null;
};
export type PaginatedItemDimensionBaseResponse = {
  items: ItemDimensionBaseResponse[];
  meta: PaginatedMeta;
};
export type ItemDimensionBaseUpdate = {
  uom_id?: number | null;
  value?: number | null;
  dimension_type_id?: number | null;
};
export type ItemPriceHistoryBaseResponse = {
  id: number;
  item_price_id?: number | null;
  currency_code?: string | null;
  price?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  format_price?: string | null;
};
export type PaginatedItemPriceHistoryBaseResponse = {
  items: ItemPriceHistoryBaseResponse[];
  meta: PaginatedMeta;
};
export type ItemPriceBaseCreate = {
  item_id: number;
  vendor_id: number;
  item_dimension_id: number;
  currency_code: string;
  unit_price: number;
  packaging_price: number;
};
export type ItemPriceBaseResponse = {
  id: number;
  item_id?: number | null;
  vendor_id?: number | null;
  item_dimension_id?: number | null;
  currency_code?: string | null;
  unit_price?: number | null;
  packaging_price?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  item_name?: string | null;
  format_packaging_price?: string | null;
  format_unit_price?: string | null;
};
export type PaginatedItemPriceBaseResponse = {
  items: ItemPriceBaseResponse[];
  meta: PaginatedMeta;
};
export type ItemPriceBaseUpdate = {
  item_id?: number | null;
  vendor_id?: number | null;
  item_dimension_id?: number | null;
  currency_code?: string | null;
  unit_price?: number | null;
  packaging_price?: number | null;
  status?: Status | null;
};
export type PhysicalItemAttributeBaseCreate = {
  item_id: number;
  item_dimension_id: number;
  attribute_code: string;
  name: string;
  value: string;
};
export type PhysicalItemAttributeBaseResponse = {
  id: number;
  item_id?: number | null;
  item_dimension_id?: number | null;
  attribute_code?: string | null;
  name?: string | null;
  value?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
};
export type PaginatedPhysicalItemAttributeBaseResponse = {
  items: PhysicalItemAttributeBaseResponse[];
  meta: PaginatedMeta;
};
export type PhysicalItemAttributeBaseUpdate = {
  item_id?: number | null;
  item_dimension_id?: number | null;
  attribute_code?: string | null;
  name?: string | null;
  value?: string | null;
  status?: Status | null;
};
export type ServiceItemAttributeBaseCreate = {
  item_id: number;
  item_category_id: number;
  attribute_code: string;
  name: string;
  value: string;
};
export type ServiceItemAttributeBaseResponse = {
  id?: number | null;
  item_id?: number | null;
  tenant_id?: number | null;
  item_category_id?: number | null;
  attribute_code?: string | null;
  name?: string | null;
  value?: string | null;
  status?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  item_category_name?: string | null;
  item_name?: string | null;
};
export type PaginatedServiceItemAttributeBaseResponse = {
  items: ServiceItemAttributeBaseResponse[];
  meta: PaginatedMeta;
};
export type ServiceItemAttributeBaseUpdate = {
  item_id?: number | null;
  item_category_id?: number | null;
  attribute_code?: string | null;
  name?: string | null;
  value?: string | null;
  status?: Status | null;
};
export type Validity = '1 month' | '1 year' | 'lifetime';
export type LicenseBaseCreate = {
  license_name: string;
  issuing_authority_id: number;
  vallidity?: Validity | null;
  license_authorities_id?: number | null;
};
export type LicenseBaseResponse = {
  id: number;
  license_code?: string | null;
  license_name?: string | null;
  issuing_authority_id?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  vallidity?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  license_authorities_id?: number | null;
  issuing_authority_name?: string | null;
};
export type PaginatedLicenseBaseResponse = {
  items: LicenseBaseResponse[];
  meta: PaginatedMeta;
};
export type LicenseDetailBaseResponse = {
  id: number;
  license_code?: string | null;
  license_name?: string | null;
  issuing_authority_id?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  vallidity?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  license_authorities_id?: number | null;
  issuing_authority_name?: string | null;
  vender_licenses?: VendorLicenseBaseResponse[] | null;
};
export type LicesensStausEnum =
  | 'active'
  | 'inactive'
  | 'expired'
  | 'pending'
  | 'suspended'
  | 'approved'
  | 'under review'
  | 'cancelled';
export type LicenseBaseUpdate = {
  license_name?: string | null;
  issuing_authority_id?: number | null;
  vallidity?: Validity | null;
  license_authorities_id?: number | null;
  status?: LicesensStausEnum | null;
};
export type PayeeType = 'Vendor' | 'Customer' | 'Subcontractor';
export type PaymentReferences = {
  payment_item_type: string;
  payment_item_id: number;
  sub_total: number;
  adjusted_amount: number;
  tax_amount: number;
  total_amount: number;
  invoice_amount?: number | null;
  invoice_number?: string | null;
};
export type PaymentAttachments = {
  file_id: number;
  file_name: string;
  file_type: string;
};
export type PaymentBaseCreate = {
  transaction_number: string;
  project_id?: number | null;
  payee_type: PayeeType;
  payee_type_id: number;
  payment_date: string;
  payment_amount: number;
  tax_amount: number;
  payment_made_by: number;
  payment_approved_by: number;
  payment_approval_date?: string | null;
  payment_method: string;
  reference_note?: string | null;
  payment_type: string;
  currency_code: string;
  payment_references: PaymentReferences[];
  payment_attachments?: PaymentAttachments[] | null;
  party_type?: string | null;
};
export type PaymentBaseResponse = {
  id?: number | null;
  project_id?: number | null;
  tenant_id?: number | null;
  transaction_number?: string | null;
  reference_note?: string | null;
  payment_date?: string | null;
  payment_amount?: number | null;
  payment_method?: string | null;
  status?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  vendor_name?: string | null;
  currency_code?: string | null;
  payment_attachments?: PaymentAttachments[] | null;
  payment_references?: PaymentReferences[] | null;
  format_payment_amount?: string | null;
  tax_amount?: number | null;
  payee_type?: string | null;
  payee_type_id?: number | null;
  payment_made_by?: number | null;
  payment_approved_by?: number | null;
  payment_made_by_name?: string | null;
  payment_approved_by_name?: string | null;
  approval_status?: string | null;
  project_name?: string | null;
  approved_date?: string | null;
  is_paid?: boolean | null;
  party_type?: string | null;
};
export type PaginatedPaymentBaseResponse = {
  items: PaymentBaseResponse[];
  meta: PaginatedMeta;
};
export type PaymentMethod =
  | 'Bank Transfer'
  | 'Credit Card'
  | 'Debit Card'
  | 'Cash'
  | 'Cheque'
  | 'Net Banking'
  | 'UPI'
  | 'PayPal';
export type PaymentBaseUpdate = {
  reference_note?: string | null;
  payment_date?: string | null;
  transaction_number?: string | null;
  payment_method?: PaymentMethod | null;
  payment_type?: string | null;
  payment_attachments?: PaymentAttachments[] | null;
  status?: string | null;
};
export type PurchaseOrderLineItemDetailBaseCreate = {
  item_id: number;
  item_name?: string | null;
  item_description?: string | null;
  unit_price: number;
  total_price: number;
  quantity: number;
};
export type PurchaseOrderStatus =
  | 'draft'
  | 'under_review'
  | 'reviewed'
  | 'issued'
  | 'confirmed'
  | 'partially_delivered'
  | 'delivered'
  | 'pending_inspection'
  | 'cancelled'
  | 'completed'
  | 'closed';
export type PurchaseOrderBaseCreate = {
  purchase_order_date: string;
  vendor_id: number;
  project_id: number;
  contract_id: number;
  purchase_order_amount: number;
  purchase_order_total_amount: number;
  tax_amount: number;
  currency_code: string;
  purchase_order_file_id?: number | null;
  purchase_order_reference?: string | null;
  address_line_1?: string | null;
  address_line_2?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  phone_country_code?: string | null;
  zipcode?: string | null;
  po_line_items?: PurchaseOrderLineItemDetailBaseCreate[] | null;
  tax_id?: number | null;
  tax_value?: number | null;
  status?: PurchaseOrderStatus | null;
  approver_id?: number | null;
  party_type?: string | null;
};
export type PurchaseOrderBaseResponse = {
  id: number;
  purchase_order_number?: string | null;
  purchase_order_date?: string | null;
  vendor_id?: number | null;
  project_id?: number | null;
  contract_id?: number | null;
  purchase_order_amount?: number | null;
  purchase_order_total_amount?: number | null;
  tax_amount?: number | null;
  purchase_order_file_id?: number | null;
  purchase_order_reference?: string | null;
  is_paid?: boolean | null;
  payment_type?: string | null;
  payment_method?: string | null;
  status?: PurchaseOrderStatus | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  vendor_name?: string | null;
  project_name?: string | null;
  contract_name?: string | null;
  currency_code?: string | null;
  format_purchase_order_amount?: string | null;
  format_tax_amount?: string | null;
  address_line_1?: string | null;
  address_line_2?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  phone_country_code?: string | null;
  zipcode?: string | null;
  tax_id?: number | null;
  tax_value?: number | null;
  vendor_contact?: string | null;
  cancelled_reason?: string | null;
  cancelled_date?: string | null;
  cancelled_by?: string | null;
  cancelled_by_name?: string | null;
  approver_id?: number | null;
  approval_status?: string | null;
  approved_by_name?: string | null;
  approved_date?: string | null;
  party_type?: string | null;
  barcode?: string | null;
};
export type PaginatedPurchaseOrderBaseResponse = {
  items: PurchaseOrderBaseResponse[];
  meta: PaginatedMeta;
};
export type PaymentType =
  | 'Invoice'
  | 'Prepayment'
  | 'Partial Payment'
  | 'Advance Payment'
  | 'Cash on Delivery (COD)'
  | 'Letter of Credit'
  | 'Direct Debit'
  | 'Deferred Payment'
  | 'Net Terms'
  | 'Milestone Payment'
  | 'Revolving Credit'
  | 'Subscription Payment';
export type PurchaseOrderBaseUpdate = {
  purchase_order_number?: string | null;
  purchase_order_date?: string | null;
  vendor_id?: number | null;
  project_id?: number | null;
  contract_id?: number | null;
  purchase_order_amount?: number | null;
  purchase_order_total_amount?: number | null;
  tax_amount?: number | null;
  purchase_order_file_id?: number | null;
  purchase_order_reference?: string | null;
  status?: PurchaseOrderStatus | null;
  currency_code?: string | null;
  payment_type?: PaymentType | null;
  payment_method?: PaymentMethod | null;
  is_paid?: boolean | null;
  address_line_1?: string | null;
  address_line_2?: string | null;
  country?: string | null;
  state?: string | null;
  city?: string | null;
  phone_country_code?: string | null;
  zipcode?: string | null;
  tax_id?: number | null;
  tax_value?: number | null;
  approver_id?: number | null;
};
export type PurchaseOrderDetailBaseCreate = {
  purchase_order_id: number;
  item_id: number;
  item_name?: string | null;
  item_description?: string | null;
  unit_price: number;
  total_price: number;
  quantity: number;
  currency_code: string;
  tax_id?: number | null;
  tax_value?: number | null;
  tax_amount?: number | null;
};
export type PurchaseOrderDetailBaseResponse = {
  id: number;
  item_id?: number | null;
  purchase_order_id?: number | null;
  item_name?: string | null;
  item_description?: string | null;
  quantity?: number | null;
  unit_price?: number | null;
  total_price?: number | null;
  status?: string | null;
  updated_at?: string | null;
  created_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  currency_code?: string | null;
  format_total_price?: string | null;
  format_unit_price?: string | null;
  tax_id?: number | null;
  tax_value?: number | null;
  tax_amount?: number | null;
};
export type PaginatedPurchaseOrderDetailBaseResponse = {
  items: PurchaseOrderDetailBaseResponse[];
  meta: PaginatedMeta;
};
export type PurchaseOrderDetailBaseUpdate = {
  purchase_order_id?: number | null;
  item_id?: number | null;
  item_name?: string | null;
  item_description?: string | null;
  unit_price?: number | null;
  total_price?: number | null;
  status?: Status | null;
  quantity?: number | null;
  currency_code?: string | null;
  tax_id?: number | null;
  tax_value?: number | null;
  tax_amount?: number | null;
};
export type WorkOrderType =
  | 'maintainance'
  | 'construction'
  | 'renovation'
  | 'demolition';
export type WorkOrderCategory = 'plumbing' | 'electrical' | 'carpentry';
export type WorkOrderItem = {
  item_id: number;
  item_name: string;
  quantity: number;
  unit_price: number;
  tax_rate: number;
  tax_amount: number;
  net_amount: number;
  total_amount: number;
  tax_id?: number | null;
};
export type WorkOrderAttachments = {
  file_id: number;
  file_name: string;
  file_type: string;
};
export type WorkOrderBaseCreate = {
  project_id: number;
  subcontractor_id: number;
  contract_id: number;
  work_order_name: string;
  description?: string | null;
  work_order_date: string;
  start_date: string;
  end_date: string;
  priority: string;
  notes?: string | null;
  net_amount: number;
  tax_amount: number;
  total_amount: number;
  safety_checklist?: string | null;
  permit_number?: string | null;
  inspection_status?: string | null;
  regulatory_compliance?: string | null;
  equipment_required?: string | null;
  subcontractor_info?: string | null;
  labor_hours_estimated?: number | null;
  labor_hours_actual?: number | null;
  work_order_type: WorkOrderType;
  work_order_category: WorkOrderCategory;
  parent_work_order_id?: number | null;
  work_order_items: WorkOrderItem[];
  currency_code?: string | null;
  approver_id?: number | null;
  work_order_attachments: WorkOrderAttachments[] | null;
  party_type?: string | null;
};
export type WorkOrderBaseResponse = {
  id?: number | null;
  tenant_id?: number | null;
  project_id?: number | null;
  subcontractor_id?: number | null;
  contract_id?: number | null;
  work_order_name?: string | null;
  description?: string | null;
  work_order_date?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  priority?: string | null;
  notes?: string | null;
  net_amount?: number | null;
  tax_amount?: number | null;
  total_amount?: number | null;
  safety_checklist?: string | null;
  permit_number?: string | null;
  inspection_status?: string | null;
  regulatory_compliance?: string | null;
  equipment_required?: string | null;
  subcontractor_info?: string | null;
  labor_hours_estimated?: number | null;
  labor_hours_actual?: number | null;
  work_order_type?: WorkOrderType | null;
  work_order_category?: WorkOrderCategory | null;
  parent_work_order_id?: number | null;
  work_order_items: WorkOrderItem[];
  cancelled_reason?: string | null;
  cancelled_date?: string | null;
  cancelled_by?: string | null;
  cancelled_by_name?: string | null;
  currency_code?: string | null;
  currency_symbol?: string | null;
  status?: string | null;
  approver_id?: number | null;
  approval_status?: string | null;
  work_order_number?: string | null;
  party_type?: string | null;
  barcode?: string | null;
};
export type PaginatedWorkOrderBaseResponse = {
  items: WorkOrderBaseResponse[];
  meta: PaginatedMeta;
};
export type WorkOrderDetailBaseResponse = {
  id?: number | null;
  tenant_id?: number | null;
  project_id?: number | null;
  subcontractor_id?: number | null;
  contract_id?: number | null;
  work_order_name?: string | null;
  description?: string | null;
  work_order_date?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  priority?: string | null;
  notes?: string | null;
  net_amount?: number | null;
  tax_amount?: number | null;
  total_amount?: number | null;
  safety_checklist?: string | null;
  permit_number?: string | null;
  inspection_status?: string | null;
  regulatory_compliance?: string | null;
  equipment_required?: string | null;
  subcontractor_info?: string | null;
  labor_hours_estimated?: number | null;
  labor_hours_actual?: number | null;
  work_order_type?: WorkOrderType | null;
  work_order_category?: WorkOrderCategory | null;
  parent_work_order_id?: number | null;
  work_order_items: WorkOrderItem[];
  cancelled_reason?: string | null;
  cancelled_date?: string | null;
  cancelled_by?: string | null;
  cancelled_by_name?: string | null;
  currency_code?: string | null;
  currency_symbol?: string | null;
  status?: string | null;
  approver_id?: number | null;
  approval_status?: string | null;
  work_order_number?: string | null;
  party_type?: string | null;
  barcode?: string | null;
  work_order_attachments?: WorkOrderAttachments[] | null;
  project_name?: string | null;
  contract_name?: string | null;
  subcontractor_name?: string | null;
  approved_by_name?: string | null;
  approved_date?: string | null;
};
export type WorkOrderBaseUpdate = {
  project_id?: number | null;
  subcontractor_id?: number | null;
  contract_id?: number | null;
  work_order_name?: string | null;
  description?: string | null;
  work_order_date?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  priority?: string | null;
  notes?: string | null;
  net_amount?: number | null;
  tax_amount?: number | null;
  total_amount?: number | null;
  safety_checklist?: string | null;
  permit_number?: string | null;
  inspection_status?: string | null;
  regulatory_compliance?: string | null;
  equipment_required?: string | null;
  subcontractor_info?: string | null;
  labor_hours_estimated?: number | null;
  labor_hours_actual?: number | null;
  work_order_type?: WorkOrderType | null;
  work_order_category?: WorkOrderCategory | null;
  parent_work_order_id?: number | null;
  currency_code?: string | null;
  approver_id?: number | null;
  status?: string | null;
  work_order_attachments: WorkOrderAttachments[] | null;
};
export type TaxBaseCreate = {
  name: string;
  description: string;
  tax_code: string;
  tax_value: number;
  jurisdictions: string;
};
export type TaxBaseResponse = {
  id: number;
  name?: string | null;
  description?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  tax_code?: string | null;
  tax_value?: number | null;
  jurisdictions?: string | null;
};
export type PaginatedTaxBaseResponse = {
  items: TaxBaseResponse[];
  meta: PaginatedMeta;
};
export type TaxBaseUpdate = {
  name?: string | null;
  description?: string | null;
  tax_code?: string | null;
  tax_value?: number | null;
  jurisdictions?: string | null;
  status?: Status | null;
};
export type LicenseTypeEnum = 'free' | 'paid' | 'trial';
export type CategoryEnum = 'software' | 'hardware' | 'service';
export type LicenseAuthorityBaseCreate = {
  name: string;
  license_type?: LicenseTypeEnum | null;
  category?: CategoryEnum | null;
  policy: string;
};
export type LicenseAuthorityBaseResponse = {
  id: number;
  name?: string | null;
  license_type?: string | null;
  category?: string | null;
  policy?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  created_by_name?: string | null;
};
export type PaginatedLicenseAuthorityBaseResponse = {
  items: LicenseAuthorityBaseResponse[];
  meta: PaginatedMeta;
};
export type LicenseAuthorityBaseUpdate = {
  name?: string | null;
  license_type?: string | null;
  category?: string | null;
  policy?: string | null;
};
export type ManufacturerBaseCreate = {
  name: string;
  location: string;
  organization_id: number;
};
export type ManufacturerBaseResponse = {
  id: number;
  name?: string | null;
  location?: string | null;
  organization_id?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  manufacturer_id?: string | null;
  created_by_name?: string | null;
};
export type PaginatedManufacturerBaseResponse = {
  items: ManufacturerBaseResponse[];
  meta: PaginatedMeta;
};
export type ManufacturerBaseUpdate = {
  name?: string | null;
  location?: string | null;
  organization_id?: number | null;
};
export type PaymentTermUnitEnum = 'week' | 'quarter' | 'day' | 'month';
export type PaymentTermBaseCreate = {
  payment_term_name: string;
  payment_term_description?: string | null;
  payment_term: number;
  payment_term_unit?: PaymentTermUnitEnum | null;
};
export type PaymentTermBaseResponse = {
  id: number;
  payment_term_name?: string | null;
  payment_term_description?: string | null;
  payment_term?: number | null;
  payment_term_unit?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
};
export type PaginatedPaymentTermBaseResponse = {
  items: PaymentTermBaseResponse[];
  meta: PaginatedMeta;
};
export type PaymentTermBaseUpdate = {
  payment_term_name?: string | null;
  payment_term_description?: string | null;
  payment_term?: number | null;
  payment_term_unit?: string | null;
  status?: string | null;
};
export type ShipmentMethodEnum =
  | 'expedited_shipping'
  | 'overnight_shipping'
  | 'priority_mail'
  | 'flat_rate_shipping'
  | 'economy_shipping'
  | 'multiple_addresses'
  | 'local_delivery_or_pickup'
  | 'international_shipping'
  | 'freight_shipping';
export type ShipmentItemBaseCreate = {
  item_price?: number | null;
  item_amount?: number | null;
  currency_code?: string | null;
  tax_id?: number | null;
  tax_value?: number | null;
  tax_amount?: number | null;
  total_amount?: number | null;
  item_id: number;
  item_quantity: number;
};
export type ShipmentAttachments = {
  file_id: number;
  file_name: string;
  file_type: string;
};
export type ShipmentBaseCreate = {
  project_id?: number | null;
  shipper_type?: string | null;
  shipper_id?: number | null;
  purchase_order_id: number;
  expected_delivery_date: string;
  shipping_method?: ShipmentMethodEnum | null;
  tracking_number?: string | null;
  status?: string | null;
  total_weight?: number | null;
  total_volume?: number | null;
  shipping_cost?: number | null;
  notes?: string | null;
  shipping_terms?: string | null;
  currency_code?: string | null;
  tax_amount?: number | null;
  total_cost?: number | null;
  transporter_notes?: string | null;
  transporter_name?: string | null;
  reference_number?: string | null;
  received_by?: number | null;
  received_date?: string | null;
  receiver_notes?: string | null;
  net_amount?: number | null;
  item_location_id?: number | null;
  barcode?: string | null;
  party_type?: string | null;
  invoice_number?: number[] | null;
  shipment_line_item_data: ShipmentItemBaseCreate[];
  shipment_attachment_data?: ShipmentAttachments[] | null;
  approver_id?: number | null;
};
export type ShipmentInvoiceNumber = {
  id: number;
  number: string;
};
export type ShipmentBaseResponse = {
  project_id?: number | null;
  shipper_type?: string | null;
  shipper_id?: number | null;
  purchase_order_id?: number | null;
  expected_delivery_date?: string | null;
  shipping_method?: ShipmentMethodEnum | null;
  tracking_number?: string | null;
  status?: string | null;
  total_weight?: number | null;
  total_volume?: number | null;
  shipping_cost?: number | null;
  notes?: string | null;
  shipping_terms?: string | null;
  currency_code?: string | null;
  tax_amount?: number | null;
  total_cost?: number | null;
  transporter_notes?: string | null;
  transporter_name?: string | null;
  reference_number?: string | null;
  received_by?: number | null;
  received_date?: string | null;
  receiver_notes?: string | null;
  net_amount?: number | null;
  item_location_id?: number | null;
  barcode?: string | null;
  party_type?: string | null;
  id: number;
  tenant_id?: number | null;
  actual_delivery_date?: string | null;
  shipment_number?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  project_name?: string | null;
  shipper_name?: string | null;
  currency_symbol?: string | null;
  purchase_order_number?: string | null;
  shipment_invoice_number?: ShipmentInvoiceNumber[] | null;
  approver_id?: number | null;
  approval_status?: string | null;
};
export type PaginatedShipmentBaseResponse = {
  items: ShipmentBaseResponse[];
  meta: PaginatedMeta;
};
export type ShipmentItemBaseResponse = {
  item_price?: number | null;
  item_amount?: number | null;
  currency_code?: string | null;
  tax_id?: number | null;
  tax_value?: number | null;
  tax_amount?: number | null;
  total_amount?: number | null;
  id: number;
  tenant_id?: number | null;
  shipment_id?: number | null;
  status?: string | null;
  item_id?: number | null;
  item_quantity?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  item_name?: string | null;
};
export type ShipmentAttachmentBaseResponse = {
  id: number;
  tenant_id: number;
  shipment_id: number;
  file_id: number;
  file_name?: string | null;
  file_size?: number | null;
  file_type?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
};
export type ShipmentDetailsResponse = {
  project_id?: number | null;
  shipper_type?: string | null;
  shipper_id?: number | null;
  purchase_order_id?: number | null;
  expected_delivery_date?: string | null;
  shipping_method?: ShipmentMethodEnum | null;
  tracking_number?: string | null;
  status?: string | null;
  total_weight?: number | null;
  total_volume?: number | null;
  shipping_cost?: number | null;
  notes?: string | null;
  shipping_terms?: string | null;
  currency_code?: string | null;
  tax_amount?: number | null;
  total_cost?: number | null;
  transporter_notes?: string | null;
  transporter_name?: string | null;
  reference_number?: string | null;
  received_by?: number | null;
  received_date?: string | null;
  receiver_notes?: string | null;
  net_amount?: number | null;
  item_location_id?: number | null;
  barcode?: string | null;
  party_type?: string | null;
  id: number;
  tenant_id?: number | null;
  actual_delivery_date?: string | null;
  shipment_number?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  project_name?: string | null;
  shipper_name?: string | null;
  currency_symbol?: string | null;
  purchase_order_number?: string | null;
  shipment_invoice_number?: ShipmentInvoiceNumber[] | null;
  approver_id?: number | null;
  approval_status?: string | null;
  shipment_line_item_data: ShipmentItemBaseResponse[];
  shipment_attachment_data?: ShipmentAttachmentBaseResponse[] | null;
  purchase_order_details?: PurchaseOrderBaseResponse | null;
  invoice_number?: number[] | null;
  received_by_name?: string | null;
  item_location_data?: ItemLocationBaseResponse | null;
  approved_by_name?: string | null;
  approved_date?: string | null;
};
export type ShipmentItemBaseUpdate = {
  item_price?: number | null;
  item_amount?: number | null;
  currency_code?: string | null;
  tax_id?: number | null;
  tax_value?: number | null;
  tax_amount?: number | null;
  total_amount?: number | null;
  id?: number | null;
  item_id?: number | null;
  item_quantity?: number | null;
};
export type ShipmentBaseUpdate = {
  project_id?: number | null;
  shipper_type?: string | null;
  shipper_id?: number | null;
  purchase_order_id?: number | null;
  expected_delivery_date?: string | null;
  shipping_method?: ShipmentMethodEnum | null;
  tracking_number?: string | null;
  status?: string | null;
  total_weight?: number | null;
  total_volume?: number | null;
  shipping_cost?: number | null;
  notes?: string | null;
  shipping_terms?: string | null;
  currency_code?: string | null;
  tax_amount?: number | null;
  total_cost?: number | null;
  transporter_notes?: string | null;
  transporter_name?: string | null;
  reference_number?: string | null;
  received_by?: number | null;
  received_date?: string | null;
  receiver_notes?: string | null;
  net_amount?: number | null;
  item_location_id?: number | null;
  barcode?: string | null;
  party_type?: string | null;
  invoice_number?: number[] | null;
  actual_delivery_date?: string | null;
  shipment_number?: string | null;
  shipment_line_item_data?: ShipmentItemBaseUpdate[];
  approver_id?: number | null;
};
export type PaginatedShipmentItemBaseResponse = {
  items: ShipmentItemBaseResponse[];
  meta: PaginatedMeta;
};
export type ContractAmendmentAttributeBaseResponse = {
  amendment_id?: number | null;
  attribute_name?: string | null;
  old_value?: string | null;
  new_value?: string | null;
  id: number;
  created_at?: string | null;
  updated_at?: string | null;
};
export type ContractAmendmentBaseResponse = {
  id?: number | null;
  tenant_id?: number | null;
  contract_id?: number | null;
  amendment_name?: string | null;
  amendment_number?: string | null;
  amendment_date?: string | null;
  amendment_type?: string | null;
  amendment_description?: string | null;
  notes?: string | null;
  amendment_attributes_data?: ContractAmendmentAttributeBaseResponse[] | null;
};
export type PaginatedContractAmendmentBaseResponse = {
  items: ContractAmendmentBaseResponse[];
  meta: PaginatedMeta;
};
export type TerminationReasonBaseResponse = {
  id: number;
  termination_reason?: string | null;
};
export type PaginatedTerminationReasonBaseResponse = {
  items: TerminationReasonBaseResponse[];
  meta: PaginatedMeta;
};
export type ContractStatusEnum =
  | 'draft'
  | 'reviewed'
  | 'pending_approval'
  | 'approved'
  | 'rejected'
  | 'terminated'
  | 'completed';
export type ContractType =
  | 'Lump Sum'
  | 'Unit Price'
  | 'Cost Plus Fixed Fee'
  | 'Cost Plus Percentage Fee'
  | 'Time and Materials'
  | 'Design-Build'
  | 'Engineering, Procurement, and Construction'
  | 'Subcontract'
  | 'Job Order';
export type ContractTermCreate = {
  term_name: string;
  term_number: string;
  term_type: string;
  due_date: string;
  amount: number;
  currency_code: string;
  term_description: string;
  notes?: string | null;
};
export type DeliverableCreate = {
  deliverable_name: string;
  deliverable_description: string;
  due_date: string;
  notes?: string | null;
};
export type ContractAttachmentCreate = {
  file_id: number;
  file_name: string;
  file_size: number;
  file_type: string;
  is_signature?: boolean | null;
};
export type ContractAttributeCreate = {
  attribute_id: number;
  attribute_name: string;
  attribute_value: string;
};
export type ContractCreate = {
  status?: ContractStatusEnum | null;
  project_id: number;
  party_id: number;
  contact_id: number;
  payment_term_id: number;
  contract_name: string;
  contract_type: ContractType;
  start_date: string;
  end_date: string;
  contract_value: number;
  currency_code: string;
  discount_percentage?: number | null;
  tax_id: number;
  tax_value: number;
  tax_amount: number;
  total_contract_value: number;
  notes?: string | null;
  jurisdiction?: string | null;
  parent_id?: number | null;
  path?: string | null;
  signing_authority_name?: string | null;
  signing_authority_designation?: string | null;
  signing_authority_signature?: string | null;
  contract_execution_date?: string | null;
  contract_review_date?: string | null;
  legal_clauses?: string | null;
  approver_id?: number | null;
  terms: ContractTermCreate[];
  deliverables: DeliverableCreate[];
  is_appendix?: boolean | null;
  attachments: ContractAttachmentCreate[] | null;
  attributes: ContractAttributeCreate[];
  party_type?: string | null;
};
export type ContractTerm = {
  created_by?: string | null;
  created_at?: string | null;
  modified_by?: string | null;
  modified_at?: string | null;
  status?: ContractStatusEnum | null;
  term_name: string;
  term_number: string;
  term_type: string;
  due_date: string;
  amount: number;
  currency_code: string;
  term_description: string;
  notes?: string | null;
  id: number;
};
export type Deliverable = {
  created_by?: string | null;
  created_at?: string | null;
  modified_by?: string | null;
  modified_at?: string | null;
  status?: ContractStatusEnum | null;
  deliverable_name: string;
  deliverable_description: string;
  due_date: string;
  notes?: string | null;
  id: number;
};
export type ContractAttachment = {
  created_by?: string | null;
  created_at?: string | null;
  modified_by?: string | null;
  modified_at?: string | null;
  status?: ContractStatusEnum | null;
  file_id: number;
  file_name: string;
  file_size: number;
  file_type: string;
  is_signature?: boolean | null;
  id: number;
};
export type ContractAttribute = {
  created_by?: string | null;
  created_at?: string | null;
  modified_by?: string | null;
  modified_at?: string | null;
  status?: ContractStatusEnum | null;
  attribute_id: number;
  attribute_name: string;
  attribute_value: string;
  id: number;
};
export type ContractAuditHistoryResponse = {
  action: string;
  changed_by: string;
  changed_by_name: string;
  changed_at: string;
  old_values?: any | null;
  new_values?: any | null;
  tenant_id: number;
};
export type ContractBaseResponse = {
  created_by?: string | null;
  created_at?: string | null;
  modified_by?: string | null;
  modified_at?: string | null;
  status?: ContractStatusEnum | null;
  project_id: number;
  party_id: number;
  contact_id: number;
  payment_term_id: number;
  contract_name: string;
  contract_type: ContractType;
  start_date: string;
  end_date: string;
  contract_value: number;
  currency_code: string;
  discount_percentage?: number | null;
  tax_id: number;
  tax_value: number;
  tax_amount: number;
  total_contract_value: number;
  notes?: string | null;
  jurisdiction?: string | null;
  parent_id?: number | null;
  path?: string | null;
  signing_authority_name?: string | null;
  signing_authority_designation?: string | null;
  signing_authority_signature?: string | null;
  contract_execution_date?: string | null;
  contract_review_date?: string | null;
  legal_clauses?: string | null;
  approver_id?: number | null;
  terms?: ContractTerm[];
  deliverables?: Deliverable[];
  is_appendix?: boolean | null;
  attachments?: ContractAttachment[];
  attributes?: ContractAttribute[];
  party_type?: string | null;
  id: number;
  contract_number?: string | null;
  parent_contract_name?: string | null;
  audit_history?: ContractAuditHistoryResponse[] | null;
  amendements?: ContractAmendmentBaseResponse[];
  termination_date?: string | null;
  termination_reason_id?: number | null;
  terminated_by?: string | null;
  termination_reason?: string | null;
  is_deleted?: boolean | null;
  curency_symbol?: string | null;
  approved_by_name?: string | null;
  approved_date?: string | null;
  barcode?: string | null;
};
export type PaginatedContractBaseResponse = {
  items: ContractBaseResponse[];
  meta: PaginatedMeta;
};
export type ContractUpdate = {
  project_id?: number | null;
  party_id?: number | null;
  contact_id?: number | null;
  payment_term_id?: number | null;
  contract_name?: string | null;
  contract_type?: ContractType | null;
  start_date?: string | null;
  end_date?: string | null;
  contract_value?: number | null;
  currency_code?: string | null;
  discount_percentage?: number | null;
  tax_id?: number | null;
  tax_value?: number | null;
  tax_amount?: number | null;
  total_contract_value?: number | null;
  notes?: string | null;
  jurisdiction?: string | null;
  parent_id?: number | null;
  path?: string | null;
  signing_authority_name?: string | null;
  signing_authority_designation?: string | null;
  signing_authority_signature?: string | null;
  contract_execution_date?: string | null;
  contract_approval_date?: string | null;
  contract_review_date?: string | null;
  legal_clauses?: string | null;
  status?: ContractStatusEnum | null;
  approver_id?: number | null;
  attachments?: ContractAttachmentCreate[] | null;
  termination_date?: string | null;
  termination_reason_id?: number | null;
  terminated_by?: string | null;
};
export type AmendmentData = {
  attribute_name: string;
  old_value: string;
  new_value: string;
};
export type ContractAmendmentBaseCreate = {
  amendment_name: string;
  amendment_number?: string | null;
  amendment_date: string;
  amendment_type: string;
  amendment_description?: string | null;
  notes?: string | null;
  amendment_attributes: AmendmentData[];
};
export type TemplateContractCreate = {
  project_id: number;
  party_id: number;
  contact_id: number;
  party_type?: string | null;
};
export type AttribiuteOfContractBaseCreate = {
  attribute_name: string;
  attribute_type: string;
  attribute_format: string;
};
export type AttribiuteOfContractBaseResponse = {
  id: number;
  tenant_id?: number | null;
  attribute_name?: string | null;
  attribute_type?: string | null;
  attribute_format?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  created_by_name?: string | null;
};
export type PaginatedAttribiuteOfContractBaseResponse = {
  items: AttribiuteOfContractBaseResponse[];
  meta: PaginatedMeta;
};
export type AttribiuteOfContractBaseUpdate = {
  attribute_name?: string | null;
  attribute_type?: string | null;
  attribute_format?: string | null;
};
export type InventoryBaseCreate = {
  item_id: number;
  uom_id: number;
  quantity: number;
  reorder_point: number;
  safety_stock: number;
  location_id: number;
};
export type InventoryBaseResponse = {
  id?: number | null;
  tenant_id?: number | null;
  item_id?: number | null;
  uom_id?: number | null;
  quantity?: number | null;
  reorder_point?: number | null;
  safety_stock?: number | null;
  location_id?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  uom_name?: string | null;
  uom_code?: string | null;
  item_name?: string | null;
  location_name?: string | null;
};
export type PaginatedInventoryBaseResponse = {
  items: InventoryBaseResponse[];
  meta: PaginatedMeta;
};
export type InventoryBaseUpdate = {
  item_id?: number | null;
  uom_id?: number | null;
  quantity?: number | null;
  reorder_point?: number | null;
  safety_stock?: number | null;
  location_id?: number | null;
};
export type InventoryAdjustmentBaseCreate = {
  item_id: number;
  quantity: number;
  unit_of_measure_id: number;
  adjustment_reason_id: number;
  adjustment_date?: string | null;
  notes?: string | null;
};
export type InventoryAdjustmentBaseResponse = {
  id: number;
  item_id?: number | null;
  quantity?: number | null;
  unit_of_measure_id?: number | null;
  adjustment_reason_id?: number | null;
  adjustment_date?: string | null;
  notes?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
};
export type PaginatedInventoryAdjustmentBaseResponse = {
  items: InventoryAdjustmentBaseResponse[];
  meta: PaginatedMeta;
};
export type InventoryAdjustmentBaseUpdate = {
  item_id?: number | null;
  quantity?: number | null;
  unit_of_measure_id?: number | null;
  adjustment_reason_id?: number | null;
  adjustment_date?: string | null;
  notes?: string | null;
};
export type AttributeOfItemBaseCreate = {
  attribute_name: string;
  attribute_value: string;
  attribute_type: string;
  attribute_format: string;
  item_category_id: number;
};
export type AttributeOfItemBaseResponse = {
  id: number;
  attribute_name?: string | null;
  attribute_value?: string | null;
  attribute_type?: string | null;
  attribute_format?: string | null;
  item_category_id?: number | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  created_by_name?: string | null;
};
export type PaginatedAttributeOfItemBaseResponse = {
  items: AttributeOfItemBaseResponse[];
  meta: PaginatedMeta;
};
export type AttributeOfItemBaseUpdate = {
  attribute_name?: string | null;
  attribute_value?: string | null;
  attribute_type?: string | null;
  attribute_format?: string | null;
  item_category_id?: number | null;
};
export type ItemAttributeBaseCreate = {
  item_id: number;
  attribute_id: number;
  attribute_value: string;
  phone_country_code?: string | null;
  fax_number?: string | null;
  email?: string | null;
};
export type ItemAttributeBaseResponse = {
  id: number;
  item_id?: number | null;
  attribute_id?: number | null;
  attribute_value?: string | null;
  phone_country_code?: string | null;
  fax_number?: string | null;
  email?: string | null;
  is_active?: boolean | null;
  created_at?: string | null;
  updated_at?: string | null;
  tenant_id?: number | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  created_by_name?: string | null;
};
export type PaginatedItemAttributeBaseResponse = {
  items: ItemAttributeBaseResponse[];
  meta: PaginatedMeta;
};
export type ItemAttributeBaseUpdate = {
  item_id?: number | null;
  attribute_id?: number | null;
  attribute_value?: string | null;
  phone_country_code?: string | null;
  fax_number?: string | null;
  email?: string | null;
  is_active?: boolean | null;
};
export type ContractTemplateBaseCreate = {
  template_description?: string | null;
  notes?: string | null;
  payment_term_id?: number | null;
  contract_type?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  contract_value?: number | string | null;
  currency_code?: string | null;
  discount_percentage?: number | string | null;
  tax_id?: number | null;
  tax_value?: number | string | null;
  tax_amount?: number | string | null;
  total_contract_value?: number | string | null;
  jurisdiction?: string | null;
  party_type?: string | null;
  legal_clauses?: string | null;
  template_name: string;
  terms: ContractTermCreate[];
  deliverables: DeliverableCreate[];
  attributes: ContractAttributeCreate[];
};
export type ContractTemplateBaseResponse = {
  template_description?: string | null;
  notes?: string | null;
  payment_term_id?: number | null;
  contract_type?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  contract_value?: string | null;
  currency_code?: string | null;
  discount_percentage?: string | null;
  tax_id?: number | null;
  tax_value?: string | null;
  tax_amount?: string | null;
  total_contract_value?: string | null;
  jurisdiction?: string | null;
  party_type?: string | null;
  legal_clauses?: string | null;
  id: number;
  tenant_id: number;
  template_name: string;
  created_at?: string | null;
  updated_at?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
};
export type PaginatedContractTemplateBaseResponse = {
  items: ContractTemplateBaseResponse[];
  meta: PaginatedMeta;
};
export type ContractTemplateTermBaseResponse = {
  term_name: string;
  term_number: string;
  term_type: string;
  due_date: string;
  amount: number;
  currency_code: string;
  term_description: string;
  notes?: string | null;
  id: number;
  created_at?: string | null;
  updated_at?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
};
export type ContractTemplateDeliverableResponse = {
  deliverable_name: string;
  deliverable_description: string;
  due_date: string;
  notes?: string | null;
  id: number;
  created_at?: string | null;
  updated_at?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
};
export type ContractTemplateAttributesResponse = {
  attribute_id: number;
  attribute_name: string;
  attribute_value: string;
  id: number;
  created_at?: string | null;
  updated_at?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
};
export type ContractTemplatesDetails = {
  template_description?: string | null;
  notes?: string | null;
  payment_term_id?: number | null;
  contract_type?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  contract_value?: string | null;
  currency_code?: string | null;
  discount_percentage?: string | null;
  tax_id?: number | null;
  tax_value?: string | null;
  tax_amount?: string | null;
  total_contract_value?: string | null;
  jurisdiction?: string | null;
  party_type?: string | null;
  legal_clauses?: string | null;
  id: number;
  tenant_id: number;
  template_name: string;
  created_at?: string | null;
  updated_at?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  curency_symbol?: string | null;
  terms?: ContractTemplateTermBaseResponse[];
  deliverables?: ContractTemplateDeliverableResponse[];
  attributes?: ContractTemplateAttributesResponse[];
};
export type ContractTemplateBaseUpdate = {
  template_description?: string | null;
  notes?: string | null;
  payment_term_id?: number | null;
  contract_type?: string | null;
  start_date?: string | null;
  end_date?: string | null;
  contract_value?: number | string | null;
  currency_code?: string | null;
  discount_percentage?: number | string | null;
  tax_id?: number | null;
  tax_value?: number | string | null;
  tax_amount?: number | string | null;
  total_contract_value?: number | string | null;
  jurisdiction?: string | null;
  party_type?: string | null;
  legal_clauses?: string | null;
  template_name?: string | null;
};
export type ItemRequisitionTypeEnum = 'debit' | 'credit';
export type ItemRequisitionStatusEnum =
  | 'pending'
  | 'approved'
  | 'rejected'
  | 'issued';
export type ItemRequisitionBaseCreate = {
  project_id: number;
  task_id: number;
  item_id: number;
  uom_id: number;
  quantity: number;
  request_date: string;
  requested_by: number;
  requisition_type?: ItemRequisitionTypeEnum | null;
  status?: ItemRequisitionStatusEnum | null;
};
export type ItemRequisitionBaseResponse = {
  id: number;
  tenant_id: number;
  project_id: number;
  task_id: number;
  item_id: number;
  uom_id: number;
  quantity: number;
  request_date: string;
  requested_by: number;
  requisition_type?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
  created_by?: string | null;
  updated_by?: string | null;
  status?: string | null;
  effective_start_date?: string | null;
  effective_end_date?: string | null;
  project_name?: string | null;
  task_name?: string | null;
  item_name?: string | null;
};
export type PaginatedItemRequisitionBaseResponse = {
  items: ItemRequisitionBaseResponse[];
  meta: PaginatedMeta;
};
export type ItemRequisitionBaseUpdate = {
  tenant_id?: number | null;
  project_id?: number | null;
  task_id?: number | null;
  item_id?: number | null;
  uom_id?: number | null;
  quantity?: number | null;
  request_date?: string | null;
  requested_by?: number | null;
  requisition_type?: string | null;
  status?: string | null;
};
export const {
  useCreateVendorVendorsPostMutation,
  useGetAllVendorsVendorsGetQuery,
  useGetVendorVendorsIdGetQuery,
  useUpdateVendorVendorsIdPutMutation,
  useDeleteVendorVendorsIdDeleteMutation,
  useGetFileDataVendorsIdLogGetQuery,
  useUpdateVendorAddressVendorsVendorIdAddressesAddressIdPutMutation,
  useDeleteVendorAddressVendorsVendorIdAddressesAddressIdDeleteMutation,
  useUpdateVendorBankDetailVendorsVendorIdBankDetailsBankDetailsIdPutMutation,
  useDeleteVendorBankDetailVendorsVendorIdBankDetailsBankDetailsIdDeleteMutation,
  useUpdateVendorTaxIdentificationVendorsVendorIdTaxIdentificationTaxIdentificationIdPutMutation,
  useDeleteVendorTaxIdentificationVendorsVendorIdTaxIdentificationTaxIdentificationIdDeleteMutation,
  useCreateVendorContactVendorContactsPostMutation,
  useGetAllVendorContactsVendorContactsGetQuery,
  useGetVendorContactVendorContactsIdGetQuery,
  useUpdateVendorContactVendorContactsIdPutMutation,
  useDeleteVendorContactVendorContactsIdDeleteMutation,
  useCreateVendorItemPricesPostMutation,
  useGetAllVendorItemPriceVendorItemPricesGetQuery,
  useGetVendorItemPricesIdGetQuery,
  useUpdateVendorItemPricesIdPutMutation,
  useDeleteVendorItemPricesIdDeleteMutation,
  useCreateVendorItemShippingsPostMutation,
  useGetAllVendorItemShippingVendorItemShippingsGetQuery,
  useGetVendorItemShippingsIdGetQuery,
  useUpdateVendorItemShippingsIdPutMutation,
  useDeleteVendorItemShippingsIdDeleteMutation,
  useCreateVendorItemTaxsPostMutation,
  useGetAllVendorItemTaxVendorItemTaxsGetQuery,
  useGetVendorItemTaxsIdGetQuery,
  useUpdateVendorItemTaxsIdPutMutation,
  useDeleteVendorItemTaxsIdDeleteMutation,
  useCreateVendorLicensesPostMutation,
  useGetAllVendorLicenseVendorLicensesGetQuery,
  useGetVendorLicensesIdGetQuery,
  useUpdateVendorLicensesIdPutMutation,
  useDeleteVendorLicensesIdDeleteMutation,
  useCreateVendorItemVendorItemsPostMutation,
  useGetAllVendorItemsVendorItemsGetQuery,
  useGetVendorItemVendorItemsIdGetQuery,
  useUpdateVendorItemVendorItemsIdPutMutation,
  useDeleteVendorItemVendorItemsIdDeleteMutation,
  useGetCurrencyCurrenciesIdGetQuery,
  useUpdateCurrencyCurrenciesIdPutMutation,
  useDeleteCurrencyCurrenciesIdDeleteMutation,
  useGetAllCurrenciesCurrenciesGetQuery,
  useCreateIndustryIndustriesPostMutation,
  useGetAllIndustriesIndustriesGetQuery,
  useGetIndustryIndustriesIdGetQuery,
  useUpdateIndustryIndustriesIdPutMutation,
  useDeleteIndustryIndustriesIdDeleteMutation,
  useCreateInvoicesPostMutation,
  useUpdateEntityStatusInvoicesPutMutation,
  useGetAllInvoiceInvoicesGetQuery,
  useGetInvoicesIdGetQuery,
  useUpdateInvoicesIdPutMutation,
  useDeleteInvoicesIdDeleteMutation,
  useGetInvoiceInvoicesInvoiceNumberInvoiceNumberGetQuery,
  useGetAllAdjustmentreasonsItemsAdjustmentReasonGetQuery,
  useGetAllTransactiontypesItemsTransactionTypeGetQuery,
  useCreateItemItemsPostMutation,
  useGetAllItemsItemsGetQuery,
  useGetItemItemsIdGetQuery,
  useUpdateItemItemsIdPutMutation,
  useDeleteItemItemsIdDeleteMutation,
  useCreateItemsItemLocationsPostMutation,
  useGetAllItemLocationItemsItemLocationsGetQuery,
  useGetItemsItemLocationsIdGetQuery,
  useUpdateItemsItemLocationsIdPutMutation,
  useDeleteItemsItemLocationsIdDeleteMutation,
  useCreateItemCategoryItemCategoriesPostMutation,
  useGetAllItemCategoriesItemCategoriesGetQuery,
  useGetItemCategoryItemCategoriesIdGetQuery,
  useUpdateItemCategoryItemCategoriesIdPutMutation,
  useDeleteItemCategoryItemCategoriesIdDeleteMutation,
  useGetAllUomTypeUomsUomTypeGetQuery,
  useCreateUomUomsPostMutation,
  useGetAllUomsUomsGetQuery,
  useGetUomUomsIdGetQuery,
  useUpdateUomUomsIdPutMutation,
  useDeleteUomUomsIdDeleteMutation,
  useGetAllItemDimensionTypesItemDimensionsItemDimensionTypeGetQuery,
  useCreateItemDimensionItemDimensionsPostMutation,
  useGetAllItemDimensionsItemDimensionsGetQuery,
  useGetItemDimensionItemDimensionsIdGetQuery,
  useUpdateItemDimensionItemDimensionsIdPutMutation,
  useDeleteItemDimensionItemDimensionsIdDeleteMutation,
  useGetAllItemPriceHistoriesItemPriceHistoriesGetQuery,
  useCreateItemPriceItemPricesPostMutation,
  useGetAllItemPricesItemPricesGetQuery,
  useGetItemPriceItemPricesIdGetQuery,
  useUpdateItemPriceItemPricesIdPutMutation,
  useDeleteItemPriceItemPricesIdDeleteMutation,
  useCreatePhysicalItemAttributePhysicalItemAttributesPostMutation,
  useGetAllPhysicalItemAttributesPhysicalItemAttributesGetQuery,
  useGetPhysicalItemAttributePhysicalItemAttributesIdGetQuery,
  useUpdatePhysicalItemAttributePhysicalItemAttributesIdPutMutation,
  useDeletePhysicalItemAttributePhysicalItemAttributesIdDeleteMutation,
  useCreateServiceItemAttributesPostMutation,
  useGetAllServiceItemAttributeServiceItemAttributesGetQuery,
  useGetServiceItemAttributesIdGetQuery,
  useUpdateServiceItemAttributesIdPutMutation,
  useDeleteServiceItemAttributesIdDeleteMutation,
  useCreateLicenseLicensesPostMutation,
  useGetAllLicensesLicensesGetQuery,
  useGetLicenseLicensesIdGetQuery,
  useUpdateLicenseLicensesIdPutMutation,
  useDeleteLicenseLicensesIdDeleteMutation,
  useCreatePaymentPaymentsPostMutation,
  useGetAllPaymentsPaymentsGetQuery,
  useGetPaymentPaymentsIdGetQuery,
  useUpdatePaymentPaymentsIdPutMutation,
  useDeletePaymentPaymentsIdDeleteMutation,
  useCreatePurchaseOrderPurchaseOrdersPostMutation,
  useGetAllPurchaseOrdersPurchaseOrdersGetQuery,
  useGetPurchaseOrderPurchaseOrdersIdGetQuery,
  useUpdatePurchaseOrderPurchaseOrdersIdPutMutation,
  useDeletePurchaseOrderPurchaseOrdersIdDeleteMutation,
  useCreatePurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsPostMutation,
  useGetAllPurchaseOrderDetailsPurchaseOrdersPurchaseOrderDetailsGetQuery,
  useGetPurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsIdGetQuery,
  useUpdatePurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsIdPutMutation,
  useDeletePurchaseOrderDetailPurchaseOrdersPurchaseOrderDetailsIdDeleteMutation,
  useCreateWorkorderWorkOrdersPostMutation,
  useGetAllWorkOrdersWorkOrdersGetQuery,
  useGetWorkorderWorkOrdersIdGetQuery,
  useUpdateWorkorderWorkOrdersIdPutMutation,
  useDeleteWorkorderWorkOrdersIdDeleteMutation,
  useCreateTaxTaxesPostMutation,
  useGetAllTaxesTaxesGetQuery,
  useGetTaxTaxesIdGetQuery,
  useUpdateTaxTaxesIdPutMutation,
  useDeleteTaxTaxesIdDeleteMutation,
  useCreateLicenseAuthorityLicenseAuthoritiesPostMutation,
  useGetAllLicenseAuthoritiesLicenseAuthoritiesGetQuery,
  useGetLicenseAuthorityLicenseAuthoritiesIdGetQuery,
  useUpdateLicenseAuthorityLicenseAuthoritiesIdPutMutation,
  useDeleteLicenseAuthorityLicenseAuthoritiesIdDeleteMutation,
  useCreateManufacturerManufacturersPostMutation,
  useGetAllManufacturersManufacturersGetQuery,
  useGetManufacturerManufacturersIdGetQuery,
  useUpdateManufacturerManufacturersIdPutMutation,
  useDeleteManufacturerManufacturersIdDeleteMutation,
  useCreatePaymentTermPaymentTermsPostMutation,
  useGetAllPaymentTermsPaymentTermsGetQuery,
  useGetPaymentTermPaymentTermsIdGetQuery,
  useUpdatePaymentTermPaymentTermsIdPutMutation,
  useDeletePaymentTermPaymentTermsIdDeleteMutation,
  useCreateShipmentShipmentsPostMutation,
  useGetAllShipmentsShipmentsGetQuery,
  useGetShipmentShipmentsIdGetQuery,
  useUpdateShipmentShipmentsIdPutMutation,
  useDeleteShipmentShipmentsIdDeleteMutation,
  useCreateShipmentItemShipmentItemsPostMutation,
  useGetAllShipmentItemsShipmentItemsGetQuery,
  useGetShipmentItemShipmentItemsIdGetQuery,
  useUpdateShipmentItemShipmentItemsIdPutMutation,
  useDeleteShipmentItemShipmentItemsIdDeleteMutation,
  useDeleteShipmentAttachmentShipmentAttachmentsShipmentIdShipmentIdFileIdFileIdDeleteMutation,
  useGetAllContractAmendmentContractsAmendmentsGetQuery,
  useGetAllTerminationContractsTerminationReasonsGetQuery,
  useCreateContractContractsPostMutation,
  useGetAllContractsContractsGetQuery,
  useGetContractContractsIdGetQuery,
  useUpdateContractContractsIdPutMutation,
  useDeleteContractContractsIdDeleteMutation,
  useGetAppendicesContractsIdAppendicesGetQuery,
  useCreateAmendmentsContractscontractContractIdAmendmentsPostMutation,
  useCreateTemplateContractsContractIdTemplatePostMutation,
  useCreateFromTemplateContractsFromTemplateTemplateIdPostMutation,
  useCreateAttribiuteOfContractAttribiuteOfContractsPostMutation,
  useGetAllAttribiuteOfContractsAttribiuteOfContractsGetQuery,
  useGetAttribiuteOfContractAttribiuteOfContractsIdGetQuery,
  useUpdateAttribiuteOfContractAttribiuteOfContractsIdPutMutation,
  useDeleteAttribiuteOfContractAttribiuteOfContractsIdDeleteMutation,
  useCreateInventoriesPostMutation,
  useGetAllInventoryInventoriesGetQuery,
  useGetInventoriesIdGetQuery,
  useUpdateInventoriesIdPutMutation,
  useDeleteInventoriesIdDeleteMutation,
  useCreateInventoryAdjustmentsPostMutation,
  useGetAllInventoryAdjustmentInventoryAdjustmentsGetQuery,
  useGetInventoryAdjustmentsIdGetQuery,
  useUpdateInventoryAdjustmentsIdPutMutation,
  useDeleteInventoryAdjustmentsIdDeleteMutation,
  useCreateAttributeOfItemsPostMutation,
  useGetAllAttributeOfItemAttributeOfItemsGetQuery,
  useGetAttributeOfItemsIdGetQuery,
  useUpdateAttributeOfItemsIdPutMutation,
  useDeleteAttributeOfItemsIdDeleteMutation,
  useCreateItemAttributesPostMutation,
  useGetAllItemAttributeItemAttributesGetQuery,
  useGetItemAttributesIdGetQuery,
  useUpdateItemAttributesIdPutMutation,
  useDeleteItemAttributesIdDeleteMutation,
  useCreateContractTemplateContractTemplatesPostMutation,
  useGetAllContractTemplatesContractTemplatesGetQuery,
  useGetContractTemplateContractTemplatesIdGetQuery,
  useUpdateContractTemplateContractTemplatesIdPutMutation,
  useDeleteContractTemplateContractTemplatesIdDeleteMutation,
  useCreateItemRequisitionItemRequisitionsPostMutation,
  useGetAllItemRequisitionsItemRequisitionsGetQuery,
  useGetItemRequisitionItemRequisitionsIdGetQuery,
  useUpdateItemRequisitionItemRequisitionsIdPutMutation,
  useDeleteItemRequisitionItemRequisitionsIdDeleteMutation
} = injectedRtkApi;
