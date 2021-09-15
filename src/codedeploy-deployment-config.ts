// https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodedeployDeploymentConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#compute_platform CodedeployDeploymentConfig#compute_platform}
  */
  readonly computePlatform?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#deployment_config_name CodedeployDeploymentConfig#deployment_config_name}
  */
  readonly deploymentConfigName: string;
  /**
  * minimum_healthy_hosts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#minimum_healthy_hosts CodedeployDeploymentConfig#minimum_healthy_hosts}
  */
  readonly minimumHealthyHosts?: CodedeployDeploymentConfigMinimumHealthyHosts[];
  /**
  * traffic_routing_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#traffic_routing_config CodedeployDeploymentConfig#traffic_routing_config}
  */
  readonly trafficRoutingConfig?: CodedeployDeploymentConfigTrafficRoutingConfig[];
}
export interface CodedeployDeploymentConfigMinimumHealthyHosts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#type CodedeployDeploymentConfig#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#value CodedeployDeploymentConfig#value}
  */
  readonly value?: number;
}

function codedeployDeploymentConfigMinimumHealthyHostsToTerraform(struct?: CodedeployDeploymentConfigMinimumHealthyHosts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#interval CodedeployDeploymentConfig#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#percentage CodedeployDeploymentConfig#percentage}
  */
  readonly percentage?: number;
}

function codedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}

export interface CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#interval CodedeployDeploymentConfig#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#percentage CodedeployDeploymentConfig#percentage}
  */
  readonly percentage?: number;
}

function codedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}

export interface CodedeployDeploymentConfigTrafficRoutingConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#type CodedeployDeploymentConfig#type}
  */
  readonly type?: string;
  /**
  * time_based_canary block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#time_based_canary CodedeployDeploymentConfig#time_based_canary}
  */
  readonly timeBasedCanary?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary[];
  /**
  * time_based_linear block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html#time_based_linear CodedeployDeploymentConfig#time_based_linear}
  */
  readonly timeBasedLinear?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear[];
}

function codedeployDeploymentConfigTrafficRoutingConfigToTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    time_based_canary: cdktf.listMapper(codedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToTerraform)(struct!.timeBasedCanary),
    time_based_linear: cdktf.listMapper(codedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToTerraform)(struct!.timeBasedLinear),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html aws_codedeploy_deployment_config}
*/
export class CodedeployDeploymentConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_codedeploy_deployment_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_config.html aws_codedeploy_deployment_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodedeployDeploymentConfigConfig
  */
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
      compute_platform: cdktf.stringToTerraform(this._computePlatform),
      deployment_config_name: cdktf.stringToTerraform(this._deploymentConfigName),
      minimum_healthy_hosts: cdktf.listMapper(codedeployDeploymentConfigMinimumHealthyHostsToTerraform)(this._minimumHealthyHosts),
      traffic_routing_config: cdktf.listMapper(codedeployDeploymentConfigTrafficRoutingConfigToTerraform)(this._trafficRoutingConfig),
    };
  }
}
