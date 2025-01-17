// https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/ecs_clusters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEcsClustersConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/ecs_clusters aws_ecs_clusters}
*/
export class DataAwsEcsClusters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ecs_clusters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsEcsClusters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsEcsClusters to import
  * @param importFromId The id of the existing DataAwsEcsClusters that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/ecs_clusters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsEcsClusters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ecs_clusters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/data-sources/ecs_clusters aws_ecs_clusters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEcsClustersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsEcsClustersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_clusters',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.84.0',
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

  // cluster_arns - computed: true, optional: false, required: false
  public get clusterArns() {
    return this.getListAttribute('cluster_arns');
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
