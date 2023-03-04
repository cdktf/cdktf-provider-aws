// https://www.terraform.io/docs/providers/aws/d/msk_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsMskClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_cluster#cluster_name DataAwsMskCluster#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_cluster#id DataAwsMskCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_cluster#tags DataAwsMskCluster#tags}
  */
  readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/msk_cluster aws_msk_cluster}
*/
export class DataAwsMskCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_msk_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/msk_cluster aws_msk_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsMskClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsMskClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_msk_cluster',
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
    this._clusterName = config.clusterName;
    this._id = config.id;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bootstrap_brokers - computed: true, optional: false, required: false
  public get bootstrapBrokers() {
    return this.getStringAttribute('bootstrap_brokers');
  }

  // bootstrap_brokers_public_sasl_iam - computed: true, optional: false, required: false
  public get bootstrapBrokersPublicSaslIam() {
    return this.getStringAttribute('bootstrap_brokers_public_sasl_iam');
  }

  // bootstrap_brokers_public_sasl_scram - computed: true, optional: false, required: false
  public get bootstrapBrokersPublicSaslScram() {
    return this.getStringAttribute('bootstrap_brokers_public_sasl_scram');
  }

  // bootstrap_brokers_public_tls - computed: true, optional: false, required: false
  public get bootstrapBrokersPublicTls() {
    return this.getStringAttribute('bootstrap_brokers_public_tls');
  }

  // bootstrap_brokers_sasl_iam - computed: true, optional: false, required: false
  public get bootstrapBrokersSaslIam() {
    return this.getStringAttribute('bootstrap_brokers_sasl_iam');
  }

  // bootstrap_brokers_sasl_scram - computed: true, optional: false, required: false
  public get bootstrapBrokersSaslScram() {
    return this.getStringAttribute('bootstrap_brokers_sasl_scram');
  }

  // bootstrap_brokers_tls - computed: true, optional: false, required: false
  public get bootstrapBrokersTls() {
    return this.getStringAttribute('bootstrap_brokers_tls');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
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

  // kafka_version - computed: true, optional: false, required: false
  public get kafkaVersion() {
    return this.getStringAttribute('kafka_version');
  }

  // number_of_broker_nodes - computed: true, optional: false, required: false
  public get numberOfBrokerNodes() {
    return this.getNumberAttribute('number_of_broker_nodes');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // zookeeper_connect_string - computed: true, optional: false, required: false
  public get zookeeperConnectString() {
    return this.getStringAttribute('zookeeper_connect_string');
  }

  // zookeeper_connect_string_tls - computed: true, optional: false, required: false
  public get zookeeperConnectStringTls() {
    return this.getStringAttribute('zookeeper_connect_string_tls');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }
}
