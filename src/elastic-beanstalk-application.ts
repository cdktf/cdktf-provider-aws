// https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ElasticBeanstalkApplicationConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** appversion_lifecycle block */
  readonly appversionLifecycle?: ElasticBeanstalkApplicationAppversionLifecycle[];
}
export interface ElasticBeanstalkApplicationAppversionLifecycle {
  readonly deleteSourceFromS3?: boolean;
  readonly maxAgeInDays?: number;
  readonly maxCount?: number;
  readonly serviceRole: string;
}

// Resource

export class ElasticBeanstalkApplication extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // appversion_lifecycle - computed: false, optional: true, required: false
  private _appversionLifecycle?: ElasticBeanstalkApplicationAppversionLifecycle[];
  public get appversionLifecycle() {
    return this.interpolationForAttribute('appversion_lifecycle') as any;
  }
  public set appversionLifecycle(value: ElasticBeanstalkApplicationAppversionLifecycle[] ) {
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
      description: this._description,
      name: this._name,
      tags: this._tags,
      appversion_lifecycle: this._appversionLifecycle,
    };
  }
}
