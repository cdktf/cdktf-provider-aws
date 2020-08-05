// https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html
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
      "cluster_name": {
        "type": "string",
        "required": true
      },
      "fargate_profile_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "pod_execution_role_arn": {
        "type": "string",
        "required": true
      },
      "status": {
        "type": "string",
        "computed": true
      },
      "subnet_ids": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "selector": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "labels": {
              "type": [
                "map",
                "string"
              ],
              "optional": true
            },
            "namespace": {
              "type": "string",
              "required": true
            }
          }
        },
        "min_items": 1
      },
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

export interface EksFargateProfileConfig extends TerraformMetaArguments {
  readonly clusterName: string;
  readonly fargateProfileName: string;
  readonly podExecutionRoleArn: string;
  readonly subnetIds?: string[];
  readonly tags?: { [key: string]: string };
  /** selector block */
  readonly selector: EksFargateProfileSelector[];
  /** timeouts block */
  readonly timeouts?: EksFargateProfileTimeouts;
}
export interface EksFargateProfileSelector {
  readonly labels?: { [key: string]: string };
  readonly namespace: string;
}
export interface EksFargateProfileTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class EksFargateProfile extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EksFargateProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_eks_fargate_profile',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterName = config.clusterName;
    this._fargateProfileName = config.fargateProfileName;
    this._podExecutionRoleArn = config.podExecutionRoleArn;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._selector = config.selector;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName: string;
  public get clusterName() {
    return this._clusterName;
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }

  // fargate_profile_name - computed: false, optional: false, required: true
  private _fargateProfileName: string;
  public get fargateProfileName() {
    return this._fargateProfileName;
  }
  public set fargateProfileName(value: string) {
    this._fargateProfileName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // pod_execution_role_arn - computed: false, optional: false, required: true
  private _podExecutionRoleArn: string;
  public get podExecutionRoleArn() {
    return this._podExecutionRoleArn;
  }
  public set podExecutionRoleArn(value: string) {
    this._podExecutionRoleArn = value;
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[];
  public get subnetIds() {
    return this._subnetIds;
  }
  public set subnetIds(value: string[] | undefined) {
    this._subnetIds = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // selector - computed: false, optional: false, required: true
  private _selector: EksFargateProfileSelector[];
  public get selector() {
    return this._selector;
  }
  public set selector(value: EksFargateProfileSelector[]) {
    this._selector = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EksFargateProfileTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: EksFargateProfileTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: this._clusterName,
      fargate_profile_name: this._fargateProfileName,
      pod_execution_role_arn: this._podExecutionRoleArn,
      subnet_ids: this._subnetIds,
      tags: this._tags,
      selector: this._selector,
      timeouts: this._timeouts,
    };
  }
}
