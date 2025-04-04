// https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/securityhub_standards_control_associations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSecurityhubStandardsControlAssociationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/securityhub_standards_control_associations#security_control_id DataAwsSecurityhubStandardsControlAssociations#security_control_id}
  */
  readonly securityControlId: string;
}
export interface DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations {
}

export function dataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsToTerraform(struct?: DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsToHclTerraform(struct?: DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // association_status - computed: true, optional: false, required: false
  public get associationStatus() {
    return this.getStringAttribute('association_status');
  }

  // related_requirements - computed: true, optional: false, required: false
  public get relatedRequirements() {
    return this.getListAttribute('related_requirements');
  }

  // security_control_arn - computed: true, optional: false, required: false
  public get securityControlArn() {
    return this.getStringAttribute('security_control_arn');
  }

  // security_control_id - computed: true, optional: false, required: false
  public get securityControlId() {
    return this.getStringAttribute('security_control_id');
  }

  // standards_arn - computed: true, optional: false, required: false
  public get standardsArn() {
    return this.getStringAttribute('standards_arn');
  }

  // standards_control_description - computed: true, optional: false, required: false
  public get standardsControlDescription() {
    return this.getStringAttribute('standards_control_description');
  }

  // standards_control_title - computed: true, optional: false, required: false
  public get standardsControlTitle() {
    return this.getStringAttribute('standards_control_title');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_reason - computed: true, optional: false, required: false
  public get updatedReason() {
    return this.getStringAttribute('updated_reason');
  }
}

export class DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference {
    return new DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/securityhub_standards_control_associations aws_securityhub_standards_control_associations}
*/
export class DataAwsSecurityhubStandardsControlAssociations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securityhub_standards_control_associations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsSecurityhubStandardsControlAssociations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsSecurityhubStandardsControlAssociations to import
  * @param importFromId The id of the existing DataAwsSecurityhubStandardsControlAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/securityhub_standards_control_associations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsSecurityhubStandardsControlAssociations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_securityhub_standards_control_associations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/data-sources/securityhub_standards_control_associations aws_securityhub_standards_control_associations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSecurityhubStandardsControlAssociationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsSecurityhubStandardsControlAssociationsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_standards_control_associations',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.94.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._securityControlId = config.securityControlId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // security_control_id - computed: false, optional: false, required: true
  private _securityControlId?: string; 
  public get securityControlId() {
    return this.getStringAttribute('security_control_id');
  }
  public set securityControlId(value: string) {
    this._securityControlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityControlIdInput() {
    return this._securityControlId;
  }

  // standards_control_associations - computed: true, optional: false, required: false
  private _standardsControlAssociations = new DataAwsSecurityhubStandardsControlAssociationsStandardsControlAssociationsList(this, "standards_control_associations", false);
  public get standardsControlAssociations() {
    return this._standardsControlAssociations;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      security_control_id: cdktf.stringToTerraform(this._securityControlId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      security_control_id: {
        value: cdktf.stringToHclTerraform(this._securityControlId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
