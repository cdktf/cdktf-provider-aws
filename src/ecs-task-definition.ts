// https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsTaskDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#container_definitions EcsTaskDefinition#container_definitions}
  */
  readonly containerDefinitions: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#cpu EcsTaskDefinition#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#execution_role_arn EcsTaskDefinition#execution_role_arn}
  */
  readonly executionRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#family EcsTaskDefinition#family}
  */
  readonly family: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#ipc_mode EcsTaskDefinition#ipc_mode}
  */
  readonly ipcMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#memory EcsTaskDefinition#memory}
  */
  readonly memory?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#network_mode EcsTaskDefinition#network_mode}
  */
  readonly networkMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#pid_mode EcsTaskDefinition#pid_mode}
  */
  readonly pidMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#requires_compatibilities EcsTaskDefinition#requires_compatibilities}
  */
  readonly requiresCompatibilities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#tags EcsTaskDefinition#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#tags_all EcsTaskDefinition#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#task_role_arn EcsTaskDefinition#task_role_arn}
  */
  readonly taskRoleArn?: string;
  /**
  * ephemeral_storage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#ephemeral_storage EcsTaskDefinition#ephemeral_storage}
  */
  readonly ephemeralStorage?: EcsTaskDefinitionEphemeralStorage[];
  /**
  * inference_accelerator block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#inference_accelerator EcsTaskDefinition#inference_accelerator}
  */
  readonly inferenceAccelerator?: EcsTaskDefinitionInferenceAccelerator[];
  /**
  * placement_constraints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#placement_constraints EcsTaskDefinition#placement_constraints}
  */
  readonly placementConstraints?: EcsTaskDefinitionPlacementConstraints[];
  /**
  * proxy_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#proxy_configuration EcsTaskDefinition#proxy_configuration}
  */
  readonly proxyConfiguration?: EcsTaskDefinitionProxyConfiguration[];
  /**
  * volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#volume EcsTaskDefinition#volume}
  */
  readonly volume?: EcsTaskDefinitionVolume[];
}
export interface EcsTaskDefinitionEphemeralStorage {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#size_in_gib EcsTaskDefinition#size_in_gib}
  */
  readonly sizeInGib: number;
}

function ecsTaskDefinitionEphemeralStorageToTerraform(struct?: EcsTaskDefinitionEphemeralStorage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    size_in_gib: cdktf.numberToTerraform(struct!.sizeInGib),
  }
}

export interface EcsTaskDefinitionInferenceAccelerator {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#device_name EcsTaskDefinition#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#device_type EcsTaskDefinition#device_type}
  */
  readonly deviceType: string;
}

function ecsTaskDefinitionInferenceAcceleratorToTerraform(struct?: EcsTaskDefinitionInferenceAccelerator): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    device_type: cdktf.stringToTerraform(struct!.deviceType),
  }
}

export interface EcsTaskDefinitionPlacementConstraints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#expression EcsTaskDefinition#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#type EcsTaskDefinition#type}
  */
  readonly type: string;
}

function ecsTaskDefinitionPlacementConstraintsToTerraform(struct?: EcsTaskDefinitionPlacementConstraints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface EcsTaskDefinitionProxyConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#container_name EcsTaskDefinition#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#properties EcsTaskDefinition#properties}
  */
  readonly properties?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#type EcsTaskDefinition#type}
  */
  readonly type?: string;
}

function ecsTaskDefinitionProxyConfigurationToTerraform(struct?: EcsTaskDefinitionProxyConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface EcsTaskDefinitionVolumeDockerVolumeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#autoprovision EcsTaskDefinition#autoprovision}
  */
  readonly autoprovision?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#driver EcsTaskDefinition#driver}
  */
  readonly driver?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#driver_opts EcsTaskDefinition#driver_opts}
  */
  readonly driverOpts?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#labels EcsTaskDefinition#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#scope EcsTaskDefinition#scope}
  */
  readonly scope?: string;
}

function ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeDockerVolumeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    autoprovision: cdktf.booleanToTerraform(struct!.autoprovision),
    driver: cdktf.stringToTerraform(struct!.driver),
    driver_opts: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverOpts),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}

export interface EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#access_point_id EcsTaskDefinition#access_point_id}
  */
  readonly accessPointId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#iam EcsTaskDefinition#iam}
  */
  readonly iam?: string;
}

function ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform(struct?: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_point_id: cdktf.stringToTerraform(struct!.accessPointId),
    iam: cdktf.stringToTerraform(struct!.iam),
  }
}

export interface EcsTaskDefinitionVolumeEfsVolumeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#file_system_id EcsTaskDefinition#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#root_directory EcsTaskDefinition#root_directory}
  */
  readonly rootDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#transit_encryption EcsTaskDefinition#transit_encryption}
  */
  readonly transitEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#transit_encryption_port EcsTaskDefinition#transit_encryption_port}
  */
  readonly transitEncryptionPort?: number;
  /**
  * authorization_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#authorization_config EcsTaskDefinition#authorization_config}
  */
  readonly authorizationConfig?: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig[];
}

function ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeEfsVolumeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    root_directory: cdktf.stringToTerraform(struct!.rootDirectory),
    transit_encryption: cdktf.stringToTerraform(struct!.transitEncryption),
    transit_encryption_port: cdktf.numberToTerraform(struct!.transitEncryptionPort),
    authorization_config: cdktf.listMapper(ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform)(struct!.authorizationConfig),
  }
}

export interface EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#credentials_parameter EcsTaskDefinition#credentials_parameter}
  */
  readonly credentialsParameter: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#domain EcsTaskDefinition#domain}
  */
  readonly domain: string;
}

function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform(struct?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    credentials_parameter: cdktf.stringToTerraform(struct!.credentialsParameter),
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}

export interface EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#file_system_id EcsTaskDefinition#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#root_directory EcsTaskDefinition#root_directory}
  */
  readonly rootDirectory: string;
  /**
  * authorization_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#authorization_config EcsTaskDefinition#authorization_config}
  */
  readonly authorizationConfig: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig[];
}

function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    root_directory: cdktf.stringToTerraform(struct!.rootDirectory),
    authorization_config: cdktf.listMapper(ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform)(struct!.authorizationConfig),
  }
}

export interface EcsTaskDefinitionVolume {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#host_path EcsTaskDefinition#host_path}
  */
  readonly hostPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#name EcsTaskDefinition#name}
  */
  readonly name: string;
  /**
  * docker_volume_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#docker_volume_configuration EcsTaskDefinition#docker_volume_configuration}
  */
  readonly dockerVolumeConfiguration?: EcsTaskDefinitionVolumeDockerVolumeConfiguration[];
  /**
  * efs_volume_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#efs_volume_configuration EcsTaskDefinition#efs_volume_configuration}
  */
  readonly efsVolumeConfiguration?: EcsTaskDefinitionVolumeEfsVolumeConfiguration[];
  /**
  * fsx_windows_file_server_volume_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#fsx_windows_file_server_volume_configuration EcsTaskDefinition#fsx_windows_file_server_volume_configuration}
  */
  readonly fsxWindowsFileServerVolumeConfiguration?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration[];
}

function ecsTaskDefinitionVolumeToTerraform(struct?: EcsTaskDefinitionVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    host_path: cdktf.stringToTerraform(struct!.hostPath),
    name: cdktf.stringToTerraform(struct!.name),
    docker_volume_configuration: cdktf.listMapper(ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform)(struct!.dockerVolumeConfiguration),
    efs_volume_configuration: cdktf.listMapper(ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform)(struct!.efsVolumeConfiguration),
    fsx_windows_file_server_volume_configuration: cdktf.listMapper(ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform)(struct!.fsxWindowsFileServerVolumeConfiguration),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html aws_ecs_task_definition}
*/
export class EcsTaskDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ecs_task_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html aws_ecs_task_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsTaskDefinitionConfig
  */
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
    this._tagsAll = config.tagsAll;
    this._taskRoleArn = config.taskRoleArn;
    this._ephemeralStorage = config.ephemeralStorage;
    this._inferenceAccelerator = config.inferenceAccelerator;
    this._placementConstraints = config.placementConstraints;
    this._proxyConfiguration = config.proxyConfiguration;
    this._volume = config.volume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // container_definitions - computed: false, optional: false, required: true
  private _containerDefinitions: string;
  public get containerDefinitions() {
    return this.getStringAttribute('container_definitions');
  }
  public set containerDefinitions(value: string) {
    this._containerDefinitions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerDefinitionsInput() {
    return this._containerDefinitions
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string;
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string ) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu
  }

  // execution_role_arn - computed: false, optional: true, required: false
  private _executionRoleArn?: string;
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string ) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn
  }

  // family - computed: false, optional: false, required: true
  private _family: string;
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipc_mode - computed: false, optional: true, required: false
  private _ipcMode?: string;
  public get ipcMode() {
    return this.getStringAttribute('ipc_mode');
  }
  public set ipcMode(value: string ) {
    this._ipcMode = value;
  }
  public resetIpcMode() {
    this._ipcMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipcModeInput() {
    return this._ipcMode
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string;
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string ) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory
  }

  // network_mode - computed: true, optional: true, required: false
  private _networkMode?: string;
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  public resetNetworkMode() {
    this._networkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode
  }

  // pid_mode - computed: false, optional: true, required: false
  private _pidMode?: string;
  public get pidMode() {
    return this.getStringAttribute('pid_mode');
  }
  public set pidMode(value: string ) {
    this._pidMode = value;
  }
  public resetPidMode() {
    this._pidMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidModeInput() {
    return this._pidMode
  }

  // requires_compatibilities - computed: false, optional: true, required: false
  private _requiresCompatibilities?: string[];
  public get requiresCompatibilities() {
    return this.getListAttribute('requires_compatibilities');
  }
  public set requiresCompatibilities(value: string[] ) {
    this._requiresCompatibilities = value;
  }
  public resetRequiresCompatibilities() {
    this._requiresCompatibilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresCompatibilitiesInput() {
    return this._requiresCompatibilities
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // task_role_arn - computed: false, optional: true, required: false
  private _taskRoleArn?: string;
  public get taskRoleArn() {
    return this.getStringAttribute('task_role_arn');
  }
  public set taskRoleArn(value: string ) {
    this._taskRoleArn = value;
  }
  public resetTaskRoleArn() {
    this._taskRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskRoleArnInput() {
    return this._taskRoleArn
  }

  // ephemeral_storage - computed: false, optional: true, required: false
  private _ephemeralStorage?: EcsTaskDefinitionEphemeralStorage[];
  public get ephemeralStorage() {
    return this.interpolationForAttribute('ephemeral_storage') as any;
  }
  public set ephemeralStorage(value: EcsTaskDefinitionEphemeralStorage[] ) {
    this._ephemeralStorage = value;
  }
  public resetEphemeralStorage() {
    this._ephemeralStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageInput() {
    return this._ephemeralStorage
  }

  // inference_accelerator - computed: false, optional: true, required: false
  private _inferenceAccelerator?: EcsTaskDefinitionInferenceAccelerator[];
  public get inferenceAccelerator() {
    return this.interpolationForAttribute('inference_accelerator') as any;
  }
  public set inferenceAccelerator(value: EcsTaskDefinitionInferenceAccelerator[] ) {
    this._inferenceAccelerator = value;
  }
  public resetInferenceAccelerator() {
    this._inferenceAccelerator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceAcceleratorInput() {
    return this._inferenceAccelerator
  }

  // placement_constraints - computed: false, optional: true, required: false
  private _placementConstraints?: EcsTaskDefinitionPlacementConstraints[];
  public get placementConstraints() {
    return this.interpolationForAttribute('placement_constraints') as any;
  }
  public set placementConstraints(value: EcsTaskDefinitionPlacementConstraints[] ) {
    this._placementConstraints = value;
  }
  public resetPlacementConstraints() {
    this._placementConstraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConstraintsInput() {
    return this._placementConstraints
  }

  // proxy_configuration - computed: false, optional: true, required: false
  private _proxyConfiguration?: EcsTaskDefinitionProxyConfiguration[];
  public get proxyConfiguration() {
    return this.interpolationForAttribute('proxy_configuration') as any;
  }
  public set proxyConfiguration(value: EcsTaskDefinitionProxyConfiguration[] ) {
    this._proxyConfiguration = value;
  }
  public resetProxyConfiguration() {
    this._proxyConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigurationInput() {
    return this._proxyConfiguration
  }

  // volume - computed: false, optional: true, required: false
  private _volume?: EcsTaskDefinitionVolume[];
  public get volume() {
    return this.interpolationForAttribute('volume') as any;
  }
  public set volume(value: EcsTaskDefinitionVolume[] ) {
    this._volume = value;
  }
  public resetVolume() {
    this._volume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_definitions: cdktf.stringToTerraform(this._containerDefinitions),
      cpu: cdktf.stringToTerraform(this._cpu),
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      family: cdktf.stringToTerraform(this._family),
      ipc_mode: cdktf.stringToTerraform(this._ipcMode),
      memory: cdktf.stringToTerraform(this._memory),
      network_mode: cdktf.stringToTerraform(this._networkMode),
      pid_mode: cdktf.stringToTerraform(this._pidMode),
      requires_compatibilities: cdktf.listMapper(cdktf.stringToTerraform)(this._requiresCompatibilities),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      task_role_arn: cdktf.stringToTerraform(this._taskRoleArn),
      ephemeral_storage: cdktf.listMapper(ecsTaskDefinitionEphemeralStorageToTerraform)(this._ephemeralStorage),
      inference_accelerator: cdktf.listMapper(ecsTaskDefinitionInferenceAcceleratorToTerraform)(this._inferenceAccelerator),
      placement_constraints: cdktf.listMapper(ecsTaskDefinitionPlacementConstraintsToTerraform)(this._placementConstraints),
      proxy_configuration: cdktf.listMapper(ecsTaskDefinitionProxyConfigurationToTerraform)(this._proxyConfiguration),
      volume: cdktf.listMapper(ecsTaskDefinitionVolumeToTerraform)(this._volume),
    };
  }
}
