// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Secrets Manager
*/
export interface DataAwsSecretsmanagerSecretsConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secrets#filter DataAwsSecretsmanagerSecrets#filter}
  */
  readonly filter?: DataAwsSecretsmanagerSecretsFilter[] | cdktf.IResolvable;
}
export interface DataAwsSecretsmanagerSecretsFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secrets#name DataAwsSecretsmanagerSecrets#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secrets#values DataAwsSecretsmanagerSecrets#values}
  */
  readonly values: string[];
}

export function dataAwsSecretsmanagerSecretsFilterToTerraform(struct?: DataAwsSecretsmanagerSecretsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secrets aws_secretsmanager_secrets}
*/
export class DataAwsSecretsmanagerSecrets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_secretsmanager_secrets";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secrets aws_secretsmanager_secrets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSecretsmanagerSecretsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsSecretsmanagerSecretsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_secretsmanager_secrets',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.15.1',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arns - computed: true, optional: false, required: false
  public get arns() {
    return cdktf.Fn.tolist(this.getListAttribute('arns'));
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsSecretsmanagerSecretsFilter[] | cdktf.IResolvable; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('filter')));
  }
  public set filter(value: DataAwsSecretsmanagerSecretsFilter[] | cdktf.IResolvable) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.listMapper(dataAwsSecretsmanagerSecretsFilterToTerraform)(this._filter),
    };
  }
}
