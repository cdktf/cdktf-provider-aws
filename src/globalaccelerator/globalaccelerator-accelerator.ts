// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Global Accelerator
*/
export interface GlobalacceleratorAcceleratorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#enabled GlobalacceleratorAccelerator#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#ip_address_type GlobalacceleratorAccelerator#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#name GlobalacceleratorAccelerator#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#tags GlobalacceleratorAccelerator#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#tags_all GlobalacceleratorAccelerator#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * attributes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#attributes GlobalacceleratorAccelerator#attributes}
  */
  readonly attributes?: GlobalacceleratorAcceleratorAttributes;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#timeouts GlobalacceleratorAccelerator#timeouts}
  */
  readonly timeouts?: GlobalacceleratorAcceleratorTimeouts;
}
export class GlobalacceleratorAcceleratorIpSets extends cdktf.ComplexComputedList {

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // ip_family - computed: true, optional: false, required: false
  public get ipFamily() {
    return this.getStringAttribute('ip_family');
  }
}
export interface GlobalacceleratorAcceleratorAttributes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#flow_logs_enabled GlobalacceleratorAccelerator#flow_logs_enabled}
  */
  readonly flowLogsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#flow_logs_s3_bucket GlobalacceleratorAccelerator#flow_logs_s3_bucket}
  */
  readonly flowLogsS3Bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#flow_logs_s3_prefix GlobalacceleratorAccelerator#flow_logs_s3_prefix}
  */
  readonly flowLogsS3Prefix?: string;
}

export function globalacceleratorAcceleratorAttributesToTerraform(struct?: GlobalacceleratorAcceleratorAttributesOutputReference | GlobalacceleratorAcceleratorAttributes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flow_logs_enabled: cdktf.booleanToTerraform(struct!.flowLogsEnabled),
    flow_logs_s3_bucket: cdktf.stringToTerraform(struct!.flowLogsS3Bucket),
    flow_logs_s3_prefix: cdktf.stringToTerraform(struct!.flowLogsS3Prefix),
  }
}

export class GlobalacceleratorAcceleratorAttributesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): GlobalacceleratorAcceleratorAttributes | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._flowLogsEnabled) {
      hasAnyValues = true;
      internalValueResult.flowLogsEnabled = this._flowLogsEnabled;
    }
    if (this._flowLogsS3Bucket) {
      hasAnyValues = true;
      internalValueResult.flowLogsS3Bucket = this._flowLogsS3Bucket;
    }
    if (this._flowLogsS3Prefix) {
      hasAnyValues = true;
      internalValueResult.flowLogsS3Prefix = this._flowLogsS3Prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalacceleratorAcceleratorAttributes | undefined) {
    if (value === undefined) {
      this._flowLogsEnabled = undefined;
      this._flowLogsS3Bucket = undefined;
      this._flowLogsS3Prefix = undefined;
    }
    else {
      this._flowLogsEnabled = value.flowLogsEnabled;
      this._flowLogsS3Bucket = value.flowLogsS3Bucket;
      this._flowLogsS3Prefix = value.flowLogsS3Prefix;
    }
  }

  // flow_logs_enabled - computed: false, optional: true, required: false
  private _flowLogsEnabled?: boolean | cdktf.IResolvable; 
  public get flowLogsEnabled() {
    return this.getBooleanAttribute('flow_logs_enabled') as any;
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
export interface GlobalacceleratorAcceleratorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#create GlobalacceleratorAccelerator#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#update GlobalacceleratorAccelerator#update}
  */
  readonly update?: string;
}

export function globalacceleratorAcceleratorTimeoutsToTerraform(struct?: GlobalacceleratorAcceleratorTimeoutsOutputReference | GlobalacceleratorAcceleratorTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class GlobalacceleratorAcceleratorTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): GlobalacceleratorAcceleratorTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalacceleratorAcceleratorTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._update = undefined;
    }
    else {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html aws_globalaccelerator_accelerator}
*/
export class GlobalacceleratorAccelerator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_globalaccelerator_accelerator";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html aws_globalaccelerator_accelerator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalacceleratorAcceleratorConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalacceleratorAcceleratorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_globalaccelerator_accelerator',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._ipAddressType = config.ipAddressType;
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
    return this.getBooleanAttribute('enabled') as any;
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
  public get id() {
    return this.getStringAttribute('id');
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

  // ip_sets - computed: true, optional: false, required: false
  public ipSets(index: string) {
    return new GlobalacceleratorAcceleratorIpSets(this, 'ip_sets', index);
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _attributes = new GlobalacceleratorAcceleratorAttributesOutputReference(this as any, "attributes", true);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: GlobalacceleratorAcceleratorAttributes) {
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
  private _timeouts = new GlobalacceleratorAcceleratorTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GlobalacceleratorAcceleratorTimeouts) {
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
      ip_address_type: cdktf.stringToTerraform(this._ipAddressType),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      attributes: globalacceleratorAcceleratorAttributesToTerraform(this._attributes.internalValue),
      timeouts: globalacceleratorAcceleratorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
