/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OdbNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Availability Zone (AZ) where the odb network is located. Changing this will force terraform to create new resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network#availability_zone OdbNetwork#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The AZ ID of the AZ where the ODB network is located. Changing this will force terraform to create new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network#availability_zone_id OdbNetwork#availability_zone_id}
  */
  readonly availabilityZoneId: string;
  /**
  * The CIDR range of the backup subnet for the ODB network. Changing this will force terraform to create new resource.
  * 	Constraints:
  * 	   - Must not overlap with the CIDR range of the client subnet.
  * 	   - Must not overlap with the CIDR ranges of the VPCs that are connected to the
  * 	   ODB network.
  * 	   - Must not use the following CIDR ranges that are reserved by OCI:
  * 	   - 100.106.0.0/16 and 100.107.0.0/16
  * 	   - 169.254.0.0/16
  * 	   - 224.0.0.0 - 239.255.255.255
  * 	   - 240.0.0.0 - 255.255.255.255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network#backup_subnet_cidr OdbNetwork#backup_subnet_cidr}
  */
  readonly backupSubnetCidr: string;
  /**
  * The CIDR notation for the network resource. Changing this will force terraform to create new resource.
  *  Constraints:
  *   	 - Must not overlap with the CIDR range of the backup subnet.
  *    	- Must not overlap with the CIDR ranges of the VPCs that are connected to the
  *    ODB network.
  *   	- Must not use the following CIDR ranges that are reserved by OCI:
  *   	 - 100.106.0.0/16 and 100.107.0.0/16
  *   	 - 169.254.0.0/16
  *    	- 224.0.0.0 - 239.255.255.255
  *    	- 240.0.0.0 - 255.255.255.255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network#client_subnet_cidr OdbNetwork#client_subnet_cidr}
  */
  readonly clientSubnetCidr: string;
  /**
  * The name of the custom domain that the network is located. custom_domain_name and default_dns_prefix both can't be given.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network#custom_domain_name OdbNetwork#custom_domain_name}
  */
  readonly customDomainName?: string;
  /**
  * The default DNS prefix for the network resource. Changing this will force terraform to create new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network#default_dns_prefix OdbNetwork#default_dns_prefix}
  */
  readonly defaultDnsPrefix?: string;
  /**
  * The user-friendly name for the odb network. Changing this will force terraform to create a new resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network#display_name OdbNetwork#display_name}
  */
  readonly displayName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network#region OdbNetwork#region}
  */
  readonly region?: string;
  /**
  * Specifies the configuration for Amazon S3 access from the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network#s3_access OdbNetwork#s3_access}
  */
  readonly s3Access: string;
  /**
  * Specifies the endpoint policy for Amazon S3 access from the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network#s3_policy_document OdbNetwork#s3_policy_document}
  */
  readonly s3PolicyDocument?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network#tags OdbNetwork#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Specifies the configuration for Zero-ETL access from the ODB network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network#zero_etl_access OdbNetwork#zero_etl_access}
  */
  readonly zeroEtlAccess: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network#timeouts OdbNetwork#timeouts}
  */
  readonly timeouts?: OdbNetworkTimeouts;
}
export interface OdbNetworkManagedServicesManagedS3BackupAccess {
}

export function odbNetworkManagedServicesManagedS3BackupAccessToTerraform(struct?: OdbNetworkManagedServicesManagedS3BackupAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function odbNetworkManagedServicesManagedS3BackupAccessToHclTerraform(struct?: OdbNetworkManagedServicesManagedS3BackupAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OdbNetworkManagedServicesManagedS3BackupAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OdbNetworkManagedServicesManagedS3BackupAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbNetworkManagedServicesManagedS3BackupAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_addresses - computed: true, optional: false, required: false
  public get ipv4Addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_addresses'));
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class OdbNetworkManagedServicesManagedS3BackupAccessList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OdbNetworkManagedServicesManagedS3BackupAccessOutputReference {
    return new OdbNetworkManagedServicesManagedS3BackupAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbNetworkManagedServicesS3Access {
}

export function odbNetworkManagedServicesS3AccessToTerraform(struct?: OdbNetworkManagedServicesS3Access): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function odbNetworkManagedServicesS3AccessToHclTerraform(struct?: OdbNetworkManagedServicesS3Access): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OdbNetworkManagedServicesS3AccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OdbNetworkManagedServicesS3Access | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbNetworkManagedServicesS3Access | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // ipv4_addresses - computed: true, optional: false, required: false
  public get ipv4Addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_addresses'));
  }

  // s3_policy_document - computed: true, optional: false, required: false
  public get s3PolicyDocument() {
    return this.getStringAttribute('s3_policy_document');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class OdbNetworkManagedServicesS3AccessList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OdbNetworkManagedServicesS3AccessOutputReference {
    return new OdbNetworkManagedServicesS3AccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbNetworkManagedServicesServiceNetworkEndpoint {
}

export function odbNetworkManagedServicesServiceNetworkEndpointToTerraform(struct?: OdbNetworkManagedServicesServiceNetworkEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function odbNetworkManagedServicesServiceNetworkEndpointToHclTerraform(struct?: OdbNetworkManagedServicesServiceNetworkEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OdbNetworkManagedServicesServiceNetworkEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OdbNetworkManagedServicesServiceNetworkEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbNetworkManagedServicesServiceNetworkEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // vpc_endpoint_id - computed: true, optional: false, required: false
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }

  // vpc_endpoint_type - computed: true, optional: false, required: false
  public get vpcEndpointType() {
    return this.getStringAttribute('vpc_endpoint_type');
  }
}

export class OdbNetworkManagedServicesServiceNetworkEndpointList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OdbNetworkManagedServicesServiceNetworkEndpointOutputReference {
    return new OdbNetworkManagedServicesServiceNetworkEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbNetworkManagedServicesZeroEtlAccess {
}

export function odbNetworkManagedServicesZeroEtlAccessToTerraform(struct?: OdbNetworkManagedServicesZeroEtlAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function odbNetworkManagedServicesZeroEtlAccessToHclTerraform(struct?: OdbNetworkManagedServicesZeroEtlAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OdbNetworkManagedServicesZeroEtlAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OdbNetworkManagedServicesZeroEtlAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbNetworkManagedServicesZeroEtlAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class OdbNetworkManagedServicesZeroEtlAccessList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OdbNetworkManagedServicesZeroEtlAccessOutputReference {
    return new OdbNetworkManagedServicesZeroEtlAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbNetworkManagedServices {
}

export function odbNetworkManagedServicesToTerraform(struct?: OdbNetworkManagedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function odbNetworkManagedServicesToHclTerraform(struct?: OdbNetworkManagedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OdbNetworkManagedServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OdbNetworkManagedServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbNetworkManagedServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // managed_s3_backup_access - computed: true, optional: false, required: false
  private _managedS3BackupAccess = new OdbNetworkManagedServicesManagedS3BackupAccessList(this, "managed_s3_backup_access", false);
  public get managedS3BackupAccess() {
    return this._managedS3BackupAccess;
  }

  // managed_service_ipv4_cidrs - computed: true, optional: false, required: false
  public get managedServiceIpv4Cidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('managed_service_ipv4_cidrs'));
  }

  // resource_gateway_arn - computed: true, optional: false, required: false
  public get resourceGatewayArn() {
    return this.getStringAttribute('resource_gateway_arn');
  }

  // s3_access - computed: true, optional: false, required: false
  private _s3Access = new OdbNetworkManagedServicesS3AccessList(this, "s3_access", false);
  public get s3Access() {
    return this._s3Access;
  }

  // service_network_arn - computed: true, optional: false, required: false
  public get serviceNetworkArn() {
    return this.getStringAttribute('service_network_arn');
  }

  // service_network_endpoint - computed: true, optional: false, required: false
  private _serviceNetworkEndpoint = new OdbNetworkManagedServicesServiceNetworkEndpointList(this, "service_network_endpoint", false);
  public get serviceNetworkEndpoint() {
    return this._serviceNetworkEndpoint;
  }

  // zero_etl_access - computed: true, optional: false, required: false
  private _zeroEtlAccess = new OdbNetworkManagedServicesZeroEtlAccessList(this, "zero_etl_access", false);
  public get zeroEtlAccess() {
    return this._zeroEtlAccess;
  }
}

export class OdbNetworkManagedServicesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OdbNetworkManagedServicesOutputReference {
    return new OdbNetworkManagedServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbNetworkOciDnsForwardingConfigs {
}

export function odbNetworkOciDnsForwardingConfigsToTerraform(struct?: OdbNetworkOciDnsForwardingConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function odbNetworkOciDnsForwardingConfigsToHclTerraform(struct?: OdbNetworkOciDnsForwardingConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OdbNetworkOciDnsForwardingConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OdbNetworkOciDnsForwardingConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbNetworkOciDnsForwardingConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // oci_dns_listener_ip - computed: true, optional: false, required: false
  public get ociDnsListenerIp() {
    return this.getStringAttribute('oci_dns_listener_ip');
  }
}

export class OdbNetworkOciDnsForwardingConfigsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): OdbNetworkOciDnsForwardingConfigsOutputReference {
    return new OdbNetworkOciDnsForwardingConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OdbNetworkTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network#create OdbNetwork#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network#delete OdbNetwork#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network#update OdbNetwork#update}
  */
  readonly update?: string;
}

export function odbNetworkTimeoutsToTerraform(struct?: OdbNetworkTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function odbNetworkTimeoutsToHclTerraform(struct?: OdbNetworkTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OdbNetworkTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OdbNetworkTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OdbNetworkTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network aws_odb_network}
*/
export class OdbNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_odb_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OdbNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OdbNetwork to import
  * @param importFromId The id of the existing OdbNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OdbNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_odb_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/odb_network aws_odb_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OdbNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: OdbNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_odb_network',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.14.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZone = config.availabilityZone;
    this._availabilityZoneId = config.availabilityZoneId;
    this._backupSubnetCidr = config.backupSubnetCidr;
    this._clientSubnetCidr = config.clientSubnetCidr;
    this._customDomainName = config.customDomainName;
    this._defaultDnsPrefix = config.defaultDnsPrefix;
    this._displayName = config.displayName;
    this._region = config.region;
    this._s3Access = config.s3Access;
    this._s3PolicyDocument = config.s3PolicyDocument;
    this._tags = config.tags;
    this._zeroEtlAccess = config.zeroEtlAccess;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // availability_zone_id - computed: false, optional: false, required: true
  private _availabilityZoneId?: string; 
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }
  public set availabilityZoneId(value: string) {
    this._availabilityZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneIdInput() {
    return this._availabilityZoneId;
  }

  // backup_subnet_cidr - computed: false, optional: false, required: true
  private _backupSubnetCidr?: string; 
  public get backupSubnetCidr() {
    return this.getStringAttribute('backup_subnet_cidr');
  }
  public set backupSubnetCidr(value: string) {
    this._backupSubnetCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSubnetCidrInput() {
    return this._backupSubnetCidr;
  }

  // client_subnet_cidr - computed: false, optional: false, required: true
  private _clientSubnetCidr?: string; 
  public get clientSubnetCidr() {
    return this.getStringAttribute('client_subnet_cidr');
  }
  public set clientSubnetCidr(value: string) {
    this._clientSubnetCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSubnetCidrInput() {
    return this._clientSubnetCidr;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_domain_name - computed: false, optional: true, required: false
  private _customDomainName?: string; 
  public get customDomainName() {
    return this.getStringAttribute('custom_domain_name');
  }
  public set customDomainName(value: string) {
    this._customDomainName = value;
  }
  public resetCustomDomainName() {
    this._customDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainNameInput() {
    return this._customDomainName;
  }

  // default_dns_prefix - computed: false, optional: true, required: false
  private _defaultDnsPrefix?: string; 
  public get defaultDnsPrefix() {
    return this.getStringAttribute('default_dns_prefix');
  }
  public set defaultDnsPrefix(value: string) {
    this._defaultDnsPrefix = value;
  }
  public resetDefaultDnsPrefix() {
    this._defaultDnsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDnsPrefixInput() {
    return this._defaultDnsPrefix;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_services - computed: true, optional: false, required: false
  private _managedServices = new OdbNetworkManagedServicesList(this, "managed_services", false);
  public get managedServices() {
    return this._managedServices;
  }

  // oci_dns_forwarding_configs - computed: true, optional: false, required: false
  private _ociDnsForwardingConfigs = new OdbNetworkOciDnsForwardingConfigsList(this, "oci_dns_forwarding_configs", false);
  public get ociDnsForwardingConfigs() {
    return this._ociDnsForwardingConfigs;
  }

  // oci_network_anchor_id - computed: true, optional: false, required: false
  public get ociNetworkAnchorId() {
    return this.getStringAttribute('oci_network_anchor_id');
  }

  // oci_network_anchor_url - computed: true, optional: false, required: false
  public get ociNetworkAnchorUrl() {
    return this.getStringAttribute('oci_network_anchor_url');
  }

  // oci_resource_anchor_name - computed: true, optional: false, required: false
  public get ociResourceAnchorName() {
    return this.getStringAttribute('oci_resource_anchor_name');
  }

  // oci_vcn_id - computed: true, optional: false, required: false
  public get ociVcnId() {
    return this.getStringAttribute('oci_vcn_id');
  }

  // oci_vcn_url - computed: true, optional: false, required: false
  public get ociVcnUrl() {
    return this.getStringAttribute('oci_vcn_url');
  }

  // peered_cidrs - computed: true, optional: false, required: false
  public get peeredCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('peered_cidrs'));
  }

  // percent_progress - computed: true, optional: false, required: false
  public get percentProgress() {
    return this.getNumberAttribute('percent_progress');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // s3_access - computed: false, optional: false, required: true
  private _s3Access?: string; 
  public get s3Access() {
    return this.getStringAttribute('s3_access');
  }
  public set s3Access(value: string) {
    this._s3Access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AccessInput() {
    return this._s3Access;
  }

  // s3_policy_document - computed: false, optional: true, required: false
  private _s3PolicyDocument?: string; 
  public get s3PolicyDocument() {
    return this.getStringAttribute('s3_policy_document');
  }
  public set s3PolicyDocument(value: string) {
    this._s3PolicyDocument = value;
  }
  public resetS3PolicyDocument() {
    this._s3PolicyDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PolicyDocumentInput() {
    return this._s3PolicyDocument;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: false
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // zero_etl_access - computed: false, optional: false, required: true
  private _zeroEtlAccess?: string; 
  public get zeroEtlAccess() {
    return this.getStringAttribute('zero_etl_access');
  }
  public set zeroEtlAccess(value: string) {
    this._zeroEtlAccess = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroEtlAccessInput() {
    return this._zeroEtlAccess;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OdbNetworkTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OdbNetworkTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      availability_zone_id: cdktf.stringToTerraform(this._availabilityZoneId),
      backup_subnet_cidr: cdktf.stringToTerraform(this._backupSubnetCidr),
      client_subnet_cidr: cdktf.stringToTerraform(this._clientSubnetCidr),
      custom_domain_name: cdktf.stringToTerraform(this._customDomainName),
      default_dns_prefix: cdktf.stringToTerraform(this._defaultDnsPrefix),
      display_name: cdktf.stringToTerraform(this._displayName),
      region: cdktf.stringToTerraform(this._region),
      s3_access: cdktf.stringToTerraform(this._s3Access),
      s3_policy_document: cdktf.stringToTerraform(this._s3PolicyDocument),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      zero_etl_access: cdktf.stringToTerraform(this._zeroEtlAccess),
      timeouts: odbNetworkTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone_id: {
        value: cdktf.stringToHclTerraform(this._availabilityZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_subnet_cidr: {
        value: cdktf.stringToHclTerraform(this._backupSubnetCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_subnet_cidr: {
        value: cdktf.stringToHclTerraform(this._clientSubnetCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_domain_name: {
        value: cdktf.stringToHclTerraform(this._customDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_dns_prefix: {
        value: cdktf.stringToHclTerraform(this._defaultDnsPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_access: {
        value: cdktf.stringToHclTerraform(this._s3Access),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_policy_document: {
        value: cdktf.stringToHclTerraform(this._s3PolicyDocument),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      zero_etl_access: {
        value: cdktf.stringToHclTerraform(this._zeroEtlAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: odbNetworkTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OdbNetworkTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
