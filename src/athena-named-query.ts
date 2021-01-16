// https://www.terraform.io/docs/providers/aws/r/athena_named_query.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AthenaNamedQueryConfig extends cdktf.TerraformMetaArguments {
  readonly database: string;
  readonly description?: string;
  readonly name: string;
  readonly query: string;
  readonly workgroup?: string;
}

// Resource

export class AthenaNamedQuery extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AthenaNamedQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_athena_named_query',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._database = config.database;
    this._description = config.description;
    this._name = config.name;
    this._query = config.query;
    this._workgroup = config.workgroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database - computed: false, optional: false, required: true
  private _database: string;
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database
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

  // query - computed: false, optional: false, required: true
  private _query: string;
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query
  }

  // workgroup - computed: false, optional: true, required: false
  private _workgroup?: string;
  public get workgroup() {
    return this.getStringAttribute('workgroup');
  }
  public set workgroup(value: string ) {
    this._workgroup = value;
  }
  public resetWorkgroup() {
    this._workgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workgroupInput() {
    return this._workgroup
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database: cdktf.stringToTerraform(this._database),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      query: cdktf.stringToTerraform(this._query),
      workgroup: cdktf.stringToTerraform(this._workgroup),
    };
  }
}
