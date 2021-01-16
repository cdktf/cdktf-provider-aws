// https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueUserDefinedFunctionConfig extends cdktf.TerraformMetaArguments {
  readonly catalogId?: string;
  readonly className: string;
  readonly databaseName: string;
  readonly name: string;
  readonly ownerName: string;
  readonly ownerType: string;
  /** resource_uris block */
  readonly resourceUris?: GlueUserDefinedFunctionResourceUris[];
}
export interface GlueUserDefinedFunctionResourceUris {
  readonly resourceType: string;
  readonly uri: string;
}

function glueUserDefinedFunctionResourceUrisToTerraform(struct?: GlueUserDefinedFunctionResourceUris): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


// Resource

export class GlueUserDefinedFunction extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GlueUserDefinedFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_user_defined_function',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._catalogId = config.catalogId;
    this._className = config.className;
    this._databaseName = config.databaseName;
    this._name = config.name;
    this._ownerName = config.ownerName;
    this._ownerType = config.ownerType;
    this._resourceUris = config.resourceUris;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // catalog_id - computed: false, optional: true, required: false
  private _catalogId?: string;
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string ) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId
  }

  // class_name - computed: false, optional: false, required: true
  private _className: string;
  public get className() {
    return this.getStringAttribute('class_name');
  }
  public set className(value: string) {
    this._className = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classNameInput() {
    return this._className
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName: string;
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // owner_name - computed: false, optional: false, required: true
  private _ownerName: string;
  public get ownerName() {
    return this.getStringAttribute('owner_name');
  }
  public set ownerName(value: string) {
    this._ownerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerNameInput() {
    return this._ownerName
  }

  // owner_type - computed: false, optional: false, required: true
  private _ownerType: string;
  public get ownerType() {
    return this.getStringAttribute('owner_type');
  }
  public set ownerType(value: string) {
    this._ownerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerTypeInput() {
    return this._ownerType
  }

  // resource_uris - computed: false, optional: true, required: false
  private _resourceUris?: GlueUserDefinedFunctionResourceUris[];
  public get resourceUris() {
    return this.interpolationForAttribute('resource_uris') as any;
  }
  public set resourceUris(value: GlueUserDefinedFunctionResourceUris[] ) {
    this._resourceUris = value;
  }
  public resetResourceUris() {
    this._resourceUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUrisInput() {
    return this._resourceUris
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      class_name: cdktf.stringToTerraform(this._className),
      database_name: cdktf.stringToTerraform(this._databaseName),
      name: cdktf.stringToTerraform(this._name),
      owner_name: cdktf.stringToTerraform(this._ownerName),
      owner_type: cdktf.stringToTerraform(this._ownerType),
      resource_uris: cdktf.listMapper(glueUserDefinedFunctionResourceUrisToTerraform)(this._resourceUris),
    };
  }
}
