// https://www.terraform.io/docs/providers/aws/r/glacier_vault.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlacierVaultConfig extends cdktf.TerraformMetaArguments {
  readonly accessPolicy?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** notification block */
  readonly notification?: GlacierVaultNotification[];
}
export interface GlacierVaultNotification {
  readonly events: string[];
  readonly snsTopic: string;
}

function glacierVaultNotificationToTerraform(struct?: GlacierVaultNotification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.events),
    sns_topic: cdktf.stringToTerraform(struct!.snsTopic),
  }
}


// Resource

export class GlacierVault extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GlacierVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glacier_vault',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessPolicy = config.accessPolicy;
    this._name = config.name;
    this._tags = config.tags;
    this._notification = config.notification;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy - computed: false, optional: true, required: false
  private _accessPolicy?: string;
  public get accessPolicy() {
    return this.getStringAttribute('access_policy');
  }
  public set accessPolicy(value: string ) {
    this._accessPolicy = value;
  }
  public resetAccessPolicy() {
    this._accessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyInput() {
    return this._accessPolicy
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // notification - computed: false, optional: true, required: false
  private _notification?: GlacierVaultNotification[];
  public get notification() {
    return this.interpolationForAttribute('notification') as any;
  }
  public set notification(value: GlacierVaultNotification[] ) {
    this._notification = value;
  }
  public resetNotification() {
    this._notification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policy: cdktf.stringToTerraform(this._accessPolicy),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      notification: cdktf.listMapper(glacierVaultNotificationToTerraform)(this._notification),
    };
  }
}
