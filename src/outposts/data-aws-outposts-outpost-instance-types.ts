// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Outposts
*/
export interface DataAwsOutpostsOutpostInstanceTypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_types#arn DataAwsOutpostsOutpostInstanceTypes#arn}
  */
  readonly arn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_types aws_outposts_outpost_instance_types}
*/
export class DataAwsOutpostsOutpostInstanceTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_outposts_outpost_instance_types";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/outposts_outpost_instance_types aws_outposts_outpost_instance_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsOutpostsOutpostInstanceTypesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsOutpostsOutpostInstanceTypesConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_outposts_outpost_instance_types',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._arn = config.arn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_types - computed: true, optional: false, required: false
  public get instanceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_types'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
    };
  }
}
