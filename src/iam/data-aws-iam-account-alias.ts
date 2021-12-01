// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Identity and Access Management
*/
export interface DataAwsIamAccountAliasConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_account_alias.html aws_iam_account_alias}
*/
export class DataAwsIamAccountAlias extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_iam_account_alias";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_account_alias.html aws_iam_account_alias} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsIamAccountAliasConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsIamAccountAliasConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_account_alias',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_alias - computed: true, optional: false, required: false
  public get accountAlias() {
    return this.getStringAttribute('account_alias');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
