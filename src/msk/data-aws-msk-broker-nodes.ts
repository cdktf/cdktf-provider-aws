// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Managed Streaming for Kafka
*/
export interface DataAwsMskBrokerNodesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_broker_nodes#cluster_arn DataAwsMskBrokerNodes#cluster_arn}
  */
  readonly clusterArn: string;
}
export class DataAwsMskBrokerNodesNodeInfoList extends cdktf.ComplexComputedList {

  // attached_eni_id - computed: true, optional: false, required: false
  public get attachedEniId() {
    return this.getStringAttribute('attached_eni_id');
  }

  // broker_id - computed: true, optional: false, required: false
  public get brokerId() {
    return this.getNumberAttribute('broker_id');
  }

  // client_subnet - computed: true, optional: false, required: false
  public get clientSubnet() {
    return this.getStringAttribute('client_subnet');
  }

  // client_vpc_ip_address - computed: true, optional: false, required: false
  public get clientVpcIpAddress() {
    return this.getStringAttribute('client_vpc_ip_address');
  }

  // endpoints - computed: true, optional: false, required: false
  public get endpoints() {
    return cdktf.Fn.tolist(this.getListAttribute('endpoints'));
  }

  // node_arn - computed: true, optional: false, required: false
  public get nodeArn() {
    return this.getStringAttribute('node_arn');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/msk_broker_nodes aws_msk_broker_nodes}
*/
export class DataAwsMskBrokerNodes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_msk_broker_nodes";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/msk_broker_nodes aws_msk_broker_nodes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsMskBrokerNodesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsMskBrokerNodesConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_msk_broker_nodes',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterArn = config.clusterArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_arn - computed: false, optional: false, required: true
  private _clusterArn?: string; 
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArnInput() {
    return this._clusterArn;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // node_info_list - computed: true, optional: false, required: false
  public nodeInfoList(index: string) {
    return new DataAwsMskBrokerNodesNodeInfoList(this, 'node_info_list', index, false);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_arn: cdktf.stringToTerraform(this._clusterArn),
    };
  }
}
