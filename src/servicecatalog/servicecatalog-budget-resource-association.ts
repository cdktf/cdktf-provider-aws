// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Service Catalog
*/
export interface ServicecatalogBudgetResourceAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association.html#budget_name ServicecatalogBudgetResourceAssociation#budget_name}
  */
  readonly budgetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association.html#resource_id ServicecatalogBudgetResourceAssociation#resource_id}
  */
  readonly resourceId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association.html aws_servicecatalog_budget_resource_association}
*/
export class ServicecatalogBudgetResourceAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_servicecatalog_budget_resource_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_budget_resource_association.html aws_servicecatalog_budget_resource_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicecatalogBudgetResourceAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ServicecatalogBudgetResourceAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_servicecatalog_budget_resource_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._budgetName = config.budgetName;
    this._resourceId = config.resourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // budget_name - computed: false, optional: false, required: true
  private _budgetName?: string; 
  public get budgetName() {
    return this.getStringAttribute('budget_name');
  }
  public set budgetName(value: string) {
    this._budgetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetNameInput() {
    return this._budgetName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      budget_name: cdktf.stringToTerraform(this._budgetName),
      resource_id: cdktf.stringToTerraform(this._resourceId),
    };
  }
}
