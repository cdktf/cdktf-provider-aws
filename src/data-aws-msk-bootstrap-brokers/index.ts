/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/msk_bootstrap_brokers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsMskBootstrapBrokersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/msk_bootstrap_brokers#cluster_arn DataAwsMskBootstrapBrokers#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/msk_bootstrap_brokers#id DataAwsMskBootstrapBrokers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/msk_bootstrap_brokers aws_msk_bootstrap_brokers}
*/
export class DataAwsMskBootstrapBrokers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_msk_bootstrap_brokers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsMskBootstrapBrokers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsMskBootstrapBrokers to import
  * @param importFromId The id of the existing DataAwsMskBootstrapBrokers that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/msk_bootstrap_brokers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsMskBootstrapBrokers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_msk_bootstrap_brokers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.47.0/docs/data-sources/msk_bootstrap_brokers aws_msk_bootstrap_brokers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsMskBootstrapBrokersConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsMskBootstrapBrokersConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_msk_bootstrap_brokers',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.47.0',
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
    this._clusterArn = config.clusterArn;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // bootstrap_brokers_vpc_connectivity_sasl_iam - computed: true, optional: false, required: false
  public get bootstrapBrokersVpcConnectivitySaslIam() {
    return this.getStringAttribute('bootstrap_brokers_vpc_connectivity_sasl_iam');
  }

  // bootstrap_brokers_vpc_connectivity_sasl_scram - computed: true, optional: false, required: false
  public get bootstrapBrokersVpcConnectivitySaslScram() {
    return this.getStringAttribute('bootstrap_brokers_vpc_connectivity_sasl_scram');
  }

  // bootstrap_brokers_vpc_connectivity_tls - computed: true, optional: false, required: false
  public get bootstrapBrokersVpcConnectivityTls() {
    return this.getStringAttribute('bootstrap_brokers_vpc_connectivity_tls');
  }

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_arn: cdktf.stringToTerraform(this._clusterArn),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_arn: {
        value: cdktf.stringToHclTerraform(this._clusterArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
