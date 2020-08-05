// https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_configuration_template.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "application": {
        "type": "string",
        "required": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "environment_id": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "solution_stack_name": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "setting": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "required": true
            },
            "namespace": {
              "type": "string",
              "required": true
            },
            "resource": {
              "type": "string",
              "optional": true
            },
            "value": {
              "type": "string",
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ElasticBeanstalkConfigurationTemplateConfig extends TerraformMetaArguments {
  readonly application: string;
  readonly description?: string;
  readonly environmentId?: string;
  readonly name: string;
  readonly solutionStackName?: string;
  /** setting block */
  readonly setting?: ElasticBeanstalkConfigurationTemplateSetting[];
}
export interface ElasticBeanstalkConfigurationTemplateSetting {
  readonly name: string;
  readonly namespace: string;
  readonly resource?: string;
  readonly value: string;
}

// Resource

export class ElasticBeanstalkConfigurationTemplate extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _application: string;
  public get application() {
    return this._application;
  }
  public set application(value: string) {
    this._application = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string;
  public get environmentId() {
    return this._environmentId;
  }
  public set environmentId(value: string | undefined) {
    this._environmentId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // solution_stack_name - computed: false, optional: true, required: false
  private _solutionStackName?: string;
  public get solutionStackName() {
    return this._solutionStackName;
  }
  public set solutionStackName(value: string | undefined) {
    this._solutionStackName = value;
  }

  // setting - computed: false, optional: true, required: false
  private _setting?: ElasticBeanstalkConfigurationTemplateSetting[];
  public get setting() {
    return this._setting;
  }
  public set setting(value: ElasticBeanstalkConfigurationTemplateSetting[] | undefined) {
    this._setting = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      application: this._application,
      description: this._description,
      environment_id: this._environmentId,
      name: this._name,
      solution_stack_name: this._solutionStackName,
      setting: this._setting,
    };
  }
}
