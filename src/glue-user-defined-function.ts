// https://www.terraform.io/docs/providers/aws/r/glue_user_defined_function.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GlueUserDefinedFunctionConfig extends TerraformMetaArguments {
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

// Resource

export class GlueUserDefinedFunction extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // catalog_id - computed: false, optional: true, required: false
  private _catalogId?: string;
  public get catalogId() {
    return this._catalogId;
  }
  public set catalogId(value: string | undefined) {
    this._catalogId = value;
  }

  // class_name - computed: false, optional: false, required: true
  private _className: string;
  public get className() {
    return this._className;
  }
  public set className(value: string) {
    this._className = value;
  }

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName: string;
  public get databaseName() {
    return this._databaseName;
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // owner_name - computed: false, optional: false, required: true
  private _ownerName: string;
  public get ownerName() {
    return this._ownerName;
  }
  public set ownerName(value: string) {
    this._ownerName = value;
  }

  // owner_type - computed: false, optional: false, required: true
  private _ownerType: string;
  public get ownerType() {
    return this._ownerType;
  }
  public set ownerType(value: string) {
    this._ownerType = value;
  }

  // resource_uris - computed: false, optional: true, required: false
  private _resourceUris?: GlueUserDefinedFunctionResourceUris[];
  public get resourceUris() {
    return this._resourceUris;
  }
  public set resourceUris(value: GlueUserDefinedFunctionResourceUris[] | undefined) {
    this._resourceUris = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: this._catalogId,
      class_name: this._className,
      database_name: this._databaseName,
      name: this._name,
      owner_name: this._ownerName,
      owner_type: this._ownerType,
      resource_uris: this._resourceUris,
    };
  }
}
