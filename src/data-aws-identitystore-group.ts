// https://www.terraform.io/docs/providers/aws/d/identitystore_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsIdentitystoreGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group.html#group_id DataAwsIdentitystoreGroup#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group.html#identity_store_id DataAwsIdentitystoreGroup#identity_store_id}
  */
  readonly identityStoreId: string;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group.html#filter DataAwsIdentitystoreGroup#filter}
  */
  readonly filter: DataAwsIdentitystoreGroupFilter[];
}
export interface DataAwsIdentitystoreGroupFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group.html#attribute_path DataAwsIdentitystoreGroup#attribute_path}
  */
  readonly attributePath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group.html#attribute_value DataAwsIdentitystoreGroup#attribute_value}
  */
  readonly attributeValue: string;
}

export function dataAwsIdentitystoreGroupFilterToTerraform(struct?: DataAwsIdentitystoreGroupFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_path: cdktf.stringToTerraform(struct!.attributePath),
    attribute_value: cdktf.stringToTerraform(struct!.attributeValue),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group.html aws_identitystore_group}
*/
export class DataAwsIdentitystoreGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_identitystore_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/identitystore_group.html aws_identitystore_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsIdentitystoreGroupConfig
  */
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
    return this._groupId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_store_id - computed: false, optional: false, required: true
  private _identityStoreId?: string; 
  public get identityStoreId() {
    return this.getStringAttribute('identity_store_id');
  }
  public set identityStoreId(value: string) {
    this._identityStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityStoreIdInput() {
    return this._identityStoreId;
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: DataAwsIdentitystoreGroupFilter[]; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsIdentitystoreGroupFilter[]) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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
