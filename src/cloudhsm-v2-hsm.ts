// https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "availability_zone": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "cluster_id": {
        "type": "string",
        "required": true
      },
      "hsm_eni_id": {
        "type": "string",
        "computed": true
      },
      "hsm_id": {
        "type": "string",
        "computed": true
      },
      "hsm_state": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ip_address": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "subnet_id": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CloudhsmV2HsmConfig extends TerraformMetaArguments {
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

// Resource

export class CloudhsmV2Hsm extends TerraformResource {

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
    return this._availabilityZone ?? this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string | undefined) {
    this._availabilityZone = value;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId: string;
  public get clusterId() {
    return this._clusterId;
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }

  // hsm_eni_id - computed: true, optional: false, required: true
  public get hsmEniId() {
    return this.getStringAttribute('hsm_eni_id');
  }

  // hsm_id - computed: true, optional: false, required: true
  public get hsmId() {
    return this.getStringAttribute('hsm_id');
  }

  // hsm_state - computed: true, optional: false, required: true
  public get hsmState() {
    return this.getStringAttribute('hsm_state');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string;
  public get ipAddress() {
    return this._ipAddress ?? this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string | undefined) {
    this._ipAddress = value;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string;
  public get subnetId() {
    return this._subnetId ?? this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudhsmV2HsmTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CloudhsmV2HsmTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zone: this._availabilityZone,
      cluster_id: this._clusterId,
      ip_address: this._ipAddress,
      subnet_id: this._subnetId,
      timeouts: this._timeouts,
    };
  }
}
