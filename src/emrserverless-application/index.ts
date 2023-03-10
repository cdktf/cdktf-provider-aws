// https://www.terraform.io/docs/providers/aws/r/emrserverless_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmrserverlessApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#architecture EmrserverlessApplication#architecture}
  */
  readonly architecture?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#id EmrserverlessApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#name EmrserverlessApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#release_label EmrserverlessApplication#release_label}
  */
  readonly releaseLabel: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#tags EmrserverlessApplication#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#tags_all EmrserverlessApplication#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#type EmrserverlessApplication#type}
  */
  readonly type: string;
  /**
  * auto_start_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#auto_start_configuration EmrserverlessApplication#auto_start_configuration}
  */
  readonly autoStartConfiguration?: EmrserverlessApplicationAutoStartConfiguration;
  /**
  * auto_stop_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#auto_stop_configuration EmrserverlessApplication#auto_stop_configuration}
  */
  readonly autoStopConfiguration?: EmrserverlessApplicationAutoStopConfiguration;
  /**
  * initial_capacity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#initial_capacity EmrserverlessApplication#initial_capacity}
  */
  readonly initialCapacity?: EmrserverlessApplicationInitialCapacity[] | cdktf.IResolvable;
  /**
  * maximum_capacity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#maximum_capacity EmrserverlessApplication#maximum_capacity}
  */
  readonly maximumCapacity?: EmrserverlessApplicationMaximumCapacity;
  /**
  * network_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#network_configuration EmrserverlessApplication#network_configuration}
  */
  readonly networkConfiguration?: EmrserverlessApplicationNetworkConfiguration;
}
export interface EmrserverlessApplicationAutoStartConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#enabled EmrserverlessApplication#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function emrserverlessApplicationAutoStartConfigurationToTerraform(struct?: EmrserverlessApplicationAutoStartConfigurationOutputReference | EmrserverlessApplicationAutoStartConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class EmrserverlessApplicationAutoStartConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrserverlessApplicationAutoStartConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationAutoStartConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface EmrserverlessApplicationAutoStopConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#enabled EmrserverlessApplication#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#idle_timeout_minutes EmrserverlessApplication#idle_timeout_minutes}
  */
  readonly idleTimeoutMinutes?: number;
}

export function emrserverlessApplicationAutoStopConfigurationToTerraform(struct?: EmrserverlessApplicationAutoStopConfigurationOutputReference | EmrserverlessApplicationAutoStopConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    idle_timeout_minutes: cdktf.numberToTerraform(struct!.idleTimeoutMinutes),
  }
}

export class EmrserverlessApplicationAutoStopConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrserverlessApplicationAutoStopConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._idleTimeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutMinutes = this._idleTimeoutMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationAutoStopConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._idleTimeoutMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._idleTimeoutMinutes = value.idleTimeoutMinutes;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // idle_timeout_minutes - computed: false, optional: true, required: false
  private _idleTimeoutMinutes?: number; 
  public get idleTimeoutMinutes() {
    return this.getNumberAttribute('idle_timeout_minutes');
  }
  public set idleTimeoutMinutes(value: number) {
    this._idleTimeoutMinutes = value;
  }
  public resetIdleTimeoutMinutes() {
    this._idleTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutMinutesInput() {
    return this._idleTimeoutMinutes;
  }
}
export interface EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#cpu EmrserverlessApplication#cpu}
  */
  readonly cpu: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#disk EmrserverlessApplication#disk}
  */
  readonly disk?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#memory EmrserverlessApplication#memory}
  */
  readonly memory: string;
}

export function emrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationToTerraform(struct?: EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference | EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    disk: cdktf.stringToTerraform(struct!.disk),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}

export class EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._disk = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._disk = value.disk;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk - computed: true, optional: true, required: false
  private _disk?: string; 
  public get disk() {
    return this.getStringAttribute('disk');
  }
  public set disk(value: string) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface EmrserverlessApplicationInitialCapacityInitialCapacityConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#worker_count EmrserverlessApplication#worker_count}
  */
  readonly workerCount: number;
  /**
  * worker_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#worker_configuration EmrserverlessApplication#worker_configuration}
  */
  readonly workerConfiguration?: EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration;
}

export function emrserverlessApplicationInitialCapacityInitialCapacityConfigToTerraform(struct?: EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference | EmrserverlessApplicationInitialCapacityInitialCapacityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    worker_count: cdktf.numberToTerraform(struct!.workerCount),
    worker_configuration: emrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationToTerraform(struct!.workerConfiguration),
  }
}

export class EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrserverlessApplicationInitialCapacityInitialCapacityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerCount = this._workerCount;
    }
    if (this._workerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerConfiguration = this._workerConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationInitialCapacityInitialCapacityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workerCount = undefined;
      this._workerConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workerCount = value.workerCount;
      this._workerConfiguration.internalValue = value.workerConfiguration;
    }
  }

  // worker_count - computed: false, optional: false, required: true
  private _workerCount?: number; 
  public get workerCount() {
    return this.getNumberAttribute('worker_count');
  }
  public set workerCount(value: number) {
    this._workerCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerCountInput() {
    return this._workerCount;
  }

  // worker_configuration - computed: false, optional: true, required: false
  private _workerConfiguration = new EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfigurationOutputReference(this, "worker_configuration");
  public get workerConfiguration() {
    return this._workerConfiguration;
  }
  public putWorkerConfiguration(value: EmrserverlessApplicationInitialCapacityInitialCapacityConfigWorkerConfiguration) {
    this._workerConfiguration.internalValue = value;
  }
  public resetWorkerConfiguration() {
    this._workerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerConfigurationInput() {
    return this._workerConfiguration.internalValue;
  }
}
export interface EmrserverlessApplicationInitialCapacity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#initial_capacity_type EmrserverlessApplication#initial_capacity_type}
  */
  readonly initialCapacityType: string;
  /**
  * initial_capacity_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#initial_capacity_config EmrserverlessApplication#initial_capacity_config}
  */
  readonly initialCapacityConfig?: EmrserverlessApplicationInitialCapacityInitialCapacityConfig;
}

export function emrserverlessApplicationInitialCapacityToTerraform(struct?: EmrserverlessApplicationInitialCapacity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initial_capacity_type: cdktf.stringToTerraform(struct!.initialCapacityType),
    initial_capacity_config: emrserverlessApplicationInitialCapacityInitialCapacityConfigToTerraform(struct!.initialCapacityConfig),
  }
}

export class EmrserverlessApplicationInitialCapacityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EmrserverlessApplicationInitialCapacity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initialCapacityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialCapacityType = this._initialCapacityType;
    }
    if (this._initialCapacityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialCapacityConfig = this._initialCapacityConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationInitialCapacity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._initialCapacityType = undefined;
      this._initialCapacityConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._initialCapacityType = value.initialCapacityType;
      this._initialCapacityConfig.internalValue = value.initialCapacityConfig;
    }
  }

  // initial_capacity_type - computed: false, optional: false, required: true
  private _initialCapacityType?: string; 
  public get initialCapacityType() {
    return this.getStringAttribute('initial_capacity_type');
  }
  public set initialCapacityType(value: string) {
    this._initialCapacityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialCapacityTypeInput() {
    return this._initialCapacityType;
  }

  // initial_capacity_config - computed: false, optional: true, required: false
  private _initialCapacityConfig = new EmrserverlessApplicationInitialCapacityInitialCapacityConfigOutputReference(this, "initial_capacity_config");
  public get initialCapacityConfig() {
    return this._initialCapacityConfig;
  }
  public putInitialCapacityConfig(value: EmrserverlessApplicationInitialCapacityInitialCapacityConfig) {
    this._initialCapacityConfig.internalValue = value;
  }
  public resetInitialCapacityConfig() {
    this._initialCapacityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialCapacityConfigInput() {
    return this._initialCapacityConfig.internalValue;
  }
}

export class EmrserverlessApplicationInitialCapacityList extends cdktf.ComplexList {
  public internalValue? : EmrserverlessApplicationInitialCapacity[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): EmrserverlessApplicationInitialCapacityOutputReference {
    return new EmrserverlessApplicationInitialCapacityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrserverlessApplicationMaximumCapacity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#cpu EmrserverlessApplication#cpu}
  */
  readonly cpu: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#disk EmrserverlessApplication#disk}
  */
  readonly disk?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#memory EmrserverlessApplication#memory}
  */
  readonly memory: string;
}

export function emrserverlessApplicationMaximumCapacityToTerraform(struct?: EmrserverlessApplicationMaximumCapacityOutputReference | EmrserverlessApplicationMaximumCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    disk: cdktf.stringToTerraform(struct!.disk),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}

export class EmrserverlessApplicationMaximumCapacityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrserverlessApplicationMaximumCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationMaximumCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._disk = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._disk = value.disk;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk - computed: true, optional: true, required: false
  private _disk?: string; 
  public get disk() {
    return this.getStringAttribute('disk');
  }
  public set disk(value: string) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface EmrserverlessApplicationNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#security_group_ids EmrserverlessApplication#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application#subnet_ids EmrserverlessApplication#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function emrserverlessApplicationNetworkConfigurationToTerraform(struct?: EmrserverlessApplicationNetworkConfigurationOutputReference | EmrserverlessApplicationNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
  }
}

export class EmrserverlessApplicationNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrserverlessApplicationNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrserverlessApplicationNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application aws_emrserverless_application}
*/
export class EmrserverlessApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_emrserverless_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emrserverless_application aws_emrserverless_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmrserverlessApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: EmrserverlessApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_emrserverless_application',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._architecture = config.architecture;
    this._id = config.id;
    this._name = config.name;
    this._releaseLabel = config.releaseLabel;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._autoStartConfiguration.internalValue = config.autoStartConfiguration;
    this._autoStopConfiguration.internalValue = config.autoStopConfiguration;
    this._initialCapacity.internalValue = config.initialCapacity;
    this._maximumCapacity.internalValue = config.maximumCapacity;
    this._networkConfiguration.internalValue = config.networkConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // architecture - computed: false, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // release_label - computed: false, optional: false, required: true
  private _releaseLabel?: string; 
  public get releaseLabel() {
    return this.getStringAttribute('release_label');
  }
  public set releaseLabel(value: string) {
    this._releaseLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseLabelInput() {
    return this._releaseLabel;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
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
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // auto_start_configuration - computed: false, optional: true, required: false
  private _autoStartConfiguration = new EmrserverlessApplicationAutoStartConfigurationOutputReference(this, "auto_start_configuration");
  public get autoStartConfiguration() {
    return this._autoStartConfiguration;
  }
  public putAutoStartConfiguration(value: EmrserverlessApplicationAutoStartConfiguration) {
    this._autoStartConfiguration.internalValue = value;
  }
  public resetAutoStartConfiguration() {
    this._autoStartConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStartConfigurationInput() {
    return this._autoStartConfiguration.internalValue;
  }

  // auto_stop_configuration - computed: false, optional: true, required: false
  private _autoStopConfiguration = new EmrserverlessApplicationAutoStopConfigurationOutputReference(this, "auto_stop_configuration");
  public get autoStopConfiguration() {
    return this._autoStopConfiguration;
  }
  public putAutoStopConfiguration(value: EmrserverlessApplicationAutoStopConfiguration) {
    this._autoStopConfiguration.internalValue = value;
  }
  public resetAutoStopConfiguration() {
    this._autoStopConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStopConfigurationInput() {
    return this._autoStopConfiguration.internalValue;
  }

  // initial_capacity - computed: false, optional: true, required: false
  private _initialCapacity = new EmrserverlessApplicationInitialCapacityList(this, "initial_capacity", true);
  public get initialCapacity() {
    return this._initialCapacity;
  }
  public putInitialCapacity(value: EmrserverlessApplicationInitialCapacity[] | cdktf.IResolvable) {
    this._initialCapacity.internalValue = value;
  }
  public resetInitialCapacity() {
    this._initialCapacity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialCapacityInput() {
    return this._initialCapacity.internalValue;
  }

  // maximum_capacity - computed: false, optional: true, required: false
  private _maximumCapacity = new EmrserverlessApplicationMaximumCapacityOutputReference(this, "maximum_capacity");
  public get maximumCapacity() {
    return this._maximumCapacity;
  }
  public putMaximumCapacity(value: EmrserverlessApplicationMaximumCapacity) {
    this._maximumCapacity.internalValue = value;
  }
  public resetMaximumCapacity() {
    this._maximumCapacity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumCapacityInput() {
    return this._maximumCapacity.internalValue;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new EmrserverlessApplicationNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: EmrserverlessApplicationNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      architecture: cdktf.stringToTerraform(this._architecture),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      release_label: cdktf.stringToTerraform(this._releaseLabel),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
      auto_start_configuration: emrserverlessApplicationAutoStartConfigurationToTerraform(this._autoStartConfiguration.internalValue),
      auto_stop_configuration: emrserverlessApplicationAutoStopConfigurationToTerraform(this._autoStopConfiguration.internalValue),
      initial_capacity: cdktf.listMapper(emrserverlessApplicationInitialCapacityToTerraform, true)(this._initialCapacity.internalValue),
      maximum_capacity: emrserverlessApplicationMaximumCapacityToTerraform(this._maximumCapacity.internalValue),
      network_configuration: emrserverlessApplicationNetworkConfigurationToTerraform(this._networkConfiguration.internalValue),
    };
  }
}
