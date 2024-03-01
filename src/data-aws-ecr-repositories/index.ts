// https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/ecr_repositories
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEcrRepositoriesConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/ecr_repositories aws_ecr_repositories}
*/
export class DataAwsEcrRepositories extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ecr_repositories";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsEcrRepositories resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsEcrRepositories to import
  * @param importFromId The id of the existing DataAwsEcrRepositories that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/ecr_repositories#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsEcrRepositories to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ecr_repositories", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.39.0/docs/data-sources/ecr_repositories aws_ecr_repositories} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEcrRepositoriesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsEcrRepositoriesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ecr_repositories',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.39.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
