// https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/globalaccelerator_custom_routing_accelerator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalacceleratorCustomRoutingAcceleratorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/globalaccelerator_custom_routing_accelerator#enabled GlobalacceleratorCustomRoutingAccelerator#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/globalaccelerator_custom_routing_accelerator#id GlobalacceleratorCustomRoutingAccelerator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/globalaccelerator_custom_routing_accelerator#ip_address_type GlobalacceleratorCustomRoutingAccelerator#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/globalaccelerator_custom_routing_accelerator#ip_addresses GlobalacceleratorCustomRoutingAccelerator#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/globalaccelerator_custom_routing_accelerator#name GlobalacceleratorCustomRoutingAccelerator#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/globalaccelerator_custom_routing_accelerator#tags GlobalacceleratorCustomRoutingAccelerator#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/globalaccelerator_custom_routing_accelerator#tags_all GlobalacceleratorCustomRoutingAccelerator#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * attributes block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/globalaccelerator_custom_routing_accelerator#attributes GlobalacceleratorCustomRoutingAccelerator#attributes}
  */
  readonly attributes?: GlobalacceleratorCustomRoutingAcceleratorAttributes;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/globalaccelerator_custom_routing_accelerator#timeouts GlobalacceleratorCustomRoutingAccelerator#timeouts}
  */
  readonly timeouts?: GlobalacceleratorCustomRoutingAcceleratorTimeouts;
}
export interface GlobalacceleratorCustomRoutingAcceleratorIpSets {
}

export function globalacceleratorCustomRoutingAcceleratorIpSetsToTerraform(struct?: GlobalacceleratorCustomRoutingAcceleratorIpSets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GlobalacceleratorCustomRoutingAcceleratorIpSets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalacceleratorCustomRoutingAcceleratorIpSets | undefined) {
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

export class GlobalacceleratorCustomRoutingAcceleratorIpSetsList extends cdktf.ComplexList {

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
  public get(index: number): GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference {
    return new GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GlobalacceleratorCustomRoutingAcceleratorAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/globalaccelerator_custom_routing_accelerator#flow_logs_enabled GlobalacceleratorCustomRoutingAccelerator#flow_logs_enabled}
  */
  readonly flowLogsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/globalaccelerator_custom_routing_accelerator#flow_logs_s3_bucket GlobalacceleratorCustomRoutingAccelerator#flow_logs_s3_bucket}
  */
  readonly flowLogsS3Bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/globalaccelerator_custom_routing_accelerator#flow_logs_s3_prefix GlobalacceleratorCustomRoutingAccelerator#flow_logs_s3_prefix}
  */
  readonly flowLogsS3Prefix?: string;
}

export function globalacceleratorCustomRoutingAcceleratorAttributesToTerraform(struct?: GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference | GlobalacceleratorCustomRoutingAcceleratorAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flow_logs_enabled: cdktf.booleanToTerraform(struct!.flowLogsEnabled),
    flow_logs_s3_bucket: cdktf.stringToTerraform(struct!.flowLogsS3Bucket),
    flow_logs_s3_prefix: cdktf.stringToTerraform(struct!.flowLogsS3Prefix),
  }
}

export class GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GlobalacceleratorCustomRoutingAcceleratorAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flowLogsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowLogsEnabled = this._flowLogsEnabled;
    }
    if (this._flowLogsS3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowLogsS3Bucket = this._flowLogsS3Bucket;
    }
    if (this._flowLogsS3Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowLogsS3Prefix = this._flowLogsS3Prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalacceleratorCustomRoutingAcceleratorAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._flowLogsEnabled = undefined;
      this._flowLogsS3Bucket = undefined;
      this._flowLogsS3Prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._flowLogsEnabled = value.flowLogsEnabled;
      this._flowLogsS3Bucket = value.flowLogsS3Bucket;
      this._flowLogsS3Prefix = value.flowLogsS3Prefix;
    }
  }

  // flow_logs_enabled - computed: false, optional: true, required: false
  private _flowLogsEnabled?: boolean | cdktf.IResolvable; 
  public get flowLogsEnabled() {
    return this.getBooleanAttribute('flow_logs_enabled');
  }
  public set flowLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._flowLogsEnabled = value;
  }
  public resetFlowLogsEnabled() {
    this._flowLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLogsEnabledInput() {
    return this._flowLogsEnabled;
  }

  // flow_logs_s3_bucket - computed: false, optional: true, required: false
  private _flowLogsS3Bucket?: string; 
  public get flowLogsS3Bucket() {
    return this.getStringAttribute('flow_logs_s3_bucket');
  }
  public set flowLogsS3Bucket(value: string) {
    this._flowLogsS3Bucket = value;
  }
  public resetFlowLogsS3Bucket() {
    this._flowLogsS3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLogsS3BucketInput() {
    return this._flowLogsS3Bucket;
  }

  // flow_logs_s3_prefix - computed: false, optional: true, required: false
  private _flowLogsS3Prefix?: string; 
  public get flowLogsS3Prefix() {
    return this.getStringAttribute('flow_logs_s3_prefix');
  }
  public set flowLogsS3Prefix(value: string) {
    this._flowLogsS3Prefix = value;
  }
  public resetFlowLogsS3Prefix() {
    this._flowLogsS3Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLogsS3PrefixInput() {
    return this._flowLogsS3Prefix;
  }
}
export interface GlobalacceleratorCustomRoutingAcceleratorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/globalaccelerator_custom_routing_accelerator#create GlobalacceleratorCustomRoutingAccelerator#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/globalaccelerator_custom_routing_accelerator#update GlobalacceleratorCustomRoutingAccelerator#update}
  */
  readonly update?: string;
}

export function globalacceleratorCustomRoutingAcceleratorTimeoutsToTerraform(struct?: GlobalacceleratorCustomRoutingAcceleratorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalacceleratorCustomRoutingAcceleratorTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalacceleratorCustomRoutingAcceleratorTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/globalaccelerator_custom_routing_accelerator aws_globalaccelerator_custom_routing_accelerator}
*/
export class GlobalacceleratorCustomRoutingAccelerator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_globalaccelerator_custom_routing_accelerator";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.5.0/docs/resources/globalaccelerator_custom_routing_accelerator aws_globalaccelerator_custom_routing_accelerator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalacceleratorCustomRoutingAcceleratorConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalacceleratorCustomRoutingAcceleratorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_globalaccelerator_custom_routing_accelerator',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._ipAddressType = config.ipAddressType;
    this._ipAddresses = config.ipAddresses;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._attributes.internalValue = config.attributes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // ip_sets - computed: true, optional: false, required: false
  private _ipSets = new GlobalacceleratorCustomRoutingAcceleratorIpSetsList(this, "ip_sets", false);
  public get ipSets() {
    return this._ipSets;
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

  // attributes - computed: false, optional: true, required: false
  private _attributes = new GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: GlobalacceleratorCustomRoutingAcceleratorAttributes) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GlobalacceleratorCustomRoutingAcceleratorTimeouts) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ip_address_type: cdktf.stringToTerraform(this._ipAddressType),
      ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAddresses),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      attributes: globalacceleratorCustomRoutingAcceleratorAttributesToTerraform(this._attributes.internalValue),
      timeouts: globalacceleratorCustomRoutingAcceleratorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
