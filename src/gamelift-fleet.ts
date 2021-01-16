// https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GameliftFleetConfig extends cdktf.TerraformMetaArguments {
  readonly buildId: string;
  readonly description?: string;
  readonly ec2InstanceType: string;
  readonly fleetType?: string;
  readonly instanceRoleArn?: string;
  readonly metricGroups?: string[];
  readonly name: string;
  readonly newGameSessionProtectionPolicy?: string;
  readonly tags?: { [key: string]: string };
  /** ec2_inbound_permission block */
  readonly ec2InboundPermission?: GameliftFleetEc2InboundPermission[];
  /** resource_creation_limit_policy block */
  readonly resourceCreationLimitPolicy?: GameliftFleetResourceCreationLimitPolicy[];
  /** runtime_configuration block */
  readonly runtimeConfiguration?: GameliftFleetRuntimeConfiguration[];
  /** timeouts block */
  readonly timeouts?: GameliftFleetTimeouts;
}
export interface GameliftFleetEc2InboundPermission {
  readonly fromPort: number;
  readonly ipRange: string;
  readonly protocol: string;
  readonly toPort: number;
}

function gameliftFleetEc2InboundPermissionToTerraform(struct?: GameliftFleetEc2InboundPermission): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    ip_range: cdktf.stringToTerraform(struct!.ipRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}

export interface GameliftFleetResourceCreationLimitPolicy {
  readonly newGameSessionsPerCreator?: number;
  readonly policyPeriodInMinutes?: number;
}

function gameliftFleetResourceCreationLimitPolicyToTerraform(struct?: GameliftFleetResourceCreationLimitPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    new_game_sessions_per_creator: cdktf.numberToTerraform(struct!.newGameSessionsPerCreator),
    policy_period_in_minutes: cdktf.numberToTerraform(struct!.policyPeriodInMinutes),
  }
}

export interface GameliftFleetRuntimeConfigurationServerProcess {
  readonly concurrentExecutions: number;
  readonly launchPath: string;
  readonly parameters?: string;
}

function gameliftFleetRuntimeConfigurationServerProcessToTerraform(struct?: GameliftFleetRuntimeConfigurationServerProcess): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    concurrent_executions: cdktf.numberToTerraform(struct!.concurrentExecutions),
    launch_path: cdktf.stringToTerraform(struct!.launchPath),
    parameters: cdktf.stringToTerraform(struct!.parameters),
  }
}

export interface GameliftFleetRuntimeConfiguration {
  readonly gameSessionActivationTimeoutSeconds?: number;
  readonly maxConcurrentGameSessionActivations?: number;
  /** server_process block */
  readonly serverProcess?: GameliftFleetRuntimeConfigurationServerProcess[];
}

function gameliftFleetRuntimeConfigurationToTerraform(struct?: GameliftFleetRuntimeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    game_session_activation_timeout_seconds: cdktf.numberToTerraform(struct!.gameSessionActivationTimeoutSeconds),
    max_concurrent_game_session_activations: cdktf.numberToTerraform(struct!.maxConcurrentGameSessionActivations),
    server_process: cdktf.listMapper(gameliftFleetRuntimeConfigurationServerProcessToTerraform)(struct!.serverProcess),
  }
}

export interface GameliftFleetTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function gameliftFleetTimeoutsToTerraform(struct?: GameliftFleetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class GameliftFleet extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GameliftFleetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_gamelift_fleet',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._buildId = config.buildId;
    this._description = config.description;
    this._ec2InstanceType = config.ec2InstanceType;
    this._fleetType = config.fleetType;
    this._instanceRoleArn = config.instanceRoleArn;
    this._metricGroups = config.metricGroups;
    this._name = config.name;
    this._newGameSessionProtectionPolicy = config.newGameSessionProtectionPolicy;
    this._tags = config.tags;
    this._ec2InboundPermission = config.ec2InboundPermission;
    this._resourceCreationLimitPolicy = config.resourceCreationLimitPolicy;
    this._runtimeConfiguration = config.runtimeConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // build_id - computed: false, optional: false, required: true
  private _buildId: string;
  public get buildId() {
    return this.getStringAttribute('build_id');
  }
  public set buildId(value: string) {
    this._buildId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildIdInput() {
    return this._buildId
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // ec2_instance_type - computed: false, optional: false, required: true
  private _ec2InstanceType: string;
  public get ec2InstanceType() {
    return this.getStringAttribute('ec2_instance_type');
  }
  public set ec2InstanceType(value: string) {
    this._ec2InstanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2InstanceTypeInput() {
    return this._ec2InstanceType
  }

  // fleet_type - computed: false, optional: true, required: false
  private _fleetType?: string;
  public get fleetType() {
    return this.getStringAttribute('fleet_type');
  }
  public set fleetType(value: string ) {
    this._fleetType = value;
  }
  public resetFleetType() {
    this._fleetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetTypeInput() {
    return this._fleetType
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_role_arn - computed: false, optional: true, required: false
  private _instanceRoleArn?: string;
  public get instanceRoleArn() {
    return this.getStringAttribute('instance_role_arn');
  }
  public set instanceRoleArn(value: string ) {
    this._instanceRoleArn = value;
  }
  public resetInstanceRoleArn() {
    this._instanceRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRoleArnInput() {
    return this._instanceRoleArn
  }

  // log_paths - computed: true, optional: false, required: false
  public get logPaths() {
    return this.getListAttribute('log_paths');
  }

  // metric_groups - computed: true, optional: true, required: false
  private _metricGroups?: string[];
  public get metricGroups() {
    return this.getListAttribute('metric_groups');
  }
  public set metricGroups(value: string[]) {
    this._metricGroups = value;
  }
  public resetMetricGroups() {
    this._metricGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricGroupsInput() {
    return this._metricGroups
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // new_game_session_protection_policy - computed: false, optional: true, required: false
  private _newGameSessionProtectionPolicy?: string;
  public get newGameSessionProtectionPolicy() {
    return this.getStringAttribute('new_game_session_protection_policy');
  }
  public set newGameSessionProtectionPolicy(value: string ) {
    this._newGameSessionProtectionPolicy = value;
  }
  public resetNewGameSessionProtectionPolicy() {
    this._newGameSessionProtectionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newGameSessionProtectionPolicyInput() {
    return this._newGameSessionProtectionPolicy
  }

  // operating_system - computed: true, optional: false, required: false
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // ec2_inbound_permission - computed: false, optional: true, required: false
  private _ec2InboundPermission?: GameliftFleetEc2InboundPermission[];
  public get ec2InboundPermission() {
    return this.interpolationForAttribute('ec2_inbound_permission') as any;
  }
  public set ec2InboundPermission(value: GameliftFleetEc2InboundPermission[] ) {
    this._ec2InboundPermission = value;
  }
  public resetEc2InboundPermission() {
    this._ec2InboundPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2InboundPermissionInput() {
    return this._ec2InboundPermission
  }

  // resource_creation_limit_policy - computed: false, optional: true, required: false
  private _resourceCreationLimitPolicy?: GameliftFleetResourceCreationLimitPolicy[];
  public get resourceCreationLimitPolicy() {
    return this.interpolationForAttribute('resource_creation_limit_policy') as any;
  }
  public set resourceCreationLimitPolicy(value: GameliftFleetResourceCreationLimitPolicy[] ) {
    this._resourceCreationLimitPolicy = value;
  }
  public resetResourceCreationLimitPolicy() {
    this._resourceCreationLimitPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceCreationLimitPolicyInput() {
    return this._resourceCreationLimitPolicy
  }

  // runtime_configuration - computed: false, optional: true, required: false
  private _runtimeConfiguration?: GameliftFleetRuntimeConfiguration[];
  public get runtimeConfiguration() {
    return this.interpolationForAttribute('runtime_configuration') as any;
  }
  public set runtimeConfiguration(value: GameliftFleetRuntimeConfiguration[] ) {
    this._runtimeConfiguration = value;
  }
  public resetRuntimeConfiguration() {
    this._runtimeConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigurationInput() {
    return this._runtimeConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GameliftFleetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: GameliftFleetTimeouts ) {
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
      build_id: cdktf.stringToTerraform(this._buildId),
      description: cdktf.stringToTerraform(this._description),
      ec2_instance_type: cdktf.stringToTerraform(this._ec2InstanceType),
      fleet_type: cdktf.stringToTerraform(this._fleetType),
      instance_role_arn: cdktf.stringToTerraform(this._instanceRoleArn),
      metric_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._metricGroups),
      name: cdktf.stringToTerraform(this._name),
      new_game_session_protection_policy: cdktf.stringToTerraform(this._newGameSessionProtectionPolicy),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      ec2_inbound_permission: cdktf.listMapper(gameliftFleetEc2InboundPermissionToTerraform)(this._ec2InboundPermission),
      resource_creation_limit_policy: cdktf.listMapper(gameliftFleetResourceCreationLimitPolicyToTerraform)(this._resourceCreationLimitPolicy),
      runtime_configuration: cdktf.listMapper(gameliftFleetRuntimeConfigurationToTerraform)(this._runtimeConfiguration),
      timeouts: gameliftFleetTimeoutsToTerraform(this._timeouts),
    };
  }
}
