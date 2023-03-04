// https://www.terraform.io/docs/providers/aws/r/gamelift_fleet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GameliftFleetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#build_id GameliftFleet#build_id}
  */
  readonly buildId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#description GameliftFleet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#ec2_instance_type GameliftFleet#ec2_instance_type}
  */
  readonly ec2InstanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#fleet_type GameliftFleet#fleet_type}
  */
  readonly fleetType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#id GameliftFleet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#instance_role_arn GameliftFleet#instance_role_arn}
  */
  readonly instanceRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#metric_groups GameliftFleet#metric_groups}
  */
  readonly metricGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#name GameliftFleet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#new_game_session_protection_policy GameliftFleet#new_game_session_protection_policy}
  */
  readonly newGameSessionProtectionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#script_id GameliftFleet#script_id}
  */
  readonly scriptId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#tags GameliftFleet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#tags_all GameliftFleet#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * certificate_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#certificate_configuration GameliftFleet#certificate_configuration}
  */
  readonly certificateConfiguration?: GameliftFleetCertificateConfiguration;
  /**
  * ec2_inbound_permission block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#ec2_inbound_permission GameliftFleet#ec2_inbound_permission}
  */
  readonly ec2InboundPermission?: GameliftFleetEc2InboundPermission[] | cdktf.IResolvable;
  /**
  * resource_creation_limit_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#resource_creation_limit_policy GameliftFleet#resource_creation_limit_policy}
  */
  readonly resourceCreationLimitPolicy?: GameliftFleetResourceCreationLimitPolicy;
  /**
  * runtime_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#runtime_configuration GameliftFleet#runtime_configuration}
  */
  readonly runtimeConfiguration?: GameliftFleetRuntimeConfiguration;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#timeouts GameliftFleet#timeouts}
  */
  readonly timeouts?: GameliftFleetTimeouts;
}
export interface GameliftFleetCertificateConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#certificate_type GameliftFleet#certificate_type}
  */
  readonly certificateType?: string;
}

export function gameliftFleetCertificateConfigurationToTerraform(struct?: GameliftFleetCertificateConfigurationOutputReference | GameliftFleetCertificateConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_type: cdktf.stringToTerraform(struct!.certificateType),
  }
}

export class GameliftFleetCertificateConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GameliftFleetCertificateConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateType = this._certificateType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftFleetCertificateConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateType = value.certificateType;
    }
  }

  // certificate_type - computed: false, optional: true, required: false
  private _certificateType?: string; 
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }
  public set certificateType(value: string) {
    this._certificateType = value;
  }
  public resetCertificateType() {
    this._certificateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTypeInput() {
    return this._certificateType;
  }
}
export interface GameliftFleetEc2InboundPermission {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#from_port GameliftFleet#from_port}
  */
  readonly fromPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#ip_range GameliftFleet#ip_range}
  */
  readonly ipRange: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#protocol GameliftFleet#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#to_port GameliftFleet#to_port}
  */
  readonly toPort: number;
}

export function gameliftFleetEc2InboundPermissionToTerraform(struct?: GameliftFleetEc2InboundPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_port: cdktf.numberToTerraform(struct!.fromPort),
    ip_range: cdktf.stringToTerraform(struct!.ipRange),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    to_port: cdktf.numberToTerraform(struct!.toPort),
  }
}

export class GameliftFleetEc2InboundPermissionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GameliftFleetEc2InboundPermission | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPort = this._fromPort;
    }
    if (this._ipRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRange = this._ipRange;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftFleetEc2InboundPermission | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPort = undefined;
      this._ipRange = undefined;
      this._protocol = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPort = value.fromPort;
      this._ipRange = value.ipRange;
      this._protocol = value.protocol;
      this._toPort = value.toPort;
    }
  }

  // from_port - computed: false, optional: false, required: true
  private _fromPort?: number; 
  public get fromPort() {
    return this.getNumberAttribute('from_port');
  }
  public set fromPort(value: number) {
    this._fromPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPortInput() {
    return this._fromPort;
  }

  // ip_range - computed: false, optional: false, required: true
  private _ipRange?: string; 
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }
  public set ipRange(value: string) {
    this._ipRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // to_port - computed: false, optional: false, required: true
  private _toPort?: number; 
  public get toPort() {
    return this.getNumberAttribute('to_port');
  }
  public set toPort(value: number) {
    this._toPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class GameliftFleetEc2InboundPermissionList extends cdktf.ComplexList {
  public internalValue? : GameliftFleetEc2InboundPermission[] | cdktf.IResolvable

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
  public get(index: number): GameliftFleetEc2InboundPermissionOutputReference {
    return new GameliftFleetEc2InboundPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GameliftFleetResourceCreationLimitPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#new_game_sessions_per_creator GameliftFleet#new_game_sessions_per_creator}
  */
  readonly newGameSessionsPerCreator?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#policy_period_in_minutes GameliftFleet#policy_period_in_minutes}
  */
  readonly policyPeriodInMinutes?: number;
}

export function gameliftFleetResourceCreationLimitPolicyToTerraform(struct?: GameliftFleetResourceCreationLimitPolicyOutputReference | GameliftFleetResourceCreationLimitPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_game_sessions_per_creator: cdktf.numberToTerraform(struct!.newGameSessionsPerCreator),
    policy_period_in_minutes: cdktf.numberToTerraform(struct!.policyPeriodInMinutes),
  }
}

export class GameliftFleetResourceCreationLimitPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GameliftFleetResourceCreationLimitPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newGameSessionsPerCreator !== undefined) {
      hasAnyValues = true;
      internalValueResult.newGameSessionsPerCreator = this._newGameSessionsPerCreator;
    }
    if (this._policyPeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyPeriodInMinutes = this._policyPeriodInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftFleetResourceCreationLimitPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._newGameSessionsPerCreator = undefined;
      this._policyPeriodInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._newGameSessionsPerCreator = value.newGameSessionsPerCreator;
      this._policyPeriodInMinutes = value.policyPeriodInMinutes;
    }
  }

  // new_game_sessions_per_creator - computed: false, optional: true, required: false
  private _newGameSessionsPerCreator?: number; 
  public get newGameSessionsPerCreator() {
    return this.getNumberAttribute('new_game_sessions_per_creator');
  }
  public set newGameSessionsPerCreator(value: number) {
    this._newGameSessionsPerCreator = value;
  }
  public resetNewGameSessionsPerCreator() {
    this._newGameSessionsPerCreator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newGameSessionsPerCreatorInput() {
    return this._newGameSessionsPerCreator;
  }

  // policy_period_in_minutes - computed: false, optional: true, required: false
  private _policyPeriodInMinutes?: number; 
  public get policyPeriodInMinutes() {
    return this.getNumberAttribute('policy_period_in_minutes');
  }
  public set policyPeriodInMinutes(value: number) {
    this._policyPeriodInMinutes = value;
  }
  public resetPolicyPeriodInMinutes() {
    this._policyPeriodInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyPeriodInMinutesInput() {
    return this._policyPeriodInMinutes;
  }
}
export interface GameliftFleetRuntimeConfigurationServerProcess {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#concurrent_executions GameliftFleet#concurrent_executions}
  */
  readonly concurrentExecutions: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#launch_path GameliftFleet#launch_path}
  */
  readonly launchPath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#parameters GameliftFleet#parameters}
  */
  readonly parameters?: string;
}

export function gameliftFleetRuntimeConfigurationServerProcessToTerraform(struct?: GameliftFleetRuntimeConfigurationServerProcess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrent_executions: cdktf.numberToTerraform(struct!.concurrentExecutions),
    launch_path: cdktf.stringToTerraform(struct!.launchPath),
    parameters: cdktf.stringToTerraform(struct!.parameters),
  }
}

export class GameliftFleetRuntimeConfigurationServerProcessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GameliftFleetRuntimeConfigurationServerProcess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrentExecutions !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentExecutions = this._concurrentExecutions;
    }
    if (this._launchPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchPath = this._launchPath;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftFleetRuntimeConfigurationServerProcess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrentExecutions = undefined;
      this._launchPath = undefined;
      this._parameters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrentExecutions = value.concurrentExecutions;
      this._launchPath = value.launchPath;
      this._parameters = value.parameters;
    }
  }

  // concurrent_executions - computed: false, optional: false, required: true
  private _concurrentExecutions?: number; 
  public get concurrentExecutions() {
    return this.getNumberAttribute('concurrent_executions');
  }
  public set concurrentExecutions(value: number) {
    this._concurrentExecutions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentExecutionsInput() {
    return this._concurrentExecutions;
  }

  // launch_path - computed: false, optional: false, required: true
  private _launchPath?: string; 
  public get launchPath() {
    return this.getStringAttribute('launch_path');
  }
  public set launchPath(value: string) {
    this._launchPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchPathInput() {
    return this._launchPath;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}

export class GameliftFleetRuntimeConfigurationServerProcessList extends cdktf.ComplexList {
  public internalValue? : GameliftFleetRuntimeConfigurationServerProcess[] | cdktf.IResolvable

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
  public get(index: number): GameliftFleetRuntimeConfigurationServerProcessOutputReference {
    return new GameliftFleetRuntimeConfigurationServerProcessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GameliftFleetRuntimeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#game_session_activation_timeout_seconds GameliftFleet#game_session_activation_timeout_seconds}
  */
  readonly gameSessionActivationTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#max_concurrent_game_session_activations GameliftFleet#max_concurrent_game_session_activations}
  */
  readonly maxConcurrentGameSessionActivations?: number;
  /**
  * server_process block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#server_process GameliftFleet#server_process}
  */
  readonly serverProcess?: GameliftFleetRuntimeConfigurationServerProcess[] | cdktf.IResolvable;
}

export function gameliftFleetRuntimeConfigurationToTerraform(struct?: GameliftFleetRuntimeConfigurationOutputReference | GameliftFleetRuntimeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    game_session_activation_timeout_seconds: cdktf.numberToTerraform(struct!.gameSessionActivationTimeoutSeconds),
    max_concurrent_game_session_activations: cdktf.numberToTerraform(struct!.maxConcurrentGameSessionActivations),
    server_process: cdktf.listMapper(gameliftFleetRuntimeConfigurationServerProcessToTerraform, true)(struct!.serverProcess),
  }
}

export class GameliftFleetRuntimeConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GameliftFleetRuntimeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gameSessionActivationTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.gameSessionActivationTimeoutSeconds = this._gameSessionActivationTimeoutSeconds;
    }
    if (this._maxConcurrentGameSessionActivations !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentGameSessionActivations = this._maxConcurrentGameSessionActivations;
    }
    if (this._serverProcess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverProcess = this._serverProcess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftFleetRuntimeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gameSessionActivationTimeoutSeconds = undefined;
      this._maxConcurrentGameSessionActivations = undefined;
      this._serverProcess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gameSessionActivationTimeoutSeconds = value.gameSessionActivationTimeoutSeconds;
      this._maxConcurrentGameSessionActivations = value.maxConcurrentGameSessionActivations;
      this._serverProcess.internalValue = value.serverProcess;
    }
  }

  // game_session_activation_timeout_seconds - computed: false, optional: true, required: false
  private _gameSessionActivationTimeoutSeconds?: number; 
  public get gameSessionActivationTimeoutSeconds() {
    return this.getNumberAttribute('game_session_activation_timeout_seconds');
  }
  public set gameSessionActivationTimeoutSeconds(value: number) {
    this._gameSessionActivationTimeoutSeconds = value;
  }
  public resetGameSessionActivationTimeoutSeconds() {
    this._gameSessionActivationTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gameSessionActivationTimeoutSecondsInput() {
    return this._gameSessionActivationTimeoutSeconds;
  }

  // max_concurrent_game_session_activations - computed: false, optional: true, required: false
  private _maxConcurrentGameSessionActivations?: number; 
  public get maxConcurrentGameSessionActivations() {
    return this.getNumberAttribute('max_concurrent_game_session_activations');
  }
  public set maxConcurrentGameSessionActivations(value: number) {
    this._maxConcurrentGameSessionActivations = value;
  }
  public resetMaxConcurrentGameSessionActivations() {
    this._maxConcurrentGameSessionActivations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentGameSessionActivationsInput() {
    return this._maxConcurrentGameSessionActivations;
  }

  // server_process - computed: false, optional: true, required: false
  private _serverProcess = new GameliftFleetRuntimeConfigurationServerProcessList(this, "server_process", false);
  public get serverProcess() {
    return this._serverProcess;
  }
  public putServerProcess(value: GameliftFleetRuntimeConfigurationServerProcess[] | cdktf.IResolvable) {
    this._serverProcess.internalValue = value;
  }
  public resetServerProcess() {
    this._serverProcess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProcessInput() {
    return this._serverProcess.internalValue;
  }
}
export interface GameliftFleetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#create GameliftFleet#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet#delete GameliftFleet#delete}
  */
  readonly delete?: string;
}

export function gameliftFleetTimeoutsToTerraform(struct?: GameliftFleetTimeoutsOutputReference | GameliftFleetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class GameliftFleetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GameliftFleetTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameliftFleetTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet aws_gamelift_fleet}
*/
export class GameliftFleet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_gamelift_fleet";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet aws_gamelift_fleet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GameliftFleetConfig
  */
  public constructor(scope: Construct, id: string, config: GameliftFleetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_gamelift_fleet',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
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
    this._buildId = config.buildId;
    this._description = config.description;
    this._ec2InstanceType = config.ec2InstanceType;
    this._fleetType = config.fleetType;
    this._id = config.id;
    this._instanceRoleArn = config.instanceRoleArn;
    this._metricGroups = config.metricGroups;
    this._name = config.name;
    this._newGameSessionProtectionPolicy = config.newGameSessionProtectionPolicy;
    this._scriptId = config.scriptId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._certificateConfiguration.internalValue = config.certificateConfiguration;
    this._ec2InboundPermission.internalValue = config.ec2InboundPermission;
    this._resourceCreationLimitPolicy.internalValue = config.resourceCreationLimitPolicy;
    this._runtimeConfiguration.internalValue = config.runtimeConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // build_arn - computed: true, optional: false, required: false
  public get buildArn() {
    return this.getStringAttribute('build_arn');
  }

  // build_id - computed: false, optional: true, required: false
  private _buildId?: string; 
  public get buildId() {
    return this.getStringAttribute('build_id');
  }
  public set buildId(value: string) {
    this._buildId = value;
  }
  public resetBuildId() {
    this._buildId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildIdInput() {
    return this._buildId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // ec2_instance_type - computed: false, optional: false, required: true
  private _ec2InstanceType?: string; 
  public get ec2InstanceType() {
    return this.getStringAttribute('ec2_instance_type');
  }
  public set ec2InstanceType(value: string) {
    this._ec2InstanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2InstanceTypeInput() {
    return this._ec2InstanceType;
  }

  // fleet_type - computed: false, optional: true, required: false
  private _fleetType?: string; 
  public get fleetType() {
    return this.getStringAttribute('fleet_type');
  }
  public set fleetType(value: string) {
    this._fleetType = value;
  }
  public resetFleetType() {
    this._fleetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetTypeInput() {
    return this._fleetType;
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

  // instance_role_arn - computed: false, optional: true, required: false
  private _instanceRoleArn?: string; 
  public get instanceRoleArn() {
    return this.getStringAttribute('instance_role_arn');
  }
  public set instanceRoleArn(value: string) {
    this._instanceRoleArn = value;
  }
  public resetInstanceRoleArn() {
    this._instanceRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceRoleArnInput() {
    return this._instanceRoleArn;
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
    return this._metricGroups;
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

  // new_game_session_protection_policy - computed: false, optional: true, required: false
  private _newGameSessionProtectionPolicy?: string; 
  public get newGameSessionProtectionPolicy() {
    return this.getStringAttribute('new_game_session_protection_policy');
  }
  public set newGameSessionProtectionPolicy(value: string) {
    this._newGameSessionProtectionPolicy = value;
  }
  public resetNewGameSessionProtectionPolicy() {
    this._newGameSessionProtectionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newGameSessionProtectionPolicyInput() {
    return this._newGameSessionProtectionPolicy;
  }

  // operating_system - computed: true, optional: false, required: false
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }

  // script_arn - computed: true, optional: false, required: false
  public get scriptArn() {
    return this.getStringAttribute('script_arn');
  }

  // script_id - computed: false, optional: true, required: false
  private _scriptId?: string; 
  public get scriptId() {
    return this.getStringAttribute('script_id');
  }
  public set scriptId(value: string) {
    this._scriptId = value;
  }
  public resetScriptId() {
    this._scriptId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptIdInput() {
    return this._scriptId;
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

  // certificate_configuration - computed: false, optional: true, required: false
  private _certificateConfiguration = new GameliftFleetCertificateConfigurationOutputReference(this, "certificate_configuration");
  public get certificateConfiguration() {
    return this._certificateConfiguration;
  }
  public putCertificateConfiguration(value: GameliftFleetCertificateConfiguration) {
    this._certificateConfiguration.internalValue = value;
  }
  public resetCertificateConfiguration() {
    this._certificateConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateConfigurationInput() {
    return this._certificateConfiguration.internalValue;
  }

  // ec2_inbound_permission - computed: false, optional: true, required: false
  private _ec2InboundPermission = new GameliftFleetEc2InboundPermissionList(this, "ec2_inbound_permission", true);
  public get ec2InboundPermission() {
    return this._ec2InboundPermission;
  }
  public putEc2InboundPermission(value: GameliftFleetEc2InboundPermission[] | cdktf.IResolvable) {
    this._ec2InboundPermission.internalValue = value;
  }
  public resetEc2InboundPermission() {
    this._ec2InboundPermission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2InboundPermissionInput() {
    return this._ec2InboundPermission.internalValue;
  }

  // resource_creation_limit_policy - computed: false, optional: true, required: false
  private _resourceCreationLimitPolicy = new GameliftFleetResourceCreationLimitPolicyOutputReference(this, "resource_creation_limit_policy");
  public get resourceCreationLimitPolicy() {
    return this._resourceCreationLimitPolicy;
  }
  public putResourceCreationLimitPolicy(value: GameliftFleetResourceCreationLimitPolicy) {
    this._resourceCreationLimitPolicy.internalValue = value;
  }
  public resetResourceCreationLimitPolicy() {
    this._resourceCreationLimitPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceCreationLimitPolicyInput() {
    return this._resourceCreationLimitPolicy.internalValue;
  }

  // runtime_configuration - computed: false, optional: true, required: false
  private _runtimeConfiguration = new GameliftFleetRuntimeConfigurationOutputReference(this, "runtime_configuration");
  public get runtimeConfiguration() {
    return this._runtimeConfiguration;
  }
  public putRuntimeConfiguration(value: GameliftFleetRuntimeConfiguration) {
    this._runtimeConfiguration.internalValue = value;
  }
  public resetRuntimeConfiguration() {
    this._runtimeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigurationInput() {
    return this._runtimeConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GameliftFleetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GameliftFleetTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      id: cdktf.stringToTerraform(this._id),
      instance_role_arn: cdktf.stringToTerraform(this._instanceRoleArn),
      metric_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._metricGroups),
      name: cdktf.stringToTerraform(this._name),
      new_game_session_protection_policy: cdktf.stringToTerraform(this._newGameSessionProtectionPolicy),
      script_id: cdktf.stringToTerraform(this._scriptId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      certificate_configuration: gameliftFleetCertificateConfigurationToTerraform(this._certificateConfiguration.internalValue),
      ec2_inbound_permission: cdktf.listMapper(gameliftFleetEc2InboundPermissionToTerraform, true)(this._ec2InboundPermission.internalValue),
      resource_creation_limit_policy: gameliftFleetResourceCreationLimitPolicyToTerraform(this._resourceCreationLimitPolicy.internalValue),
      runtime_configuration: gameliftFleetRuntimeConfigurationToTerraform(this._runtimeConfiguration.internalValue),
      timeouts: gameliftFleetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
