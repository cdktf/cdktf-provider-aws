// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Route 53
*/
export interface DataAwsRoute53DelegationSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_delegation_set#id DataAwsRoute53DelegationSet#id}
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_delegation_set aws_route53_delegation_set}
*/
export class DataAwsRoute53DelegationSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_route53_delegation_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/route53_delegation_set aws_route53_delegation_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsRoute53DelegationSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsRoute53DelegationSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_delegation_set',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // caller_reference - computed: true, optional: false, required: false
  public get callerReference() {
    return this.getStringAttribute('caller_reference');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name_servers - computed: true, optional: false, required: false
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
