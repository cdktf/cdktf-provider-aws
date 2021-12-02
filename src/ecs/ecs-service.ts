// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2 Container Service
*/
export interface EcsServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#cluster EcsService#cluster}
  */
  readonly cluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#deployment_maximum_percent EcsService#deployment_maximum_percent}
  */
  readonly deploymentMaximumPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#deployment_minimum_healthy_percent EcsService#deployment_minimum_healthy_percent}
  */
  readonly deploymentMinimumHealthyPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#desired_count EcsService#desired_count}
  */
  readonly desiredCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#enable_ecs_managed_tags EcsService#enable_ecs_managed_tags}
  */
  readonly enableEcsManagedTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#enable_execute_command EcsService#enable_execute_command}
  */
  readonly enableExecuteCommand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#force_new_deployment EcsService#force_new_deployment}
  */
  readonly forceNewDeployment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#health_check_grace_period_seconds EcsService#health_check_grace_period_seconds}
  */
  readonly healthCheckGracePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#iam_role EcsService#iam_role}
  */
  readonly iamRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#launch_type EcsService#launch_type}
  */
  readonly launchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#name EcsService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#platform_version EcsService#platform_version}
  */
  readonly platformVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#propagate_tags EcsService#propagate_tags}
  */
  readonly propagateTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#scheduling_strategy EcsService#scheduling_strategy}
  */
  readonly schedulingStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#tags EcsService#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#tags_all EcsService#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#task_definition EcsService#task_definition}
  */
  readonly taskDefinition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#wait_for_steady_state EcsService#wait_for_steady_state}
  */
  readonly waitForSteadyState?: boolean | cdktf.IResolvable;
  /**
  * capacity_provider_strategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#capacity_provider_strategy EcsService#capacity_provider_strategy}
  */
  readonly capacityProviderStrategy?: EcsServiceCapacityProviderStrategy[];
  /**
  * deployment_circuit_breaker block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#deployment_circuit_breaker EcsService#deployment_circuit_breaker}
  */
  readonly deploymentCircuitBreaker?: EcsServiceDeploymentCircuitBreaker;
  /**
  * deployment_controller block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#deployment_controller EcsService#deployment_controller}
  */
  readonly deploymentController?: EcsServiceDeploymentController;
  /**
  * load_balancer block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#load_balancer EcsService#load_balancer}
  */
  readonly loadBalancer?: EcsServiceLoadBalancer[];
  /**
  * network_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#network_configuration EcsService#network_configuration}
  */
  readonly networkConfiguration?: EcsServiceNetworkConfiguration;
  /**
  * ordered_placement_strategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#ordered_placement_strategy EcsService#ordered_placement_strategy}
  */
  readonly orderedPlacementStrategy?: EcsServiceOrderedPlacementStrategy[];
  /**
  * placement_constraints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#placement_constraints EcsService#placement_constraints}
  */
  readonly placementConstraints?: EcsServicePlacementConstraints[];
  /**
  * service_registries block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#service_registries EcsService#service_registries}
  */
  readonly serviceRegistries?: EcsServiceServiceRegistries;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#timeouts EcsService#timeouts}
  */
  readonly timeouts?: EcsServiceTimeouts;
}
export interface EcsServiceCapacityProviderStrategy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#base EcsService#base}
  */
  readonly base?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#capacity_provider EcsService#capacity_provider}
  */
  readonly capacityProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#weight EcsService#weight}
  */
  readonly weight?: number;
}

export function ecsServiceCapacityProviderStrategyToTerraform(struct?: EcsServiceCapacityProviderStrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base: cdktf.numberToTerraform(struct!.base),
    capacity_provider: cdktf.stringToTerraform(struct!.capacityProvider),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface EcsServiceDeploymentCircuitBreaker {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#enable EcsService#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#rollback EcsService#rollback}
  */
  readonly rollback: boolean | cdktf.IResolvable;
}

export function ecsServiceDeploymentCircuitBreakerToTerraform(struct?: EcsServiceDeploymentCircuitBreakerOutputReference | EcsServiceDeploymentCircuitBreaker): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    rollback: cdktf.booleanToTerraform(struct!.rollback),
  }
}

export class EcsServiceDeploymentCircuitBreakerOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EcsServiceDeploymentCircuitBreaker | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._enable) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._rollback) {
      hasAnyValues = true;
      internalValueResult.rollback = this._rollback;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceDeploymentCircuitBreaker | undefined) {
    if (value === undefined) {
      this._enable = undefined;
      this._rollback = undefined;
    }
    else {
      this._enable = value.enable;
      this._rollback = value.rollback;
    }
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable') as any;
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // rollback - computed: false, optional: false, required: true
  private _rollback?: boolean | cdktf.IResolvable; 
  public get rollback() {
    return this.getBooleanAttribute('rollback') as any;
  }
  public set rollback(value: boolean | cdktf.IResolvable) {
    this._rollback = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackInput() {
    return this._rollback;
  }
}
export interface EcsServiceDeploymentController {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#type EcsService#type}
  */
  readonly type?: string;
}

export function ecsServiceDeploymentControllerToTerraform(struct?: EcsServiceDeploymentControllerOutputReference | EcsServiceDeploymentController): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class EcsServiceDeploymentControllerOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EcsServiceDeploymentController | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceDeploymentController | undefined) {
    if (value === undefined) {
      this._type = undefined;
    }
    else {
      this._type = value.type;
    }
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
export interface EcsServiceLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#container_name EcsService#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#container_port EcsService#container_port}
  */
  readonly containerPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#elb_name EcsService#elb_name}
  */
  readonly elbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#target_group_arn EcsService#target_group_arn}
  */
  readonly targetGroupArn?: string;
}

export function ecsServiceLoadBalancerToTerraform(struct?: EcsServiceLoadBalancer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    elb_name: cdktf.stringToTerraform(struct!.elbName),
    target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
  }
}

export interface EcsServiceNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#assign_public_ip EcsService#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#security_groups EcsService#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#subnets EcsService#subnets}
  */
  readonly subnets: string[];
}

export function ecsServiceNetworkConfigurationToTerraform(struct?: EcsServiceNetworkConfigurationOutputReference | EcsServiceNetworkConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
    subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
  }
}

export class EcsServiceNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EcsServiceNetworkConfiguration | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._assignPublicIp) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._securityGroups) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnets) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceNetworkConfiguration | undefined) {
    if (value === undefined) {
      this._assignPublicIp = undefined;
      this._securityGroups = undefined;
      this._subnets = undefined;
    }
    else {
      this._assignPublicIp = value.assignPublicIp;
      this._securityGroups = value.securityGroups;
      this._subnets = value.subnets;
    }
  }

  // assign_public_ip - computed: false, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip') as any;
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}
export interface EcsServiceOrderedPlacementStrategy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#field EcsService#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#type EcsService#type}
  */
  readonly type: string;
}

export function ecsServiceOrderedPlacementStrategyToTerraform(struct?: EcsServiceOrderedPlacementStrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface EcsServicePlacementConstraints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#expression EcsService#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#type EcsService#type}
  */
  readonly type: string;
}

export function ecsServicePlacementConstraintsToTerraform(struct?: EcsServicePlacementConstraints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface EcsServiceServiceRegistries {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#container_name EcsService#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#container_port EcsService#container_port}
  */
  readonly containerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#port EcsService#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#registry_arn EcsService#registry_arn}
  */
  readonly registryArn: string;
}

export function ecsServiceServiceRegistriesToTerraform(struct?: EcsServiceServiceRegistriesOutputReference | EcsServiceServiceRegistries): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    port: cdktf.numberToTerraform(struct!.port),
    registry_arn: cdktf.stringToTerraform(struct!.registryArn),
  }
}

export class EcsServiceServiceRegistriesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EcsServiceServiceRegistries | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._containerName) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._containerPort) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    if (this._port) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._registryArn) {
      hasAnyValues = true;
      internalValueResult.registryArn = this._registryArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceServiceRegistries | undefined) {
    if (value === undefined) {
      this._containerName = undefined;
      this._containerPort = undefined;
      this._port = undefined;
      this._registryArn = undefined;
    }
    else {
      this._containerName = value.containerName;
      this._containerPort = value.containerPort;
      this._port = value.port;
      this._registryArn = value.registryArn;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // container_port - computed: false, optional: true, required: false
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  public resetContainerPort() {
    this._containerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // registry_arn - computed: false, optional: false, required: true
  private _registryArn?: string; 
  public get registryArn() {
    return this.getStringAttribute('registry_arn');
  }
  public set registryArn(value: string) {
    this._registryArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryArnInput() {
    return this._registryArn;
  }
}
export interface EcsServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#delete EcsService#delete}
  */
  readonly delete?: string;
}

export function ecsServiceTimeoutsToTerraform(struct?: EcsServiceTimeoutsOutputReference | EcsServiceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class EcsServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EcsServiceTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceTimeouts | undefined) {
    if (value === undefined) {
      this._delete = undefined;
    }
    else {
      this._delete = value.delete;
    }
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html aws_ecs_service}
*/
export class EcsService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ecs_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html aws_ecs_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsServiceConfig
  */
  public constructor(scope: Construct, id: string, config: EcsServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_service',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cluster = config.cluster;
    this._deploymentMaximumPercent = config.deploymentMaximumPercent;
    this._deploymentMinimumHealthyPercent = config.deploymentMinimumHealthyPercent;
    this._desiredCount = config.desiredCount;
    this._enableEcsManagedTags = config.enableEcsManagedTags;
    this._enableExecuteCommand = config.enableExecuteCommand;
    this._forceNewDeployment = config.forceNewDeployment;
    this._healthCheckGracePeriodSeconds = config.healthCheckGracePeriodSeconds;
    this._iamRole = config.iamRole;
    this._launchType = config.launchType;
    this._name = config.name;
    this._platformVersion = config.platformVersion;
    this._propagateTags = config.propagateTags;
    this._schedulingStrategy = config.schedulingStrategy;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._taskDefinition = config.taskDefinition;
    this._waitForSteadyState = config.waitForSteadyState;
    this._capacityProviderStrategy = config.capacityProviderStrategy;
    this._deploymentCircuitBreaker.internalValue = config.deploymentCircuitBreaker;
    this._deploymentController.internalValue = config.deploymentController;
    this._loadBalancer = config.loadBalancer;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._orderedPlacementStrategy = config.orderedPlacementStrategy;
    this._placementConstraints = config.placementConstraints;
    this._serviceRegistries.internalValue = config.serviceRegistries;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: true, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // deployment_maximum_percent - computed: false, optional: true, required: false
  private _deploymentMaximumPercent?: number; 
  public get deploymentMaximumPercent() {
    return this.getNumberAttribute('deployment_maximum_percent');
  }
  public set deploymentMaximumPercent(value: number) {
    this._deploymentMaximumPercent = value;
  }
  public resetDeploymentMaximumPercent() {
    this._deploymentMaximumPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentMaximumPercentInput() {
    return this._deploymentMaximumPercent;
  }

  // deployment_minimum_healthy_percent - computed: false, optional: true, required: false
  private _deploymentMinimumHealthyPercent?: number; 
  public get deploymentMinimumHealthyPercent() {
    return this.getNumberAttribute('deployment_minimum_healthy_percent');
  }
  public set deploymentMinimumHealthyPercent(value: number) {
    this._deploymentMinimumHealthyPercent = value;
  }
  public resetDeploymentMinimumHealthyPercent() {
    this._deploymentMinimumHealthyPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentMinimumHealthyPercentInput() {
    return this._deploymentMinimumHealthyPercent;
  }

  // desired_count - computed: false, optional: true, required: false
  private _desiredCount?: number; 
  public get desiredCount() {
    return this.getNumberAttribute('desired_count');
  }
  public set desiredCount(value: number) {
    this._desiredCount = value;
  }
  public resetDesiredCount() {
    this._desiredCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCountInput() {
    return this._desiredCount;
  }

  // enable_ecs_managed_tags - computed: false, optional: true, required: false
  private _enableEcsManagedTags?: boolean | cdktf.IResolvable; 
  public get enableEcsManagedTags() {
    return this.getBooleanAttribute('enable_ecs_managed_tags') as any;
  }
  public set enableEcsManagedTags(value: boolean | cdktf.IResolvable) {
    this._enableEcsManagedTags = value;
  }
  public resetEnableEcsManagedTags() {
    this._enableEcsManagedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEcsManagedTagsInput() {
    return this._enableEcsManagedTags;
  }

  // enable_execute_command - computed: false, optional: true, required: false
  private _enableExecuteCommand?: boolean | cdktf.IResolvable; 
  public get enableExecuteCommand() {
    return this.getBooleanAttribute('enable_execute_command') as any;
  }
  public set enableExecuteCommand(value: boolean | cdktf.IResolvable) {
    this._enableExecuteCommand = value;
  }
  public resetEnableExecuteCommand() {
    this._enableExecuteCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExecuteCommandInput() {
    return this._enableExecuteCommand;
  }

  // force_new_deployment - computed: false, optional: true, required: false
  private _forceNewDeployment?: boolean | cdktf.IResolvable; 
  public get forceNewDeployment() {
    return this.getBooleanAttribute('force_new_deployment') as any;
  }
  public set forceNewDeployment(value: boolean | cdktf.IResolvable) {
    this._forceNewDeployment = value;
  }
  public resetForceNewDeployment() {
    this._forceNewDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceNewDeploymentInput() {
    return this._forceNewDeployment;
  }

  // health_check_grace_period_seconds - computed: false, optional: true, required: false
  private _healthCheckGracePeriodSeconds?: number; 
  public get healthCheckGracePeriodSeconds() {
    return this.getNumberAttribute('health_check_grace_period_seconds');
  }
  public set healthCheckGracePeriodSeconds(value: number) {
    this._healthCheckGracePeriodSeconds = value;
  }
  public resetHealthCheckGracePeriodSeconds() {
    this._healthCheckGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckGracePeriodSecondsInput() {
    return this._healthCheckGracePeriodSeconds;
  }

  // iam_role - computed: true, optional: true, required: false
  private _iamRole?: string; 
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }
  public set iamRole(value: string) {
    this._iamRole = value;
  }
  public resetIamRole() {
    this._iamRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleInput() {
    return this._iamRole;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // launch_type - computed: true, optional: true, required: false
  private _launchType?: string; 
  public get launchType() {
    return this.getStringAttribute('launch_type');
  }
  public set launchType(value: string) {
    this._launchType = value;
  }
  public resetLaunchType() {
    this._launchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTypeInput() {
    return this._launchType;
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

  // platform_version - computed: true, optional: true, required: false
  private _platformVersion?: string; 
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }
  public set platformVersion(value: string) {
    this._platformVersion = value;
  }
  public resetPlatformVersion() {
    this._platformVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformVersionInput() {
    return this._platformVersion;
  }

  // propagate_tags - computed: false, optional: true, required: false
  private _propagateTags?: string; 
  public get propagateTags() {
    return this.getStringAttribute('propagate_tags');
  }
  public set propagateTags(value: string) {
    this._propagateTags = value;
  }
  public resetPropagateTags() {
    this._propagateTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateTagsInput() {
    return this._propagateTags;
  }

  // scheduling_strategy - computed: false, optional: true, required: false
  private _schedulingStrategy?: string; 
  public get schedulingStrategy() {
    return this.getStringAttribute('scheduling_strategy');
  }
  public set schedulingStrategy(value: string) {
    this._schedulingStrategy = value;
  }
  public resetSchedulingStrategy() {
    this._schedulingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingStrategyInput() {
    return this._schedulingStrategy;
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

  // task_definition - computed: false, optional: true, required: false
  private _taskDefinition?: string; 
  public get taskDefinition() {
    return this.getStringAttribute('task_definition');
  }
  public set taskDefinition(value: string) {
    this._taskDefinition = value;
  }
  public resetTaskDefinition() {
    this._taskDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDefinitionInput() {
    return this._taskDefinition;
  }

  // wait_for_steady_state - computed: false, optional: true, required: false
  private _waitForSteadyState?: boolean | cdktf.IResolvable; 
  public get waitForSteadyState() {
    return this.getBooleanAttribute('wait_for_steady_state') as any;
  }
  public set waitForSteadyState(value: boolean | cdktf.IResolvable) {
    this._waitForSteadyState = value;
  }
  public resetWaitForSteadyState() {
    this._waitForSteadyState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForSteadyStateInput() {
    return this._waitForSteadyState;
  }

  // capacity_provider_strategy - computed: false, optional: true, required: false
  private _capacityProviderStrategy?: EcsServiceCapacityProviderStrategy[]; 
  public get capacityProviderStrategy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('capacity_provider_strategy') as any;
  }
  public set capacityProviderStrategy(value: EcsServiceCapacityProviderStrategy[]) {
    this._capacityProviderStrategy = value;
  }
  public resetCapacityProviderStrategy() {
    this._capacityProviderStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderStrategyInput() {
    return this._capacityProviderStrategy;
  }

  // deployment_circuit_breaker - computed: false, optional: true, required: false
  private _deploymentCircuitBreaker = new EcsServiceDeploymentCircuitBreakerOutputReference(this as any, "deployment_circuit_breaker", true);
  public get deploymentCircuitBreaker() {
    return this._deploymentCircuitBreaker;
  }
  public putDeploymentCircuitBreaker(value: EcsServiceDeploymentCircuitBreaker) {
    this._deploymentCircuitBreaker.internalValue = value;
  }
  public resetDeploymentCircuitBreaker() {
    this._deploymentCircuitBreaker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentCircuitBreakerInput() {
    return this._deploymentCircuitBreaker.internalValue;
  }

  // deployment_controller - computed: false, optional: true, required: false
  private _deploymentController = new EcsServiceDeploymentControllerOutputReference(this as any, "deployment_controller", true);
  public get deploymentController() {
    return this._deploymentController;
  }
  public putDeploymentController(value: EcsServiceDeploymentController) {
    this._deploymentController.internalValue = value;
  }
  public resetDeploymentController() {
    this._deploymentController.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentControllerInput() {
    return this._deploymentController.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer?: EcsServiceLoadBalancer[]; 
  public get loadBalancer() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('load_balancer') as any;
  }
  public set loadBalancer(value: EcsServiceLoadBalancer[]) {
    this._loadBalancer = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new EcsServiceNetworkConfigurationOutputReference(this as any, "network_configuration", true);
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: EcsServiceNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // ordered_placement_strategy - computed: false, optional: true, required: false
  private _orderedPlacementStrategy?: EcsServiceOrderedPlacementStrategy[]; 
  public get orderedPlacementStrategy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ordered_placement_strategy') as any;
  }
  public set orderedPlacementStrategy(value: EcsServiceOrderedPlacementStrategy[]) {
    this._orderedPlacementStrategy = value;
  }
  public resetOrderedPlacementStrategy() {
    this._orderedPlacementStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderedPlacementStrategyInput() {
    return this._orderedPlacementStrategy;
  }

  // placement_constraints - computed: false, optional: true, required: false
  private _placementConstraints?: EcsServicePlacementConstraints[]; 
  public get placementConstraints() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('placement_constraints') as any;
  }
  public set placementConstraints(value: EcsServicePlacementConstraints[]) {
    this._placementConstraints = value;
  }
  public resetPlacementConstraints() {
    this._placementConstraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConstraintsInput() {
    return this._placementConstraints;
  }

  // service_registries - computed: false, optional: true, required: false
  private _serviceRegistries = new EcsServiceServiceRegistriesOutputReference(this as any, "service_registries", true);
  public get serviceRegistries() {
    return this._serviceRegistries;
  }
  public putServiceRegistries(value: EcsServiceServiceRegistries) {
    this._serviceRegistries.internalValue = value;
  }
  public resetServiceRegistries() {
    this._serviceRegistries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRegistriesInput() {
    return this._serviceRegistries.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EcsServiceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EcsServiceTimeouts) {
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
      cluster: cdktf.stringToTerraform(this._cluster),
      deployment_maximum_percent: cdktf.numberToTerraform(this._deploymentMaximumPercent),
      deployment_minimum_healthy_percent: cdktf.numberToTerraform(this._deploymentMinimumHealthyPercent),
      desired_count: cdktf.numberToTerraform(this._desiredCount),
      enable_ecs_managed_tags: cdktf.booleanToTerraform(this._enableEcsManagedTags),
      enable_execute_command: cdktf.booleanToTerraform(this._enableExecuteCommand),
      force_new_deployment: cdktf.booleanToTerraform(this._forceNewDeployment),
      health_check_grace_period_seconds: cdktf.numberToTerraform(this._healthCheckGracePeriodSeconds),
      iam_role: cdktf.stringToTerraform(this._iamRole),
      launch_type: cdktf.stringToTerraform(this._launchType),
      name: cdktf.stringToTerraform(this._name),
      platform_version: cdktf.stringToTerraform(this._platformVersion),
      propagate_tags: cdktf.stringToTerraform(this._propagateTags),
      scheduling_strategy: cdktf.stringToTerraform(this._schedulingStrategy),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      task_definition: cdktf.stringToTerraform(this._taskDefinition),
      wait_for_steady_state: cdktf.booleanToTerraform(this._waitForSteadyState),
      capacity_provider_strategy: cdktf.listMapper(ecsServiceCapacityProviderStrategyToTerraform)(this._capacityProviderStrategy),
      deployment_circuit_breaker: ecsServiceDeploymentCircuitBreakerToTerraform(this._deploymentCircuitBreaker.internalValue),
      deployment_controller: ecsServiceDeploymentControllerToTerraform(this._deploymentController.internalValue),
      load_balancer: cdktf.listMapper(ecsServiceLoadBalancerToTerraform)(this._loadBalancer),
      network_configuration: ecsServiceNetworkConfigurationToTerraform(this._networkConfiguration.internalValue),
      ordered_placement_strategy: cdktf.listMapper(ecsServiceOrderedPlacementStrategyToTerraform)(this._orderedPlacementStrategy),
      placement_constraints: cdktf.listMapper(ecsServicePlacementConstraintsToTerraform)(this._placementConstraints),
      service_registries: ecsServiceServiceRegistriesToTerraform(this._serviceRegistries.internalValue),
      timeouts: ecsServiceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
