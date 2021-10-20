// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Beanstalk
*/
export namespace ElasticBeanstalk {
  export interface ElasticBeanstalkApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#description ElasticBeanstalkApplication#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#name ElasticBeanstalkApplication#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#tags ElasticBeanstalkApplication#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#tags_all ElasticBeanstalkApplication#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * appversion_lifecycle block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#appversion_lifecycle ElasticBeanstalkApplication#appversion_lifecycle}
    */
    readonly appversionLifecycle?: ElasticBeanstalkApplicationAppversionLifecycle;
  }
  export interface ElasticBeanstalkApplicationAppversionLifecycle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#delete_source_from_s3 ElasticBeanstalkApplication#delete_source_from_s3}
    */
    readonly deleteSourceFromS3?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#max_age_in_days ElasticBeanstalkApplication#max_age_in_days}
    */
    readonly maxAgeInDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#max_count ElasticBeanstalkApplication#max_count}
    */
    readonly maxCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#service_role ElasticBeanstalkApplication#service_role}
    */
    readonly serviceRole: string;
  }

  function elasticBeanstalkApplicationAppversionLifecycleToTerraform(struct?: ElasticBeanstalkApplicationAppversionLifecycleOutputReference | ElasticBeanstalkApplicationAppversionLifecycle): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      delete_source_from_s3: cdktf.booleanToTerraform(struct!.deleteSourceFromS3),
      max_age_in_days: cdktf.numberToTerraform(struct!.maxAgeInDays),
      max_count: cdktf.numberToTerraform(struct!.maxCount),
      service_role: cdktf.stringToTerraform(struct!.serviceRole),
    }
  }

  export class ElasticBeanstalkApplicationAppversionLifecycleOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // delete_source_from_s3 - computed: false, optional: true, required: false
    private _deleteSourceFromS3?: boolean | cdktf.IResolvable | undefined; 
    public get deleteSourceFromS3() {
      return this.getBooleanAttribute('delete_source_from_s3') as any;
    }
    public set deleteSourceFromS3(value: boolean | cdktf.IResolvable | undefined) {
      this._deleteSourceFromS3 = value;
    }
    public resetDeleteSourceFromS3() {
      this._deleteSourceFromS3 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteSourceFromS3Input() {
      return this._deleteSourceFromS3
    }

    // max_age_in_days - computed: false, optional: true, required: false
    private _maxAgeInDays?: number | undefined; 
    public get maxAgeInDays() {
      return this.getNumberAttribute('max_age_in_days');
    }
    public set maxAgeInDays(value: number | undefined) {
      this._maxAgeInDays = value;
    }
    public resetMaxAgeInDays() {
      this._maxAgeInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxAgeInDaysInput() {
      return this._maxAgeInDays
    }

    // max_count - computed: false, optional: true, required: false
    private _maxCount?: number | undefined; 
    public get maxCount() {
      return this.getNumberAttribute('max_count');
    }
    public set maxCount(value: number | undefined) {
      this._maxCount = value;
    }
    public resetMaxCount() {
      this._maxCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCountInput() {
      return this._maxCount
    }

    // service_role - computed: false, optional: false, required: true
    private _serviceRole?: string; 
    public get serviceRole() {
      return this.getStringAttribute('service_role');
    }
    public set serviceRole(value: string) {
      this._serviceRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceRoleInput() {
      return this._serviceRole
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html aws_elastic_beanstalk_application}
  */
  export class ElasticBeanstalkApplication extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elastic_beanstalk_application";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html aws_elastic_beanstalk_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticBeanstalkApplicationConfig
    */
    public constructor(scope: Construct, id: string, config: ElasticBeanstalkApplicationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_elastic_beanstalk_application',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._appversionLifecycle = config.appversionLifecycle;
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

    // appversion_lifecycle - computed: false, optional: true, required: false
    private _appversionLifecycle?: ElasticBeanstalkApplicationAppversionLifecycle | undefined; 
    private __appversionLifecycleOutput = new ElasticBeanstalkApplicationAppversionLifecycleOutputReference(this as any, "appversion_lifecycle", true);
    public get appversionLifecycle() {
      return this.__appversionLifecycleOutput;
    }
    public putAppversionLifecycle(value: ElasticBeanstalkApplicationAppversionLifecycle | undefined) {
      this._appversionLifecycle = value;
    }
    public resetAppversionLifecycle() {
      this._appversionLifecycle = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appversionLifecycleInput() {
      return this._appversionLifecycle
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        appversion_lifecycle: elasticBeanstalkApplicationAppversionLifecycleToTerraform(this._appversionLifecycle),
      };
    }
  }
  export interface ElasticBeanstalkApplicationVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html#application ElasticBeanstalkApplicationVersion#application}
    */
    readonly application: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html#bucket ElasticBeanstalkApplicationVersion#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html#description ElasticBeanstalkApplicationVersion#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html#force_delete ElasticBeanstalkApplicationVersion#force_delete}
    */
    readonly forceDelete?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html#key ElasticBeanstalkApplicationVersion#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html#name ElasticBeanstalkApplicationVersion#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html#tags ElasticBeanstalkApplicationVersion#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html#tags_all ElasticBeanstalkApplicationVersion#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html aws_elastic_beanstalk_application_version}
  */
  export class ElasticBeanstalkApplicationVersion extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elastic_beanstalk_application_version";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application_version.html aws_elastic_beanstalk_application_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticBeanstalkApplicationVersionConfig
    */
    public constructor(scope: Construct, id: string, config: ElasticBeanstalkApplicationVersionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_elastic_beanstalk_application_version',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._application = config.application;
      this._bucket = config.bucket;
      this._description = config.description;
      this._forceDelete = config.forceDelete;
      this._key = config.key;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application - computed: false, optional: false, required: true
    private _application?: string; 
    public get application() {
      return this.getStringAttribute('application');
    }
    public set application(value: string) {
      this._application = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationInput() {
      return this._application
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

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

    // force_delete - computed: false, optional: true, required: false
    private _forceDelete?: boolean | cdktf.IResolvable | undefined; 
    public get forceDelete() {
      return this.getBooleanAttribute('force_delete') as any;
    }
    public set forceDelete(value: boolean | cdktf.IResolvable | undefined) {
      this._forceDelete = value;
    }
    public resetForceDelete() {
      this._forceDelete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceDeleteInput() {
      return this._forceDelete
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // key - computed: false, optional: false, required: true
    private _key?: string; 
    public get key() {
      return this.getStringAttribute('key');
    }
    public set key(value: string) {
      this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
      return this._key
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
        application: cdktf.stringToTerraform(this._application),
        bucket: cdktf.stringToTerraform(this._bucket),
        description: cdktf.stringToTerraform(this._description),
        force_delete: cdktf.booleanToTerraform(this._forceDelete),
        key: cdktf.stringToTerraform(this._key),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface ElasticBeanstalkConfigurationTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html#application ElasticBeanstalkConfigurationTemplate#application}
    */
    readonly application: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html#description ElasticBeanstalkConfigurationTemplate#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html#environment_id ElasticBeanstalkConfigurationTemplate#environment_id}
    */
    readonly environmentId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html#name ElasticBeanstalkConfigurationTemplate#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html#solution_stack_name ElasticBeanstalkConfigurationTemplate#solution_stack_name}
    */
    readonly solutionStackName?: string;
    /**
    * setting block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html#setting ElasticBeanstalkConfigurationTemplate#setting}
    */
    readonly setting?: ElasticBeanstalkConfigurationTemplateSetting[];
  }
  export interface ElasticBeanstalkConfigurationTemplateSetting {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html#name ElasticBeanstalkConfigurationTemplate#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html#namespace ElasticBeanstalkConfigurationTemplate#namespace}
    */
    readonly namespace: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html#resource ElasticBeanstalkConfigurationTemplate#resource}
    */
    readonly resource?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html#value ElasticBeanstalkConfigurationTemplate#value}
    */
    readonly value: string;
  }

  function elasticBeanstalkConfigurationTemplateSettingToTerraform(struct?: ElasticBeanstalkConfigurationTemplateSetting): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      namespace: cdktf.stringToTerraform(struct!.namespace),
      resource: cdktf.stringToTerraform(struct!.resource),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html aws_elastic_beanstalk_configuration_template}
  */
  export class ElasticBeanstalkConfigurationTemplate extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elastic_beanstalk_configuration_template";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html aws_elastic_beanstalk_configuration_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticBeanstalkConfigurationTemplateConfig
    */
    public constructor(scope: Construct, id: string, config: ElasticBeanstalkConfigurationTemplateConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_elastic_beanstalk_configuration_template',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._application = config.application;
      this._description = config.description;
      this._environmentId = config.environmentId;
      this._name = config.name;
      this._solutionStackName = config.solutionStackName;
      this._setting = config.setting;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application - computed: false, optional: false, required: true
    private _application?: string; 
    public get application() {
      return this.getStringAttribute('application');
    }
    public set application(value: string) {
      this._application = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationInput() {
      return this._application
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

    // environment_id - computed: false, optional: true, required: false
    private _environmentId?: string | undefined; 
    public get environmentId() {
      return this.getStringAttribute('environment_id');
    }
    public set environmentId(value: string | undefined) {
      this._environmentId = value;
    }
    public resetEnvironmentId() {
      this._environmentId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentIdInput() {
      return this._environmentId
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

    // solution_stack_name - computed: false, optional: true, required: false
    private _solutionStackName?: string | undefined; 
    public get solutionStackName() {
      return this.getStringAttribute('solution_stack_name');
    }
    public set solutionStackName(value: string | undefined) {
      this._solutionStackName = value;
    }
    public resetSolutionStackName() {
      this._solutionStackName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get solutionStackNameInput() {
      return this._solutionStackName
    }

    // setting - computed: false, optional: true, required: false
    private _setting?: ElasticBeanstalkConfigurationTemplateSetting[] | undefined; 
    public get setting() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('setting') as any;
    }
    public set setting(value: ElasticBeanstalkConfigurationTemplateSetting[] | undefined) {
      this._setting = value;
    }
    public resetSetting() {
      this._setting = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get settingInput() {
      return this._setting
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        application: cdktf.stringToTerraform(this._application),
        description: cdktf.stringToTerraform(this._description),
        environment_id: cdktf.stringToTerraform(this._environmentId),
        name: cdktf.stringToTerraform(this._name),
        solution_stack_name: cdktf.stringToTerraform(this._solutionStackName),
        setting: cdktf.listMapper(elasticBeanstalkConfigurationTemplateSettingToTerraform)(this._setting),
      };
    }
  }
  export interface ElasticBeanstalkEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#application ElasticBeanstalkEnvironment#application}
    */
    readonly application: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#cname_prefix ElasticBeanstalkEnvironment#cname_prefix}
    */
    readonly cnamePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#description ElasticBeanstalkEnvironment#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#name ElasticBeanstalkEnvironment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#platform_arn ElasticBeanstalkEnvironment#platform_arn}
    */
    readonly platformArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#poll_interval ElasticBeanstalkEnvironment#poll_interval}
    */
    readonly pollInterval?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#solution_stack_name ElasticBeanstalkEnvironment#solution_stack_name}
    */
    readonly solutionStackName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#tags ElasticBeanstalkEnvironment#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#tags_all ElasticBeanstalkEnvironment#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#template_name ElasticBeanstalkEnvironment#template_name}
    */
    readonly templateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#tier ElasticBeanstalkEnvironment#tier}
    */
    readonly tier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#version_label ElasticBeanstalkEnvironment#version_label}
    */
    readonly versionLabel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#wait_for_ready_timeout ElasticBeanstalkEnvironment#wait_for_ready_timeout}
    */
    readonly waitForReadyTimeout?: string;
    /**
    * setting block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#setting ElasticBeanstalkEnvironment#setting}
    */
    readonly setting?: ElasticBeanstalkEnvironmentSetting[];
  }
  export class ElasticBeanstalkEnvironmentAllSettings extends cdktf.ComplexComputedList {

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // namespace - computed: true, optional: false, required: false
    public get namespace() {
      return this.getStringAttribute('namespace');
    }

    // resource - computed: true, optional: false, required: false
    public get resource() {
      return this.getStringAttribute('resource');
    }

    // value - computed: true, optional: false, required: false
    public get value() {
      return this.getStringAttribute('value');
    }
  }
  export interface ElasticBeanstalkEnvironmentSetting {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#name ElasticBeanstalkEnvironment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#namespace ElasticBeanstalkEnvironment#namespace}
    */
    readonly namespace: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#resource ElasticBeanstalkEnvironment#resource}
    */
    readonly resource?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html#value ElasticBeanstalkEnvironment#value}
    */
    readonly value: string;
  }

  function elasticBeanstalkEnvironmentSettingToTerraform(struct?: ElasticBeanstalkEnvironmentSetting): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      namespace: cdktf.stringToTerraform(struct!.namespace),
      resource: cdktf.stringToTerraform(struct!.resource),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html aws_elastic_beanstalk_environment}
  */
  export class ElasticBeanstalkEnvironment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elastic_beanstalk_environment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_environment.html aws_elastic_beanstalk_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticBeanstalkEnvironmentConfig
    */
    public constructor(scope: Construct, id: string, config: ElasticBeanstalkEnvironmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_elastic_beanstalk_environment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._application = config.application;
      this._cnamePrefix = config.cnamePrefix;
      this._description = config.description;
      this._name = config.name;
      this._platformArn = config.platformArn;
      this._pollInterval = config.pollInterval;
      this._solutionStackName = config.solutionStackName;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._templateName = config.templateName;
      this._tier = config.tier;
      this._versionLabel = config.versionLabel;
      this._waitForReadyTimeout = config.waitForReadyTimeout;
      this._setting = config.setting;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // all_settings - computed: true, optional: false, required: false
    public allSettings(index: string) {
      return new ElasticBeanstalkEnvironmentAllSettings(this, 'all_settings', index);
    }

    // application - computed: false, optional: false, required: true
    private _application?: string; 
    public get application() {
      return this.getStringAttribute('application');
    }
    public set application(value: string) {
      this._application = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationInput() {
      return this._application
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // autoscaling_groups - computed: true, optional: false, required: false
    public get autoscalingGroups() {
      return this.getListAttribute('autoscaling_groups');
    }

    // cname - computed: true, optional: false, required: false
    public get cname() {
      return this.getStringAttribute('cname');
    }

    // cname_prefix - computed: true, optional: true, required: false
    private _cnamePrefix?: string | undefined; 
    public get cnamePrefix() {
      return this.getStringAttribute('cname_prefix');
    }
    public set cnamePrefix(value: string | undefined) {
      this._cnamePrefix = value;
    }
    public resetCnamePrefix() {
      this._cnamePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cnamePrefixInput() {
      return this._cnamePrefix
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

    // endpoint_url - computed: true, optional: false, required: false
    public get endpointUrl() {
      return this.getStringAttribute('endpoint_url');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instances - computed: true, optional: false, required: false
    public get instances() {
      return this.getListAttribute('instances');
    }

    // launch_configurations - computed: true, optional: false, required: false
    public get launchConfigurations() {
      return this.getListAttribute('launch_configurations');
    }

    // load_balancers - computed: true, optional: false, required: false
    public get loadBalancers() {
      return this.getListAttribute('load_balancers');
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

    // platform_arn - computed: true, optional: true, required: false
    private _platformArn?: string | undefined; 
    public get platformArn() {
      return this.getStringAttribute('platform_arn');
    }
    public set platformArn(value: string | undefined) {
      this._platformArn = value;
    }
    public resetPlatformArn() {
      this._platformArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get platformArnInput() {
      return this._platformArn
    }

    // poll_interval - computed: false, optional: true, required: false
    private _pollInterval?: string | undefined; 
    public get pollInterval() {
      return this.getStringAttribute('poll_interval');
    }
    public set pollInterval(value: string | undefined) {
      this._pollInterval = value;
    }
    public resetPollInterval() {
      this._pollInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pollIntervalInput() {
      return this._pollInterval
    }

    // queues - computed: true, optional: false, required: false
    public get queues() {
      return this.getListAttribute('queues');
    }

    // solution_stack_name - computed: true, optional: true, required: false
    private _solutionStackName?: string | undefined; 
    public get solutionStackName() {
      return this.getStringAttribute('solution_stack_name');
    }
    public set solutionStackName(value: string | undefined) {
      this._solutionStackName = value;
    }
    public resetSolutionStackName() {
      this._solutionStackName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get solutionStackNameInput() {
      return this._solutionStackName
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

    // template_name - computed: false, optional: true, required: false
    private _templateName?: string | undefined; 
    public get templateName() {
      return this.getStringAttribute('template_name');
    }
    public set templateName(value: string | undefined) {
      this._templateName = value;
    }
    public resetTemplateName() {
      this._templateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateNameInput() {
      return this._templateName
    }

    // tier - computed: false, optional: true, required: false
    private _tier?: string | undefined; 
    public get tier() {
      return this.getStringAttribute('tier');
    }
    public set tier(value: string | undefined) {
      this._tier = value;
    }
    public resetTier() {
      this._tier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tierInput() {
      return this._tier
    }

    // triggers - computed: true, optional: false, required: false
    public get triggers() {
      return this.getListAttribute('triggers');
    }

    // version_label - computed: true, optional: true, required: false
    private _versionLabel?: string | undefined; 
    public get versionLabel() {
      return this.getStringAttribute('version_label');
    }
    public set versionLabel(value: string | undefined) {
      this._versionLabel = value;
    }
    public resetVersionLabel() {
      this._versionLabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionLabelInput() {
      return this._versionLabel
    }

    // wait_for_ready_timeout - computed: false, optional: true, required: false
    private _waitForReadyTimeout?: string | undefined; 
    public get waitForReadyTimeout() {
      return this.getStringAttribute('wait_for_ready_timeout');
    }
    public set waitForReadyTimeout(value: string | undefined) {
      this._waitForReadyTimeout = value;
    }
    public resetWaitForReadyTimeout() {
      this._waitForReadyTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get waitForReadyTimeoutInput() {
      return this._waitForReadyTimeout
    }

    // setting - computed: false, optional: true, required: false
    private _setting?: ElasticBeanstalkEnvironmentSetting[] | undefined; 
    public get setting() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('setting') as any;
    }
    public set setting(value: ElasticBeanstalkEnvironmentSetting[] | undefined) {
      this._setting = value;
    }
    public resetSetting() {
      this._setting = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get settingInput() {
      return this._setting
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        application: cdktf.stringToTerraform(this._application),
        cname_prefix: cdktf.stringToTerraform(this._cnamePrefix),
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        platform_arn: cdktf.stringToTerraform(this._platformArn),
        poll_interval: cdktf.stringToTerraform(this._pollInterval),
        solution_stack_name: cdktf.stringToTerraform(this._solutionStackName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        template_name: cdktf.stringToTerraform(this._templateName),
        tier: cdktf.stringToTerraform(this._tier),
        version_label: cdktf.stringToTerraform(this._versionLabel),
        wait_for_ready_timeout: cdktf.stringToTerraform(this._waitForReadyTimeout),
        setting: cdktf.listMapper(elasticBeanstalkEnvironmentSettingToTerraform)(this._setting),
      };
    }
  }
  export interface DataAwsElasticBeanstalkApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_application.html#name DataAwsElasticBeanstalkApplication#name}
    */
    readonly name: string;
  }
  export class DataAwsElasticBeanstalkApplicationAppversionLifecycle extends cdktf.ComplexComputedList {

    // delete_source_from_s3 - computed: true, optional: false, required: false
    public get deleteSourceFromS3() {
      return this.getBooleanAttribute('delete_source_from_s3') as any;
    }

    // max_age_in_days - computed: true, optional: false, required: false
    public get maxAgeInDays() {
      return this.getNumberAttribute('max_age_in_days');
    }

    // max_count - computed: true, optional: false, required: false
    public get maxCount() {
      return this.getNumberAttribute('max_count');
    }

    // service_role - computed: true, optional: false, required: false
    public get serviceRole() {
      return this.getStringAttribute('service_role');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_application.html aws_elastic_beanstalk_application}
  */
  export class DataAwsElasticBeanstalkApplication extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elastic_beanstalk_application";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_application.html aws_elastic_beanstalk_application} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticBeanstalkApplicationConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsElasticBeanstalkApplicationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_elastic_beanstalk_application',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // appversion_lifecycle - computed: true, optional: false, required: false
    public appversionLifecycle(index: string) {
      return new DataAwsElasticBeanstalkApplicationAppversionLifecycle(this, 'appversion_lifecycle', index);
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsElasticBeanstalkHostedZoneConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_hosted_zone.html#region DataAwsElasticBeanstalkHostedZone#region}
    */
    readonly region?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_hosted_zone.html aws_elastic_beanstalk_hosted_zone}
  */
  export class DataAwsElasticBeanstalkHostedZone extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elastic_beanstalk_hosted_zone";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_hosted_zone.html aws_elastic_beanstalk_hosted_zone} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticBeanstalkHostedZoneConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsElasticBeanstalkHostedZoneConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_elastic_beanstalk_hosted_zone',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._region = config.region;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // region - computed: false, optional: true, required: false
    private _region?: string | undefined; 
    public get region() {
      return this.getStringAttribute('region');
    }
    public set region(value: string | undefined) {
      this._region = value;
    }
    public resetRegion() {
      this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
      return this._region
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        region: cdktf.stringToTerraform(this._region),
      };
    }
  }
  export interface DataAwsElasticBeanstalkSolutionStackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack.html#most_recent DataAwsElasticBeanstalkSolutionStack#most_recent}
    */
    readonly mostRecent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack.html#name_regex DataAwsElasticBeanstalkSolutionStack#name_regex}
    */
    readonly nameRegex: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack.html aws_elastic_beanstalk_solution_stack}
  */
  export class DataAwsElasticBeanstalkSolutionStack extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_elastic_beanstalk_solution_stack";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack.html aws_elastic_beanstalk_solution_stack} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticBeanstalkSolutionStackConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsElasticBeanstalkSolutionStackConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_elastic_beanstalk_solution_stack',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._mostRecent = config.mostRecent;
      this._nameRegex = config.nameRegex;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // most_recent - computed: false, optional: true, required: false
    private _mostRecent?: boolean | cdktf.IResolvable | undefined; 
    public get mostRecent() {
      return this.getBooleanAttribute('most_recent') as any;
    }
    public set mostRecent(value: boolean | cdktf.IResolvable | undefined) {
      this._mostRecent = value;
    }
    public resetMostRecent() {
      this._mostRecent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mostRecentInput() {
      return this._mostRecent
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // name_regex - computed: false, optional: false, required: true
    private _nameRegex?: string; 
    public get nameRegex() {
      return this.getStringAttribute('name_regex');
    }
    public set nameRegex(value: string) {
      this._nameRegex = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameRegexInput() {
      return this._nameRegex
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        most_recent: cdktf.booleanToTerraform(this._mostRecent),
        name_regex: cdktf.stringToTerraform(this._nameRegex),
      };
    }
  }
}
