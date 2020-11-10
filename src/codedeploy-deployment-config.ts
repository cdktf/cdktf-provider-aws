// https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html
// generated from terraform resource schema

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
    return this.getStringAttribute('compute_platform');
  }
  public set computePlatform(value: string ) {
    this._computePlatform = value;
  }
  public resetComputePlatform() {
    this._computePlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computePlatformInput() {
    return this._computePlatform
  }

  // deployment_config_id - computed: true, optional: false, required: false
  public get deploymentConfigId() {
    return this.getStringAttribute('deployment_config_id');
  }

  // deployment_config_name - computed: false, optional: false, required: true
  private _deploymentConfigName: string;
  public get deploymentConfigName() {
    return this.getStringAttribute('deployment_config_name');
  }
  public set deploymentConfigName(value: string) {
    this._deploymentConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigNameInput() {
    return this._deploymentConfigName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // minimum_healthy_hosts - computed: false, optional: true, required: false
  private _minimumHealthyHosts?: CodedeployDeploymentConfigMinimumHealthyHosts[];
  public get minimumHealthyHosts() {
    return this.interpolationForAttribute('minimum_healthy_hosts') as any;
  }
  public set minimumHealthyHosts(value: CodedeployDeploymentConfigMinimumHealthyHosts[] ) {
    this._minimumHealthyHosts = value;
  }
  public resetMinimumHealthyHosts() {
    this._minimumHealthyHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumHealthyHostsInput() {
    return this._minimumHealthyHosts
  }

  // traffic_routing_config - computed: false, optional: true, required: false
  private _trafficRoutingConfig?: CodedeployDeploymentConfigTrafficRoutingConfig[];
  public get trafficRoutingConfig() {
    return this.interpolationForAttribute('traffic_routing_config') as any;
  }
  public set trafficRoutingConfig(value: CodedeployDeploymentConfigTrafficRoutingConfig[] ) {
    this._trafficRoutingConfig = value;
  }
  public resetTrafficRoutingConfig() {
    this._trafficRoutingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficRoutingConfigInput() {
    return this._trafficRoutingConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compute_platform: this._computePlatform,
      deployment_config_name: this._deploymentConfigName,
      minimum_healthy_hosts: this._minimumHealthyHosts,
      traffic_routing_config: this._trafficRoutingConfig,
    };
  }
}
