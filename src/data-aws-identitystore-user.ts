// https://www.terraform.io/docs/providers/aws/r/data_aws_identitystore_user.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsIdentitystoreUserConfig extends cdktf.TerraformMetaArguments {
  readonly identityStoreId: string;
  readonly userId?: string;
  /** filter block */
  readonly filter: DataAwsIdentitystoreUserFilter[];
}
export interface DataAwsIdentitystoreUserFilter {
  readonly attributePath: string;
  readonly attributeValue: string;
}

function dataAwsIdentitystoreUserFilterToTerraform(struct?: DataAwsIdentitystoreUserFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute_path: cdktf.stringToTerraform(struct!.attributePath),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
  }
}


// Resource

export class DataAwsIdentitystoreUser extends cdktf.TerraformDataSource {

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
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_store_id - computed: false, optional: false, required: true
  private _identityStoreId: string;
  public get identityStoreId() {
    return this.getStringAttribute('identity_store_id');
  }
  public set identityStoreId(value: string) {
    this._identityStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityStoreIdInput() {
    return this._identityStoreId
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: string;
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // filter - computed: false, optional: false, required: true
  private _filter: DataAwsIdentitystoreUserFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsIdentitystoreUserFilter[]) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identity_store_id: cdktf.stringToTerraform(this._identityStoreId),
      user_id: cdktf.stringToTerraform(this._userId),
      filter: cdktf.listMapper(dataAwsIdentitystoreUserFilterToTerraform)(this._filter),
    };
  }
}
