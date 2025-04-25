/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/securitylake_custom_log_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecuritylakeCustomLogSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/securitylake_custom_log_source#event_classes SecuritylakeCustomLogSource#event_classes}
  */
  readonly eventClasses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/securitylake_custom_log_source#source_name SecuritylakeCustomLogSource#source_name}
  */
  readonly sourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/securitylake_custom_log_source#source_version SecuritylakeCustomLogSource#source_version}
  */
  readonly sourceVersion?: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/securitylake_custom_log_source#configuration SecuritylakeCustomLogSource#configuration}
  */
  readonly configuration?: SecuritylakeCustomLogSourceConfiguration[] | cdktf.IResolvable;
}
export interface SecuritylakeCustomLogSourceAttributes {
}

export function securitylakeCustomLogSourceAttributesToTerraform(struct?: SecuritylakeCustomLogSourceAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securitylakeCustomLogSourceAttributesToHclTerraform(struct?: SecuritylakeCustomLogSourceAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecuritylakeCustomLogSourceAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritylakeCustomLogSourceAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritylakeCustomLogSourceAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crawler_arn - computed: true, optional: false, required: false
  public get crawlerArn() {
    return this.getStringAttribute('crawler_arn');
  }

  // database_arn - computed: true, optional: false, required: false
  public get databaseArn() {
    return this.getStringAttribute('database_arn');
  }

  // table_arn - computed: true, optional: false, required: false
  public get tableArn() {
    return this.getStringAttribute('table_arn');
  }
}

export class SecuritylakeCustomLogSourceAttributesList extends cdktf.ComplexList {

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
  public get(index: number): SecuritylakeCustomLogSourceAttributesOutputReference {
    return new SecuritylakeCustomLogSourceAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritylakeCustomLogSourceProviderDetails {
}

export function securitylakeCustomLogSourceProviderDetailsToTerraform(struct?: SecuritylakeCustomLogSourceProviderDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securitylakeCustomLogSourceProviderDetailsToHclTerraform(struct?: SecuritylakeCustomLogSourceProviderDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecuritylakeCustomLogSourceProviderDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritylakeCustomLogSourceProviderDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritylakeCustomLogSourceProviderDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}

export class SecuritylakeCustomLogSourceProviderDetailsList extends cdktf.ComplexList {

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
  public get(index: number): SecuritylakeCustomLogSourceProviderDetailsOutputReference {
    return new SecuritylakeCustomLogSourceProviderDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/securitylake_custom_log_source#role_arn SecuritylakeCustomLogSource#role_arn}
  */
  readonly roleArn: string;
}

export function securitylakeCustomLogSourceConfigurationCrawlerConfigurationToTerraform(struct?: SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function securitylakeCustomLogSourceConfigurationCrawlerConfigurationToHclTerraform(struct?: SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
    }
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList extends cdktf.ComplexList {
  public internalValue? : SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration[] | cdktf.IResolvable

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
  public get(index: number): SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference {
    return new SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritylakeCustomLogSourceConfigurationProviderIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/securitylake_custom_log_source#external_id SecuritylakeCustomLogSource#external_id}
  */
  readonly externalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/securitylake_custom_log_source#principal SecuritylakeCustomLogSource#principal}
  */
  readonly principal: string;
}

export function securitylakeCustomLogSourceConfigurationProviderIdentityToTerraform(struct?: SecuritylakeCustomLogSourceConfigurationProviderIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    principal: cdktf.stringToTerraform(struct!.principal),
  }
}


export function securitylakeCustomLogSourceConfigurationProviderIdentityToHclTerraform(struct?: SecuritylakeCustomLogSourceConfigurationProviderIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: cdktf.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SecuritylakeCustomLogSourceConfigurationProviderIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritylakeCustomLogSourceConfigurationProviderIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalId = undefined;
      this._principal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalId = value.externalId;
      this._principal = value.principal;
    }
  }

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // principal - computed: false, optional: false, required: true
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }
}

export class SecuritylakeCustomLogSourceConfigurationProviderIdentityList extends cdktf.ComplexList {
  public internalValue? : SecuritylakeCustomLogSourceConfigurationProviderIdentity[] | cdktf.IResolvable

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
  public get(index: number): SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference {
    return new SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritylakeCustomLogSourceConfiguration {
  /**
  * crawler_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/securitylake_custom_log_source#crawler_configuration SecuritylakeCustomLogSource#crawler_configuration}
  */
  readonly crawlerConfiguration?: SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration[] | cdktf.IResolvable;
  /**
  * provider_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/securitylake_custom_log_source#provider_identity SecuritylakeCustomLogSource#provider_identity}
  */
  readonly providerIdentity?: SecuritylakeCustomLogSourceConfigurationProviderIdentity[] | cdktf.IResolvable;
}

export function securitylakeCustomLogSourceConfigurationToTerraform(struct?: SecuritylakeCustomLogSourceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crawler_configuration: cdktf.listMapper(securitylakeCustomLogSourceConfigurationCrawlerConfigurationToTerraform, true)(struct!.crawlerConfiguration),
    provider_identity: cdktf.listMapper(securitylakeCustomLogSourceConfigurationProviderIdentityToTerraform, true)(struct!.providerIdentity),
  }
}


export function securitylakeCustomLogSourceConfigurationToHclTerraform(struct?: SecuritylakeCustomLogSourceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crawler_configuration: {
      value: cdktf.listMapperHcl(securitylakeCustomLogSourceConfigurationCrawlerConfigurationToHclTerraform, true)(struct!.crawlerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList",
    },
    provider_identity: {
      value: cdktf.listMapperHcl(securitylakeCustomLogSourceConfigurationProviderIdentityToHclTerraform, true)(struct!.providerIdentity),
      isBlock: true,
      type: "list",
      storageClassType: "SecuritylakeCustomLogSourceConfigurationProviderIdentityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritylakeCustomLogSourceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SecuritylakeCustomLogSourceConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crawlerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlerConfiguration = this._crawlerConfiguration?.internalValue;
    }
    if (this._providerIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerIdentity = this._providerIdentity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritylakeCustomLogSourceConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = undefined;
      this._providerIdentity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = value.crawlerConfiguration;
      this._providerIdentity.internalValue = value.providerIdentity;
    }
  }

  // crawler_configuration - computed: false, optional: true, required: false
  private _crawlerConfiguration = new SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList(this, "crawler_configuration", false);
  public get crawlerConfiguration() {
    return this._crawlerConfiguration;
  }
  public putCrawlerConfiguration(value: SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration[] | cdktf.IResolvable) {
    this._crawlerConfiguration.internalValue = value;
  }
  public resetCrawlerConfiguration() {
    this._crawlerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerConfigurationInput() {
    return this._crawlerConfiguration.internalValue;
  }

  // provider_identity - computed: false, optional: true, required: false
  private _providerIdentity = new SecuritylakeCustomLogSourceConfigurationProviderIdentityList(this, "provider_identity", false);
  public get providerIdentity() {
    return this._providerIdentity;
  }
  public putProviderIdentity(value: SecuritylakeCustomLogSourceConfigurationProviderIdentity[] | cdktf.IResolvable) {
    this._providerIdentity.internalValue = value;
  }
  public resetProviderIdentity() {
    this._providerIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdentityInput() {
    return this._providerIdentity.internalValue;
  }
}

export class SecuritylakeCustomLogSourceConfigurationList extends cdktf.ComplexList {
  public internalValue? : SecuritylakeCustomLogSourceConfiguration[] | cdktf.IResolvable

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
  public get(index: number): SecuritylakeCustomLogSourceConfigurationOutputReference {
    return new SecuritylakeCustomLogSourceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/securitylake_custom_log_source aws_securitylake_custom_log_source}
*/
export class SecuritylakeCustomLogSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securitylake_custom_log_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecuritylakeCustomLogSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecuritylakeCustomLogSource to import
  * @param importFromId The id of the existing SecuritylakeCustomLogSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/securitylake_custom_log_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecuritylakeCustomLogSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_securitylake_custom_log_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/resources/securitylake_custom_log_source aws_securitylake_custom_log_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecuritylakeCustomLogSourceConfig
  */
  public constructor(scope: Construct, id: string, config: SecuritylakeCustomLogSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securitylake_custom_log_source',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.96.0',
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
    this._eventClasses = config.eventClasses;
    this._sourceName = config.sourceName;
    this._sourceVersion = config.sourceVersion;
    this._configuration.internalValue = config.configuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: true, optional: false, required: false
  private _attributes = new SecuritylakeCustomLogSourceAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }

  // event_classes - computed: false, optional: true, required: false
  private _eventClasses?: string[]; 
  public get eventClasses() {
    return cdktf.Fn.tolist(this.getListAttribute('event_classes'));
  }
  public set eventClasses(value: string[]) {
    this._eventClasses = value;
  }
  public resetEventClasses() {
    this._eventClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventClassesInput() {
    return this._eventClasses;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // provider_details - computed: true, optional: false, required: false
  private _providerDetails = new SecuritylakeCustomLogSourceProviderDetailsList(this, "provider_details", false);
  public get providerDetails() {
    return this._providerDetails;
  }

  // source_name - computed: false, optional: false, required: true
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // source_version - computed: true, optional: true, required: false
  private _sourceVersion?: string; 
  public get sourceVersion() {
    return this.getStringAttribute('source_version');
  }
  public set sourceVersion(value: string) {
    this._sourceVersion = value;
  }
  public resetSourceVersion() {
    this._sourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVersionInput() {
    return this._sourceVersion;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new SecuritylakeCustomLogSourceConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SecuritylakeCustomLogSourceConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._eventClasses),
      source_name: cdktf.stringToTerraform(this._sourceName),
      source_version: cdktf.stringToTerraform(this._sourceVersion),
      configuration: cdktf.listMapper(securitylakeCustomLogSourceConfigurationToTerraform, true)(this._configuration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      event_classes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._eventClasses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_name: {
        value: cdktf.stringToHclTerraform(this._sourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_version: {
        value: cdktf.stringToHclTerraform(this._sourceVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: cdktf.listMapperHcl(securitylakeCustomLogSourceConfigurationToHclTerraform, true)(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecuritylakeCustomLogSourceConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
