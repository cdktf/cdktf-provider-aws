/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/finspace_kx_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FinspaceKxEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/finspace_kx_environment#description FinspaceKxEnvironment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/finspace_kx_environment#kms_key_id FinspaceKxEnvironment#kms_key_id}
  */
  readonly kmsKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/finspace_kx_environment#name FinspaceKxEnvironment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/finspace_kx_environment#tags FinspaceKxEnvironment#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/finspace_kx_environment#tags_all FinspaceKxEnvironment#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * custom_dns_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/finspace_kx_environment#custom_dns_configuration FinspaceKxEnvironment#custom_dns_configuration}
  */
  readonly customDnsConfiguration?: FinspaceKxEnvironmentCustomDnsConfiguration[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/finspace_kx_environment#timeouts FinspaceKxEnvironment#timeouts}
  */
  readonly timeouts?: FinspaceKxEnvironmentTimeouts;
  /**
  * transit_gateway_configuration block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/finspace_kx_environment#transit_gateway_configuration FinspaceKxEnvironment#transit_gateway_configuration}
  */
  readonly transitGatewayConfiguration?: FinspaceKxEnvironmentTransitGatewayConfiguration;
}
export interface FinspaceKxEnvironmentCustomDnsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/finspace_kx_environment#custom_dns_server_ip FinspaceKxEnvironment#custom_dns_server_ip}
  */
  readonly customDnsServerIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/finspace_kx_environment#custom_dns_server_name FinspaceKxEnvironment#custom_dns_server_name}
  */
  readonly customDnsServerName: string;
}

export function finspaceKxEnvironmentCustomDnsConfigurationToTerraform(struct?: FinspaceKxEnvironmentCustomDnsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_dns_server_ip: cdktf.stringToTerraform(struct!.customDnsServerIp),
    custom_dns_server_name: cdktf.stringToTerraform(struct!.customDnsServerName),
  }
}

export class FinspaceKxEnvironmentCustomDnsConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FinspaceKxEnvironmentCustomDnsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customDnsServerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDnsServerIp = this._customDnsServerIp;
    }
    if (this._customDnsServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDnsServerName = this._customDnsServerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FinspaceKxEnvironmentCustomDnsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customDnsServerIp = undefined;
      this._customDnsServerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customDnsServerIp = value.customDnsServerIp;
      this._customDnsServerName = value.customDnsServerName;
    }
  }

  // custom_dns_server_ip - computed: false, optional: false, required: true
  private _customDnsServerIp?: string; 
  public get customDnsServerIp() {
    return this.getStringAttribute('custom_dns_server_ip');
  }
  public set customDnsServerIp(value: string) {
    this._customDnsServerIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customDnsServerIpInput() {
    return this._customDnsServerIp;
  }

  // custom_dns_server_name - computed: false, optional: false, required: true
  private _customDnsServerName?: string; 
  public get customDnsServerName() {
    return this.getStringAttribute('custom_dns_server_name');
  }
  public set customDnsServerName(value: string) {
    this._customDnsServerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customDnsServerNameInput() {
    return this._customDnsServerName;
  }
}

export class FinspaceKxEnvironmentCustomDnsConfigurationList extends cdktf.ComplexList {
  public internalValue? : FinspaceKxEnvironmentCustomDnsConfiguration[] | cdktf.IResolvable

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
  public get(index: number): FinspaceKxEnvironmentCustomDnsConfigurationOutputReference {
    return new FinspaceKxEnvironmentCustomDnsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FinspaceKxEnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/finspace_kx_environment#create FinspaceKxEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/finspace_kx_environment#delete FinspaceKxEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/finspace_kx_environment#update FinspaceKxEnvironment#update}
  */
  readonly update?: string;
}

export function finspaceKxEnvironmentTimeoutsToTerraform(struct?: FinspaceKxEnvironmentTimeouts | cdktf.IResolvable): any {
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

export class FinspaceKxEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FinspaceKxEnvironmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FinspaceKxEnvironmentTimeouts | cdktf.IResolvable | undefined) {
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
export interface FinspaceKxEnvironmentTransitGatewayConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/finspace_kx_environment#routable_cidr_space FinspaceKxEnvironment#routable_cidr_space}
  */
  readonly routableCidrSpace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/finspace_kx_environment#transit_gateway_id FinspaceKxEnvironment#transit_gateway_id}
  */
  readonly transitGatewayId: string;
}

export function finspaceKxEnvironmentTransitGatewayConfigurationToTerraform(struct?: FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference | FinspaceKxEnvironmentTransitGatewayConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routable_cidr_space: cdktf.stringToTerraform(struct!.routableCidrSpace),
    transit_gateway_id: cdktf.stringToTerraform(struct!.transitGatewayId),
  }
}

export class FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FinspaceKxEnvironmentTransitGatewayConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routableCidrSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.routableCidrSpace = this._routableCidrSpace;
    }
    if (this._transitGatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitGatewayId = this._transitGatewayId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FinspaceKxEnvironmentTransitGatewayConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._routableCidrSpace = undefined;
      this._transitGatewayId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._routableCidrSpace = value.routableCidrSpace;
      this._transitGatewayId = value.transitGatewayId;
    }
  }

  // routable_cidr_space - computed: false, optional: false, required: true
  private _routableCidrSpace?: string; 
  public get routableCidrSpace() {
    return this.getStringAttribute('routable_cidr_space');
  }
  public set routableCidrSpace(value: string) {
    this._routableCidrSpace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routableCidrSpaceInput() {
    return this._routableCidrSpace;
  }

  // transit_gateway_id - computed: false, optional: false, required: true
  private _transitGatewayId?: string; 
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/finspace_kx_environment aws_finspace_kx_environment}
*/
export class FinspaceKxEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_finspace_kx_environment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/finspace_kx_environment aws_finspace_kx_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FinspaceKxEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: FinspaceKxEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_finspace_kx_environment',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.5.0',
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
    this._description = config.description;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._customDnsConfiguration.internalValue = config.customDnsConfiguration;
    this._timeouts.internalValue = config.timeouts;
    this._transitGatewayConfiguration.internalValue = config.transitGatewayConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // infrastructure_account_id - computed: true, optional: false, required: false
  public get infrastructureAccountId() {
    return this.getStringAttribute('infrastructure_account_id');
  }

  // kms_key_id - computed: false, optional: false, required: true
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // last_modified_timestamp - computed: true, optional: false, required: false
  public get lastModifiedTimestamp() {
    return this.getStringAttribute('last_modified_timestamp');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // custom_dns_configuration - computed: false, optional: true, required: false
  private _customDnsConfiguration = new FinspaceKxEnvironmentCustomDnsConfigurationList(this, "custom_dns_configuration", false);
  public get customDnsConfiguration() {
    return this._customDnsConfiguration;
  }
  public putCustomDnsConfiguration(value: FinspaceKxEnvironmentCustomDnsConfiguration[] | cdktf.IResolvable) {
    this._customDnsConfiguration.internalValue = value;
  }
  public resetCustomDnsConfiguration() {
    this._customDnsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDnsConfigurationInput() {
    return this._customDnsConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FinspaceKxEnvironmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FinspaceKxEnvironmentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // transit_gateway_configuration - computed: false, optional: true, required: false
  private _transitGatewayConfiguration = new FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference(this, "transit_gateway_configuration");
  public get transitGatewayConfiguration() {
    return this._transitGatewayConfiguration;
  }
  public putTransitGatewayConfiguration(value: FinspaceKxEnvironmentTransitGatewayConfiguration) {
    this._transitGatewayConfiguration.internalValue = value;
  }
  public resetTransitGatewayConfiguration() {
    this._transitGatewayConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayConfigurationInput() {
    return this._transitGatewayConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      custom_dns_configuration: cdktf.listMapper(finspaceKxEnvironmentCustomDnsConfigurationToTerraform, true)(this._customDnsConfiguration.internalValue),
      timeouts: finspaceKxEnvironmentTimeoutsToTerraform(this._timeouts.internalValue),
      transit_gateway_configuration: finspaceKxEnvironmentTransitGatewayConfigurationToTerraform(this._transitGatewayConfiguration.internalValue),
    };
  }
}
