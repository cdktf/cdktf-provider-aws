// https://www.terraform.io/docs/providers/aws/r/apprunner_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApprunnerServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#auto_scaling_configuration_arn ApprunnerService#auto_scaling_configuration_arn}
  */
  readonly autoScalingConfigurationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#id ApprunnerService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#service_name ApprunnerService#service_name}
  */
  readonly serviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#tags ApprunnerService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#tags_all ApprunnerService#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * encryption_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#encryption_configuration ApprunnerService#encryption_configuration}
  */
  readonly encryptionConfiguration?: ApprunnerServiceEncryptionConfiguration;
  /**
  * health_check_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#health_check_configuration ApprunnerService#health_check_configuration}
  */
  readonly healthCheckConfiguration?: ApprunnerServiceHealthCheckConfiguration;
  /**
  * instance_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#instance_configuration ApprunnerService#instance_configuration}
  */
  readonly instanceConfiguration?: ApprunnerServiceInstanceConfiguration;
  /**
  * network_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#network_configuration ApprunnerService#network_configuration}
  */
  readonly networkConfiguration?: ApprunnerServiceNetworkConfiguration;
  /**
  * observability_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#observability_configuration ApprunnerService#observability_configuration}
  */
  readonly observabilityConfiguration?: ApprunnerServiceObservabilityConfiguration;
  /**
  * source_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#source_configuration ApprunnerService#source_configuration}
  */
  readonly sourceConfiguration: ApprunnerServiceSourceConfiguration;
}
export interface ApprunnerServiceEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#kms_key ApprunnerService#kms_key}
  */
  readonly kmsKey: string;
}

export function apprunnerServiceEncryptionConfigurationToTerraform(struct?: ApprunnerServiceEncryptionConfigurationOutputReference | ApprunnerServiceEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}

export class ApprunnerServiceEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApprunnerServiceEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApprunnerServiceEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKey = value.kmsKey;
    }
  }

  // kms_key - computed: false, optional: false, required: true
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface ApprunnerServiceHealthCheckConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#healthy_threshold ApprunnerService#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#interval ApprunnerService#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#path ApprunnerService#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#protocol ApprunnerService#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#timeout ApprunnerService#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#unhealthy_threshold ApprunnerService#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
}

export function apprunnerServiceHealthCheckConfigurationToTerraform(struct?: ApprunnerServiceHealthCheckConfigurationOutputReference | ApprunnerServiceHealthCheckConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval: cdktf.numberToTerraform(struct!.interval),
    path: cdktf.stringToTerraform(struct!.path),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
  }
}

export class ApprunnerServiceHealthCheckConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApprunnerServiceHealthCheckConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApprunnerServiceHealthCheckConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthyThreshold = undefined;
      this._interval = undefined;
      this._path = undefined;
      this._protocol = undefined;
      this._timeout = undefined;
      this._unhealthyThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthyThreshold = value.healthyThreshold;
      this._interval = value.interval;
      this._path = value.path;
      this._protocol = value.protocol;
      this._timeout = value.timeout;
      this._unhealthyThreshold = value.unhealthyThreshold;
    }
  }

  // healthy_threshold - computed: false, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // unhealthy_threshold - computed: false, optional: true, required: false
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }
}
export interface ApprunnerServiceInstanceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#cpu ApprunnerService#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#instance_role_arn ApprunnerService#instance_role_arn}
  */
  readonly instanceRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#memory ApprunnerService#memory}
  */
  readonly memory?: string;
}

export function apprunnerServiceInstanceConfigurationToTerraform(struct?: ApprunnerServiceInstanceConfigurationOutputReference | ApprunnerServiceInstanceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    instance_role_arn: cdktf.stringToTerraform(struct!.instanceRoleArn),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}

export class ApprunnerServiceInstanceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApprunnerServiceInstanceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._instanceRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceRoleArn = this._instanceRoleArn;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApprunnerServiceInstanceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._instanceRoleArn = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._instanceRoleArn = value.instanceRoleArn;
      this._memory = value.memory;
    }
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
}
export interface ApprunnerServiceNetworkConfigurationEgressConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#egress_type ApprunnerService#egress_type}
  */
  readonly egressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#vpc_connector_arn ApprunnerService#vpc_connector_arn}
  */
  readonly vpcConnectorArn?: string;
}

export function apprunnerServiceNetworkConfigurationEgressConfigurationToTerraform(struct?: ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference | ApprunnerServiceNetworkConfigurationEgressConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_type: cdktf.stringToTerraform(struct!.egressType),
    vpc_connector_arn: cdktf.stringToTerraform(struct!.vpcConnectorArn),
  }
}

export class ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApprunnerServiceNetworkConfigurationEgressConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressType = this._egressType;
    }
    if (this._vpcConnectorArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConnectorArn = this._vpcConnectorArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApprunnerServiceNetworkConfigurationEgressConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._egressType = undefined;
      this._vpcConnectorArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._egressType = value.egressType;
      this._vpcConnectorArn = value.vpcConnectorArn;
    }
  }

  // egress_type - computed: true, optional: true, required: false
  private _egressType?: string; 
  public get egressType() {
    return this.getStringAttribute('egress_type');
  }
  public set egressType(value: string) {
    this._egressType = value;
  }
  public resetEgressType() {
    this._egressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressTypeInput() {
    return this._egressType;
  }

  // vpc_connector_arn - computed: false, optional: true, required: false
  private _vpcConnectorArn?: string; 
  public get vpcConnectorArn() {
    return this.getStringAttribute('vpc_connector_arn');
  }
  public set vpcConnectorArn(value: string) {
    this._vpcConnectorArn = value;
  }
  public resetVpcConnectorArn() {
    this._vpcConnectorArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectorArnInput() {
    return this._vpcConnectorArn;
  }
}
export interface ApprunnerServiceNetworkConfigurationIngressConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#is_publicly_accessible ApprunnerService#is_publicly_accessible}
  */
  readonly isPubliclyAccessible?: boolean | cdktf.IResolvable;
}

export function apprunnerServiceNetworkConfigurationIngressConfigurationToTerraform(struct?: ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference | ApprunnerServiceNetworkConfigurationIngressConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_publicly_accessible: cdktf.booleanToTerraform(struct!.isPubliclyAccessible),
  }
}

export class ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApprunnerServiceNetworkConfigurationIngressConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isPubliclyAccessible !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPubliclyAccessible = this._isPubliclyAccessible;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApprunnerServiceNetworkConfigurationIngressConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isPubliclyAccessible = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isPubliclyAccessible = value.isPubliclyAccessible;
    }
  }

  // is_publicly_accessible - computed: false, optional: true, required: false
  private _isPubliclyAccessible?: boolean | cdktf.IResolvable; 
  public get isPubliclyAccessible() {
    return this.getBooleanAttribute('is_publicly_accessible');
  }
  public set isPubliclyAccessible(value: boolean | cdktf.IResolvable) {
    this._isPubliclyAccessible = value;
  }
  public resetIsPubliclyAccessible() {
    this._isPubliclyAccessible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPubliclyAccessibleInput() {
    return this._isPubliclyAccessible;
  }
}
export interface ApprunnerServiceNetworkConfiguration {
  /**
  * egress_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#egress_configuration ApprunnerService#egress_configuration}
  */
  readonly egressConfiguration?: ApprunnerServiceNetworkConfigurationEgressConfiguration;
  /**
  * ingress_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#ingress_configuration ApprunnerService#ingress_configuration}
  */
  readonly ingressConfiguration?: ApprunnerServiceNetworkConfigurationIngressConfiguration;
}

export function apprunnerServiceNetworkConfigurationToTerraform(struct?: ApprunnerServiceNetworkConfigurationOutputReference | ApprunnerServiceNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_configuration: apprunnerServiceNetworkConfigurationEgressConfigurationToTerraform(struct!.egressConfiguration),
    ingress_configuration: apprunnerServiceNetworkConfigurationIngressConfigurationToTerraform(struct!.ingressConfiguration),
  }
}

export class ApprunnerServiceNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApprunnerServiceNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressConfiguration = this._egressConfiguration?.internalValue;
    }
    if (this._ingressConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressConfiguration = this._ingressConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApprunnerServiceNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._egressConfiguration.internalValue = undefined;
      this._ingressConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._egressConfiguration.internalValue = value.egressConfiguration;
      this._ingressConfiguration.internalValue = value.ingressConfiguration;
    }
  }

  // egress_configuration - computed: false, optional: true, required: false
  private _egressConfiguration = new ApprunnerServiceNetworkConfigurationEgressConfigurationOutputReference(this, "egress_configuration");
  public get egressConfiguration() {
    return this._egressConfiguration;
  }
  public putEgressConfiguration(value: ApprunnerServiceNetworkConfigurationEgressConfiguration) {
    this._egressConfiguration.internalValue = value;
  }
  public resetEgressConfiguration() {
    this._egressConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressConfigurationInput() {
    return this._egressConfiguration.internalValue;
  }

  // ingress_configuration - computed: false, optional: true, required: false
  private _ingressConfiguration = new ApprunnerServiceNetworkConfigurationIngressConfigurationOutputReference(this, "ingress_configuration");
  public get ingressConfiguration() {
    return this._ingressConfiguration;
  }
  public putIngressConfiguration(value: ApprunnerServiceNetworkConfigurationIngressConfiguration) {
    this._ingressConfiguration.internalValue = value;
  }
  public resetIngressConfiguration() {
    this._ingressConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressConfigurationInput() {
    return this._ingressConfiguration.internalValue;
  }
}
export interface ApprunnerServiceObservabilityConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#observability_configuration_arn ApprunnerService#observability_configuration_arn}
  */
  readonly observabilityConfigurationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#observability_enabled ApprunnerService#observability_enabled}
  */
  readonly observabilityEnabled: boolean | cdktf.IResolvable;
}

export function apprunnerServiceObservabilityConfigurationToTerraform(struct?: ApprunnerServiceObservabilityConfigurationOutputReference | ApprunnerServiceObservabilityConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    observability_configuration_arn: cdktf.stringToTerraform(struct!.observabilityConfigurationArn),
    observability_enabled: cdktf.booleanToTerraform(struct!.observabilityEnabled),
  }
}

export class ApprunnerServiceObservabilityConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApprunnerServiceObservabilityConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._observabilityConfigurationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.observabilityConfigurationArn = this._observabilityConfigurationArn;
    }
    if (this._observabilityEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.observabilityEnabled = this._observabilityEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApprunnerServiceObservabilityConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._observabilityConfigurationArn = undefined;
      this._observabilityEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._observabilityConfigurationArn = value.observabilityConfigurationArn;
      this._observabilityEnabled = value.observabilityEnabled;
    }
  }

  // observability_configuration_arn - computed: false, optional: true, required: false
  private _observabilityConfigurationArn?: string; 
  public get observabilityConfigurationArn() {
    return this.getStringAttribute('observability_configuration_arn');
  }
  public set observabilityConfigurationArn(value: string) {
    this._observabilityConfigurationArn = value;
  }
  public resetObservabilityConfigurationArn() {
    this._observabilityConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityConfigurationArnInput() {
    return this._observabilityConfigurationArn;
  }

  // observability_enabled - computed: false, optional: false, required: true
  private _observabilityEnabled?: boolean | cdktf.IResolvable; 
  public get observabilityEnabled() {
    return this.getBooleanAttribute('observability_enabled');
  }
  public set observabilityEnabled(value: boolean | cdktf.IResolvable) {
    this._observabilityEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityEnabledInput() {
    return this._observabilityEnabled;
  }
}
export interface ApprunnerServiceSourceConfigurationAuthenticationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#access_role_arn ApprunnerService#access_role_arn}
  */
  readonly accessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#connection_arn ApprunnerService#connection_arn}
  */
  readonly connectionArn?: string;
}

export function apprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference | ApprunnerServiceSourceConfigurationAuthenticationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_role_arn: cdktf.stringToTerraform(struct!.accessRoleArn),
    connection_arn: cdktf.stringToTerraform(struct!.connectionArn),
  }
}

export class ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApprunnerServiceSourceConfigurationAuthenticationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessRoleArn = this._accessRoleArn;
    }
    if (this._connectionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionArn = this._connectionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApprunnerServiceSourceConfigurationAuthenticationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessRoleArn = undefined;
      this._connectionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessRoleArn = value.accessRoleArn;
      this._connectionArn = value.connectionArn;
    }
  }

  // access_role_arn - computed: false, optional: true, required: false
  private _accessRoleArn?: string; 
  public get accessRoleArn() {
    return this.getStringAttribute('access_role_arn');
  }
  public set accessRoleArn(value: string) {
    this._accessRoleArn = value;
  }
  public resetAccessRoleArn() {
    this._accessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRoleArnInput() {
    return this._accessRoleArn;
  }

  // connection_arn - computed: false, optional: true, required: false
  private _connectionArn?: string; 
  public get connectionArn() {
    return this.getStringAttribute('connection_arn');
  }
  public set connectionArn(value: string) {
    this._connectionArn = value;
  }
  public resetConnectionArn() {
    this._connectionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionArnInput() {
    return this._connectionArn;
  }
}
export interface ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#build_command ApprunnerService#build_command}
  */
  readonly buildCommand?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#port ApprunnerService#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime ApprunnerService#runtime}
  */
  readonly runtime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime_environment_secrets ApprunnerService#runtime_environment_secrets}
  */
  readonly runtimeEnvironmentSecrets?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}
  */
  readonly runtimeEnvironmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#start_command ApprunnerService#start_command}
  */
  readonly startCommand?: string;
}

export function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference | ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_command: cdktf.stringToTerraform(struct!.buildCommand),
    port: cdktf.stringToTerraform(struct!.port),
    runtime: cdktf.stringToTerraform(struct!.runtime),
    runtime_environment_secrets: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeEnvironmentSecrets),
    runtime_environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeEnvironmentVariables),
    start_command: cdktf.stringToTerraform(struct!.startCommand),
  }
}

export class ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildCommand = this._buildCommand;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._runtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtime = this._runtime;
    }
    if (this._runtimeEnvironmentSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeEnvironmentSecrets = this._runtimeEnvironmentSecrets;
    }
    if (this._runtimeEnvironmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeEnvironmentVariables = this._runtimeEnvironmentVariables;
    }
    if (this._startCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.startCommand = this._startCommand;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buildCommand = undefined;
      this._port = undefined;
      this._runtime = undefined;
      this._runtimeEnvironmentSecrets = undefined;
      this._runtimeEnvironmentVariables = undefined;
      this._startCommand = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buildCommand = value.buildCommand;
      this._port = value.port;
      this._runtime = value.runtime;
      this._runtimeEnvironmentSecrets = value.runtimeEnvironmentSecrets;
      this._runtimeEnvironmentVariables = value.runtimeEnvironmentVariables;
      this._startCommand = value.startCommand;
    }
  }

  // build_command - computed: false, optional: true, required: false
  private _buildCommand?: string; 
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }
  public set buildCommand(value: string) {
    this._buildCommand = value;
  }
  public resetBuildCommand() {
    this._buildCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildCommandInput() {
    return this._buildCommand;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // runtime - computed: false, optional: false, required: true
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // runtime_environment_secrets - computed: false, optional: true, required: false
  private _runtimeEnvironmentSecrets?: { [key: string]: string }; 
  public get runtimeEnvironmentSecrets() {
    return this.getStringMapAttribute('runtime_environment_secrets');
  }
  public set runtimeEnvironmentSecrets(value: { [key: string]: string }) {
    this._runtimeEnvironmentSecrets = value;
  }
  public resetRuntimeEnvironmentSecrets() {
    this._runtimeEnvironmentSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeEnvironmentSecretsInput() {
    return this._runtimeEnvironmentSecrets;
  }

  // runtime_environment_variables - computed: false, optional: true, required: false
  private _runtimeEnvironmentVariables?: { [key: string]: string }; 
  public get runtimeEnvironmentVariables() {
    return this.getStringMapAttribute('runtime_environment_variables');
  }
  public set runtimeEnvironmentVariables(value: { [key: string]: string }) {
    this._runtimeEnvironmentVariables = value;
  }
  public resetRuntimeEnvironmentVariables() {
    this._runtimeEnvironmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeEnvironmentVariablesInput() {
    return this._runtimeEnvironmentVariables;
  }

  // start_command - computed: false, optional: true, required: false
  private _startCommand?: string; 
  public get startCommand() {
    return this.getStringAttribute('start_command');
  }
  public set startCommand(value: string) {
    this._startCommand = value;
  }
  public resetStartCommand() {
    this._startCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startCommandInput() {
    return this._startCommand;
  }
}
export interface ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#configuration_source ApprunnerService#configuration_source}
  */
  readonly configurationSource: string;
  /**
  * code_configuration_values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#code_configuration_values ApprunnerService#code_configuration_values}
  */
  readonly codeConfigurationValues?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues;
}

export function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference | ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration_source: cdktf.stringToTerraform(struct!.configurationSource),
    code_configuration_values: apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform(struct!.codeConfigurationValues),
  }
}

export class ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationSource = this._configurationSource;
    }
    if (this._codeConfigurationValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeConfigurationValues = this._codeConfigurationValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configurationSource = undefined;
      this._codeConfigurationValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configurationSource = value.configurationSource;
      this._codeConfigurationValues.internalValue = value.codeConfigurationValues;
    }
  }

  // configuration_source - computed: false, optional: false, required: true
  private _configurationSource?: string; 
  public get configurationSource() {
    return this.getStringAttribute('configuration_source');
  }
  public set configurationSource(value: string) {
    this._configurationSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSourceInput() {
    return this._configurationSource;
  }

  // code_configuration_values - computed: false, optional: true, required: false
  private _codeConfigurationValues = new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference(this, "code_configuration_values");
  public get codeConfigurationValues() {
    return this._codeConfigurationValues;
  }
  public putCodeConfigurationValues(value: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues) {
    this._codeConfigurationValues.internalValue = value;
  }
  public resetCodeConfigurationValues() {
    this._codeConfigurationValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeConfigurationValuesInput() {
    return this._codeConfigurationValues.internalValue;
  }
}
export interface ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#type ApprunnerService#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#value ApprunnerService#value}
  */
  readonly value: string;
}

export function apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference | ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ApprunnerServiceSourceConfigurationCodeRepository {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#repository_url ApprunnerService#repository_url}
  */
  readonly repositoryUrl: string;
  /**
  * code_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#code_configuration ApprunnerService#code_configuration}
  */
  readonly codeConfiguration?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration;
  /**
  * source_code_version block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#source_code_version ApprunnerService#source_code_version}
  */
  readonly sourceCodeVersion: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion;
}

export function apprunnerServiceSourceConfigurationCodeRepositoryToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference | ApprunnerServiceSourceConfigurationCodeRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_url: cdktf.stringToTerraform(struct!.repositoryUrl),
    code_configuration: apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform(struct!.codeConfiguration),
    source_code_version: apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform(struct!.sourceCodeVersion),
  }
}

export class ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApprunnerServiceSourceConfigurationCodeRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUrl = this._repositoryUrl;
    }
    if (this._codeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeConfiguration = this._codeConfiguration?.internalValue;
    }
    if (this._sourceCodeVersion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCodeVersion = this._sourceCodeVersion?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApprunnerServiceSourceConfigurationCodeRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryUrl = undefined;
      this._codeConfiguration.internalValue = undefined;
      this._sourceCodeVersion.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryUrl = value.repositoryUrl;
      this._codeConfiguration.internalValue = value.codeConfiguration;
      this._sourceCodeVersion.internalValue = value.sourceCodeVersion;
    }
  }

  // repository_url - computed: false, optional: false, required: true
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }

  // code_configuration - computed: false, optional: true, required: false
  private _codeConfiguration = new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference(this, "code_configuration");
  public get codeConfiguration() {
    return this._codeConfiguration;
  }
  public putCodeConfiguration(value: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration) {
    this._codeConfiguration.internalValue = value;
  }
  public resetCodeConfiguration() {
    this._codeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeConfigurationInput() {
    return this._codeConfiguration.internalValue;
  }

  // source_code_version - computed: false, optional: false, required: true
  private _sourceCodeVersion = new ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference(this, "source_code_version");
  public get sourceCodeVersion() {
    return this._sourceCodeVersion;
  }
  public putSourceCodeVersion(value: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion) {
    this._sourceCodeVersion.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCodeVersionInput() {
    return this._sourceCodeVersion.internalValue;
  }
}
export interface ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#port ApprunnerService#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime_environment_secrets ApprunnerService#runtime_environment_secrets}
  */
  readonly runtimeEnvironmentSecrets?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#runtime_environment_variables ApprunnerService#runtime_environment_variables}
  */
  readonly runtimeEnvironmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#start_command ApprunnerService#start_command}
  */
  readonly startCommand?: string;
}

export function apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference | ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
    runtime_environment_secrets: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeEnvironmentSecrets),
    runtime_environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runtimeEnvironmentVariables),
    start_command: cdktf.stringToTerraform(struct!.startCommand),
  }
}

export class ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._runtimeEnvironmentSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeEnvironmentSecrets = this._runtimeEnvironmentSecrets;
    }
    if (this._runtimeEnvironmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeEnvironmentVariables = this._runtimeEnvironmentVariables;
    }
    if (this._startCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.startCommand = this._startCommand;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._runtimeEnvironmentSecrets = undefined;
      this._runtimeEnvironmentVariables = undefined;
      this._startCommand = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._runtimeEnvironmentSecrets = value.runtimeEnvironmentSecrets;
      this._runtimeEnvironmentVariables = value.runtimeEnvironmentVariables;
      this._startCommand = value.startCommand;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // runtime_environment_secrets - computed: false, optional: true, required: false
  private _runtimeEnvironmentSecrets?: { [key: string]: string }; 
  public get runtimeEnvironmentSecrets() {
    return this.getStringMapAttribute('runtime_environment_secrets');
  }
  public set runtimeEnvironmentSecrets(value: { [key: string]: string }) {
    this._runtimeEnvironmentSecrets = value;
  }
  public resetRuntimeEnvironmentSecrets() {
    this._runtimeEnvironmentSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeEnvironmentSecretsInput() {
    return this._runtimeEnvironmentSecrets;
  }

  // runtime_environment_variables - computed: false, optional: true, required: false
  private _runtimeEnvironmentVariables?: { [key: string]: string }; 
  public get runtimeEnvironmentVariables() {
    return this.getStringMapAttribute('runtime_environment_variables');
  }
  public set runtimeEnvironmentVariables(value: { [key: string]: string }) {
    this._runtimeEnvironmentVariables = value;
  }
  public resetRuntimeEnvironmentVariables() {
    this._runtimeEnvironmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeEnvironmentVariablesInput() {
    return this._runtimeEnvironmentVariables;
  }

  // start_command - computed: false, optional: true, required: false
  private _startCommand?: string; 
  public get startCommand() {
    return this.getStringAttribute('start_command');
  }
  public set startCommand(value: string) {
    this._startCommand = value;
  }
  public resetStartCommand() {
    this._startCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startCommandInput() {
    return this._startCommand;
  }
}
export interface ApprunnerServiceSourceConfigurationImageRepository {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#image_identifier ApprunnerService#image_identifier}
  */
  readonly imageIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#image_repository_type ApprunnerService#image_repository_type}
  */
  readonly imageRepositoryType: string;
  /**
  * image_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#image_configuration ApprunnerService#image_configuration}
  */
  readonly imageConfiguration?: ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration;
}

export function apprunnerServiceSourceConfigurationImageRepositoryToTerraform(struct?: ApprunnerServiceSourceConfigurationImageRepositoryOutputReference | ApprunnerServiceSourceConfigurationImageRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_identifier: cdktf.stringToTerraform(struct!.imageIdentifier),
    image_repository_type: cdktf.stringToTerraform(struct!.imageRepositoryType),
    image_configuration: apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform(struct!.imageConfiguration),
  }
}

export class ApprunnerServiceSourceConfigurationImageRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApprunnerServiceSourceConfigurationImageRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageIdentifier = this._imageIdentifier;
    }
    if (this._imageRepositoryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRepositoryType = this._imageRepositoryType;
    }
    if (this._imageConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageConfiguration = this._imageConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApprunnerServiceSourceConfigurationImageRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageIdentifier = undefined;
      this._imageRepositoryType = undefined;
      this._imageConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageIdentifier = value.imageIdentifier;
      this._imageRepositoryType = value.imageRepositoryType;
      this._imageConfiguration.internalValue = value.imageConfiguration;
    }
  }

  // image_identifier - computed: false, optional: false, required: true
  private _imageIdentifier?: string; 
  public get imageIdentifier() {
    return this.getStringAttribute('image_identifier');
  }
  public set imageIdentifier(value: string) {
    this._imageIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdentifierInput() {
    return this._imageIdentifier;
  }

  // image_repository_type - computed: false, optional: false, required: true
  private _imageRepositoryType?: string; 
  public get imageRepositoryType() {
    return this.getStringAttribute('image_repository_type');
  }
  public set imageRepositoryType(value: string) {
    this._imageRepositoryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRepositoryTypeInput() {
    return this._imageRepositoryType;
  }

  // image_configuration - computed: false, optional: true, required: false
  private _imageConfiguration = new ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference(this, "image_configuration");
  public get imageConfiguration() {
    return this._imageConfiguration;
  }
  public putImageConfiguration(value: ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration) {
    this._imageConfiguration.internalValue = value;
  }
  public resetImageConfiguration() {
    this._imageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageConfigurationInput() {
    return this._imageConfiguration.internalValue;
  }
}
export interface ApprunnerServiceSourceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#auto_deployments_enabled ApprunnerService#auto_deployments_enabled}
  */
  readonly autoDeploymentsEnabled?: boolean | cdktf.IResolvable;
  /**
  * authentication_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#authentication_configuration ApprunnerService#authentication_configuration}
  */
  readonly authenticationConfiguration?: ApprunnerServiceSourceConfigurationAuthenticationConfiguration;
  /**
  * code_repository block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#code_repository ApprunnerService#code_repository}
  */
  readonly codeRepository?: ApprunnerServiceSourceConfigurationCodeRepository;
  /**
  * image_repository block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service#image_repository ApprunnerService#image_repository}
  */
  readonly imageRepository?: ApprunnerServiceSourceConfigurationImageRepository;
}

export function apprunnerServiceSourceConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationOutputReference | ApprunnerServiceSourceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_deployments_enabled: cdktf.booleanToTerraform(struct!.autoDeploymentsEnabled),
    authentication_configuration: apprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform(struct!.authenticationConfiguration),
    code_repository: apprunnerServiceSourceConfigurationCodeRepositoryToTerraform(struct!.codeRepository),
    image_repository: apprunnerServiceSourceConfigurationImageRepositoryToTerraform(struct!.imageRepository),
  }
}

export class ApprunnerServiceSourceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApprunnerServiceSourceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoDeploymentsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDeploymentsEnabled = this._autoDeploymentsEnabled;
    }
    if (this._authenticationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationConfiguration = this._authenticationConfiguration?.internalValue;
    }
    if (this._codeRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRepository = this._codeRepository?.internalValue;
    }
    if (this._imageRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRepository = this._imageRepository?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApprunnerServiceSourceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoDeploymentsEnabled = undefined;
      this._authenticationConfiguration.internalValue = undefined;
      this._codeRepository.internalValue = undefined;
      this._imageRepository.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoDeploymentsEnabled = value.autoDeploymentsEnabled;
      this._authenticationConfiguration.internalValue = value.authenticationConfiguration;
      this._codeRepository.internalValue = value.codeRepository;
      this._imageRepository.internalValue = value.imageRepository;
    }
  }

  // auto_deployments_enabled - computed: false, optional: true, required: false
  private _autoDeploymentsEnabled?: boolean | cdktf.IResolvable; 
  public get autoDeploymentsEnabled() {
    return this.getBooleanAttribute('auto_deployments_enabled');
  }
  public set autoDeploymentsEnabled(value: boolean | cdktf.IResolvable) {
    this._autoDeploymentsEnabled = value;
  }
  public resetAutoDeploymentsEnabled() {
    this._autoDeploymentsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeploymentsEnabledInput() {
    return this._autoDeploymentsEnabled;
  }

  // authentication_configuration - computed: false, optional: true, required: false
  private _authenticationConfiguration = new ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference(this, "authentication_configuration");
  public get authenticationConfiguration() {
    return this._authenticationConfiguration;
  }
  public putAuthenticationConfiguration(value: ApprunnerServiceSourceConfigurationAuthenticationConfiguration) {
    this._authenticationConfiguration.internalValue = value;
  }
  public resetAuthenticationConfiguration() {
    this._authenticationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationConfigurationInput() {
    return this._authenticationConfiguration.internalValue;
  }

  // code_repository - computed: false, optional: true, required: false
  private _codeRepository = new ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference(this, "code_repository");
  public get codeRepository() {
    return this._codeRepository;
  }
  public putCodeRepository(value: ApprunnerServiceSourceConfigurationCodeRepository) {
    this._codeRepository.internalValue = value;
  }
  public resetCodeRepository() {
    this._codeRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryInput() {
    return this._codeRepository.internalValue;
  }

  // image_repository - computed: false, optional: true, required: false
  private _imageRepository = new ApprunnerServiceSourceConfigurationImageRepositoryOutputReference(this, "image_repository");
  public get imageRepository() {
    return this._imageRepository;
  }
  public putImageRepository(value: ApprunnerServiceSourceConfigurationImageRepository) {
    this._imageRepository.internalValue = value;
  }
  public resetImageRepository() {
    this._imageRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRepositoryInput() {
    return this._imageRepository.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service aws_apprunner_service}
*/
export class ApprunnerService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_apprunner_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service aws_apprunner_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApprunnerServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ApprunnerServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apprunner_service',
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
    this._autoScalingConfigurationArn = config.autoScalingConfigurationArn;
    this._id = config.id;
    this._serviceName = config.serviceName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
    this._healthCheckConfiguration.internalValue = config.healthCheckConfiguration;
    this._instanceConfiguration.internalValue = config.instanceConfiguration;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._observabilityConfiguration.internalValue = config.observabilityConfiguration;
    this._sourceConfiguration.internalValue = config.sourceConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_scaling_configuration_arn - computed: true, optional: true, required: false
  private _autoScalingConfigurationArn?: string; 
  public get autoScalingConfigurationArn() {
    return this.getStringAttribute('auto_scaling_configuration_arn');
  }
  public set autoScalingConfigurationArn(value: string) {
    this._autoScalingConfigurationArn = value;
  }
  public resetAutoScalingConfigurationArn() {
    this._autoScalingConfigurationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingConfigurationArnInput() {
    return this._autoScalingConfigurationArn;
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

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_url - computed: true, optional: false, required: false
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new ApprunnerServiceEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: ApprunnerServiceEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // health_check_configuration - computed: false, optional: true, required: false
  private _healthCheckConfiguration = new ApprunnerServiceHealthCheckConfigurationOutputReference(this, "health_check_configuration");
  public get healthCheckConfiguration() {
    return this._healthCheckConfiguration;
  }
  public putHealthCheckConfiguration(value: ApprunnerServiceHealthCheckConfiguration) {
    this._healthCheckConfiguration.internalValue = value;
  }
  public resetHealthCheckConfiguration() {
    this._healthCheckConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckConfigurationInput() {
    return this._healthCheckConfiguration.internalValue;
  }

  // instance_configuration - computed: false, optional: true, required: false
  private _instanceConfiguration = new ApprunnerServiceInstanceConfigurationOutputReference(this, "instance_configuration");
  public get instanceConfiguration() {
    return this._instanceConfiguration;
  }
  public putInstanceConfiguration(value: ApprunnerServiceInstanceConfiguration) {
    this._instanceConfiguration.internalValue = value;
  }
  public resetInstanceConfiguration() {
    this._instanceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConfigurationInput() {
    return this._instanceConfiguration.internalValue;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new ApprunnerServiceNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: ApprunnerServiceNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // observability_configuration - computed: false, optional: true, required: false
  private _observabilityConfiguration = new ApprunnerServiceObservabilityConfigurationOutputReference(this, "observability_configuration");
  public get observabilityConfiguration() {
    return this._observabilityConfiguration;
  }
  public putObservabilityConfiguration(value: ApprunnerServiceObservabilityConfiguration) {
    this._observabilityConfiguration.internalValue = value;
  }
  public resetObservabilityConfiguration() {
    this._observabilityConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observabilityConfigurationInput() {
    return this._observabilityConfiguration.internalValue;
  }

  // source_configuration - computed: false, optional: false, required: true
  private _sourceConfiguration = new ApprunnerServiceSourceConfigurationOutputReference(this, "source_configuration");
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
  public putSourceConfiguration(value: ApprunnerServiceSourceConfiguration) {
    this._sourceConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigurationInput() {
    return this._sourceConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scaling_configuration_arn: cdktf.stringToTerraform(this._autoScalingConfigurationArn),
      id: cdktf.stringToTerraform(this._id),
      service_name: cdktf.stringToTerraform(this._serviceName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      encryption_configuration: apprunnerServiceEncryptionConfigurationToTerraform(this._encryptionConfiguration.internalValue),
      health_check_configuration: apprunnerServiceHealthCheckConfigurationToTerraform(this._healthCheckConfiguration.internalValue),
      instance_configuration: apprunnerServiceInstanceConfigurationToTerraform(this._instanceConfiguration.internalValue),
      network_configuration: apprunnerServiceNetworkConfigurationToTerraform(this._networkConfiguration.internalValue),
      observability_configuration: apprunnerServiceObservabilityConfigurationToTerraform(this._observabilityConfiguration.internalValue),
      source_configuration: apprunnerServiceSourceConfigurationToTerraform(this._sourceConfiguration.internalValue),
    };
  }
}
