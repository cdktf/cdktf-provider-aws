// https://www.terraform.io/docs/providers/aws/r/data_aws_elastic_beanstalk_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsElasticBeanstalkApplicationConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
}
export class DataAwsElasticBeanstalkApplicationAppversionLifecycle extends cdktf.ComplexComputedList {

  // delete_source_from_s3 - computed: true, optional: false, required: false
  public get deleteSourceFromS3() {
    return this.getBooleanAttribute('delete_source_from_s3');
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

// Resource

export class DataAwsElasticBeanstalkApplication extends cdktf.TerraformDataSource {

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
  private _name: string;
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
