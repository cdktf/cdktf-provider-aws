// https://www.terraform.io/docs/providers/aws/d/msk_broker_nodes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsMskBrokerNodesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_broker_nodes#cluster_arn DataAwsMskBrokerNodes#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_broker_nodes#id DataAwsMskBrokerNodes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataAwsMskBrokerNodesNodeInfoList {
}

export function dataAwsMskBrokerNodesNodeInfoListToTerraform(struct?: DataAwsMskBrokerNodesNodeInfoList): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsMskBrokerNodesNodeInfoListOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsMskBrokerNodesNodeInfoList | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsMskBrokerNodesNodeInfoList | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class DataAwsMskBrokerNodesNodeInfoListList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsMskBrokerNodesNodeInfoListOutputReference {
    return new DataAwsMskBrokerNodesNodeInfoListOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/msk_broker_nodes aws_msk_broker_nodes}
*/
export class DataAwsMskBrokerNodes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_msk_broker_nodes";

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
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterArn = config.clusterArn;
    this._id = config.id;
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

  // node_info_list - computed: true, optional: false, required: false
  private _nodeInfoList = new DataAwsMskBrokerNodesNodeInfoListList(this, "node_info_list", false);
  public get nodeInfoList() {
    return this._nodeInfoList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_arn: cdktf.stringToTerraform(this._clusterArn),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
