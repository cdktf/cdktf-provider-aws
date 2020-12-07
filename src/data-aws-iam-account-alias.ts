// https://www.terraform.io/docs/providers/aws/r/data_aws_iam_account_alias.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsIamAccountAliasConfig extends cdktf.TerraformMetaArguments {
}

// Resource

export class DataAwsIamAccountAlias extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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
