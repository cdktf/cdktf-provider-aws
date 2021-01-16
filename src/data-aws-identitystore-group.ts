// https://www.terraform.io/docs/providers/aws/r/data_aws_identitystore_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsIdentitystoreGroupConfig extends cdktf.TerraformMetaArguments {
  readonly groupId?: string;
  readonly identityStoreId: string;
  /** filter block */
  readonly filter: DataAwsIdentitystoreGroupFilter[];
}
export interface DataAwsIdentitystoreGroupFilter {
  readonly attributePath: string;
  readonly attributeValue: string;
}

function dataAwsIdentitystoreGroupFilterToTerraform(struct?: DataAwsIdentitystoreGroupFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute_path: cdktf.stringToTerraform(struct!.attributePath),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
  }
}


// Resource

export class DataAwsIdentitystoreGroup extends cdktf.TerraformDataSource {

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

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string;
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId
  }

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

  // filter - computed: false, optional: false, required: true
  private _filter: DataAwsIdentitystoreGroupFilter[];
  public get filter() {
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsIdentitystoreGroupFilter[]) {
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
      group_id: cdktf.stringToTerraform(this._groupId),
      identity_store_id: cdktf.stringToTerraform(this._identityStoreId),
      filter: cdktf.listMapper(dataAwsIdentitystoreGroupFilterToTerraform)(this._filter),
    };
  }
}
