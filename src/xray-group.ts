// https://www.terraform.io/docs/providers/aws/r/xray_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface XrayGroupConfig extends TerraformMetaArguments {
  readonly filterExpression: string;
  readonly groupName: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class XrayGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: XrayGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_xray_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._filterExpression = config.filterExpression;
    this._groupName = config.groupName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // filter_expression - computed: false, optional: false, required: true
  private _filterExpression: string;
  public get filterExpression() {
    return this._filterExpression;
  }
  public set filterExpression(value: string) {
    this._filterExpression = value;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName: string;
  public get groupName() {
    return this._groupName;
  }
  public set groupName(value: string) {
    this._groupName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_expression: this._filterExpression,
      group_name: this._groupName,
      tags: this._tags,
    };
  }
}
