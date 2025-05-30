/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransferServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#certificate TransferServer#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#directory_id TransferServer#directory_id}
  */
  readonly directoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#domain TransferServer#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#endpoint_type TransferServer#endpoint_type}
  */
  readonly endpointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#force_destroy TransferServer#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#function TransferServer#function}
  */
  readonly function?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#host_key TransferServer#host_key}
  */
  readonly hostKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#id TransferServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#identity_provider_type TransferServer#identity_provider_type}
  */
  readonly identityProviderType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#invocation_role TransferServer#invocation_role}
  */
  readonly invocationRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#logging_role TransferServer#logging_role}
  */
  readonly loggingRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#post_authentication_login_banner TransferServer#post_authentication_login_banner}
  */
  readonly postAuthenticationLoginBanner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#pre_authentication_login_banner TransferServer#pre_authentication_login_banner}
  */
  readonly preAuthenticationLoginBanner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#protocols TransferServer#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#security_policy_name TransferServer#security_policy_name}
  */
  readonly securityPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#sftp_authentication_methods TransferServer#sftp_authentication_methods}
  */
  readonly sftpAuthenticationMethods?: string;
  /**
  * This is a set of arns of destinations that will receive structured logs from the transfer server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#structured_log_destinations TransferServer#structured_log_destinations}
  */
  readonly structuredLogDestinations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#tags TransferServer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#tags_all TransferServer#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#url TransferServer#url}
  */
  readonly url?: string;
  /**
  * endpoint_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#endpoint_details TransferServer#endpoint_details}
  */
  readonly endpointDetails?: TransferServerEndpointDetails;
  /**
  * protocol_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#protocol_details TransferServer#protocol_details}
  */
  readonly protocolDetails?: TransferServerProtocolDetails;
  /**
  * s3_storage_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#s3_storage_options TransferServer#s3_storage_options}
  */
  readonly s3StorageOptions?: TransferServerS3StorageOptions;
  /**
  * workflow_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#workflow_details TransferServer#workflow_details}
  */
  readonly workflowDetails?: TransferServerWorkflowDetails;
}
export interface TransferServerEndpointDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#address_allocation_ids TransferServer#address_allocation_ids}
  */
  readonly addressAllocationIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#security_group_ids TransferServer#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#subnet_ids TransferServer#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#vpc_endpoint_id TransferServer#vpc_endpoint_id}
  */
  readonly vpcEndpointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#vpc_id TransferServer#vpc_id}
  */
  readonly vpcId?: string;
}

export function transferServerEndpointDetailsToTerraform(struct?: TransferServerEndpointDetailsOutputReference | TransferServerEndpointDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_allocation_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addressAllocationIds),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    vpc_endpoint_id: cdktf.stringToTerraform(struct!.vpcEndpointId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function transferServerEndpointDetailsToHclTerraform(struct?: TransferServerEndpointDetailsOutputReference | TransferServerEndpointDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_allocation_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addressAllocationIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vpc_endpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcEndpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferServerEndpointDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferServerEndpointDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressAllocationIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressAllocationIds = this._addressAllocationIds;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._vpcEndpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcEndpointId = this._vpcEndpointId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferServerEndpointDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressAllocationIds = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
      this._vpcEndpointId = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressAllocationIds = value.addressAllocationIds;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
      this._vpcEndpointId = value.vpcEndpointId;
      this._vpcId = value.vpcId;
    }
  }

  // address_allocation_ids - computed: false, optional: true, required: false
  private _addressAllocationIds?: string[]; 
  public get addressAllocationIds() {
    return cdktf.Fn.tolist(this.getListAttribute('address_allocation_ids'));
  }
  public set addressAllocationIds(value: string[]) {
    this._addressAllocationIds = value;
  }
  public resetAddressAllocationIds() {
    this._addressAllocationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressAllocationIdsInput() {
    return this._addressAllocationIds;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // vpc_endpoint_id - computed: true, optional: true, required: false
  private _vpcEndpointId?: string; 
  public get vpcEndpointId() {
    return this.getStringAttribute('vpc_endpoint_id');
  }
  public set vpcEndpointId(value: string) {
    this._vpcEndpointId = value;
  }
  public resetVpcEndpointId() {
    this._vpcEndpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdInput() {
    return this._vpcEndpointId;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface TransferServerProtocolDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#as2_transports TransferServer#as2_transports}
  */
  readonly as2Transports?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#passive_ip TransferServer#passive_ip}
  */
  readonly passiveIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#set_stat_option TransferServer#set_stat_option}
  */
  readonly setStatOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#tls_session_resumption_mode TransferServer#tls_session_resumption_mode}
  */
  readonly tlsSessionResumptionMode?: string;
}

export function transferServerProtocolDetailsToTerraform(struct?: TransferServerProtocolDetailsOutputReference | TransferServerProtocolDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as2_transports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.as2Transports),
    passive_ip: cdktf.stringToTerraform(struct!.passiveIp),
    set_stat_option: cdktf.stringToTerraform(struct!.setStatOption),
    tls_session_resumption_mode: cdktf.stringToTerraform(struct!.tlsSessionResumptionMode),
  }
}


export function transferServerProtocolDetailsToHclTerraform(struct?: TransferServerProtocolDetailsOutputReference | TransferServerProtocolDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as2_transports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.as2Transports),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    passive_ip: {
      value: cdktf.stringToHclTerraform(struct!.passiveIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_stat_option: {
      value: cdktf.stringToHclTerraform(struct!.setStatOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_session_resumption_mode: {
      value: cdktf.stringToHclTerraform(struct!.tlsSessionResumptionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferServerProtocolDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferServerProtocolDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._as2Transports !== undefined) {
      hasAnyValues = true;
      internalValueResult.as2Transports = this._as2Transports;
    }
    if (this._passiveIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.passiveIp = this._passiveIp;
    }
    if (this._setStatOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.setStatOption = this._setStatOption;
    }
    if (this._tlsSessionResumptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSessionResumptionMode = this._tlsSessionResumptionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferServerProtocolDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._as2Transports = undefined;
      this._passiveIp = undefined;
      this._setStatOption = undefined;
      this._tlsSessionResumptionMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._as2Transports = value.as2Transports;
      this._passiveIp = value.passiveIp;
      this._setStatOption = value.setStatOption;
      this._tlsSessionResumptionMode = value.tlsSessionResumptionMode;
    }
  }

  // as2_transports - computed: true, optional: true, required: false
  private _as2Transports?: string[]; 
  public get as2Transports() {
    return cdktf.Fn.tolist(this.getListAttribute('as2_transports'));
  }
  public set as2Transports(value: string[]) {
    this._as2Transports = value;
  }
  public resetAs2Transports() {
    this._as2Transports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get as2TransportsInput() {
    return this._as2Transports;
  }

  // passive_ip - computed: true, optional: true, required: false
  private _passiveIp?: string; 
  public get passiveIp() {
    return this.getStringAttribute('passive_ip');
  }
  public set passiveIp(value: string) {
    this._passiveIp = value;
  }
  public resetPassiveIp() {
    this._passiveIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveIpInput() {
    return this._passiveIp;
  }

  // set_stat_option - computed: true, optional: true, required: false
  private _setStatOption?: string; 
  public get setStatOption() {
    return this.getStringAttribute('set_stat_option');
  }
  public set setStatOption(value: string) {
    this._setStatOption = value;
  }
  public resetSetStatOption() {
    this._setStatOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setStatOptionInput() {
    return this._setStatOption;
  }

  // tls_session_resumption_mode - computed: true, optional: true, required: false
  private _tlsSessionResumptionMode?: string; 
  public get tlsSessionResumptionMode() {
    return this.getStringAttribute('tls_session_resumption_mode');
  }
  public set tlsSessionResumptionMode(value: string) {
    this._tlsSessionResumptionMode = value;
  }
  public resetTlsSessionResumptionMode() {
    this._tlsSessionResumptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSessionResumptionModeInput() {
    return this._tlsSessionResumptionMode;
  }
}
export interface TransferServerS3StorageOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#directory_listing_optimization TransferServer#directory_listing_optimization}
  */
  readonly directoryListingOptimization?: string;
}

export function transferServerS3StorageOptionsToTerraform(struct?: TransferServerS3StorageOptionsOutputReference | TransferServerS3StorageOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory_listing_optimization: cdktf.stringToTerraform(struct!.directoryListingOptimization),
  }
}


export function transferServerS3StorageOptionsToHclTerraform(struct?: TransferServerS3StorageOptionsOutputReference | TransferServerS3StorageOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory_listing_optimization: {
      value: cdktf.stringToHclTerraform(struct!.directoryListingOptimization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferServerS3StorageOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferServerS3StorageOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directoryListingOptimization !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryListingOptimization = this._directoryListingOptimization;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferServerS3StorageOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._directoryListingOptimization = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._directoryListingOptimization = value.directoryListingOptimization;
    }
  }

  // directory_listing_optimization - computed: true, optional: true, required: false
  private _directoryListingOptimization?: string; 
  public get directoryListingOptimization() {
    return this.getStringAttribute('directory_listing_optimization');
  }
  public set directoryListingOptimization(value: string) {
    this._directoryListingOptimization = value;
  }
  public resetDirectoryListingOptimization() {
    this._directoryListingOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryListingOptimizationInput() {
    return this._directoryListingOptimization;
  }
}
export interface TransferServerWorkflowDetailsOnPartialUpload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#execution_role TransferServer#execution_role}
  */
  readonly executionRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#workflow_id TransferServer#workflow_id}
  */
  readonly workflowId: string;
}

export function transferServerWorkflowDetailsOnPartialUploadToTerraform(struct?: TransferServerWorkflowDetailsOnPartialUploadOutputReference | TransferServerWorkflowDetailsOnPartialUpload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execution_role: cdktf.stringToTerraform(struct!.executionRole),
    workflow_id: cdktf.stringToTerraform(struct!.workflowId),
  }
}


export function transferServerWorkflowDetailsOnPartialUploadToHclTerraform(struct?: TransferServerWorkflowDetailsOnPartialUploadOutputReference | TransferServerWorkflowDetailsOnPartialUpload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execution_role: {
      value: cdktf.stringToHclTerraform(struct!.executionRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_id: {
      value: cdktf.stringToHclTerraform(struct!.workflowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferServerWorkflowDetailsOnPartialUploadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferServerWorkflowDetailsOnPartialUpload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRole = this._executionRole;
    }
    if (this._workflowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowId = this._workflowId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferServerWorkflowDetailsOnPartialUpload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executionRole = undefined;
      this._workflowId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executionRole = value.executionRole;
      this._workflowId = value.workflowId;
    }
  }

  // execution_role - computed: false, optional: false, required: true
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
  }

  // workflow_id - computed: false, optional: false, required: true
  private _workflowId?: string; 
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
  public set workflowId(value: string) {
    this._workflowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowIdInput() {
    return this._workflowId;
  }
}
export interface TransferServerWorkflowDetailsOnUpload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#execution_role TransferServer#execution_role}
  */
  readonly executionRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#workflow_id TransferServer#workflow_id}
  */
  readonly workflowId: string;
}

export function transferServerWorkflowDetailsOnUploadToTerraform(struct?: TransferServerWorkflowDetailsOnUploadOutputReference | TransferServerWorkflowDetailsOnUpload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execution_role: cdktf.stringToTerraform(struct!.executionRole),
    workflow_id: cdktf.stringToTerraform(struct!.workflowId),
  }
}


export function transferServerWorkflowDetailsOnUploadToHclTerraform(struct?: TransferServerWorkflowDetailsOnUploadOutputReference | TransferServerWorkflowDetailsOnUpload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execution_role: {
      value: cdktf.stringToHclTerraform(struct!.executionRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_id: {
      value: cdktf.stringToHclTerraform(struct!.workflowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferServerWorkflowDetailsOnUploadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferServerWorkflowDetailsOnUpload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionRole = this._executionRole;
    }
    if (this._workflowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowId = this._workflowId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferServerWorkflowDetailsOnUpload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executionRole = undefined;
      this._workflowId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executionRole = value.executionRole;
      this._workflowId = value.workflowId;
    }
  }

  // execution_role - computed: false, optional: false, required: true
  private _executionRole?: string; 
  public get executionRole() {
    return this.getStringAttribute('execution_role');
  }
  public set executionRole(value: string) {
    this._executionRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleInput() {
    return this._executionRole;
  }

  // workflow_id - computed: false, optional: false, required: true
  private _workflowId?: string; 
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
  public set workflowId(value: string) {
    this._workflowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowIdInput() {
    return this._workflowId;
  }
}
export interface TransferServerWorkflowDetails {
  /**
  * on_partial_upload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#on_partial_upload TransferServer#on_partial_upload}
  */
  readonly onPartialUpload?: TransferServerWorkflowDetailsOnPartialUpload;
  /**
  * on_upload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#on_upload TransferServer#on_upload}
  */
  readonly onUpload?: TransferServerWorkflowDetailsOnUpload;
}

export function transferServerWorkflowDetailsToTerraform(struct?: TransferServerWorkflowDetailsOutputReference | TransferServerWorkflowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_partial_upload: transferServerWorkflowDetailsOnPartialUploadToTerraform(struct!.onPartialUpload),
    on_upload: transferServerWorkflowDetailsOnUploadToTerraform(struct!.onUpload),
  }
}


export function transferServerWorkflowDetailsToHclTerraform(struct?: TransferServerWorkflowDetailsOutputReference | TransferServerWorkflowDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_partial_upload: {
      value: transferServerWorkflowDetailsOnPartialUploadToHclTerraform(struct!.onPartialUpload),
      isBlock: true,
      type: "list",
      storageClassType: "TransferServerWorkflowDetailsOnPartialUploadList",
    },
    on_upload: {
      value: transferServerWorkflowDetailsOnUploadToHclTerraform(struct!.onUpload),
      isBlock: true,
      type: "list",
      storageClassType: "TransferServerWorkflowDetailsOnUploadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransferServerWorkflowDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransferServerWorkflowDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onPartialUpload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPartialUpload = this._onPartialUpload?.internalValue;
    }
    if (this._onUpload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onUpload = this._onUpload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransferServerWorkflowDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onPartialUpload.internalValue = undefined;
      this._onUpload.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onPartialUpload.internalValue = value.onPartialUpload;
      this._onUpload.internalValue = value.onUpload;
    }
  }

  // on_partial_upload - computed: false, optional: true, required: false
  private _onPartialUpload = new TransferServerWorkflowDetailsOnPartialUploadOutputReference(this, "on_partial_upload");
  public get onPartialUpload() {
    return this._onPartialUpload;
  }
  public putOnPartialUpload(value: TransferServerWorkflowDetailsOnPartialUpload) {
    this._onPartialUpload.internalValue = value;
  }
  public resetOnPartialUpload() {
    this._onPartialUpload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPartialUploadInput() {
    return this._onPartialUpload.internalValue;
  }

  // on_upload - computed: false, optional: true, required: false
  private _onUpload = new TransferServerWorkflowDetailsOnUploadOutputReference(this, "on_upload");
  public get onUpload() {
    return this._onUpload;
  }
  public putOnUpload(value: TransferServerWorkflowDetailsOnUpload) {
    this._onUpload.internalValue = value;
  }
  public resetOnUpload() {
    this._onUpload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUploadInput() {
    return this._onUpload.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server aws_transfer_server}
*/
export class TransferServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_transfer_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransferServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransferServer to import
  * @param importFromId The id of the existing TransferServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransferServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_transfer_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/transfer_server aws_transfer_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransferServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TransferServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_transfer_server',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.99.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificate = config.certificate;
    this._directoryId = config.directoryId;
    this._domain = config.domain;
    this._endpointType = config.endpointType;
    this._forceDestroy = config.forceDestroy;
    this._function = config.function;
    this._hostKey = config.hostKey;
    this._id = config.id;
    this._identityProviderType = config.identityProviderType;
    this._invocationRole = config.invocationRole;
    this._loggingRole = config.loggingRole;
    this._postAuthenticationLoginBanner = config.postAuthenticationLoginBanner;
    this._preAuthenticationLoginBanner = config.preAuthenticationLoginBanner;
    this._protocols = config.protocols;
    this._securityPolicyName = config.securityPolicyName;
    this._sftpAuthenticationMethods = config.sftpAuthenticationMethods;
    this._structuredLogDestinations = config.structuredLogDestinations;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._url = config.url;
    this._endpointDetails.internalValue = config.endpointDetails;
    this._protocolDetails.internalValue = config.protocolDetails;
    this._s3StorageOptions.internalValue = config.s3StorageOptions;
    this._workflowDetails.internalValue = config.workflowDetails;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // directory_id - computed: false, optional: true, required: false
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  public resetDirectoryId() {
    this._directoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // endpoint_type - computed: false, optional: true, required: false
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  public resetEndpointType() {
    this._endpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
  }

  // function - computed: false, optional: true, required: false
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  public resetFunction() {
    this._function = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }

  // host_key - computed: false, optional: true, required: false
  private _hostKey?: string; 
  public get hostKey() {
    return this.getStringAttribute('host_key');
  }
  public set hostKey(value: string) {
    this._hostKey = value;
  }
  public resetHostKey() {
    this._hostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyInput() {
    return this._hostKey;
  }

  // host_key_fingerprint - computed: true, optional: false, required: false
  public get hostKeyFingerprint() {
    return this.getStringAttribute('host_key_fingerprint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identity_provider_type - computed: false, optional: true, required: false
  private _identityProviderType?: string; 
  public get identityProviderType() {
    return this.getStringAttribute('identity_provider_type');
  }
  public set identityProviderType(value: string) {
    this._identityProviderType = value;
  }
  public resetIdentityProviderType() {
    this._identityProviderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderTypeInput() {
    return this._identityProviderType;
  }

  // invocation_role - computed: false, optional: true, required: false
  private _invocationRole?: string; 
  public get invocationRole() {
    return this.getStringAttribute('invocation_role');
  }
  public set invocationRole(value: string) {
    this._invocationRole = value;
  }
  public resetInvocationRole() {
    this._invocationRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationRoleInput() {
    return this._invocationRole;
  }

  // logging_role - computed: false, optional: true, required: false
  private _loggingRole?: string; 
  public get loggingRole() {
    return this.getStringAttribute('logging_role');
  }
  public set loggingRole(value: string) {
    this._loggingRole = value;
  }
  public resetLoggingRole() {
    this._loggingRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingRoleInput() {
    return this._loggingRole;
  }

  // post_authentication_login_banner - computed: false, optional: true, required: false
  private _postAuthenticationLoginBanner?: string; 
  public get postAuthenticationLoginBanner() {
    return this.getStringAttribute('post_authentication_login_banner');
  }
  public set postAuthenticationLoginBanner(value: string) {
    this._postAuthenticationLoginBanner = value;
  }
  public resetPostAuthenticationLoginBanner() {
    this._postAuthenticationLoginBanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postAuthenticationLoginBannerInput() {
    return this._postAuthenticationLoginBanner;
  }

  // pre_authentication_login_banner - computed: false, optional: true, required: false
  private _preAuthenticationLoginBanner?: string; 
  public get preAuthenticationLoginBanner() {
    return this.getStringAttribute('pre_authentication_login_banner');
  }
  public set preAuthenticationLoginBanner(value: string) {
    this._preAuthenticationLoginBanner = value;
  }
  public resetPreAuthenticationLoginBanner() {
    this._preAuthenticationLoginBanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preAuthenticationLoginBannerInput() {
    return this._preAuthenticationLoginBanner;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // security_policy_name - computed: false, optional: true, required: false
  private _securityPolicyName?: string; 
  public get securityPolicyName() {
    return this.getStringAttribute('security_policy_name');
  }
  public set securityPolicyName(value: string) {
    this._securityPolicyName = value;
  }
  public resetSecurityPolicyName() {
    this._securityPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyNameInput() {
    return this._securityPolicyName;
  }

  // sftp_authentication_methods - computed: true, optional: true, required: false
  private _sftpAuthenticationMethods?: string; 
  public get sftpAuthenticationMethods() {
    return this.getStringAttribute('sftp_authentication_methods');
  }
  public set sftpAuthenticationMethods(value: string) {
    this._sftpAuthenticationMethods = value;
  }
  public resetSftpAuthenticationMethods() {
    this._sftpAuthenticationMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sftpAuthenticationMethodsInput() {
    return this._sftpAuthenticationMethods;
  }

  // structured_log_destinations - computed: false, optional: true, required: false
  private _structuredLogDestinations?: string[]; 
  public get structuredLogDestinations() {
    return cdktf.Fn.tolist(this.getListAttribute('structured_log_destinations'));
  }
  public set structuredLogDestinations(value: string[]) {
    this._structuredLogDestinations = value;
  }
  public resetStructuredLogDestinations() {
    this._structuredLogDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structuredLogDestinationsInput() {
    return this._structuredLogDestinations;
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // endpoint_details - computed: false, optional: true, required: false
  private _endpointDetails = new TransferServerEndpointDetailsOutputReference(this, "endpoint_details");
  public get endpointDetails() {
    return this._endpointDetails;
  }
  public putEndpointDetails(value: TransferServerEndpointDetails) {
    this._endpointDetails.internalValue = value;
  }
  public resetEndpointDetails() {
    this._endpointDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointDetailsInput() {
    return this._endpointDetails.internalValue;
  }

  // protocol_details - computed: false, optional: true, required: false
  private _protocolDetails = new TransferServerProtocolDetailsOutputReference(this, "protocol_details");
  public get protocolDetails() {
    return this._protocolDetails;
  }
  public putProtocolDetails(value: TransferServerProtocolDetails) {
    this._protocolDetails.internalValue = value;
  }
  public resetProtocolDetails() {
    this._protocolDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolDetailsInput() {
    return this._protocolDetails.internalValue;
  }

  // s3_storage_options - computed: false, optional: true, required: false
  private _s3StorageOptions = new TransferServerS3StorageOptionsOutputReference(this, "s3_storage_options");
  public get s3StorageOptions() {
    return this._s3StorageOptions;
  }
  public putS3StorageOptions(value: TransferServerS3StorageOptions) {
    this._s3StorageOptions.internalValue = value;
  }
  public resetS3StorageOptions() {
    this._s3StorageOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3StorageOptionsInput() {
    return this._s3StorageOptions.internalValue;
  }

  // workflow_details - computed: false, optional: true, required: false
  private _workflowDetails = new TransferServerWorkflowDetailsOutputReference(this, "workflow_details");
  public get workflowDetails() {
    return this._workflowDetails;
  }
  public putWorkflowDetails(value: TransferServerWorkflowDetails) {
    this._workflowDetails.internalValue = value;
  }
  public resetWorkflowDetails() {
    this._workflowDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowDetailsInput() {
    return this._workflowDetails.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate: cdktf.stringToTerraform(this._certificate),
      directory_id: cdktf.stringToTerraform(this._directoryId),
      domain: cdktf.stringToTerraform(this._domain),
      endpoint_type: cdktf.stringToTerraform(this._endpointType),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      function: cdktf.stringToTerraform(this._function),
      host_key: cdktf.stringToTerraform(this._hostKey),
      id: cdktf.stringToTerraform(this._id),
      identity_provider_type: cdktf.stringToTerraform(this._identityProviderType),
      invocation_role: cdktf.stringToTerraform(this._invocationRole),
      logging_role: cdktf.stringToTerraform(this._loggingRole),
      post_authentication_login_banner: cdktf.stringToTerraform(this._postAuthenticationLoginBanner),
      pre_authentication_login_banner: cdktf.stringToTerraform(this._preAuthenticationLoginBanner),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      security_policy_name: cdktf.stringToTerraform(this._securityPolicyName),
      sftp_authentication_methods: cdktf.stringToTerraform(this._sftpAuthenticationMethods),
      structured_log_destinations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._structuredLogDestinations),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      url: cdktf.stringToTerraform(this._url),
      endpoint_details: transferServerEndpointDetailsToTerraform(this._endpointDetails.internalValue),
      protocol_details: transferServerProtocolDetailsToTerraform(this._protocolDetails.internalValue),
      s3_storage_options: transferServerS3StorageOptionsToTerraform(this._s3StorageOptions.internalValue),
      workflow_details: transferServerWorkflowDetailsToTerraform(this._workflowDetails.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory_id: {
        value: cdktf.stringToHclTerraform(this._directoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_type: {
        value: cdktf.stringToHclTerraform(this._endpointType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_destroy: {
        value: cdktf.booleanToHclTerraform(this._forceDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      function: {
        value: cdktf.stringToHclTerraform(this._function),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_key: {
        value: cdktf.stringToHclTerraform(this._hostKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_provider_type: {
        value: cdktf.stringToHclTerraform(this._identityProviderType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invocation_role: {
        value: cdktf.stringToHclTerraform(this._invocationRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_role: {
        value: cdktf.stringToHclTerraform(this._loggingRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_authentication_login_banner: {
        value: cdktf.stringToHclTerraform(this._postAuthenticationLoginBanner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_authentication_login_banner: {
        value: cdktf.stringToHclTerraform(this._preAuthenticationLoginBanner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      security_policy_name: {
        value: cdktf.stringToHclTerraform(this._securityPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sftp_authentication_methods: {
        value: cdktf.stringToHclTerraform(this._sftpAuthenticationMethods),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      structured_log_destinations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._structuredLogDestinations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_details: {
        value: transferServerEndpointDetailsToHclTerraform(this._endpointDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransferServerEndpointDetailsList",
      },
      protocol_details: {
        value: transferServerProtocolDetailsToHclTerraform(this._protocolDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransferServerProtocolDetailsList",
      },
      s3_storage_options: {
        value: transferServerS3StorageOptionsToHclTerraform(this._s3StorageOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransferServerS3StorageOptionsList",
      },
      workflow_details: {
        value: transferServerWorkflowDetailsToHclTerraform(this._workflowDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransferServerWorkflowDetailsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
