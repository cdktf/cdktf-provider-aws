// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* App Runner
*/
export namespace AppRunner {
  export interface ApprunnerAutoScalingConfigurationVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version.html#auto_scaling_configuration_name ApprunnerAutoScalingConfigurationVersion#auto_scaling_configuration_name}
    */
    readonly autoScalingConfigurationName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version.html#max_concurrency ApprunnerAutoScalingConfigurationVersion#max_concurrency}
    */
    readonly maxConcurrency?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version.html#max_size ApprunnerAutoScalingConfigurationVersion#max_size}
    */
    readonly maxSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version.html#min_size ApprunnerAutoScalingConfigurationVersion#min_size}
    */
    readonly minSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version.html#tags ApprunnerAutoScalingConfigurationVersion#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version.html#tags_all ApprunnerAutoScalingConfigurationVersion#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version.html aws_apprunner_auto_scaling_configuration_version}
  */
  export class ApprunnerAutoScalingConfigurationVersion extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_apprunner_auto_scaling_configuration_version";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apprunner_auto_scaling_configuration_version.html aws_apprunner_auto_scaling_configuration_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApprunnerAutoScalingConfigurationVersionConfig
    */
    public constructor(scope: Construct, id: string, config: ApprunnerAutoScalingConfigurationVersionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_apprunner_auto_scaling_configuration_version',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._autoScalingConfigurationName = config.autoScalingConfigurationName;
      this._maxConcurrency = config.maxConcurrency;
      this._maxSize = config.maxSize;
      this._minSize = config.minSize;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auto_scaling_configuration_name - computed: false, optional: false, required: true
    private _autoScalingConfigurationName?: string; 
    public get autoScalingConfigurationName() {
      return this.getStringAttribute('auto_scaling_configuration_name');
    }
    public set autoScalingConfigurationName(value: string) {
      this._autoScalingConfigurationName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingConfigurationNameInput() {
      return this._autoScalingConfigurationName
    }

    // auto_scaling_configuration_revision - computed: true, optional: false, required: false
    public get autoScalingConfigurationRevision() {
      return this.getNumberAttribute('auto_scaling_configuration_revision');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // latest - computed: true, optional: false, required: false
    public get latest() {
      return this.getBooleanAttribute('latest') as any;
    }

    // max_concurrency - computed: false, optional: true, required: false
    private _maxConcurrency?: number | undefined; 
    public get maxConcurrency() {
      return this.getNumberAttribute('max_concurrency');
    }
    public set maxConcurrency(value: number | undefined) {
      this._maxConcurrency = value;
    }
    public resetMaxConcurrency() {
      this._maxConcurrency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrencyInput() {
      return this._maxConcurrency
    }

    // max_size - computed: false, optional: true, required: false
    private _maxSize?: number | undefined; 
    public get maxSize() {
      return this.getNumberAttribute('max_size');
    }
    public set maxSize(value: number | undefined) {
      this._maxSize = value;
    }
    public resetMaxSize() {
      this._maxSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxSizeInput() {
      return this._maxSize
    }

    // min_size - computed: false, optional: true, required: false
    private _minSize?: number | undefined; 
    public get minSize() {
      return this.getNumberAttribute('min_size');
    }
    public set minSize(value: number | undefined) {
      this._minSize = value;
    }
    public resetMinSize() {
      this._minSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minSizeInput() {
      return this._minSize
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        auto_scaling_configuration_name: cdktf.stringToTerraform(this._autoScalingConfigurationName),
        max_concurrency: cdktf.numberToTerraform(this._maxConcurrency),
        max_size: cdktf.numberToTerraform(this._maxSize),
        min_size: cdktf.numberToTerraform(this._minSize),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface ApprunnerConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_connection.html#connection_name ApprunnerConnection#connection_name}
    */
    readonly connectionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_connection.html#provider_type ApprunnerConnection#provider_type}
    */
    readonly providerType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_connection.html#tags ApprunnerConnection#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_connection.html#tags_all ApprunnerConnection#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_connection.html aws_apprunner_connection}
  */
  export class ApprunnerConnection extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_apprunner_connection";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apprunner_connection.html aws_apprunner_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApprunnerConnectionConfig
    */
    public constructor(scope: Construct, id: string, config: ApprunnerConnectionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_apprunner_connection',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._connectionName = config.connectionName;
      this._providerType = config.providerType;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // connection_name - computed: false, optional: false, required: true
    private _connectionName?: string; 
    public get connectionName() {
      return this.getStringAttribute('connection_name');
    }
    public set connectionName(value: string) {
      this._connectionName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionNameInput() {
      return this._connectionName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // provider_type - computed: false, optional: false, required: true
    private _providerType?: string; 
    public get providerType() {
      return this.getStringAttribute('provider_type');
    }
    public set providerType(value: string) {
      this._providerType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get providerTypeInput() {
      return this._providerType
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        connection_name: cdktf.stringToTerraform(this._connectionName),
        provider_type: cdktf.stringToTerraform(this._providerType),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface ApprunnerCustomDomainAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association.html#domain_name ApprunnerCustomDomainAssociation#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association.html#enable_www_subdomain ApprunnerCustomDomainAssociation#enable_www_subdomain}
    */
    readonly enableWwwSubdomain?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association.html#service_arn ApprunnerCustomDomainAssociation#service_arn}
    */
    readonly serviceArn: string;
  }
  export class ApprunnerCustomDomainAssociationCertificateValidationRecords extends cdktf.ComplexComputedList {

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }

    // value - computed: true, optional: false, required: false
    public get value() {
      return this.getStringAttribute('value');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association.html aws_apprunner_custom_domain_association}
  */
  export class ApprunnerCustomDomainAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_apprunner_custom_domain_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association.html aws_apprunner_custom_domain_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApprunnerCustomDomainAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: ApprunnerCustomDomainAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_apprunner_custom_domain_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._domainName = config.domainName;
      this._enableWwwSubdomain = config.enableWwwSubdomain;
      this._serviceArn = config.serviceArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // certificate_validation_records - computed: true, optional: false, required: false
    public certificateValidationRecords(index: string) {
      return new ApprunnerCustomDomainAssociationCertificateValidationRecords(this, 'certificate_validation_records', index);
    }

    // dns_target - computed: true, optional: false, required: false
    public get dnsTarget() {
      return this.getStringAttribute('dns_target');
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

    // enable_www_subdomain - computed: false, optional: true, required: false
    private _enableWwwSubdomain?: boolean | cdktf.IResolvable | undefined; 
    public get enableWwwSubdomain() {
      return this.getBooleanAttribute('enable_www_subdomain') as any;
    }
    public set enableWwwSubdomain(value: boolean | cdktf.IResolvable | undefined) {
      this._enableWwwSubdomain = value;
    }
    public resetEnableWwwSubdomain() {
      this._enableWwwSubdomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableWwwSubdomainInput() {
      return this._enableWwwSubdomain
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // service_arn - computed: false, optional: false, required: true
    private _serviceArn?: string; 
    public get serviceArn() {
      return this.getStringAttribute('service_arn');
    }
    public set serviceArn(value: string) {
      this._serviceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceArnInput() {
      return this._serviceArn
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        domain_name: cdktf.stringToTerraform(this._domainName),
        enable_www_subdomain: cdktf.booleanToTerraform(this._enableWwwSubdomain),
        service_arn: cdktf.stringToTerraform(this._serviceArn),
      };
    }
  }
  export interface ApprunnerServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#auto_scaling_configuration_arn ApprunnerService#auto_scaling_configuration_arn}
    */
    readonly autoScalingConfigurationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#service_name ApprunnerService#service_name}
    */
    readonly serviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#tags ApprunnerService#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#tags_all ApprunnerService#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * encryption_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#encryption_configuration ApprunnerService#encryption_configuration}
    */
    readonly encryptionConfiguration?: ApprunnerServiceEncryptionConfiguration;
    /**
    * health_check_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#health_check_configuration ApprunnerService#health_check_configuration}
    */
    readonly healthCheckConfiguration?: ApprunnerServiceHealthCheckConfiguration;
    /**
    * instance_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#instance_configuration ApprunnerService#instance_configuration}
    */
    readonly instanceConfiguration?: ApprunnerServiceInstanceConfiguration;
    /**
    * source_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#source_configuration ApprunnerService#source_configuration}
    */
    readonly sourceConfiguration: ApprunnerServiceSourceConfiguration;
  }
  export interface ApprunnerServiceEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#kms_key ApprunnerService#kms_key}
    */
    readonly kmsKey: string;
  }

  function apprunnerServiceEncryptionConfigurationToTerraform(struct?: ApprunnerServiceEncryptionConfigurationOutputReference | ApprunnerServiceEncryptionConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      kms_key: cdktf.stringToTerraform(struct!.kmsKey),
    }
  }

  export class ApprunnerServiceEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._kmsKey
    }
  }
  export interface ApprunnerServiceHealthCheckConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#healthy_threshold ApprunnerService#healthy_threshold}
    */
    readonly healthyThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#interval ApprunnerService#interval}
    */
    readonly interval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#path ApprunnerService#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#protocol ApprunnerService#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#timeout ApprunnerService#timeout}
    */
    readonly timeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#unhealthy_threshold ApprunnerService#unhealthy_threshold}
    */
    readonly unhealthyThreshold?: number;
  }

  function apprunnerServiceHealthCheckConfigurationToTerraform(struct?: ApprunnerServiceHealthCheckConfigurationOutputReference | ApprunnerServiceHealthCheckConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // healthy_threshold - computed: false, optional: true, required: false
    private _healthyThreshold?: number | undefined; 
    public get healthyThreshold() {
      return this.getNumberAttribute('healthy_threshold');
    }
    public set healthyThreshold(value: number | undefined) {
      this._healthyThreshold = value;
    }
    public resetHealthyThreshold() {
      this._healthyThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthyThresholdInput() {
      return this._healthyThreshold
    }

    // interval - computed: false, optional: true, required: false
    private _interval?: number | undefined; 
    public get interval() {
      return this.getNumberAttribute('interval');
    }
    public set interval(value: number | undefined) {
      this._interval = value;
    }
    public resetInterval() {
      this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
      return this._interval
    }

    // path - computed: false, optional: true, required: false
    private _path?: string | undefined; 
    public get path() {
      return this.getStringAttribute('path');
    }
    public set path(value: string | undefined) {
      this._path = value;
    }
    public resetPath() {
      this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
      return this._path
    }

    // protocol - computed: false, optional: true, required: false
    private _protocol?: string | undefined; 
    public get protocol() {
      return this.getStringAttribute('protocol');
    }
    public set protocol(value: string | undefined) {
      this._protocol = value;
    }
    public resetProtocol() {
      this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
      return this._protocol
    }

    // timeout - computed: false, optional: true, required: false
    private _timeout?: number | undefined; 
    public get timeout() {
      return this.getNumberAttribute('timeout');
    }
    public set timeout(value: number | undefined) {
      this._timeout = value;
    }
    public resetTimeout() {
      this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInput() {
      return this._timeout
    }

    // unhealthy_threshold - computed: false, optional: true, required: false
    private _unhealthyThreshold?: number | undefined; 
    public get unhealthyThreshold() {
      return this.getNumberAttribute('unhealthy_threshold');
    }
    public set unhealthyThreshold(value: number | undefined) {
      this._unhealthyThreshold = value;
    }
    public resetUnhealthyThreshold() {
      this._unhealthyThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unhealthyThresholdInput() {
      return this._unhealthyThreshold
    }
  }
  export interface ApprunnerServiceInstanceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#cpu ApprunnerService#cpu}
    */
    readonly cpu?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#instance_role_arn ApprunnerService#instance_role_arn}
    */
    readonly instanceRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#memory ApprunnerService#memory}
    */
    readonly memory?: string;
  }

  function apprunnerServiceInstanceConfigurationToTerraform(struct?: ApprunnerServiceInstanceConfigurationOutputReference | ApprunnerServiceInstanceConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cpu - computed: false, optional: true, required: false
    private _cpu?: string | undefined; 
    public get cpu() {
      return this.getStringAttribute('cpu');
    }
    public set cpu(value: string | undefined) {
      this._cpu = value;
    }
    public resetCpu() {
      this._cpu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuInput() {
      return this._cpu
    }

    // instance_role_arn - computed: false, optional: false, required: true
    private _instanceRoleArn?: string; 
    public get instanceRoleArn() {
      return this.getStringAttribute('instance_role_arn');
    }
    public set instanceRoleArn(value: string) {
      this._instanceRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceRoleArnInput() {
      return this._instanceRoleArn
    }

    // memory - computed: false, optional: true, required: false
    private _memory?: string | undefined; 
    public get memory() {
      return this.getStringAttribute('memory');
    }
    public set memory(value: string | undefined) {
      this._memory = value;
    }
    public resetMemory() {
      this._memory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryInput() {
      return this._memory
    }
  }
  export interface ApprunnerServiceSourceConfigurationAuthenticationConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#access_role_arn ApprunnerService#access_role_arn}
    */
    readonly accessRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#connection_arn ApprunnerService#connection_arn}
    */
    readonly connectionArn?: string;
  }

  function apprunnerServiceSourceConfigurationAuthenticationConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference | ApprunnerServiceSourceConfigurationAuthenticationConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      access_role_arn: cdktf.stringToTerraform(struct!.accessRoleArn),
      connection_arn: cdktf.stringToTerraform(struct!.connectionArn),
    }
  }

  export class ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // access_role_arn - computed: false, optional: true, required: false
    private _accessRoleArn?: string | undefined; 
    public get accessRoleArn() {
      return this.getStringAttribute('access_role_arn');
    }
    public set accessRoleArn(value: string | undefined) {
      this._accessRoleArn = value;
    }
    public resetAccessRoleArn() {
      this._accessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessRoleArnInput() {
      return this._accessRoleArn
    }

    // connection_arn - computed: false, optional: true, required: false
    private _connectionArn?: string | undefined; 
    public get connectionArn() {
      return this.getStringAttribute('connection_arn');
    }
    public set connectionArn(value: string | undefined) {
      this._connectionArn = value;
    }
    public resetConnectionArn() {
      this._connectionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionArnInput() {
      return this._connectionArn
    }
  }
  export interface ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#build_command ApprunnerService#build_command}
    */
    readonly buildCommand?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#port ApprunnerService#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#runtime ApprunnerService#runtime}
    */
    readonly runtime: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#runtime_environment_variables ApprunnerService#runtime_environment_variables}
    */
    readonly runtimeEnvironmentVariables?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#start_command ApprunnerService#start_command}
    */
    readonly startCommand?: string;
  }

  function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference | ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      build_command: cdktf.stringToTerraform(struct!.buildCommand),
      port: cdktf.stringToTerraform(struct!.port),
      runtime: cdktf.stringToTerraform(struct!.runtime),
      runtime_environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.runtimeEnvironmentVariables),
      start_command: cdktf.stringToTerraform(struct!.startCommand),
    }
  }

  export class ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // build_command - computed: false, optional: true, required: false
    private _buildCommand?: string | undefined; 
    public get buildCommand() {
      return this.getStringAttribute('build_command');
    }
    public set buildCommand(value: string | undefined) {
      this._buildCommand = value;
    }
    public resetBuildCommand() {
      this._buildCommand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buildCommandInput() {
      return this._buildCommand
    }

    // port - computed: false, optional: true, required: false
    private _port?: string | undefined; 
    public get port() {
      return this.getStringAttribute('port');
    }
    public set port(value: string | undefined) {
      this._port = value;
    }
    public resetPort() {
      this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
      return this._port
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
      return this._runtime
    }

    // runtime_environment_variables - computed: false, optional: true, required: false
    private _runtimeEnvironmentVariables?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get runtimeEnvironmentVariables() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('runtime_environment_variables') as any;
    }
    public set runtimeEnvironmentVariables(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._runtimeEnvironmentVariables = value;
    }
    public resetRuntimeEnvironmentVariables() {
      this._runtimeEnvironmentVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeEnvironmentVariablesInput() {
      return this._runtimeEnvironmentVariables
    }

    // start_command - computed: false, optional: true, required: false
    private _startCommand?: string | undefined; 
    public get startCommand() {
      return this.getStringAttribute('start_command');
    }
    public set startCommand(value: string | undefined) {
      this._startCommand = value;
    }
    public resetStartCommand() {
      this._startCommand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startCommandInput() {
      return this._startCommand
    }
  }
  export interface ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#configuration_source ApprunnerService#configuration_source}
    */
    readonly configurationSource: string;
    /**
    * code_configuration_values block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#code_configuration_values ApprunnerService#code_configuration_values}
    */
    readonly codeConfigurationValues?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues;
  }

  function apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference | ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      configuration_source: cdktf.stringToTerraform(struct!.configurationSource),
      code_configuration_values: apprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesToTerraform(struct!.codeConfigurationValues),
    }
  }

  export class ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._configurationSource
    }

    // code_configuration_values - computed: false, optional: true, required: false
    private _codeConfigurationValues?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues | undefined; 
    private __codeConfigurationValuesOutput = new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesOutputReference(this as any, "code_configuration_values", true);
    public get codeConfigurationValues() {
      return this.__codeConfigurationValuesOutput;
    }
    public putCodeConfigurationValues(value: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValues | undefined) {
      this._codeConfigurationValues = value;
    }
    public resetCodeConfigurationValues() {
      this._codeConfigurationValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeConfigurationValuesInput() {
      return this._codeConfigurationValues
    }
  }
  export interface ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#type ApprunnerService#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#value ApprunnerService#value}
    */
    readonly value: string;
  }

  function apprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference | ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      type: cdktf.stringToTerraform(struct!.type),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export class ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._type
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
      return this._value
    }
  }
  export interface ApprunnerServiceSourceConfigurationCodeRepository {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#repository_url ApprunnerService#repository_url}
    */
    readonly repositoryUrl: string;
    /**
    * code_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#code_configuration ApprunnerService#code_configuration}
    */
    readonly codeConfiguration?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration;
    /**
    * source_code_version block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#source_code_version ApprunnerService#source_code_version}
    */
    readonly sourceCodeVersion: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion;
  }

  function apprunnerServiceSourceConfigurationCodeRepositoryToTerraform(struct?: ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference | ApprunnerServiceSourceConfigurationCodeRepository): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._repositoryUrl
    }

    // code_configuration - computed: false, optional: true, required: false
    private _codeConfiguration?: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration | undefined; 
    private __codeConfigurationOutput = new ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfigurationOutputReference(this as any, "code_configuration", true);
    public get codeConfiguration() {
      return this.__codeConfigurationOutput;
    }
    public putCodeConfiguration(value: ApprunnerServiceSourceConfigurationCodeRepositoryCodeConfiguration | undefined) {
      this._codeConfiguration = value;
    }
    public resetCodeConfiguration() {
      this._codeConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeConfigurationInput() {
      return this._codeConfiguration
    }

    // source_code_version - computed: false, optional: false, required: true
    private _sourceCodeVersion?: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion; 
    private __sourceCodeVersionOutput = new ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersionOutputReference(this as any, "source_code_version", true);
    public get sourceCodeVersion() {
      return this.__sourceCodeVersionOutput;
    }
    public putSourceCodeVersion(value: ApprunnerServiceSourceConfigurationCodeRepositorySourceCodeVersion) {
      this._sourceCodeVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceCodeVersionInput() {
      return this._sourceCodeVersion
    }
  }
  export interface ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#port ApprunnerService#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#runtime_environment_variables ApprunnerService#runtime_environment_variables}
    */
    readonly runtimeEnvironmentVariables?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#start_command ApprunnerService#start_command}
    */
    readonly startCommand?: string;
  }

  function apprunnerServiceSourceConfigurationImageRepositoryImageConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference | ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      port: cdktf.stringToTerraform(struct!.port),
      runtime_environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.runtimeEnvironmentVariables),
      start_command: cdktf.stringToTerraform(struct!.startCommand),
    }
  }

  export class ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // port - computed: false, optional: true, required: false
    private _port?: string | undefined; 
    public get port() {
      return this.getStringAttribute('port');
    }
    public set port(value: string | undefined) {
      this._port = value;
    }
    public resetPort() {
      this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
      return this._port
    }

    // runtime_environment_variables - computed: false, optional: true, required: false
    private _runtimeEnvironmentVariables?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get runtimeEnvironmentVariables() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('runtime_environment_variables') as any;
    }
    public set runtimeEnvironmentVariables(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._runtimeEnvironmentVariables = value;
    }
    public resetRuntimeEnvironmentVariables() {
      this._runtimeEnvironmentVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeEnvironmentVariablesInput() {
      return this._runtimeEnvironmentVariables
    }

    // start_command - computed: false, optional: true, required: false
    private _startCommand?: string | undefined; 
    public get startCommand() {
      return this.getStringAttribute('start_command');
    }
    public set startCommand(value: string | undefined) {
      this._startCommand = value;
    }
    public resetStartCommand() {
      this._startCommand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startCommandInput() {
      return this._startCommand
    }
  }
  export interface ApprunnerServiceSourceConfigurationImageRepository {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#image_identifier ApprunnerService#image_identifier}
    */
    readonly imageIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#image_repository_type ApprunnerService#image_repository_type}
    */
    readonly imageRepositoryType: string;
    /**
    * image_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#image_configuration ApprunnerService#image_configuration}
    */
    readonly imageConfiguration?: ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration;
  }

  function apprunnerServiceSourceConfigurationImageRepositoryToTerraform(struct?: ApprunnerServiceSourceConfigurationImageRepositoryOutputReference | ApprunnerServiceSourceConfigurationImageRepository): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._imageIdentifier
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
      return this._imageRepositoryType
    }

    // image_configuration - computed: false, optional: true, required: false
    private _imageConfiguration?: ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration | undefined; 
    private __imageConfigurationOutput = new ApprunnerServiceSourceConfigurationImageRepositoryImageConfigurationOutputReference(this as any, "image_configuration", true);
    public get imageConfiguration() {
      return this.__imageConfigurationOutput;
    }
    public putImageConfiguration(value: ApprunnerServiceSourceConfigurationImageRepositoryImageConfiguration | undefined) {
      this._imageConfiguration = value;
    }
    public resetImageConfiguration() {
      this._imageConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageConfigurationInput() {
      return this._imageConfiguration
    }
  }
  export interface ApprunnerServiceSourceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#auto_deployments_enabled ApprunnerService#auto_deployments_enabled}
    */
    readonly autoDeploymentsEnabled?: boolean | cdktf.IResolvable;
    /**
    * authentication_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#authentication_configuration ApprunnerService#authentication_configuration}
    */
    readonly authenticationConfiguration?: ApprunnerServiceSourceConfigurationAuthenticationConfiguration;
    /**
    * code_repository block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#code_repository ApprunnerService#code_repository}
    */
    readonly codeRepository?: ApprunnerServiceSourceConfigurationCodeRepository;
    /**
    * image_repository block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html#image_repository ApprunnerService#image_repository}
    */
    readonly imageRepository?: ApprunnerServiceSourceConfigurationImageRepository;
  }

  function apprunnerServiceSourceConfigurationToTerraform(struct?: ApprunnerServiceSourceConfigurationOutputReference | ApprunnerServiceSourceConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // auto_deployments_enabled - computed: false, optional: true, required: false
    private _autoDeploymentsEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get autoDeploymentsEnabled() {
      return this.getBooleanAttribute('auto_deployments_enabled') as any;
    }
    public set autoDeploymentsEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._autoDeploymentsEnabled = value;
    }
    public resetAutoDeploymentsEnabled() {
      this._autoDeploymentsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoDeploymentsEnabledInput() {
      return this._autoDeploymentsEnabled
    }

    // authentication_configuration - computed: false, optional: true, required: false
    private _authenticationConfiguration?: ApprunnerServiceSourceConfigurationAuthenticationConfiguration | undefined; 
    private __authenticationConfigurationOutput = new ApprunnerServiceSourceConfigurationAuthenticationConfigurationOutputReference(this as any, "authentication_configuration", true);
    public get authenticationConfiguration() {
      return this.__authenticationConfigurationOutput;
    }
    public putAuthenticationConfiguration(value: ApprunnerServiceSourceConfigurationAuthenticationConfiguration | undefined) {
      this._authenticationConfiguration = value;
    }
    public resetAuthenticationConfiguration() {
      this._authenticationConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationConfigurationInput() {
      return this._authenticationConfiguration
    }

    // code_repository - computed: false, optional: true, required: false
    private _codeRepository?: ApprunnerServiceSourceConfigurationCodeRepository | undefined; 
    private __codeRepositoryOutput = new ApprunnerServiceSourceConfigurationCodeRepositoryOutputReference(this as any, "code_repository", true);
    public get codeRepository() {
      return this.__codeRepositoryOutput;
    }
    public putCodeRepository(value: ApprunnerServiceSourceConfigurationCodeRepository | undefined) {
      this._codeRepository = value;
    }
    public resetCodeRepository() {
      this._codeRepository = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeRepositoryInput() {
      return this._codeRepository
    }

    // image_repository - computed: false, optional: true, required: false
    private _imageRepository?: ApprunnerServiceSourceConfigurationImageRepository | undefined; 
    private __imageRepositoryOutput = new ApprunnerServiceSourceConfigurationImageRepositoryOutputReference(this as any, "image_repository", true);
    public get imageRepository() {
      return this.__imageRepositoryOutput;
    }
    public putImageRepository(value: ApprunnerServiceSourceConfigurationImageRepository | undefined) {
      this._imageRepository = value;
    }
    public resetImageRepository() {
      this._imageRepository = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageRepositoryInput() {
      return this._imageRepository
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html aws_apprunner_service}
  */
  export class ApprunnerService extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_apprunner_service";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apprunner_service.html aws_apprunner_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApprunnerServiceConfig
    */
    public constructor(scope: Construct, id: string, config: ApprunnerServiceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_apprunner_service',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._autoScalingConfigurationArn = config.autoScalingConfigurationArn;
      this._serviceName = config.serviceName;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._encryptionConfiguration = config.encryptionConfiguration;
      this._healthCheckConfiguration = config.healthCheckConfiguration;
      this._instanceConfiguration = config.instanceConfiguration;
      this._sourceConfiguration = config.sourceConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auto_scaling_configuration_arn - computed: true, optional: true, required: false
    private _autoScalingConfigurationArn?: string | undefined; 
    public get autoScalingConfigurationArn() {
      return this.getStringAttribute('auto_scaling_configuration_arn');
    }
    public set autoScalingConfigurationArn(value: string | undefined) {
      this._autoScalingConfigurationArn = value;
    }
    public resetAutoScalingConfigurationArn() {
      this._autoScalingConfigurationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingConfigurationArnInput() {
      return this._autoScalingConfigurationArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._serviceName
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

    // encryption_configuration - computed: false, optional: true, required: false
    private _encryptionConfiguration?: ApprunnerServiceEncryptionConfiguration | undefined; 
    private __encryptionConfigurationOutput = new ApprunnerServiceEncryptionConfigurationOutputReference(this as any, "encryption_configuration", true);
    public get encryptionConfiguration() {
      return this.__encryptionConfigurationOutput;
    }
    public putEncryptionConfiguration(value: ApprunnerServiceEncryptionConfiguration | undefined) {
      this._encryptionConfiguration = value;
    }
    public resetEncryptionConfiguration() {
      this._encryptionConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigurationInput() {
      return this._encryptionConfiguration
    }

    // health_check_configuration - computed: false, optional: true, required: false
    private _healthCheckConfiguration?: ApprunnerServiceHealthCheckConfiguration | undefined; 
    private __healthCheckConfigurationOutput = new ApprunnerServiceHealthCheckConfigurationOutputReference(this as any, "health_check_configuration", true);
    public get healthCheckConfiguration() {
      return this.__healthCheckConfigurationOutput;
    }
    public putHealthCheckConfiguration(value: ApprunnerServiceHealthCheckConfiguration | undefined) {
      this._healthCheckConfiguration = value;
    }
    public resetHealthCheckConfiguration() {
      this._healthCheckConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckConfigurationInput() {
      return this._healthCheckConfiguration
    }

    // instance_configuration - computed: false, optional: true, required: false
    private _instanceConfiguration?: ApprunnerServiceInstanceConfiguration | undefined; 
    private __instanceConfigurationOutput = new ApprunnerServiceInstanceConfigurationOutputReference(this as any, "instance_configuration", true);
    public get instanceConfiguration() {
      return this.__instanceConfigurationOutput;
    }
    public putInstanceConfiguration(value: ApprunnerServiceInstanceConfiguration | undefined) {
      this._instanceConfiguration = value;
    }
    public resetInstanceConfiguration() {
      this._instanceConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceConfigurationInput() {
      return this._instanceConfiguration
    }

    // source_configuration - computed: false, optional: false, required: true
    private _sourceConfiguration?: ApprunnerServiceSourceConfiguration; 
    private __sourceConfigurationOutput = new ApprunnerServiceSourceConfigurationOutputReference(this as any, "source_configuration", true);
    public get sourceConfiguration() {
      return this.__sourceConfigurationOutput;
    }
    public putSourceConfiguration(value: ApprunnerServiceSourceConfiguration) {
      this._sourceConfiguration = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceConfigurationInput() {
      return this._sourceConfiguration
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        auto_scaling_configuration_arn: cdktf.stringToTerraform(this._autoScalingConfigurationArn),
        service_name: cdktf.stringToTerraform(this._serviceName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        encryption_configuration: apprunnerServiceEncryptionConfigurationToTerraform(this._encryptionConfiguration),
        health_check_configuration: apprunnerServiceHealthCheckConfigurationToTerraform(this._healthCheckConfiguration),
        instance_configuration: apprunnerServiceInstanceConfigurationToTerraform(this._instanceConfiguration),
        source_configuration: apprunnerServiceSourceConfigurationToTerraform(this._sourceConfiguration),
      };
    }
  }
}
