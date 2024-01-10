// https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/athena_named_query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsAthenaNamedQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/athena_named_query#id DataAwsAthenaNamedQuery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/athena_named_query#name DataAwsAthenaNamedQuery#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/athena_named_query#workgroup DataAwsAthenaNamedQuery#workgroup}
  */
  readonly workgroup?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/athena_named_query aws_athena_named_query}
*/
export class DataAwsAthenaNamedQuery extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_athena_named_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsAthenaNamedQuery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsAthenaNamedQuery to import
  * @param importFromId The id of the existing DataAwsAthenaNamedQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/athena_named_query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsAthenaNamedQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_athena_named_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/data-sources/athena_named_query aws_athena_named_query} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsAthenaNamedQueryConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsAthenaNamedQueryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_athena_named_query',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.31.0',
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
    this._id = config.id;
    this._name = config.name;
    this._workgroup = config.workgroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // querystring - computed: true, optional: false, required: false
  public get querystring() {
    return this.getStringAttribute('querystring');
  }

  // workgroup - computed: false, optional: true, required: false
  private _workgroup?: string; 
  public get workgroup() {
    return this.getStringAttribute('workgroup');
  }
  public set workgroup(value: string) {
    this._workgroup = value;
  }
  public resetWorkgroup() {
    this._workgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workgroupInput() {
    return this._workgroup;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      workgroup: cdktf.stringToTerraform(this._workgroup),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workgroup: {
        value: cdktf.stringToHclTerraform(this._workgroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
