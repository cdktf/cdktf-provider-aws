// https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LightsailInstanceConfig extends cdktf.TerraformMetaArguments {
  readonly availabilityZone: string;
  readonly blueprintId: string;
  readonly bundleId: string;
  readonly keyPairName?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  readonly userData?: string;
}

// Resource

export class LightsailInstance extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LightsailInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lightsail_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZone = config.availabilityZone;
    this._blueprintId = config.blueprintId;
    this._bundleId = config.bundleId;
    this._keyPairName = config.keyPairName;
    this._name = config.name;
    this._tags = config.tags;
    this._userData = config.userData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone: string;
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone
  }

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId: string;
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId
  }

  // bundle_id - computed: false, optional: false, required: true
  private _bundleId: string;
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId
  }

  // cpu_count - computed: true, optional: false, required: false
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // is_static_ip - computed: true, optional: false, required: false
  public get isStaticIp() {
    return this.getBooleanAttribute('is_static_ip');
  }

  // key_pair_name - computed: false, optional: true, required: false
  private _keyPairName?: string;
  public get keyPairName() {
    return this.getStringAttribute('key_pair_name');
  }
  public set keyPairName(value: string ) {
    this._keyPairName = value;
  }
  public resetKeyPairName() {
    this._keyPairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairNameInput() {
    return this._keyPairName
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

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }

  // ram_size - computed: true, optional: false, required: false
  public get ramSize() {
    return this.getNumberAttribute('ram_size');
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

  // user_data - computed: false, optional: true, required: false
  private _userData?: string;
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string ) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      bundle_id: cdktf.stringToTerraform(this._bundleId),
      key_pair_name: cdktf.stringToTerraform(this._keyPairName),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      user_data: cdktf.stringToTerraform(this._userData),
    };
  }
}
