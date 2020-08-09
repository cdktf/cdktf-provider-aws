// https://www.terraform.io/docs/providers/aws/r/data_aws_iam_user.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsIamUserConfig extends TerraformMetaArguments {
  readonly userName: string;
}

// Resource

export class DataAwsIamUser extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsIamUserConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_user',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // path - computed: true, optional: false, required: true
  public get path() {
    return this.getStringAttribute('path');
  }

  // permissions_boundary - computed: true, optional: false, required: true
  public get permissionsBoundary() {
    return this.getStringAttribute('permissions_boundary');
  }

  // user_id - computed: true, optional: false, required: true
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // user_name - computed: false, optional: false, required: true
  private _userName: string;
  public get userName() {
    return this._userName;
  }
  public set userName(value: string) {
    this._userName = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      user_name: this._userName,
    };
  }
}
