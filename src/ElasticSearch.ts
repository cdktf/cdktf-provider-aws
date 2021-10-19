// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS ElasticSearch Service
*/
export namespace ElasticSearch {
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

  function elasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsToTerraform(struct?: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference | ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions): any {
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

    // master_user_arn - computed: false, optional: true, required: false
    private _masterUserArn?: string | undefined; 
    public get masterUserArn() {
      return this.getStringAttribute('master_user_arn');
    }
    public set masterUserArn(value: string | undefined) {
      this._masterUserArn = value;
    }
    public resetMasterUserArn() {
      this._masterUserArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterUserArnInput() {
      return this._masterUserArn
    }

    // master_user_name - computed: false, optional: true, required: false
    private _masterUserName?: string | undefined; 
    public get masterUserName() {
      return this.getStringAttribute('master_user_name');
    }
    public set masterUserName(value: string | undefined) {
      this._masterUserName = value;
    }
    public resetMasterUserName() {
      this._masterUserName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterUserNameInput() {
      return this._masterUserName
    }

    // master_user_password - computed: false, optional: true, required: false
    private _masterUserPassword?: string | undefined; 
    public get masterUserPassword() {
      return this.getStringAttribute('master_user_password');
    }
    public set masterUserPassword(value: string | undefined) {
      this._masterUserPassword = value;
    }
    public resetMasterUserPassword() {
      this._masterUserPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterUserPasswordInput() {
      return this._masterUserPassword
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

  function elasticsearchDomainAdvancedSecurityOptionsToTerraform(struct?: ElasticsearchDomainAdvancedSecurityOptionsOutputReference | ElasticsearchDomainAdvancedSecurityOptions): any {
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
      return this._enabled
    }

    // internal_user_database_enabled - computed: false, optional: true, required: false
    private _internalUserDatabaseEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get internalUserDatabaseEnabled() {
      return this.getBooleanAttribute('internal_user_database_enabled') as any;
    }
    public set internalUserDatabaseEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._internalUserDatabaseEnabled = value;
    }
    public resetInternalUserDatabaseEnabled() {
      this._internalUserDatabaseEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get internalUserDatabaseEnabledInput() {
      return this._internalUserDatabaseEnabled
    }

    // master_user_options - computed: false, optional: true, required: false
    private _masterUserOptions?: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions | undefined; 
    private __masterUserOptionsOutput = new ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptionsOutputReference(this as any, "master_user_options", true);
    public get masterUserOptions() {
      return this.__masterUserOptionsOutput;
    }
    public putMasterUserOptions(value: ElasticsearchDomainAdvancedSecurityOptionsMasterUserOptions | undefined) {
      this._masterUserOptions = value;
    }
    public resetMasterUserOptions() {
      this._masterUserOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterUserOptionsInput() {
      return this._masterUserOptions
    }
  }
  export interface ElasticsearchDomainClusterConfigZoneAwarenessConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#availability_zone_count ElasticsearchDomain#availability_zone_count}
    */
    readonly availabilityZoneCount?: number;
  }

  function elasticsearchDomainClusterConfigZoneAwarenessConfigToTerraform(struct?: ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference | ElasticsearchDomainClusterConfigZoneAwarenessConfig): any {
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

    // availability_zone_count - computed: false, optional: true, required: false
    private _availabilityZoneCount?: number | undefined; 
    public get availabilityZoneCount() {
      return this.getNumberAttribute('availability_zone_count');
    }
    public set availabilityZoneCount(value: number | undefined) {
      this._availabilityZoneCount = value;
    }
    public resetAvailabilityZoneCount() {
      this._availabilityZoneCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneCountInput() {
      return this._availabilityZoneCount
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

  function elasticsearchDomainClusterConfigToTerraform(struct?: ElasticsearchDomainClusterConfigOutputReference | ElasticsearchDomainClusterConfig): any {
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

    // dedicated_master_count - computed: false, optional: true, required: false
    private _dedicatedMasterCount?: number | undefined; 
    public get dedicatedMasterCount() {
      return this.getNumberAttribute('dedicated_master_count');
    }
    public set dedicatedMasterCount(value: number | undefined) {
      this._dedicatedMasterCount = value;
    }
    public resetDedicatedMasterCount() {
      this._dedicatedMasterCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dedicatedMasterCountInput() {
      return this._dedicatedMasterCount
    }

    // dedicated_master_enabled - computed: false, optional: true, required: false
    private _dedicatedMasterEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get dedicatedMasterEnabled() {
      return this.getBooleanAttribute('dedicated_master_enabled') as any;
    }
    public set dedicatedMasterEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._dedicatedMasterEnabled = value;
    }
    public resetDedicatedMasterEnabled() {
      this._dedicatedMasterEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dedicatedMasterEnabledInput() {
      return this._dedicatedMasterEnabled
    }

    // dedicated_master_type - computed: false, optional: true, required: false
    private _dedicatedMasterType?: string | undefined; 
    public get dedicatedMasterType() {
      return this.getStringAttribute('dedicated_master_type');
    }
    public set dedicatedMasterType(value: string | undefined) {
      this._dedicatedMasterType = value;
    }
    public resetDedicatedMasterType() {
      this._dedicatedMasterType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dedicatedMasterTypeInput() {
      return this._dedicatedMasterType
    }

    // instance_count - computed: false, optional: true, required: false
    private _instanceCount?: number | undefined; 
    public get instanceCount() {
      return this.getNumberAttribute('instance_count');
    }
    public set instanceCount(value: number | undefined) {
      this._instanceCount = value;
    }
    public resetInstanceCount() {
      this._instanceCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceCountInput() {
      return this._instanceCount
    }

    // instance_type - computed: false, optional: true, required: false
    private _instanceType?: string | undefined; 
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string | undefined) {
      this._instanceType = value;
    }
    public resetInstanceType() {
      this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
      return this._instanceType
    }

    // warm_count - computed: false, optional: true, required: false
    private _warmCount?: number | undefined; 
    public get warmCount() {
      return this.getNumberAttribute('warm_count');
    }
    public set warmCount(value: number | undefined) {
      this._warmCount = value;
    }
    public resetWarmCount() {
      this._warmCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get warmCountInput() {
      return this._warmCount
    }

    // warm_enabled - computed: false, optional: true, required: false
    private _warmEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get warmEnabled() {
      return this.getBooleanAttribute('warm_enabled') as any;
    }
    public set warmEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._warmEnabled = value;
    }
    public resetWarmEnabled() {
      this._warmEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get warmEnabledInput() {
      return this._warmEnabled
    }

    // warm_type - computed: false, optional: true, required: false
    private _warmType?: string | undefined; 
    public get warmType() {
      return this.getStringAttribute('warm_type');
    }
    public set warmType(value: string | undefined) {
      this._warmType = value;
    }
    public resetWarmType() {
      this._warmType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get warmTypeInput() {
      return this._warmType
    }

    // zone_awareness_enabled - computed: false, optional: true, required: false
    private _zoneAwarenessEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get zoneAwarenessEnabled() {
      return this.getBooleanAttribute('zone_awareness_enabled') as any;
    }
    public set zoneAwarenessEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._zoneAwarenessEnabled = value;
    }
    public resetZoneAwarenessEnabled() {
      this._zoneAwarenessEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get zoneAwarenessEnabledInput() {
      return this._zoneAwarenessEnabled
    }

    // zone_awareness_config - computed: false, optional: true, required: false
    private _zoneAwarenessConfig?: ElasticsearchDomainClusterConfigZoneAwarenessConfig | undefined; 
    private __zoneAwarenessConfigOutput = new ElasticsearchDomainClusterConfigZoneAwarenessConfigOutputReference(this as any, "zone_awareness_config", true);
    public get zoneAwarenessConfig() {
      return this.__zoneAwarenessConfigOutput;
    }
    public putZoneAwarenessConfig(value: ElasticsearchDomainClusterConfigZoneAwarenessConfig | undefined) {
      this._zoneAwarenessConfig = value;
    }
    public resetZoneAwarenessConfig() {
      this._zoneAwarenessConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get zoneAwarenessConfigInput() {
      return this._zoneAwarenessConfig
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

  function elasticsearchDomainCognitoOptionsToTerraform(struct?: ElasticsearchDomainCognitoOptionsOutputReference | ElasticsearchDomainCognitoOptions): any {
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

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
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
      return this._identityPoolId
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
      return this._roleArn
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
      return this._userPoolId
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

  function elasticsearchDomainDomainEndpointOptionsToTerraform(struct?: ElasticsearchDomainDomainEndpointOptionsOutputReference | ElasticsearchDomainDomainEndpointOptions): any {
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

    // custom_endpoint - computed: false, optional: true, required: false
    private _customEndpoint?: string | undefined; 
    public get customEndpoint() {
      return this.getStringAttribute('custom_endpoint');
    }
    public set customEndpoint(value: string | undefined) {
      this._customEndpoint = value;
    }
    public resetCustomEndpoint() {
      this._customEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customEndpointInput() {
      return this._customEndpoint
    }

    // custom_endpoint_certificate_arn - computed: false, optional: true, required: false
    private _customEndpointCertificateArn?: string | undefined; 
    public get customEndpointCertificateArn() {
      return this.getStringAttribute('custom_endpoint_certificate_arn');
    }
    public set customEndpointCertificateArn(value: string | undefined) {
      this._customEndpointCertificateArn = value;
    }
    public resetCustomEndpointCertificateArn() {
      this._customEndpointCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customEndpointCertificateArnInput() {
      return this._customEndpointCertificateArn
    }

    // custom_endpoint_enabled - computed: false, optional: true, required: false
    private _customEndpointEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get customEndpointEnabled() {
      return this.getBooleanAttribute('custom_endpoint_enabled') as any;
    }
    public set customEndpointEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._customEndpointEnabled = value;
    }
    public resetCustomEndpointEnabled() {
      this._customEndpointEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customEndpointEnabledInput() {
      return this._customEndpointEnabled
    }

    // enforce_https - computed: false, optional: true, required: false
    private _enforceHttps?: boolean | cdktf.IResolvable | undefined; 
    public get enforceHttps() {
      return this.getBooleanAttribute('enforce_https') as any;
    }
    public set enforceHttps(value: boolean | cdktf.IResolvable | undefined) {
      this._enforceHttps = value;
    }
    public resetEnforceHttps() {
      this._enforceHttps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enforceHttpsInput() {
      return this._enforceHttps
    }

    // tls_security_policy - computed: true, optional: true, required: false
    private _tlsSecurityPolicy?: string | undefined; 
    public get tlsSecurityPolicy() {
      return this.getStringAttribute('tls_security_policy');
    }
    public set tlsSecurityPolicy(value: string | undefined) {
      this._tlsSecurityPolicy = value;
    }
    public resetTlsSecurityPolicy() {
      this._tlsSecurityPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsSecurityPolicyInput() {
      return this._tlsSecurityPolicy
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

  function elasticsearchDomainEbsOptionsToTerraform(struct?: ElasticsearchDomainEbsOptionsOutputReference | ElasticsearchDomainEbsOptions): any {
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
      return this._ebsEnabled
    }

    // iops - computed: false, optional: true, required: false
    private _iops?: number | undefined; 
    public get iops() {
      return this.getNumberAttribute('iops');
    }
    public set iops(value: number | undefined) {
      this._iops = value;
    }
    public resetIops() {
      this._iops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iopsInput() {
      return this._iops
    }

    // volume_size - computed: false, optional: true, required: false
    private _volumeSize?: number | undefined; 
    public get volumeSize() {
      return this.getNumberAttribute('volume_size');
    }
    public set volumeSize(value: number | undefined) {
      this._volumeSize = value;
    }
    public resetVolumeSize() {
      this._volumeSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeSizeInput() {
      return this._volumeSize
    }

    // volume_type - computed: true, optional: true, required: false
    private _volumeType?: string | undefined; 
    public get volumeType() {
      return this.getStringAttribute('volume_type');
    }
    public set volumeType(value: string | undefined) {
      this._volumeType = value;
    }
    public resetVolumeType() {
      this._volumeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeTypeInput() {
      return this._volumeType
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

  function elasticsearchDomainEncryptAtRestToTerraform(struct?: ElasticsearchDomainEncryptAtRestOutputReference | ElasticsearchDomainEncryptAtRest): any {
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
      return this._enabled
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
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

  function elasticsearchDomainLogPublishingOptionsToTerraform(struct?: ElasticsearchDomainLogPublishingOptions): any {
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

  function elasticsearchDomainNodeToNodeEncryptionToTerraform(struct?: ElasticsearchDomainNodeToNodeEncryptionOutputReference | ElasticsearchDomainNodeToNodeEncryption): any {
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
      return this._enabled
    }
  }
  export interface ElasticsearchDomainSnapshotOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#automated_snapshot_start_hour ElasticsearchDomain#automated_snapshot_start_hour}
    */
    readonly automatedSnapshotStartHour: number;
  }

  function elasticsearchDomainSnapshotOptionsToTerraform(struct?: ElasticsearchDomainSnapshotOptionsOutputReference | ElasticsearchDomainSnapshotOptions): any {
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
      return this._automatedSnapshotStartHour
    }
  }
  export interface ElasticsearchDomainTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain.html#update ElasticsearchDomain#update}
    */
    readonly update?: string;
  }

  function elasticsearchDomainTimeoutsToTerraform(struct?: ElasticsearchDomainTimeoutsOutputReference | ElasticsearchDomainTimeouts): any {
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

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
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

  function elasticsearchDomainVpcOptionsToTerraform(struct?: ElasticsearchDomainVpcOptionsOutputReference | ElasticsearchDomainVpcOptions): any {
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

    // security_group_ids - computed: false, optional: true, required: false
    private _securityGroupIds?: string[] | undefined; 
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[] | undefined) {
      this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
      this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
      return this._securityGroupIds
    }

    // subnet_ids - computed: false, optional: true, required: false
    private _subnetIds?: string[] | undefined; 
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[] | undefined) {
      this._subnetIds = value;
    }
    public resetSubnetIds() {
      this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
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
      this._advancedSecurityOptions = config.advancedSecurityOptions;
      this._clusterConfig = config.clusterConfig;
      this._cognitoOptions = config.cognitoOptions;
      this._domainEndpointOptions = config.domainEndpointOptions;
      this._ebsOptions = config.ebsOptions;
      this._encryptAtRest = config.encryptAtRest;
      this._logPublishingOptions = config.logPublishingOptions;
      this._nodeToNodeEncryption = config.nodeToNodeEncryption;
      this._snapshotOptions = config.snapshotOptions;
      this._timeouts = config.timeouts;
      this._vpcOptions = config.vpcOptions;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_policies - computed: true, optional: true, required: false
    private _accessPolicies?: string | undefined; 
    public get accessPolicies() {
      return this.getStringAttribute('access_policies');
    }
    public set accessPolicies(value: string | undefined) {
      this._accessPolicies = value;
    }
    public resetAccessPolicies() {
      this._accessPolicies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessPoliciesInput() {
      return this._accessPolicies
    }

    // advanced_options - computed: true, optional: true, required: false
    private _advancedOptions?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get advancedOptions() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('advanced_options') as any;
    }
    public set advancedOptions(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._advancedOptions = value;
    }
    public resetAdvancedOptions() {
      this._advancedOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get advancedOptionsInput() {
      return this._advancedOptions
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
      return this._domainName
    }

    // elasticsearch_version - computed: false, optional: true, required: false
    private _elasticsearchVersion?: string | undefined; 
    public get elasticsearchVersion() {
      return this.getStringAttribute('elasticsearch_version');
    }
    public set elasticsearchVersion(value: string | undefined) {
      this._elasticsearchVersion = value;
    }
    public resetElasticsearchVersion() {
      this._elasticsearchVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticsearchVersionInput() {
      return this._elasticsearchVersion
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // advanced_security_options - computed: false, optional: true, required: false
    private _advancedSecurityOptions?: ElasticsearchDomainAdvancedSecurityOptions | undefined; 
    private __advancedSecurityOptionsOutput = new ElasticsearchDomainAdvancedSecurityOptionsOutputReference(this as any, "advanced_security_options", true);
    public get advancedSecurityOptions() {
      return this.__advancedSecurityOptionsOutput;
    }
    public putAdvancedSecurityOptions(value: ElasticsearchDomainAdvancedSecurityOptions | undefined) {
      this._advancedSecurityOptions = value;
    }
    public resetAdvancedSecurityOptions() {
      this._advancedSecurityOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get advancedSecurityOptionsInput() {
      return this._advancedSecurityOptions
    }

    // cluster_config - computed: false, optional: true, required: false
    private _clusterConfig?: ElasticsearchDomainClusterConfig | undefined; 
    private __clusterConfigOutput = new ElasticsearchDomainClusterConfigOutputReference(this as any, "cluster_config", true);
    public get clusterConfig() {
      return this.__clusterConfigOutput;
    }
    public putClusterConfig(value: ElasticsearchDomainClusterConfig | undefined) {
      this._clusterConfig = value;
    }
    public resetClusterConfig() {
      this._clusterConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterConfigInput() {
      return this._clusterConfig
    }

    // cognito_options - computed: false, optional: true, required: false
    private _cognitoOptions?: ElasticsearchDomainCognitoOptions | undefined; 
    private __cognitoOptionsOutput = new ElasticsearchDomainCognitoOptionsOutputReference(this as any, "cognito_options", true);
    public get cognitoOptions() {
      return this.__cognitoOptionsOutput;
    }
    public putCognitoOptions(value: ElasticsearchDomainCognitoOptions | undefined) {
      this._cognitoOptions = value;
    }
    public resetCognitoOptions() {
      this._cognitoOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cognitoOptionsInput() {
      return this._cognitoOptions
    }

    // domain_endpoint_options - computed: false, optional: true, required: false
    private _domainEndpointOptions?: ElasticsearchDomainDomainEndpointOptions | undefined; 
    private __domainEndpointOptionsOutput = new ElasticsearchDomainDomainEndpointOptionsOutputReference(this as any, "domain_endpoint_options", true);
    public get domainEndpointOptions() {
      return this.__domainEndpointOptionsOutput;
    }
    public putDomainEndpointOptions(value: ElasticsearchDomainDomainEndpointOptions | undefined) {
      this._domainEndpointOptions = value;
    }
    public resetDomainEndpointOptions() {
      this._domainEndpointOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainEndpointOptionsInput() {
      return this._domainEndpointOptions
    }

    // ebs_options - computed: false, optional: true, required: false
    private _ebsOptions?: ElasticsearchDomainEbsOptions | undefined; 
    private __ebsOptionsOutput = new ElasticsearchDomainEbsOptionsOutputReference(this as any, "ebs_options", true);
    public get ebsOptions() {
      return this.__ebsOptionsOutput;
    }
    public putEbsOptions(value: ElasticsearchDomainEbsOptions | undefined) {
      this._ebsOptions = value;
    }
    public resetEbsOptions() {
      this._ebsOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ebsOptionsInput() {
      return this._ebsOptions
    }

    // encrypt_at_rest - computed: false, optional: true, required: false
    private _encryptAtRest?: ElasticsearchDomainEncryptAtRest | undefined; 
    private __encryptAtRestOutput = new ElasticsearchDomainEncryptAtRestOutputReference(this as any, "encrypt_at_rest", true);
    public get encryptAtRest() {
      return this.__encryptAtRestOutput;
    }
    public putEncryptAtRest(value: ElasticsearchDomainEncryptAtRest | undefined) {
      this._encryptAtRest = value;
    }
    public resetEncryptAtRest() {
      this._encryptAtRest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptAtRestInput() {
      return this._encryptAtRest
    }

    // log_publishing_options - computed: false, optional: true, required: false
    private _logPublishingOptions?: ElasticsearchDomainLogPublishingOptions[] | undefined; 
    public get logPublishingOptions() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('log_publishing_options') as any;
    }
    public set logPublishingOptions(value: ElasticsearchDomainLogPublishingOptions[] | undefined) {
      this._logPublishingOptions = value;
    }
    public resetLogPublishingOptions() {
      this._logPublishingOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logPublishingOptionsInput() {
      return this._logPublishingOptions
    }

    // node_to_node_encryption - computed: false, optional: true, required: false
    private _nodeToNodeEncryption?: ElasticsearchDomainNodeToNodeEncryption | undefined; 
    private __nodeToNodeEncryptionOutput = new ElasticsearchDomainNodeToNodeEncryptionOutputReference(this as any, "node_to_node_encryption", true);
    public get nodeToNodeEncryption() {
      return this.__nodeToNodeEncryptionOutput;
    }
    public putNodeToNodeEncryption(value: ElasticsearchDomainNodeToNodeEncryption | undefined) {
      this._nodeToNodeEncryption = value;
    }
    public resetNodeToNodeEncryption() {
      this._nodeToNodeEncryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeToNodeEncryptionInput() {
      return this._nodeToNodeEncryption
    }

    // snapshot_options - computed: false, optional: true, required: false
    private _snapshotOptions?: ElasticsearchDomainSnapshotOptions | undefined; 
    private __snapshotOptionsOutput = new ElasticsearchDomainSnapshotOptionsOutputReference(this as any, "snapshot_options", true);
    public get snapshotOptions() {
      return this.__snapshotOptionsOutput;
    }
    public putSnapshotOptions(value: ElasticsearchDomainSnapshotOptions | undefined) {
      this._snapshotOptions = value;
    }
    public resetSnapshotOptions() {
      this._snapshotOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotOptionsInput() {
      return this._snapshotOptions
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: ElasticsearchDomainTimeouts | undefined; 
    private __timeoutsOutput = new ElasticsearchDomainTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: ElasticsearchDomainTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // vpc_options - computed: false, optional: true, required: false
    private _vpcOptions?: ElasticsearchDomainVpcOptions | undefined; 
    private __vpcOptionsOutput = new ElasticsearchDomainVpcOptionsOutputReference(this as any, "vpc_options", true);
    public get vpcOptions() {
      return this.__vpcOptionsOutput;
    }
    public putVpcOptions(value: ElasticsearchDomainVpcOptions | undefined) {
      this._vpcOptions = value;
    }
    public resetVpcOptions() {
      this._vpcOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcOptionsInput() {
      return this._vpcOptions
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
        advanced_security_options: elasticsearchDomainAdvancedSecurityOptionsToTerraform(this._advancedSecurityOptions),
        cluster_config: elasticsearchDomainClusterConfigToTerraform(this._clusterConfig),
        cognito_options: elasticsearchDomainCognitoOptionsToTerraform(this._cognitoOptions),
        domain_endpoint_options: elasticsearchDomainDomainEndpointOptionsToTerraform(this._domainEndpointOptions),
        ebs_options: elasticsearchDomainEbsOptionsToTerraform(this._ebsOptions),
        encrypt_at_rest: elasticsearchDomainEncryptAtRestToTerraform(this._encryptAtRest),
        log_publishing_options: cdktf.listMapper(elasticsearchDomainLogPublishingOptionsToTerraform)(this._logPublishingOptions),
        node_to_node_encryption: elasticsearchDomainNodeToNodeEncryptionToTerraform(this._nodeToNodeEncryption),
        snapshot_options: elasticsearchDomainSnapshotOptionsToTerraform(this._snapshotOptions),
        timeouts: elasticsearchDomainTimeoutsToTerraform(this._timeouts),
        vpc_options: elasticsearchDomainVpcOptionsToTerraform(this._vpcOptions),
      };
    }
  }
  export interface ElasticsearchDomainPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_policy.html#access_policies ElasticsearchDomainPolicy#access_policies}
    */
    readonly accessPolicies: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_policy.html#domain_name ElasticsearchDomainPolicy#domain_name}
    */
    readonly domainName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_policy.html aws_elasticsearch_domain_policy}
  */
  export class ElasticsearchDomainPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elasticsearch_domain_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_policy.html aws_elasticsearch_domain_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticsearchDomainPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: ElasticsearchDomainPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_elasticsearch_domain_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accessPolicies = config.accessPolicies;
      this._domainName = config.domainName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_policies - computed: false, optional: false, required: true
    private _accessPolicies?: string; 
    public get accessPolicies() {
      return this.getStringAttribute('access_policies');
    }
    public set accessPolicies(value: string) {
      this._accessPolicies = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accessPoliciesInput() {
      return this._accessPolicies
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
      return this._domainName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        access_policies: cdktf.stringToTerraform(this._accessPolicies),
        domain_name: cdktf.stringToTerraform(this._domainName),
      };
    }
  }
  export interface ElasticsearchDomainSamlOptionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#domain_name ElasticsearchDomainSamlOptions#domain_name}
    */
    readonly domainName: string;
    /**
    * saml_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#saml_options ElasticsearchDomainSamlOptions#saml_options}
    */
    readonly samlOptions?: ElasticsearchDomainSamlOptionsSamlOptions;
  }
  export interface ElasticsearchDomainSamlOptionsSamlOptionsIdp {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#entity_id ElasticsearchDomainSamlOptions#entity_id}
    */
    readonly entityId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#metadata_content ElasticsearchDomainSamlOptions#metadata_content}
    */
    readonly metadataContent: string;
  }

  function elasticsearchDomainSamlOptionsSamlOptionsIdpToTerraform(struct?: ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference | ElasticsearchDomainSamlOptionsSamlOptionsIdp): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      entity_id: cdktf.stringToTerraform(struct!.entityId),
      metadata_content: cdktf.stringToTerraform(struct!.metadataContent),
    }
  }

  export class ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // entity_id - computed: false, optional: false, required: true
    private _entityId?: string; 
    public get entityId() {
      return this.getStringAttribute('entity_id');
    }
    public set entityId(value: string) {
      this._entityId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get entityIdInput() {
      return this._entityId
    }

    // metadata_content - computed: false, optional: false, required: true
    private _metadataContent?: string; 
    public get metadataContent() {
      return this.getStringAttribute('metadata_content');
    }
    public set metadataContent(value: string) {
      this._metadataContent = value;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataContentInput() {
      return this._metadataContent
    }
  }
  export interface ElasticsearchDomainSamlOptionsSamlOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#enabled ElasticsearchDomainSamlOptions#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#master_backend_role ElasticsearchDomainSamlOptions#master_backend_role}
    */
    readonly masterBackendRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#master_user_name ElasticsearchDomainSamlOptions#master_user_name}
    */
    readonly masterUserName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#roles_key ElasticsearchDomainSamlOptions#roles_key}
    */
    readonly rolesKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#session_timeout_minutes ElasticsearchDomainSamlOptions#session_timeout_minutes}
    */
    readonly sessionTimeoutMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#subject_key ElasticsearchDomainSamlOptions#subject_key}
    */
    readonly subjectKey?: string;
    /**
    * idp block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#idp ElasticsearchDomainSamlOptions#idp}
    */
    readonly idp?: ElasticsearchDomainSamlOptionsSamlOptionsIdp;
  }

  function elasticsearchDomainSamlOptionsSamlOptionsToTerraform(struct?: ElasticsearchDomainSamlOptionsSamlOptionsOutputReference | ElasticsearchDomainSamlOptionsSamlOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      master_backend_role: cdktf.stringToTerraform(struct!.masterBackendRole),
      master_user_name: cdktf.stringToTerraform(struct!.masterUserName),
      roles_key: cdktf.stringToTerraform(struct!.rolesKey),
      session_timeout_minutes: cdktf.numberToTerraform(struct!.sessionTimeoutMinutes),
      subject_key: cdktf.stringToTerraform(struct!.subjectKey),
      idp: elasticsearchDomainSamlOptionsSamlOptionsIdpToTerraform(struct!.idp),
    }
  }

  export class ElasticsearchDomainSamlOptionsSamlOptionsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // master_backend_role - computed: false, optional: true, required: false
    private _masterBackendRole?: string | undefined; 
    public get masterBackendRole() {
      return this.getStringAttribute('master_backend_role');
    }
    public set masterBackendRole(value: string | undefined) {
      this._masterBackendRole = value;
    }
    public resetMasterBackendRole() {
      this._masterBackendRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterBackendRoleInput() {
      return this._masterBackendRole
    }

    // master_user_name - computed: false, optional: true, required: false
    private _masterUserName?: string | undefined; 
    public get masterUserName() {
      return this.getStringAttribute('master_user_name');
    }
    public set masterUserName(value: string | undefined) {
      this._masterUserName = value;
    }
    public resetMasterUserName() {
      this._masterUserName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterUserNameInput() {
      return this._masterUserName
    }

    // roles_key - computed: false, optional: true, required: false
    private _rolesKey?: string | undefined; 
    public get rolesKey() {
      return this.getStringAttribute('roles_key');
    }
    public set rolesKey(value: string | undefined) {
      this._rolesKey = value;
    }
    public resetRolesKey() {
      this._rolesKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rolesKeyInput() {
      return this._rolesKey
    }

    // session_timeout_minutes - computed: false, optional: true, required: false
    private _sessionTimeoutMinutes?: number | undefined; 
    public get sessionTimeoutMinutes() {
      return this.getNumberAttribute('session_timeout_minutes');
    }
    public set sessionTimeoutMinutes(value: number | undefined) {
      this._sessionTimeoutMinutes = value;
    }
    public resetSessionTimeoutMinutes() {
      this._sessionTimeoutMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionTimeoutMinutesInput() {
      return this._sessionTimeoutMinutes
    }

    // subject_key - computed: false, optional: true, required: false
    private _subjectKey?: string | undefined; 
    public get subjectKey() {
      return this.getStringAttribute('subject_key');
    }
    public set subjectKey(value: string | undefined) {
      this._subjectKey = value;
    }
    public resetSubjectKey() {
      this._subjectKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subjectKeyInput() {
      return this._subjectKey
    }

    // idp - computed: false, optional: true, required: false
    private _idp?: ElasticsearchDomainSamlOptionsSamlOptionsIdp | undefined; 
    private __idpOutput = new ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference(this as any, "idp", true);
    public get idp() {
      return this.__idpOutput;
    }
    public putIdp(value: ElasticsearchDomainSamlOptionsSamlOptionsIdp | undefined) {
      this._idp = value;
    }
    public resetIdp() {
      this._idp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idpInput() {
      return this._idp
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html aws_elasticsearch_domain_saml_options}
  */
  export class ElasticsearchDomainSamlOptions extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elasticsearch_domain_saml_options";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html aws_elasticsearch_domain_saml_options} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticsearchDomainSamlOptionsConfig
    */
    public constructor(scope: Construct, id: string, config: ElasticsearchDomainSamlOptionsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_elasticsearch_domain_saml_options',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._domainName = config.domainName;
      this._samlOptions = config.samlOptions;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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
      return this._domainName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // saml_options - computed: false, optional: true, required: false
    private _samlOptions?: ElasticsearchDomainSamlOptionsSamlOptions | undefined; 
    private __samlOptionsOutput = new ElasticsearchDomainSamlOptionsSamlOptionsOutputReference(this as any, "saml_options", true);
    public get samlOptions() {
      return this.__samlOptionsOutput;
    }
    public putSamlOptions(value: ElasticsearchDomainSamlOptionsSamlOptions | undefined) {
      this._samlOptions = value;
    }
    public resetSamlOptions() {
      this._samlOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samlOptionsInput() {
      return this._samlOptions
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        domain_name: cdktf.stringToTerraform(this._domainName),
        saml_options: elasticsearchDomainSamlOptionsSamlOptionsToTerraform(this._samlOptions),
      };
    }
  }
  export interface DataAwsElasticsearchDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain.html#domain_name DataAwsElasticsearchDomain#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain.html#tags DataAwsElasticsearchDomain#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsElasticsearchDomainAdvancedSecurityOptions extends cdktf.ComplexComputedList {

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }

    // internal_user_database_enabled - computed: true, optional: false, required: false
    public get internalUserDatabaseEnabled() {
      return this.getBooleanAttribute('internal_user_database_enabled') as any;
    }
  }
  export class DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig extends cdktf.ComplexComputedList {

    // availability_zone_count - computed: true, optional: false, required: false
    public get availabilityZoneCount() {
      return this.getNumberAttribute('availability_zone_count');
    }
  }
  export class DataAwsElasticsearchDomainClusterConfig extends cdktf.ComplexComputedList {

    // dedicated_master_count - computed: true, optional: false, required: false
    public get dedicatedMasterCount() {
      return this.getNumberAttribute('dedicated_master_count');
    }

    // dedicated_master_enabled - computed: true, optional: false, required: false
    public get dedicatedMasterEnabled() {
      return this.getBooleanAttribute('dedicated_master_enabled') as any;
    }

    // dedicated_master_type - computed: true, optional: false, required: false
    public get dedicatedMasterType() {
      return this.getStringAttribute('dedicated_master_type');
    }

    // instance_count - computed: true, optional: false, required: false
    public get instanceCount() {
      return this.getNumberAttribute('instance_count');
    }

    // instance_type - computed: true, optional: false, required: false
    public get instanceType() {
      return this.getStringAttribute('instance_type');
    }

    // warm_count - computed: true, optional: false, required: false
    public get warmCount() {
      return this.getNumberAttribute('warm_count');
    }

    // warm_enabled - computed: true, optional: false, required: false
    public get warmEnabled() {
      return this.getBooleanAttribute('warm_enabled') as any;
    }

    // warm_type - computed: true, optional: false, required: false
    public get warmType() {
      return this.getStringAttribute('warm_type');
    }

    // zone_awareness_config - computed: true, optional: false, required: false
    public get zoneAwarenessConfig() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('zone_awareness_config') as any;
    }

    // zone_awareness_enabled - computed: true, optional: false, required: false
    public get zoneAwarenessEnabled() {
      return this.getBooleanAttribute('zone_awareness_enabled') as any;
    }
  }
  export class DataAwsElasticsearchDomainCognitoOptions extends cdktf.ComplexComputedList {

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }

    // identity_pool_id - computed: true, optional: false, required: false
    public get identityPoolId() {
      return this.getStringAttribute('identity_pool_id');
    }

    // role_arn - computed: true, optional: false, required: false
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }

    // user_pool_id - computed: true, optional: false, required: false
    public get userPoolId() {
      return this.getStringAttribute('user_pool_id');
    }
  }
  export class DataAwsElasticsearchDomainEbsOptions extends cdktf.ComplexComputedList {

    // ebs_enabled - computed: true, optional: false, required: false
    public get ebsEnabled() {
      return this.getBooleanAttribute('ebs_enabled') as any;
    }

    // iops - computed: true, optional: false, required: false
    public get iops() {
      return this.getNumberAttribute('iops');
    }

    // volume_size - computed: true, optional: false, required: false
    public get volumeSize() {
      return this.getNumberAttribute('volume_size');
    }

    // volume_type - computed: true, optional: false, required: false
    public get volumeType() {
      return this.getStringAttribute('volume_type');
    }
  }
  export class DataAwsElasticsearchDomainEncryptionAtRest extends cdktf.ComplexComputedList {

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
  }
  export class DataAwsElasticsearchDomainLogPublishingOptions extends cdktf.ComplexComputedList {

    // cloudwatch_log_group_arn - computed: true, optional: false, required: false
    public get cloudwatchLogGroupArn() {
      return this.getStringAttribute('cloudwatch_log_group_arn');
    }

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }

    // log_type - computed: true, optional: false, required: false
    public get logType() {
      return this.getStringAttribute('log_type');
    }
  }
  export class DataAwsElasticsearchDomainNodeToNodeEncryption extends cdktf.ComplexComputedList {

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
  }
  export class DataAwsElasticsearchDomainSnapshotOptions extends cdktf.ComplexComputedList {

    // automated_snapshot_start_hour - computed: true, optional: false, required: false
    public get automatedSnapshotStartHour() {
      return this.getNumberAttribute('automated_snapshot_start_hour');
    }
  }
  export class DataAwsElasticsearchDomainVpcOptions extends cdktf.ComplexComputedList {

    // availability_zones - computed: true, optional: false, required: false
    public get availabilityZones() {
      return this.getListAttribute('availability_zones');
    }

    // security_group_ids - computed: true, optional: false, required: false
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }

    // subnet_ids - computed: true, optional: false, required: false
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain.html aws_elasticsearch_domain}
  */
  export class DataAwsElasticsearchDomain extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elasticsearch_domain";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain.html aws_elasticsearch_domain} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticsearchDomainConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsElasticsearchDomainConfig) {
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
      this._domainName = config.domainName;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_policies - computed: true, optional: false, required: false
    public get accessPolicies() {
      return this.getStringAttribute('access_policies');
    }

    // advanced_options - computed: true, optional: false, required: false
    public advancedOptions(key: string): string {
      return new cdktf.StringMap(this, 'advanced_options').lookup(key);
    }

    // advanced_security_options - computed: true, optional: false, required: false
    public advancedSecurityOptions(index: string) {
      return new DataAwsElasticsearchDomainAdvancedSecurityOptions(this, 'advanced_security_options', index);
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cluster_config - computed: true, optional: false, required: false
    public clusterConfig(index: string) {
      return new DataAwsElasticsearchDomainClusterConfig(this, 'cluster_config', index);
    }

    // cognito_options - computed: true, optional: false, required: false
    public cognitoOptions(index: string) {
      return new DataAwsElasticsearchDomainCognitoOptions(this, 'cognito_options', index);
    }

    // created - computed: true, optional: false, required: false
    public get created() {
      return this.getBooleanAttribute('created') as any;
    }

    // deleted - computed: true, optional: false, required: false
    public get deleted() {
      return this.getBooleanAttribute('deleted') as any;
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
      return this._domainName
    }

    // ebs_options - computed: true, optional: false, required: false
    public ebsOptions(index: string) {
      return new DataAwsElasticsearchDomainEbsOptions(this, 'ebs_options', index);
    }

    // elasticsearch_version - computed: true, optional: false, required: false
    public get elasticsearchVersion() {
      return this.getStringAttribute('elasticsearch_version');
    }

    // encryption_at_rest - computed: true, optional: false, required: false
    public encryptionAtRest(index: string) {
      return new DataAwsElasticsearchDomainEncryptionAtRest(this, 'encryption_at_rest', index);
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

    // log_publishing_options - computed: true, optional: false, required: false
    public logPublishingOptions(index: string) {
      return new DataAwsElasticsearchDomainLogPublishingOptions(this, 'log_publishing_options', index);
    }

    // node_to_node_encryption - computed: true, optional: false, required: false
    public nodeToNodeEncryption(index: string) {
      return new DataAwsElasticsearchDomainNodeToNodeEncryption(this, 'node_to_node_encryption', index);
    }

    // processing - computed: true, optional: false, required: false
    public get processing() {
      return this.getBooleanAttribute('processing') as any;
    }

    // snapshot_options - computed: true, optional: false, required: false
    public snapshotOptions(index: string) {
      return new DataAwsElasticsearchDomainSnapshotOptions(this, 'snapshot_options', index);
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // vpc_options - computed: true, optional: false, required: false
    public vpcOptions(index: string) {
      return new DataAwsElasticsearchDomainVpcOptions(this, 'vpc_options', index);
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        domain_name: cdktf.stringToTerraform(this._domainName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
}
