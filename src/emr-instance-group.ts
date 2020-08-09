// https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "autoscaling_policy": {
        "type": "string",
        "optional": true
      },
      "bid_price": {
        "type": "string",
        "optional": true
      },
      "cluster_id": {
        "type": "string",
        "required": true
      },
      "configurations_json": {
        "type": "string",
        "optional": true
      },
      "ebs_optimized": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_count": {
        "type": "number",
        "optional": true
      },
      "instance_type": {
        "type": "string",
        "required": true
      },
      "name": {
        "type": "string",
        "optional": true
      },
      "running_instance_count": {
        "type": "number",
        "computed": true
      },
      "status": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "ebs_config": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "iops": {
              "type": "number",
              "optional": true
            },
            "size": {
              "type": "number",
              "required": true
            },
            "type": {
              "type": "string",
              "required": true
            },
            "volumes_per_instance": {
              "type": "number",
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

export interface EmrInstanceGroupConfig extends TerraformMetaArguments {
  readonly autoscalingPolicy?: string;
  readonly bidPrice?: string;
  readonly clusterId: string;
  readonly configurationsJson?: string;
  readonly ebsOptimized?: boolean;
  readonly instanceCount?: number;
  readonly instanceType: string;
  readonly name?: string;
  /** ebs_config block */
  readonly ebsConfig?: EmrInstanceGroupEbsConfig[];
}
export interface EmrInstanceGroupEbsConfig {
  readonly iops?: number;
  readonly size: number;
  readonly type: string;
  readonly volumesPerInstance?: number;
}

// Resource

export class EmrInstanceGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EmrInstanceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_emr_instance_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoscalingPolicy = config.autoscalingPolicy;
    this._bidPrice = config.bidPrice;
    this._clusterId = config.clusterId;
    this._configurationsJson = config.configurationsJson;
    this._ebsOptimized = config.ebsOptimized;
    this._instanceCount = config.instanceCount;
    this._instanceType = config.instanceType;
    this._name = config.name;
    this._ebsConfig = config.ebsConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autoscaling_policy - computed: false, optional: true, required: false
  private _autoscalingPolicy?: string;
  public get autoscalingPolicy() {
    return this._autoscalingPolicy;
  }
  public set autoscalingPolicy(value: string | undefined) {
    this._autoscalingPolicy = value;
  }

  // bid_price - computed: false, optional: true, required: false
  private _bidPrice?: string;
  public get bidPrice() {
    return this._bidPrice;
  }
  public set bidPrice(value: string | undefined) {
    this._bidPrice = value;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId: string;
  public get clusterId() {
    return this._clusterId;
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }

  // configurations_json - computed: false, optional: true, required: false
  private _configurationsJson?: string;
  public get configurationsJson() {
    return this._configurationsJson;
  }
  public set configurationsJson(value: string | undefined) {
    this._configurationsJson = value;
  }

  // ebs_optimized - computed: false, optional: true, required: false
  private _ebsOptimized?: boolean;
  public get ebsOptimized() {
    return this._ebsOptimized;
  }
  public set ebsOptimized(value: boolean | undefined) {
    this._ebsOptimized = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number;
  public get instanceCount() {
    return this._instanceCount;
  }
  public set instanceCount(value: number | undefined) {
    this._instanceCount = value;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType: string;
  public get instanceType() {
    return this._instanceType;
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // running_instance_count - computed: true, optional: false, required: true
  public get runningInstanceCount() {
    return this.getNumberAttribute('running_instance_count');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // ebs_config - computed: false, optional: true, required: false
  private _ebsConfig?: EmrInstanceGroupEbsConfig[];
  public get ebsConfig() {
    return this._ebsConfig;
  }
  public set ebsConfig(value: EmrInstanceGroupEbsConfig[] | undefined) {
    this._ebsConfig = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      autoscaling_policy: this._autoscalingPolicy,
      bid_price: this._bidPrice,
      cluster_id: this._clusterId,
      configurations_json: this._configurationsJson,
      ebs_optimized: this._ebsOptimized,
      instance_count: this._instanceCount,
      instance_type: this._instanceType,
      name: this._name,
      ebs_config: this._ebsConfig,
    };
  }
}
