// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* Amazon Athena
*/
export interface AthenaWorkgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#description AthenaWorkgroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#force_destroy AthenaWorkgroup#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#name AthenaWorkgroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#state AthenaWorkgroup#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#tags AthenaWorkgroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#tags_all AthenaWorkgroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#configuration AthenaWorkgroup#configuration}
  */
  readonly configuration?: AthenaWorkgroupConfiguration;
}
export interface AthenaWorkgroupConfigurationEngineVersion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#selected_engine_version AthenaWorkgroup#selected_engine_version}
  */
  readonly selectedEngineVersion?: string;
}

export function athenaWorkgroupConfigurationEngineVersionToTerraform(struct?: AthenaWorkgroupConfigurationEngineVersionOutputReference | AthenaWorkgroupConfigurationEngineVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selected_engine_version: cdktf.stringToTerraform(struct!.selectedEngineVersion),
  }
}

export class AthenaWorkgroupConfigurationEngineVersionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AthenaWorkgroupConfigurationEngineVersion | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._selectedEngineVersion) {
      hasAnyValues = true;
      internalValueResult.selectedEngineVersion = this._selectedEngineVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkgroupConfigurationEngineVersion | undefined) {
    if (value === undefined) {
      this._selectedEngineVersion = undefined;
    }
    else {
      this._selectedEngineVersion = value.selectedEngineVersion;
    }
  }

  // selected_engine_version - computed: false, optional: true, required: false
  private _selectedEngineVersion?: string; 
  public get selectedEngineVersion() {
    return this.getStringAttribute('selected_engine_version');
  }
  public set selectedEngineVersion(value: string) {
    this._selectedEngineVersion = value;
  }
  public resetSelectedEngineVersion() {
    this._selectedEngineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedEngineVersionInput() {
    return this._selectedEngineVersion;
  }
}
export interface AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#encryption_option AthenaWorkgroup#encryption_option}
  */
  readonly encryptionOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#kms_key_arn AthenaWorkgroup#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

export function athenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference | AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_option: cdktf.stringToTerraform(struct!.encryptionOption),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
  }
}

export class AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._encryptionOption) {
      hasAnyValues = true;
      internalValueResult.encryptionOption = this._encryptionOption;
    }
    if (this._kmsKeyArn) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this._encryptionOption = undefined;
      this._kmsKeyArn = undefined;
    }
    else {
      this._encryptionOption = value.encryptionOption;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // encryption_option - computed: false, optional: true, required: false
  private _encryptionOption?: string; 
  public get encryptionOption() {
    return this.getStringAttribute('encryption_option');
  }
  public set encryptionOption(value: string) {
    this._encryptionOption = value;
  }
  public resetEncryptionOption() {
    this._encryptionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionOptionInput() {
    return this._encryptionOption;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}
export interface AthenaWorkgroupConfigurationResultConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#output_location AthenaWorkgroup#output_location}
  */
  readonly outputLocation?: string;
  /**
  * encryption_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#encryption_configuration AthenaWorkgroup#encryption_configuration}
  */
  readonly encryptionConfiguration?: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration;
}

export function athenaWorkgroupConfigurationResultConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationResultConfigurationOutputReference | AthenaWorkgroupConfigurationResultConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output_location: cdktf.stringToTerraform(struct!.outputLocation),
    encryption_configuration: athenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
  }
}

export class AthenaWorkgroupConfigurationResultConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AthenaWorkgroupConfigurationResultConfiguration | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._outputLocation) {
      hasAnyValues = true;
      internalValueResult.outputLocation = this._outputLocation;
    }
    if (this._encryptionConfiguration) {
      hasAnyValues = true;
      internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkgroupConfigurationResultConfiguration | undefined) {
    if (value === undefined) {
      this._outputLocation = undefined;
      this._encryptionConfiguration.internalValue = undefined;
    }
    else {
      this._outputLocation = value.outputLocation;
      this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
    }
  }

  // output_location - computed: false, optional: true, required: false
  private _outputLocation?: string; 
  public get outputLocation() {
    return this.getStringAttribute('output_location');
  }
  public set outputLocation(value: string) {
    this._outputLocation = value;
  }
  public resetOutputLocation() {
    this._outputLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputLocationInput() {
    return this._outputLocation;
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference(this as any, "encryption_configuration", true);
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }
}
export interface AthenaWorkgroupConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#bytes_scanned_cutoff_per_query AthenaWorkgroup#bytes_scanned_cutoff_per_query}
  */
  readonly bytesScannedCutoffPerQuery?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#enforce_workgroup_configuration AthenaWorkgroup#enforce_workgroup_configuration}
  */
  readonly enforceWorkgroupConfiguration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#publish_cloudwatch_metrics_enabled AthenaWorkgroup#publish_cloudwatch_metrics_enabled}
  */
  readonly publishCloudwatchMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#requester_pays_enabled AthenaWorkgroup#requester_pays_enabled}
  */
  readonly requesterPaysEnabled?: boolean | cdktf.IResolvable;
  /**
  * engine_version block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#engine_version AthenaWorkgroup#engine_version}
  */
  readonly engineVersion?: AthenaWorkgroupConfigurationEngineVersion;
  /**
  * result_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#result_configuration AthenaWorkgroup#result_configuration}
  */
  readonly resultConfiguration?: AthenaWorkgroupConfigurationResultConfiguration;
}

export function athenaWorkgroupConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationOutputReference | AthenaWorkgroupConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bytes_scanned_cutoff_per_query: cdktf.numberToTerraform(struct!.bytesScannedCutoffPerQuery),
    enforce_workgroup_configuration: cdktf.booleanToTerraform(struct!.enforceWorkgroupConfiguration),
    publish_cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct!.publishCloudwatchMetricsEnabled),
    requester_pays_enabled: cdktf.booleanToTerraform(struct!.requesterPaysEnabled),
    engine_version: athenaWorkgroupConfigurationEngineVersionToTerraform(struct!.engineVersion),
    result_configuration: athenaWorkgroupConfigurationResultConfigurationToTerraform(struct!.resultConfiguration),
  }
}

export class AthenaWorkgroupConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AthenaWorkgroupConfiguration | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._bytesScannedCutoffPerQuery) {
      hasAnyValues = true;
      internalValueResult.bytesScannedCutoffPerQuery = this._bytesScannedCutoffPerQuery;
    }
    if (this._enforceWorkgroupConfiguration) {
      hasAnyValues = true;
      internalValueResult.enforceWorkgroupConfiguration = this._enforceWorkgroupConfiguration;
    }
    if (this._publishCloudwatchMetricsEnabled) {
      hasAnyValues = true;
      internalValueResult.publishCloudwatchMetricsEnabled = this._publishCloudwatchMetricsEnabled;
    }
    if (this._requesterPaysEnabled) {
      hasAnyValues = true;
      internalValueResult.requesterPaysEnabled = this._requesterPaysEnabled;
    }
    if (this._engineVersion) {
      hasAnyValues = true;
      internalValueResult.engineVersion = this._engineVersion?.internalValue;
    }
    if (this._resultConfiguration) {
      hasAnyValues = true;
      internalValueResult.resultConfiguration = this._resultConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AthenaWorkgroupConfiguration | undefined) {
    if (value === undefined) {
      this._bytesScannedCutoffPerQuery = undefined;
      this._enforceWorkgroupConfiguration = undefined;
      this._publishCloudwatchMetricsEnabled = undefined;
      this._requesterPaysEnabled = undefined;
      this._engineVersion.internalValue = undefined;
      this._resultConfiguration.internalValue = undefined;
    }
    else {
      this._bytesScannedCutoffPerQuery = value.bytesScannedCutoffPerQuery;
      this._enforceWorkgroupConfiguration = value.enforceWorkgroupConfiguration;
      this._publishCloudwatchMetricsEnabled = value.publishCloudwatchMetricsEnabled;
      this._requesterPaysEnabled = value.requesterPaysEnabled;
      this._engineVersion.internalValue = value.engineVersion;
      this._resultConfiguration.internalValue = value.resultConfiguration;
    }
  }

  // bytes_scanned_cutoff_per_query - computed: false, optional: true, required: false
  private _bytesScannedCutoffPerQuery?: number; 
  public get bytesScannedCutoffPerQuery() {
    return this.getNumberAttribute('bytes_scanned_cutoff_per_query');
  }
  public set bytesScannedCutoffPerQuery(value: number) {
    this._bytesScannedCutoffPerQuery = value;
  }
  public resetBytesScannedCutoffPerQuery() {
    this._bytesScannedCutoffPerQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesScannedCutoffPerQueryInput() {
    return this._bytesScannedCutoffPerQuery;
  }

  // enforce_workgroup_configuration - computed: false, optional: true, required: false
  private _enforceWorkgroupConfiguration?: boolean | cdktf.IResolvable; 
  public get enforceWorkgroupConfiguration() {
    return this.getBooleanAttribute('enforce_workgroup_configuration') as any;
  }
  public set enforceWorkgroupConfiguration(value: boolean | cdktf.IResolvable) {
    this._enforceWorkgroupConfiguration = value;
  }
  public resetEnforceWorkgroupConfiguration() {
    this._enforceWorkgroupConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceWorkgroupConfigurationInput() {
    return this._enforceWorkgroupConfiguration;
  }

  // publish_cloudwatch_metrics_enabled - computed: false, optional: true, required: false
  private _publishCloudwatchMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get publishCloudwatchMetricsEnabled() {
    return this.getBooleanAttribute('publish_cloudwatch_metrics_enabled') as any;
  }
  public set publishCloudwatchMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._publishCloudwatchMetricsEnabled = value;
  }
  public resetPublishCloudwatchMetricsEnabled() {
    this._publishCloudwatchMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishCloudwatchMetricsEnabledInput() {
    return this._publishCloudwatchMetricsEnabled;
  }

  // requester_pays_enabled - computed: false, optional: true, required: false
  private _requesterPaysEnabled?: boolean | cdktf.IResolvable; 
  public get requesterPaysEnabled() {
    return this.getBooleanAttribute('requester_pays_enabled') as any;
  }
  public set requesterPaysEnabled(value: boolean | cdktf.IResolvable) {
    this._requesterPaysEnabled = value;
  }
  public resetRequesterPaysEnabled() {
    this._requesterPaysEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterPaysEnabledInput() {
    return this._requesterPaysEnabled;
  }

  // engine_version - computed: false, optional: true, required: false
  private _engineVersion = new AthenaWorkgroupConfigurationEngineVersionOutputReference(this as any, "engine_version", true);
  public get engineVersion() {
    return this._engineVersion;
  }
  public putEngineVersion(value: AthenaWorkgroupConfigurationEngineVersion) {
    this._engineVersion.internalValue = value;
  }
  public resetEngineVersion() {
    this._engineVersion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion.internalValue;
  }

  // result_configuration - computed: false, optional: true, required: false
  private _resultConfiguration = new AthenaWorkgroupConfigurationResultConfigurationOutputReference(this as any, "result_configuration", true);
  public get resultConfiguration() {
    return this._resultConfiguration;
  }
  public putResultConfiguration(value: AthenaWorkgroupConfigurationResultConfiguration) {
    this._resultConfiguration.internalValue = value;
  }
  public resetResultConfiguration() {
    this._resultConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultConfigurationInput() {
    return this._resultConfiguration.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html aws_athena_workgroup}
*/
export class AthenaWorkgroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_athena_workgroup";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html aws_athena_workgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AthenaWorkgroupConfig
  */
  public constructor(scope: Construct, id: string, config: AthenaWorkgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_athena_workgroup',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._forceDestroy = config.forceDestroy;
    this._name = config.name;
    this._state = config.state;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._configuration.internalValue = config.configuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy') as any;
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
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

  // configuration - computed: false, optional: true, required: false
  private _configuration = new AthenaWorkgroupConfigurationOutputReference(this as any, "configuration", true);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: AthenaWorkgroupConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      name: cdktf.stringToTerraform(this._name),
      state: cdktf.stringToTerraform(this._state),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      configuration: athenaWorkgroupConfigurationToTerraform(this._configuration.internalValue),
    };
  }
}
