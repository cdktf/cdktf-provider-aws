// https://www.terraform.io/docs/providers/aws/r/data_aws_identitystore_user.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsIdentitystoreUserConfig extends TerraformMetaArguments {
  readonly identityStoreId: string;
  readonly userId?: string;
  /** filter block */
  readonly filter: DataAwsIdentitystoreUserFilter[];
}
export interface DataAwsIdentitystoreUserFilter {
  readonly attributePath: string;
  readonly attributeValue: string;
}

// Resource

export class DataAwsIdentitystoreUser extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsIdentitystoreUserConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_identitystore_user',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._identityStoreId = config.identityStoreId;
    this._userId = config.userId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // identity_store_id - computed: false, optional: false, required: true
  private _identityStoreId: string;
  public get identityStoreId() {
    return this._identityStoreId;
  }
  public set identityStoreId(value: string) {
    this._identityStoreId = value;
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: string;
  public get userId() {
    return this._userId ?? this.getStringAttribute('user_id');
  }
  public set userId(value: string | undefined) {
    this._userId = value;
  }

  // user_name - computed: true, optional: false, required: true
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // filter - computed: false, optional: false, required: true
  private _filter: DataAwsIdentitystoreUserFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsIdentitystoreUserFilter[]) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identity_store_id: this._identityStoreId,
      user_id: this._userId,
      filter: this._filter,
    };
  }
}
