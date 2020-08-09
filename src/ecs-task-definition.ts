// https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface EcsTaskDefinitionConfig extends TerraformMetaArguments {
  readonly containerDefinitions: string;
  readonly cpu?: string;
  readonly executionRoleArn?: string;
  readonly family: string;
  readonly ipcMode?: string;
  readonly memory?: string;
  readonly networkMode?: string;
  readonly pidMode?: string;
  readonly requiresCompatibilities?: string[];
  readonly tags?: { [key: string]: string };
  readonly taskRoleArn?: string;
  /** inference_accelerator block */
  readonly inferenceAccelerator?: EcsTaskDefinitionInferenceAccelerator[];
  /** placement_constraints block */
  readonly placementConstraints?: EcsTaskDefinitionPlacementConstraints[];
  /** proxy_configuration block */
  readonly proxyConfiguration?: EcsTaskDefinitionProxyConfiguration[];
  /** volume block */
  readonly volume?: EcsTaskDefinitionVolume[];
}
export interface EcsTaskDefinitionInferenceAccelerator {
  readonly deviceName: string;
  readonly deviceType: string;
}
export interface EcsTaskDefinitionPlacementConstraints {
  readonly expression?: string;
  readonly type: string;
}
export interface EcsTaskDefinitionProxyConfiguration {
  readonly containerName: string;
  readonly properties?: { [key: string]: string };
  readonly type?: string;
}
export interface EcsTaskDefinitionVolumeDockerVolumeConfiguration {
  readonly autoprovision?: boolean;
  readonly driver?: string;
  readonly driverOpts?: { [key: string]: string };
  readonly labels?: { [key: string]: string };
  readonly scope?: string;
}
export interface EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig {
  readonly accessPointId?: string;
  readonly iam?: string;
}
export interface EcsTaskDefinitionVolumeEfsVolumeConfiguration {
  readonly fileSystemId: string;
  readonly rootDirectory?: string;
  readonly transitEncryption?: string;
  readonly transitEncryptionPort?: number;
  /** authorization_config block */
  readonly authorizationConfig?: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig[];
}
export interface EcsTaskDefinitionVolume {
  readonly hostPath?: string;
  readonly name: string;
  /** docker_volume_configuration block */
  readonly dockerVolumeConfiguration?: EcsTaskDefinitionVolumeDockerVolumeConfiguration[];
  /** efs_volume_configuration block */
  readonly efsVolumeConfiguration?: EcsTaskDefinitionVolumeEfsVolumeConfiguration[];
}

// Resource

export class EcsTaskDefinition extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EcsTaskDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_task_definition',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._containerDefinitions = config.containerDefinitions;
    this._cpu = config.cpu;
    this._executionRoleArn = config.executionRoleArn;
    this._family = config.family;
    this._ipcMode = config.ipcMode;
    this._memory = config.memory;
    this._networkMode = config.networkMode;
    this._pidMode = config.pidMode;
    this._requiresCompatibilities = config.requiresCompatibilities;
    this._tags = config.tags;
    this._taskRoleArn = config.taskRoleArn;
    this._inferenceAccelerator = config.inferenceAccelerator;
    this._placementConstraints = config.placementConstraints;
    this._proxyConfiguration = config.proxyConfiguration;
    this._volume = config.volume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // container_definitions - computed: false, optional: false, required: true
  private _containerDefinitions: string;
  public get containerDefinitions() {
    return this._containerDefinitions;
  }
  public set containerDefinitions(value: string) {
    this._containerDefinitions = value;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string;
  public get cpu() {
    return this._cpu;
  }
  public set cpu(value: string | undefined) {
    this._cpu = value;
  }

  // execution_role_arn - computed: false, optional: true, required: false
  private _executionRoleArn?: string;
  public get executionRoleArn() {
    return this._executionRoleArn;
  }
  public set executionRoleArn(value: string | undefined) {
    this._executionRoleArn = value;
  }

  // family - computed: false, optional: false, required: true
  private _family: string;
  public get family() {
    return this._family;
  }
  public set family(value: string) {
    this._family = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ipc_mode - computed: false, optional: true, required: false
  private _ipcMode?: string;
  public get ipcMode() {
    return this._ipcMode;
  }
  public set ipcMode(value: string | undefined) {
    this._ipcMode = value;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string;
  public get memory() {
    return this._memory;
  }
  public set memory(value: string | undefined) {
    this._memory = value;
  }

  // network_mode - computed: true, optional: true, required: false
  private _networkMode?: string;
  public get networkMode() {
    return this._networkMode ?? this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string | undefined) {
    this._networkMode = value;
  }

  // pid_mode - computed: false, optional: true, required: false
  private _pidMode?: string;
  public get pidMode() {
    return this._pidMode;
  }
  public set pidMode(value: string | undefined) {
    this._pidMode = value;
  }

  // requires_compatibilities - computed: false, optional: true, required: false
  private _requiresCompatibilities?: string[];
  public get requiresCompatibilities() {
    return this._requiresCompatibilities;
  }
  public set requiresCompatibilities(value: string[] | undefined) {
    this._requiresCompatibilities = value;
  }

  // revision - computed: true, optional: false, required: true
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // task_role_arn - computed: false, optional: true, required: false
  private _taskRoleArn?: string;
  public get taskRoleArn() {
    return this._taskRoleArn;
  }
  public set taskRoleArn(value: string | undefined) {
    this._taskRoleArn = value;
  }

  // inference_accelerator - computed: false, optional: true, required: false
  private _inferenceAccelerator?: EcsTaskDefinitionInferenceAccelerator[];
  public get inferenceAccelerator() {
    return this._inferenceAccelerator;
  }
  public set inferenceAccelerator(value: EcsTaskDefinitionInferenceAccelerator[] | undefined) {
    this._inferenceAccelerator = value;
  }

  // placement_constraints - computed: false, optional: true, required: false
  private _placementConstraints?: EcsTaskDefinitionPlacementConstraints[];
  public get placementConstraints() {
    return this._placementConstraints;
  }
  public set placementConstraints(value: EcsTaskDefinitionPlacementConstraints[] | undefined) {
    this._placementConstraints = value;
  }

  // proxy_configuration - computed: false, optional: true, required: false
  private _proxyConfiguration?: EcsTaskDefinitionProxyConfiguration[];
  public get proxyConfiguration() {
    return this._proxyConfiguration;
  }
  public set proxyConfiguration(value: EcsTaskDefinitionProxyConfiguration[] | undefined) {
    this._proxyConfiguration = value;
  }

  // volume - computed: false, optional: true, required: false
  private _volume?: EcsTaskDefinitionVolume[];
  public get volume() {
    return this._volume;
  }
  public set volume(value: EcsTaskDefinitionVolume[] | undefined) {
    this._volume = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      container_definitions: this._containerDefinitions,
      cpu: this._cpu,
      execution_role_arn: this._executionRoleArn,
      family: this._family,
      ipc_mode: this._ipcMode,
      memory: this._memory,
      network_mode: this._networkMode,
      pid_mode: this._pidMode,
      requires_compatibilities: this._requiresCompatibilities,
      tags: this._tags,
      task_role_arn: this._taskRoleArn,
      inference_accelerator: this._inferenceAccelerator,
      placement_constraints: this._placementConstraints,
      proxy_configuration: this._proxyConfiguration,
      volume: this._volume,
    };
  }
}
