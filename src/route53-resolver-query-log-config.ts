// https://www.terraform.io/docs/providers/aws/r/route53_resolver_query_log_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Route53ResolverQueryLogConfigConfig extends TerraformMetaArguments {
  readonly destinationArn: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class Route53ResolverQueryLogConfig extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Route53ResolverQueryLogConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_resolver_query_log_config',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._destinationArn = config.destinationArn;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // destination_arn - computed: false, optional: false, required: true
  private _destinationArn: string;
  public get destinationArn() {
    return this._destinationArn;
  }
  public set destinationArn(value: string) {
    this._destinationArn = value;
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

  // owner_id - computed: true, optional: false, required: true
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // share_status - computed: true, optional: false, required: true
  public get shareStatus() {
    return this.getStringAttribute('share_status');
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
      destination_arn: this._destinationArn,
      name: this._name,
      tags: this._tags,
    };
  }
}
