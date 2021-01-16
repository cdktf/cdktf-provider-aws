// https://www.terraform.io/docs/providers/aws/r/data_aws_identitystore_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsIdentitystoreGroupConfig extends TerraformMetaArguments {
  readonly groupId?: string;
  readonly identityStoreId: string;
  /** filter block */
  readonly filter: DataAwsIdentitystoreGroupFilter[];
}
export interface DataAwsIdentitystoreGroupFilter {
  readonly attributePath: string;
  readonly attributeValue: string;
}

// Resource

export class DataAwsIdentitystoreGroup extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsIdentitystoreGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_identitystore_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._groupId = config.groupId;
    this._identityStoreId = config.identityStoreId;
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string;
  public get groupId() {
    return this._groupId ?? this.getStringAttribute('group_id');
  }
  public set groupId(value: string | undefined) {
    this._groupId = value;
  }

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

  // filter - computed: false, optional: false, required: true
  private _filter: DataAwsIdentitystoreGroupFilter[];
  public get filter() {
    return this._filter;
  }
  public set filter(value: DataAwsIdentitystoreGroupFilter[]) {
    this._filter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: this._groupId,
      identity_store_id: this._identityStoreId,
      filter: this._filter,
    };
  }
}
