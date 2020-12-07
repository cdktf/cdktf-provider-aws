// https://www.terraform.io/docs/providers/aws/r/data_aws_msk_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsMskClusterConfig extends cdktf.TerraformMetaArguments {
  readonly clusterName: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class DataAwsMskCluster extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsMskClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_msk_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterName = config.clusterName;
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

  // bootstrap_brokers_tls - computed: true, optional: false, required: false
  public get bootstrapBrokersTls() {
    return this.getStringAttribute('bootstrap_brokers_tls');
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName: string;
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // zookeeper_connect_string - computed: true, optional: false, required: false
  public get zookeeperConnectString() {
    return this.getStringAttribute('zookeeper_connect_string');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
