// https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudhsmV2HsmConfig extends cdktf.TerraformMetaArguments {
  readonly availabilityZone?: string;
  readonly clusterId: string;
  readonly ipAddress?: string;
  readonly subnetId?: string;
  /** timeouts block */
  readonly timeouts?: CloudhsmV2HsmTimeouts;
}
export interface CloudhsmV2HsmTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function cloudhsmV2HsmTimeoutsToTerraform(struct?: CloudhsmV2HsmTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class CloudhsmV2Hsm extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudhsmV2HsmConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudhsm_v2_hsm',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZone = config.availabilityZone;
    this._clusterId = config.clusterId;
    this._ipAddress = config.ipAddress;
    this._subnetId = config.subnetId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
    return this._availabilityZone
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId: string;
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId
  }

  // hsm_eni_id - computed: true, optional: false, required: false
  public get hsmEniId() {
    return this.getStringAttribute('hsm_eni_id');
  }

  // hsm_id - computed: true, optional: false, required: false
  public get hsmId() {
    return this.getStringAttribute('hsm_id');
  }

  // hsm_state - computed: true, optional: false, required: false
  public get hsmState() {
    return this.getStringAttribute('hsm_state');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string;
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudhsmV2HsmTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CloudhsmV2HsmTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      timeouts: cloudhsmV2HsmTimeoutsToTerraform(this._timeouts),
    };
  }
}
