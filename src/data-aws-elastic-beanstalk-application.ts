// https://www.terraform.io/docs/providers/aws/r/data_aws_elastic_beanstalk_application.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "appversion_lifecycle": {
        "type": [
          "list",
          [
            "object",
            {
              "delete_source_from_s3": "bool",
              "max_age_in_days": "number",
              "max_count": "number",
              "service_role": "string"
            }
          ]
        ],
        "computed": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsElasticBeanstalkApplicationConfig extends TerraformMetaArguments {
  readonly name: string;
}
export class DataAwsElasticBeanstalkApplicationAppversionLifecycle extends ComplexComputedList {

  // delete_source_from_s3 - computed: true, optional: false, required: true
  public get deleteSourceFromS3() {
    return this.getBooleanAttribute('delete_source_from_s3');
  }

  // max_age_in_days - computed: true, optional: false, required: true
  public get maxAgeInDays() {
    return this.getNumberAttribute('max_age_in_days');
  }

  // max_count - computed: true, optional: false, required: true
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }

  // service_role - computed: true, optional: false, required: true
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }
}

// Resource

export class DataAwsElasticBeanstalkApplication extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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

  // appversion_lifecycle - computed: true, optional: false, required: true
  public appversionLifecycle(index: string) {
    return new DataAwsElasticBeanstalkApplicationAppversionLifecycle(this, 'appversion_lifecycle', index);
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
    };
  }
}
