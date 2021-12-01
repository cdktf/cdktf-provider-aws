// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Beanstalk
*/
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

export function elasticBeanstalkConfigurationTemplateSettingToTerraform(struct?: ElasticBeanstalkConfigurationTemplateSetting): any {
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
    return this._application;
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

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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

  // solution_stack_name - computed: false, optional: true, required: false
  private _solutionStackName?: string; 
  public get solutionStackName() {
    return this.getStringAttribute('solution_stack_name');
  }
  public set solutionStackName(value: string) {
    this._solutionStackName = value;
  }
  public resetSolutionStackName() {
    this._solutionStackName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get solutionStackNameInput() {
    return this._solutionStackName;
  }

  // setting - computed: false, optional: true, required: false
  private _setting?: ElasticBeanstalkConfigurationTemplateSetting[]; 
  public get setting() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('setting') as any;
  }
  public set setting(value: ElasticBeanstalkConfigurationTemplateSetting[]) {
    this._setting = value;
  }
  public resetSetting() {
    this._setting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingInput() {
    return this._setting;
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
