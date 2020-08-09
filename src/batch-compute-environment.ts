// https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html
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
      "compute_environment_name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "compute_environment_name_prefix": {
        "type": "string",
        "optional": true
      },
      "ecc_cluster_arn": {
        "type": "string",
        "computed": true
      },
      "ecs_cluster_arn": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "service_role": {
        "type": "string",
        "required": true
      },
      "state": {
        "type": "string",
        "optional": true
      },
      "status": {
        "type": "string",
        "computed": true
      },
      "status_reason": {
        "type": "string",
        "computed": true
      },
      "type": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "compute_resources": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "allocation_strategy": {
              "type": "string",
              "optional": true
            },
            "bid_percentage": {
              "type": "number",
              "optional": true
            },
            "desired_vcpus": {
              "type": "number",
              "optional": true,
              "computed": true
            },
            "ec2_key_pair": {
              "type": "string",
              "optional": true
            },
            "image_id": {
              "type": "string",
              "optional": true
            },
            "instance_role": {
              "type": "string",
              "required": true
            },
            "instance_type": {
              "type": [
                "set",
                "string"
              ],
              "required": true
            },
            "max_vcpus": {
              "type": "number",
              "required": true
            },
            "min_vcpus": {
              "type": "number",
              "required": true
            },
            "security_group_ids": {
              "type": [
                "set",
                "string"
              ],
              "required": true
            },
            "spot_iam_fleet_role": {
              "type": "string",
              "optional": true
            },
            "subnets": {
              "type": [
                "set",
                "string"
              ],
              "required": true
            },
            "tags": {
              "type": [
                "map",
                "string"
              ],
              "optional": true
            },
            "type": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "launch_template": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "launch_template_id": {
                    "type": "string",
                    "optional": true
                  },
                  "launch_template_name": {
                    "type": "string",
                    "optional": true
                  },
                  "version": {
                    "type": "string",
                    "optional": true
                  }
                }
              },
              "max_items": 1
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

export interface BatchComputeEnvironmentConfig extends TerraformMetaArguments {
  readonly computeEnvironmentName?: string;
  readonly computeEnvironmentNamePrefix?: string;
  readonly serviceRole: string;
  readonly state?: string;
  readonly type: string;
  /** compute_resources block */
  readonly computeResources?: BatchComputeEnvironmentComputeResources[];
}
export interface BatchComputeEnvironmentComputeResourcesLaunchTemplate {
  readonly launchTemplateId?: string;
  readonly launchTemplateName?: string;
  readonly version?: string;
}
export interface BatchComputeEnvironmentComputeResources {
  readonly allocationStrategy?: string;
  readonly bidPercentage?: number;
  readonly desiredVcpus?: number;
  readonly ec2KeyPair?: string;
  readonly imageId?: string;
  readonly instanceRole: string;
  readonly instanceType: string[];
  readonly maxVcpus: number;
  readonly minVcpus: number;
  readonly securityGroupIds: string[];
  readonly spotIamFleetRole?: string;
  readonly subnets: string[];
  readonly tags?: { [key: string]: string };
  readonly type: string;
  /** launch_template block */
  readonly launchTemplate?: BatchComputeEnvironmentComputeResourcesLaunchTemplate[];
}

// Resource

export class BatchComputeEnvironment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BatchComputeEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_batch_compute_environment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._computeEnvironmentName = config.computeEnvironmentName;
    this._computeEnvironmentNamePrefix = config.computeEnvironmentNamePrefix;
    this._serviceRole = config.serviceRole;
    this._state = config.state;
    this._type = config.type;
    this._computeResources = config.computeResources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // compute_environment_name - computed: true, optional: true, required: false
  private _computeEnvironmentName?: string;
  public get computeEnvironmentName() {
    return this._computeEnvironmentName ?? this.getStringAttribute('compute_environment_name');
  }
  public set computeEnvironmentName(value: string | undefined) {
    this._computeEnvironmentName = value;
  }

  // compute_environment_name_prefix - computed: false, optional: true, required: false
  private _computeEnvironmentNamePrefix?: string;
  public get computeEnvironmentNamePrefix() {
    return this._computeEnvironmentNamePrefix;
  }
  public set computeEnvironmentNamePrefix(value: string | undefined) {
    this._computeEnvironmentNamePrefix = value;
  }

  // ecc_cluster_arn - computed: true, optional: false, required: true
  public get eccClusterArn() {
    return this.getStringAttribute('ecc_cluster_arn');
  }

  // ecs_cluster_arn - computed: true, optional: false, required: true
  public get ecsClusterArn() {
    return this.getStringAttribute('ecs_cluster_arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // service_role - computed: false, optional: false, required: true
  private _serviceRole: string;
  public get serviceRole() {
    return this._serviceRole;
  }
  public set serviceRole(value: string) {
    this._serviceRole = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_reason - computed: true, optional: false, required: true
  public get statusReason() {
    return this.getStringAttribute('status_reason');
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // compute_resources - computed: false, optional: true, required: false
  private _computeResources?: BatchComputeEnvironmentComputeResources[];
  public get computeResources() {
    return this._computeResources;
  }
  public set computeResources(value: BatchComputeEnvironmentComputeResources[] | undefined) {
    this._computeResources = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_environment_name: this._computeEnvironmentName,
      compute_environment_name_prefix: this._computeEnvironmentNamePrefix,
      service_role: this._serviceRole,
      state: this._state,
      type: this._type,
      compute_resources: this._computeResources,
    };
  }
}
