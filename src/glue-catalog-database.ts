// https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlueCatalogDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#catalog_id GlueCatalogDatabase#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#description GlueCatalogDatabase#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#location_uri GlueCatalogDatabase#location_uri}
  */
  readonly locationUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#name GlueCatalogDatabase#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#parameters GlueCatalogDatabase#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * target_database block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#target_database GlueCatalogDatabase#target_database}
  */
  readonly targetDatabase?: GlueCatalogDatabaseTargetDatabase[];
}
export interface GlueCatalogDatabaseTargetDatabase {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#catalog_id GlueCatalogDatabase#catalog_id}
  */
  readonly catalogId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html#database_name GlueCatalogDatabase#database_name}
  */
  readonly databaseName: string;
}

function glueCatalogDatabaseTargetDatabaseToTerraform(struct?: GlueCatalogDatabaseTargetDatabase): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html aws_glue_catalog_database}
*/
export class GlueCatalogDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_glue_catalog_database";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_database.html aws_glue_catalog_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueCatalogDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: GlueCatalogDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_catalog_database',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._catalogId = config.catalogId;
    this._description = config.description;
    this._locationUri = config.locationUri;
    this._name = config.name;
    this._parameters = config.parameters;
    this._targetDatabase = config.targetDatabase;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string;
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location_uri - computed: true, optional: true, required: false
  private _locationUri?: string;
  public get locationUri() {
    return this.getStringAttribute('location_uri');
  }
  public set locationUri(value: string) {
    this._locationUri = value;
  }
  public resetLocationUri() {
    this._locationUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationUriInput() {
    return this._locationUri
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string } | cdktf.IResolvable;
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // target_database - computed: false, optional: true, required: false
  private _targetDatabase?: GlueCatalogDatabaseTargetDatabase[];
  public get targetDatabase() {
    return this.interpolationForAttribute('target_database') as any;
  }
  public set targetDatabase(value: GlueCatalogDatabaseTargetDatabase[] ) {
    this._targetDatabase = value;
  }
  public resetTargetDatabase() {
    this._targetDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDatabaseInput() {
    return this._targetDatabase
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      description: cdktf.stringToTerraform(this._description),
      location_uri: cdktf.stringToTerraform(this._locationUri),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      target_database: cdktf.listMapper(glueCatalogDatabaseTargetDatabaseToTerraform)(this._targetDatabase),
    };
  }
}
