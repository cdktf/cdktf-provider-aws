/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/servicecatalogappregistry_attribute_group_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicecatalogappregistryAttributeGroupAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/servicecatalogappregistry_attribute_group_association#application_id ServicecatalogappregistryAttributeGroupAssociation#application_id}
  */
  readonly applicationId: string;
  /**
  * ID of the attribute group to associate with the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/servicecatalogappregistry_attribute_group_association#attribute_group_id ServicecatalogappregistryAttributeGroupAssociation#attribute_group_id}
  */
  readonly attributeGroupId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/servicecatalogappregistry_attribute_group_association#region ServicecatalogappregistryAttributeGroupAssociation#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/servicecatalogappregistry_attribute_group_association aws_servicecatalogappregistry_attribute_group_association}
*/
export class ServicecatalogappregistryAttributeGroupAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_servicecatalogappregistry_attribute_group_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServicecatalogappregistryAttributeGroupAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicecatalogappregistryAttributeGroupAssociation to import
  * @param importFromId The id of the existing ServicecatalogappregistryAttributeGroupAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/servicecatalogappregistry_attribute_group_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicecatalogappregistryAttributeGroupAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_servicecatalogappregistry_attribute_group_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/servicecatalogappregistry_attribute_group_association aws_servicecatalogappregistry_attribute_group_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicecatalogappregistryAttributeGroupAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ServicecatalogappregistryAttributeGroupAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_servicecatalogappregistry_attribute_group_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.5.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._attributeGroupId = config.attributeGroupId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // attribute_group_id - computed: false, optional: false, required: true
  private _attributeGroupId?: string; 
  public get attributeGroupId() {
    return this.getStringAttribute('attribute_group_id');
  }
  public set attributeGroupId(value: string) {
    this._attributeGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeGroupIdInput() {
    return this._attributeGroupId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      attribute_group_id: cdktf.stringToTerraform(this._attributeGroupId),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_group_id: {
        value: cdktf.stringToHclTerraform(this._attributeGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
