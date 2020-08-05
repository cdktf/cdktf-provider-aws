// https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_target.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "description": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "optional": true
      },
      "owner_information": {
        "type": "string",
        "optional": true
      },
      "resource_type": {
        "type": "string",
        "required": true
      },
      "window_id": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "targets": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "key": {
              "type": "string",
              "required": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        },
        "min_items": 1,
        "max_items": 5
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SsmMaintenanceWindowTargetConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly name?: string;
  readonly ownerInformation?: string;
  readonly resourceType: string;
  readonly windowId: string;
  /** targets block */
  readonly targets: SsmMaintenanceWindowTargetTargets[];
}
export interface SsmMaintenanceWindowTargetTargets {
  readonly key: string;
  readonly values: string[];
}

// Resource

export class SsmMaintenanceWindowTarget extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SsmMaintenanceWindowTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_maintenance_window_target',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._ownerInformation = config.ownerInformation;
    this._resourceType = config.resourceType;
    this._windowId = config.windowId;
    this._targets = config.targets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // owner_information - computed: false, optional: true, required: false
  private _ownerInformation?: string;
  public get ownerInformation() {
    return this._ownerInformation;
  }
  public set ownerInformation(value: string | undefined) {
    this._ownerInformation = value;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType: string;
  public get resourceType() {
    return this._resourceType;
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }

  // window_id - computed: false, optional: false, required: true
  private _windowId: string;
  public get windowId() {
    return this._windowId;
  }
  public set windowId(value: string) {
    this._windowId = value;
  }

  // targets - computed: false, optional: false, required: true
  private _targets: SsmMaintenanceWindowTargetTargets[];
  public get targets() {
    return this._targets;
  }
  public set targets(value: SsmMaintenanceWindowTargetTargets[]) {
    this._targets = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      owner_information: this._ownerInformation,
      resource_type: this._resourceType,
      window_id: this._windowId,
      targets: this._targets,
    };
  }
}
