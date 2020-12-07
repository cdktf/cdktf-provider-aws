// https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalacceleratorAcceleratorConfig extends cdktf.TerraformMetaArguments {
  readonly enabled?: boolean;
  readonly ipAddressType?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** attributes block */
  readonly attributes?: GlobalacceleratorAcceleratorAttributes[];
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
  readonly flowLogsEnabled?: boolean;
  readonly flowLogsS3Bucket?: string;
  readonly flowLogsS3Prefix?: string;
}

function globalacceleratorAcceleratorAttributesToTerraform(struct?: GlobalacceleratorAcceleratorAttributes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    flow_logs_enabled: cdktf.booleanToTerraform(struct!.flowLogsEnabled),
    flow_logs_s3_bucket: cdktf.stringToTerraform(struct!.flowLogsS3Bucket),
    flow_logs_s3_prefix: cdktf.stringToTerraform(struct!.flowLogsS3Prefix),
  }
}


// Resource

export class GlobalacceleratorAccelerator extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._attributes = config.attributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
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
  public set ipAddressType(value: string ) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType
  }

  // ip_sets - computed: true, optional: false, required: false
  public ipSets(index: string) {
    return new GlobalacceleratorAcceleratorIpSets(this, 'ip_sets', index);
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: GlobalacceleratorAcceleratorAttributes[];
  public get attributes() {
    return this.interpolationForAttribute('attributes') as any;
  }
  public set attributes(value: GlobalacceleratorAcceleratorAttributes[] ) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes
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
      attributes: cdktf.listMapper(globalacceleratorAcceleratorAttributesToTerraform)(this._attributes),
    };
  }
}
