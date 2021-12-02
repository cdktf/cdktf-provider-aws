// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2 Container Service
*/
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
  readonly ephemeralStorage?: EcsTaskDefinitionEphemeralStorage;
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
  readonly proxyConfiguration?: EcsTaskDefinitionProxyConfiguration;
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

export function ecsTaskDefinitionEphemeralStorageToTerraform(struct?: EcsTaskDefinitionEphemeralStorageOutputReference | EcsTaskDefinitionEphemeralStorage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size_in_gib: cdktf.numberToTerraform(struct!.sizeInGib),
  }
}

export class EcsTaskDefinitionEphemeralStorageOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EcsTaskDefinitionEphemeralStorage | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._sizeInGib) {
      hasAnyValues = true;
      internalValueResult.sizeInGib = this._sizeInGib;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionEphemeralStorage | undefined) {
    if (value === undefined) {
      this._sizeInGib = undefined;
    }
    else {
      this._sizeInGib = value.sizeInGib;
    }
  }

  // size_in_gib - computed: false, optional: false, required: true
  private _sizeInGib?: number; 
  public get sizeInGib() {
    return this.getNumberAttribute('size_in_gib');
  }
  public set sizeInGib(value: number) {
    this._sizeInGib = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInGibInput() {
    return this._sizeInGib;
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

export function ecsTaskDefinitionInferenceAcceleratorToTerraform(struct?: EcsTaskDefinitionInferenceAccelerator): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function ecsTaskDefinitionPlacementConstraintsToTerraform(struct?: EcsTaskDefinitionPlacementConstraints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function ecsTaskDefinitionProxyConfigurationToTerraform(struct?: EcsTaskDefinitionProxyConfigurationOutputReference | EcsTaskDefinitionProxyConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class EcsTaskDefinitionProxyConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EcsTaskDefinitionProxyConfiguration | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._containerName) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._properties) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionProxyConfiguration | undefined) {
    if (value === undefined) {
      this._containerName = undefined;
      this._properties = undefined;
      this._type = undefined;
    }
    else {
      this._containerName = value.containerName;
      this._properties = value.properties;
      this._type = value.type;
    }
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string } | cdktf.IResolvable; 
  public get properties() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('properties') as any;
  }
  public set properties(value: { [key: string]: string } | cdktf.IResolvable) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

export function ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeDockerVolumeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoprovision: cdktf.booleanToTerraform(struct!.autoprovision),
    driver: cdktf.stringToTerraform(struct!.driver),
    driver_opts: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverOpts),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}

export class EcsTaskDefinitionVolumeDockerVolumeConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EcsTaskDefinitionVolumeDockerVolumeConfiguration | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._autoprovision) {
      hasAnyValues = true;
      internalValueResult.autoprovision = this._autoprovision;
    }
    if (this._driver) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._driverOpts) {
      hasAnyValues = true;
      internalValueResult.driverOpts = this._driverOpts;
    }
    if (this._labels) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._scope) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionVolumeDockerVolumeConfiguration | undefined) {
    if (value === undefined) {
      this._autoprovision = undefined;
      this._driver = undefined;
      this._driverOpts = undefined;
      this._labels = undefined;
      this._scope = undefined;
    }
    else {
      this._autoprovision = value.autoprovision;
      this._driver = value.driver;
      this._driverOpts = value.driverOpts;
      this._labels = value.labels;
      this._scope = value.scope;
    }
  }

  // autoprovision - computed: false, optional: true, required: false
  private _autoprovision?: boolean | cdktf.IResolvable; 
  public get autoprovision() {
    return this.getBooleanAttribute('autoprovision') as any;
  }
  public set autoprovision(value: boolean | cdktf.IResolvable) {
    this._autoprovision = value;
  }
  public resetAutoprovision() {
    this._autoprovision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoprovisionInput() {
    return this._autoprovision;
  }

  // driver - computed: false, optional: true, required: false
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  public resetDriver() {
    this._driver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // driver_opts - computed: false, optional: true, required: false
  private _driverOpts?: { [key: string]: string } | cdktf.IResolvable; 
  public get driverOpts() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('driver_opts') as any;
  }
  public set driverOpts(value: { [key: string]: string } | cdktf.IResolvable) {
    this._driverOpts = value;
  }
  public resetDriverOpts() {
    this._driverOpts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverOptsInput() {
    return this._driverOpts;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
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

export function ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform(struct?: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference | EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_point_id: cdktf.stringToTerraform(struct!.accessPointId),
    iam: cdktf.stringToTerraform(struct!.iam),
  }
}

export class EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._accessPointId) {
      hasAnyValues = true;
      internalValueResult.accessPointId = this._accessPointId;
    }
    if (this._iam) {
      hasAnyValues = true;
      internalValueResult.iam = this._iam;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig | undefined) {
    if (value === undefined) {
      this._accessPointId = undefined;
      this._iam = undefined;
    }
    else {
      this._accessPointId = value.accessPointId;
      this._iam = value.iam;
    }
  }

  // access_point_id - computed: false, optional: true, required: false
  private _accessPointId?: string; 
  public get accessPointId() {
    return this.getStringAttribute('access_point_id');
  }
  public set accessPointId(value: string) {
    this._accessPointId = value;
  }
  public resetAccessPointId() {
    this._accessPointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointIdInput() {
    return this._accessPointId;
  }

  // iam - computed: false, optional: true, required: false
  private _iam?: string; 
  public get iam() {
    return this.getStringAttribute('iam');
  }
  public set iam(value: string) {
    this._iam = value;
  }
  public resetIam() {
    this._iam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInput() {
    return this._iam;
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
  readonly authorizationConfig?: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig;
}

export function ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeEfsVolumeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    root_directory: cdktf.stringToTerraform(struct!.rootDirectory),
    transit_encryption: cdktf.stringToTerraform(struct!.transitEncryption),
    transit_encryption_port: cdktf.numberToTerraform(struct!.transitEncryptionPort),
    authorization_config: ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform(struct!.authorizationConfig),
  }
}

export class EcsTaskDefinitionVolumeEfsVolumeConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EcsTaskDefinitionVolumeEfsVolumeConfiguration | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._fileSystemId) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._rootDirectory) {
      hasAnyValues = true;
      internalValueResult.rootDirectory = this._rootDirectory;
    }
    if (this._transitEncryption) {
      hasAnyValues = true;
      internalValueResult.transitEncryption = this._transitEncryption;
    }
    if (this._transitEncryptionPort) {
      hasAnyValues = true;
      internalValueResult.transitEncryptionPort = this._transitEncryptionPort;
    }
    if (this._authorizationConfig) {
      hasAnyValues = true;
      internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionVolumeEfsVolumeConfiguration | undefined) {
    if (value === undefined) {
      this._fileSystemId = undefined;
      this._rootDirectory = undefined;
      this._transitEncryption = undefined;
      this._transitEncryptionPort = undefined;
      this._authorizationConfig.internalValue = undefined;
    }
    else {
      this._fileSystemId = value.fileSystemId;
      this._rootDirectory = value.rootDirectory;
      this._transitEncryption = value.transitEncryption;
      this._transitEncryptionPort = value.transitEncryptionPort;
      this._authorizationConfig.internalValue = value.authorizationConfig;
    }
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // root_directory - computed: false, optional: true, required: false
  private _rootDirectory?: string; 
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }
  public set rootDirectory(value: string) {
    this._rootDirectory = value;
  }
  public resetRootDirectory() {
    this._rootDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirectoryInput() {
    return this._rootDirectory;
  }

  // transit_encryption - computed: false, optional: true, required: false
  private _transitEncryption?: string; 
  public get transitEncryption() {
    return this.getStringAttribute('transit_encryption');
  }
  public set transitEncryption(value: string) {
    this._transitEncryption = value;
  }
  public resetTransitEncryption() {
    this._transitEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitEncryptionInput() {
    return this._transitEncryption;
  }

  // transit_encryption_port - computed: false, optional: true, required: false
  private _transitEncryptionPort?: number; 
  public get transitEncryptionPort() {
    return this.getNumberAttribute('transit_encryption_port');
  }
  public set transitEncryptionPort(value: number) {
    this._transitEncryptionPort = value;
  }
  public resetTransitEncryptionPort() {
    this._transitEncryptionPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitEncryptionPortInput() {
    return this._transitEncryptionPort;
  }

  // authorization_config - computed: false, optional: true, required: false
  private _authorizationConfig = new EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigOutputReference(this as any, "authorization_config", true);
  public get authorizationConfig() {
    return this._authorizationConfig;
  }
  public putAuthorizationConfig(value: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig) {
    this._authorizationConfig.internalValue = value;
  }
  public resetAuthorizationConfig() {
    this._authorizationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationConfigInput() {
    return this._authorizationConfig.internalValue;
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

export function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform(struct?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference | EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials_parameter: cdktf.stringToTerraform(struct!.credentialsParameter),
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}

export class EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._credentialsParameter) {
      hasAnyValues = true;
      internalValueResult.credentialsParameter = this._credentialsParameter;
    }
    if (this._domain) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig | undefined) {
    if (value === undefined) {
      this._credentialsParameter = undefined;
      this._domain = undefined;
    }
    else {
      this._credentialsParameter = value.credentialsParameter;
      this._domain = value.domain;
    }
  }

  // credentials_parameter - computed: false, optional: false, required: true
  private _credentialsParameter?: string; 
  public get credentialsParameter() {
    return this.getStringAttribute('credentials_parameter');
  }
  public set credentialsParameter(value: string) {
    this._credentialsParameter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsParameterInput() {
    return this._credentialsParameter;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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
  readonly authorizationConfig: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig;
}

export function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference | EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
    root_directory: cdktf.stringToTerraform(struct!.rootDirectory),
    authorization_config: ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform(struct!.authorizationConfig),
  }
}

export class EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._fileSystemId) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    if (this._rootDirectory) {
      hasAnyValues = true;
      internalValueResult.rootDirectory = this._rootDirectory;
    }
    if (this._authorizationConfig) {
      hasAnyValues = true;
      internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration | undefined) {
    if (value === undefined) {
      this._fileSystemId = undefined;
      this._rootDirectory = undefined;
      this._authorizationConfig.internalValue = undefined;
    }
    else {
      this._fileSystemId = value.fileSystemId;
      this._rootDirectory = value.rootDirectory;
      this._authorizationConfig.internalValue = value.authorizationConfig;
    }
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }

  // root_directory - computed: false, optional: false, required: true
  private _rootDirectory?: string; 
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }
  public set rootDirectory(value: string) {
    this._rootDirectory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirectoryInput() {
    return this._rootDirectory;
  }

  // authorization_config - computed: false, optional: false, required: true
  private _authorizationConfig = new EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigOutputReference(this as any, "authorization_config", true);
  public get authorizationConfig() {
    return this._authorizationConfig;
  }
  public putAuthorizationConfig(value: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig) {
    this._authorizationConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationConfigInput() {
    return this._authorizationConfig.internalValue;
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
  readonly dockerVolumeConfiguration?: EcsTaskDefinitionVolumeDockerVolumeConfiguration;
  /**
  * efs_volume_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#efs_volume_configuration EcsTaskDefinition#efs_volume_configuration}
  */
  readonly efsVolumeConfiguration?: EcsTaskDefinitionVolumeEfsVolumeConfiguration;
  /**
  * fsx_windows_file_server_volume_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#fsx_windows_file_server_volume_configuration EcsTaskDefinition#fsx_windows_file_server_volume_configuration}
  */
  readonly fsxWindowsFileServerVolumeConfiguration?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration;
}

export function ecsTaskDefinitionVolumeToTerraform(struct?: EcsTaskDefinitionVolume): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_path: cdktf.stringToTerraform(struct!.hostPath),
    name: cdktf.stringToTerraform(struct!.name),
    docker_volume_configuration: ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform(struct!.dockerVolumeConfiguration),
    efs_volume_configuration: ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform(struct!.efsVolumeConfiguration),
    fsx_windows_file_server_volume_configuration: ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform(struct!.fsxWindowsFileServerVolumeConfiguration),
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
    this._ephemeralStorage.internalValue = config.ephemeralStorage;
    this._inferenceAccelerator = config.inferenceAccelerator;
    this._placementConstraints = config.placementConstraints;
    this._proxyConfiguration.internalValue = config.proxyConfiguration;
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
  private _containerDefinitions?: string; 
  public get containerDefinitions() {
    return this.getStringAttribute('container_definitions');
  }
  public set containerDefinitions(value: string) {
    this._containerDefinitions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerDefinitionsInput() {
    return this._containerDefinitions;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // execution_role_arn - computed: false, optional: true, required: false
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  public resetExecutionRoleArn() {
    this._executionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
  }

  // family - computed: false, optional: false, required: true
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
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
  public set ipcMode(value: string) {
    this._ipcMode = value;
  }
  public resetIpcMode() {
    this._ipcMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipcModeInput() {
    return this._ipcMode;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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
    return this._networkMode;
  }

  // pid_mode - computed: false, optional: true, required: false
  private _pidMode?: string; 
  public get pidMode() {
    return this.getStringAttribute('pid_mode');
  }
  public set pidMode(value: string) {
    this._pidMode = value;
  }
  public resetPidMode() {
    this._pidMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidModeInput() {
    return this._pidMode;
  }

  // requires_compatibilities - computed: false, optional: true, required: false
  private _requiresCompatibilities?: string[]; 
  public get requiresCompatibilities() {
    return this.getListAttribute('requires_compatibilities');
  }
  public set requiresCompatibilities(value: string[]) {
    this._requiresCompatibilities = value;
  }
  public resetRequiresCompatibilities() {
    this._requiresCompatibilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresCompatibilitiesInput() {
    return this._requiresCompatibilities;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // task_role_arn - computed: false, optional: true, required: false
  private _taskRoleArn?: string; 
  public get taskRoleArn() {
    return this.getStringAttribute('task_role_arn');
  }
  public set taskRoleArn(value: string) {
    this._taskRoleArn = value;
  }
  public resetTaskRoleArn() {
    this._taskRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskRoleArnInput() {
    return this._taskRoleArn;
  }

  // ephemeral_storage - computed: false, optional: true, required: false
  private _ephemeralStorage = new EcsTaskDefinitionEphemeralStorageOutputReference(this as any, "ephemeral_storage", true);
  public get ephemeralStorage() {
    return this._ephemeralStorage;
  }
  public putEphemeralStorage(value: EcsTaskDefinitionEphemeralStorage) {
    this._ephemeralStorage.internalValue = value;
  }
  public resetEphemeralStorage() {
    this._ephemeralStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageInput() {
    return this._ephemeralStorage.internalValue;
  }

  // inference_accelerator - computed: false, optional: true, required: false
  private _inferenceAccelerator?: EcsTaskDefinitionInferenceAccelerator[]; 
  public get inferenceAccelerator() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('inference_accelerator') as any;
  }
  public set inferenceAccelerator(value: EcsTaskDefinitionInferenceAccelerator[]) {
    this._inferenceAccelerator = value;
  }
  public resetInferenceAccelerator() {
    this._inferenceAccelerator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceAcceleratorInput() {
    return this._inferenceAccelerator;
  }

  // placement_constraints - computed: false, optional: true, required: false
  private _placementConstraints?: EcsTaskDefinitionPlacementConstraints[]; 
  public get placementConstraints() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('placement_constraints') as any;
  }
  public set placementConstraints(value: EcsTaskDefinitionPlacementConstraints[]) {
    this._placementConstraints = value;
  }
  public resetPlacementConstraints() {
    this._placementConstraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConstraintsInput() {
    return this._placementConstraints;
  }

  // proxy_configuration - computed: false, optional: true, required: false
  private _proxyConfiguration = new EcsTaskDefinitionProxyConfigurationOutputReference(this as any, "proxy_configuration", true);
  public get proxyConfiguration() {
    return this._proxyConfiguration;
  }
  public putProxyConfiguration(value: EcsTaskDefinitionProxyConfiguration) {
    this._proxyConfiguration.internalValue = value;
  }
  public resetProxyConfiguration() {
    this._proxyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigurationInput() {
    return this._proxyConfiguration.internalValue;
  }

  // volume - computed: false, optional: true, required: false
  private _volume?: EcsTaskDefinitionVolume[]; 
  public get volume() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('volume') as any;
  }
  public set volume(value: EcsTaskDefinitionVolume[]) {
    this._volume = value;
  }
  public resetVolume() {
    this._volume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
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
      ephemeral_storage: ecsTaskDefinitionEphemeralStorageToTerraform(this._ephemeralStorage.internalValue),
      inference_accelerator: cdktf.listMapper(ecsTaskDefinitionInferenceAcceleratorToTerraform)(this._inferenceAccelerator),
      placement_constraints: cdktf.listMapper(ecsTaskDefinitionPlacementConstraintsToTerraform)(this._placementConstraints),
      proxy_configuration: ecsTaskDefinitionProxyConfigurationToTerraform(this._proxyConfiguration.internalValue),
      volume: cdktf.listMapper(ecsTaskDefinitionVolumeToTerraform)(this._volume),
    };
  }
}
