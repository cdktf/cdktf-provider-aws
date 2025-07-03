/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/globalaccelerator_custom_routing_accelerator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#arn DataAwsGlobalacceleratorCustomRoutingAccelerator#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#id DataAwsGlobalacceleratorCustomRoutingAccelerator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#name DataAwsGlobalacceleratorCustomRoutingAccelerator#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#tags DataAwsGlobalacceleratorCustomRoutingAccelerator#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes {
}

export function dataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesToTerraform(struct?: DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesToHclTerraform(struct?: DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flow_logs_enabled - computed: true, optional: false, required: false
  public get flowLogsEnabled() {
    return this.getBooleanAttribute('flow_logs_enabled');
  }

  // flow_logs_s3_bucket - computed: true, optional: false, required: false
  public get flowLogsS3Bucket() {
    return this.getStringAttribute('flow_logs_s3_bucket');
  }

  // flow_logs_s3_prefix - computed: true, optional: false, required: false
  public get flowLogsS3Prefix() {
    return this.getStringAttribute('flow_logs_s3_prefix');
  }
}

export class DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference {
    return new DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets {
}

export function dataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsToTerraform(struct?: DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsToHclTerraform(struct?: DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // ip_family - computed: true, optional: false, required: false
  public get ipFamily() {
    return this.getStringAttribute('ip_family');
  }
}

export class DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference {
    return new DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/globalaccelerator_custom_routing_accelerator aws_globalaccelerator_custom_routing_accelerator}
*/
export class DataAwsGlobalacceleratorCustomRoutingAccelerator extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_globalaccelerator_custom_routing_accelerator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsGlobalacceleratorCustomRoutingAccelerator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsGlobalacceleratorCustomRoutingAccelerator to import
  * @param importFromId The id of the existing DataAwsGlobalacceleratorCustomRoutingAccelerator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/globalaccelerator_custom_routing_accelerator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsGlobalacceleratorCustomRoutingAccelerator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_globalaccelerator_custom_routing_accelerator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/globalaccelerator_custom_routing_accelerator aws_globalaccelerator_custom_routing_accelerator} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsGlobalacceleratorCustomRoutingAcceleratorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_globalaccelerator_custom_routing_accelerator',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.2.0',
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
    this._arn = config.arn;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // attributes - computed: true, optional: false, required: false
  private _attributes = new DataAwsGlobalacceleratorCustomRoutingAcceleratorAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
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

  // ip_address_type - computed: true, optional: false, required: false
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }

  // ip_sets - computed: true, optional: false, required: false
  private _ipSets = new DataAwsGlobalacceleratorCustomRoutingAcceleratorIpSetsList(this, "ip_sets", false);
  public get ipSets() {
    return this._ipSets;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tags - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arn: {
        value: cdktf.stringToHclTerraform(this._arn),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
