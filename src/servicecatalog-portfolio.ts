// https://www.terraform.io/docs/providers/aws/r/servicecatalog_portfolio.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ServicecatalogPortfolioConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  readonly providerName?: string;
  readonly tags?: { [key: string]: string };
  /** timeouts block */
  readonly timeouts?: ServicecatalogPortfolioTimeouts;
}
export interface ServicecatalogPortfolioTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ServicecatalogPortfolio extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServicecatalogPortfolioConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_servicecatalog_portfolio',
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
    this._providerName = config.providerName;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_time - computed: true, optional: false, required: true
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description ?? this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
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

  // provider_name - computed: false, optional: true, required: false
  private _providerName?: string;
  public get providerName() {
    return this._providerName;
  }
  public set providerName(value: string | undefined) {
    this._providerName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ServicecatalogPortfolioTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ServicecatalogPortfolioTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      provider_name: this._providerName,
      tags: this._tags,
      timeouts: this._timeouts,
    };
  }
}
