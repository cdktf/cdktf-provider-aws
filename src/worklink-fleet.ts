// https://www.terraform.io/docs/providers/aws/r/worklink_fleet.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "audit_stream_arn": {
        "type": "string",
        "optional": true
      },
      "company_code": {
        "type": "string",
        "computed": true
      },
      "created_time": {
        "type": "string",
        "computed": true
      },
      "device_ca_certificate": {
        "type": "string",
        "optional": true
      },
      "display_name": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "last_updated_time": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "optimize_for_end_user_location": {
        "type": "bool",
        "optional": true
      }
    },
    "block_types": {
      "identity_provider": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "saml_metadata": {
              "type": "string",
              "required": true
            },
            "type": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "network": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "security_group_ids": {
              "type": [
                "set",
                "string"
              ],
              "required": true
            },
            "subnet_ids": {
              "type": [
                "set",
                "string"
              ],
              "required": true
            },
            "vpc_id": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface WorklinkFleetConfig extends TerraformMetaArguments {
  readonly auditStreamArn?: string;
  readonly deviceCaCertificate?: string;
  readonly displayName?: string;
  readonly name: string;
  readonly optimizeForEndUserLocation?: boolean;
  /** identity_provider block */
  readonly identityProvider?: WorklinkFleetIdentityProvider[];
  /** network block */
  readonly network?: WorklinkFleetNetwork[];
}
export interface WorklinkFleetIdentityProvider {
  readonly samlMetadata: string;
  readonly type: string;
}
export interface WorklinkFleetNetwork {
  readonly securityGroupIds: string[];
  readonly subnetIds: string[];
  readonly vpcId: string;
}

// Resource

export class WorklinkFleet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: WorklinkFleetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_worklink_fleet',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._auditStreamArn = config.auditStreamArn;
    this._deviceCaCertificate = config.deviceCaCertificate;
    this._displayName = config.displayName;
    this._name = config.name;
    this._optimizeForEndUserLocation = config.optimizeForEndUserLocation;
    this._identityProvider = config.identityProvider;
    this._network = config.network;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // audit_stream_arn - computed: false, optional: true, required: false
  private _auditStreamArn?: string;
  public get auditStreamArn() {
    return this._auditStreamArn;
  }
  public set auditStreamArn(value: string | undefined) {
    this._auditStreamArn = value;
  }

  // company_code - computed: true, optional: false, required: true
  public get companyCode() {
    return this.getStringAttribute('company_code');
  }

  // created_time - computed: true, optional: false, required: true
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // device_ca_certificate - computed: false, optional: true, required: false
  private _deviceCaCertificate?: string;
  public get deviceCaCertificate() {
    return this._deviceCaCertificate;
  }
  public set deviceCaCertificate(value: string | undefined) {
    this._deviceCaCertificate = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_updated_time - computed: true, optional: false, required: true
  public get lastUpdatedTime() {
    return this.getStringAttribute('last_updated_time');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // optimize_for_end_user_location - computed: false, optional: true, required: false
  private _optimizeForEndUserLocation?: boolean;
  public get optimizeForEndUserLocation() {
    return this._optimizeForEndUserLocation;
  }
  public set optimizeForEndUserLocation(value: boolean | undefined) {
    this._optimizeForEndUserLocation = value;
  }

  // identity_provider - computed: false, optional: true, required: false
  private _identityProvider?: WorklinkFleetIdentityProvider[];
  public get identityProvider() {
    return this._identityProvider;
  }
  public set identityProvider(value: WorklinkFleetIdentityProvider[] | undefined) {
    this._identityProvider = value;
  }

  // network - computed: false, optional: true, required: false
  private _network?: WorklinkFleetNetwork[];
  public get network() {
    return this._network;
  }
  public set network(value: WorklinkFleetNetwork[] | undefined) {
    this._network = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_stream_arn: this._auditStreamArn,
      device_ca_certificate: this._deviceCaCertificate,
      display_name: this._displayName,
      name: this._name,
      optimize_for_end_user_location: this._optimizeForEndUserLocation,
      identity_provider: this._identityProvider,
      network: this._network,
    };
  }
}
