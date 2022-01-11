// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Service Catalog
*/
export interface ServicecatalogTagOptionResourceAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association#resource_id ServicecatalogTagOptionResourceAssociation#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association#tag_option_id ServicecatalogTagOptionResourceAssociation#tag_option_id}
  */
  readonly tagOptionId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association aws_servicecatalog_tag_option_resource_association}
*/
export class ServicecatalogTagOptionResourceAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_servicecatalog_tag_option_resource_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_tag_option_resource_association aws_servicecatalog_tag_option_resource_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicecatalogTagOptionResourceAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ServicecatalogTagOptionResourceAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_servicecatalog_tag_option_resource_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._resourceId = config.resourceId;
    this._tagOptionId = config.tagOptionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // resource_created_time - computed: true, optional: false, required: false
  public get resourceCreatedTime() {
    return this.getStringAttribute('resource_created_time');
  }

  // resource_description - computed: true, optional: false, required: false
  public get resourceDescription() {
    return this.getStringAttribute('resource_description');
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

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // tag_option_id - computed: false, optional: false, required: true
  private _tagOptionId?: string; 
  public get tagOptionId() {
    return this.getStringAttribute('tag_option_id');
  }
  public set tagOptionId(value: string) {
    this._tagOptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagOptionIdInput() {
    return this._tagOptionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      resource_id: cdktf.stringToTerraform(this._resourceId),
      tag_option_id: cdktf.stringToTerraform(this._tagOptionId),
    };
  }
}
