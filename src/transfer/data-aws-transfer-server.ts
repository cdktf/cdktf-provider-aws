// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Transfer
*/
export interface DataAwsTransferServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/transfer_server.html#server_id DataAwsTransferServer#server_id}
  */
  readonly serverId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/transfer_server.html aws_transfer_server}
*/
export class DataAwsTransferServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_transfer_server";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/transfer_server.html aws_transfer_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsTransferServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsTransferServerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_transfer_server',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._serverId = config.serverId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // endpoint_type - computed: true, optional: false, required: false
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_provider_type - computed: true, optional: false, required: false
  public get identityProviderType() {
    return this.getStringAttribute('identity_provider_type');
  }

  // invocation_role - computed: true, optional: false, required: false
  public get invocationRole() {
    return this.getStringAttribute('invocation_role');
  }

  // logging_role - computed: true, optional: false, required: false
  public get loggingRole() {
    return this.getStringAttribute('logging_role');
  }

  // protocols - computed: true, optional: false, required: false
  public get protocols() {
    return this.getListAttribute('protocols');
  }

  // security_policy_name - computed: true, optional: false, required: false
  public get securityPolicyName() {
    return this.getStringAttribute('security_policy_name');
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      server_id: cdktf.stringToTerraform(this._serverId),
    };
  }
}
