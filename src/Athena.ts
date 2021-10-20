// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* Amazon Athena
*/
export namespace Athena {
  export interface AthenaDatabaseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#bucket AthenaDatabase#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#force_destroy AthenaDatabase#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#name AthenaDatabase#name}
    */
    readonly name: string;
    /**
    * encryption_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#encryption_configuration AthenaDatabase#encryption_configuration}
    */
    readonly encryptionConfiguration?: AthenaDatabaseEncryptionConfiguration;
  }
  export interface AthenaDatabaseEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#encryption_option AthenaDatabase#encryption_option}
    */
    readonly encryptionOption: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#kms_key AthenaDatabase#kms_key}
    */
    readonly kmsKey?: string;
  }

  function athenaDatabaseEncryptionConfigurationToTerraform(struct?: AthenaDatabaseEncryptionConfigurationOutputReference | AthenaDatabaseEncryptionConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      encryption_option: cdktf.stringToTerraform(struct!.encryptionOption),
      kms_key: cdktf.stringToTerraform(struct!.kmsKey),
    }
  }

  export class AthenaDatabaseEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // encryption_option - computed: false, optional: false, required: true
    private _encryptionOption?: string; 
    public get encryptionOption() {
      return this.getStringAttribute('encryption_option');
    }
    public set encryptionOption(value: string) {
      this._encryptionOption = value;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionOptionInput() {
      return this._encryptionOption
    }

    // kms_key - computed: false, optional: true, required: false
    private _kmsKey?: string | undefined; 
    public get kmsKey() {
      return this.getStringAttribute('kms_key');
    }
    public set kmsKey(value: string | undefined) {
      this._kmsKey = value;
    }
    public resetKmsKey() {
      this._kmsKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyInput() {
      return this._kmsKey
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html aws_athena_database}
  */
  export class AthenaDatabase extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_athena_database";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html aws_athena_database} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AthenaDatabaseConfig
    */
    public constructor(scope: Construct, id: string, config: AthenaDatabaseConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_athena_database',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._bucket = config.bucket;
      this._forceDestroy = config.forceDestroy;
      this._name = config.name;
      this._encryptionConfiguration = config.encryptionConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // bucket - computed: false, optional: false, required: true
    private _bucket?: string; 
    public get bucket() {
      return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
      this._bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
      return this._bucket
    }

    // force_destroy - computed: false, optional: true, required: false
    private _forceDestroy?: boolean | cdktf.IResolvable | undefined; 
    public get forceDestroy() {
      return this.getBooleanAttribute('force_destroy') as any;
    }
    public set forceDestroy(value: boolean | cdktf.IResolvable | undefined) {
      this._forceDestroy = value;
    }
    public resetForceDestroy() {
      this._forceDestroy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceDestroyInput() {
      return this._forceDestroy
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
      return this._name
    }

    // encryption_configuration - computed: false, optional: true, required: false
    private _encryptionConfiguration?: AthenaDatabaseEncryptionConfiguration | undefined; 
    private __encryptionConfigurationOutput = new AthenaDatabaseEncryptionConfigurationOutputReference(this as any, "encryption_configuration", true);
    public get encryptionConfiguration() {
      return this.__encryptionConfigurationOutput;
    }
    public putEncryptionConfiguration(value: AthenaDatabaseEncryptionConfiguration | undefined) {
      this._encryptionConfiguration = value;
    }
    public resetEncryptionConfiguration() {
      this._encryptionConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigurationInput() {
      return this._encryptionConfiguration
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        bucket: cdktf.stringToTerraform(this._bucket),
        force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
        name: cdktf.stringToTerraform(this._name),
        encryption_configuration: athenaDatabaseEncryptionConfigurationToTerraform(this._encryptionConfiguration),
      };
    }
  }
  export interface AthenaNamedQueryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_named_query.html#database AthenaNamedQuery#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_named_query.html#description AthenaNamedQuery#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_named_query.html#name AthenaNamedQuery#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_named_query.html#query AthenaNamedQuery#query}
    */
    readonly query: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_named_query.html#workgroup AthenaNamedQuery#workgroup}
    */
    readonly workgroup?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/athena_named_query.html aws_athena_named_query}
  */
  export class AthenaNamedQuery extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_athena_named_query";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/athena_named_query.html aws_athena_named_query} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AthenaNamedQueryConfig
    */
    public constructor(scope: Construct, id: string, config: AthenaNamedQueryConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_athena_named_query',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._database = config.database;
      this._description = config.description;
      this._name = config.name;
      this._query = config.query;
      this._workgroup = config.workgroup;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // database - computed: false, optional: false, required: true
    private _database?: string; 
    public get database() {
      return this.getStringAttribute('database');
    }
    public set database(value: string) {
      this._database = value;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
      return this._database
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
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
      return this._name
    }

    // query - computed: false, optional: false, required: true
    private _query?: string; 
    public get query() {
      return this.getStringAttribute('query');
    }
    public set query(value: string) {
      this._query = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queryInput() {
      return this._query
    }

    // workgroup - computed: false, optional: true, required: false
    private _workgroup?: string | undefined; 
    public get workgroup() {
      return this.getStringAttribute('workgroup');
    }
    public set workgroup(value: string | undefined) {
      this._workgroup = value;
    }
    public resetWorkgroup() {
      this._workgroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workgroupInput() {
      return this._workgroup
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        database: cdktf.stringToTerraform(this._database),
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        query: cdktf.stringToTerraform(this._query),
        workgroup: cdktf.stringToTerraform(this._workgroup),
      };
    }
  }
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

  function athenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference | AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration): any {
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

    // encryption_option - computed: false, optional: true, required: false
    private _encryptionOption?: string | undefined; 
    public get encryptionOption() {
      return this.getStringAttribute('encryption_option');
    }
    public set encryptionOption(value: string | undefined) {
      this._encryptionOption = value;
    }
    public resetEncryptionOption() {
      this._encryptionOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionOptionInput() {
      return this._encryptionOption
    }

    // kms_key_arn - computed: false, optional: true, required: false
    private _kmsKeyArn?: string | undefined; 
    public get kmsKeyArn() {
      return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string | undefined) {
      this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
      this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
      return this._kmsKeyArn
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

  function athenaWorkgroupConfigurationResultConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationResultConfigurationOutputReference | AthenaWorkgroupConfigurationResultConfiguration): any {
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

    // output_location - computed: false, optional: true, required: false
    private _outputLocation?: string | undefined; 
    public get outputLocation() {
      return this.getStringAttribute('output_location');
    }
    public set outputLocation(value: string | undefined) {
      this._outputLocation = value;
    }
    public resetOutputLocation() {
      this._outputLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputLocationInput() {
      return this._outputLocation
    }

    // encryption_configuration - computed: false, optional: true, required: false
    private _encryptionConfiguration?: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration | undefined; 
    private __encryptionConfigurationOutput = new AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference(this as any, "encryption_configuration", true);
    public get encryptionConfiguration() {
      return this.__encryptionConfigurationOutput;
    }
    public putEncryptionConfiguration(value: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration | undefined) {
      this._encryptionConfiguration = value;
    }
    public resetEncryptionConfiguration() {
      this._encryptionConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigurationInput() {
      return this._encryptionConfiguration
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
    * result_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#result_configuration AthenaWorkgroup#result_configuration}
    */
    readonly resultConfiguration?: AthenaWorkgroupConfigurationResultConfiguration;
  }

  function athenaWorkgroupConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationOutputReference | AthenaWorkgroupConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      bytes_scanned_cutoff_per_query: cdktf.numberToTerraform(struct!.bytesScannedCutoffPerQuery),
      enforce_workgroup_configuration: cdktf.booleanToTerraform(struct!.enforceWorkgroupConfiguration),
      publish_cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct!.publishCloudwatchMetricsEnabled),
      requester_pays_enabled: cdktf.booleanToTerraform(struct!.requesterPaysEnabled),
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

    // bytes_scanned_cutoff_per_query - computed: false, optional: true, required: false
    private _bytesScannedCutoffPerQuery?: number | undefined; 
    public get bytesScannedCutoffPerQuery() {
      return this.getNumberAttribute('bytes_scanned_cutoff_per_query');
    }
    public set bytesScannedCutoffPerQuery(value: number | undefined) {
      this._bytesScannedCutoffPerQuery = value;
    }
    public resetBytesScannedCutoffPerQuery() {
      this._bytesScannedCutoffPerQuery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bytesScannedCutoffPerQueryInput() {
      return this._bytesScannedCutoffPerQuery
    }

    // enforce_workgroup_configuration - computed: false, optional: true, required: false
    private _enforceWorkgroupConfiguration?: boolean | cdktf.IResolvable | undefined; 
    public get enforceWorkgroupConfiguration() {
      return this.getBooleanAttribute('enforce_workgroup_configuration') as any;
    }
    public set enforceWorkgroupConfiguration(value: boolean | cdktf.IResolvable | undefined) {
      this._enforceWorkgroupConfiguration = value;
    }
    public resetEnforceWorkgroupConfiguration() {
      this._enforceWorkgroupConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enforceWorkgroupConfigurationInput() {
      return this._enforceWorkgroupConfiguration
    }

    // publish_cloudwatch_metrics_enabled - computed: false, optional: true, required: false
    private _publishCloudwatchMetricsEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get publishCloudwatchMetricsEnabled() {
      return this.getBooleanAttribute('publish_cloudwatch_metrics_enabled') as any;
    }
    public set publishCloudwatchMetricsEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._publishCloudwatchMetricsEnabled = value;
    }
    public resetPublishCloudwatchMetricsEnabled() {
      this._publishCloudwatchMetricsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publishCloudwatchMetricsEnabledInput() {
      return this._publishCloudwatchMetricsEnabled
    }

    // requester_pays_enabled - computed: false, optional: true, required: false
    private _requesterPaysEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get requesterPaysEnabled() {
      return this.getBooleanAttribute('requester_pays_enabled') as any;
    }
    public set requesterPaysEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._requesterPaysEnabled = value;
    }
    public resetRequesterPaysEnabled() {
      this._requesterPaysEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requesterPaysEnabledInput() {
      return this._requesterPaysEnabled
    }

    // result_configuration - computed: false, optional: true, required: false
    private _resultConfiguration?: AthenaWorkgroupConfigurationResultConfiguration | undefined; 
    private __resultConfigurationOutput = new AthenaWorkgroupConfigurationResultConfigurationOutputReference(this as any, "result_configuration", true);
    public get resultConfiguration() {
      return this.__resultConfigurationOutput;
    }
    public putResultConfiguration(value: AthenaWorkgroupConfigurationResultConfiguration | undefined) {
      this._resultConfiguration = value;
    }
    public resetResultConfiguration() {
      this._resultConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resultConfigurationInput() {
      return this._resultConfiguration
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
      this._configuration = config.configuration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // force_destroy - computed: false, optional: true, required: false
    private _forceDestroy?: boolean | cdktf.IResolvable | undefined; 
    public get forceDestroy() {
      return this.getBooleanAttribute('force_destroy') as any;
    }
    public set forceDestroy(value: boolean | cdktf.IResolvable | undefined) {
      this._forceDestroy = value;
    }
    public resetForceDestroy() {
      this._forceDestroy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceDestroyInput() {
      return this._forceDestroy
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
      return this._name
    }

    // state - computed: false, optional: true, required: false
    private _state?: string | undefined; 
    public get state() {
      return this.getStringAttribute('state');
    }
    public set state(value: string | undefined) {
      this._state = value;
    }
    public resetState() {
      this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
      return this._state
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

    // configuration - computed: false, optional: true, required: false
    private _configuration?: AthenaWorkgroupConfiguration | undefined; 
    private __configurationOutput = new AthenaWorkgroupConfigurationOutputReference(this as any, "configuration", true);
    public get configuration() {
      return this.__configurationOutput;
    }
    public putConfiguration(value: AthenaWorkgroupConfiguration | undefined) {
      this._configuration = value;
    }
    public resetConfiguration() {
      this._configuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
      return this._configuration
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
        configuration: athenaWorkgroupConfigurationToTerraform(this._configuration),
      };
    }
  }
}
