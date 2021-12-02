// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS ElasticSearch Service
*/
export interface ElasticsearchDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#access_policies ElasticsearchDomain#access_policies}
  */
  readonly accessPolicies?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#advanced_options ElasticsearchDomain#advanced_options}
  */
  readonly advancedOptions?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#domain_name ElasticsearchDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#elasticsearch_version ElasticsearchDomain#elasticsearch_version}
  */
  readonly elasticsearchVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#tags ElasticsearchDomain#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#tags_all ElasticsearchDomain#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * advanced_security_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#advanced_security_options ElasticsearchDomain#advanced_security_options}
  */
  readonly advancedSecurityOptions?: ElasticsearchDomainAdvancedSecurityOptions;
  /**
  * cluster_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#cluster_config ElasticsearchDomain#cluster_config}
  */
  readonly clusterConfig?: ElasticsearchDomainClusterConfig;
  /**
  * cognito_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#cognito_options ElasticsearchDomain#cognito_options}
  */
  readonly cognitoOptions?: ElasticsearchDomainCognitoOptions;
  /**
  * domain_endpoint_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#domain_endpoint_options ElasticsearchDomain#domain_endpoint_options}
  */
  readonly domainEndpointOptions?: ElasticsearchDomainDomainEndpointOptions;
  /**
  * ebs_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#ebs_options ElasticsearchDomain#ebs_options}
  */
  readonly ebsOptions?: ElasticsearchDomainEbsOptions;
  /**
  * encrypt_at_rest block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#encrypt_at_rest ElasticsearchDomain#encrypt_at_rest}
  */
  readonly encryptAtRest?: ElasticsearchDomainEncryptAtRest;
  /**
  * log_publishing_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#log_publishing_options ElasticsearchDomain#log_publishing_options}
  */
  readonly logPublishingOptions?: ElasticsearchDomainLogPublishingOptions[];
  /**
  * node_to_node_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#node_to_node_encryption ElasticsearchDomain#node_to_node_encryption}
  */
  readonly nodeToNodeEncryption?: ElasticsearchDomainNodeToNodeEncryption;
  /**
  * snapshot_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#snapshot_options ElasticsearchDomain#snapshot_options}
  */
  readonly snapshotOptions?: ElasticsearchDomainSnapshotOptions;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#timeouts ElasticsearchDomain#timeouts}
  */
  readonly timeouts?: ElasticsearchDomainTimeouts;
  /**
  * vpc_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#vpc_options ElasticsearchDomain#vpc_options}
  */
  readonly vpcOptions?: ElasticsearchDomainVpcOptions;
}
export interface ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#master_user_arn ElasticsearchDomain#master_user_arn}
  */
  readonly masterUserArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#master_user_name ElasticsearchDomain#master_user_name}
  */
  readonly masterUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#master_user_password ElasticsearchDomain#master_user_password}
  */
  readonly masterUserPassword?: string;
}

export function elasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsToTerraform(struct?: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference | ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    master_user_arn: cdktf.stringToTerraform(struct!.masterUserArn),
    master_user_name: cdktf.stringToTerraform(struct!.masterUserName),
    master_user_password: cdktf.stringToTerraform(struct!.masterUserPassword),
  }
}

export class ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._masterUserArn) {
      hasAnyValues = true;
      internalValueResult.masterUserArn = this._masterUserArn;
    }
    if (this._masterUserName) {
      hasAnyValues = true;
      internalValueResult.masterUserName = this._masterUserName;
    }
    if (this._masterUserPassword) {
      hasAnyValues = true;
      internalValueResult.masterUserPassword = this._masterUserPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions | undefined) {
    if (value === undefined) {
      this._masterUserArn = undefined;
      this._masterUserName = undefined;
      this._masterUserPassword = undefined;
    }
    else {
      this._masterUserArn = value.masterUserArn;
      this._masterUserName = value.masterUserName;
      this._masterUserPassword = value.masterUserPassword;
    }
  }

  // master_user_arn - computed: false, optional: true, required: false
  private _masterUserArn?: string; 
  public get masterUserArn() {
    return this.getStringAttribute('master_user_arn');
  }
  public set masterUserArn(value: string) {
    this._masterUserArn = value;
  }
  public resetMasterUserArn() {
    this._masterUserArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserArnInput() {
    return this._masterUserArn;
  }

  // master_user_name - computed: false, optional: true, required: false
  private _masterUserName?: string; 
  public get masterUserName() {
    return this.getStringAttribute('master_user_name');
  }
  public set masterUserName(value: string) {
    this._masterUserName = value;
  }
  public resetMasterUserName() {
    this._masterUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserNameInput() {
    return this._masterUserName;
  }

  // master_user_password - computed: false, optional: true, required: false
  private _masterUserPassword?: string; 
  public get masterUserPassword() {
    return this.getStringAttribute('master_user_password');
  }
  public set masterUserPassword(value: string) {
    this._masterUserPassword = value;
  }
  public resetMasterUserPassword() {
    this._masterUserPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserPasswordInput() {
    return this._masterUserPassword;
  }
}
export interface ElasticsearchDomainAdvancedSecurityOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enabled ElasticsearchDomain#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#internal_user_database_enabled ElasticsearchDomain#internal_user_database_enabled}
  */
  readonly internalUserDatabaseEnabled?: boolean | cdktf.IResolvable;
  /**
  * master_user_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#master_user_options ElasticsearchDomain#master_user_options}
  */
  readonly masterUserOptions?: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions;
}

export function elasticsearchDomainAdvancedSecurityOptionsToTerraform(struct?: ElasticsearchDomainAdvancedSecurityOptionsOutputReference | ElasticsearchDomainAdvancedSecurityOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    internal_user_database_enabled: cdktf.booleanToTerraform(struct!.internalUserDatabaseEnabled),
    master_user_options: elasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsToTerraform(struct!.masterUserOptions),
  }
}

export class ElasticsearchDomainAdvancedSecurityOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ElasticsearchDomainAdvancedSecurityOptions | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._enabled) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._internalUserDatabaseEnabled) {
      hasAnyValues = true;
      internalValueResult.internalUserDatabaseEnabled = this._internalUserDatabaseEnabled;
    }
    if (this._masterUserOptions) {
      hasAnyValues = true;
      internalValueResult.masterUserOptions = this._masterUserOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchDomainAdvancedSecurityOptions | undefined) {
    if (value === undefined) {
      this._enabled = undefined;
      this._internalUserDatabaseEnabled = undefined;
      this._masterUserOptions.internalValue = undefined;
    }
    else {
      this._enabled = value.enabled;
      this._internalUserDatabaseEnabled = value.internalUserDatabaseEnabled;
      this._masterUserOptions.internalValue = value.masterUserOptions;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // internal_user_database_enabled - computed: false, optional: true, required: false
  private _internalUserDatabaseEnabled?: boolean | cdktf.IResolvable; 
  public get internalUserDatabaseEnabled() {
    return this.getBooleanAttribute('internal_user_database_enabled') as any;
  }
  public set internalUserDatabaseEnabled(value: boolean | cdktf.IResolvable) {
    this._internalUserDatabaseEnabled = value;
  }
  public resetInternalUserDatabaseEnabled() {
    this._internalUserDatabaseEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalUserDatabaseEnabledInput() {
    return this._internalUserDatabaseEnabled;
  }

  // master_user_options - computed: false, optional: true, required: false
  private _masterUserOptions = new ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference(this as any, "master_user_options", true);
  public get masterUserOptions() {
    return this._masterUserOptions;
  }
  public putMasterUserOptions(value: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions) {
    this._masterUserOptions.internalValue = value;
  }
  public resetMasterUserOptions() {
    this._masterUserOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserOptionsInput() {
    return this._masterUserOptions.internalValue;
  }
}
export interface ElasticsearchDomainClusterConfigZoneAwarenessConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#availability_zone_count ElasticsearchDomain#availability_zone_count}
  */
  readonly availabilityZoneCount?: number;
}

export function elasticsearchDomainClusterConfigZoneAwarenessConfigToTerraform(struct?: ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference | ElasticsearchDomainClusterConfigZoneAwarenessConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone_count: cdktf.numberToTerraform(struct!.availabilityZoneCount),
  }
}

export class ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ElasticsearchDomainClusterConfigZoneAwarenessConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._availabilityZoneCount) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneCount = this._availabilityZoneCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchDomainClusterConfigZoneAwarenessConfig | undefined) {
    if (value === undefined) {
      this._availabilityZoneCount = undefined;
    }
    else {
      this._availabilityZoneCount = value.availabilityZoneCount;
    }
  }

  // availability_zone_count - computed: false, optional: true, required: false
  private _availabilityZoneCount?: number; 
  public get availabilityZoneCount() {
    return this.getNumberAttribute('availability_zone_count');
  }
  public set availabilityZoneCount(value: number) {
    this._availabilityZoneCount = value;
  }
  public resetAvailabilityZoneCount() {
    this._availabilityZoneCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneCountInput() {
    return this._availabilityZoneCount;
  }
}
export interface ElasticsearchDomainClusterConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#dedicated_master_count ElasticsearchDomain#dedicated_master_count}
  */
  readonly dedicatedMasterCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#dedicated_master_enabled ElasticsearchDomain#dedicated_master_enabled}
  */
  readonly dedicatedMasterEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#dedicated_master_type ElasticsearchDomain#dedicated_master_type}
  */
  readonly dedicatedMasterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#instance_count ElasticsearchDomain#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#instance_type ElasticsearchDomain#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#warm_count ElasticsearchDomain#warm_count}
  */
  readonly warmCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#warm_enabled ElasticsearchDomain#warm_enabled}
  */
  readonly warmEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#warm_type ElasticsearchDomain#warm_type}
  */
  readonly warmType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#zone_awareness_enabled ElasticsearchDomain#zone_awareness_enabled}
  */
  readonly zoneAwarenessEnabled?: boolean | cdktf.IResolvable;
  /**
  * zone_awareness_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#zone_awareness_config ElasticsearchDomain#zone_awareness_config}
  */
  readonly zoneAwarenessConfig?: ElasticsearchDomainClusterConfigZoneAwarenessConfig;
}

export function elasticsearchDomainClusterConfigToTerraform(struct?: ElasticsearchDomainClusterConfigOutputReference | ElasticsearchDomainClusterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dedicated_master_count: cdktf.numberToTerraform(struct!.dedicatedMasterCount),
    dedicated_master_enabled: cdktf.booleanToTerraform(struct!.dedicatedMasterEnabled),
    dedicated_master_type: cdktf.stringToTerraform(struct!.dedicatedMasterType),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    warm_count: cdktf.numberToTerraform(struct!.warmCount),
    warm_enabled: cdktf.booleanToTerraform(struct!.warmEnabled),
    warm_type: cdktf.stringToTerraform(struct!.warmType),
    zone_awareness_enabled: cdktf.booleanToTerraform(struct!.zoneAwarenessEnabled),
    zone_awareness_config: elasticsearchDomainClusterConfigZoneAwarenessConfigToTerraform(struct!.zoneAwarenessConfig),
  }
}

export class ElasticsearchDomainClusterConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ElasticsearchDomainClusterConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._dedicatedMasterCount) {
      hasAnyValues = true;
      internalValueResult.dedicatedMasterCount = this._dedicatedMasterCount;
    }
    if (this._dedicatedMasterEnabled) {
      hasAnyValues = true;
      internalValueResult.dedicatedMasterEnabled = this._dedicatedMasterEnabled;
    }
    if (this._dedicatedMasterType) {
      hasAnyValues = true;
      internalValueResult.dedicatedMasterType = this._dedicatedMasterType;
    }
    if (this._instanceCount) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._warmCount) {
      hasAnyValues = true;
      internalValueResult.warmCount = this._warmCount;
    }
    if (this._warmEnabled) {
      hasAnyValues = true;
      internalValueResult.warmEnabled = this._warmEnabled;
    }
    if (this._warmType) {
      hasAnyValues = true;
      internalValueResult.warmType = this._warmType;
    }
    if (this._zoneAwarenessEnabled) {
      hasAnyValues = true;
      internalValueResult.zoneAwarenessEnabled = this._zoneAwarenessEnabled;
    }
    if (this._zoneAwarenessConfig) {
      hasAnyValues = true;
      internalValueResult.zoneAwarenessConfig = this._zoneAwarenessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchDomainClusterConfig | undefined) {
    if (value === undefined) {
      this._dedicatedMasterCount = undefined;
      this._dedicatedMasterEnabled = undefined;
      this._dedicatedMasterType = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._warmCount = undefined;
      this._warmEnabled = undefined;
      this._warmType = undefined;
      this._zoneAwarenessEnabled = undefined;
      this._zoneAwarenessConfig.internalValue = undefined;
    }
    else {
      this._dedicatedMasterCount = value.dedicatedMasterCount;
      this._dedicatedMasterEnabled = value.dedicatedMasterEnabled;
      this._dedicatedMasterType = value.dedicatedMasterType;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._warmCount = value.warmCount;
      this._warmEnabled = value.warmEnabled;
      this._warmType = value.warmType;
      this._zoneAwarenessEnabled = value.zoneAwarenessEnabled;
      this._zoneAwarenessConfig.internalValue = value.zoneAwarenessConfig;
    }
  }

  // dedicated_master_count - computed: false, optional: true, required: false
  private _dedicatedMasterCount?: number; 
  public get dedicatedMasterCount() {
    return this.getNumberAttribute('dedicated_master_count');
  }
  public set dedicatedMasterCount(value: number) {
    this._dedicatedMasterCount = value;
  }
  public resetDedicatedMasterCount() {
    this._dedicatedMasterCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedMasterCountInput() {
    return this._dedicatedMasterCount;
  }

  // dedicated_master_enabled - computed: false, optional: true, required: false
  private _dedicatedMasterEnabled?: boolean | cdktf.IResolvable; 
  public get dedicatedMasterEnabled() {
    return this.getBooleanAttribute('dedicated_master_enabled') as any;
  }
  public set dedicatedMasterEnabled(value: boolean | cdktf.IResolvable) {
    this._dedicatedMasterEnabled = value;
  }
  public resetDedicatedMasterEnabled() {
    this._dedicatedMasterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedMasterEnabledInput() {
    return this._dedicatedMasterEnabled;
  }

  // dedicated_master_type - computed: false, optional: true, required: false
  private _dedicatedMasterType?: string; 
  public get dedicatedMasterType() {
    return this.getStringAttribute('dedicated_master_type');
  }
  public set dedicatedMasterType(value: string) {
    this._dedicatedMasterType = value;
  }
  public resetDedicatedMasterType() {
    this._dedicatedMasterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedMasterTypeInput() {
    return this._dedicatedMasterType;
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // warm_count - computed: false, optional: true, required: false
  private _warmCount?: number; 
  public get warmCount() {
    return this.getNumberAttribute('warm_count');
  }
  public set warmCount(value: number) {
    this._warmCount = value;
  }
  public resetWarmCount() {
    this._warmCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmCountInput() {
    return this._warmCount;
  }

  // warm_enabled - computed: false, optional: true, required: false
  private _warmEnabled?: boolean | cdktf.IResolvable; 
  public get warmEnabled() {
    return this.getBooleanAttribute('warm_enabled') as any;
  }
  public set warmEnabled(value: boolean | cdktf.IResolvable) {
    this._warmEnabled = value;
  }
  public resetWarmEnabled() {
    this._warmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmEnabledInput() {
    return this._warmEnabled;
  }

  // warm_type - computed: false, optional: true, required: false
  private _warmType?: string; 
  public get warmType() {
    return this.getStringAttribute('warm_type');
  }
  public set warmType(value: string) {
    this._warmType = value;
  }
  public resetWarmType() {
    this._warmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmTypeInput() {
    return this._warmType;
  }

  // zone_awareness_enabled - computed: false, optional: true, required: false
  private _zoneAwarenessEnabled?: boolean | cdktf.IResolvable; 
  public get zoneAwarenessEnabled() {
    return this.getBooleanAttribute('zone_awareness_enabled') as any;
  }
  public set zoneAwarenessEnabled(value: boolean | cdktf.IResolvable) {
    this._zoneAwarenessEnabled = value;
  }
  public resetZoneAwarenessEnabled() {
    this._zoneAwarenessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneAwarenessEnabledInput() {
    return this._zoneAwarenessEnabled;
  }

  // zone_awareness_config - computed: false, optional: true, required: false
  private _zoneAwarenessConfig = new ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference(this as any, "zone_awareness_config", true);
  public get zoneAwarenessConfig() {
    return this._zoneAwarenessConfig;
  }
  public putZoneAwarenessConfig(value: ElasticsearchDomainClusterConfigZoneAwarenessConfig) {
    this._zoneAwarenessConfig.internalValue = value;
  }
  public resetZoneAwarenessConfig() {
    this._zoneAwarenessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneAwarenessConfigInput() {
    return this._zoneAwarenessConfig.internalValue;
  }
}
export interface ElasticsearchDomainCognitoOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enabled ElasticsearchDomain#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#identity_pool_id ElasticsearchDomain#identity_pool_id}
  */
  readonly identityPoolId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#role_arn ElasticsearchDomain#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#user_pool_id ElasticsearchDomain#user_pool_id}
  */
  readonly userPoolId: string;
}

export function elasticsearchDomainCognitoOptionsToTerraform(struct?: ElasticsearchDomainCognitoOptionsOutputReference | ElasticsearchDomainCognitoOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    identity_pool_id: cdktf.stringToTerraform(struct!.identityPoolId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    user_pool_id: cdktf.stringToTerraform(struct!.userPoolId),
  }
}

export class ElasticsearchDomainCognitoOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ElasticsearchDomainCognitoOptions | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._enabled) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._identityPoolId) {
      hasAnyValues = true;
      internalValueResult.identityPoolId = this._identityPoolId;
    }
    if (this._roleArn) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._userPoolId) {
      hasAnyValues = true;
      internalValueResult.userPoolId = this._userPoolId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchDomainCognitoOptions | undefined) {
    if (value === undefined) {
      this._enabled = undefined;
      this._identityPoolId = undefined;
      this._roleArn = undefined;
      this._userPoolId = undefined;
    }
    else {
      this._enabled = value.enabled;
      this._identityPoolId = value.identityPoolId;
      this._roleArn = value.roleArn;
      this._userPoolId = value.userPoolId;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
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

  // identity_pool_id - computed: false, optional: false, required: true
  private _identityPoolId?: string; 
  public get identityPoolId() {
    return this.getStringAttribute('identity_pool_id');
  }
  public set identityPoolId(value: string) {
    this._identityPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPoolIdInput() {
    return this._identityPoolId;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId?: string; 
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId;
  }
}
export interface ElasticsearchDomainDomainEndpointOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#custom_endpoint ElasticsearchDomain#custom_endpoint}
  */
  readonly customEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#custom_endpoint_certificate_arn ElasticsearchDomain#custom_endpoint_certificate_arn}
  */
  readonly customEndpointCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#custom_endpoint_enabled ElasticsearchDomain#custom_endpoint_enabled}
  */
  readonly customEndpointEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enforce_https ElasticsearchDomain#enforce_https}
  */
  readonly enforceHttps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#tls_security_policy ElasticsearchDomain#tls_security_policy}
  */
  readonly tlsSecurityPolicy?: string;
}

export function elasticsearchDomainDomainEndpointOptionsToTerraform(struct?: ElasticsearchDomainDomainEndpointOptionsOutputReference | ElasticsearchDomainDomainEndpointOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_endpoint: cdktf.stringToTerraform(struct!.customEndpoint),
    custom_endpoint_certificate_arn: cdktf.stringToTerraform(struct!.customEndpointCertificateArn),
    custom_endpoint_enabled: cdktf.booleanToTerraform(struct!.customEndpointEnabled),
    enforce_https: cdktf.booleanToTerraform(struct!.enforceHttps),
    tls_security_policy: cdktf.stringToTerraform(struct!.tlsSecurityPolicy),
  }
}

export class ElasticsearchDomainDomainEndpointOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ElasticsearchDomainDomainEndpointOptions | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._customEndpoint) {
      hasAnyValues = true;
      internalValueResult.customEndpoint = this._customEndpoint;
    }
    if (this._customEndpointCertificateArn) {
      hasAnyValues = true;
      internalValueResult.customEndpointCertificateArn = this._customEndpointCertificateArn;
    }
    if (this._customEndpointEnabled) {
      hasAnyValues = true;
      internalValueResult.customEndpointEnabled = this._customEndpointEnabled;
    }
    if (this._enforceHttps) {
      hasAnyValues = true;
      internalValueResult.enforceHttps = this._enforceHttps;
    }
    if (this._tlsSecurityPolicy) {
      hasAnyValues = true;
      internalValueResult.tlsSecurityPolicy = this._tlsSecurityPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchDomainDomainEndpointOptions | undefined) {
    if (value === undefined) {
      this._customEndpoint = undefined;
      this._customEndpointCertificateArn = undefined;
      this._customEndpointEnabled = undefined;
      this._enforceHttps = undefined;
      this._tlsSecurityPolicy = undefined;
    }
    else {
      this._customEndpoint = value.customEndpoint;
      this._customEndpointCertificateArn = value.customEndpointCertificateArn;
      this._customEndpointEnabled = value.customEndpointEnabled;
      this._enforceHttps = value.enforceHttps;
      this._tlsSecurityPolicy = value.tlsSecurityPolicy;
    }
  }

  // custom_endpoint - computed: false, optional: true, required: false
  private _customEndpoint?: string; 
  public get customEndpoint() {
    return this.getStringAttribute('custom_endpoint');
  }
  public set customEndpoint(value: string) {
    this._customEndpoint = value;
  }
  public resetCustomEndpoint() {
    this._customEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointInput() {
    return this._customEndpoint;
  }

  // custom_endpoint_certificate_arn - computed: false, optional: true, required: false
  private _customEndpointCertificateArn?: string; 
  public get customEndpointCertificateArn() {
    return this.getStringAttribute('custom_endpoint_certificate_arn');
  }
  public set customEndpointCertificateArn(value: string) {
    this._customEndpointCertificateArn = value;
  }
  public resetCustomEndpointCertificateArn() {
    this._customEndpointCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointCertificateArnInput() {
    return this._customEndpointCertificateArn;
  }

  // custom_endpoint_enabled - computed: false, optional: true, required: false
  private _customEndpointEnabled?: boolean | cdktf.IResolvable; 
  public get customEndpointEnabled() {
    return this.getBooleanAttribute('custom_endpoint_enabled') as any;
  }
  public set customEndpointEnabled(value: boolean | cdktf.IResolvable) {
    this._customEndpointEnabled = value;
  }
  public resetCustomEndpointEnabled() {
    this._customEndpointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointEnabledInput() {
    return this._customEndpointEnabled;
  }

  // enforce_https - computed: false, optional: true, required: false
  private _enforceHttps?: boolean | cdktf.IResolvable; 
  public get enforceHttps() {
    return this.getBooleanAttribute('enforce_https') as any;
  }
  public set enforceHttps(value: boolean | cdktf.IResolvable) {
    this._enforceHttps = value;
  }
  public resetEnforceHttps() {
    this._enforceHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceHttpsInput() {
    return this._enforceHttps;
  }

  // tls_security_policy - computed: true, optional: true, required: false
  private _tlsSecurityPolicy?: string; 
  public get tlsSecurityPolicy() {
    return this.getStringAttribute('tls_security_policy');
  }
  public set tlsSecurityPolicy(value: string) {
    this._tlsSecurityPolicy = value;
  }
  public resetTlsSecurityPolicy() {
    this._tlsSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSecurityPolicyInput() {
    return this._tlsSecurityPolicy;
  }
}
export interface ElasticsearchDomainEbsOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#ebs_enabled ElasticsearchDomain#ebs_enabled}
  */
  readonly ebsEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#iops ElasticsearchDomain#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#volume_size ElasticsearchDomain#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#volume_type ElasticsearchDomain#volume_type}
  */
  readonly volumeType?: string;
}

export function elasticsearchDomainEbsOptionsToTerraform(struct?: ElasticsearchDomainEbsOptionsOutputReference | ElasticsearchDomainEbsOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ebs_enabled: cdktf.booleanToTerraform(struct!.ebsEnabled),
    iops: cdktf.numberToTerraform(struct!.iops),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export class ElasticsearchDomainEbsOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ElasticsearchDomainEbsOptions | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._ebsEnabled) {
      hasAnyValues = true;
      internalValueResult.ebsEnabled = this._ebsEnabled;
    }
    if (this._iops) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._volumeSize) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeType) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchDomainEbsOptions | undefined) {
    if (value === undefined) {
      this._ebsEnabled = undefined;
      this._iops = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
    }
    else {
      this._ebsEnabled = value.ebsEnabled;
      this._iops = value.iops;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
    }
  }

  // ebs_enabled - computed: false, optional: false, required: true
  private _ebsEnabled?: boolean | cdktf.IResolvable; 
  public get ebsEnabled() {
    return this.getBooleanAttribute('ebs_enabled') as any;
  }
  public set ebsEnabled(value: boolean | cdktf.IResolvable) {
    this._ebsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsEnabledInput() {
    return this._ebsEnabled;
  }

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // volume_size - computed: false, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}
export interface ElasticsearchDomainEncryptAtRest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enabled ElasticsearchDomain#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#kms_key_id ElasticsearchDomain#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

export function elasticsearchDomainEncryptAtRestToTerraform(struct?: ElasticsearchDomainEncryptAtRestOutputReference | ElasticsearchDomainEncryptAtRest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}

export class ElasticsearchDomainEncryptAtRestOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ElasticsearchDomainEncryptAtRest | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._enabled) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._kmsKeyId) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchDomainEncryptAtRest | undefined) {
    if (value === undefined) {
      this._enabled = undefined;
      this._kmsKeyId = undefined;
    }
    else {
      this._enabled = value.enabled;
      this._kmsKeyId = value.kmsKeyId;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }
}
export interface ElasticsearchDomainLogPublishingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#cloudwatch_log_group_arn ElasticsearchDomain#cloudwatch_log_group_arn}
  */
  readonly cloudwatchLogGroupArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enabled ElasticsearchDomain#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#log_type ElasticsearchDomain#log_type}
  */
  readonly logType: string;
}

export function elasticsearchDomainLogPublishingOptionsToTerraform(struct?: ElasticsearchDomainLogPublishingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_log_group_arn: cdktf.stringToTerraform(struct!.cloudwatchLogGroupArn),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_type: cdktf.stringToTerraform(struct!.logType),
  }
}

export interface ElasticsearchDomainNodeToNodeEncryption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#enabled ElasticsearchDomain#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function elasticsearchDomainNodeToNodeEncryptionToTerraform(struct?: ElasticsearchDomainNodeToNodeEncryptionOutputReference | ElasticsearchDomainNodeToNodeEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class ElasticsearchDomainNodeToNodeEncryptionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ElasticsearchDomainNodeToNodeEncryption | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._enabled) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchDomainNodeToNodeEncryption | undefined) {
    if (value === undefined) {
      this._enabled = undefined;
    }
    else {
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ElasticsearchDomainSnapshotOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#automated_snapshot_start_hour ElasticsearchDomain#automated_snapshot_start_hour}
  */
  readonly automatedSnapshotStartHour: number;
}

export function elasticsearchDomainSnapshotOptionsToTerraform(struct?: ElasticsearchDomainSnapshotOptionsOutputReference | ElasticsearchDomainSnapshotOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automated_snapshot_start_hour: cdktf.numberToTerraform(struct!.automatedSnapshotStartHour),
  }
}

export class ElasticsearchDomainSnapshotOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ElasticsearchDomainSnapshotOptions | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._automatedSnapshotStartHour) {
      hasAnyValues = true;
      internalValueResult.automatedSnapshotStartHour = this._automatedSnapshotStartHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchDomainSnapshotOptions | undefined) {
    if (value === undefined) {
      this._automatedSnapshotStartHour = undefined;
    }
    else {
      this._automatedSnapshotStartHour = value.automatedSnapshotStartHour;
    }
  }

  // automated_snapshot_start_hour - computed: false, optional: false, required: true
  private _automatedSnapshotStartHour?: number; 
  public get automatedSnapshotStartHour() {
    return this.getNumberAttribute('automated_snapshot_start_hour');
  }
  public set automatedSnapshotStartHour(value: number) {
    this._automatedSnapshotStartHour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedSnapshotStartHourInput() {
    return this._automatedSnapshotStartHour;
  }
}
export interface ElasticsearchDomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#update ElasticsearchDomain#update}
  */
  readonly update?: string;
}

export function elasticsearchDomainTimeoutsToTerraform(struct?: ElasticsearchDomainTimeoutsOutputReference | ElasticsearchDomainTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ElasticsearchDomainTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ElasticsearchDomainTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchDomainTimeouts | undefined) {
    if (value === undefined) {
      this._update = undefined;
    }
    else {
      this._update = value.update;
    }
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface ElasticsearchDomainVpcOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#security_group_ids ElasticsearchDomain#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#subnet_ids ElasticsearchDomain#subnet_ids}
  */
  readonly subnetIds?: string[];
}

export function elasticsearchDomainVpcOptionsToTerraform(struct?: ElasticsearchDomainVpcOptionsOutputReference | ElasticsearchDomainVpcOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}

export class ElasticsearchDomainVpcOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ElasticsearchDomainVpcOptions | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._securityGroupIds) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticsearchDomainVpcOptions | undefined) {
    if (value === undefined) {
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else {
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
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
    return this.getListAttribute('subnet_ids');
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html aws_elasticsearch_domain}
*/
export class ElasticsearchDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_elasticsearch_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html aws_elasticsearch_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchDomainConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elasticsearch_domain',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessPolicies = config.accessPolicies;
    this._advancedOptions = config.advancedOptions;
    this._domainName = config.domainName;
    this._elasticsearchVersion = config.elasticsearchVersion;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._advancedSecurityOptions.internalValue = config.advancedSecurityOptions;
    this._clusterConfig.internalValue = config.clusterConfig;
    this._cognitoOptions.internalValue = config.cognitoOptions;
    this._domainEndpointOptions.internalValue = config.domainEndpointOptions;
    this._ebsOptions.internalValue = config.ebsOptions;
    this._encryptAtRest.internalValue = config.encryptAtRest;
    this._logPublishingOptions = config.logPublishingOptions;
    this._nodeToNodeEncryption.internalValue = config.nodeToNodeEncryption;
    this._snapshotOptions.internalValue = config.snapshotOptions;
    this._timeouts.internalValue = config.timeouts;
    this._vpcOptions.internalValue = config.vpcOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policies - computed: true, optional: true, required: false
  private _accessPolicies?: string; 
  public get accessPolicies() {
    return this.getStringAttribute('access_policies');
  }
  public set accessPolicies(value: string) {
    this._accessPolicies = value;
  }
  public resetAccessPolicies() {
    this._accessPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPoliciesInput() {
    return this._accessPolicies;
  }

  // advanced_options - computed: true, optional: true, required: false
  private _advancedOptions?: { [key: string]: string } | cdktf.IResolvable; 
  public get advancedOptions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('advanced_options') as any;
  }
  public set advancedOptions(value: { [key: string]: string } | cdktf.IResolvable) {
    this._advancedOptions = value;
  }
  public resetAdvancedOptions() {
    this._advancedOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedOptionsInput() {
    return this._advancedOptions;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // elasticsearch_version - computed: false, optional: true, required: false
  private _elasticsearchVersion?: string; 
  public get elasticsearchVersion() {
    return this.getStringAttribute('elasticsearch_version');
  }
  public set elasticsearchVersion(value: string) {
    this._elasticsearchVersion = value;
  }
  public resetElasticsearchVersion() {
    this._elasticsearchVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchVersionInput() {
    return this._elasticsearchVersion;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kibana_endpoint - computed: true, optional: false, required: false
  public get kibanaEndpoint() {
    return this.getStringAttribute('kibana_endpoint');
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

  // advanced_security_options - computed: false, optional: true, required: false
  private _advancedSecurityOptions = new ElasticsearchDomainAdvancedSecurityOptionsOutputReference(this as any, "advanced_security_options", true);
  public get advancedSecurityOptions() {
    return this._advancedSecurityOptions;
  }
  public putAdvancedSecurityOptions(value: ElasticsearchDomainAdvancedSecurityOptions) {
    this._advancedSecurityOptions.internalValue = value;
  }
  public resetAdvancedSecurityOptions() {
    this._advancedSecurityOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSecurityOptionsInput() {
    return this._advancedSecurityOptions.internalValue;
  }

  // cluster_config - computed: false, optional: true, required: false
  private _clusterConfig = new ElasticsearchDomainClusterConfigOutputReference(this as any, "cluster_config", true);
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: ElasticsearchDomainClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  public resetClusterConfig() {
    this._clusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // cognito_options - computed: false, optional: true, required: false
  private _cognitoOptions = new ElasticsearchDomainCognitoOptionsOutputReference(this as any, "cognito_options", true);
  public get cognitoOptions() {
    return this._cognitoOptions;
  }
  public putCognitoOptions(value: ElasticsearchDomainCognitoOptions) {
    this._cognitoOptions.internalValue = value;
  }
  public resetCognitoOptions() {
    this._cognitoOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitoOptionsInput() {
    return this._cognitoOptions.internalValue;
  }

  // domain_endpoint_options - computed: false, optional: true, required: false
  private _domainEndpointOptions = new ElasticsearchDomainDomainEndpointOptionsOutputReference(this as any, "domain_endpoint_options", true);
  public get domainEndpointOptions() {
    return this._domainEndpointOptions;
  }
  public putDomainEndpointOptions(value: ElasticsearchDomainDomainEndpointOptions) {
    this._domainEndpointOptions.internalValue = value;
  }
  public resetDomainEndpointOptions() {
    this._domainEndpointOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainEndpointOptionsInput() {
    return this._domainEndpointOptions.internalValue;
  }

  // ebs_options - computed: false, optional: true, required: false
  private _ebsOptions = new ElasticsearchDomainEbsOptionsOutputReference(this as any, "ebs_options", true);
  public get ebsOptions() {
    return this._ebsOptions;
  }
  public putEbsOptions(value: ElasticsearchDomainEbsOptions) {
    this._ebsOptions.internalValue = value;
  }
  public resetEbsOptions() {
    this._ebsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptionsInput() {
    return this._ebsOptions.internalValue;
  }

  // encrypt_at_rest - computed: false, optional: true, required: false
  private _encryptAtRest = new ElasticsearchDomainEncryptAtRestOutputReference(this as any, "encrypt_at_rest", true);
  public get encryptAtRest() {
    return this._encryptAtRest;
  }
  public putEncryptAtRest(value: ElasticsearchDomainEncryptAtRest) {
    this._encryptAtRest.internalValue = value;
  }
  public resetEncryptAtRest() {
    this._encryptAtRest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAtRestInput() {
    return this._encryptAtRest.internalValue;
  }

  // log_publishing_options - computed: false, optional: true, required: false
  private _logPublishingOptions?: ElasticsearchDomainLogPublishingOptions[]; 
  public get logPublishingOptions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('log_publishing_options') as any;
  }
  public set logPublishingOptions(value: ElasticsearchDomainLogPublishingOptions[]) {
    this._logPublishingOptions = value;
  }
  public resetLogPublishingOptions() {
    this._logPublishingOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPublishingOptionsInput() {
    return this._logPublishingOptions;
  }

  // node_to_node_encryption - computed: false, optional: true, required: false
  private _nodeToNodeEncryption = new ElasticsearchDomainNodeToNodeEncryptionOutputReference(this as any, "node_to_node_encryption", true);
  public get nodeToNodeEncryption() {
    return this._nodeToNodeEncryption;
  }
  public putNodeToNodeEncryption(value: ElasticsearchDomainNodeToNodeEncryption) {
    this._nodeToNodeEncryption.internalValue = value;
  }
  public resetNodeToNodeEncryption() {
    this._nodeToNodeEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeToNodeEncryptionInput() {
    return this._nodeToNodeEncryption.internalValue;
  }

  // snapshot_options - computed: false, optional: true, required: false
  private _snapshotOptions = new ElasticsearchDomainSnapshotOptionsOutputReference(this as any, "snapshot_options", true);
  public get snapshotOptions() {
    return this._snapshotOptions;
  }
  public putSnapshotOptions(value: ElasticsearchDomainSnapshotOptions) {
    this._snapshotOptions.internalValue = value;
  }
  public resetSnapshotOptions() {
    this._snapshotOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotOptionsInput() {
    return this._snapshotOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ElasticsearchDomainTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ElasticsearchDomainTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_options - computed: false, optional: true, required: false
  private _vpcOptions = new ElasticsearchDomainVpcOptionsOutputReference(this as any, "vpc_options", true);
  public get vpcOptions() {
    return this._vpcOptions;
  }
  public putVpcOptions(value: ElasticsearchDomainVpcOptions) {
    this._vpcOptions.internalValue = value;
  }
  public resetVpcOptions() {
    this._vpcOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcOptionsInput() {
    return this._vpcOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policies: cdktf.stringToTerraform(this._accessPolicies),
      advanced_options: cdktf.hashMapper(cdktf.anyToTerraform)(this._advancedOptions),
      domain_name: cdktf.stringToTerraform(this._domainName),
      elasticsearch_version: cdktf.stringToTerraform(this._elasticsearchVersion),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      advanced_security_options: elasticsearchDomainAdvancedSecurityOptionsToTerraform(this._advancedSecurityOptions.internalValue),
      cluster_config: elasticsearchDomainClusterConfigToTerraform(this._clusterConfig.internalValue),
      cognito_options: elasticsearchDomainCognitoOptionsToTerraform(this._cognitoOptions.internalValue),
      domain_endpoint_options: elasticsearchDomainDomainEndpointOptionsToTerraform(this._domainEndpointOptions.internalValue),
      ebs_options: elasticsearchDomainEbsOptionsToTerraform(this._ebsOptions.internalValue),
      encrypt_at_rest: elasticsearchDomainEncryptAtRestToTerraform(this._encryptAtRest.internalValue),
      log_publishing_options: cdktf.listMapper(elasticsearchDomainLogPublishingOptionsToTerraform)(this._logPublishingOptions),
      node_to_node_encryption: elasticsearchDomainNodeToNodeEncryptionToTerraform(this._nodeToNodeEncryption.internalValue),
      snapshot_options: elasticsearchDomainSnapshotOptionsToTerraform(this._snapshotOptions.internalValue),
      timeouts: elasticsearchDomainTimeoutsToTerraform(this._timeouts.internalValue),
      vpc_options: elasticsearchDomainVpcOptionsToTerraform(this._vpcOptions.internalValue),
    };
  }
}
