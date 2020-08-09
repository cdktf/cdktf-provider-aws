// https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "compute_platform": {
        "type": "string",
        "optional": true
      },
      "deployment_config_id": {
        "type": "string",
        "computed": true
      },
      "deployment_config_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "minimum_healthy_hosts": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "type": {
              "type": "string",
              "optional": true
            },
            "value": {
              "type": "number",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "traffic_routing_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "type": {
              "type": "string",
              "optional": true
            }
          },
          "block_types": {
            "time_based_canary": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "interval": {
                    "type": "number",
                    "optional": true
                  },
                  "percentage": {
                    "type": "number",
                    "optional": true
                  }
                }
              },
              "max_items": 1
            },
            "time_based_linear": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "interval": {
                    "type": "number",
                    "optional": true
                  },
                  "percentage": {
                    "type": "number",
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

export interface CodedeployDeploymentConfigConfig extends TerraformMetaArguments {
  readonly computePlatform?: string;
  readonly deploymentConfigName: string;
  /** minimum_healthy_hosts block */
  readonly minimumHealthyHosts?: CodedeployDeploymentConfigMinimumHealthyHosts[];
  /** traffic_routing_config block */
  readonly trafficRoutingConfig?: CodedeployDeploymentConfigTrafficRoutingConfig[];
}
export interface CodedeployDeploymentConfigMinimumHealthyHosts {
  readonly type?: string;
  readonly value?: number;
}
export interface CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary {
  readonly interval?: number;
  readonly percentage?: number;
}
export interface CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear {
  readonly interval?: number;
  readonly percentage?: number;
}
export interface CodedeployDeploymentConfigTrafficRoutingConfig {
  readonly type?: string;
  /** time_based_canary block */
  readonly timeBasedCanary?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary[];
  /** time_based_linear block */
  readonly timeBasedLinear?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear[];
}

// Resource

export class CodedeployDeploymentConfig extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CodedeployDeploymentConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codedeploy_deployment_config',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._computePlatform = config.computePlatform;
    this._deploymentConfigName = config.deploymentConfigName;
    this._minimumHealthyHosts = config.minimumHealthyHosts;
    this._trafficRoutingConfig = config.trafficRoutingConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_platform - computed: false, optional: true, required: false
  private _computePlatform?: string;
  public get computePlatform() {
    return this._computePlatform;
  }
  public set computePlatform(value: string | undefined) {
    this._computePlatform = value;
  }

  // deployment_config_id - computed: true, optional: false, required: true
  public get deploymentConfigId() {
    return this.getStringAttribute('deployment_config_id');
  }

  // deployment_config_name - computed: false, optional: false, required: true
  private _deploymentConfigName: string;
  public get deploymentConfigName() {
    return this._deploymentConfigName;
  }
  public set deploymentConfigName(value: string) {
    this._deploymentConfigName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // minimum_healthy_hosts - computed: false, optional: true, required: false
  private _minimumHealthyHosts?: CodedeployDeploymentConfigMinimumHealthyHosts[];
  public get minimumHealthyHosts() {
    return this._minimumHealthyHosts;
  }
  public set minimumHealthyHosts(value: CodedeployDeploymentConfigMinimumHealthyHosts[] | undefined) {
    this._minimumHealthyHosts = value;
  }

  // traffic_routing_config - computed: false, optional: true, required: false
  private _trafficRoutingConfig?: CodedeployDeploymentConfigTrafficRoutingConfig[];
  public get trafficRoutingConfig() {
    return this._trafficRoutingConfig;
  }
  public set trafficRoutingConfig(value: CodedeployDeploymentConfigTrafficRoutingConfig[] | undefined) {
    this._trafficRoutingConfig = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_platform: this._computePlatform,
      deployment_config_name: this._deploymentConfigName,
      minimum_healthy_hosts: this._minimumHealthyHosts,
      traffic_routing_config: this._trafficRoutingConfig,
    };
  }
}
