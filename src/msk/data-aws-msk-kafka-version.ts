// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Managed Streaming for Kafka
*/
export interface DataAwsMskKafkaVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_kafka_version.html#preferred_versions DataAwsMskKafkaVersion#preferred_versions}
  */
  readonly preferredVersions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/msk_kafka_version.html#version DataAwsMskKafkaVersion#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/msk_kafka_version.html aws_msk_kafka_version}
*/
export class DataAwsMskKafkaVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_msk_kafka_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/msk_kafka_version.html aws_msk_kafka_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsMskKafkaVersionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsMskKafkaVersionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_msk_kafka_version',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._preferredVersions = config.preferredVersions;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // preferred_versions - computed: false, optional: true, required: false
  private _preferredVersions?: string[]; 
  public get preferredVersions() {
    return this.getListAttribute('preferred_versions');
  }
  public set preferredVersions(value: string[]) {
    this._preferredVersions = value;
  }
  public resetPreferredVersions() {
    this._preferredVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredVersionsInput() {
    return this._preferredVersions;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      preferred_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredVersions),
      version: cdktf.stringToTerraform(this._version),
    };
  }
}
