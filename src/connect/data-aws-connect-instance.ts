// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Connect
*/
export interface DataAwsConnectInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_instance.html#instance_alias DataAwsConnectInstance#instance_alias}
  */
  readonly instanceAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_instance.html#instance_id DataAwsConnectInstance#instance_id}
  */
  readonly instanceId?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_instance.html aws_connect_instance}
*/
export class DataAwsConnectInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_connect_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/connect_instance.html aws_connect_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsConnectInstanceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsConnectInstanceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_connect_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instanceAlias = config.instanceAlias;
    this._instanceId = config.instanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_resolve_best_voices_enabled - computed: true, optional: false, required: false
  public get autoResolveBestVoicesEnabled() {
    return this.getBooleanAttribute('auto_resolve_best_voices_enabled') as any;
  }

  // contact_flow_logs_enabled - computed: true, optional: false, required: false
  public get contactFlowLogsEnabled() {
    return this.getBooleanAttribute('contact_flow_logs_enabled') as any;
  }

  // contact_lens_enabled - computed: true, optional: false, required: false
  public get contactLensEnabled() {
    return this.getBooleanAttribute('contact_lens_enabled') as any;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // early_media_enabled - computed: true, optional: false, required: false
  public get earlyMediaEnabled() {
    return this.getBooleanAttribute('early_media_enabled') as any;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_management_type - computed: true, optional: false, required: false
  public get identityManagementType() {
    return this.getStringAttribute('identity_management_type');
  }

  // inbound_calls_enabled - computed: true, optional: false, required: false
  public get inboundCallsEnabled() {
    return this.getBooleanAttribute('inbound_calls_enabled') as any;
  }

  // instance_alias - computed: true, optional: true, required: false
  private _instanceAlias?: string; 
  public get instanceAlias() {
    return this.getStringAttribute('instance_alias');
  }
  public set instanceAlias(value: string) {
    this._instanceAlias = value;
  }
  public resetInstanceAlias() {
    this._instanceAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceAliasInput() {
    return this._instanceAlias;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // outbound_calls_enabled - computed: true, optional: false, required: false
  public get outboundCallsEnabled() {
    return this.getBooleanAttribute('outbound_calls_enabled') as any;
  }

  // service_role - computed: true, optional: false, required: false
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_alias: cdktf.stringToTerraform(this._instanceAlias),
      instance_id: cdktf.stringToTerraform(this._instanceId),
    };
  }
}
